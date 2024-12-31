"use client";
import React from "react";
import Container from "./Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LanguageChange } from "./LanguageChange";

// Import the links array
export const links = [
  { href: "/our-story", text: "ourStory" },
  { href: "/board-of-directors", text: "boardOfDirectors" },
  { href: "/blog", text: "blog" },
  { href: "#contact", text: "contactUs" },
];

function Navbar() {
  const t = useTranslations("navbar"); // Access translations under the "navbar" key
  const { setTheme, theme } = useTheme();

  return (
    <nav
      className={cn(
        `py-2 w-full z-50 dark:border-b dark:border-gray-800 shadow-md`
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center ltr:-ml-10 rtl:-mr-10 ">
              <Image
                src="/assets/images/logos/main-logo.png"
                alt="saudina logo"
                width={150}
                height={70}
                className=""
              />
            </Link>
            <div className="hidden md:flex gap-3 font-bold">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={cn(
                    "text-gray-400 hover:text-black dark:hover:text-white duration-200"
                  )}
                >
                  {t(link.text)} {/* Resolve translation using the key */}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <SiteConfiguration setTheme={setTheme} theme={theme as string} />
          </div>
          <Sheet>
            <SheetTrigger className="block md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="border-secondary">
              <div className="flex flex-col h-full">
                <ul className="flex flex-col items-center flex-1 gap-3 mt-5">
                  {links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={cn("text-black dark:text-white text-2xl")}
                    >
                      {t(link.text)}
                    </Link>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-2">
                  <SiteConfiguration
                    setTheme={setTheme}
                    theme={theme as string}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
}
function SiteConfiguration({
  setTheme,
  theme,
}: {
  setTheme: (value: React.SetStateAction<string>) => void;
  theme: string;
}) {
  return (
    <>
      {/* Language Switcher */}
      <LanguageChange />

      {/* Dark Mode Toggle */}
      <Button
        size={"icon"}
        variant={"outline"}
        className="rounded-full hover:bg-muted bg-background dark:bg-background"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </>
  );
}
export default Navbar;
