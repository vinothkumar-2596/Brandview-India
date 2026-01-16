export type TrackEventName =
  | "page_view"
  | "cta_click"
  | "form_view"
  | "form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "email_click";

function getQueryParams() {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);

  const utmSource = sp.get("utm_source") || undefined;
  const utmMedium = sp.get("utm_medium") || undefined;
  const utmCampaign = sp.get("utm_campaign") || undefined;
  const utmTerm = sp.get("utm_term") || undefined;
  const utmContent = sp.get("utm_content") || undefined;

  const gclid = sp.get("gclid") || undefined;
  const fbclid = sp.get("fbclid") || undefined;

  return { utmSource, utmMedium, utmCampaign, utmTerm, utmContent, gclid, fbclid };
}

function getSessionId() {
  if (typeof window === "undefined") return undefined;
  const key = "site_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export async function trackEvent(
  eventName: TrackEventName,
  extra?: Record<string, any>
) {
  try {
    const payload = {
      eventName,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
      sessionId: getSessionId(),
      ...getQueryParams(),
      ...extra,
    };

    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify(payload),
    });
  } catch {
    // silent fail
  }
}
