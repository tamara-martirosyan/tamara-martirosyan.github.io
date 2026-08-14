import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Geist_Mono } from "next/font/google";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { site } from "@/lib/site";

import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s — ${site.name}`,
  },
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Tamara Martirosyan",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Yerevan",
  ],
  openGraph: {
    title: site.name,
    description: site.seo.ogDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.seo.ogDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
