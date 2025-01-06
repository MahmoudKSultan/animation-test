//i18n.ts
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales: string[] = ["ar", "en", "zh"];

export default getRequestConfig(async ({ locale }) => {
  // eslint-disable-next-line
  if (!locales.includes(locale as any)) notFound();

  return {
    // messages: (await import(`../content/${locale}.json`)).default,
  };
});
