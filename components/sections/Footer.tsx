"use client";

import React from "react";
import { Instagram, Twitter, Facebook, Youtube, MapPin } from "lucide-react";
import OutlineButton from "@/components/ui/OutlineButton";
import { siteConfig, blogPosts } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white selection:bg-accent selection:text-white">
      {/* Instagram Strip: Centred icon + underlined, letter-spaced link "FOLLOW US ON @HANDLE", thin grey divider below */}
      <div className="border-t border-b border-white/10 py-10 px-6 text-center">
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
          {/* Column 1: Outlined monogram, short text, "OUR SOCIALS" with line icons (hover rotate 360deg + accent) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] border border-white flex items-center justify-center font-heading font-black text-base tracking-widest text-white">
                {siteConfig.monogram}
              </div>
              <span className="font-heading font-black text-lg tracking-[0.2em] uppercase">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="font-body text-xs sm:text-[13px] text-grey-body leading-relaxed max-w-xs">
              A high performance athletic sanctuary designed for disciplined power, functional agility, and unyielding physical adaptation.
            </p>

            <div>
              <span className="block font-heading text-[10px] font-bold uppercase tracking-widest text-grey-body mb-3">
                OUR SOCIALS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-500"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 transition-transform duration-500 ease-editorial group-hover:rotate-[360deg] group-hover:scale-110" />
                </a>
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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-500"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 transition-transform duration-500 ease-editorial group-hover:rotate-[360deg] group-hover:scale-110" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-500"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 transition-transform duration-500 ease-editorial group-hover:rotate-[360deg] group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: "BLOG POSTS": 3 bold uppercase titles with tiny grey dates (hover: title turns accent) */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              BLOG POSTS
            </h4>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <a
                  key={post.id}
                  href="#blog"
                  className="group block border-b border-white/5 pb-3 transition-colors"
                >
                  <span className="block text-[9px] font-mono text-grey-body tracking-wider mb-1">
                    {post.month} {post.day}, 2026
                  </span>
                  <h5 className="font-heading font-bold text-xs uppercase tracking-wide text-white/90 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h5>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: "LOCATIONS": dotted white world-map graphic with a pin, address below */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              LOCATIONS
            </h4>

            {/* Dotted White World Map Graphic with Pin */}
            <div className="relative w-full aspect-[16/9] bg-neutral-950 border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <svg
                viewBox="0 0 300 150"
                className="w-full h-full opacity-35"
                fill="#ffffff"
              >
                {/* Dotted Matrix representation of continents */}
                {Array.from({ length: 15 }).map((_, r) =>
                  Array.from({ length: 30 }).map((_, c) => {
                    // pseudo-continent shape logic
                    const x = c * 10 + 5;
                    const y = r * 10 + 5;
                    const isLand =
                      (c > 2 && c < 10 && r > 2 && r < 8) || // North America
                      (c > 5 && c < 10 && r >= 8 && r < 13) || // South America
                      (c > 13 && c < 21 && r > 2 && r < 7) || // Europe / Russia
                      (c > 14 && c < 20 && r >= 7 && r < 12) || // Africa
                      (c >= 21 && c < 28 && r > 2 && r < 9) || // Asia
                      (c >= 23 && c < 28 && r >= 10 && r < 14); // Australia

                    if (!isLand) return null;
                    return <circle key={`${r}-${c}`} cx={x} cy={y} r="1.5" />;
                  })
                )}
              </svg>

              {/* Pin pointing to New York */}
              <div className="absolute top-[35%] left-[28%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-accent relative" />
              </div>
            </div>

            <div className="space-y-1 text-xs font-body text-grey-body">
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <p className="pl-5 text-[11px] text-grey-body">
                Metropolitan Athletic District &bull; Brooklyn
              </p>
            </div>
          </div>

          {/* Column 4: "WORKING HOURS": Monday-Friday 07:00-21:00, Saturday 07:00-16:00, Sunday Closed, MORE HERE outline link */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              WORKING HOURS
            </h4>

            <div className="space-y-2 text-xs font-body">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-grey-body uppercase text-[11px] tracking-wider">
                  MONDAY - FRIDAY
                </span>
                <span className="text-white font-mono">07:00 - 21:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-grey-body uppercase text-[11px] tracking-wider">
                  SATURDAY
                </span>
                <span className="text-white font-mono">07:00 - 16:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-grey-body uppercase text-[11px] tracking-wider">
                  SUNDAY
                </span>
                <span className="text-accent font-semibold tracking-wider uppercase text-[11px]">
                  CLOSED
                </span>
              </div>
            </div>

            <div className="pt-4">
              <OutlineButton href="#timetable" variant="inline" theme="dark">
                MORE HERE
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (#0a0a0a): centred small copyright text */}
      <div className="w-full bg-[#0a0a0a] py-6 px-6 border-t border-white/5 text-center">
        <p className="font-body text-[11px] text-grey-body tracking-wider uppercase">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. ALL RIGHTS RESERVED. CRAFTED WITH EDITORIAL RIGOR.
        </p>
      </div>
    </footer>
  );
}
