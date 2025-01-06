import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/i18n/config";

// Redirect the user to the default locale when `/` is requested
export default function RootPage() {
  redirect("/" + DEFAULT_LOCALE);
}
