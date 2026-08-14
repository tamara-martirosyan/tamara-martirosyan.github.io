import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { ProjectMock, ProjectMockPane } from "./ProjectMock";

function MockCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border px-3 py-2", className)}>
      {children}
    </div>
  );
}

export function KustReaderMock() {
  return (
    <ProjectMock
      title="Kust Reader"
      description="How a reader moves through the product — from catalog to EPUB page to annotation and support."
    >
      <ProjectMockPane
        step="1"
        title="Discover"
        description="Browse recommended essays, authors, and categories."
      >
        <div className="space-y-2 text-sm">
          <MockCard className="border-signal/30 bg-signal-soft">
            <p className="text-xs text-signal-deep/70">Recommended</p>
            <p className="mt-1 font-medium text-signal-deep">
              Letters from the Shore
            </p>
            <p className="mt-0.5 text-xs text-signal-deep/70">
              Ani Petrosyan · 18 min
            </p>
          </MockCard>
          <MockCard className="border-border bg-background">
            <p className="font-medium text-ink">Winter in Gyumri</p>
            <p className="mt-0.5 text-xs text-foreground/50">New · Essay</p>
          </MockCard>
          <MockCard className="border-border bg-background text-foreground/65">
            Authors · Categories · Library
          </MockCard>
        </div>
      </ProjectMockPane>

      <ProjectMockPane
        step="2"
        title="Read"
        description="Open the EPUB in a paginated viewer with saved place and theme."
        highlight
      >
        <div className="space-y-2 text-sm">
          <MockCard className="border-signal/40 bg-white">
            <p className="text-xs text-foreground/45">Chapter 3</p>
            <p className="mt-1 font-medium text-ink">The last ferry</p>
            <p className="mt-2 text-xs leading-relaxed text-foreground/60">
              The harbor lights thinned until only the water kept time…
            </p>
          </MockCard>
          <MockCard className="border-signal/30 bg-signal-soft text-signal-deep">
            Progress 42% · Sepia
          </MockCard>
          <MockCard className="border-border bg-white text-foreground/65">
            Font · brightness · resume CFI
          </MockCard>
        </div>
      </ProjectMockPane>

      <ProjectMockPane
        step="3"
        title="Keep & support"
        description="Highlight, bookmark, comment, and donate to the author."
      >
        <div className="space-y-2 text-sm">
          <MockCard className="border-signal/30 bg-signal-soft">
            <p className="font-medium text-signal-deep">Highlight</p>
            <p className="mt-1 text-xs leading-relaxed text-signal-deep/70">
              “only the water kept time”
            </p>
          </MockCard>
          <MockCard className="border-border bg-background text-foreground/65">
            Page bookmark · Ch. 3
          </MockCard>
          <MockCard className="border-border bg-background text-foreground/65">
            Threaded comments
          </MockCard>
          <MockCard className="border-border bg-background text-foreground/65">
            Support the author
          </MockCard>
        </div>
      </ProjectMockPane>
    </ProjectMock>
  );
}
