"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/data";

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetX = x * 16;
      targetY = y * 12;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      element.style.setProperty("--pointer-x", `${currentX}px`);
      element.style.setProperty("--pointer-y", `${currentY}px`);
      frame = requestAnimationFrame(animate);
    };

    element.addEventListener("pointermove", move);
    frame = requestAnimationFrame(animate);

    return () => {
      element.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="hero-media" aria-label={siteConfig.heroMedia.alt}>
      <video
        className="hero-media__video"
        autoPlay
        muted
        loop
        playsInline
        poster={siteConfig.heroMedia.src}
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-media__fallback" aria-hidden="true">
        <Image
          src={siteConfig.heroMedia.src}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
        />
      </div>

      <div className="hero-media__wash" aria-hidden="true" />
      <div className="hero-media__grid" aria-hidden="true" />
      <div className="hero-media__orb hero-media__orb--one" aria-hidden="true" />
      <div className="hero-media__orb hero-media__orb--two" aria-hidden="true" />
      <div className="hero-media__caption">
        <span className="status-dot" />
        Available for selected work
      </div>
    </div>
  );
}
