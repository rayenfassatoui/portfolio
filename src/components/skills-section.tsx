"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function SkillsSection() {
  const { language } = useLanguage();

  const skillsData = language === "fr" && DATA.skillsFr ? DATA.skillsFr : DATA.skills;

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">{language === "fr" ? "Compétences" : "Skills"}</h2>
        </BlurFade>
        <div className="flex flex-col gap-2">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div key={category} className="mb-2">
              <BlurFade delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05}>
                <h3 className="text-md font-medium mb-1">{category}</h3>
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill, skillIndex) => (
                    <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05 + skillIndex * 0.02}>
                      <Badge key={skill}>{skill}</Badge>
                    </BlurFade>
                  ))}
                </div>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
