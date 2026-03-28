"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[calc(100%-2rem)] md:w-auto md:min-w-[600px] px-6 py-3 md:px-8 bg-background/80 backdrop-blur-xl border border-border/40 shadow-lg shadow-black/5 rounded-full transition-all">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                    {DATA.initials || DATA.name}<span className="text-primary italic">.</span>
                </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="flex items-center gap-1 md:gap-3">
                {mounted && (
                    <button 
                        onClick={() => setTheme(theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "light" : "dark")}
                        className="p-3 hover:bg-secondary/60 rounded-full transition-all text-muted-foreground hover:text-foreground flex items-center justify-center -mr-1"
                        title="Toggle dark mode"
                    >
                        {theme === 'dark' || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) 
                            ? <Sun className="w-5 h-5 md:w-5 md:h-5 drop-shadow-sm" /> 
                            : <Moon className="w-5 h-5 md:w-5 md:h-5 drop-shadow-sm" />}
                    </button>
                )}
                <Link href={DATA.contact.social.GitHub.url} target="_blank" className="p-3 hover:bg-secondary/60 rounded-full transition-all text-muted-foreground hover:text-foreground">
                    <Github className="w-5 h-5 md:w-5 md:h-5" />
                </Link>
                <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="p-3 hover:bg-secondary/60 rounded-full transition-all text-muted-foreground hover:text-foreground">
                    <Linkedin className="w-5 h-5 md:w-5 md:h-5" />
                </Link>
                <Button className="ml-2 rounded-full px-6 h-10 md:h-12 shadow-sm font-medium tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </Button>
            </motion.div>
        </header>
    );
}
