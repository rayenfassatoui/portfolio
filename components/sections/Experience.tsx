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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Experience() {
    return (
        <motion.section 
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            className="py-16 md:py-32 scroll-mt-32 relative"
        >
            {/* Outline Background Typography */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center opacity-[0.06] dark:opacity-[0.03]">
                <motion.h2 
                    initial={{ x: "-10%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-[12rem] md:text-[22rem] font-black uppercase tracking-tighter whitespace-nowrap text-transparent"
                    style={{ WebkitTextStroke: "3px hsl(var(--foreground))" }}
                >
                    EXPERIENCE
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start relative z-10">
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Experience</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">My career journey.</h3>
                </motion.div>
                <div className="flex flex-col gap-12">
                    {DATA.work.map((role, i) => (
                        <motion.div key={i} variants={itemVariants} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
