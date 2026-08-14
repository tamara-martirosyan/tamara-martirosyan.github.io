import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
};

export default robots;
