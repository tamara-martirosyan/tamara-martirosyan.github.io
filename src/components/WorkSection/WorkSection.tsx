import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";


import { site } from "@/lib/site";

export function WorkSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-border/80 bg-[#f8fbff] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="section-label">Experience</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
            From junior engineer to CTO.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70">
            A decade of shipping frontend systems — now leading technology and
            product direction at TeamWorker.ai.
          </p>
        </Reveal>

        <ol className="mt-16 divide-y divide-border/80 border-y border-border/80">
          {site.experience.map((item, index) => (
            <li key={`${item.company}-${item.role}`} className="group">
              <Reveal delayMs={Math.min(index * 40, 120)}>
                <div className="grid gap-6 py-10 md:grid-cols-[7rem_1fr] md:gap-12">
                  <div className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase md:pt-1">
                    <span className="text-signal-deep">0{index + 1}</span>
                    <span className="mt-2 block normal-case tracking-normal text-foreground/45">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal-deep md:text-3xl">
                          {"href" in item && item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 transition-colors hover:text-signal-deep"
                            >
                              {item.company}
                              <ArrowUpRight className="size-5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            </a>
                          ) : (
                            item.company
                          )}
                        </h3>
                        <p className="mt-2 text-base font-medium text-signal-deep">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/75">
                      {item.description}
                    </p>

                    <ul className="mt-6 max-w-3xl space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5 text-sm leading-relaxed text-foreground/65 before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:rounded-full before:bg-signal"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {"project" in item && item.project ? (
                      <div className="mt-8 max-w-3xl rounded-2xl bg-[linear-gradient(145deg,#0b1b33_0%,#102746_100%)] px-6 py-6 text-fog md:px-8 md:py-7">
                        <p className="font-mono text-[11px] tracking-[0.18em] text-[#8eb8ff] uppercase">
                          Highlight
                        </p>
                        <h4 className="font-heading mt-3 text-xl font-semibold tracking-tight">
                          {item.project.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-fog/70">
                          {item.project.description}
                        </p>
                        <ul className="mt-5 space-y-2">
                          {item.project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-sm leading-relaxed text-fog/60"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
