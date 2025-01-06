import { LocalePrefix } from "next-intl/routing";

export const AVAILABLE_LOCALES = ["en", "ar", "zh"] as const;
export const DEFAULT_LOCALE = "ar";

export const localePrefix = "always" satisfies LocalePrefix;
export const locales = AVAILABLE_LOCALES;

// Define the keys of your pathnames
// type PathnameKeys = "/";

export const pathnames = {
  "/": "/",
};
