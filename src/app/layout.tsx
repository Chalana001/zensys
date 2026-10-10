import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ZenSys Solutions | Software for shops and garages", template: "%s | ZenSys Solutions" },
  description: "POS and garage management software designed around the day-to-day work of shops and garages.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_LK" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body>
    </html>
  );
}
