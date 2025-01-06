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
import Image from "next/image";

export function LanguageChange() {
  const router = useRouter();
  const pathname = usePathname();
  const language = pathname.slice(1, 3);
  // Function to handle language change
  const handleLanguageChange = (value: string) => {
    // Redirect to the new language URL
    router.push(`/${value}${pathname.slice(3)}`);
  };

  return (
    <Select defaultValue={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="flex items-center max-w-fit cursor-pointer focus:ring-transparent border-none">
        <p className="bg-transparent text-muted font-bold">
          <SelectValue />
        </p>
      </SelectTrigger>
      <SelectContent className="w-fit  dark:bg-muted">
        <SelectGroup>
          <SelectItem value="en">
            <Image
              src="/assets/images/flags/UK-flag.webp"
              width={24}
              height={16}
              alt="uk flag"
              className="w-6 h-4"
              priority
            />
          </SelectItem>
          <SelectItem value="ar">
            <Image
              src="/assets/images/flags/SA-flag.webp"
              width={24}
              height={16}
              alt="saudi arabia flag"
              priority
            />
          </SelectItem>
          <SelectItem value="zh">
            {" "}
            <Image
              src="/assets/images/flags/CH-flag.webp"
              width={24}
              height={16}
              alt="china flag"
              priority
            />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function useChangeLanguage() {
  const pathname = usePathname();

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
