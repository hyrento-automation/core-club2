"use client";

import React, { useEffect } from "react";
import { X, Instagram, Twitter, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteData";

interface OffCanvasPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffCanvasPanel({ isOpen, onClose }: OffCanvasPanelProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Dark Overlay Fades In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Off-Canvas Panel Slides from Right (0.5s ease) */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-black text-white border-l border-white/10 z-50 p-8 sm:p-12 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Gym Information Panel"
          >
            <div>
              {/* Header with Monogram and Close Button that rotates 90deg on hover */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 border border-white flex items-center justify-center font-heading font-black text-lg tracking-widest text-white">
                    {siteConfig.monogram}
                  </div>
                  <span className="font-heading font-extrabold tracking-widest text-sm uppercase">
                    {siteConfig.fullName}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="group p-2 text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="Close panel"
                >
                  <X className="w-6 h-6 transition-transform duration-300 ease-editorial group-hover:rotate-90" />
                </button>
              </div>

              {/* Short Statement */}
              <div className="mt-8 space-y-4">
                <h3 className="font-heading font-bold text-xl tracking-wider uppercase text-white">
                  EDITORIAL ATHLETIC SANCTUARY
                </h3>
                <p className="font-body text-grey-body text-[14px] leading-relaxed">
                  ONYX is an uncompromising athletic environment engineered for raw power, biomechanical precision, and functional excellence. We strip away the noise to deliver pure athletic progression.
                </p>
              </div>

              {/* Working Hours */}
              <div className="mt-10">
                <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
                  WORKING HOURS
                </h4>
                <div className="space-y-3 font-body text-xs text-grey-body">
                  {siteConfig.workingHours.map((slot, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-1.5 border-b border-white/5"
                    >
                      <span className="tracking-wider">{slot.days}</span>
                      <span className="text-white font-medium">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="mt-8 space-y-3 font-body text-xs text-grey-body">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{siteConfig.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons at the Bottom */}
            <div className="pt-8 border-t border-white/10 mt-12">
              <span className="block font-heading text-[10px] uppercase tracking-widest text-grey-body mb-4">
                CONNECT WITH US
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
