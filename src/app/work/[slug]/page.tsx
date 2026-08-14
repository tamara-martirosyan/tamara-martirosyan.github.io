import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { ProjectCaseStudy } from "@/components/ProjectsSection";
import { getProjectJsonLd } from "@/lib/json-ld";
import { getProjectById, getProjectPath, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return { title: "Not found" };
  }

  const path = getProjectPath(project.id);

  return {
    title: project.name,
    description: project.tagline,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.tagline,
      url: `${site.url}${path}`,
    },
  };
}

export default async function WorkProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getProjectJsonLd(project)} />
      <main className="flex-1">
        <ProjectCaseStudy project={project} />
      </main>
    </>
  );
}
