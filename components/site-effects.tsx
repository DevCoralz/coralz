"use client";

import { useEffect } from "react";
import { CursorAura, ScrollProgress } from "@/components/premium-motion";

export function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const update = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${y}px`);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - window.innerHeight))}`,
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <CursorAura />
      <ScrollProgress />
    </>
  );
}
