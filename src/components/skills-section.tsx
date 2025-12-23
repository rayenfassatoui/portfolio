"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";

export function SkillsSection() {
  const { language } = useLanguage();
  const skillsData = language === "fr" && DATA.skillsFr ? DATA.skillsFr : DATA.skills;

  return (
    <section id="skills" className="py-24 w-full bg-foreground text-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center">
          {language === "fr" ? "Compétences" : "Skills"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-serif font-medium mb-6 border-b border-background/20 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {skills.map((skill: string, i: number) => (
                  <span key={skill} className="font-sans text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
