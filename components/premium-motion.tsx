"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function Magnetic({
  children,
  strength = 0.18,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    };

    const leave = () => {
      element.style.transform = "translate3d(0, 0, 0)";
    };

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return <div ref={ref} className="magnetic">{children}</div>;
}

export function CursorAura() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = -100;
    let y = -100;
    let targetX = x;
    let targetY = y;
    let frame = 0;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const render = () => {
      x += (targetX - x) * 0.13;
      y += (targetY - y) * 0.13;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="cursor-aura" aria-hidden="true" />;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export function SplitReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`split-reveal ${className}`}>{children}</span>;
}
