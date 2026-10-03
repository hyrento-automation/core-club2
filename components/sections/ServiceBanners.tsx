"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, Flame, Trophy } from "lucide-react";
import OutlineButton from "@/components/ui/OutlineButton";
import { serviceBanners } from "@/data/siteData";

export default function ServiceBanners() {
  const getIcon = (iconName: string, isLight: boolean) => {
    const iconClass = `w-12 h-12 stroke-[1.2] transition-transform duration-300 ease-editorial group-hover:-translate-y-2 ${
      isLight ? "text-black" : "text-white"
    }`;

    switch (iconName) {
      case "dumbbell":
        return <Dumbbell className={iconClass} />;
      case "flame":
        return <Flame className={iconClass} />;
      case "trophy":
      default:
        return <Trophy className={iconClass} />;
    }
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden select-none">
      {serviceBanners.map((banner) => {
        const isLight = banner.isLightVariant;

        return (
          <div
            key={banner.id}
            className="group relative min-h-[480px] lg:min-h-[540px] flex flex-col items-center justify-center p-8 sm:p-12 text-center overflow-hidden cursor-pointer"
          >
            {/* Background photo */}
            <div className="absolute inset-0">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center filter contrast-[1.1] transition-transform duration-[800ms] ease-editorial group-hover:scale-[1.08]"
              />
            </div>

            {/* Overlay: middle column uses light/washed overlay; outer columns use dark overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                isLight
                  ? "bg-white/75 group-hover:bg-white/85"
                  : "bg-black/65 group-hover:bg-black/75"
              }`}
            />

            {/* Centred Content Stack */}
            <div className="relative z-10 flex flex-col items-center max-w-[340px] mx-auto">
              {/* Centred Line Icon (lifts 8px on hover) */}
              <div className="mb-6 flex items-center justify-center">
                {getIcon(banner.iconName, !!isLight)}
              </div>

              {/* Bold Uppercase Title (nudges up on hover) */}
              <h3
                className={`font-heading font-black text-2xl lg:text-3xl tracking-wider uppercase mb-4 transition-transform duration-300 ease-editorial group-hover:-translate-y-1 ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                {banner.title}
              </h3>

              {/* 3-line light text */}
              <p
                className={`font-body text-[14px] leading-relaxed mb-8 line-clamp-3 ${
                  isLight ? "text-neutral-700" : "text-white/80"
                }`}
              >
                {banner.description}
              </p>

              {/* Outline Button: "SEND MESSAGE ↗" */}
              <OutlineButton
                href="#contact"
                variant="inline"
                theme={isLight ? "light" : "dark"}
              >
                SEND MESSAGE
              </OutlineButton>
            </div>
          </div>
        );
      })}
    </section>
  );
}
