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
import { activitiesList, siteConfig, vipEventPass } from "@/data/siteData";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

export default function ActivitiesPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[500px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="SPORTS" theme="dark" />

          {/* Background image: Official Journée Sportive & Bien-Être poster */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/journee-sportive-poster.jpg"
              alt="ONYX Club Activities & Poster"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top filter brightness-[0.38] contrast-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              ACTIVITÉS OFFICIELLES &middot; SUR LE LAC LÉMAN
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-4"
            >
              STRONGER HAPPIER YOU
            </HeadingReveal>
            <p className="font-heading font-semibold text-accent text-sm sm:text-base uppercase tracking-widest mb-6">
              PLUS QU&apos;UN CLUB, UN ART DE VIVRE
            </p>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Six disciplines d&apos;exception encadrées par des maîtres certifiés face aux eaux calmes de Cologny. Pilates, Yoga, Développement Personnel, Boxe, Coaching Sportif et Stretching.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="#pass27" variant="box" theme="dark">
                  DÉCOUVRIR LE PASS 27
                </OutlineButton>
                <OutlineButton href="/book" variant="inline" theme="dark">
                  1ÈRE SESSION OFFERTE
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 Official Disciplines from the Poster */}
        <section className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="CLASSES" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10 space-y-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                CORPS &bull; ESPRIT &bull; ÉQUILIBRE &bull; COMMUNAUTÉ &bull; RÉSULTATS
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wider text-black mb-3"
              >
                NOS SIX DISCIPLINES MAÎTRESSES
              </HeadingReveal>
              <p className="font-body text-grey-body text-sm">
                Discipline aujourd&apos;hui &middot; Résultats demain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activitiesList.map((act) => (
                <div
                  key={act.id}
                  id={act.id}
                  className="group flex flex-col justify-between h-full bg-neutral-50 border border-grey-border p-6 hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div>
                    {/* Official Coach Portrait Crop */}
                    <div className="relative w-full aspect-square bg-neutral-900 overflow-hidden mb-6 rounded-sm border border-grey-border">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center filter group-hover:scale-105 transition-transform duration-500 ease-editorial"
                      />
                      <div className="absolute top-3 left-3 bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5 tracking-wider">
                        {act.number}
                      </div>
                      {act.scheduleTime && (
                        <div className="absolute bottom-3 right-3 bg-black/90 text-accent font-mono text-[10px] font-bold px-2.5 py-0.5">
                          {act.scheduleTime}
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-accent block mb-1">
                      {act.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-xl uppercase tracking-wider text-black mb-3">
                      {act.title}
                    </h3>
                    <p className="font-body text-grey-body text-xs sm:text-[13px] leading-relaxed mb-6">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-grey-border flex items-center justify-between">
                    <div className="text-xs font-mono font-bold text-black">
                      {act.priceGroup && <span>35 CHF / 1h</span>}
                      {act.priceSingle && !act.priceGroup && <span>120 CHF / 1h</span>}
                    </div>
                    <OutlineButton href="/book" variant="inline" theme="light">
                      RÉSERVER &rsaquo;
                    </OutlineButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PASS 27 Spotlight Card */}
        <section id="pass27" className="relative w-full bg-dark text-white py-20 px-6 lg:px-16 border-t border-b border-white/10">
          <div className="max-w-5xl mx-auto bg-black border border-white/20 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-heading font-bold text-accent uppercase tracking-widest">
                  BILLET D&apos;ACCÈS PRIVILÉGIÉ
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  PASS 27 &mdash; DIMANCHE 27 SEPTEMBRE
                </h3>
                <p className="font-body text-grey-body text-sm leading-relaxed">
                  Rejoignez la Journée Sportive & Bien-Être au Chemin du Nant-d&apos;Argent 1, Cologny. Votre 1ère session est offerte sur réservation préalable.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-body text-neutral-300">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent" /> 27 Septembre</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" /> 08h00 - 16h00</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accent" /> Cologny, Genève</span>
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-accent" /> 078 613 70 21</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] aspect-[16/10] border border-white/30 overflow-hidden shadow-2xl">
                  <Image
                    src={vipEventPass.ticketRecto}
                    alt="Pass 27 Recto"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative w-full bg-white text-black py-20 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body">
              TARIFS SUISSES TRANSPARENTS
            </span>
            <HeadingReveal
              as="h2"
              className="font-heading font-black text-3xl uppercase tracking-wider text-black"
            >
              COURS COLLECTIF : 35 CHF &middot; INDIVIDUEL : 120 CHF
            </HeadingReveal>
            <p className="font-body text-grey-body text-sm max-w-xl mx-auto">
              Sans frais d&apos;inscription dissimulés. Chaque séance comprend l&apos;accès complet aux vestiaires privés, serviettes et douches de luxe.
            </p>
            <div className="pt-4">
              <OutlineButton href="/book" variant="solid">
                BÉNÉFICIER DE LA 1ÈRE SESSION OFFERTE
              </OutlineButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
