"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

export function Education() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 md:py-32"
        >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                <div>
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Education</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Academic background.</h3>
                </div>
                <div className="flex flex-col gap-10">
                    {DATA.education.map((edu, i) => (
                        <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                            <div>
                                <h4 className="text-xl md:text-2xl font-medium tracking-tight transition-colors">{edu.degree}</h4>
                                <div className="mt-1 text-muted-foreground font-light">
                                    {edu.school}
                                </div>
                            </div>
                            <div className="font-mono text-sm tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap">
                                {edu.start} — {edu.end}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
