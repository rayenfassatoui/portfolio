"use client";

import { TunisiaGlobe } from "@/components/ui/globe";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

export function Footer() {
    return (
        <footer className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                {/* GLOBE BENTO CARD */}
                <div className="md:col-span-2 relative h-[400px] md:h-[500px] bg-secondary/30 dark:bg-card border border-border/40 rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
                    
                    <div className="absolute top-1/2 right-[-20%] md:right-[-10%] -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-90 transition-transform duration-1000 group-hover:scale-105 pointer-events-none md:pointer-events-auto z-10 flex items-center justify-center">
                        <div className="w-full h-full scale-[0.8] md:scale-100">
                            <TunisiaGlobe />
                        </div>
                    </div>

                    <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-sm font-medium shadow-sm mb-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available Worldwide
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Based in Tunisia. <br/>
                            <span className="text-muted-foreground font-light">Working globally.</span>
                        </h3>
                    </div>
                </div>

                {/* CONTACT BENTO CARD */}
                <div className="md:col-span-1 relative h-[400px] md:h-[500px] bg-foreground text-background border border-border/40 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center p-8 text-center group transition-colors">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
                    
                    <div className="relative z-10 space-y-8 flex flex-col items-center">
                        <Mail className="w-12 h-12 md:w-16 md:h-16 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                            Let's <br/>Talk.
                        </h2>
                        <Button variant="outline" className="rounded-full h-14 px-8 text-base border-background/20 hover:bg-background hover:text-foreground transition-all duration-300 shadow-xl" asChild>
                            <Link href={`mailto:${DATA.contact.email}`}>
                                Get in touch
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* SOCIAL LIKES BENTO (Full width bottom row) */}
                <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-center gap-6 p-8 md:p-10 bg-secondary/10 dark:bg-card/50 border border-border/40 rounded-[2rem] md:rounded-full mt-2">
                    <div className="text-center md:text-left">
                        <span className="text-xl md:text-2xl font-bold tracking-tighter">
                            {DATA.initials || DATA.name}<span className="text-primary italic">.</span>
                        </span>
                        <p className="text-muted-foreground mt-1 text-sm font-light">© {new Date().getFullYear()} All rights reserved. Built with passion.</p>
                    </div>
                    
                    <div className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-medium">
                        {Object.values(DATA.contact.social).map((social) => (
                            <Link key={social.name} href={social.url} target="_blank" className="hover:text-primary transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                                {social.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
