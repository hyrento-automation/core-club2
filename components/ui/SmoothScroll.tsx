"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Make lenis available on window for scroll-to-top button
    (window as any).lenis = lenis;

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
