import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectList({
  projects,
  showSummary = false,
  className,
}: {
  projects: readonly Project[];
  showSummary?: boolean;
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "divide-y divide-border/80 border-y border-border/80",
        className,
      )}
    >
      {projects.map((project, index) => (
        <li key={project.id}>
          <ProjectCard
            project={project}
            index={index}
            showSummary={showSummary}
          />
        </li>
      ))}
    </ol>
  );
}
