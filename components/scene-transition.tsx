"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SceneTransition() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("route-enter");
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("route-enter");
    }, 700);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const click = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
        return;
      }
      if (href === window.location.pathname) return;

      document.documentElement.classList.add("route-leave");
      window.setTimeout(() => {
        document.documentElement.classList.remove("route-leave");
      }, 680);
    };

    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  return null;
}
