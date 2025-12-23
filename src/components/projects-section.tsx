"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { language } = useLanguage();
  const projectsData = language === "fr" && DATA.projectsFr ? DATA.projectsFr : DATA.projects;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center">
          {language === "en" ? "Selected Works" : "Travaux Sélectionnés"}
        </h2>

        <div className="relative flex flex-col">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              href={project.href || "#"}
              className="group relative border-t border-border py-12 transition-colors hover:bg-muted/50"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 relative">
                <h3 className="text-4xl md:text-6xl font-serif font-medium text-foreground group-hover:italic transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-col md:items-end gap-2">
                  <p className="text-sm font-sans text-muted-foreground uppercase tracking-widest">
                    {project.technologies[0]} • {project.technologies[1]}
                  </p>
                  <p className="text-xs md:text-sm font-sans text-muted-foreground/60 max-w-md md:text-right line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          <div className="hidden md:block pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[600px] h-[400px] opacity-0 transition-opacity duration-500"
            style={{ opacity: hoveredIndex !== null ? 1 : 0 }}
          >
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && projectsData[hoveredIndex] && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={projectsData[hoveredIndex].image || "/placeholder.png"}
                    alt={projectsData[hoveredIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}