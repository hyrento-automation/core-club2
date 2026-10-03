"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/siteData";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ReviewsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  // Autoplay every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextReview();
    } else if (e.key === "ArrowLeft") {
      prevReview();
    }
  };

  const currentReview = reviews[activeIdx];

  return (
    <section
      id="reviews"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full bg-white text-black py-[100px] px-6 lg:px-16 overflow-hidden focus:outline-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header row: Left-aligned bold heading + giant outlined quote watermark */}
        <div className="relative flex items-center justify-between mb-16 pb-4 border-b border-grey-border">
          <HeadingReveal
            as="h2"
            className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black"
          >
            REVIEWS FROM YOU
          </HeadingReveal>

          {/* Giant outlined quote watermark (~6% opacity) */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[120px] md:text-[180px] leading-none pointer-events-none select-none text-transparent stroke-black/6 [text-stroke:2px_rgba(0,0,0,0.06)] [-webkit-text-stroke:2px_rgba(0,0,0,0.06)]"
          >
            “ ”
          </div>
        </div>

        {/* Layout: 2x2 grid of avatars on left, active review on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 2x2 grid of small grayscale avatar thumbnails (4 reviewers) */}
          <ScrollReveal delay={0.1} className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 w-fit">
              {reviews.map((rev, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={rev.id}
                    onClick={() => {
                      setDirection(idx > activeIdx ? 1 : -1);
                      setActiveIdx(idx);
                    }}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? "border-2 border-black filter grayscale-0 opacity-100 scale-105 shadow-xl"
                        : "border border-transparent filter grayscale opacity-60 hover:opacity-90 hover:scale-100"
                    }`}
                    aria-label={`View review from ${rev.author}`}
                  >
                    <Image
                      src={rev.avatar}
                      alt={rev.author}
                      fill
                      sizes="100px"
                      className="object-cover object-center"
                    />
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Active review in light italic grey, role label, bold uppercase name, prev/next arrows */}
          <div className="lg:col-span-8 min-h-[220px] flex flex-col justify-between">
            <div className="relative overflow-hidden py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-body italic text-grey-body text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8">
                    &ldquo;{currentReview.quote}&rdquo;
                  </blockquote>

                  <div>
                    <span className="block font-heading text-[10px] tracking-widest text-grey-body uppercase mb-1">
                      {currentReview.role}
                    </span>
                    <h3 className="font-heading font-extrabold text-base tracking-wider uppercase text-black">
                      {currentReview.author}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next thin chevron arrows below */}
            <div className="flex items-center gap-3 pt-6 mt-4 border-t border-grey-border">
              <button
                onClick={prevReview}
                className="w-10 h-10 border border-black/20 flex items-center justify-center text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 border border-black/20 flex items-center justify-center text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-heading font-semibold text-grey-body tracking-wider ml-2">
                0{activeIdx + 1} / 0{reviews.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
