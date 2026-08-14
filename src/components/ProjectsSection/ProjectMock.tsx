import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ProjectMock({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
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
}

export function ProjectMockPane({
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
}) {
  return (
    <div className={cn("p-4 sm:p-5", highlight ? "bg-[#f4f8ff]" : "bg-white")}>
      <div className="mb-4 flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-night font-mono text-[11px] text-white">
          {step}
        </span>
        <div>
          <h4 className="font-heading text-base font-semibold tracking-tight text-ink">
            {title}
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-foreground/55">
            {description}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
