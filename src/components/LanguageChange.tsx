"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation"; // no need for usePathname here

export function LanguageChange() {
  const router = useRouter();
  const pathname = usePathname();
  const language = pathname.slice(1, 3);
  // Function to handle language change
  const handleLanguageChange = (value: string) => {
    // Redirect to the new language URL
    router.push(
      `/${value}${window.location.pathname.replace(/^\/[a-z]{2}/, "")}`
    );
  };

  return (
    <Select defaultValue={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="flex items-center rounded-full border-2 max-w-fit space-x-3 pr-2 cursor-pointer focus:ring-transparent">
        <img
          alt="Globe"
          src="https://onwardticket.com/static/img/globe-language.svg"
          className="py-2"
        />
        <p className="text-blue-dark bg-transparent font-bold">
          <SelectValue />
        </p>
        <img
          alt="Chevron"
          src="https://onwardticket.com/static/img/chevron-down-language.svg"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">عربي</SelectItem>
          <SelectItem value="zh">中国人</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function useChangeLanguage() {
  const pathname = usePathname();
  console.log(pathname);
  React.useEffect(() => {
    if (pathname.includes("ar")) {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      console.log("ar");
    } else {
      document.documentElement.lang = pathname.slice(1, 3);
      document.documentElement.dir = "ltr";
      console.log("en");
    }
  }, [pathname]);
}

export function LanguageProvider() {
  useChangeLanguage();
  return null;
}
