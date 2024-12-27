"use client";
import React from "react";
import Container from "./Container";
import { LanguageChange } from "./LanguageChange";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function Navbar() {
  // const isDark
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <nav className="py-3 fixed top-0 left-0 w-full z-50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/images/logos/main-logo.png"
              alt="saudina logo"
              width={150}
              height={70}
              className="-ml-9"
            />
          </Link>
          <div className="flex items-center gap-2">
            <LanguageChange />
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
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
