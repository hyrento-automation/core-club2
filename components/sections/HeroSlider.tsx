"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/siteData";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isLeftHalf, setIsLeftHalf] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Infinite autoplay: hold ~4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Track mouse coordinates for thin chevron cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: e.clientX, y: e.clientY });
    setIsLeftHalf(x < rect.width / 2);
  };

  const handleHeroClick = () => {
    if (isLeftHalf) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const currentSlide = heroSlides[currentIdx];

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleHeroClick}
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-black select-none cursor-none"
    >
      {/* 2 Full-Bleed Photo Slides with AnimatePresence mode="sync" for double-exposure crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background image */}
          <div className="relative w-full h-full">
            <Image
              src={currentSlide.image}
              alt={currentSlide.tagline}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.78] contrast-[1.12]"
            />
            {/* General vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Diagonal Glass Overlay on each slide:
              clip-path: polygon(32% 0, 100% 0, 100% 100%, 75% 100%),
              fill rgba(20,20,20,0.35) with backdrop-blur 2px and a 1px light edge line along the slanted edge */}
          <div
            className="absolute inset-0 pointer-events-none hidden sm:block"
            style={{
              clipPath: "polygon(32% 0%, 100% 0%, 100% 100%, 75% 100%)",
              backgroundColor: "rgba(20, 20, 20, 0.35)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />

          {/* Slanted 1px edge line matching polygon edge (from 32% 0% to 75% 100%) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line
              x1="32"
              y1="0"
              x2="75"
              y2="100"
              stroke="rgba(255, 255, 255, 0.28)"
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </motion.div>
      </AnimatePresence>

      {/* Static Centre Headline: NOT YOUR / TYPICAL / FITNESS
          Montserrat 600, clamp(40px, 6vw, 96px), letter-spacing 0.6em, OUTLINED.
          Three letters solid white: O in YOUR, Y in TYPICAL, E in FITNESS.
          On first load each line reveals with a masked slide-up (0.8s, stagger 0.15s). */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
        <h1 className="flex flex-col items-center text-center font-heading font-semibold text-[clamp(32px,5.8vw,92px)] leading-[1.08] tracking-hero select-none">
          {/* Line 1: NOT YOUR (solid 'O') */}
          <span className="overflow-hidden block py-1">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-transparent stroke-white [text-stroke:1.2px_white] [-webkit-text-stroke:1.2px_white]"
            >
              NOT Y
              <span className="text-white [text-stroke:0] [-webkit-text-stroke:0] font-bold">
                O
              </span>
              UR
            </motion.span>
          </span>

          {/* Line 2: TYPICAL (solid 'Y') */}
          <span className="overflow-hidden block py-1">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-transparent stroke-white [text-stroke:1.2px_white] [-webkit-text-stroke:1.2px_white]"
            >
              T
              <span className="text-white [text-stroke:0] [-webkit-text-stroke:0] font-bold">
                Y
              </span>
              PICAL
            </motion.span>
          </span>

          {/* Line 3: FITNESS (solid 'E') */}
          <span className="overflow-hidden block py-1">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-transparent stroke-white [text-stroke:1.2px_white] [-webkit-text-stroke:1.2px_white]"
            >
              FITN
              <span className="text-white [text-stroke:0] [-webkit-text-stroke:0] font-bold">
                E
              </span>
              SS
            </motion.span>
          </span>
        </h1>

        {/* Micro Tagline below headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-[11px] font-heading font-bold text-white uppercase tracking-widest text-center"
        >
          {currentSlide.tagline}
        </motion.p>
      </div>

      {/* Slide Indicators / Paginate Micro Dots at Bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 pointer-events-auto">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx(idx);
            }}
            className={`transition-all duration-300 ${
              currentIdx === idx
                ? "w-8 h-[2px] bg-white"
                : "w-3 h-[2px] bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Custom Desktop Mouse Follower: Thin Chevron (‹ on left half, › on right half) */}
      {isHovered && (
        <motion.div
          className="fixed pointer-events-none z-50 text-white font-light text-3xl hidden md:flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
        >
          <span className="font-heading font-extralight text-4xl leading-none select-none text-white drop-shadow-md">
            {isLeftHalf ? "‹" : "›"}
          </span>
        </motion.div>
      )}
    </section>
  );
}
