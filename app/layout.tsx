import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/headers";
import CustomCursor from "@/components/ui/custom-cursor";
import LenisProvider from "./providers";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const Aesthet_Black = localFont({
  src: [
    {
      path: "../public/fonts/aesthet-black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/aesthet-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aesthet-black",
});

const Fustat = localFont({
  src: [
    {
      path: "../public/fonts/fustat.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-fustat",
});

const Tanker = localFont({
  src: [
    {
      path: "../public/fonts/tanker.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tanker",
});

export const metadata: Metadata = {
  title: "Forti Foods - Feeding at Scale. Without Kitchens",
  description:
    "Forti enables organisations to feed large teams reliably at scale across remote, mobile, and infrastructure-limited environments — without kitchens or operational risk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${Fustat.variable} ${Aesthet_Black.variable} ${Tanker.variable} antialiased overflow-x-hidden`}
      >
        <CustomCursor />
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
