import type { ComponentType } from "react";

import type { Project, ProjectId } from "@/lib/projects";

import DitatooWorkspaceMock from "./components/DitatooWorkspaceMock";
import KustReaderMock from "./components/KustReaderMock";
import ParzTechBlogMock from "./components/ParzTechBlogMock";
import TeamWorkerProductMock from "./components/TeamWorkerProductMock";

const visuals: Record<ProjectId, ComponentType> = {
  teamworker: TeamWorkerProductMock,
  ditatoo: DitatooWorkspaceMock,
  kust: KustReaderMock,
  parztech: ParzTechBlogMock,
};

const ProjectVisual = ({ project }: { project: Project }) => {
  const Visual = visuals[project.id];
  return <Visual />;
};

export default ProjectVisual;
