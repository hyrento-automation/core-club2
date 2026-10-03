"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Instagram, Twitter, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteData";

interface OffCanvasPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffCanvasPanel({ isOpen, onClose }: OffCanvasPanelProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Off-Canvas Panel Slides from Right */}
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
              {/* Header with Monogram and Close Button */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 border border-white flex items-center justify-center bg-black overflow-hidden shadow-lg">
                    <Image
                      src={siteConfig.logo}
                      alt="ONYX Club Logo"
                      fill
                      sizes="44px"
                      className="object-cover scale-110"
                    />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold tracking-widest text-sm uppercase block">
                      {siteConfig.fullName}
                    </span>
                    <span className="text-[9px] font-heading text-grey-body tracking-wider">
                      {siteConfig.city}
                    </span>
                  </div>
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
              <div className="mt-8 space-y-3">
                <h3 className="font-heading font-bold text-lg tracking-wider uppercase text-white">
                  A PRIVATE CLUB. NOTHING MORE.
                </h3>
                <p className="font-body text-grey-body text-[13px] leading-relaxed">
                  Sport, relaxation and panoramic views on the shore of Lake Geneva. We cultivate an intimate, discreet environment for athletes, entrepreneurs, and local Cologny residents.
                </p>
              </div>

              {/* Quick Navigation Links */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2 text-xs font-heading font-bold tracking-wider">
                <div>
                  <Link href="/concept" onClick={onClose} className="hover:text-accent transition-colors block py-1">
                    THE CONCEPT &rsaquo;
                  </Link>
                </div>
                <div>
                  <Link href="/activities" onClick={onClose} className="hover:text-accent transition-colors block py-1">
                    ACTIVITIES & CLASSES &rsaquo;
                  </Link>
                </div>
                <div>
                  <Link href="/team" onClick={onClose} className="hover:text-accent transition-colors block py-1">
                    COACHING STAFF &rsaquo;
                  </Link>
                </div>
                <div>
                  <Link href="/milkshakes" onClick={onClose} className="hover:text-accent transition-colors block py-1">
                    ONYX MILKSHAKES &rsaquo;
                  </Link>
                </div>
                <div>
                  <Link href="/clientele" onClick={onClose} className="hover:text-accent transition-colors block py-1">
                    OUR CLIENTELE &rsaquo;
                  </Link>
                </div>
                <div>
                  <Link href="/book" onClick={onClose} className="text-accent hover:underline block py-1">
                    RESERVE FIRST VISIT DEMO &rsaquo;
                  </Link>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8">
                <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-3">
                  WORKING HOURS
                </h4>
                <div className="space-y-2 font-body text-xs text-grey-body">
                  {siteConfig.workingHours.map((slot, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-1 border-b border-white/5"
                    >
                      <span className="tracking-wider">{slot.days}</span>
                      <span className="text-white font-mono">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="mt-6 space-y-2.5 font-body text-xs text-grey-body">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{siteConfig.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors font-mono">
                    {siteConfig.phone} ({siteConfig.intlPhone})
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
            <div className="pt-6 border-t border-white/10 mt-8">
              <span className="block font-heading text-[10px] uppercase tracking-widest text-grey-body mb-3">
                CONNECT WITH US
              </span>
              <div className="flex items-center gap-3">
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
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
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
