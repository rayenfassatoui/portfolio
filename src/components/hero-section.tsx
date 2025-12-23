"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";

export function HeroSection() {
  const { language } = useLanguage();

  const greeting = language === "fr" ? "Bonjour, je suis" : "Hello, I am";
  const role = language === "fr" ? "Développeur Web & Créatif" : "Web Developer & Creative";
  const description = language === "fr" ? DATA.summaryFr : DATA.summary;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Custom ease for "heavy" feel
      }
    },
  };

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 max-w-4xl"
      >
        <motion.p variants={item} className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-4 font-sans">
          {greeting}
        </motion.p>

        <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight mb-6 text-foreground">
          {DATA.name.split(" ")[0]}
          <span className="block text-4xl md:text-6xl lg:text-7xl text-muted-foreground italic mt-2">
            {DATA.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.div variants={item} className="h-px w-24 bg-border mx-auto my-8" />

        <motion.h2 variants={item} className="text-xl md:text-2xl font-sans font-light tracking-wide text-foreground/80 mb-8">
          {role}
        </motion.h2>

        <motion.p variants={item} className="max-w-xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed font-sans">
          {description}
        </motion.p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
