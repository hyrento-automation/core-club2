"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, ShoppingBag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingControlsProps {
  onOpenQuickInfo?: () => void;
  onOpenCart?: () => void;
}

export default function FloatingControls({
  onOpenQuickInfo,
  onOpenCart,
}: FloatingControlsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Right Edge Floating Action Buttons */}
      <aside
        aria-label="Quick actions"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      >
        {/* Pink-Red circular icon button (sampled from reference #ef2853) */}
        <button
          onClick={onOpenQuickInfo || (() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          })}
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent text-white shadow-xl shadow-accent/25 hover:scale-105 active:scale-95 transition-transform duration-300"
          title="Exclusive Offers & Booking"
          aria-label="Exclusive Offers & Booking"
        >
          <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          <span className="sr-only">Exclusive Offers</span>
        </button>

        {/* White cart button below it */}
        <button
          onClick={onOpenCart || (() => {
            const el = document.getElementById("programs");
            el?.scrollIntoView({ behavior: "smooth" });
          })}
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black border border-grey-border shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
          title="Training Passes"
          aria-label="Training Passes"
        >
          <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center">
            0
          </span>
          <span className="sr-only">Training Passes</span>
        </button>
      </aside>

      {/* Black Square Scroll-To-Top Button Bottom-Right (Fades in after 300px) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-black text-white border border-white/20 flex items-center justify-center hover:bg-neutral-900 hover:border-white transition-colors duration-200 shadow-2xl"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
