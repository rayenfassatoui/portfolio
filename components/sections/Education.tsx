"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export function Education() {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            className="py-16 md:py-32"
        >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Education</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Academic background.</h3>
                </motion.div>
                <div className="flex flex-col gap-10">
                    {DATA.education.map((edu, i) => (
                        <motion.div key={i} variants={itemVariants} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                            <div>
                                <h4 className="text-xl md:text-2xl font-medium tracking-tight transition-colors">{edu.degree}</h4>
                                <div className="mt-1 text-muted-foreground font-light">
                                    {edu.school}
                                </div>
                            </div>
                            <div className="font-mono text-sm tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap">
                                {edu.start} — {edu.end}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
