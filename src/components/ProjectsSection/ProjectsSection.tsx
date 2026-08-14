import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { featuredProjects, WORK_INDEX_PATH } from "@/lib/projects";

import ProjectList from "./components/ProjectList";

const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-y border-border/80 bg-fog px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex max-w-2xl flex-col gap-5 md:flex-row md:max-w-none md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Selected work</p>
            <h2 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
              Products built end to end.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/70">
              Case studies from products I lead and ship — AI collaboration,
              reading platforms, and enterprise workspaces.
            </p>
          </div>
          <Link
            href={WORK_INDEX_PATH}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-signal-deep transition-colors hover:text-ink"
          >
            Browse all work
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <ProjectList projects={featuredProjects} className="mt-8 md:mt-12" />
      </div>
    </section>
  );
};

export default ProjectsSection;
