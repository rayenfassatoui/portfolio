"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

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

            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-6 mt-12 w-full">
                
                {/* BOX 1: AI & ML (Large, Col-span 2) */}
                <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className="md:col-span-2 border border-border/5 rounded-[2rem] bg-secondary/40 p-8 relative overflow-hidden group flex flex-col justify-end shadow-sm"
                >
                    {/* Visual Image Background */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2665&auto=format&fit=crop" 
                            alt="AI Representation" 
                            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2000ms] ease-out mix-blend-screen" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 w-full mt-auto">
                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground drop-shadow-lg">AI & Machine Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            {DATA.skills.slice(0, 8).map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-xs md:text-sm font-mono font-bold uppercase rounded-full border border-foreground/20 bg-background/50 text-foreground backdrop-blur-md shadow-sm">
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
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1633516003923-cfd07fd36bc5?q=80&w=2670&auto=format&fit=crop" 
                            alt="Abstract Tech" 
                            className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" 
                        />
                    </div>
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    
                    <h3 className="text-[7rem] md:text-[8rem] font-black leading-none tracking-tighter group-hover:scale-110 transition-transform duration-700 ease-out z-10 relative drop-shadow-2xl text-background">
                        2<span className="text-primary">+</span>
                    </h3>
                    <p className="uppercase tracking-widest text-sm font-bold opacity-80 mt-2 z-10 relative text-background">Years Exp.</p>
                </motion.div>

                {/* BOX 3: Frontend / Design (Col-span 1, Row-span 1) */}
                <motion.div 
                    whileHover={{ scale: 0.98 }}
                    className="md:col-span-1 border border-border/5 rounded-[2rem] bg-secondary/20 p-8 relative overflow-hidden group flex flex-col justify-end shadow-sm"
                >
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2670&auto=format&fit=crop" 
                            alt="Frontend UI" 
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms] mix-blend-luminosity ease-out" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    </div>
                    
                    <div className="z-10 relative">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-foreground drop-shadow-md">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"].map(skill => (
                                <span key={skill} className="px-3 py-1 text-[11px] md:text-xs font-mono font-bold uppercase rounded-full border border-foreground/20 bg-background/50 text-foreground backdrop-blur-md shadow-sm">
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
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2670&auto=format&fit=crop" 
                            alt="Backend Servers" 
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2000ms] mix-blend-screen ease-out" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col justify-end h-full">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 drop-shadow-lg">Backend & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Node.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Prisma", "pgvector"].map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-xs md:text-sm font-mono font-bold uppercase rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm shadow-sm">
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
