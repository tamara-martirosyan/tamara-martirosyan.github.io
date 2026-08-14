import type { ReactNode } from "react";

const ProjectMock = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_60px_-28px_rgba(11,27,51,0.35)]">
      <div className="border-b border-border bg-fog px-4 py-3 sm:px-5">
        <p className="font-heading text-sm font-semibold tracking-tight text-ink">
          {title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-foreground/55">
          {description}
        </p>
      </div>

      <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {children}
      </div>
    </div>
  );
};

export default ProjectMock;
