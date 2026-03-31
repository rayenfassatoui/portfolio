"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section className="py-24 md:py-32 relative border-t border-border/10">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start relative z-10">
                
                {/* Left: Sticky Section Title */}
                <div className="md:sticky md:top-48 pr-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-primary">Academic</h2>
                    </div>
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                        Roots &<br/>Foundations.
                    </h3>
                    <p className="mt-8 text-muted-foreground font-light text-lg md:text-xl">
                        A clean look at the institutions where I forged my core engineering logic.
                    </p>
                </div>

                {/* Right: The Clean Typography List */}
                <div className="flex flex-col border-t border-border/20 md:mt-24">
                    {DATA.education.map((edu, i) => (
                        <div 
                            key={i} 
                            // Interactive typography container without images
                            className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 md:py-16 border-b border-border/20 hover:border-foreground/40 md:hover:pl-8 md:hover:pr-4 transition-all duration-[600ms] ease-out"
                        >
                            <div className="flex-1">
                                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter group-hover:text-foreground/90 transition-colors duration-300">
                                    {edu.degree}
                                </h4>
                                <div className="mt-4 md:text-xl text-muted-foreground font-light flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-border group-hover:bg-primary transition-colors duration-300"></span>
                                    {edu.school}
                                </div>
                            </div>
                            
                            <div className="font-mono text-sm md:text-base tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap group-hover:text-foreground transition-colors duration-300">
                                {edu.start} — {edu.end}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
