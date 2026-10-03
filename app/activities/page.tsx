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
import { activitiesList, siteConfig } from "@/data/siteData";

export default function ActivitiesPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[480px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="SPORTS" theme="dark" />

          {/* Background image: Boxing Session */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/Coach_guiding_member_boxing_tech_20261003015950.jpg"
              alt="ONYX Club Activities in Cologny"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.5] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              02 / OUR ACTIVITIES &middot; CHOOSE YOUR RHYTHM
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-6"
            >
              EXCEPTIONAL ACTIVITIES.
            </HeadingReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                From outdoor yoga facing Lake Geneva to high-tempo technical boxing, tailor-made private training, and executive mental preparation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="#pricing" variant="box" theme="dark">
                  VIEW RATES ({siteConfig.prices.group} {siteConfig.currency})
                </OutlineButton>
                <OutlineButton href="/book" variant="inline" theme="dark">
                  BOOK A SESSION
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 Activities Showcase */}
        <section className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="CLASSES" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10 space-y-24">
            {activitiesList.map((act, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={act.id}
                  id={act.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo Column */}
                  <ScrollReveal
                    delay={0.1}
                    className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="group relative w-full aspect-[4/3] bg-black overflow-hidden shadow-2xl border border-grey-border">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center filter grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-editorial"
                      />
                      <div className="absolute top-4 left-4 bg-black text-white font-mono text-xs font-bold px-3 py-1 tracking-widest">
                        {act.number}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="text-[11px] font-heading font-bold text-accent uppercase tracking-widest block">
                      {act.subtitle}
                    </span>
                    <HeadingReveal
                      as="h2"
                      className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-black"
                    >
                      {act.title}
                    </HeadingReveal>
                    <p className="font-body text-grey-body text-sm sm:text-[15px] leading-relaxed">
                      {act.description}
                    </p>

                    <div className="pt-2 flex items-center gap-6 text-xs font-heading font-semibold tracking-wider text-black">
                      {act.priceGroup && (
                        <span>
                          GROUP:{" "}
                          <b className="font-black text-sm text-black">
                            {act.priceGroup} {siteConfig.currency}
                          </b>{" "}
                          / 1H
                        </span>
                      )}
                      {act.priceSingle && (
                        <span>
                          PRIVATE:{" "}
                          <b className="font-black text-sm text-black">
                            {act.priceSingle} {siteConfig.currency}
                          </b>{" "}
                          / 1H
                        </span>
                      )}
                    </div>

                    <div className="pt-4">
                      <OutlineButton href="/book" variant="inline" theme="light">
                        BOOK THIS SESSION
                      </OutlineButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Feature Block: Self-Mastery & Strength */}
        <section className="relative w-full bg-dark text-white py-20 px-6 lg:px-16 border-t border-b border-white/10 overflow-hidden">
          <SectionWatermark text="POWER" theme="dark" />

          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
            <span className="text-[11px] font-heading font-bold text-accent uppercase tracking-widest">
              COMBAT & BIOMECHANICS
            </span>
            <HeadingReveal
              as="h2"
              className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white"
            >
              SELF-MASTERY & STRENGTH.
            </HeadingReveal>
            <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Boosted agility and endurance. Precision of action. Resilience & balance. Whether refining sparring ring dynamics or restoring musculoskeletal alignment facing Lake Geneva, every session builds lifelong athletic fortitude.
            </p>
          </div>
        </section>

        {/* Pricing & Session Rates Table */}
        <section id="pricing" className="relative w-full bg-white text-black py-24 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                TRANSPARENT VALUE
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wider text-black mb-3"
              >
                RATES & MEMBERSHIP PASSES
              </HeadingReveal>
              <p className="font-body text-grey-body text-sm">
                No hidden entry fees. Transparent, premium Swiss pricing in Swiss Francs (CHF).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Group Class */}
              <div className="border border-black p-8 bg-neutral-50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                    COLLECTIVE SESSIONS
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-wider text-black mb-4">
                    GROUP CLASS 1H
                  </h3>
                  <div className="text-4xl font-heading font-black text-black mb-4">
                    {siteConfig.prices.group}{" "}
                    <span className="text-lg font-normal text-grey-body">
                      {siteConfig.currency}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs font-body text-grey-body mb-8">
                    <li>&bull; Lakeside Yoga & Recovery Pilates</li>
                    <li>&bull; Boxing Fitness & Combat Sparring</li>
                    <li>&bull; Running Club & Shoreline Bootcamp</li>
                    <li>&bull; Full access to showers and locker lounge</li>
                  </ul>
                </div>

                <OutlineButton href="/book" variant="solid" className="w-full">
                  BOOK GROUP CLASS
                </OutlineButton>
              </div>

              {/* Private Session */}
              <div className="border border-black p-8 bg-black text-white flex flex-col justify-between shadow-2xl">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-accent block mb-2">
                    BESPOKE PROTOCOL
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-wider text-white mb-4">
                    PRIVATE 1H
                  </h3>
                  <div className="text-4xl font-heading font-black text-white mb-4">
                    {siteConfig.prices.single}{" "}
                    <span className="text-lg font-normal text-grey-body">
                      {siteConfig.currency}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs font-body text-neutral-300 mb-8">
                    <li>&bull; Dedicated 1-on-1 certified master coach</li>
                    <li>&bull; Tailor-made biomechanics & strength periodization</li>
                    <li>&bull; 1h Mental preparation & executive coaching</li>
                    <li>&bull; Post-session recovery shake included</li>
                  </ul>
                </div>

                <OutlineButton href="/book" variant="box" theme="dark" className="w-full">
                  BOOK PRIVATE SESSION
                </OutlineButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
