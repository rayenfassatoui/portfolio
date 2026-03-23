"use client";

import { TunisiaGlobe } from "@/components/ui/globe";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowRight, Sun, Moon, Globe, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-1000 bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}>
        {/* Subtle Ambient Glow */}
        <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] mix-blend-screen dark:bg-primary/20" 
        />

        <header className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[calc(100%-2rem)] md:w-auto md:min-w-[600px] px-6 py-3 md:px-8 bg-background/80 backdrop-blur-xl border border-border/40 shadow-lg shadow-black/5 rounded-full transition-all">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                    {DATA.initials || DATA.name}<span className="text-primary italic">.</span>
                </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="flex items-center gap-1 md:gap-3">
                {mounted && (
                    <button 
                        onClick={() => setTheme(theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark")}
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

        <main className="pt-48 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full overflow-hidden">
            {/* HER SECTOIN */}
            <motion.section 
                variants={stagger} 
                initial="hidden" 
                animate="visible" 
                className="min-h-[75vh] flex flex-col justify-center relative"
            >
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4],
                        x: [0, -50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-20 md:right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen dark:mix-blend-color-dodge" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 40, 0],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen dark:mix-blend-color-dodge" 
                />
                
                <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8 max-w-5xl relative z-10 group cursor-default">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/30 border border-border/40 backdrop-blur-md shadow-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm md:text-base font-medium tracking-wide flex items-center gap-2">
                            Hi, I'm Rayen — Tunisian Web Developer 
                            <img src="https://flagcdn.com/w40/tn.png" alt="TN" className="w-[18px] h-[18px] rounded-full object-cover shadow-sm opacity-90 aspect-square" />
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] -ml-1 md:-ml-2 text-balance transition-all duration-700 md:group-hover:tracking-tight">
                        Crafting the <br className="hidden md:block"/>
                        <motion.span 
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% auto" }}
                            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-light"
                        >
                            intelligence
                        </motion.span> of the web.
                    </h1>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-12 md:mt-16 max-w-4xl flex flex-col gap-8 md:gap-10 items-start relative z-10">
                    <p className="text-lg md:text-xl leading-relaxed font-light text-balance text-muted-foreground">
                        {DATA.summary}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-xl group/btn hover:scale-105 transition-all duration-300 bg-foreground text-background hover:bg-foreground/90" asChild>
                            <Link href="#work">
                                View Selected Work
                                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 hover:bg-secondary transition-all duration-300 border-border/40 backdrop-blur-sm group/cv" asChild>
                            <a href="/resume.pdf" download="Rayen_Fassatoui_Resume.pdf">
                                <Download className="w-5 h-5 mr-2 group-hover/cv:translate-y-0.5 transition-transform" />
                                Download CV
                            </a>
                        </Button>
                        <Button size="lg" variant="ghost" className="rounded-full text-base h-14 px-8 hover:bg-secondary transition-all duration-300 font-medium" asChild>
                            <Link href={`mailto:${DATA.contact.email}`}>
                                Let's Talk
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </motion.section>

            {/* EXPERIENCES */}
            <motion.section 
                id="experience"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="py-16 md:py-32 scroll-mt-32"
            >
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                    <div>
                        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Experience</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">My career journey.</h3>
                    </div>
                    <div className="flex flex-col gap-12">
                        {DATA.work.map((role, i) => (
                            <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div className="md:w-3/4">
                                    <h4 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">{role.title}</h4>
                                    <div className="flex items-center gap-3 mt-1 text-muted-foreground font-light">
                                        <span>{role.company}</span>
                                        {role.badges && role.badges.length > 0 && (
                                            <span className="flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-border"></span>
                                                {role.badges.join(", ")}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-4 text-base md:text-lg leading-relaxed font-light text-muted-foreground">
                                        {role.description}
                                    </p>
                                </div>
                                <div className="font-mono text-sm tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap">
                                    {role.start} — {role.end}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* EDUCATION */}
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="py-16 md:py-32"
            >
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                    <div>
                        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Education</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Academic background.</h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        {DATA.education.map((edu, i) => (
                            <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-medium tracking-tight transition-colors">{edu.degree}</h4>
                                    <div className="mt-1 text-muted-foreground font-light">
                                        {edu.school}
                                    </div>
                                </div>
                                <div className="font-mono text-sm tracking-widest text-muted-foreground/60 uppercase whitespace-nowrap">
                                    {edu.start} — {edu.end}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CERTIFICATIONS */}
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="pb-16 pt-8 md:pb-32 md:pt-16 border-t border-border/10"
            >
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start pt-16 md:pt-32">
                    <div>
                        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Certifications</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Continuous learning.</h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        {DATA.certifications?.map((cert, i) => (
                            <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-medium tracking-tight transition-colors flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/80" />
                                        {cert.title}
                                    </h4>
                                    <div className="mt-1 text-muted-foreground font-light pl-5">
                                        {cert.issuer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* SKILLS */}
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="py-16 md:py-32"
            >
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                    <div>
                        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-4">Skills</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical stack.</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {DATA.skills.map((skill, i) => (
                            <div key={i} className="px-5 py-3 rounded-full border border-border/40 bg-secondary/10 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-default font-medium">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* SERVICES / EXPERTISE */}
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

            {/* SELECTED WORK */}
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                id="work" 
                className="py-16 md:py-32 space-y-16 md:space-y-24"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Selected Work</h2>
                        <p className="text-muted-foreground text-xl font-light">A showcase of minimal aesthetics and complex logic.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {DATA.projects.map((item, i) => (
                        <div key={i} className={`group ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
                            <Link href={item.href || '#'} target={item.href ? "_blank" : undefined} className="relative aspect-[1898/927] rounded-[2rem] overflow-hidden bg-secondary mb-8 block shadow-sm border border-border/5">
                                {/* Image or Simulated gradient */}
                                <div className={`w-full h-full ${!item.image ? `bg-gradient-to-br ${item.color}` : 'bg-secondary/40'} group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1] relative flex flex-col overflow-hidden`}>
                                    {item.image ? (
                                        <>
                                            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                            <div className="w-full h-full flex flex-col justify-center items-center">
                                                {/* Floating Mockup Container */}
                                                <div className="w-full relative rounded-xl border-none shadow-2xl overflow-hidden flex flex-col group-hover:scale-[1.05] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:shadow-primary/20">
                                                    {/* Website Screenshot */}
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
                                {/* Hover overlay CTA */}
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
                                
                                {/* Links */}
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
                        </div>
                    ))}
                </div>
            </motion.section>

        </main>

        {/* PREMIUM BENTO BOX FOOTER (APPLE STYLE) */}
        <footer className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                {/* GLOBE BENTO CARD */}
                <div className="md:col-span-2 relative h-[400px] md:h-[500px] bg-secondary/30 dark:bg-card border border-border/40 rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
                    
                    {/* The Globe Container: Moved to the right and perfectly vertically centered */}
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
    </div>
  )
}
