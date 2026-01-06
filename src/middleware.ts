// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const maintenanceMode = false;
  if (maintenanceMode) {
    return NextResponse.rewrite(new URL("/maintenance", req.url), {
      status: 503,
    });
  }

  return NextResponse.next();
}
