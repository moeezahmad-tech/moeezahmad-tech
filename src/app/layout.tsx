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
  metadataBase: new URL("https://moeezahmad.techkreative.com"),
  title: "Moeez Ahmad — Software Engineer & Digital Executioner",
  description:
    "Moeez Ahmad - Software Engineer & Digital Executioner. Transforming ideas into flawless code with custom, responsive websites, full-stack solutions, and digital marketing expertise.",
  keywords: [
    "Moeez Ahmad",
    "web developer",
    "website design",
    "portfolio",
    "full stack",
    "digital marketing",
    "Lahore",
    "Pakistan",
    "responsive websites",
    "web development",
    "projects",
    "courses",
  ],
  authors: [{ name: "Moeez Ahmad" }],
  openGraph: {
    title: "Moeez Ahmad — Software Engineer",
    description:
      "Transforming ideas into flawless code, one pixel-perfect website at a time.",
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
