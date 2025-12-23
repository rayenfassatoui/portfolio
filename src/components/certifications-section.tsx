"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CertificationsSection() {
  const { language } = useLanguage();
  const hackathonsData = language === "fr" && DATA.hackathonsFr ? DATA.hackathonsFr : DATA.hackathons;
  const title = language === "fr" ? "Certifications" : "Certifications";

  return (
    <section id="certifications" className="py-24 w-full">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center">
          {title}
        </h2>

        <div className="grid gap-8">
          {hackathonsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-8"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-medium group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground">
                  {project.location}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="text-sm font-sans text-muted-foreground/60">
                  {project.dates}
                </span>
                {project.links && project.links.length > 0 && (project.links as any)[0] && (
                  <Link href={(project.links as any)[0].href} target="_blank" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="size-5" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
