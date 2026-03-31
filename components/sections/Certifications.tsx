"use client";

import { motion, Variants } from "framer-motion";
import { DATA } from "@/data/resume";
import { Award, ShieldCheck } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Certifications() {
    return (
        <section className="py-24 md:py-32 relative border-t border-border/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 flex items-center justify-end opacity-[0.03] dark:opacity-[0.02]">
                <motion.h2 
                    initial={{ x: "10%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-[10rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap text-transparent translate-x-1/4"
                    style={{ WebkitTextStroke: "2px hsl(var(--foreground))" }}
                >
                    AWARDS
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start relative z-10">
                
                {/* Left: Sticky Section Title */}
                <div className="md:sticky md:top-48 pr-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-primary">Certifications</h2>
                        </motion.div>
                        <motion.h3 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                            The<br/>Vault.
                        </motion.h3>
                        <motion.p variants={itemVariants} className="mt-8 text-muted-foreground font-light text-lg md:text-xl max-w-sm">
                            Professional track-records, licenses, and technical validations.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Right: The Grid */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-16"
                >
                    {DATA.certifications?.map((cert, i) => (
                        <motion.div 
                            key={i} 
                            variants={itemVariants}
                            className="group relative p-8 md:p-10 rounded-[2rem] bg-secondary/40 hover:bg-secondary/80 border border-border/30 hover:border-foreground/20 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[220px]"
                        >
                            {/* Ambient glowing orb on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border/50 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Award className="w-6 h-6" />
                                </div>
                                
                                <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                    {cert.title}
                                </h4>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 mt-8">
                                <span className="w-8 h-[2px] bg-border group-hover:bg-primary transition-colors duration-300"></span>
                                <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase group-hover:text-foreground transition-colors duration-300">
                                    {cert.issuer}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
