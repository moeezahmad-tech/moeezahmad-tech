/**
 * Technical SEO & Structured Data Utilities
 */

export function getBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (envUrl) {
    return envUrl.replace(/\/+$/, "");
  }
  return "https://moeezahmad.dev";
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${baseUrl}${crumb.item}`,
    })),
  };
}

export function generatePersonSchema() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Moeez Ahmad",
    alternateName: "Moeez",
    jobTitle: "Full-Stack AI Engineer & Software Engineer Intern",
    description:
      "Full-Stack AI Engineer, Software Engineer Intern at SolnetInfo, and Co-Founder/CEO of TechKreative. Turning ideas into reliable, scalable, and user-focused digital solutions.",
    url: baseUrl,
    image: `${baseUrl}/images/me.png`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Engineering and Technology, Lahore",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "SolnetInfo",
        url: "https://www.solnetinfo.com/",
      },
      {
        "@type": "Organization",
        name: "TechKreative",
        url: "https://www.techkreative.com/",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/moeezahmad-tech/",
      "https://www.instagram.com/moeezahmad.tech/",
      "https://www.youtube.com/@moeezahmad.techkreative",
      "https://www.facebook.com/moeezahmad.tech/",
      "https://colormagic.techkreative.com/open-source.html",
    ],
  };
}

export function generateWebSiteSchema() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Moeez Ahmad — Portfolio",
    description:
      "Official portfolio of Moeez Ahmad — Full-Stack AI Engineer and CEO of TechKreative.",
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechKreative",
    url: "https://www.techkreative.com/",
    logo: "https://www.techkreative.com/images/logo.png",
    founders: [
      {
        "@type": "Person",
        name: "Tayyaba Khan",
      },
      {
        "@type": "Person",
        name: "Moeez Ahmad",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 8,
    },
    areaServed: "Global",
  };
}
