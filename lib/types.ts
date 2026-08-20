export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  tags: string[];
  status: "Live" | "In progress" | "Concept";
  year: string;
  accent: string;
  features: string[];
  challenge: string;
  solution: string;
  results: string[];
  architecture: string[];
  links: { label: string; href: string }[];
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  price: string;
  delivery: string;
  status: "Available" | "Limited";
  features: string[];
};

export type Product = {
  slug: string;
  name: string;
  type: "Digital" | "Software" | "Resource";
  description: string;
  price: string;
  compareAt?: string;
  availability: "Available" | "Coming soon";
  features: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  cover: string;
  body: string[];
};
