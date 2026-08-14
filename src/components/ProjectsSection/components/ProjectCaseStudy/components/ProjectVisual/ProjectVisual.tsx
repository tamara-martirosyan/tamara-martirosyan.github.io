import type { ComponentType } from "react";

import type { Project, ProjectId } from "@/lib/projects";

import DitatooWorkspaceMock from "./components/DitatooWorkspaceMock";
import KustReaderMock from "./components/KustReaderMock";
import TeamWorkerProductMock from "./components/TeamWorkerProductMock";

const visuals: Record<ProjectId, ComponentType> = {
  teamworker: TeamWorkerProductMock,
  ditatoo: DitatooWorkspaceMock,
  kust: KustReaderMock,
};

const ProjectVisual = ({
  project,
  caption = true,
}: {
  project: Project;
  caption?: boolean;
}) => {
  const Visual = visuals[project.id];
  const captionText = caption ? project.visualCaption : undefined;

  return (
    <div className="relative">
      {project.visualCaption ? (
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(24,106,222,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(11,27,51,0.08),transparent_45%)] blur-2xl"
        />
      ) : null}
      <Visual />
      {captionText ? (
        <p className="mt-4 text-center text-sm text-foreground/55">
          {captionText}
        </p>
      ) : null}
    </div>
  );
};

export default ProjectVisual;
