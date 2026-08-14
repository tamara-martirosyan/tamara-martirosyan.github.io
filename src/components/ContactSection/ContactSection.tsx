import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";


import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#0b1b33_0%,#102746_55%,#163a6b_100%)] px-6 py-14 text-fog md:px-14 md:py-20">
            <div
              aria-hidden
              className="absolute -top-20 -right-16 size-80 rounded-full bg-[radial-gradient(circle,rgba(24,106,222,0.4),transparent_68%)] blur-3xl"
            />
            <div className="noise-overlay absolute inset-0" />

            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] tracking-[0.22em] text-[#8eb8ff] uppercase">
                Contact
              </p>
              <h2 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-balance md:text-6xl">
                Let&apos;s build something ambitious.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-fog/60">
                Open to conversations about product engineering, architecture, and
                AI-powered interfaces.
              </p>

              <div className="mt-8 flex flex-col gap-2 text-sm text-fog/65 sm:flex-row sm:flex-wrap sm:gap-x-8">
                <a
                  href={site.links.email}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#8eb8ff]"
                >
                  {site.contact.email}
                </a>
                <span>{site.location}</span>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={site.links.email}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-signal px-6 text-sm font-medium text-white transition-colors hover:bg-signal-deep"
                >
                  Email
                  <ArrowUpRight className="size-4" />
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  className="h-12 rounded-xl border-white/20 bg-white/5 px-6 text-fog hover:bg-white/10 hover:text-fog"
                  render={
                    <a
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  className="h-12 rounded-xl border-white/20 bg-white/5 px-6 text-fog hover:bg-white/10 hover:text-fog"
                  render={
                    <a href={site.links.github} target="_blank" rel="noreferrer" />
                  }
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
