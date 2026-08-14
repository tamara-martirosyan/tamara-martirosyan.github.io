import type { Metadata } from "next";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FocusSection from "@/components/FocusSection";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import { getPersonJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getPersonJsonLd()} />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <WorkSection />
        <FocusSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
