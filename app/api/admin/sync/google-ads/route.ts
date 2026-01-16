import { NextResponse } from "next/server";
import { requireRole } from "@/lib/adminAuth";
import { syncGoogleAdsDaily } from "@/jobs/googleAdsSync";

export async function POST(request: Request) {
  const authError = requireRole(request, ["SUPER_ADMIN"]);
  if (authError) return authError;

  const body = await request.json().catch(() => ({}));
  const result = await syncGoogleAdsDaily({
    from: body?.from,
    to: body?.to,
  });

  return NextResponse.json(result);
}
