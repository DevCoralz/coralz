import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/page-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coralz.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Coralz — Digital home", template: "%s — Coralz" },
  description: "Coralz is a personal brand, project, product, and ideas platform.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Coralz", title: "Coralz — Digital home", description: "A personal brand, project, product, and ideas platform.", url: "/" },
  twitter: { card: "summary_large_image", title: "Coralz — Digital home", description: "A personal brand, project, product, and ideas platform." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PageShell>{children}</PageShell></body></html>;
}
