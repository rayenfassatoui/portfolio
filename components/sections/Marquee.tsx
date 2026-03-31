"use client";

import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div 
      className="py-10 md:py-20 flex overflow-hidden relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:skew-y-2 my-10 md:my-32"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slow and smooth scrolling
        }}
      >
        <span className="text-[80px] md:text-[180px] font-black uppercase text-black dark:text-white leading-none tracking-tighter select-none px-8 font-sans">
          Fullstack AI Engineer • Creative Developer • Problem Solver •
        </span>
        <span className="text-[80px] md:text-[180px] font-black uppercase text-black dark:text-white leading-none tracking-tighter select-none px-8 font-sans">
          Fullstack AI Engineer • Creative Developer • Problem Solver •
        </span>
      </motion.div>
    </div>
  );
}
