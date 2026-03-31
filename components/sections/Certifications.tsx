"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DATA } from "@/data/resume";
import { Award, ShieldCheck } from "lucide-react";

export function Certifications() {
    // 300vh allows enough scroll depth to comfortably rotate the cylinder
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const N = DATA.certifications?.length || 1;
    // Each item is spaced equally around a 360 degree circle
    const angleStep = 360 / N; 
    
    // We want the cylinder to rotate exactly enough so the last item faces the user (-((N - 1) * angleStep))
    // Or we can let it do a full loop! If we do a full loop, they scroll and see all. Let's make it exactly show the last one at the bottom.
    const maxRotation = -((N - 1) * angleStep);
    
    // The main rotation value driven by scroll
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, maxRotation]);
    
    // Calculate depth (radius) based on height (200px) and item count to form a regular polygon cylinder
    // Added a +80px padding so the cards don't clip each other's corners
    const radius = Math.max(250, (200 / 2) / Math.tan(Math.PI / N) + 80);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden border-t border-border/10">
                
                {/* Left: Text & Context */}
                <div className="md:w-1/3 px-8 text-center md:text-left z-30 mb-auto mt-32 md:mb-0 md:mt-0">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-primary">Certifications</h2>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">The Vault.</h3>
                    <p className="text-muted-foreground text-lg md:text-xl font-light max-w-sm mx-auto md:mx-0">
                        Scroll to unlock professional track-records and validations.
                    </p>
                </div>

                {/* Right: The 3D Scroll Cylinder */}
                <div 
                    className="md:w-2/3 h-full flex items-center justify-center relative w-full"
                    style={{ perspective: "1500px" }} // Perspective gives the 3D depth illusion
                >
                    {/* Dark gradient masks for the slot-machine fade effect */}
                    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
                    
                    <motion.div 
                        className="relative w-[85%] md:w-[70%] max-w-2xl h-[220px]"
                        style={{ 
                            transformStyle: "preserve-3d", // Crucial for 3D children!
                            rotateX 
                        }}
                    >
                        {DATA.certifications?.map((cert, i) => {
                            // Each component lives at its specific angle in the cylinder
                            const rotate = i * angleStep;
                            return (
                                <div 
                                    key={i} 
                                    className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 rounded-[2.5rem] bg-secondary/80 backdrop-blur-2xl border border-foreground/10 shadow-2xl overflow-hidden group"
                                    style={{
                                        // We rotate the item, then push it outward by the radius along the Z axis
                                        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`, 
                                        WebkitBackfaceVisibility: "hidden", 
                                        backfaceVisibility: "hidden" // Hides items if they are at the "back" of the wheel
                                    }}
                                >
                                    {/* Ambient glowing orb inside the card */}
                                    <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -translate-y-1/2"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border/50">
                                                <Award className="w-7 h-7" />
                                            </div>
                                            <div className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-wider">{cert.issuer}</div>
                                        </div>
                                        <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-[1.1]">{cert.title}</h4>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
