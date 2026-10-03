"use client";

import React, { useState } from "react";
import Image from "next/image";
import OutlineButton from "@/components/ui/OutlineButton";
import { programTiles } from "@/data/siteData";

export default function ProgramTiles() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 select-none overflow-hidden bg-black">
      {programTiles.map((tile, idx) => {
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
            {/* Photo background with image zoom 1.08 */}
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

            {/* Content stack: slides up 10px on hover */}
            <div className="relative z-10 flex flex-col items-center max-w-md mx-auto transform translate-y-0 group-hover:-translate-y-2.5 transition-transform duration-350 ease-editorial">
              <span className="text-[10px] font-heading font-bold text-accent uppercase tracking-widest mb-2">
                ONYX DISCIPLINE 0{idx + 1}
              </span>

              <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-white mb-4">
                {tile.title}
              </h3>

              <p className="font-body text-[14px] text-white/85 leading-relaxed mb-8 max-w-sm">
                {tile.description}
              </p>

              {/* Centred Outline "READ MORE ↗" button (on-image full-box variant) */}
              <OutlineButton
                href="#contact"
                variant="box"
                theme="dark"
              >
                READ MORE
              </OutlineButton>
            </div>
          </div>
        );
      })}
    </section>
  );
}
