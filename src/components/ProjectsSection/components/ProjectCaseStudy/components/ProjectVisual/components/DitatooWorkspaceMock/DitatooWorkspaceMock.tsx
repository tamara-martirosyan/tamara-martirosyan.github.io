import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import InViewVideo from "./components/InViewVideo";

const shots = [
  {
    step: "01",
    title: "Repository",
    description: "Browse folders and topics across the content tree.",
    src: "/projects/ditatoo/repository.jpg",
    alt: "DITAToo workspace with the repository folder tree and an empty select-a-folder state",
  },
  {
    step: "02",
    title: "Document map",
    description: "Structure guides with nested topics and drag-and-drop editing.",
    src: "/projects/ditatoo/map.jpg",
    alt: "DITAToo DITA map builder showing EasyPrint QuickStartGuide with nested API topics",
  },
  {
    step: "03",
    title: "Details panel",
    description: "Workflow, taxonomy, versions, and metadata in context.",
    src: "/projects/ditatoo/details.jpg",
    alt: "DITAToo map view with the details panel open for workflow, taxonomy, and versions",
  },
] as const;

const MediaFrame = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.25rem] border border-border/70 bg-white shadow-[0_40px_80px_-40px_rgba(11,27,51,0.55)] ring-1 ring-black/[0.04] md:rounded-[1.5rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const DitatooWorkspaceMock = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Product walkthrough</p>
        <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Built for dense authoring work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
          A full pass through the workspace — from repository browsing to map
          structure and contextual details.
        </p>
      </div>

      <MediaFrame>
        <InViewVideo
          src="/projects/ditatoo/walkthrough.mp4"
          poster="/projects/ditatoo/walkthrough-poster.jpg"
          label="DITAToo product walkthrough"
        />
      </MediaFrame>

      <div className="space-y-16 md:space-y-28">
        {shots.map((shot) => (
          <section
            key={shot.step}
            className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 lg:even:flex-row-reverse"
          >
            <div className="lg:w-[38%] lg:shrink-0">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Step {shot.step}
              </p>
              <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {shot.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/60">
                {shot.description}
              </p>
            </div>

            <MediaFrame className="min-w-0 lg:flex-1">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={2400}
                height={1334}
                className="h-auto w-full"
              />
            </MediaFrame>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DitatooWorkspaceMock;
