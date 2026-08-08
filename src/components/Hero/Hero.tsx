import { ArrowUpRight } from "lucide-react";

import HeroCanvas from "./HeroCanvas";
import HeroName from "./HeroName";


import { Button } from "@/components/ui/button";

import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#070f1c]">
      <HeroCanvas />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <div className="max-w-4xl">
          <HeroName name={site.name} />

          <div className="hero-line mt-6 h-px w-16 origin-left bg-signal" />

          <h1 className="hero-enter hero-enter-2 mt-8 max-w-2xl text-xl leading-snug text-balance text-white/88 md:text-[1.65rem]">
            {site.role}
          </h1>

          <p className="hero-enter hero-enter-3 mt-5 max-w-lg text-base leading-relaxed text-white/45 md:text-lg">
            {site.tagline}
          </p>

          <div className="hero-enter hero-enter-4 mt-10 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 rounded-xl bg-signal px-7 text-white transition-transform hover:bg-signal-deep hover:scale-[1.02] active:scale-[0.99]"
              render={<a href="#experience" />}
            >
              View experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 rounded-xl border-white/15 bg-transparent px-7 text-white transition-all hover:border-white/30 hover:bg-white/5 hover:text-white hover:scale-[1.02] active:scale-[0.99]"
              render={<a href="#contact" />}
            >
              Contact
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
