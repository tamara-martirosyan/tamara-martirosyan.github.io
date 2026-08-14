import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { getProjectPath, type Project } from "@/lib/projects";

import { ProjectFlowPreview } from "./ProjectFlowPreview";

const PREVIEW_STACK_COUNT = 4;

export function ProjectCard({
  project,
  index,
  showSummary = false,
}: {
  project: Project;
  index: number;
  showSummary?: boolean;
}) {
  const href = getProjectPath(project.id);
  const stack = project.stack.slice(0, PREVIEW_STACK_COUNT);
  const position = String(index + 1).padStart(2, "0");

  return (
    <Reveal delayMs={Math.min(index * 60, 120)}>
      <article className="group relative rounded-2xl has-focus-visible:ring-2 has-focus-visible:ring-signal/50">
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-12 md:py-12">
          <div className="grid min-w-0 flex-1 gap-5 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-10">
            <span className="font-mono text-sm tracking-[0.14em] text-signal-deep transition-transform duration-500 group-hover:translate-x-1">
              {position}
            </span>

            <div className="min-w-0">
              <p className="text-sm text-foreground/50">{project.category}</p>

              <h3 className="font-heading mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                <Link
                  href={href}
                  aria-label={`${project.name} case study`}
                  className="inline-flex items-center gap-2 rounded-sm text-ink outline-none transition-colors group-hover:text-signal-deep after:absolute after:inset-0 after:z-10"
                >
                  {project.name}
                  <ArrowUpRight className="size-5 opacity-35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </h3>

              <p className="mt-2 text-sm font-medium text-signal-deep">
                {project.role}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70">
                {project.tagline}
              </p>
              {showSummary ? (
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/55">
                  {project.summary}
                </p>
              ) : null}

              <ul className="mt-5 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-white px-2.5 py-1 text-xs text-foreground/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-deep transition-colors group-hover:text-ink">
                Read case study
                <ArrowUpRight className="size-4" aria-hidden />
              </p>
            </div>
          </div>

          <ProjectFlowPreview
            project={project}
            className="pointer-events-none w-full shrink-0 md:max-w-xs lg:w-64 lg:max-w-none"
          />
        </div>
      </article>
    </Reveal>
  );
}
