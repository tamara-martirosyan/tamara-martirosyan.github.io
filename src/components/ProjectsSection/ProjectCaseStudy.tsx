import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import {
  getNextProject,
  getProjectPath,
  WORK_INDEX_PATH,
  type Project,
} from "@/lib/projects";

import { ProjectVisual } from "./ProjectVisual";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const next = getNextProject(project.id);

  return (
    <article>
      <header className="px-5 pt-16 pb-12 md:px-8 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href={WORK_INDEX_PATH}
              className="inline-flex items-center gap-2 text-sm text-foreground/55 transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              Selected work
            </Link>
          </Reveal>

          <Reveal delayMs={40} className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-[11px] tracking-[0.2em] text-signal-deep uppercase">
                {project.category}
              </span>
              <span className="text-foreground/25">·</span>
              <span className="text-sm text-foreground/45">{project.period}</span>
            </div>

            <h1 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-6xl">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-signal-deep"
                >
                  {project.name}
                  <ArrowUpRight className="size-8 opacity-40 md:size-10" />
                </a>
              ) : (
                project.name
              )}
            </h1>
            <p className="mt-3 text-base font-medium text-signal-deep">
              {project.role}
            </p>
            <p className="mt-6 text-xl leading-relaxed text-foreground/75 md:text-2xl">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/60">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </header>

      <div className="border-y border-border/80 bg-fog px-5 py-12 md:px-8 md:py-16">
        <Reveal className="mx-auto max-w-6xl">
          <ProjectVisual project={project} />
        </Reveal>
      </div>

      <div className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t-2 border-signal pt-5">
                <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Challenge
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/70">
                  {project.challenge}
                </p>
              </div>
              <div className="border-t-2 border-ink/15 pt-5">
                <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Outcome
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/70">
                  {project.outcome}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={60} className="mt-16 max-w-3xl">
            <p className="section-label">What I built</p>
            <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
              End-to-end product work.
            </h2>
            <ul className="mt-8 space-y-4">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-5 text-base leading-relaxed text-foreground/70 before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-signal"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={80} className="mt-16">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Capabilities
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-foreground/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={100} className="mt-10">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Stack
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/55">
              {project.stack.join(" · ")}
            </p>
          </Reveal>
        </div>
      </div>

      {next ? (
        <nav className="border-t border-border/80 bg-fog px-5 py-16 md:px-8 md:py-20">
          <Reveal className="mx-auto max-w-6xl">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Next case study
            </p>
            <Link
              href={getProjectPath(next.id)}
              className="group mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
            >
              <div>
                <p className="text-sm text-foreground/50">{next.category}</p>
                <p className="font-heading mt-2 text-3xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal-deep md:text-4xl">
                  {next.name}
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/60">
                  {next.tagline}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-deep">
                Read case study
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        </nav>
      ) : null}
    </article>
  );
}
