import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import Container from "@/components/Container";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LanguageProvider } from "@/components/LanguageChange";
import { ThemeProvider } from "@/providers";
import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onward Ticket",
  description: "Onward Ticket, Your Gateway to Adventure",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="ar">
      <body
        className={`ltr:${geistSans.variable} ltr:${geistMono.variable} ${cairo.className} antialiased `}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar />
            <div className="flex flex-col min-h-screen gap-20">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ScrollTop />
            <LanguageProvider />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
