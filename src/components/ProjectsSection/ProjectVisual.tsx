import type { ComponentType } from "react";

import type { Project, ProjectId } from "@/lib/projects";

import { DitatooWorkspaceMock } from "./DitatooWorkspaceMock";
import { KustReaderMock } from "./KustReaderMock";
import { TeamWorkerProductMock } from "./TeamWorkerProductMock";

const visuals: Record<ProjectId, ComponentType> = {
  teamworker: TeamWorkerProductMock,
  ditatoo: DitatooWorkspaceMock,
  kust: KustReaderMock,
};

export function ProjectVisual({
  project,
  caption = true,
}: {
  project: Project;
  caption?: boolean;
}) {
  const Visual = visuals[project.id];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(24,106,222,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(11,27,51,0.08),transparent_45%)] blur-2xl"
      />
      <Visual />
      {caption ? (
        <p className="mt-4 text-center text-sm text-foreground/55">
          {project.visualCaption}
        </p>
      ) : null}
    </div>
  );
}
