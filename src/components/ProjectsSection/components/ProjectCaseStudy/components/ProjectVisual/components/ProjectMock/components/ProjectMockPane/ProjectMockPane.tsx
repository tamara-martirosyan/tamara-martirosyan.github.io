import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const ProjectMockPane = ({
  step,
  title,
  description,
  children,
  highlight = false,
}: {
  step: string;
  title: string;
  description: string;
  children: ReactNode;
  highlight?: boolean;
}) => {
  return (
    <div className={cn("p-4 sm:p-5", highlight ? "bg-[#f4f8ff]" : "bg-white")}>
      <div className="mb-4 flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-night font-mono text-[11px] text-white">
          {step}
        </span>
        <div>
          <p className="font-heading text-base font-semibold tracking-tight text-ink">
            {title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-foreground/55">
            {description}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjectMockPane;
