"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionWatermarkProps {
  text: string;
  theme?: "dark" | "light"; // dark = white stroke on dark, light = black stroke on light
}

export default function SectionWatermark({ text, theme = "dark" }: SectionWatermarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax translation: ~8% vertical movement
  const yMotion = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const y = reducedMotion ? "0%" : yMotion;

  const strokeClass =
    theme === "dark"
      ? "text-transparent stroke-white/10 [text-stroke:1px_rgba(255,255,255,0.12)] [-webkit-text-stroke:1px_rgba(255,255,255,0.12)]"
      : "text-transparent stroke-black/10 [text-stroke:1px_rgba(0,0,0,0.1)] [-webkit-text-stroke:1px_rgba(0,0,0,0.1)]";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden md:block absolute left-0 top-0 bottom-0 w-28 overflow-hidden pointer-events-none select-none z-10"
    >
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-0 -translate-x-[45%] -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap"
      >
        <span
          className={`font-heading font-black tracking-widest text-[120px] lg:text-[160px] leading-none uppercase select-none ${strokeClass}`}
        >
          {text}
        </span>
      </motion.div>
    </div>
  );
}
