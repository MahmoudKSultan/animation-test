"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import { LanguageChange } from "./LanguageChange";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  {
    href: "/our-story",
    text: "Our Story",
  },
  {
    href: "/managers",
    text: "Managers",
  },
];

function Navbar() {
  // const isDark
  const { setTheme, theme } = useTheme();
  const [isScrolling, setIsScrolling] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <nav
      className={cn(`py-2 fixed duration-300 top-0 left-0 w-full z-50`, {
        "bg-background dark:border-b dark:border-gray-800 shadow-md":
          isScrolling,
      })}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center -ml-10">
              <Image
                src="/assets/images/logos/main-logo.png"
                alt="saudina logo"
                width={150}
                height={70}
                className=""
              />
              {/* <span className="-ml-5 text-2xl font-semibold text-primary">Saudiana</span> */}
            </Link>
            <div className="hidden md:flex gap-3">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={cn("text-muted dark:text-white", {
                    "text-muted-foreground": isScrolling,
                  })}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <SiteConfguration setTheme={setTheme} theme={theme as string} />
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
                      {link.text}
                    </Link>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-2">
                  <SiteConfguration
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

function SiteConfguration({
  setTheme,
  theme,
}: {
  setTheme: (value: React.SetStateAction<string>) => void;
  theme: string;
}) {
  return (
    <>
      <LanguageChange />
      {/* dark mode */}
      <Button
        size={"icon"}
        variant={"outline"}
        className="rounded-full hover:bg-muted bg-background dark:bg-background"
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      >
        {theme == "light" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" onClick={() => setTheme("dark")} />
        )}
      </Button>
    </>
  );
}

export default Navbar;
