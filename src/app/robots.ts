import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/images/temp/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

