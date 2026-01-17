type AdminQuery = Record<string, string | number | boolean | undefined | null>;

type AdminFetchOptions = RequestInit & {
  query?: AdminQuery;
};

function getStorageValue(key: string) {
  if (typeof window === "undefined") return undefined;
  return (
    window.localStorage.getItem(key) ||
    window.sessionStorage.getItem(key) ||
    undefined
  );
}

export function getUserRole() {
  return getStorageValue("user_role");
}

export function isAnalyst() {
  return getUserRole() === "ANALYST";
}

function getAuthToken() {
  return getStorageValue("auth_token");
}

function buildUrl(path: string, query?: AdminQuery) {
  const base = process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL;
  const origin =
    typeof window !== "undefined" ? window.location.origin : "http://localhost";
  const url = new URL(path, base || origin);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;
      url.searchParams.set(key, String(value));
    });
  }

  return url.toString();
}

export async function adminFetch<T = any>(
  path: string,
  options: AdminFetchOptions = {}
) {
  const { query, headers, ...rest } = options;
  const token = getAuthToken();
  const response = await fetch(buildUrl(path, query), {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers || {}),
    },
    credentials: "include",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }

  if (response.status === 204) return null as T;
  return (await response.json()) as T;
}
