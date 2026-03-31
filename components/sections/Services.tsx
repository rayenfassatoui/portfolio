"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Enhanced Services Data directly integrated for much stronger copywriting
const ENHANCED_SERVICES = [
    {
        id: "01",
        title: "Frontend Engineering",
        description: "Crafting pixel-perfect, hyper-optimized digital interfaces. Specializing in Next.js, React, and immersive Framer Motion animations that elevate user experience to Awwwards quality.",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2670&auto=format&fit=crop",
        tags: ["Next.js", "React", "Tailwind", "Motion"]
    },
    {
        id: "02",
        title: "Full-Stack Architecture",
        description: "Architecting and deploying end-to-end scalable platforms. Ensuring absolute reliability, robust authentication, and speed from the database layer to the client interface.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        tags: ["Node.js", "Python", "PostgreSQL", "Prisma"]
    },
    {
        id: "03",
        title: "API Design & Cloud",
        description: "Building resilient RESTful and GraphQL APIs designed to handle massive data throughput. Deploying advanced microservices via secure, scalable cloud infrastructure and serverless solutions.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        tags: ["FastAPI", "Express", "Docker", "REST"]
    },
    {
        id: "04",
        title: "AI Systems Engineering",
        description: "Designing intelligent RAG pipelines and scalable vector databases. Seamlessly connecting complex language models like Llama 3, OpenAI, and custom fine-tunes to your enterprise logic.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop",
        tags: ["LLMs", "RAG", "pgvector", "LangChain"]
    }
];

export function Services() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]); 
    
    const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 20]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-background">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden border-y border-border/10 bg-background/50 backdrop-blur-3xl">
                
                <motion.div 
                    style={{ scale: textScale, opacity: textOpacity }} 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                >
                    <h2 className="text-[10rem] md:text-[20rem] font-black tracking-tighter text-foreground/5 whitespace-nowrap">
                        SERVICES
                    </h2>
                </motion.div>

                <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-32 relative z-10 items-center">
                    
                    {/* Intro dramatic text block */}
                    <div className="w-[85vw] md:w-[45vw] shrink-0 pl-2">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <span className="w-4 h-4 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary font-mono font-bold tracking-widest uppercase text-sm">Capabilities</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Innovation &<br/>Engineering.</h2>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg leading-relaxed">
                            Bridging the vital gap between cutting-edge <strong className="text-foreground">artificial intelligence</strong> and high-performance digital architecture.
                        </p>
                    </div>

                    {/* Highly Designed Image Cards */}
                    {ENHANCED_SERVICES.map((service, i) => (
                        <div 
                            key={i} 
                            className="w-[85vw] md:w-[60vw] h-[65vh] md:h-[75vh] flex flex-col justify-between p-8 md:p-16 rounded-[2.5rem] bg-secondary shadow-lg border border-border/10 relative overflow-hidden group shrink-0"
                        >
                            {/* Epic Background Image with Gradient Mask */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-[1500ms] ease-out mix-blend-luminosity" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/95 md:via-background/90 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent md:hidden"></div>
                            </div>
                            
                            {/* Card Content Layer */}
                            <div className="z-10 h-full flex flex-col justify-between md:w-[75%] pr-4 relative">
                                <div className="inline-flex items-center gap-3">
                                    <span className="text-xs md:text-sm font-mono text-primary font-bold border border-primary/30 bg-primary/10 backdrop-blur-md px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                        {service.id} // Core Focus
                                    </span>
                                </div>
                                
                                <div className="mt-auto mb-auto md:mb-12">
                                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-foreground shadow-sm">{service.title}</h2>
                                    <p className="text-foreground/80 md:text-xl font-light leading-relaxed max-w-lg mb-8 drop-shadow-sm">{service.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 text-[11px] md:text-xs font-mono font-bold uppercase rounded border border-foreground/20 bg-background/50 text-foreground backdrop-blur-md shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex justify-start">
                                    {/* Small circle link just for premium aesthetics */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 backdrop-blur-md flex flex-col items-center justify-center text-primary border border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 overflow-hidden shadow-xl">
                                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
