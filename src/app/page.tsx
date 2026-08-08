import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FocusSection from "@/components/FocusSection";
import Hero from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
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
