import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const VolunteeringSection = () => {
  return (
    <section
      id="volunteering"
      className="scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="section-label">Volunteering & events</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            Showing up beyond the codebase.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {site.volunteering.map((item, index) => (
            <Reveal key={item.title} delayMs={Math.min(index * 60, 120)}>
              <article className="h-full border-t-2 border-signal pt-6">
                <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {[
                    item.organization,
                    "location" in item ? item.location : null,
                    "period" in item ? item.period : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-medium text-signal-deep">
                  {item.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-sm leading-relaxed text-foreground/65 before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:rounded-full before:bg-signal"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
