"use client";

import { useEffect, useMemo, useRef } from "react";

type HeroNameProps = {
  name: string;
};

type MagnetState = {
  el: HTMLSpanElement;
  originX: number;
  originY: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
};

const HeroName = ({ name }: HeroNameProps) => {
  const rootRef = useRef<HTMLParagraphElement>(null);
  const magnetsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = useMemo(() => name.split(" "), [name]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    let pointerX = -9999;
    let pointerY = -9999;
    let enabled = false;
    const states: MagnetState[] = [];

    const measure = () => {
      for (const state of states) {
        const rect = state.el.getBoundingClientRect();
        state.originX = rect.left + rect.width / 2 - state.x;
        state.originY = rect.top + rect.height / 2 - state.y;
      }
    };

    const enableTimer = window.setTimeout(() => {
      const nodes = magnetsRef.current.filter(Boolean) as HTMLSpanElement[];
      for (const el of nodes) {
        states.push({
          el,
          originX: 0,
          originY: 0,
          x: 0,
          y: 0,
          tx: 0,
          ty: 0,
        });
      }
      measure();
      enabled = true;
    }, 1400);

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const tick = () => {
      if (enabled) {
        for (const state of states) {
          const dx = pointerX - state.originX;
          const dy = pointerY - state.originY;
          const dist = Math.hypot(dx, dy);
          const radius = 160;

          if (dist < 1 || dist >= radius) {
            state.tx = 0;
            state.ty = 0;
          } else {
            const force = (1 - dist / radius) * 6;
            state.tx = (dx / dist) * force * -0.3;
            state.ty = (dy / dist) * force * -0.3;
          }

          state.x += (state.tx - state.x) * 0.08;
          state.y += (state.ty - state.y) * 0.08;

          if (Math.abs(state.x) < 0.02 && Math.abs(state.y) < 0.02) {
            state.x = 0;
            state.y = 0;
            state.el.style.transform = "translate3d(0,0,0)";
          } else {
            state.el.style.transform = `translate3d(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px, 0)`;
          }
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(enableTimer);
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  let charIndex = 0;

  return (
    <p
      ref={rootRef}
      className="hero-name font-heading text-[clamp(2.35rem,8.5vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-white"
      aria-label={name}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`}>
          <span className="hero-word">
            {word.split("").map((char) => {
              const index = charIndex++;
              return (
                <span
                  key={`${word}-${index}`}
                  className="hero-char"
                  style={{ animationDelay: `${0.08 + index * 0.028}s` }}
                  aria-hidden
                >
                  <span
                    ref={(node) => {
                      magnetsRef.current[index] = node;
                    }}
                    className="hero-char-magnet"
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
};

export default HeroName;
