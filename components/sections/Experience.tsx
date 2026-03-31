"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { DATA } from "@/data/resume";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item open by default

    return (
        <motion.section 
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
                
                <div className="flex flex-col w-full">
                    {DATA.work.map((role, i) => {
                        const isOpen = expandedIndex === i;

                        return (
                            <motion.div 
                                key={i} 
                                variants={itemVariants} 
                                className="group flex flex-col justify-between border-b border-border/10 cursor-pointer overflow-hidden transition-colors hover:bg-foreground/[0.02] -mx-4 px-4 py-4 md:py-6 rounded-2xl"
                                onClick={() => setExpandedIndex(isOpen ? null : i)}
                            >
                                {/* Header Area */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-out ${isOpen ? 'bg-foreground text-background scale-100' : 'bg-secondary text-foreground group-hover:scale-110'}`}>
                                            <div className="relative w-5 h-5 flex items-center justify-center">
                                                <motion.span 
                                                    className="absolute w-4 h-[2px] bg-current rounded-full"
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                                <motion.span 
                                                    className="absolute w-4 h-[2px] bg-current rounded-full"
                                                    animate={{ rotate: isOpen ? 180 : 90, opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
                                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">{role.title}</h4>
                                            <div className="flex items-center gap-3 mt-1 text-muted-foreground font-medium">
                                                <span>{role.company}</span>
                                                {role.badges && role.badges.length > 0 && (
                                                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50 font-mono">
                                                        <span className="w-1 h-1 rounded-full bg-border"></span>
                                                        {role.badges.join(", ")}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-mono text-sm md:text-base tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap pl-14 md:pl-0 mt-2 md:mt-0 opacity-80">
                                        {role.start} — {role.end}
                                    </div>
                                </div>

                                {/* Accordion Content Area */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
                                            className="overflow-hidden w-full pl-14 md:pl-[4.5rem]"
                                        >
                                            <ul className="mt-6 flex flex-col gap-3 text-base md:text-lg leading-relaxed font-light text-muted-foreground max-w-3xl pb-4 list-none">
                                                {role.description.split('. ').filter(Boolean).map((sentence, idx) => (
                                                    <li key={idx} className="relative pl-6">
                                                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                        {sentence}{sentence.trim().endsWith('.') ? '' : '.'}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
