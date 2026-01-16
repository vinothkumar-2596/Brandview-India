"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { adminFetch, isAnalyst } from "@/lib/adminApi";

export function useAdminDashboard(params: { from?: string; to?: string } = {}) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = useMemo(() => ({ ...params }), [params?.from, params?.to]);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await adminFetch("/api/admin/dashboard/summary", {
        query,
      });
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

  return {
    data,
    error,
    isLoading,
    refetch: load,
    canMutate: !isAnalyst(),
  };
}
