"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header";
import HeroSlider from "@/components/sections/HeroSlider";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import TeamSection from "@/components/sections/TeamSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import VideoBanner from "@/components/sections/VideoBanner";
import BmiSection from "@/components/sections/BmiSection";
import ServiceBanners from "@/components/sections/ServiceBanners";
import TimetableSection from "@/components/sections/TimetableSection";
import BlogSection from "@/components/sections/BlogSection";
import ProgramTiles from "@/components/sections/ProgramTiles";
import MapSection from "@/components/sections/MapSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingControls from "@/components/ui/FloatingControls";
import OffCanvasPanel from "@/components/ui/OffCanvasPanel";

export default function HomePage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-body overflow-x-hidden">
      {/* 1. HEADER / MENU (overlaying hero) */}
      <Header onOpenInfo={() => setIsInfoOpen(true)} />

      {/* FLOATING ACTION BUTTONS & SCROLL TO TOP */}
      <FloatingControls
        onOpenQuickInfo={() => setIsInfoOpen(true)}
      />

      {/* OFF-CANVAS INFO DRAWER */}
      <OffCanvasPanel
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      {/* MAIN SECTIONS IN STRICT ORDER */}
      <main id="main-content">
        {/* 2. HERO SLIDER (100vh) */}
        <HeroSlider />

        {/* 3. INTRO + PORTFOLIO GRID (Watermark "GYM") */}
        <PortfolioGrid />

        {/* 4. TEAM OF EXPERT COACHES (Dark #141414, Watermark "STAFF") */}
        <TeamSection />

        {/* 5. REVIEWS FROM YOU (White) */}
        <ReviewsSection />

        {/* 6. VIDEO BANNER (Top-centred play button) */}
        <VideoBanner />

        {/* 7. WHAT IS BMI (White, Watermark "BODY") */}
        <BmiSection />

        {/* 8. THREE SERVICE BANNERS (Full-width, 3 columns, zero gap) */}
        <ServiceBanners />

        {/* 9. WORKING HOURS AND CLASSES (Dark, Watermark "TIMETABLE") */}
        <TimetableSection />

        {/* 10. LATEST BLOG POSTS (White, Watermark "BLOG") */}
        <BlogSection />

        {/* 11. FOUR PROGRAM TILES (2x2, Full-width, zero gap) */}
        <ProgramTiles />

        {/* 12. MAP (Full-width grayscale map ~210px tall, kettlebell marker) */}
        <MapSection />

        {/* 13. FEEL FREE TO ASK ANYTHING (White, Watermark "ASK") */}
        <ContactSection />
      </main>

      {/* 14. FOOTER (Black) */}
      <Footer />
    </div>
  );
}
