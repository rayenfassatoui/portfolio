import { ProjectsSection } from "@/components/projects-section";
import { HeroSection } from "@/components/hero-section";
import { ContactSection } from "@/components/contact-section";
import { WorkSection } from "@/components/work-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ClubsSection } from "@/components/clubs-section";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ClubsSection />
      <ContactSection />
    </main>
  );
}
