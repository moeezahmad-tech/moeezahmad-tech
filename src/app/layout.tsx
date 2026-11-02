import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import {
  getBaseUrl,
  generatePersonSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
} from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer",
    template: "%s | Moeez Ahmad",
  },
  description:
    "Moeez Ahmad is a Full-Stack AI Engineer, Software Engineer Intern at SolnetInfo, and Co-Founder/CEO of TechKreative. Building scalable websites, AI-powered tools, and digital growth systems.",
  applicationName: "Moeez Ahmad Portfolio",
  keywords: [
    "Moeez Ahmad",
    "Moeez Ahmad Software Engineer",
    "Moeez Ahmad Full-Stack AI Engineer",
    "Moeez Ahmad TechKreative",
    "Full-Stack AI Engineer Lahore",
    "Web Developer Lahore",
    "Software Engineer Pakistan",
    "SolnetInfo Software Engineer",
    "TechKreative Web Development",
    "WaqtAI",
    "Hisaab AI",
    "Color Magic",
    "Next.js App Router Portfolio",
    "Agentic AI Engineer",
  ],
  authors: [{ name: "Moeez Ahmad", url: baseUrl }],
  creator: "Moeez Ahmad",
  publisher: "TechKreative",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Moeez Ahmad",
    title: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer",
    description:
      "Building scalable websites, AI-powered tools, and digital growth systems for businesses and creators globally.",
    images: [
      {
        url: "/images/me.png",
        secureUrl: `${baseUrl}/images/me.png`,
        width: 1200,
        height: 630,
        alt: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@moeezahmad_tech",
    creator: "@moeezahmad_tech",
    title: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer",
    description:
      "Building scalable websites, AI-powered tools, and SEO-driven digital products.",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Moeez Ahmad — Full-Stack AI Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(),
      generateWebSiteSchema(),
      generateOrganizationSchema(),
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <JsonLd data={rootJsonLd} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
