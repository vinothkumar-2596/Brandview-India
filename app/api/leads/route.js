import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongo";
import { sendLeadToWhatsAppWebhook } from "@/lib/whatsappWebhook";

function handleCORS(response) {
  response.headers.set(
    "Access-Control-Allow-Origin",
    process.env.CORS_ORIGINS || "*"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const lead = {
      name: body?.name,
      email: body?.email,
      phone: body?.phone,
      message: body?.message,
      source: body?.source,
      pageUrl: body?.pageUrl,
      utmSource: body?.utmSource,
      utmMedium: body?.utmMedium,
      utmCampaign: body?.utmCampaign,
      utmTerm: body?.utmTerm,
      utmContent: body?.utmContent,
      gclid: body?.gclid,
      fbclid: body?.fbclid,
      status: body?.status || "new",
      createdAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection("leads").insertOne(lead);
    const savedLead = { ...lead, _id: result.insertedId };

    sendLeadToWhatsAppWebhook(savedLead).catch(() => {});

    return handleCORS(NextResponse.json(savedLead, { status: 201 }));
  } catch (error) {
    return handleCORS(
      NextResponse.json({ error: "Internal server error" }, { status: 500 })
    );
  }
}
