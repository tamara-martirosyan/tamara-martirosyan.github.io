import type { MetadataRoute } from "next";

import { getProjectPath, projects, WORK_INDEX_PATH } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}${WORK_INDEX_PATH}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map(
      (project): MetadataRoute.Sitemap[number] => ({
        url: `${site.url}${getProjectPath(project.id)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    ),
  ];

  return routes;
}
