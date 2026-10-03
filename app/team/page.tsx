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
import { coaches, siteConfig } from "@/data/siteData";

export default function TeamPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[480px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="STAFF" theme="dark" />

          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/journee-sportive-poster.jpg"
              alt="ONYX Club Faculty Poster"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.35] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              ÉQUIPE OFFICIELLE &middot; COLOGNY, GENÈVE
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-4"
            >
              LES SIX MAÎTRES D&apos;ONYX
            </HeadingReveal>
            <p className="font-heading font-semibold text-accent text-sm sm:text-base uppercase tracking-widest mb-6">
              GOOD PEOPLE &bull; BETTER YOU
            </p>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Des praticiens d&apos;élite dédiés à l&apos;alignement postural, à la puissance rotative de la boxe, au conditionnement physique et à la clarté mentale face au lac Léman.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="/book" variant="box" theme="dark">
                  RÉSERVER UN COACH (120 CHF)
                </OutlineButton>
                <OutlineButton href="/activities" variant="inline" theme="dark">
                  VOIR LE PROGRAMME
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 Coaches Grid from Official Poster */}
        <section id="coaches" className="relative w-full bg-dark text-white py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="COACHS" theme="dark" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-accent block mb-2">
                ENCADREMENT PERSONNALISÉ
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-4"
              >
                NOS DIRECTEURS DE LA PERFORMANCE
              </HeadingReveal>
              <p className="font-body text-grey-body text-sm leading-relaxed">
                Chaque membre bénéficie de corrections posturales millimétrées et d&apos;une écoute attentive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {coaches.map((coach) => (
                <div
                  key={coach.id}
                  className="group relative flex flex-col justify-between h-full bg-black border border-white/10 p-6 hover:border-accent transition-colors duration-300 shadow-xl"
                >
                  <div>
                    {/* Official Coach Portrait Crop */}
                    <div className="relative w-full aspect-square bg-neutral-900 overflow-hidden mb-6 rounded-full border-2 border-white/20 group-hover:border-accent transition-colors duration-300">
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-editorial"
                      />
                      <div className="absolute top-2 right-2 bg-black/90 border border-white/20 text-accent font-mono text-[9px] font-bold px-2 py-0.5 tracking-wider rounded-full">
                        0{coach.id}
                      </div>
                    </div>

                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-accent block mb-1">
                      {coach.role}
                    </span>
                    <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white mb-2">
                      {coach.name}
                    </h3>
                    <p className="text-xs font-heading text-neutral-400 mb-3 tracking-wider">
                      {coach.specialty}
                    </p>
                    <p className="font-body text-grey-body text-xs sm:text-[13px] leading-relaxed mb-6">
                      {coach.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <OutlineButton href="/book" variant="inline" theme="dark">
                      SÉANCE PRIVÉE
                    </OutlineButton>
                    <span className="text-[10px] font-mono text-grey-body">
                      {siteConfig.prices.single} {siteConfig.currency} / 1H
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Callout with Slogans from Poster */}
        <section id="philosophy" className="relative w-full bg-white text-black py-20 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[11px] font-heading font-bold text-grey-body uppercase tracking-widest">
              L&apos;ART DE VIVRE ONYX
            </span>
            <HeadingReveal
              as="h2"
              className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-wider text-black"
            >
              DISCIPLINE AUJOURD&apos;HUI &middot; RÉSULTATS DEMAIN
            </HeadingReveal>
            <p className="font-body text-grey-body text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
              Corps, esprit, équilibre, communauté, résultats. Chez ONYX Club, chaque mouvement a un but précis : vous rendre plus fort, plus serein et plus épanoui au quotidien.
            </p>
            <div className="pt-4">
              <OutlineButton href="/book" variant="solid">
                PRENDRE CONTACT AVEC L&apos;ÉQUIPE
              </OutlineButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
