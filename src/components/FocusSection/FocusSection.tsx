import Reveal from "@/components/Reveal";


import { site } from "@/lib/site";

export function FocusSection() {
  return (
    <section
      id="focus"
      className="relative scroll-mt-24 overflow-hidden bg-night px-5 py-20 text-fog md:px-8 md:py-28"
    >
      <div
        aria-hidden
        className="absolute -top-24 right-0 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(24,106,222,0.28),transparent_68%)] blur-3xl"
      />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-4xl">
          <p className="font-mono text-[11px] tracking-[0.22em] text-[#8eb8ff] uppercase">
            Focus
          </p>
          <h2 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            What I care about building.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fog/60">
            Interfaces that stay clear under complexity — especially when AI is
            part of the product.
          </p>
        </Reveal>

        <ol className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {site.focus.map((item, index) => (
            <li
              key={item.title}
              className="group grid gap-4 py-9 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-10"
            >
              <span className="font-mono text-sm text-[#8eb8ff] transition-transform duration-500 group-hover:translate-x-1">
                0{index + 1}
              </span>
              <h3 className="font-heading text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-fog/60 transition-colors duration-300 group-hover:text-fog/80">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
