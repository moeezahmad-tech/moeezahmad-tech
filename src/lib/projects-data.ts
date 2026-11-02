export interface CaseStudy {
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  clientOrOrg: string;
  role: string;
  timeline: string;
  techStack: string[];
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  results: string;
  image: string;
  liveUrl?: string;
  isOpenSource?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "color-magic",
    title: "Color Magic — Open-Source Color Palette Explorer",
    shortDesc:
      "A fast, privacy-first web tool for designers and developers to generate, explore, and export 150+ professional harmonic color palettes with zero server dependencies.",
    category: "Open-Source Web Application",
    clientOrOrg: "TechKreative Open Source",
    role: "Founder & Lead Developer",
    timeline: "2025 – Present",
    techStack: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Client-Side Math"],
    overview:
      "Color Magic was built to solve a simple problem: most modern color generators require bloated logins, track user habits, or enforce rigid harmony models. Color Magic computes HSL and RGB conversions entirely on the client side.",
    problem:
      "UI/UX designers and engineers needed an instantaneous, zero-latency palette picker with mathematical color-theory harmonies (Mono, Triad, Tetrad, Contrast, Analogic).",
    solution:
      "Engineered an offline-capable browser application that transforms hex codes into named color swatches and exports CSS variables instantly.",
    highlights: [
      "150+ curated high-contrast color palettes",
      "Instant 5-color harmonic generation algorithms",
      "Zero API dependencies for 100% data privacy and instant speed",
      "One-click CSS and Tailwind color export",
    ],
    results:
      "Over 10,000+ palettes generated and adopted across the developer community as an active open-source project.",
    image: "/images/colormagic-logo.png",
    liveUrl: "https://colormagic.techkreative.com",
    isOpenSource: true,
  },
  {
    slug: "waqtai-whatsapp-ai",
    title: "WaqtAI — WhatsApp-First AI Operating System",
    shortDesc:
      "Enterprise AI operating system powering service businesses with conversational WhatsApp scheduling, automated reminders, bookings, and payment follow-ups.",
    category: "Enterprise AI & Operations",
    clientOrOrg: "SolnetInfo Production",
    role: "Software Engineer Intern",
    timeline: "2026 – Present",
    techStack: ["Node.js", "TypeScript", "WhatsApp Cloud API", "AI Agents", "Web Control Plane"],
    overview:
      "WaqtAI is an enterprise-grade AI operating system built for service businesses. It unifies conversational WhatsApp messaging with a centralized web control plane for managers and admins.",
    problem:
      "Service businesses lose high-value bookings and experience appointment no-shows due to fragmented messaging, manual calendar entries, and disjointed payment follow-ups.",
    solution:
      "Developed an automated WhatsApp AI pipeline that converses in natural language, syncs calendar slots in real-time, sends payment reminders, and surfaces business metrics on a control plane.",
    highlights: [
      "Real-time WhatsApp calendar booking synchronization",
      "Proactive automated reminders to cut client churn",
      "Centralized administrative dashboard for staff and owners",
      "Fault-tolerant enterprise production architecture",
    ],
    results:
      "Significantly reduced booking friction and appointment no-shows for pilot service businesses.",
    image: "/images/projects/p (1).webp",
  },
  {
    slug: "hisaab-ai-tax-platform",
    title: "Hisaab AI — AI-Native Tax Intelligence Platform",
    shortDesc:
      "AI-native Pakistani (FBR / IRIS) and cross-border tax platform pairing deterministic tax calculation engines with real-time multi-agent RAG streaming.",
    category: "Agentic AI & Regulatory Tech",
    clientOrOrg: "SolnetInfo Production",
    role: "Software Engineer Intern",
    timeline: "2026 – Present",
    techStack: ["React", "TypeScript", "Anthropic Claude", "Edge Functions (SSE)", "RAG Engine", "Tailwind CSS"],
    overview:
      "Hisaab (حساب) brings modern agentic AI to complex tax regimes. It pairs a deterministic tax table calculator with a team of specialist AI agents streaming answers token-by-token.",
    problem:
      "Pakistani tax codes (FBR First Schedule, salary 75% tests, property SRO valuations) are complex, frequently updated, and prone to costly calculation errors.",
    solution:
      "Architected an agentic multi-agent orchestrator with RAG grounding in verified tax law, deterministic mathematical tables, and wealth statement property estimators.",
    highlights: [
      "Real-time multi-agent streaming over Server-Sent Events (SSE)",
      "Strict legal citation grounding from FBR statutory knowledge base",
      "Deterministic 75% salary test rule engine",
      "Pre-submission audit-risk scoring system",
    ],
    results:
      "Provides verified, auditable tax calculations with zero hallucination on statutory tax slabs.",
    image: "/images/projects/p (2).webp",
  },
  {
    slug: "techkreative-platform",
    title: "TechKreative Digital Agency Platform",
    shortDesc:
      "Modern agency digital platform showcasing full-stack web engineering, digital marketing capabilities, and client growth solutions.",
    category: "Commercial Web Application",
    clientOrOrg: "TechKreative",
    role: "Co-Founder & CEO",
    timeline: "2025 – Present",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Architecture"],
    overview:
      "The flagship digital presence for TechKreative, built to convert incoming global leads and present a multi-disciplinary team delivering full-stack engineering and media.",
    problem:
      "Digital agencies need ultra-fast web vitals, high-converting copy, and clear service roadmaps to win international client contracts.",
    solution:
      "Constructed a lightweight, modular Next.js application with 99+ Google Lighthouse scores and optimized conversion funnels.",
    highlights: [
      "Sub-second page loads and zero layout shift",
      "Streamlined client inquiry and discovery intake pipeline",
      "Mobile-first responsive typography and interactive previews",
    ],
    results:
      "Over 200+ projects completed and 50+ global enterprise and startup clients acquired.",
    image: "/images/projects/p (1).webp",
    liveUrl: "https://www.techkreative.com",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

