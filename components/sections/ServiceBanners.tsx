"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, Flame, Trophy } from "lucide-react";
import OutlineButton from "@/components/ui/OutlineButton";
import { siteConfig } from "@/data/siteData";

const banners = [
  {
    id: 1,
    title: "YOGA & PILATES",
    description: "Outdoor yoga facing Lake Geneva & recovery Pilates engineered to decompress joints and cultivate core balance.",
    image: "/images/onyx/Coach_leading_Pilates_session_2K_20261003020650.jpg",
    icon: Dumbbell,
    isLight: false,
    href: "/activities#yoga",
  },
  {
    id: 2,
    title: "COMBAT SPORTS",
    description: "Technical Boxing, Boxing Fitness, Muay Thai, and sparring in private rounds. Pure self-mastery & power.",
    image: "/images/onyx/Coach_guiding_member_through_boxing_20261003015950.jpg",
    icon: Flame,
    isLight: true, // visual variation with washed overlay
    href: "/activities#boxing",
  },
  {
    id: 3,
    title: "PRIVATE TRAINING",
    description: "Tailor-made 1-on-1 sessions, biomechanics screenings, and executive mental preparation workshops.",
    image: "/images/onyx/Athlete_training_with_coach_20261003012225_2.jpg",
    icon: Trophy,
    isLight: false,
    href: "/activities#private",
  },
];

export default function ServiceBanners() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden select-none">
      {banners.map((banner) => {
        const isLight = banner.isLight;
        const IconComponent = banner.icon;

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

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                isLight
                  ? "bg-white/80 group-hover:bg-white/90"
                  : "bg-black/65 group-hover:bg-black/75"
              }`}
            />

            {/* Centred Content Stack */}
            <div className="relative z-10 flex flex-col items-center max-w-[340px] mx-auto">
              <div className="mb-6 flex items-center justify-center">
                <IconComponent
                  className={`w-12 h-12 stroke-[1.2] transition-transform duration-300 ease-editorial group-hover:-translate-y-2 ${
                    isLight ? "text-black" : "text-white"
                  }`}
                />
              </div>

              <h3
                className={`font-heading font-black text-2xl lg:text-3xl tracking-wider uppercase mb-3 transition-transform duration-300 ease-editorial group-hover:-translate-y-1 ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                {banner.title}
              </h3>

              <p
                className={`font-body text-[14px] leading-relaxed mb-8 line-clamp-3 ${
                  isLight ? "text-neutral-700" : "text-white/80"
                }`}
              >
                {banner.description}
              </p>

              <OutlineButton
                href={banner.href}
                variant="inline"
                theme={isLight ? "light" : "dark"}
              >
                DISCOVER CLASS
              </OutlineButton>
            </div>
          </div>
        );
      })}
    </section>
  );
}
