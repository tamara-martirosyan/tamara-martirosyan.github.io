import Reveal from "@/components/Reveal";


import { site } from "@/lib/site";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-4xl">
          <p className="section-label">Skills</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
            The stack behind the work.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70">
            Signature strengths across modern frontend systems, performance, and AI-assisted delivery.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((group, index) => (
            <Reveal key={group.category} delayMs={Math.min(index * 50, 150)}>
              <div className="border-t border-ink/10 pt-5">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">
                  {group.category}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-foreground/65"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col justify-between gap-6 border-t border-ink/10 pt-10 md:flex-row md:items-end">
          <div>
            <p className="section-label">Education</p>
            <h3 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
              {site.education.degree}
            </h3>
          </div>
          <p className="text-base text-foreground/65 md:text-right">
            {site.education.school}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
