"use client";

import React, { useState } from "react";
import Image from "next/image";
import OutlineButton from "@/components/ui/OutlineButton";

const tiles = [
  {
    id: 1,
    title: "ONYX MILKSHAKES",
    discipline: "DISCIPLINE 01 · NUTRITION BAR",
    description: "Clean-label proteins, superfoods, and unique flavors formulated to maximize metabolic recovery and performance.",
    image: "/images/onyx/Chocolate_protein_shake_in_glass_2K_20261003031440_copy.jpg",
    href: "/milkshakes",
  },
  {
    id: 2,
    title: "YOGA & PILATES",
    discipline: "DISCIPLINE 02 · LAKE GENEVA",
    description: "Vinyasa facing the water and restorative reformer Pilates designed to rebuild functional alignment and tranquility.",
    image: "/images/onyx/Coach_leading_Pilates_session_2K_20261003020650.jpg",
    href: "/activities#yoga",
  },
  {
    id: 3,
    title: "TECHNICAL COMBAT",
    discipline: "DISCIPLINE 03 · PRECISION & POWER",
    description: "Technical boxing, sparring, and combat endurance coaching that sharpens reflexes, resilience, and inner strength.",
    image: "/images/onyx/Coach_guiding_member_boxing_tech_20261003015950.jpg",
    href: "/activities#boxing",
  },
  {
    id: 4,
    title: "PRIVATE TRAINING",
    discipline: "DISCIPLINE 04 · BESPOKE PROTOCOL",
    description: "1-on-1 tailor-made periodization and executive cognitive preparation engineered exclusively for your body and rhythm.",
    image: "/images/onyx/Athlete_training_with_coach_20261003012225.jpg",
    href: "/book",
  },
];

export default function ProgramTiles() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 select-none overflow-hidden bg-black">
      {tiles.map((tile, idx) => {
        const isHovered = hoveredIdx === idx;
        const isOtherHovered = hoveredIdx !== null && !isHovered;

        return (
          <div
            key={tile.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`group relative min-h-[420px] lg:min-h-[500px] flex items-center justify-center p-8 sm:p-14 text-center overflow-hidden cursor-pointer transition-opacity duration-300 ${
              isOtherHovered ? "opacity-70" : "opacity-100"
            }`}
          >
            {/* Photo background */}
            <div className="absolute inset-0">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.1] transition-transform duration-[700ms] ease-editorial group-hover:scale-[1.08]"
              />
            </div>

            {/* Dark overlay: default dark, lightens on hover */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/35 transition-colors duration-400" />

            {/* Content stack */}
            <div className="relative z-10 flex flex-col items-center max-w-md mx-auto transform translate-y-0 group-hover:-translate-y-2.5 transition-transform duration-350 ease-editorial">
              <span className="text-[10px] font-heading font-bold text-accent uppercase tracking-widest mb-2">
                {tile.discipline}
              </span>

              <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-white mb-4">
                {tile.title}
              </h3>

              <p className="font-body text-[14px] text-white/85 leading-relaxed mb-8 max-w-sm">
                {tile.description}
              </p>

              <OutlineButton
                href={tile.href}
                variant="box"
                theme="dark"
              >
                DISCOVER PROGRAM
              </OutlineButton>
            </div>
          </div>
        );
      })}
    </section>
  );
}
