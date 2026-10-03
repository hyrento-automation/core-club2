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
import { reviews } from "@/data/siteData";

export default function ReviewsPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[480px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="REVIEWS" theme="dark" />

          {/* Background image: Adults chatting on lakeside terrace */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/Adults_having_coaching_conversation_20261003012226.jpg"
              alt="ONYX Club Member Reviews"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.45] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              MEMBER TESTIMONIALS &middot; LAKE GENEVA
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-6"
            >
              THEY BECAME MEMBERS.
            </HeadingReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Discover how training at ONYX Club in Cologny transformed the strength, daily vitality, and mental clarity of our distinguished members.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <OutlineButton href="/book" variant="box" theme="dark">
                  EXPERIENCE ONYX FOR YOURSELF
                </OutlineButton>
                <OutlineButton href="/activities" variant="inline" theme="dark">
                  OUR ACTIVITIES
                </OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Reviews Cards Grid */}
        <section className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="VOICES" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {reviews.map((rev, idx) => (
                <ScrollReveal key={rev.id} delay={idx * 0.1}>
                  <div className="bg-neutral-50 border border-grey-border p-8 sm:p-10 flex flex-col justify-between h-full hover:border-black transition-colors duration-300 shadow-sm hover:shadow-xl">
                    <div>
                      <div className="font-serif text-5xl leading-none text-accent mb-4 select-none">
                        “
                      </div>
                      <blockquote className="font-body italic text-black text-base sm:text-lg leading-relaxed mb-8">
                        {rev.quote}
                      </blockquote>
                    </div>

                    <div className="pt-6 border-t border-grey-border flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/20 shrink-0">
                        <Image
                          src={rev.avatar}
                          alt={rev.author}
                          fill
                          sizes="50px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-sm uppercase tracking-wider text-black">
                          {rev.author}
                        </h3>
                        <span className="text-[10px] font-heading font-semibold text-grey-body uppercase tracking-widest">
                          {rev.role}
                        </span>
                      </div>
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
