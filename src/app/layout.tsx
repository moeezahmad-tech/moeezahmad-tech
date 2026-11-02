import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://moeezahmad.dev"),
  title: "Moeez Ahmad — Software Engineer & Full-Stack AI Engineer | CEO @ TechKreative",
  description:
    "Moeez Ahmad is a Software Engineer at SolnetInfo, Full-Stack AI Engineer, and CEO of TechKreative based in Lahore, Pakistan. From Ideation to Products: turning ideas into scalable web applications, AI tools, and high-converting digital experiences.",
  keywords: [
    "Moeez Ahmad",
    "Software Engineer",
    "Full-Stack AI Engineer",
    "AI Engineer",
    "TechKreative",
    "SolnetInfo",
    "Color Magic",
    "Web Developer",
    "Portfolio",
    "Next.js Developer",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Moeez Ahmad" }],
  openGraph: {
    title: "Moeez Ahmad — Software Engineer & Full-Stack AI Engineer",
    description:
      "From Ideation to Products: turning ideas into scalable web applications, AI tools, and high-converting digital experiences.",
    images: ["/images/me.png"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
