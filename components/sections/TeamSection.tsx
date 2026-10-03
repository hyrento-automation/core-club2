"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Share2, Instagram, Twitter, Linkedin } from "lucide-react";
import { coaches } from "@/data/siteData";
import SectionWatermark from "@/components/ui/SectionWatermark";
import { ScrollReveal, HeadingReveal } from "@/components/ui/ScrollReveal";

export default function TeamSection() {
  const [activeShareIdx, setActiveShareIdx] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="relative w-full bg-dark text-white py-[110px] px-6 overflow-hidden border-t border-b border-white/5"
    >
      {/* Watermark "STAFF" pinned to left edge */}
      <SectionWatermark text="STAFF" theme="dark" />

      {/* Intro Header: Centred white heading + grey paragraph */}
      <div className="relative max-w-4xl mx-auto text-center mb-16 z-10">
        <HeadingReveal
          as="h2"
          className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-white mb-4"
        >
          TEAM OF EXPERT COACHES
        </HeadingReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-body text-grey-body text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            Our certified strength conditioning specialists and Olympic biomechanics directors combine rigorous sports science with real-world athletic pedigree.
          </p>
        </ScrollReveal>
      </div>

      {/* 3 Portrait Cards, centred row with wide gaps */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-16 z-10">
        {coaches.map((coach, idx) => (
          <ScrollReveal
            key={coach.id}
            delay={idx * 0.15}
            className="w-full max-w-[320px] md:max-w-none md:w-auto"
          >
            <div
              className="group relative flex flex-col md:flex-row items-start select-none"
              onMouseEnter={() => setActiveShareIdx(idx)}
              onMouseLeave={() => setActiveShareIdx(null)}
            >
              {/* Photo Frame: white-background portrait photo (~4:5 ratio) */}
              <div className="relative w-full md:w-[260px] lg:w-[280px] aspect-[4/5] bg-white overflow-hidden shadow-2xl">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-top filter grayscale contrast-[1.1] transition-transform duration-[600ms] ease-editorial group-hover:scale-105"
                />

                {/* Subtle vignette on card base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Share icon at photo bottom-right corner:
                    expands upward into a stack of social icons (stagger 0.06s) */}
                <div className="absolute bottom-0 right-0 z-30 flex flex-col items-center">
                  {/* Upward expanding social stack */}
                  <div
                    className={`flex flex-col items-center overflow-hidden transition-all duration-300 ease-editorial ${
                      activeShareIdx === idx ? "max-h-40 opacity-100 mb-0" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white/80 hover:text-accent border-t border-l border-white/10 flex items-center justify-center transition-colors duration-200"
                      aria-label={`${coach.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white/80 hover:text-accent border-t border-l border-white/10 flex items-center justify-center transition-colors duration-200"
                      aria-label={`${coach.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white/80 hover:text-accent border-t border-l border-white/10 flex items-center justify-center transition-colors duration-200"
                      aria-label={`${coach.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Main Black square share icon */}
                  <button
                    className="w-10 h-10 bg-black text-white border-t border-l border-white/10 flex items-center justify-center group-hover:bg-neutral-900 transition-colors"
                    aria-label={`Share ${coach.name}'s profile`}
                  >
                    <Share2 className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  </button>
                </div>
              </div>

              {/* Desktop: To the RIGHT of the photo, Coach Name VERTICAL + Role label vertical beside it */}
              <div className="hidden md:flex flex-row items-start pl-4 pt-1 gap-2.5 h-[325px] lg:h-[350px]">
                {/* Vertical Name (rotated 90deg clockwise, top-to-bottom, bold uppercase white) */}
                <div className="relative h-full flex items-start overflow-hidden">
                  <h3
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                    className="font-heading font-extrabold text-[15px] lg:text-[16px] tracking-wider uppercase text-white whitespace-nowrap transition-transform duration-300 ease-editorial group-hover:translate-y-1.5"
                  >
                    {coach.name}
                  </h3>
                </div>

                {/* Vertical Role label (tiny letter-spaced grey) */}
                <div className="relative h-full flex items-start">
                  <span
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                    className="font-heading text-[10px] tracking-widest text-grey-body uppercase whitespace-nowrap"
                  >
                    {coach.role}
                  </span>
                </div>
              </div>

              {/* Mobile: Name moves BELOW the photo, horizontal */}
              <div className="md:hidden mt-4 w-full">
                <span className="block font-heading text-[10px] tracking-widest text-grey-body uppercase mb-1">
                  {coach.role}
                </span>
                <h3 className="font-heading font-extrabold text-base tracking-wider uppercase text-white">
                  {coach.name}
                </h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
