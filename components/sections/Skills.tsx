"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

export function Skills() {
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
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Skills</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical stack.</h3>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    {DATA.skills.map((skill, i) => (
                        <div key={i} className="px-5 py-3 rounded-full border border-border/40 bg-secondary/10 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-default font-medium">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
