import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FocusSection from "@/components/FocusSection";
import Hero from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import { getPersonJsonLd } from "@/lib/json-ld";

export default function Home() {
  const jsonLd = getPersonJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <WorkSection />
        <FocusSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
