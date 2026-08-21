"use client";

import { ReactNode, useEffect, useRef } from "react";

export function VelocityText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = window.scrollY;
    let frame = 0;

    const update = () => {
      const current = window.scrollY;
      const velocity = current - last;
      last += (current - last) * 0.18;
      element.style.setProperty(
        "--velocity-skew",
        `${Math.max(-3, Math.min(3, velocity * 0.035))}deg`,
      );
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <span ref={ref} className={`velocity-text ${className}`}>{children}</span>;
}
