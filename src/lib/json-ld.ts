import { getProjectPath, projects, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}/og.png`,
    jobTitle: site.title,
    description: site.seo.description,
    email: `mailto:${site.contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yerevan",
      addressCountry: "AM",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.education.school,
    },
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [...site.stack, ...projects.map((project) => project.name)],
  };
}

export function getWorkIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Selected work — ${site.name}`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}${getProjectPath(project.id)}`,
      name: project.name,
    })),
  };
}

export function getProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${site.url}${getProjectPath(project.id)}`,
    creator: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    keywords: project.stack.join(", "),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}
