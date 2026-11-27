import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { QuickContact } from "@/components/quick-contact";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Blok kuhinja | Izrada od 2 m",
    template: "%s | Blok kuhinja",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: site.url,
    siteName: site.name,
    title: "Blok kuhinja | Izrada od 2 m",
    description: site.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr" data-scroll-behavior="smooth" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-wood focus:px-4 focus:py-2 focus:text-[#141210]"
        >
          Preskoči na sadržaj
        </a>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <QuickContact />
      </body>
    </html>
  );
}
