import { Cairo, Geist, Geist_Mono } from "next/font/google";
import { DEFAULT_LOCALE } from "@/i18n/config";
import SplashScreen from "@/components/SplashScreen";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={DEFAULT_LOCALE}
      // className={`some css classes will come here, probably`}     <SplashScreen />
    >
      <body
        className={`ltr:${geistSans.variable} ltr:${geistMono.variable} ${cairo.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
