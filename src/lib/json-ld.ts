import { site } from "@/lib/site";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}/og.png`,
    jobTitle: [site.title, "CTO & Co-Founder"],
    description: site.seo.description,
    email: `mailto:${site.contact.email}`,
    telephone: site.contact.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yerevan",
      addressCountry: "AM",
    },
    worksFor: {
      "@type": "Organization",
      name: "TeamWorker.ai",
      url: site.links.teamworker,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.education.school,
    },
    sameAs: [site.links.github, site.links.linkedin, site.links.teamworker],
    knowsAbout: site.stack,
  };
}
