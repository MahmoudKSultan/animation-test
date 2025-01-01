import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
// import { createMiddleware } from "next-intl";
import type { NextRequest } from "next/server";

// Create middleware for next-intl localization
const intlMiddleware = createMiddleware({
  locales: ["ar", "en", "zh"],
  defaultLocale: "ar",
  localeDetection: false, // Set localeDetection to false since we handle it manually
});

export function middleware(request: NextRequest) {
  const locales = ["ar", "en", "zh"];
  const { pathname } = request.nextUrl;

  // Only match routes that are user-facing pages (not API or static files)
  if (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/static/")
  ) {
    return NextResponse.next();
  }

  // Split the pathname into segments to detect if a locale is already included
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = pathSegments[0];

  // If no locale is found in the URL, redirect to the default locale (or the detected one)
  if (!locales.includes(currentLocale)) {
    const defaultLocale = "ar"; // Your default locale
    const newPathname = `/${defaultLocale}${pathname}`; // Redirect to the default locale path
    const url = new URL(newPathname, request.url);
    return NextResponse.redirect(url);
  }

  // Proceed with the intl middleware logic if locale is present in the URL
  return intlMiddleware(request);
}

export const config = {
  // Match only user-facing pages (excluding static, API, and Next.js internal paths)
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
