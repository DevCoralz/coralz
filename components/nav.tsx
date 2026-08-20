"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { MenuIcon, XIcon } from "./icons";

const links = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["Products", "/products"],
  ["Pricing", "/pricing"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Coralz home">
          <span className="brand-mark">C</span><span>{siteConfig.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link className={isActive(href) ? "is-active" : ""} key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}
        </nav>

        <Link className="nav-cta" href="/contact">Start a conversation</Link>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav" id="mobile-navigation">
          <div className="container mobile-nav__inner">
            {links.map(([label, href]) => <Link className={isActive(href) ? "is-active" : ""} key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}
            <Link className="button button--primary" href="/contact">Start a conversation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
