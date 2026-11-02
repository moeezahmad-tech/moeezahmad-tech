import type { Metadata } from "next";
import ProjectsView from "@/components/ProjectsView";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Featured Projects & Case Studies",
  description:
    "Explore enterprise AI platforms at SolnetInfo (WaqtAI, Hisaab AI), open-source tools (Color Magic), and client web applications built by Moeez Ahmad.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Featured Projects & Case Studies | Moeez Ahmad",
    description:
      "Production AI systems, open-source color palette tools, and commercial web applications.",
    url: "/projects",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Moeez Ahmad Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Projects & Case Studies | Moeez Ahmad",
    description:
      "Enterprise AI platforms, open-source tools, and client web applications.",
    images: ["/images/me.png"],
  },
};

export default function ProjectsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ProjectsView />
    </>
  );
}
