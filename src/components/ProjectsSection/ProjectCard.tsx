import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { getProjectPath, type Project } from "@/lib/projects";

import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({
  project,
  index,
  summary = false,
}: {
  project: Project;
  index: number;
  summary?: boolean;
}) {
  const href = getProjectPath(project.id);

  return (
    <Reveal delayMs={Math.min(index * 80, 160)}>
      <article>
        <Link
          href={href}
          className="group flex h-full flex-col rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/50"
        >
          <ProjectVisual project={project} caption={false} />

          <div className="mt-6 flex flex-1 flex-col">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-[11px] tracking-[0.2em] text-signal-deep uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground/25">/</span>
              <span className="text-sm text-foreground/55">{project.category}</span>
            </div>

            <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal-deep md:text-3xl">
              <span className="inline-flex items-center gap-2">
                {project.name}
                <ArrowUpRight className="size-5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </span>
            </h3>
            <p className="mt-2 text-sm font-medium text-signal-deep">{project.role}</p>
            <p className="mt-4 text-base leading-relaxed text-foreground/70">
              {project.tagline}
            </p>
            {summary ? (
              <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                {project.summary}
              </p>
            ) : null}

            <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-deep transition-colors group-hover:text-ink">
              Read case study
              <ArrowUpRight className="size-4" />
            </p>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}
