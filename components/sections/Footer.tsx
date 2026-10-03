"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import OutlineButton from "@/components/ui/OutlineButton";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white selection:bg-accent selection:text-white border-t border-white/10">
      {/* Instagram Strip: Centred icon + underlined, letter-spaced link "FOLLOW US ON @ONYXCLUB.CH" */}
      <div className="border-b border-white/10 py-10 px-6 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300"
        >
          <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          <span className="underline underline-offset-8 decoration-white/30 group-hover:decoration-accent transition-colors duration-300">
            FOLLOW US ON {siteConfig.instagramHandle}
          </span>
        </a>
      </div>

      {/* 4 Columns Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1: Outlined monogram with official logo, short text, "OUR SOCIALS" */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-[48px] h-[48px] border border-white flex items-center justify-center bg-black overflow-hidden shadow-xl">
                <Image
                  src={siteConfig.logo}
                  alt="ONYX Club Logo"
                  fill
                  sizes="48px"
                  className="object-cover scale-110 filter brightness-110"
                />
              </div>
              <div>
                <span className="font-heading font-black text-lg tracking-[0.2em] uppercase block">
                  {siteConfig.fullName}
                </span>
                <span className="text-[10px] font-heading text-grey-body tracking-widest uppercase">
                  COLOGNY &middot; GENEVA
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-[13px] text-grey-body leading-relaxed max-w-xs">
              A private club. Nothing more. Sport, relaxation and panoramic views on the tranquil shores of Lake Geneva.
            </p>

            <div>
              <span className="block font-heading text-[10px] font-bold uppercase tracking-widest text-grey-body mb-3">
                OUR SOCIALS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-500"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 transition-transform duration-500 ease-editorial group-hover:rotate-[360deg] group-hover:scale-110" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 transition-transform duration-500 ease-editorial group-hover:rotate-[360deg] group-hover:scale-110" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-500"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 transition-transform duration-500 ease-editorial group-hover:rotate-[360deg] group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: EXPLORE CLUB (Direct Multi-Page Links) */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              EXPLORE CLUB
            </h4>
            <div className="space-y-2.5 text-xs font-heading font-medium tracking-wider">
              <div>
                <Link href="/concept" className="text-white/80 hover:text-accent transition-colors block py-1">
                  THE CONCEPT &rsaquo;
                </Link>
              </div>
              <div>
                <Link href="/activities" className="text-white/80 hover:text-accent transition-colors block py-1">
                  ACTIVITIES & COACHING &rsaquo;
                </Link>
              </div>
              <div>
                <Link href="/team" className="text-white/80 hover:text-accent transition-colors block py-1">
                  COACHING STAFF &rsaquo;
                </Link>
              </div>
              <div>
                <Link href="/milkshakes" className="text-white/80 hover:text-accent transition-colors block py-1">
                  ONYX MILKSHAKES BAR &rsaquo;
                </Link>
              </div>
              <div>
                <Link href="/clientele" className="text-white/80 hover:text-accent transition-colors block py-1">
                  OUR CLIENTELE &rsaquo;
                </Link>
              </div>
              <div>
                <Link href="/reviews" className="text-white/80 hover:text-accent transition-colors block py-1">
                  MEMBER TESTIMONIALS &rsaquo;
                </Link>
              </div>
              <div>
                <Link href="/book" className="text-white/80 hover:text-accent transition-colors block py-1">
                  FIRST VISIT DEMO &rsaquo;
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: LOCATIONS (Switzerland & Lake Geneva map pin) */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              LAKE GENEVA SANCTUARY
            </h4>

            {/* Dotted Map Graphic with Pin over Geneva/Switzerland */}
            <div className="relative w-full aspect-[16/9] bg-neutral-950 border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <svg
                viewBox="0 0 300 150"
                className="w-full h-full opacity-35"
                fill="#ffffff"
              >
                {Array.from({ length: 15 }).map((_, r) =>
                  Array.from({ length: 30 }).map((_, c) => {
                    const x = c * 10 + 5;
                    const y = r * 10 + 5;
                    const isLand =
                      (c > 2 && c < 10 && r > 2 && r < 8) ||
                      (c > 5 && c < 10 && r >= 8 && r < 13) ||
                      (c > 13 && c < 21 && r > 2 && r < 7) ||
                      (c > 14 && c < 20 && r >= 7 && r < 12) ||
                      (c >= 21 && c < 28 && r > 2 && r < 9) ||
                      (c >= 23 && c < 28 && r >= 10 && r < 14);

                    if (!isLand) return null;
                    return <circle key={`${r}-${c}`} cx={x} cy={y} r="1.5" />;
                  })
                )}
              </svg>

              {/* Pin pointing to Geneva / Switzerland */}
              <div className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-accent relative" />
              </div>
            </div>

            <div className="space-y-1 text-xs font-body text-grey-body">
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-white/80">
                <Phone className="w-3 h-3 text-accent shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors font-mono">
                  {siteConfig.phone} ({siteConfig.intlPhone})
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-3 h-3 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: WORKING HOURS & RATES */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              HOURS & RATES
            </h4>

            <div className="space-y-2 text-xs font-body">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-grey-body uppercase text-[11px] tracking-wider">
                  MONDAY - FRIDAY
                </span>
                <span className="text-white font-mono">06:30 - 21:30</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-grey-body uppercase text-[11px] tracking-wider">
                  SATURDAY
                </span>
                <span className="text-white font-mono">07:30 - 19:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-grey-body uppercase text-[11px] tracking-wider">
                  SUNDAY
                </span>
                <span className="text-white font-mono">08:00 - 17:00</span>
              </div>

              <div className="pt-2 text-[11px] text-grey-body">
                Group class 1h: <b className="text-white font-mono">{siteConfig.prices.group} {siteConfig.currency}</b> &bull; Private 1h: <b className="text-white font-mono">{siteConfig.prices.single} {siteConfig.currency}</b>
              </div>
            </div>

            <div className="pt-4">
              <OutlineButton href="/book" variant="inline" theme="dark">
                BOOK DEMO SESSION
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (#0a0a0a): centred small copyright text */}
      <div className="w-full bg-[#0a0a0a] py-6 px-6 border-t border-white/5 text-center">
        <p className="font-body text-[11px] text-grey-body tracking-wider uppercase">
          &copy; {new Date().getFullYear()} {siteConfig.fullName} &middot; SPORT &bull; LIFESTYLE &bull; ZEN &middot; COLOGNY, GENEVA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
