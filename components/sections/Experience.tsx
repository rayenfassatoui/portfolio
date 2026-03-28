"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

export function Experience() {
    return (
        <motion.section 
            id="experience"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 md:py-32 scroll-mt-32"
        >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                <div>
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Experience</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">My career journey.</h3>
                </div>
                <div className="flex flex-col gap-12">
                    {DATA.work.map((role, i) => (
                        <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                            <div className="md:w-3/4">
                                <h4 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">{role.title}</h4>
                                <div className="flex items-center gap-3 mt-1 text-muted-foreground font-light">
                                    <span>{role.company}</span>
                                    {role.badges && role.badges.length > 0 && (
                                        <span className="flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-border"></span>
                                            {role.badges.join(", ")}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-4 text-base md:text-lg leading-relaxed font-light text-muted-foreground">
                                    {role.description}
                                </p>
                            </div>
                            <div className="font-mono text-sm tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap">
                                {role.start} — {role.end}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
