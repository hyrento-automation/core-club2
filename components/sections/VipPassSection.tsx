"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Gift, Users, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";
import { vipEventPass } from "@/data/siteData";

export default function VipPassSection() {
  const [activeSide, setActiveSide] = useState<"recto" | "verso">("recto");

  return (
    <section id="vip-pass" className="relative w-full bg-black text-white py-[110px] px-6 lg:px-16 overflow-hidden border-t border-b border-white/10">
      {/* Watermark "PASS 27" */}
      <SectionWatermark text="PASS 27" theme="dark" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
            ÉVÉNEMENT EXCLUSIF &middot; DIMANCHE 27 SEPTEMBRE
          </span>
          <HeadingReveal
            as="h2"
            className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white leading-tight mb-4"
          >
            LA JOURNÉE SPORTIVE & BIEN-ÊTRE
          </HeadingReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Une expérience unique pour booster votre corps, apaiser votre esprit et révéler le meilleur de vous-même sur le lac Léman.
            </p>

            {/* Event Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-heading font-semibold tracking-wider text-white/90">
              <span className="flex items-center gap-2 bg-neutral-900 border border-white/15 px-3 py-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                DIMANCHE 27 SEPTEMBRE
              </span>
              <span className="flex items-center gap-2 bg-neutral-900 border border-white/15 px-3 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                COLOGNY, CH. DU NANT-D'ARGENT 1
              </span>
              <span className="flex items-center gap-2 bg-neutral-900 border border-white/15 px-3 py-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                8H00 &ndash; 16H00
              </span>
              <span className="flex items-center gap-2 bg-accent/20 border border-accent text-accent px-3 py-1.5 font-bold">
                <Gift className="w-3.5 h-3.5" />
                VOTRE 1ÈRE SESSION OFFERTE
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Ticket & Schedule Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Interactive Luxury Black Marble & Copper Pass 27 Ticket */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Recto / Verso Selector Tabs */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setActiveSide("recto")}
                className={`text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 border transition-all duration-200 ${
                  activeSide === "recto"
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:text-white"
                }`}
              >
                RECTO &mdash; BILLET D'ACCÈS
              </button>
              <button
                onClick={() => setActiveSide("verso")}
                className={`text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 border transition-all duration-200 ${
                  activeSide === "verso"
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:text-white"
                }`}
              >
                VERSO &mdash; PROGRAMME
              </button>
            </div>

            {/* Ticket Card Container with Subtle Tilt Effect */}
            <div className="relative w-full max-w-md aspect-[16/10] bg-neutral-950 border border-white/20 shadow-2xl overflow-hidden rounded-sm group cursor-pointer"
                 onClick={() => setActiveSide(activeSide === "recto" ? "verso" : "recto")}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSide}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={
                      activeSide === "recto"
                        ? vipEventPass.ticketRecto
                        : vipEventPass.ticketVerso
                    }
                    alt={`Pass 27 VIP Ticket ${activeSide}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center filter contrast-[1.08]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-2 right-3 bg-black/80 px-2 py-0.5 text-[9px] font-mono text-grey-body tracking-wider pointer-events-none">
                CLICK TO FLIP TICKET &bull; {activeSide.toUpperCase()}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-grey-body">
              <span>INVITATION N° 027</span>
              <span>&bull;</span>
              <span className="text-white">ACCÈS PRIVILÉGIÉ VIP</span>
              <span>&bull;</span>
              <span className="text-accent">INSCRIPTION REQUISE</span>
            </div>
          </div>

          {/* Right Column: Full Day Activity Schedule */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-heading font-bold text-accent uppercase tracking-widest block mb-1">
                VOTRE EXPÉRIENCE COMMENCE ICI
              </span>
              <h3 className="font-heading font-extrabold text-xl uppercase tracking-wider text-white">
                PROGRAMME OFFICIEL DE LA JOURNÉE
              </h3>
            </div>

            <div className="space-y-2.5">
              {vipEventPass.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-neutral-950 border border-white/10 hover:border-accent transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent font-bold">
                        {item.time}
                      </span>
                      <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] font-body text-grey-body mt-0.5 pl-0 sm:pl-0">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-heading font-medium text-neutral-400 mt-1 sm:mt-0 shrink-0">
                    Coach: {item.coach}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Reservation Callout */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <OutlineButton href="/book" variant="solid" className="w-full sm:w-auto">
                RÉSERVER MON PASS 27
              </OutlineButton>
              <div className="text-xs font-body text-grey-body flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Inscription : <a href={`tel:${vipEventPass.phone}`} className="text-white font-mono font-bold hover:underline">{vipEventPass.phone}</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
