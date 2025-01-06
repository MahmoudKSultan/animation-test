import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { AVAILABLE_LOCALES } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!AVAILABLE_LOCALES.includes(locale as "en" | "ar" | "zh")) {
    return notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
