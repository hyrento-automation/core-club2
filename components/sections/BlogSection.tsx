"use client";

import React from "react";
import Image from "next/image";
import { blogPosts } from "@/data/siteData";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";

export default function BlogSection() {
  return (
    <section id="blog" className="relative w-full bg-white text-black py-[110px] px-6 lg:px-16 overflow-hidden">
      {/* Watermark "BLOG" */}
      <SectionWatermark text="BLOG" theme="light" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centred Heading + Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HeadingReveal
            as="h2"
            className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black mb-4"
          >
            LATEST BLOG POSTS
          </HeadingReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-grey-body text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
              Insights into sports physiology, biomechanics analysis, and nutritional frameworks direct from the coaching floor.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 0.15}>
              <article className="group relative flex flex-col justify-between h-full bg-white select-none">
                {/* Landscape Image with Black Square Date Badge at top-right */}
                <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-neutral-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center filter grayscale-[20%] transition-transform duration-[600ms] ease-editorial group-hover:scale-[1.08]"
                  />

                  {/* Date Badge: Black square at top-right, flips to accent colour on hover */}
                  <div className="absolute top-4 right-4 z-20 w-13 h-13 px-3 py-2 bg-black text-white flex flex-col items-center justify-center shadow-lg transition-colors duration-300 group-hover:bg-accent">
                    <span className="font-heading font-black text-lg leading-none">
                      {post.day}
                    </span>
                    <span className="font-heading font-semibold text-[9px] uppercase tracking-widest leading-none mt-1">
                      {post.month}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title with underline drawing left-to-right on hover */}
                    <h3 className="font-heading font-extrabold text-[17px] sm:text-[18px] uppercase tracking-wide leading-snug mb-3">
                      <span className="relative inline">
                        {post.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </h3>

                    {/* Excerpt */}
                    <p className="font-body text-grey-body text-[14px] leading-relaxed line-clamp-2 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Outline "VIEW HERE ↗" button (inline variant, light theme) */}
                  <div className="pt-2">
                    <OutlineButton href="#blog" variant="inline" theme="light">
                      VIEW HERE
                    </OutlineButton>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
