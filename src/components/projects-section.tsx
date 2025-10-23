"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  const { language } = useLanguage();
  const projectsData = language === "fr" && DATA.projectsFr ? DATA.projectsFr : DATA.projects;

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {language === "en" ? "My Projects" : "Mes Projets"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {language === "en" 
                  ? "Check out my latest work" 
                  : "Découvrez mes derniers travaux"}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {language === "en"
                  ? "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
                  : "J'ai travaillé sur une variété de projets, des sites web simples aux applications web complexes. Voici quelques-uns de mes favoris."}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projectsData.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}