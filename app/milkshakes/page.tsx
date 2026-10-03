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
import { milkshakes, siteConfig } from "@/data/siteData";

export default function MilkshakesPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[480px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="SHAKES" theme="dark" />

          {/* Background image: High-top bar and seating */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/High-top_seating_beside_windows_20261003015950.jpg"
              alt="ONYX Club Nutrition Bar"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.45] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              04 / NUTRITION BAR &middot; CLEAN PROTEIN
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-6"
            >
              ONYX MILKSHAKES.
            </HeadingReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Clean-label proteins, superfoods and unique flavours to boost your performance. 30g of pure protein per shake, zero artificial sweeteners, prepared fresh after every session.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="#menu" variant="box" theme="dark">
                  VIEW SHAKE MENU
                </OutlineButton>
                <OutlineButton href="/book" variant="inline" theme="dark">
                  VISIT THE BAR
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4 Shakes Menu Grid */}
        <section id="menu" className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="MENU" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                HANDCRAFTED FORMULATIONS
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-black mb-4"
              >
                THE SIGNATURE FOUR
              </HeadingReveal>
              <p className="font-body text-grey-body text-sm leading-relaxed">
                30g of biodiverse protein &middot; Cold-pressed superfoods &middot; Organic plant milks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {milkshakes.map((shake, idx) => (
                <ScrollReveal key={shake.name} delay={idx * 0.1}>
                  <div className="group flex flex-col justify-between h-full bg-neutral-50 border border-grey-border p-5 hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div>
                      {/* Shake image */}
                      <div className="relative w-full aspect-square bg-neutral-200 overflow-hidden mb-5">
                        <Image
                          src={shake.image}
                          alt={shake.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-editorial"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-black text-white text-[9px] font-heading font-bold px-2 py-0.5 uppercase tracking-wider">
                          {shake.tag}
                        </div>
                      </div>

                      <h3 className="font-heading font-black text-lg uppercase tracking-wide text-black mb-2">
                        {shake.name}
                      </h3>
                      <p className="font-body text-grey-body text-xs leading-relaxed mb-4">
                        {shake.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-grey-border flex items-center justify-between">
                      <span className="font-heading font-black text-sm text-black">
                        {shake.kcal}{" "}
                        <span className="text-[10px] font-medium text-grey-body">
                          KCAL
                        </span>
                      </span>
                      <span className="bg-black text-white px-2 py-0.5 text-[10px] font-heading font-bold">
                        {shake.protein} PROTEIN
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Clean Label Philosophy & Bar Lounge Showcase */}
        <section id="lounge" className="relative w-full bg-dark text-white py-24 px-6 lg:px-16 border-t border-b border-white/10 overflow-hidden">
          <SectionWatermark text="LOUNGE" theme="dark" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-accent">
                  THE ONYX RECOVERY STANDARD
                </span>
                <HeadingReveal
                  as="h2"
                  className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wider leading-tight text-white"
                >
                  CLEAN-LABEL NUTRITION BAR
                </HeadingReveal>
                <p className="font-body text-grey-body text-sm leading-relaxed">
                  Post-workout refuel is where muscle protein synthesis and glycogen restoration occur. We craft every blend without gums, fillers, artificial dyes, or refined sugars.
                </p>
                <p className="font-body text-grey-body text-sm leading-relaxed">
                  Enjoy your shake at the high-top lounge overlooking the training floor or relax on our outdoor terrace facing the panoramic beauty of Lake Geneva.
                </p>

                <div className="pt-2">
                  <OutlineButton href="/book" variant="box" theme="dark">
                    JOIN FOR A TASTING & DEMO
                  </OutlineButton>
                </div>
              </div>

              {/* 2 Showcase Images */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <Image
                    src="/images/onyx/Acrylic_menu_close-up_20261003015950.jpg"
                    alt="Acrylic Nutrition Menu"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-heading uppercase text-white">
                    ACRYLIC MENU
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <Image
                    src="/images/onyx/High-top_seating_beside_windows_20261003015950.jpg"
                    alt="Bar High Top Seating"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-heading uppercase text-white">
                    HIGH-TOP LOUNGE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
