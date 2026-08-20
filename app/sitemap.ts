import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coralz.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/services", "/products", "/pricing", "/blog", "/tools", "/contact"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "/" ? 1 : 0.7 }));
}
