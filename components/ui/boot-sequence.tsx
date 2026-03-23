"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);
  
  const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING CYBERNETIC PROTOCOLS [OK]",
    "MOUNTING VIRTUAL FILE SYSTEM... [OK]",
    "ESTABLISHING NEURAL LINK... [OK]",
    "CONNECTING TO THE GRID... [OK]",
    "BYPASSING SECURITY MAINFRAME... [SUCCESS]",
    "DECRYPTING PROFILE DATA...",
    "LOADING HOLO-INTERFACES...",
    "WELCOME TO THE MAINFRAME."
  ];

  useEffect(() => {
    let isActive = true;
    
    const streamText = async () => {
      for (let i = 0; i < bootText.length; i++) {
        await new Promise(r => setTimeout(r, Math.random() * 200 + 100));
        if (!isActive) return;
        setLines(prev => [...prev, bootText[i]]);
      }
      
      await new Promise(r => setTimeout(r, 600));
      if (!isActive) return;
      setIsDone(true);
      
      await new Promise(r => setTimeout(r, 800));
      if (!isActive) return;
      onComplete();
    };
    
    streamText();
    return () => {
      isActive = false;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div 
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col justify-end bg-black p-8 font-mono text-sm sm:text-lg text-emerald-500 overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] before:pointer-events-none"
        >
          {/* Scanline overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 opacity-50" />
          
          <div className="relative z-20 flex flex-col gap-2">
            {lines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${i === lines.length - 1 ? 'font-bold text-white shadow-[0_0_10px_#10b981]' : ''}`}
              >
                <span className="text-zinc-500 mr-4">{`>_`}</span>
                {line}
              </motion.div>
            ))}
            <motion.div 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="mt-2 h-5 w-3 bg-emerald-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
