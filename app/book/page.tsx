"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingControls from "@/components/ui/FloatingControls";
import OffCanvasPanel from "@/components/ui/OffCanvasPanel";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function BookPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [activity, setActivity] = useState("YOGA & PILATES");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      <Header onOpenInfo={() => setIsInfoOpen(true)} />
      <FloatingControls onOpenQuickInfo={() => setIsInfoOpen(true)} />
      <OffCanvasPanel isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      <main className="relative pt-28">
        {/* Page Hero Banner */}
        <section className="relative w-full min-h-[440px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 border-b border-white/10">
          <SectionWatermark text="VISIT" theme="dark" />

          {/* Background image: Villa on Lake Geneva */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/onyx/Villa_exterior_architecture_and__2K_20261003015930.jpg"
              alt="ONYX Club First Visit"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.45] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[11px] font-heading font-bold text-accent uppercase tracking-widest mb-3">
              06 / FIRST VISIT &middot; FREE DEMO SESSION
            </span>
            <HeadingReveal
              as="h1"
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight mb-6"
            >
              STEP INTO ONYX.
            </HeadingReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4">
                Leave your details. We will get back to you immediately. Enjoy a complimentary 1-hour discovery session with our coaching staff.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Booking Form & Contact Information Grid */}
        <section className="relative w-full bg-white text-black py-24 px-6 lg:px-16 overflow-hidden">
          <SectionWatermark text="COLOGNY" theme="light" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Coordinates & Club Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                    PRIVATE SANCTUARY
                  </span>
                  <HeadingReveal
                    as="h2"
                    className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-wider text-black mb-4"
                  >
                    DISCREET RECEPTION
                  </HeadingReveal>
                  <p className="font-body text-grey-body text-sm leading-relaxed">
                    Our club welcomes new members by appointment only to ensure serene privacy, uncrowded facilities, and dedicated coaching attention.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-grey-border text-xs font-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <b className="font-heading font-bold text-black uppercase block">
                        LOCATION
                      </b>
                      <span className="text-grey-body">{siteConfig.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <b className="font-heading font-bold text-black uppercase block">
                        PHONE
                      </b>
                      <a href={`tel:${siteConfig.phone}`} className="text-black font-mono">
                        {siteConfig.phone} ({siteConfig.intlPhone})
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <b className="font-heading font-bold text-black uppercase block">
                        DIRECT EMAIL
                      </b>
                      <a href={`mailto:${siteConfig.email}`} className="text-black font-semibold">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <b className="font-heading font-bold text-black uppercase block">
                        HOURS OF OPERATION
                      </b>
                      <span className="text-grey-body block">
                        Monday &ndash; Friday: 06:30 &ndash; 21:30
                      </span>
                      <span className="text-grey-body block">
                        Saturday: 07:30 &ndash; 19:00
                      </span>
                      <span className="text-grey-body block">
                        Sunday: 08:00 &ndash; 17:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rates badge */}
                <div className="p-4 bg-neutral-100 border border-grey-border text-xs font-body">
                  <b className="font-heading uppercase tracking-wider block text-black mb-1">
                    SESSION RATES
                  </b>
                  <p className="text-grey-body">
                    Group Class 1h: <b className="text-black">{siteConfig.prices.group} CHF</b> &bull; Private Training 1h: <b className="text-black">{siteConfig.prices.single} CHF</b>
                  </p>
                </div>
              </div>

              {/* Right Column: Reservation Form */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="bg-neutral-50 border border-black p-10 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                    <h3 className="font-heading font-black text-2xl uppercase tracking-wider text-black">
                      DEMO SESSION RESERVED
                    </h3>
                    <p className="font-body text-grey-body text-sm max-w-md mx-auto">
                      Thank you. We will contact you very soon to confirm your 1-hour complimentary discovery session in Cologny.
                    </p>
                    <div className="pt-4">
                      <OutlineButton onClick={() => setSubmitted(false)} variant="solid">
                        BOOK ANOTHER SESSION
                      </OutlineButton>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="First Last"
                          className="w-full bg-white border border-grey-border focus:border-black px-4 pt-6 pb-2 text-sm font-body text-black outline-none transition-colors"
                        />
                        <label className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body">
                          YOUR FULL NAME *
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full bg-white border border-grey-border focus:border-black px-4 pt-6 pb-2 text-sm font-body text-black outline-none transition-colors"
                        />
                        <label className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body">
                          EMAIL ADDRESS *
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="078 000 00 00"
                          className="w-full bg-white border border-grey-border focus:border-black px-4 pt-6 pb-2 text-sm font-body text-black outline-none transition-colors"
                        />
                        <label className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body">
                          PHONE NUMBER
                        </label>
                      </div>

                      <div className="relative group">
                        <select
                          value={activity}
                          onChange={(e) => setActivity(e.target.value)}
                          className="w-full bg-white border border-grey-border focus:border-black px-4 pt-6 pb-2 text-sm font-body text-black outline-none transition-colors cursor-pointer"
                        >
                          <option value="YOGA & PILATES">Yoga & Pilates (Lakeside)</option>
                          <option value="COMBAT SPORTS">Combat Sports & Boxing</option>
                          <option value="PRIVATE TRAINING">Personal Training 1-on-1</option>
                          <option value="RUNNING CLUB">Running Club (Lakeshore)</option>
                          <option value="BOOTCAMP">Intensive Bootcamp</option>
                          <option value="PERSONAL DEVELOPMENT">Mental Preparation 1h</option>
                        </select>
                        <label className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body">
                          DISCIPLINE OF INTEREST
                        </label>
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about your fitness background and goals..."
                        className="w-full bg-white border border-grey-border focus:border-black px-4 pt-6 pb-2 text-sm font-body text-black outline-none transition-colors resize-y"
                      />
                      <label className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body">
                        NOTES & PREFERRED TIMES
                      </label>
                    </div>

                    <div className="flex justify-end pt-2">
                      <OutlineButton
                        type="submit"
                        variant="inline"
                        theme="light"
                        loading={loading}
                      >
                        {loading ? "CONFIRMING..." : "RESERVE DEMO SESSION"}
                      </OutlineButton>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
