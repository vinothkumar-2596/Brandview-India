"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

export function useSeoMetrics(params: { from?: string; to?: string } = {}) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = useMemo(() => ({ ...params }), [params?.from, params?.to]);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await adminFetch("/api/admin/seo/daily", { query });
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    load().catch(() => {});
  }, [load]);

  return { data, error, isLoading, refetch: load };
}
