"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWorkData } from "@/lib/language-helpers";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  const { language } = useLanguage();
  const workData = getWorkData(language);

  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">
            {language === "en" ? "Work Experience" : "Expérience Professionnelle"}
          </h2>
        </BlurFade>
        {workData.map((work, id) => (
          <BlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? (language === "en" ? "Present" : "Présent")}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}