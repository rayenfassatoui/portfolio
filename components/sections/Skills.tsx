"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function Skills() {
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
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Skills</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical stack.</h3>
                </motion.div>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    {DATA.skills.map((skill, i) => (
                        <motion.div key={i} variants={itemVariants} className="px-5 py-3 rounded-full border border-border/40 bg-secondary/10 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-default font-medium">
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
