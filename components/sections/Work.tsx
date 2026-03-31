"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { stagger } from "@/lib/animations";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Work() {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            id="work" 
            className="py-16 md:py-32 relative"
        >
            {/* Outline Background Typography */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center opacity-[0.05] dark:opacity-[0.03]">
                <motion.h2 
                    initial={{ x: "10%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="text-[14rem] md:text-[26rem] font-black uppercase tracking-tighter whitespace-nowrap text-transparent"
                    style={{ WebkitTextStroke: "3px hsl(var(--foreground))" }}
                >
                    WORKS
                </motion.h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/10 mb-12 flex-wrap relative z-10">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Selected Work</h2>
                    <p className="text-muted-foreground text-xl font-light">A showcase of minimal aesthetics and complex AI logic.</p>
                </div>
            </div>

            {/* Pure Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10">
                {DATA.projects.map((item, i) => (
                    <motion.div 
                        variants={itemVariants} 
                        key={i} 
                        className="group relative aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-secondary shadow-lg border border-border/5"
                    >
                        {/* Background Image layer */}
                        <div className="absolute inset-0">
                            {item.image ? (
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center transition-transform duration-1000 group-hover:scale-110`}>
                                    <h4 className="text-white/80 font-mono tracking-widest text-2xl rotate-[-20deg] scale-150 opacity-10 font-bold">{item.title}</h4>
                                </div>
                            )}
                        </div>

                        {/* Interactive Overlay Layer (Appears on Hover) */}
                        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-between p-6 md:p-10 z-10">
                            
                            {/* Header: Title & Direct Link */}
                            <div className="flex justify-between items-start translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-75">
                                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground pr-4 leading-tight">
                                    {item.title}
                                </h3>
                                <Link 
                                    href={item.href || '#'} 
                                    target="_blank" 
                                    className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Body: Description & Tags */}
                            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-100">
                                <p className="text-foreground/80 md:text-lg font-light leading-relaxed mb-6 line-clamp-3 md:line-clamp-4">
                                    {item.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.technologies.slice(0, 5).map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs font-mono rounded bg-foreground/10 text-foreground/90 border border-foreground/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer: Source Links */}
                                <div className="flex items-center gap-3">
                                    {item.links?.map((link, idx) => {
                                        const Icon = link.icon === "github" ? Github : Globe;
                                        return (
                                            <Link 
                                                key={idx} 
                                                href={link.href} 
                                                target="_blank" 
                                                className="p-3 rounded-full bg-foreground/5 hover:bg-foreground hover:text-background transition-all text-foreground border border-foreground/10 hover:border-transparent" 
                                                title={link.type}
                                            >
                                                <Icon className="w-4 h-4" />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
