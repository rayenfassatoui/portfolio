"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWorkData } from "@/lib/language-helpers";

export function WorkSection() {
  const { language } = useLanguage();
  const workData = getWorkData(language);

  return (
    <section id="work" className="py-24 w-full">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center">
          {language === "en" ? "Experience" : "Expérience"}
        </h2>

        <div className="space-y-16">
          {workData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 border-l-2 border-border pl-8 md:pl-0 md:border-l-0"
            >
              <div className="md:text-right">
                <span className="text-sm font-sans text-muted-foreground uppercase tracking-wider">
                  {work.start} — {work.end ?? (language === "en" ? "Present" : "Présent")}
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-medium">{work.company}</h3>
                  <p className="text-lg font-sans text-muted-foreground">{work.title}</p>
                </div>
                <p className="text-base font-sans leading-relaxed text-foreground/80">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}