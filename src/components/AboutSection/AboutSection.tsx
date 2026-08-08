import Reveal from "@/components/Reveal";


import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
            Engineering leadership with deep frontend craft.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">{site.location}</p>
        </Reveal>

        <Reveal delayMs={80} className="space-y-8">
          <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
            {site.summary}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-t-2 border-signal pt-5">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Current
              </p>
              <p className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink">
                CTO & Co-Founder at TeamWorker.ai since 2024
              </p>
            </div>
            <div className="border-t-2 border-ink/15 pt-5">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Background
              </p>
              <p className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink">
                10+ years shipping high-traffic React systems at Picsart
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
