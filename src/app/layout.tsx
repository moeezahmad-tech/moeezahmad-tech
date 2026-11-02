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
  title: "Moeez Ahmad — Full-Stack AI Engineer | Software Engineer Intern | Co-Founder & CEO @ TechKreative",
  description:
    "Moeez Ahmad is a Full-Stack AI Engineer, Software Engineer Intern at SolnetInfo, and Co-Founder/CEO of TechKreative based in Lahore, Pakistan. From Ideation to Products: building scalable web products, AI-powered tools, and digital growth systems.",
  keywords: [
    "Moeez Ahmad",
    "Full-Stack AI Engineer",
    "Software Engineer Intern",
    "TechKreative",
    "SolnetInfo",
    "AI Engineer",
    "Color Magic",
    "Web Developer",
    "Portfolio",
    "Next.js Developer",
    "SEO Expert",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Moeez Ahmad" }],
  openGraph: {
    title: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer Intern",
    description:
      "From Ideation to Products: building scalable web products, AI-powered tools, and digital growth systems.",
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
