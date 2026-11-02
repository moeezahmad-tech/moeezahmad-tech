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
  title: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer",
  description:
    "Moeez Ahmad is a Full-Stack AI Engineer, Software Engineer Intern at SolnetInfo, and Co-Founder/CEO of TechKreative. Building scalable websites, AI-powered tools, and digital growth systems.",
  keywords: [
    "Moeez Ahmad",
    "Moeez Ahmad Software Engineer",
    "Moeez Ahmad Full-Stack AI Engineer",
    "Moeez Ahmad TechKreative",
    "Full-Stack AI Engineer Lahore",
    "Web developer Lahore",
    "AI engineer Pakistan",
    "TechKreative web development",
    "Color Magic",
    "Next.js Developer",
  ],
  authors: [{ name: "Moeez Ahmad" }],
  openGraph: {
    title: "Moeez Ahmad — Full-Stack AI Engineer & Software Engineer Intern",
    description:
      "Building scalable websites, AI-powered tools, and digital growth systems for businesses and creators.",
    images: ["/images/me.png"],
    type: "website",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://moeezahmad.dev/#person",
      name: "Moeez Ahmad",
      jobTitle: "Full-Stack AI Engineer & Software Engineer Intern",
      worksFor: [
        {
          "@type": "Organization",
          name: "SolnetInfo",
        },
        {
          "@type": "Organization",
          name: "TechKreative",
          url: "https://www.techkreative.com/",
        },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Engineering and Technology, Lahore",
      },
      url: "https://moeezahmad.dev/",
      sameAs: [
        "https://www.linkedin.com/in/moeezahmad-tech/",
        "https://www.instagram.com/moeezahmad.tech/",
        "https://www.youtube.com/@moeezahmad.techkreative",
        "https://www.facebook.com/moeezahmad.tech/",
        "https://colormagic.techkreative.com/open-source.html",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://moeezahmad.dev/#website",
      url: "https://moeezahmad.dev/",
      name: "Moeez Ahmad Portfolio",
      publisher: {
        "@id": "https://moeezahmad.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
