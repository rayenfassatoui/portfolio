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

export function Certifications() {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            className="pb-16 pt-8 md:pb-32 md:pt-16 border-t border-border/10"
        >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start pt-16 md:pt-32">
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Certifications</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Continuous learning.</h3>
                </motion.div>
                <div className="flex flex-col gap-10">
                    {DATA.certifications?.map((cert, i) => (
                        <motion.div key={i} variants={itemVariants} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                            <div>
                                <h4 className="text-xl md:text-2xl font-medium tracking-tight transition-colors flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary/80" />
                                    {cert.title}
                                </h4>
                                <div className="mt-1 text-muted-foreground font-light pl-5">
                                    {cert.issuer}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
