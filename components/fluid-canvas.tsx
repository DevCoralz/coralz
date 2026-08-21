"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
};

export function FluidCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const pointer = { x: 0.5, y: 0.5, active: false };
    const particles: Particle[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const count = Math.min(110, Math.max(45, Math.round(width / 9)));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: Math.random() * 1.8 + 0.5,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.active = true;
    };

    const leave = () => {
      pointer.active = false;
    };

    const render = (time: number) => {
      const seconds = time * 0.001;
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * pointer.x,
        height * pointer.y,
        0,
        width * pointer.x,
        height * pointer.y,
        Math.max(width, height) * 0.65,
      );
      gradient.addColorStop(0, "rgba(98,114,255,.17)");
      gradient.addColorStop(0.45, "rgba(98,114,255,.045)");
      gradient.addColorStop(1, "rgba(98,114,255,0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        const waveX = Math.sin(seconds * 0.45 + particle.phase + particle.y * 0.008) * 0.16;
        const waveY = Math.cos(seconds * 0.38 + particle.phase + particle.x * 0.006) * 0.16;
        const targetX = pointer.x * width;
        const targetY = pointer.y * height;
        const dx = targetX - particle.x;
        const dy = targetY - particle.y;
        const distance = Math.max(80, Math.hypot(dx, dy));
        const influence = pointer.active ? Math.max(0, 1 - distance / 300) : 0;

        particle.vx += waveX * 0.008 + dx / distance * influence * 0.015;
        particle.vy += waveY * 0.008 + dy / distance * influence * 0.015;
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(255,255,255,.26)";
        context.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", move, { passive: true });
    canvas.addEventListener("pointerleave", leave);
    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={ref} className="fluid-canvas" aria-hidden="true" />;
}
