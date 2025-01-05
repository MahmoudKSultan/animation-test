"use client";
import React, { useState } from "react";
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
import { useParams } from "next/navigation";

// Import the links array
export const links = [
  { href: "/", text: "main" },
  { href: "/our-story", text: "ourStory" },
  { href: "/board-of-directors", text: "boardOfDirectors" },
  { href: "/blog", text: "blog" },
  { href: "#contact", text: "contactUs" },
];

function Navbar() {
  const t = useTranslations("navbar"); // Access translations under the "navbar" key
  const { setTheme, theme } = useTheme();
  const { lng } = useParams<{ lng: string }>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };
  return (
    <nav
      className={cn(
        `py-2 w-full z-50 dark:border-b dark:border-gray-800 shadow-md   `
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href={`/${lng}`} className="flex items-center  " locale={lng}>
            <Image
              src="/assets/images/logos/main-logo.png"
              alt="saudina logo"
              width={150}
              height={150}
              quality={100} // Higher quality
            />
            </Link>
            <div className="hidden md:flex gap-6 text-lg font-medium">
              {links.map((link) => (
                <Link
                  href={`/${lng}${link.href}`}
                  key={link.href}
                  className={cn(
                    "text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  )}
                  locale={lng}
                >
                  {t(link.text)} {/* Resolve translation using the key */}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <SiteConfiguration setTheme={setTheme} theme={theme as string} />
            <Sheet>
              <SheetTrigger
                onClick={() => setIsMenuOpen(true)}
                className="block md:hidden w-10 h-10"
              >
                <Menu className="h-7 w-7 mx-auto" />
              </SheetTrigger>
              {isMenuOpen && (
                <SheetContent
                  className="border-secondary"
                  // onDismiss={() => setIsMenuOpen(false)} // Optional: if Sheet supports this
                >
                  <div className="flex flex-col h-full">
                    <ul className="flex flex-col items-center flex-1 gap-3 mt-5">
                      {links.map((link) => (
                        <Link
                          href={`/${lng}${link.href}`}
                          key={link.href}
                          className={cn("text-black dark:text-white text-2xl")}
                          locale={lng}
                          onClick={handleLinkClick} // Close menu on link click
                        >
                          {t(link.text)}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </SheetContent>
              )}
            </Sheet>
          </div>
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
