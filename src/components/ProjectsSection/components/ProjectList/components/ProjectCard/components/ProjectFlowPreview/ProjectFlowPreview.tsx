import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

const ProjectFlowPreview = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white shadow-[0_16px_40px_-28px_rgba(11,27,51,0.35)] transition-[border-color,box-shadow] duration-300 group-hover:border-signal/25 group-hover:shadow-[0_20px_44px_-24px_rgba(24,106,222,0.35)]",
        className,
      )}
    >
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
