"use client";

import React, { useState } from "react";
import { z } from "zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { siteConfig } from "@/data/siteData";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid e-mail address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);

    const parsed = contactSchema.safeParse({
      fullName,
      email,
      subject,
      message,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    // Simulate Server Action / Resend dispatch with realistic network timing
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccess(true);
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrors({ form: "Transmission failed. Please try again or call directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white text-black py-[110px] px-6 lg:px-16 overflow-hidden">
      {/* Watermark "ASK" */}
      <SectionWatermark text="ASK" theme="light" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big bold heading, grey paragraph, two address/email columns */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <HeadingReveal
                as="h2"
                className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black mb-4"
              >
                FEEL FREE TO ASK ANYTHING
              </HeadingReveal>

              <ScrollReveal delay={0.1}>
                <p className="font-body text-grey-body text-[14px] leading-relaxed mb-10">
                  Whether you are seeking custom athlete periodization, Olympic platform reservations, or personalized mobility screening, our head coaching staff is available to discuss your athletic trajectory.
                </p>
              </ScrollReveal>
            </div>

            {/* Two Address/Email Columns in small, black text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-grey-border">
              {/* Column 1 */}
              <div className="space-y-2 text-xs font-body text-black">
                <span className="font-heading font-black text-[10px] uppercase tracking-widest text-grey-body block mb-2">
                  BROOKLYN RIG
                </span>
                <p className="font-medium leading-relaxed">
                  {siteConfig.address}
                </p>
                <p className="text-grey-body pt-1 font-mono">
                  {siteConfig.phone}
                </p>
                <p className="text-black font-semibold underline underline-offset-4 decoration-grey-border hover:decoration-black transition-all">
                  {siteConfig.email}
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-2 text-xs font-body text-black">
                <span className="font-heading font-black text-[10px] uppercase tracking-widest text-grey-body block mb-2">
                  MANHATTAN LAB
                </span>
                <p className="font-medium leading-relaxed">
                  {siteConfig.secondaryAddress}
                </p>
                <p className="text-grey-body pt-1 font-mono">
                  +1 (212) 555-0199
                </p>
                <p className="text-black font-semibold underline underline-offset-4 decoration-grey-border hover:decoration-black transition-all">
                  concierge@onyxclub-fitness.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form with clean 1px light-grey borders, black text and floating labels */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full name and Email (two columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name with floating label */}
                <div className="relative group">
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-white border border-grey-border focus:border-black px-4 pt-5 pb-2 text-sm font-body text-black outline-none transition-colors duration-250 rounded-none"
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-black"
                  >
                    YOUR FULL NAME
                  </label>
                  {errors.fullName && (
                    <span className="text-[11px] text-accent mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email Address with floating label */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-white border border-grey-border focus:border-black px-4 pt-5 pb-2 text-sm font-body text-black outline-none transition-colors duration-250 rounded-none"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-black"
                  >
                    E-MAIL ADDRESS
                  </label>
                  {errors.email && (
                    <span className="text-[11px] text-accent mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject with floating label */}
              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-white border border-grey-border focus:border-black px-4 pt-5 pb-2 text-sm font-body text-black outline-none transition-colors duration-250 rounded-none"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-black"
                >
                  SUBJECT
                </label>
                {errors.subject && (
                  <span className="text-[11px] text-accent mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message textarea with floating label */}
              <div className="relative group">
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-white border border-grey-border focus:border-black px-4 pt-6 pb-2 text-sm font-body text-black outline-none transition-colors duration-250 resize-y rounded-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-black"
                >
                  MESSAGE
                </label>
                {errors.message && (
                  <span className="text-[11px] text-accent mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Status alerts */}
              {success && (
                <div className="flex items-center gap-2 p-3 bg-neutral-100 border border-black text-black text-xs font-body">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Your dispatch has been received. Our coaching desk will respond within 4 hours.</span>
                </div>
              )}
              {errors.form && (
                <div className="flex items-center gap-2 p-3 bg-accent/10 border border-accent text-accent text-xs font-body">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              {/* Under the form, right-aligned outline "SEND US A MESSAGE ↗" button with loading/success states */}
              <div className="flex justify-end pt-2">
                <OutlineButton
                  type="submit"
                  variant="inline"
                  theme="light"
                  loading={loading}
                >
                  {loading ? "TRANSMITTING..." : "SEND US A MESSAGE"}
                </OutlineButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
