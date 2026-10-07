import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

import { PREVIEW_FRAME_CLASS_NAME } from "../../constants";

const ProjectFlowPreview = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <div className={cn(PREVIEW_FRAME_CLASS_NAME, className)}>
      <div className="border-b border-border bg-fog px-3.5 py-2.5">
        <p className="font-heading text-xs font-semibold tracking-tight text-ink">
          {project.name}
        </p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-foreground/45">
          How it works
        </p>
      </div>
      <ol className="divide-y divide-border">
        {project.flow.map((step, index) => (
          <li key={step} className="flex items-center gap-3 px-3.5 py-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-night font-mono text-[10px] text-white">
              {index + 1}
            </span>
            <span className="text-sm text-foreground/70">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProjectFlowPreview;
