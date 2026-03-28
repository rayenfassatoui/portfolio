"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { fadeInUp, stagger } from "@/lib/animations";

export function Hero() {
    return (
        <motion.section 
            variants={stagger} 
            initial="hidden" 
            animate="visible" 
            className="min-h-[75vh] flex flex-col justify-center relative"
        >
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
                className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen dark:mix-blend-color-dodge" 
            />
            
            <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8 max-w-5xl relative z-10 group cursor-default">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-secondary/30 border border-border/40 backdrop-blur-md shadow-sm"
                >
                    <div className="relative flex items-center -ml-1">
                        <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                    </div>
                    <span className="text-sm md:text-base font-medium tracking-wide flex items-center gap-2">
                        Hi, I'm Rayen — Tunisian Web Developer 
                        <img src="https://flagcdn.com/w40/tn.png" alt="TN" className="w-[18px] h-[18px] rounded-full object-cover shadow-sm opacity-90 aspect-square" />
                    </span>
                </motion.div>

                <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] -ml-1 md:-ml-2 text-balance transition-all duration-700 md:group-hover:tracking-tight">
                    Crafting the <br className="hidden md:block"/>
                    <motion.span 
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "200% auto" }}
                        className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-light pb-4 md:pb-6"
                    >
                        intelligence
                    </motion.span> of the web.
                </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 md:mt-16 max-w-4xl flex flex-col gap-8 md:gap-10 items-start relative z-10">
                <p className="text-lg md:text-xl leading-relaxed font-light text-balance text-muted-foreground">
                    {DATA.summary}
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-xl group/btn hover:scale-105 transition-all duration-300 bg-foreground text-background hover:bg-foreground/90" asChild>
                        <Link href="#work">
                            View Selected Work
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 hover:bg-secondary transition-all duration-300 border-border/40 backdrop-blur-sm group/cv" asChild>
                        <a href="/resume.pdf" download="Rayen_Fassatoui_Resume.pdf">
                            <Download className="w-5 h-5 mr-2 group-hover/cv:translate-y-0.5 transition-transform" />
                            Download CV
                        </a>
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full text-base h-14 px-8 hover:bg-secondary transition-all duration-300 font-medium" asChild>
                        <Link href={`mailto:${DATA.contact.email}`}>
                            Let's Talk
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </motion.section>
    );
}
