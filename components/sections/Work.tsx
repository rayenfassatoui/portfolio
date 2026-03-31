"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Work() {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            id="work" 
            className="py-16 md:py-32 space-y-16 md:space-y-24"
        >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/10">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Selected Work</h2>
                    <p className="text-muted-foreground text-xl font-light">A showcase of minimal aesthetics and complex logic.</p>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {DATA.projects.map((item, i) => (
                    <motion.div variants={itemVariants} key={i} className={`group ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
                        <Link href={item.href || '#'} target={item.href ? "_blank" : undefined} className="relative aspect-[1898/927] rounded-[2rem] overflow-hidden bg-secondary mb-8 block shadow-sm border border-border/5">
                            <div className={`w-full h-full ${!item.image ? `bg-gradient-to-br ${item.color}` : 'bg-secondary/40'} group-hover:scale-[1.03] transition-transform duration-1000 relative flex flex-col overflow-hidden`}>
                                {item.image ? (
                                    <>
                                        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                        <div className="w-full h-full flex flex-col justify-center items-center">
                                            <div className="w-full relative rounded-xl border-none shadow-2xl overflow-hidden flex flex-col group-hover:scale-[1.05] transition-transform duration-700 group-hover:shadow-primary/20">
                                                <div className="w-full relative">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center relative">
                                        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                        <h4 className="text-white/80 font-mono tracking-widest text-2xl rotate-[-20deg] scale-150 opacity-10 font-bold">{item.title}</h4>
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-background text-foreground px-6 py-3 rounded-full font-medium tracking-wide shadow-2xl flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    Visit Website <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>

                        <div className="flex items-start justify-between px-2 gap-4">
                            <div className="flex-1">
                                <h3 className="text-3xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-muted-foreground text-base font-light leading-relaxed mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.technologies.slice(0, 5).map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs font-mono rounded border border-border/30 bg-secondary/20 text-muted-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                {item.links?.map((link, idx) => {
                                    const Icon = link.icon === "github" ? Github : link.icon === "globe" ? Globe : ArrowRight;
                                    return (
                                        <Link key={idx} href={link.href} target="_blank" className="p-3 bg-secondary/50 hover:bg-foreground hover:text-background text-foreground rounded-full transition-all" title={link.type}>
                                            <Icon className="w-5 h-5" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
