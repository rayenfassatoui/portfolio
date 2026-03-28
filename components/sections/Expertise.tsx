"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

export function Expertise() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="py-32 md:py-48"
        >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                <div>
                    <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Values & Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">What I bring to the table.</h3>
                </div>
                <div className="border-t border-border/20">
                    {DATA.services.map((service, i) => (
                        <div key={i} className="group flex items-center justify-between py-8 border-b border-border/20 hover:border-primary/50 transition-colors cursor-pointer">
                            <span className="text-3xl md:text-5xl font-medium tracking-tight text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {service}
                            </span>
                            <span className="w-12 h-12 rounded-full border border-border/30 flex items-center justify-center opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-500 delay-75">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
