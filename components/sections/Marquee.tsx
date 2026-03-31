"use client";

import { motion } from "framer-motion";
import { Network, Terminal, Database } from "lucide-react";

const MarqueeItem = () => (
  <div className="flex flex-nowrap items-center px-[3vw] w-max gap-7 md:gap-14">
    {/* Block 1 */}
    <div className="flex items-center gap-3 shrink-0 relative group/block1 cursor-default">
      <span className="text-[clamp(3.5rem,9vw,7rem)] font-bold tracking-tighter whitespace-nowrap shrink-0 leading-none select-none text-foreground">
        flexible & robust
      </span>
      <span className="font-serif italic mx-3 relative inline-block group cursor-none text-[clamp(3.5rem,9vw,7rem)] leading-none text-blue-600 dark:text-blue-500">
        Cloud Systems
        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
      </span>
      <div className="flex mx-4 p-3.5 bg-blue-50 dark:bg-blue-950/50 rounded-full border border-blue-100 dark:border-blue-900 shadow-xl transition-transform duration-500 ease-out group-hover/block1:scale-110 group-hover/block1:rotate-12">
        <Network className="w-10 h-10 text-blue-600 dark:text-blue-500" strokeWidth={2} />
      </div>
    </div>
    
    {/* Block 2 */}
    <div className="flex items-center gap-3 shrink-0 relative ml-4 md:ml-10 group/block2 cursor-default">
      <span className="text-[clamp(3.5rem,9vw,7rem)] font-bold tracking-tighter whitespace-nowrap shrink-0 leading-none select-none text-foreground">
        integrating
      </span>
      <span className="font-serif italic mx-3 relative inline-block group cursor-none text-[clamp(3.5rem,9vw,7rem)] leading-none text-rose-600 dark:text-rose-500">
        Frontier AI Agents
        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
      </span>
      <div className="flex mx-4 p-3.5 bg-rose-50 dark:bg-rose-950/50 rounded-full border border-rose-100 dark:border-rose-900 shadow-xl transition-transform duration-500 ease-out group-hover/block2:scale-110 group-hover/block2:-rotate-12">
        <Terminal className="w-14 h-14 text-rose-600 dark:text-rose-500 drop-shadow-2xl" strokeWidth={2} />
      </div>
    </div>

    {/* Block 3 */}
    <div className="flex items-center gap-3 shrink-0 relative ml-4 md:ml-10 group/block3 cursor-default">
      <span className="text-[clamp(3.5rem,9vw,7rem)] font-bold tracking-tighter whitespace-nowrap shrink-0 leading-none select-none text-foreground">
        delivered through
      </span>
      <div className="flex mx-5 p-3.5 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl border border-emerald-100 dark:border-emerald-900 shadow-xl rotate-6 transition-transform duration-500 ease-out group-hover/block3:scale-110 group-hover/block3:rotate-12">
        <Database className="w-10 h-10 text-emerald-600 dark:text-emerald-500" strokeWidth={2} />
      </div>
      <span className="font-serif italic mx-3 relative inline-block group cursor-none text-[clamp(3.5rem,9vw,7rem)] leading-none text-emerald-600 dark:text-emerald-500">
        Polished UX
        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
      </span>
      <span className="text-[clamp(3.5rem,9vw,7rem)] font-bold tracking-tighter whitespace-nowrap shrink-0 leading-none select-none text-foreground">
        .
      </span>
      <div className="w-[8vw] md:w-[14vw]"></div>
    </div>
  </div>
);

export function Marquee() {
  return (
    <div 
      className="py-14 md:py-32 flex overflow-hidden relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-16 md:my-32 -rotate-2 scale-[1.02]"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35, // Smooth scrolling speed
        }}
      >
        <MarqueeItem />
        <MarqueeItem />
      </motion.div>
    </div>
  );
}
