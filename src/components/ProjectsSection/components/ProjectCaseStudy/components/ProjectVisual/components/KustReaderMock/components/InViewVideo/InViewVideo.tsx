"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const InViewVideo = ({
  src,
  poster,
  label,
  width,
  height,
  className,
}: {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          if (!reduceMotion.matches) {
            void video.play().catch(() => {
              // Autoplay can still be blocked; controls remain available.
            });
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={cn("h-auto w-full bg-night", className)}
      width={width}
      height={height}
      muted
      loop
      playsInline
      controls
      preload="none"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default InViewVideo;
