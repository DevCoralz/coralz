import type { Post, Product, Project, Service } from "./types";

export const siteConfig = {
  name: "Coralz",
  handle: "DevCoralz",
  description: "A personal digital home for products, projects, ideas, and useful tools.",
  availability: "Available for selected work",
  avatar: { src: "/avatar-placeholder.svg", alt: "Coralz profile placeholder" },
  heroMedia: {
    src: "/hero-orbit.svg",
    alt: "Abstract orbital artwork",
    enabled: true,
    video: "/hero-video.mp4"
  },
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" }
  ]
};

export const projects: Project[] = [
  {
    slug: "atlas-workspace",
    title: "Atlas Workspace",
    eyebrow: "Product system",
    summary: "A calm operating layer for turning scattered work into a visible system.",
    description: "Atlas is a concept product for organizing projects, notes, assets, and lightweight workflows without turning the interface into a spreadsheet.",
    tags: ["Product design", "React", "Systems"],
    status: "Live",
    year: "2026",
    accent: "atlas",
    features: ["Command-first navigation", "Project health signals", "Reusable workspace blocks", "Accessible keyboard flows"],
    challenge: "Complex personal systems often become hard to scan because every item gets the same visual weight.",
    solution: "Atlas uses hierarchy, progressive disclosure, and a strong editorial grid so the next useful action stays obvious.",
    results: ["Clearer project hierarchy", "Faster navigation patterns", "Reusable content primitives"],
    architecture: ["Route-driven page composition", "Typed content layer", "CMS-ready media config", "Composable UI primitives"],
    links: [{ label: "Preview", href: "#" }]
  },
  {
    slug: "signal-notes",
    title: "Signal Notes",
    eyebrow: "Knowledge product",
    summary: "An editorial notes surface for ideas that deserve more than a bookmark.",
    description: "A focused publishing concept that turns rough notes into readable, connected knowledge.",
    tags: ["Editorial", "Content", "UX"],
    status: "In progress",
    year: "2026",
    accent: "signal",
    features: ["Topic collections", "Reading-time metadata", "Related notes", "Share-ready layouts"],
    challenge: "Long-form personal knowledge can feel disconnected when structure is added after writing.",
    solution: "Signal treats metadata and relationships as first-class content while keeping the reading experience quiet.",
    results: ["Stronger content relationships", "Better scanability", "Cleaner publishing workflow"],
    architecture: ["Slug-based routes", "Typed post model", "Search-ready metadata", "Future API boundary"],
    links: [{ label: "Case study", href: "#" }]
  },
  {
    slug: "studio-commerce",
    title: "Studio Commerce",
    eyebrow: "Commerce foundation",
    summary: "A premium storefront shell designed before the payment layer exists.",
    description: "A frontend foundation for digital products, software, and resources, with purchase states isolated from the eventual payment provider.",
    tags: ["Commerce", "Frontend", "Architecture"],
    status: "Concept",
    year: "2026",
    accent: "commerce",
    features: ["Product variants", "Purchase-state UI", "Pricing config", "Checkout-ready boundaries"],
    challenge: "Premature payment integration can couple a storefront to infrastructure that changes later.",
    solution: "The interface models product intent first and keeps payment actions behind a clean client boundary.",
    results: ["Provider-agnostic purchase UX", "Reusable product surfaces", "CMS-friendly data shape"],
    architecture: ["Typed product config", "Future checkout adapter", "Loading/error states", "Route-level composition"],
    links: [{ label: "Explore concept", href: "#" }]
  }
];

export const services: Service[] = [
  {
    slug: "product-build",
    name: "Product builds",
    description: "Design and frontend engineering for thoughtful digital products.",
    price: "From $1,500",
    delivery: "2–6 weeks",
    status: "Available",
    features: ["Product UI", "Responsive frontend", "Component systems", "Handoff-ready architecture"]
  },
  {
    slug: "brand-web",
    name: "Brand websites",
    description: "Distinctive web experiences for people and businesses that need more than a template.",
    price: "From $900",
    delivery: "1–4 weeks",
    status: "Available",
    features: ["Art direction", "Multi-page architecture", "CMS-ready content", "Performance foundations"]
  },
  {
    slug: "frontend-sprint",
    name: "Frontend sprint",
    description: "A focused implementation sprint to turn an existing product direction into a polished interface.",
    price: "From $600",
    delivery: "3–7 days",
    status: "Limited",
    features: ["UI implementation", "Responsive fixes", "Accessibility pass", "QA handoff"]
  }
];

export const products: Product[] = [
  {
    slug: "launch-kit",
    name: "Launch Kit",
    type: "Resource",
    description: "A practical collection of planning templates for shipping a small digital product.",
    price: "$29",
    compareAt: "$49",
    availability: "Available",
    features: ["Planning templates", "Launch checklist", "Positioning prompts", "Reusable briefs"]
  },
  {
    slug: "coralz-components",
    name: "Coralz Components",
    type: "Software",
    description: "A future-ready component collection for fast, consistent product interfaces.",
    price: "$79",
    availability: "Coming soon",
    features: ["Accessible primitives", "Layout recipes", "Tokens", "Documentation-ready structure"]
  },
  {
    slug: "case-study-template",
    name: "Case Study Template",
    type: "Digital",
    description: "A structured editorial template for presenting product work with clarity.",
    price: "$19",
    availability: "Available",
    features: ["Problem/solution flow", "Metrics section", "Media slots", "Related work block"]
  }
];

export const blogPosts: Post[] = [
  {
    slug: "designing-for-the-next-action",
    title: "Designing for the next action",
    excerpt: "Why strong interfaces make the next useful move feel inevitable.",
    category: "Design",
    tags: ["UX", "Product"],
    date: "August 12, 2026",
    readingTime: "5 min read",
    cover: "/article-grid.svg",
    body: [
      "Good interfaces reduce the distance between intent and action. That does not mean making every screen busy with buttons; it means deciding what deserves attention now and what can wait.",
      "A useful hierarchy starts with the user's job. From there, typography, spacing, labels, and interaction states reinforce one clear path while keeping secondary paths available.",
      "For Coralz, that principle becomes a visual rule: every section should explain why it exists before asking the visitor to do something."
    ]
  },
  {
    slug: "the-case-for-small-systems",
    title: "The case for small systems",
    excerpt: "Reusable primitives are most valuable when they preserve intent, not just consistency.",
    category: "Engineering",
    tags: ["Systems", "Frontend"],
    date: "July 29, 2026",
    readingTime: "7 min read",
    cover: "/article-grid.svg",
    body: [
      "A component library is not a collection of boxes. It is a shared vocabulary for recurring decisions.",
      "The most useful primitives encode behavior and constraints: focus states, loading behavior, empty states, spacing, and content hierarchy.",
      "That makes future backend work easier because the UI already has predictable boundaries for real data."
    ]
  }
];

export const pricingFaq = [
  { q: "Are the prices final?", a: "No. The current values are typed mock configuration. A future backend can replace them without changing presentation components." },
  { q: "Do you build the backend?", a: "Not in this frontend stage. The UI is intentionally prepared for a separate backend." },
  { q: "Can products support payments later?", a: "Yes. Product cards expose purchase states without coupling the interface to a payment provider." }
];

export const tools = [
  { number: "01", name: "AI experiments", description: "Small interfaces for exploring practical AI ideas.", status: "Coming soon" },
  { number: "02", name: "Developer utilities", description: "Focused tools that remove friction from everyday work.", status: "Coming soon" },
  { number: "03", name: "Playground", description: "Visual experiments, prototypes, and things that may become products.", status: "In progress" }
] as const;
