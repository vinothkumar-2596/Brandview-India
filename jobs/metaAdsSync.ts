import { getDb } from "@/lib/mongo";

type MetaAdsSyncParams = {
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

function sumConversions(actions: any[] = []) {
  return actions.reduce((total, action) => {
    const type = action.action_type || "";
    if (type.includes("lead") || type.includes("conversion") || type.includes("purchase")) {
      return total + Number(action.value || 0);
    }
    return total;
  }, 0);
}

async function fetchMetaInsights(from: string, to: string) {
  const accessToken = process.env.META_ACCESS_TOKEN;
  const adAccountId = process.env.META_AD_ACCOUNT_ID;
  const version = process.env.META_API_VERSION || "v20.0";

  if (!accessToken || !adAccountId) {
    throw new Error("Meta access token or ad account ID is missing");
  }

  const url = new URL(`https://graph.facebook.com/${version}/${adAccountId}/insights`);
  url.searchParams.set(
    "fields",
    "campaign_name,impressions,clicks,spend,actions,date_start"
  );
  url.searchParams.set("level", "campaign");
  url.searchParams.set("time_range[since]", from);
  url.searchParams.set("time_range[until]", to);
  url.searchParams.set("limit", "5000");
  url.searchParams.set("access_token", accessToken);

  const response = await fetch(url.toString());
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to fetch Meta Ads insights");
  }

  const json = await response.json();
  return json.data || [];
}

export async function syncMetaAdsDaily(params: MetaAdsSyncParams = {}) {
  const range = getDefaultRange();
  const from = params.from || range.from;
  const to = params.to || range.to;

  const rows = await fetchMetaInsights(from, to);
  if (!rows.length) {
    return { ok: true, count: 0 };
  }

  const db = await getDb();
  const collection = db.collection("AdsMetricDaily");

  const operations = rows.map((row: any) => ({
    updateOne: {
      filter: {
        platform: "meta",
        date: row.date_start,
        campaignName: row.campaign_name,
      },
      update: {
        $set: {
          platform: "meta",
          date: row.date_start,
          campaignName: row.campaign_name,
          impressions: Number(row.impressions || 0),
          clicks: Number(row.clicks || 0),
          cost: Number(row.spend || 0),
          conversions: sumConversions(row.actions || []),
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
