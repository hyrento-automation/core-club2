"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header";
import HeroSlider from "@/components/sections/HeroSlider";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import VipPassSection from "@/components/sections/VipPassSection";
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
    <div className="relative min-h-screen bg-black text-white font-body overflow-x-hidden selection:bg-accent selection:text-white">
      {/* 1. HEADER / MENU */}
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

      {/* MAIN SECTIONS IN STRICT EDITORIAL ORDER */}
      <main id="main-content">
        {/* 2. HERO SLIDER (100vh) */}
        <HeroSlider />

        {/* 3. INTRO + PORTFOLIO GRID (Watermark "CLUB") */}
        <PortfolioGrid />

        {/* VIP PASS 27 & LA JOURNÉE SPORTIVE & BIEN-ÊTRE */}
        <VipPassSection />

        {/* 4. TEAM OF EXPERT COACHES (Dark #141414, Watermark "STAFF") */}
        <TeamSection />

        {/* 5. REVIEWS FROM YOU (White) */}
        <ReviewsSection />

        {/* 6. VIDEO BANNER */}
        <VideoBanner />

        {/* 7. WHAT IS BMI (White, Watermark "BODY") */}
        <BmiSection />

        {/* 8. THREE SERVICE BANNERS */}
        <ServiceBanners />

        {/* 9. WORKING HOURS AND CLASSES (Dark, Watermark "TIMETABLE") */}
        <TimetableSection />

        {/* 10. LATEST BLOG POSTS (White, Watermark "BLOG") */}
        <BlogSection />

        {/* 11. FOUR PROGRAM TILES */}
        <ProgramTiles />

        {/* 12. MAP (Cologny, Lake Geneva) */}
        <MapSection />

        {/* 13. FEEL FREE TO ASK ANYTHING (White, Watermark "VISIT") */}
        <ContactSection />
      </main>

      {/* 14. FOOTER (Black) */}
      <Footer />
    </div>
  );
}
