export async function sendLeadToWhatsAppWebhook(lead: any) {
  const url = process.env.LEAD_WHATSAPP_WEBHOOK_URL;
  if (!url) return;

  const secret = process.env.LEAD_WHATSAPP_WEBHOOK_SECRET;

  const payload = {
    type: "new_lead",
    lead: {
      id: lead._id?.toString?.() ?? lead.id,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      message: lead.message,
      source: lead.source,
      pageUrl: lead.pageUrl,
      utmSource: lead.utmSource,
      utmMedium: lead.utmMedium,
      utmCampaign: lead.utmCampaign,
      gclid: lead.gclid,
      createdAt: lead.createdAt,
    },
  };

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(secret ? { "X-Webhook-Secret": secret } : {}),
    },
    body: JSON.stringify(payload),
  });
}
