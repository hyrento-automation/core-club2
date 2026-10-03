"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingControls from "@/components/ui/FloatingControls";
import OffCanvasPanel from "@/components/ui/OffCanvasPanel";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";
import { clienteleProfiles } from "@/data/siteData";

export default function ClientelePage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[480px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="PEOPLE" theme="dark" />

          {/* Background image: Adults chatting on lakeside terrace */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/Adults_chatting_on_lakeside_terrace_20261003012226.jpg"
              alt="ONYX Club Members in Cologny"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.5] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              05 / OUR CLIENTELE &middot; COLOGNY COMMUNITY
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-6"
            >
              A CLUB FOR LIVES IN MOTION.
            </HeadingReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                An intimate sanctuary welcoming Geneva’s distinguished entrepreneurs, Cologny families, competitive athletes, and health-conscious active seniors.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="/book" variant="box" theme="dark">
                  JOIN OUR CIRCLE
                </OutlineButton>
                <OutlineButton href="/concept" variant="inline" theme="dark">
                  EXPLORE THE CONCEPT
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 7 Profiles Grid */}
        <section className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="MEMBERS" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                TAILORED WELLNESS
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-black mb-4"
              >
                WHO TRAINS AT ONYX?
              </HeadingReveal>
              <p className="font-body text-grey-body text-sm leading-relaxed">
                We cater to diverse athletic and lifestyle requirements while preserving complete discretion and calm.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clienteleProfiles.map((prof, idx) => (
                <ScrollReveal key={prof.number} delay={idx * 0.08}>
                  <div className="h-full bg-neutral-50 border border-grey-border p-8 hover:border-black transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-accent tracking-widest block mb-3">
                        {prof.number}
                      </span>
                      <h3 className="font-heading font-black text-lg uppercase tracking-wider text-black mb-3">
                        {prof.title}
                      </h3>
                      <p className="font-body text-grey-body text-sm leading-relaxed">
                        {prof.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-grey-border/60">
                      <a
                        href="/book"
                        className="text-[10px] font-heading font-bold uppercase tracking-wider text-black hover:text-accent transition-colors flex items-center justify-between"
                      >
                        <span>SCHEDULE CONSULTATION</span>
                        <span>&rsaquo;</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
