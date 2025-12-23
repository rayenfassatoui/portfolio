"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const { language } = useLanguage();

  const title = language === "fr" ? "Parlons-en" : "Let's Talk";
  const subtitle = language === "fr" ? "Vous avez un projet en tête ?" : "Have a project in mind?";
  const email = DATA.contact.email;

  return (
    <section id="contact" className="py-32 w-full bg-foreground text-background">
      <div className="container px-4 mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base font-sans uppercase tracking-widest mb-4 opacity-70">
            {subtitle}
          </p>
          <h2 className="text-6xl md:text-9xl font-serif font-bold mb-12 tracking-tight">
            {title}
          </h2>

          <Link
            href={`mailto:${email}`}
            className="group flex items-center gap-2 text-2xl md:text-4xl font-sans hover:italic transition-all duration-300 border-b border-background/20 pb-2 hover:border-background"
          >
            {email}
            <ArrowUpRight className="size-6 md:size-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>

          <div className="mt-16 flex gap-8">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                className="text-sm md:text-base font-sans uppercase tracking-wider hover:underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity"
              >
                {name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
