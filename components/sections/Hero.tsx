"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { fadeInUp } from "@/lib/animations";

export function Hero() {

    // Custom stagger for the staggered text reveal
    const textRevealStagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Faster stagger for a tighter fluid motion
                delayChildren: 0.2, 
            }
        }
    };

    // The fluid, Apple-style word fly-up variant with blur
    const wordVariant: any = {
        hidden: { y: "100%", opacity: 0, filter: "blur(12px)" },
        visible: { 
            y: 0, 
            opacity: 1, 
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    const headline = ["Crafting", "the", "intelligence", "of", "the", "web."];

    return (
        <motion.section 
            initial="hidden" 
            animate="visible" 
            className="min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center relative md:-mt-10"
        >
            {/* Ambient Background Glows */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [0, -50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-20 md:right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen dark:mix-blend-color-dodge" 
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 40, 0],
                    y: [0, -40, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen dark:mix-blend-color-dodge" 
            />
            
            <div className="space-y-2 md:space-y-10 max-w-5xl relative z-10 group cursor-default">
                
                {/* Introduction Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-1.5 md:gap-3 px-2 py-1 md:px-5 md:py-2.5 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-xl shadow-sm hover:bg-secondary/80 transition-colors"
                >
                    <div className="relative flex items-center -ml-1">
                        <span className="absolute -bottom-0.5 -right-0.5 flex h-1.5 w-1.5 md:h-2.5 md:w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2.5 md:w-2.5 bg-emerald-500"></span>
                        </span>
                    </div>
                    <span className="text-[10px] md:text-base font-semibold tracking-wide flex items-center gap-1 md:gap-2 text-foreground/90 whitespace-nowrap">
                        Hi, I'm Rayen — Tunisian Web Developer 
                        <img src="https://flagcdn.com/w40/tn.png" alt="TN" className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] rounded-full object-cover shadow-sm opacity-90 aspect-square" />
                    </span>
                </motion.div>

                {/* Staggered Word Reveal Headline */}
                <motion.h1 
                    variants={textRevealStagger}
                    className="text-[3.25rem] md:text-7xl lg:text-[8.5rem] font-bold tracking-tighter leading-[0.85] md:leading-[0.9] -ml-1 md:-ml-2 flex flex-wrap gap-x-2 md:gap-x-6 gap-y-0 md:gap-y-6"
                >
                    {headline.map((word, i) => {
                        const isGradient = word === "intelligence";
                        return (
                            // Increased padding-bottom and padding-right to prevent cutoff on descenders (g) and slants (e)
                            <span key={i} className="overflow-hidden inline-flex pb-3 -mb-3 md:pb-8 md:-mb-8 pt-1 -mt-1 md:pt-2 md:-mt-2 pr-1 -mr-1 md:pr-2 md:-mr-2">
                                <motion.span 
                                    variants={wordVariant}
                                    className="text-foreground"
                                >
                                    {isGradient ? (
                                        <motion.span 
                                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                            style={{ backgroundSize: "200% auto" }}
                                            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-light pb-4 md:pb-6"
                                        >
                                            {word}
                                        </motion.span>
                                    ) : (
                                        word
                                    )}
                                </motion.span>
                            </span>
                        );
                    })}
                </motion.h1>
            </div>

            {/* Short Punchy Text and CTA Buttons */}
            <motion.div 
                variants={fadeInUp} 
                className="mt-4 md:mt-16 max-w-3xl flex flex-col gap-4 md:gap-12 items-start relative z-10 w-full"
            >
                <p className="text-sm md:text-2xl leading-relaxed font-light text-foreground/70">
                    Bridging the vital gap between robust backend systems and advanced AI models to deliver scalable, intelligent digital solutions.
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-6 mt-1 md:mt-4 w-full sm:w-auto">
                    <Button size="lg" className="rounded-full text-xs md:text-lg h-10 md:h-16 px-4 md:px-10 shadow-2xl group/btn hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground font-bold hover:shadow-primary/25 flex-1 sm:flex-none" asChild>
                        <Link href="#work">
                            Explore Work
                            <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-3 flex-shrink-0 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-xs md:text-lg h-10 md:h-16 px-4 md:px-10 hover:bg-secondary transition-all duration-300 border-border/50 backdrop-blur-sm group/cv font-medium text-foreground flex-1 sm:flex-none" asChild>
                        <Link href={`mailto:${DATA.contact.email}`}>
                            Contact
                        </Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full text-xs md:text-lg h-10 md:h-16 px-3 md:px-6 hover:bg-secondary transition-all duration-300 group/dl w-full sm:w-auto mt-0" asChild>
                        <a href="/resume.pdf" download="Rayen_Fassatoui_Resume.pdf">
                            <Download className="w-3.5 h-3.5 md:w-5 md:h-5 mr-1.5 md:mr-3 group-hover/dl:-translate-y-1 transition-transform" />
                            Resume
                        </a>
                    </Button>
                </div>
            </motion.div>
        </motion.section>
    );
}
