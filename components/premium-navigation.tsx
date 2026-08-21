"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let current = window.scrollY;
    let target = current;
    let raf = 0;

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 900) return;
      target = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - window.innerHeight,
          target + event.deltaY * 0.72,
        ),
      );
      event.preventDefault();
    };

    const render = () => {
      current += (target - current) * 0.075;
      if (Math.abs(target - current) < 0.08) current = target;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    raf = requestAnimationFrame(render);

    const sync = () => {
      target = window.scrollY;
      current = window.scrollY;
    };
    window.addEventListener("resize", sync);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", sync);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

export function PageTransition() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 520);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-transition" aria-hidden="true">
      <div className="page-transition__mark">C</div>
    </div>
  );
}

export function CommandNav({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, []);

  useEffect(() => {
    if (open) window.setTimeout(() => input.current?.focus(), 30);
  }, [open]);

  const items = [
    { href: "/", label: "Home", key: "01" },
    { href: "/projects", label: "Projects", key: "02" },
    { href: "/services", label: "Services", key: "03" },
    { href: "/about", label: "About", key: "04" },
    { href: "/blog", label: "Journal", key: "05" },
    { href: "/contact", label: "Contact", key: "06" },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {children}
      <button
        type="button"
        className="command-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <span>⌘</span>K
      </button>

      {open && (
        <div className="command-overlay" role="dialog" aria-modal="true">
          <button
            className="command-overlay__backdrop"
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          />
          <div className="command-panel">
            <div className="command-panel__top">
              <span>Navigate</span>
              <kbd>ESC</kbd>
            </div>
            <input
              ref={input}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the site..."
              className="command-input"
            />
            <div className="command-items">
              {filtered.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="command-item"
                >
                  <span>{item.key}</span>
                  <strong>{item.label}</strong>
                  <span>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
