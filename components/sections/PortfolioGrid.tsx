"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioTiles } from "@/data/siteData";
import SectionWatermark from "@/components/ui/SectionWatermark";
import { ScrollReveal, HeadingReveal } from "@/components/ui/ScrollReveal";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative w-full bg-white text-black overflow-hidden">
      {/* Vertical Outlined Watermark "GYM" pinned to left edge */}
      <SectionWatermark text="GYM" theme="light" />

      {/* Intro Header: Centred heading + 2-line grey paragraph (~110px padding top/bottom) */}
      <div className="relative max-w-4xl mx-auto px-6 pt-[100px] pb-[80px] text-center z-10">
        <HeadingReveal as="h2" className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black mb-5">
          WHAT IS FUNCTIONAL FITNESS ALL ABOUT
        </HeadingReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-body text-grey-body text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            Functional fitness targets movement patterns rather than isolated muscle groups. We develop raw acceleration, rotational torque, and aerobic stamina through scientifically programmed compound conditioning.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-width, ZERO-gap 4-column grid, 6 tiles
          Row 1: square (1 col), square (1 col), wide (2 cols)
          Row 2: wide (2 cols), square (1 col), square (1 col) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-black">
        {portfolioTiles.map((tile, idx) => {
          const isWide = tile.isWide;
          const colSpanClass = isWide
            ? "md:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[2/1]"
            : "col-span-1 aspect-square";

          return (
            <div
              key={tile.id}
              tabIndex={0}
              className={`group relative overflow-hidden bg-black cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${colSpanClass}`}
            >
              {/* Image wrapper:
                  Shifts inward from top-left (top: 15%, left: 12%) while staying flush to right/bottom,
                  revealing the black background underneath on top and left.
                  Timing 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94). */}
              <div
                className="absolute inset-0 transition-all duration-[350ms] ease-smooth group-hover:top-[14%] group-hover:left-[11%] group-focus-visible:top-[14%] group-focus-visible:left-[11%]"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter grayscale-[30%] brightness-[0.88] group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Desktop Hover Label Bar:
                  Solid black bar wiping in from RIGHT edge toward left (clip-path inset(0 0 0 100%) -> inset(0)),
                  sitting at ~40% tile height, from ~50-60% width to right edge, padding 20px 25px.
                  Delay 0.05s. Fully reversible. */}
              <div
                className="hidden md:flex absolute top-[38%] right-0 w-[60%] min-w-[240px] max-w-[340px] bg-black items-center justify-between px-6 py-5 shadow-2xl z-20 transition-all duration-[350ms] ease-smooth [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0%)] group-focus-visible:[clip-path:inset(0_0_0_0%)] delay-[50ms]"
              >
                <div>
                  <span className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-grey-body mb-0.5">
                    {tile.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-[17px] text-white uppercase tracking-wider leading-tight">
                    {tile.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Mobile / Touch Fallback: Statically displayed at bottom of tile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-black/85 backdrop-blur-sm p-4 flex items-center justify-between z-20 border-t border-white/10">
                <div>
                  <span className="block text-[10px] font-heading font-semibold uppercase tracking-wider text-grey-body">
                    {tile.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-[15px] text-white uppercase tracking-wide">
                    {tile.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
