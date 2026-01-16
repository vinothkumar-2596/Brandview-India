import { getDb } from "@/lib/mongo";

type GoogleAdsSyncParams = {
  from?: string;
  to?: string;
};

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getDefaultRange() {
  const now = new Date();
  const yesterday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1)
  );
  const day = formatDate(yesterday);
  return { from: day, to: day };
}

async function getAccessToken() {
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Google Ads OAuth credentials are missing");
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to refresh Google Ads access token");
  }

  const json = await response.json();
  return json.access_token as string;
}

async function fetchGoogleAdsMetrics(from: string, to: string) {
  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID;
  const loginCustomerId = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;

  if (!developerToken || !customerId) {
    throw new Error("Google Ads developer token or customer ID is missing");
  }

  const accessToken = await getAccessToken();
  const query = `
    SELECT
      campaign.name,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      segments.date
    FROM campaign
    WHERE segments.date BETWEEN '${from}' AND '${to}'
  `;

  const response = await fetch(
    `https://googleads.googleapis.com/v16/customers/${customerId}/googleAds:search`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": developerToken,
        ...(loginCustomerId ? { "login-customer-id": loginCustomerId } : {}),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, page_size: 1000 }),
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to fetch Google Ads metrics");
  }

  const json = await response.json();
  return json.results || [];
}

export async function syncGoogleAdsDaily(params: GoogleAdsSyncParams = {}) {
  const range = getDefaultRange();
  const from = params.from || range.from;
  const to = params.to || range.to;

  const rows = await fetchGoogleAdsMetrics(from, to);
  if (!rows.length) {
    return { ok: true, count: 0 };
  }

  const db = await getDb();
  const collection = db.collection("AdsMetricDaily");

  const operations = rows.map((row: any) => ({
    updateOne: {
      filter: {
        platform: "google",
        date: row.segments?.date,
        campaignName: row.campaign?.name,
      },
      update: {
        $set: {
          platform: "google",
          date: row.segments?.date,
          campaignName: row.campaign?.name,
          impressions: Number(row.metrics?.impressions || 0),
          clicks: Number(row.metrics?.clicks || 0),
          cost: Number(row.metrics?.costMicros || 0) / 1_000_000,
          conversions: Number(row.metrics?.conversions || 0),
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      upsert: true,
    },
  }));

  const result = await collection.bulkWrite(operations);
  return { ok: true, count: result.upsertedCount + result.modifiedCount };
}
