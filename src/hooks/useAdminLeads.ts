"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { adminFetch, isAnalyst } from "@/lib/adminApi";

type LeadQuery = {
  status?: string;
  source?: string;
  from?: string;
  to?: string;
  search?: string;
  page?: number;
  limit?: number;
};

export function useAdminLeads(params: LeadQuery = {}) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = useMemo(() => ({ ...params }), [
    params?.status,
    params?.source,
    params?.from,
    params?.to,
    params?.search,
    params?.page,
    params?.limit,
  ]);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await adminFetch("/api/admin/leads", { query });
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
