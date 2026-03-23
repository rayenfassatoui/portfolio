"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

// Since react-globe.gl renders via ThreeJS/WebGL, it must be loaded strictly on the client
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export function TunisiaGlobe() {
  const [mounted, setMounted] = useState(false);
  const globeRef = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // We use a small interval to wait until the dynamic globe component is fully ready
      const attachControls = setInterval(() => {
        if (globeRef.current) {
          globeRef.current.controls().autoRotate = true;
          globeRef.current.controls().autoRotateSpeed = 1.5; // nice elegant speed
          
          globeRef.current.pointOfView({ lat: 25.0, lng: 10.0, altitude: 2.2 }, 2000);
          clearInterval(attachControls);
        }
      }, 200);

      return () => clearInterval(attachControls);
    }
  }, [mounted]);

  if (!mounted) {
    return <div className="w-full h-full max-w-[500px] aspect-square flex items-center justify-center animate-pulse bg-secondary/20 rounded-full" />;
  }

  // Always use the "White planet" version (earth-day.jpg) for both themes
  const globeImageUrl = "//unpkg.com/three-globe/example/img/earth-day.jpg";
  const isDark = theme === "dark" || (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Exact coordinates for Tunis, Tunisia
  const marker = { lat: 36.8065, lng: 10.1815 };

  return (
    <div className="w-full h-full max-w-[500px] aspect-square flex items-center justify-center relative mx-auto">
      {/* Background ambient glow to make the globe pop out */}
      <div className={`absolute inset-0 ${isDark ? 'bg-primary/20' : 'bg-blue-500/10'} blur-[90px] rounded-full mix-blend-screen opacity-50 z-0`} />
      
      <div className="z-10 cursor-grab active:cursor-grabbing w-full h-full flex items-center justify-center">
        <Globe
          ref={globeRef}
          width={window.innerWidth < 768 ? 300 : 450}
          height={window.innerWidth < 768 ? 300 : 450}
          backgroundColor="rgba(0,0,0,0)" // Transparent background
          globeImageUrl={globeImageUrl}
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // Real mountains details
          
          htmlElementsData={[marker]}
          htmlElement={() => {
            const el = document.createElement('div');
            el.innerHTML = `
              <div style="position: relative; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%);">
                <div style="position: absolute; width: 30px; height: 30px; background-color: rgba(59, 130, 246, 0.4); border-radius: 50%; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
                <div style="width: 10px; height: 10px; background-color: #3b82f6; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);"></div>
              </div>
              <style>
                @keyframes ping {
                  75%, 100% {
                    transform: scale(2);
                    opacity: 0;
                  }
                }
              </style>
            `;
            // Prevent pointer events on the marker so it doesn't block grabbing the globe
            el.style.pointerEvents = 'none';
            return el;
          }}

          showAtmosphere={true}
          atmosphereColor="#ffffff"
          atmosphereAltitude={0.15}
        />
      </div>
    </div>
  );
}
