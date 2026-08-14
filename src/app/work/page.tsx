import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { ProjectList } from "@/components/ProjectsSection";
import { getWorkIndexJsonLd } from "@/lib/json-ld";
import { projects, WORK_INDEX_PATH } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Selected work",
  description: `Case studies from ${site.name} — AI collaboration, reading platforms, and enterprise workspaces.`,
  alternates: {
    canonical: WORK_INDEX_PATH,
  },
  openGraph: {
    title: `Selected work — ${site.name}`,
    description:
      "Case studies from products built end to end: TeamWorker.ai, DITAToo Web, and Kust Reader.",
    url: `${site.url}${WORK_INDEX_PATH}`,
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={getWorkIndexJsonLd()} />
      <main className="flex-1 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Selected work</p>
          <h1 className="font-heading mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-ink md:text-6xl">
            Products built end to end.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Deep dives into products I lead and ship — from AI marketplaces and
            reading platforms to enterprise authoring workspaces.
          </p>

          <ProjectList projects={projects} showSummary className="mt-12" />
        </div>
      </main>
    </>
  );
}
