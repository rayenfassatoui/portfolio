import { WorkSection } from "@/components/work-section";
import { ClubsSection } from "@/components/clubs-section";
import { ProjectsSection } from "@/components/projects-section";
import { HeroSection } from "@/components/hero-section";
import { EducationSection } from "@/components/education-section";
import { CertificationsSection } from "@/components/certifications-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ClubsSection />
      <ContactSection />
    </main>
  );
}
