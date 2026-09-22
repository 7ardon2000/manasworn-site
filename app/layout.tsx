import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const fell = localFont({
  src: "./fonts/IMFellEnglishSC.ttf",
  variable: "--font-fell",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manasworn.com"),
  icons: { icon: "/assets/favicon.png", apple: "/assets/apple-touch-icon.png" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#060912" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${fell.variable}`}>
      <body>{children}</body>
    </html>
  );
}
