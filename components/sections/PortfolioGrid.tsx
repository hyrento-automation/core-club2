"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionWatermark from "@/components/ui/SectionWatermark";
import { ScrollReveal, HeadingReveal } from "@/components/ui/ScrollReveal";

const realTiles = [
  {
    id: 1,
    category: "YOGA & PILATES",
    title: "LAKESIDE VINYASA",
    image: "/images/onyx/Coach_guiding_yoga_class_2K_20261003020658.jpg",
    isWide: false,
    href: "/activities#yoga",
  },
  {
    id: 2,
    category: "COMBAT SPORTS",
    title: "TECHNICAL BOXING",
    image: "/images/onyx/Coach_guiding_member_boxing_tech_20261003015950.jpg",
    isWide: false,
    href: "/activities#boxing",
  },
  {
    id: 3,
    category: "THE SANCTUARY",
    title: "LAKE GENEVA TERRACE",
    image: "/images/onyx/Adults_chatting_on_lakeside_terrace_20261003012226.jpg",
    isWide: true,
    href: "/concept#sanctuary",
  },
  {
    id: 4,
    category: "TRAINING STUDIO",
    title: "BESPOKE PRIVATE ARENA",
    image: "/images/onyx/ONYX_Club_training_studio_interior_2K_20261003015925.jpg",
    isWide: true,
    href: "/activities#private",
  },
  {
    id: 5,
    category: "CARE & RECOVERY",
    title: "GUIDED MOBILITY",
    image: "/images/onyx/Guided_stretching_session_20261003015951.jpg",
    isWide: false,
    href: "/concept#pillars",
  },
  {
    id: 6,
    category: "NUTRITION BAR",
    title: "ONYX PROTEIN SHAKES",
    image: "/images/onyx/Acrylic_menu_close-up_20261003015950.jpg",
    isWide: false,
    href: "/milkshakes",
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative w-full bg-white text-black overflow-hidden">
      {/* Vertical Outlined Watermark "CLUB" pinned to left edge */}
      <SectionWatermark text="CLUB" theme="light" />

      {/* Intro Header: Centred heading + 2-line grey paragraph */}
      <div className="relative max-w-4xl mx-auto px-6 pt-[100px] pb-[80px] text-center z-10">
        <HeadingReveal
          as="h2"
          className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black mb-5"
        >
          A PRIVATE CLUB. NOTHING MORE.
        </HeadingReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-body text-grey-body text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            Sport, relaxation and panoramic views on the shore of Lake Geneva. We unite technical boxing, restorative yoga, personalized conditioning, and clean-label nutrition in Cologny.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-width, ZERO-gap 4-column grid, 6 tiles */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-black">
        {realTiles.map((tile) => {
          const isWide = tile.isWide;
          const colSpanClass = isWide
            ? "md:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[2/1]"
            : "col-span-1 aspect-square";

          return (
            <Link
              key={tile.id}
              href={tile.href}
              className={`group relative overflow-hidden bg-black cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent block ${colSpanClass}`}
            >
              {/* Image wrapper shifts inward from top-left */}
              <div className="absolute inset-0 transition-all duration-[350ms] ease-smooth group-hover:top-[14%] group-hover:left-[11%] group-focus-visible:top-[14%] group-focus-visible:left-[11%]">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter grayscale-[25%] brightness-[0.88] group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Desktop Hover Label Bar wiping in from right edge */}
              <div className="hidden md:flex absolute top-[38%] right-0 w-[60%] min-w-[240px] max-w-[340px] bg-black items-center justify-between px-6 py-5 shadow-2xl z-20 transition-all duration-[350ms] ease-smooth [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0%)] group-focus-visible:[clip-path:inset(0_0_0_0%)] delay-[50ms]">
                <div>
                  <span className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-grey-body mb-0.5">
                    {tile.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-[16px] text-white uppercase tracking-wider leading-tight">
                    {tile.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Mobile / Touch Fallback */}
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
