import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Geist_Mono } from "next/font/google";

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
  title: "Tamara Martirosyan — CTO & Senior Frontend Engineer",
  description:
    "Tamara Martirosyan is CTO & Co-Founder at TeamWorker.ai and a Senior Frontend Engineer with 10+ years building scalable React, Next.js, and TypeScript systems for high-traffic and AI-powered products.",
  metadataBase: new URL("https://tamara-martirosyan.github.io"),
  openGraph: {
    title: "Tamara Martirosyan",
    description:
      "CTO & Co-Founder at TeamWorker.ai. Senior Frontend Engineer building scalable React and Next.js products.",
    url: "https://tamara-martirosyan.github.io",
    siteName: "Tamara Martirosyan",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
