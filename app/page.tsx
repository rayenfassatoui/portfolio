"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Expertise } from "@/components/sections/Expertise";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-1000 bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}>
        {/* Subtle Ambient Glow */}
        <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] mix-blend-screen dark:bg-primary/20" 
        />

        <Header />

        <main className="pt-48 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full overflow-hidden">
            <Hero />
            <Marquee />
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Expertise />
            <Work />
        </main>

        <Footer />
    </div>
  )
}
