"use client";

import { ReactNode, useRef } from "react";

export function DepthCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty("--tilt-x", `${y * -5}deg`);
    element.style.setProperty("--tilt-y", `${x * 7}deg`);
  };

  const leave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`depth-card ${className}`}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {children}
    </div>
  );
}
