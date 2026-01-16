import { NextResponse } from "next/server";

export function getUserRoleFromRequest(request: Request) {
  return (
    request.headers.get("x-user-role") ||
    request.headers.get("x-role") ||
    undefined
  );
}

export function requireRole(request: Request, roles: string[]) {
  const role = getUserRoleFromRequest(request);
  if (!role || !roles.includes(role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}
