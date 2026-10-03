"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      <section className="relative w-full h-[240px] md:h-[280px] bg-black overflow-visible mt-8">
        {/* White circular play button centred on top edge */}
        <div className="absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setModalOpen(true)}
            className="group/btn relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Play gym atmosphere video"
          >
            {/* Ring pulse on hover: scale 1 -> 1.25, fade out, loop */}
            <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none opacity-0 group-hover/btn:animate-ping" />

            <Play
              className="w-5 h-5 ml-1 fill-black text-black group-hover/btn:scale-110 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Full-width image banner container */}
        <div className="group relative w-full h-full overflow-hidden cursor-pointer" onClick={() => setModalOpen(true)}>
          <Image
            src="/images/video-banner.jpg"
            alt="ONYX Club Training Atmosphere"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.65] contrast-[1.1] transition-transform duration-1000 ease-editorial group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />

          {/* Subtle Centred Banner Headline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-4 pointer-events-none">
            <span className="text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-1">
              INSIDE THE SANCTUARY
            </span>
            <h3 className="font-heading font-black text-white text-xl md:text-2xl tracking-widest uppercase">
              PURE ATHLETIC ENERGY &middot; ZERO NOISE
            </h3>
          </div>
        </div>
      </section>

      {/* Modal Video Player (fade + scale 0.95 -> 1, Esc to close) */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl aspect-video bg-black border border-white/20 shadow-2xl z-50 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Video Player"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/80 text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Embedded video player */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/f02mOEt11OQ?autoplay=1&rel=0&modestbranding=1"
                title="ONYX Athletic Training Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
