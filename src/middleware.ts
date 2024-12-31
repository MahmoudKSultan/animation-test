//middleware.ts
import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ["ar", "en", "zh"],

  // Default locale if no match
  defaultLocale: "ar",
  localeDetection: false,
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|zh|en)/:page*"],
};
