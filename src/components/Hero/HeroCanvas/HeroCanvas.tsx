"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

export function HeroCanvas() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.42, y: 0.32, tx: 0.42, ty: 0.32 });
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const spotlight = spotlightRef.current;
    if (!root || !canvas || !spotlight) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let particles: Particle[] = [];
    let running = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = root.clientWidth;
      height = root.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((width * height) / 14000);
      particles = Array.from({ length: Math.min(Math.max(count, 28), 72) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.5,
        a: Math.random() * 0.35 + 0.15,
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const inside =
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right;

      if (!inside) {
        mouseRef.current.tx = 0.42;
        mouseRef.current.ty = 0.32;
        return;
      }

      mouseRef.current.tx = (event.clientX - rect.left) / rect.width;
      mouseRef.current.ty = (event.clientY - rect.top) / rect.height;
    };

    const tick = () => {
      if (!running) return;

      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      spotlight.style.setProperty("--spot-x", `${mouse.x * 100}%`);
      spotlight.style.setProperty("--spot-y", `${mouse.y * 100}%`);

      ctx.clearRect(0, 0, width, height);

      const mx = mouse.x * width;
      const my = mouse.y * height;

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;

          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 200 && dist > 0.1) {
            p.vx -= (dx / dist) * 0.012;
            p.vy -= (dy / dist) * 0.012;
          }

          p.vx *= 0.985;
          p.vy *= 0.985;

          const speed = Math.hypot(p.vx, p.vy);
          if (speed < 0.08) {
            p.vx += (Math.random() - 0.5) * 0.01;
            p.vy += (Math.random() - 0.5) * 0.01;
          }

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(170, 205, 255, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]!;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 120) continue;

          const nearMouse =
            Math.hypot((a.x + b.x) / 2 - mx, (a.y + b.y) / 2 - my) < 220;
          const alpha = (1 - dist / 120) * (nearMouse ? 0.28 : 0.08);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(120, 175, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    resize();
    tick();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden className="absolute inset-0 overflow-hidden bg-[#070f1c]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_18%_18%,rgba(24,106,222,0.34),transparent_55%),radial-gradient(ellipse_70%_50%_at_88%_24%,rgba(56,140,255,0.12),transparent_52%)]" />

      <div className="hero-orb hero-orb-a absolute top-[-18%] right-[-12%] size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(24,106,222,0.3),transparent_70%)] blur-3xl" />
      <div className="hero-orb hero-orb-b absolute bottom-[-18%] left-[-14%] size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(88,150,255,0.14),transparent_70%)] blur-3xl" />

      <div
        ref={spotlightRef}
        className="hero-spotlight absolute inset-0"
      />

      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(7,15,28,0.78)_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.04]" />
    </div>
  );
}
