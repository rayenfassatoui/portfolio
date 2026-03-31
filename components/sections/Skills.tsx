"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { BrainCircuit, Database, FileCode2, Layers } from "lucide-react";

export function Skills() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            id="skills"
            className="py-16 md:py-32"
        >
            <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Expertise</h2>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Technical Stack & Capabilities.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6 mt-12 w-full">
                
                {/* BOX 1: AI & ML (Large, Col-span 2) */}
                <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className="md:col-span-2 border border-border/5 rounded-[2rem] bg-secondary/40 p-8 relative overflow-hidden group flex flex-col justify-end shadow-sm"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110 translate-y-[-20%] translate-x-[20%]">
                        <BrainCircuit className="w-64 h-64 text-purple-500 drop-shadow-2xl" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
                    
                    <div className="relative z-10 w-full">
                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">AI & Machine Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            {DATA.skills.slice(0, 8).map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-xs md:text-sm font-mono rounded-full border border-foreground/10 bg-background/50 backdrop-blur-md shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* BOX 2: Experience (Col-span 1, Row-span 1) */}
                <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className="md:col-span-1 border border-border/5 rounded-[2rem] bg-foreground text-background p-8 relative overflow-hidden flex flex-col items-center justify-center text-center group shadow-xl"
                >
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    <h3 className="text-[7rem] md:text-[8rem] font-black leading-none tracking-tighter group-hover:scale-110 transition-transform duration-700 ease-out z-10 relative">
                        2<span className="text-primary">+</span>
                    </h3>
                    <p className="uppercase tracking-widest text-sm font-bold opacity-80 mt-2 z-10 relative">Years Exp.</p>
                </motion.div>

                {/* BOX 3: Frontend / Design (Col-span 1, Row-span 1) */}
                <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className="md:col-span-1 border border-border/5 rounded-[2rem] bg-secondary/20 p-8 relative overflow-hidden group flex flex-col justify-between shadow-sm"
                >
                    <div className="flex justify-between items-start z-10 relative">
                        <Layers className="w-10 h-10 opacity-40 text-sky-500 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    <div className="z-10 relative">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-foreground/90">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"].map(skill => (
                                <span key={skill} className="px-3 py-1 text-xs font-mono rounded-full bg-background border border-border/50 text-muted-foreground">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* BOX 4: Backend & Architecture (Col-span 2, Row-span 1) */}
                <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className="md:col-span-2 border border-border/5 rounded-[2rem] bg-secondary/10 p-8 relative overflow-hidden group flex flex-col justify-end shadow-sm"
                >
                    <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-30 transition-all duration-700 ease-out scale-[2] translate-y-10 group-hover:-translate-x-10">
                        <Database className="w-64 h-64 text-foreground" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col justify-end h-full">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Backend & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Node.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Prisma", "pgvector"].map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-xs md:text-sm font-mono rounded-full border border-border bg-background backdrop-blur-sm shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
