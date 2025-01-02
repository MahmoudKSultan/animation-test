import { clsx, type ClassValue } from "clsx";
import { createTranslator } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  const { lng } = params;

  // Load translations for the specific locale
  const messages = (await import(`../../messages/${lng}.json`)).default;
  console.log(lng);
  console.log(messages);

  // Create a translator instance
  const t = createTranslator({ locale: lng, messages });

  // Return the metadata structure
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: `https://example.com/${lng}`, // Adjust this based on your site structure
    },
    twitter: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
  };
}
