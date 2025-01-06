import type { Viewport } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  // getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { AVAILABLE_LOCALES } from "@/i18n/config";
import { ThemeProvider } from "@/providers";
import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";
import { LanguageProvider } from "@/components/LanguageChange";
import Footer from "@/components/Footer";
export { generateMetadata } from "@/lib/utils"; // Import the function

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light dark",
};

export function generateStaticParams() {
  return AVAILABLE_LOCALES.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{ children: React.ReactNode; params: { lng: string } }>) {
  unstable_setRequestLocale(lng);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <Navbar />
        <div className="flex flex-col min-h-screen gap-20">
          <main className="flex-1">{children}</main> <Footer />
        </div>
        <ScrollTop /> <LanguageProvider />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

// import { Geist, Geist_Mono, Cairo } from "next/font/google";
// import "./globals.css";
// import Footer from "@/components/Footer";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { LanguageProvider } from "@/components/LanguageChange";
// import { ThemeProvider } from "@/providers";
// import Navbar from "@/components/Navbar";
// import ScrollTop from "@/components/ScrollTop";
// import SplashScreen from "@/components/SplashScreen";
// import { notFound } from "next/navigation";
// import { ReactNode } from "react";
// export { generateMetadata } from "@/lib/utils";

// const cairo = Cairo({
//   variable: "--font-cairo",
//   subsets: ["latin"],
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// type Props = {
//   children: ReactNode;
//   params: { lng: string };
// };

// // export const metadata: Metadata = {
// //   title: "Saudina",
// //   description: "Saudina",
// // };

// //function to get the translations

// //function to generate the routes for all the locales
// export async function generateStaticParams() {
//   return ["en", "ar", "zh"].map((lng) => ({ lng }));
// }

// export default async function RootLayout({ children, params: { lng } }: Props) {
//   const messages = await getMessages({ locale: lng });

//   return (
//     <html lang="ar">
//       <body
//         className={`ltr:${geistSans.variable} ltr:${geistMono.variable} ${cairo.className} antialiased `}
//       >
//         <NextIntlClientProvider messages={messages}>
//           <ThemeProvider>
//             <Navbar />
//             <SplashScreen />
//             <div className="flex flex-col min-h-screen gap-20">
//               <main className="flex-1">{children}</main>
//               <Footer />
//             </div>
//             <ScrollTop />
//             <LanguageProvider />
//           </ThemeProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
