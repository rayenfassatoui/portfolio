"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function CertificationsSection() {
  const { language } = useLanguage();

  const hackathonsData = language === "fr" && DATA.hackathonsFr ? DATA.hackathonsFr : DATA.hackathons;
  
  const title = language === "fr" ? "Développement Professionnel" : "Professional Development";
  const subtitle = language === "fr" ? "Certifications" : "Certifications";
  const description = language === "fr" 
    ? `Je suis engagé dans l'apprentissage continu et la croissance. J'ai obtenu un total de ${DATA.hackathons.length} certifications, mettant en évidence mon dévouement et mes réalisations.`
    : `I'm committed to continuous learning and growth. I have earned a total of ${DATA.hackathons.length} certifications, highlighting my dedication and achievements.`;

  return (
    <section id="hackathons">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {subtitle}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {hackathonsData.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
