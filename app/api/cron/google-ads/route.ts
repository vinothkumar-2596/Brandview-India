import { NextResponse } from "next/server";
import { syncGoogleAdsDaily } from "@/jobs/googleAdsSync";

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  const authHeader = request.headers.get("authorization") || "";
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const token = bearer || request.headers.get("x-cron-secret") || "";
  return token === secret;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const result = await syncGoogleAdsDaily({
    from: body?.from,
    to: body?.to,
  });

  return NextResponse.json(result);
}
