"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export default function TrackingBootstrap() {
  useEffect(() => {
    trackEvent("page_view");
  }, []);
  return null;
}
