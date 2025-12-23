"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";

export function ClubsSection() {
  const { language } = useLanguage();
  const clubsData = language === "fr" && DATA.clubsFr ? DATA.clubsFr : DATA.clubs;
  const title = language === "fr" ? "Vie Associative" : "Community";

  return (
    <section id="clubs" className="py-24 w-full bg-foreground text-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center">
          {title}
        </h2>

        <div className="grid gap-12">
          {clubsData.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="md:w-1/4">
                <span className="text-sm font-sans opacity-70 uppercase tracking-wider">
                  {club.start} — {club.end ?? (language === "en" ? "Present" : "Présent")}
                </span>
              </div>
              <div className="md:w-3/4 space-y-2">
                <h3 className="text-2xl font-serif font-medium">{club.name}</h3>
                <p className="text-lg font-sans opacity-90">{club.role}</p>
                <p className="text-base font-sans opacity-70 leading-relaxed">
                  {club.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}