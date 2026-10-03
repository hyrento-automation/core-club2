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
import { conceptPillars, siteConfig } from "@/data/siteData";

export default function ConceptPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[520px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="CONCEPT" theme="dark" />

          {/* Background image of the Cologny Villa */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/Villa_exterior_architecture_and__2K_20261003015930.jpg"
              alt="ONYX Club Cologny Villa on Lake Geneva"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.55] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              01 / OUR PHILOSOPHY &middot; COLOGNY, GENEVA
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-6"
            >
              A PRIVATE CLUB. NOTHING MORE.
            </HeadingReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Sport, relaxation and panoramic views on the shore of Lake Geneva. An intimate, discreet athletic retreat engineered for those who demand excellence without pretense.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="/book" variant="box" theme="dark">
                  DISCOVER THE SANCTUARY
                </OutlineButton>
                <OutlineButton href="/activities" variant="inline" theme="dark">
                  VIEW OUR ACTIVITIES
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 Concept Pillars Grid */}
        <section id="pillars" className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="PILLARS" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                FOUNDATIONAL VALUES
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-black mb-4"
              >
                THE SIX PILLARS OF ONYX
              </HeadingReveal>
              <p className="font-body text-grey-body text-sm leading-relaxed">
                Every detail of the club has been meticulously curated to harmonize intense athletic conditioning with supreme peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conceptPillars.map((pillar, idx) => (
                <ScrollReveal key={pillar.number} delay={idx * 0.1}>
                  <div className="group flex flex-col justify-between h-full bg-neutral-50 border border-grey-border p-6 hover:border-black transition-colors duration-300">
                    <div>
                      {/* Image frame */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-neutral-200">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center filter grayscale-[15%] transition-transform duration-500 ease-editorial group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5 tracking-wider">
                          {pillar.number}
                        </div>
                      </div>

                      <h3 className="font-heading font-extrabold text-lg uppercase tracking-wide text-black mb-2">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-grey-body text-xs sm:text-[13px] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-grey-border/60">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-black group-hover:text-accent transition-colors flex items-center gap-1">
                        EXPLORE DISCIPLINE &rsaquo;
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Villa Sanctuary & Facilities Tour */}
        <section id="sanctuary" className="relative w-full bg-dark text-white py-24 px-6 lg:px-16 border-t border-b border-white/10">
          <SectionWatermark text="SANCTUARY" theme="dark" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-accent">
                  PRIVATE RETREAT ON LAKE GENEVA
                </span>
                <HeadingReveal
                  as="h2"
                  className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wider leading-tight text-white"
                >
                  DISCREET ELEGANCE IN COLOGNY
                </HeadingReveal>
                <p className="font-body text-grey-body text-sm leading-relaxed">
                  Situated in the prestigious commune of Cologny, ONYX Club occupies a tranquil villa directly facing the calm waters of Lake Geneva. Floor-to-ceiling panoramic glass brings natural alpine light into the training floor while shielding members from the city’s bustle.
                </p>
                <p className="font-body text-grey-body text-sm leading-relaxed">
                  After your workout, decompress on the lakeside terrace with a clean-label protein shake, or rejuvenate in our state-of-the-art rain showers and private vanity suites.
                </p>

                <div className="pt-4">
                  <OutlineButton href="/book" variant="box" theme="dark">
                    REQUEST PRIVATE TOUR
                  </OutlineButton>
                </div>
              </div>

              {/* Photo Showcase Matrix */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src="/images/onyx/Waiting_lounge_interior_design_20261003015951.jpg"
                    alt="Waiting Lounge"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-heading uppercase text-white">
                    LOUNGE
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src="/images/onyx/Adults_chatting_on_lakeside_terrace_20261003012226.jpg"
                    alt="Lakeside Terrace"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-heading uppercase text-white">
                    LAKE TERRACE
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src="/images/onyx/Club_washroom_vanity_interior_view_20261003015950.jpg"
                    alt="Luxury Vanity"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-heading uppercase text-white">
                    VANITY & GROOMING
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src="/images/onyx/Locker_room_with_red_lockers_20261003015950.jpg"
                    alt="Private Lockers"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-heading uppercase text-white">
                    PRIVATE LOCKERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <section className="bg-black py-16 px-6 text-center border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-wider text-white mb-3">
              READY TO EXPERIENCE ONYX?
            </h3>
            <p className="font-body text-grey-body text-xs sm:text-sm mb-6">
              Complimentary 1-hour discovery session. No commitment.
            </p>
            <OutlineButton href="/book" variant="solid">
              BOOK A DISCOVERY SESSION
            </OutlineButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
