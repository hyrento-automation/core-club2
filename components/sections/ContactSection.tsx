"use client";

import React, { useState } from "react";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { siteConfig } from "@/data/siteData";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid e-mail address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Free Demo Session");
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
      phone,
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccess(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setErrors({ form: "Transmission failed. Please contact us directly by phone or email." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white text-black py-[110px] px-6 lg:px-16 overflow-hidden">
      {/* Watermark "VISIT" */}
      <SectionWatermark text="VISIT" theme="light" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, intro paragraph, address & hours */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-grey-body block mb-2">
                06 / FIRST VISIT &middot; FREE DEMO SESSION
              </span>
              <HeadingReveal
                as="h2"
                className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black mb-4"
              >
                STEP INTO ONYX.
              </HeadingReveal>

              <ScrollReveal delay={0.1}>
                <p className="font-body text-grey-body text-[14px] leading-relaxed mb-8">
                  Leave your details. We will get back to you immediately to arrange your complimentary 1-hour discovery session overlooking Lake Geneva.
                </p>
              </ScrollReveal>
            </div>

            {/* Address & Contact Columns */}
            <div className="space-y-4 pt-6 border-t border-grey-border text-xs font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <b className="font-heading font-bold text-black uppercase block">
                    COLOGNY SANCTUARY
                  </b>
                  <span className="text-grey-body">{siteConfig.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <b className="font-heading font-bold text-black uppercase block">
                    DIRECT LINE
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
                    CONCIERGE DESK
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
                    HOURS
                  </b>
                  <span className="text-grey-body">
                    Mon-Fri 06:30-21:30 &middot; Sat 07:30-19:00 &middot; Sun 08:00-17:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form with clean 1px light-grey borders and floating labels */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    YOUR FULL NAME *
                  </label>
                  {errors.fullName && (
                    <span className="text-[11px] text-accent mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

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
                    E-MAIL ADDRESS *
                  </label>
                  {errors.email && (
                    <span className="text-[11px] text-accent mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-white border border-grey-border focus:border-black px-4 pt-5 pb-2 text-sm font-body text-black outline-none transition-colors duration-250 rounded-none"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-2 text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-black"
                  >
                    PHONE NUMBER *
                  </label>
                  {errors.phone && (
                    <span className="text-[11px] text-accent mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

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
                    INTEREST / SUBJECT
                  </label>
                </div>
              </div>

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
                  MESSAGE / ATHLETIC GOALS *
                </label>
                {errors.message && (
                  <span className="text-[11px] text-accent mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {success && (
                <div className="flex items-center gap-2 p-3 bg-neutral-100 border border-black text-black text-xs font-body">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Thank you. We will contact you very soon to schedule your complimentary discovery session.</span>
                </div>
              )}
              {errors.form && (
                <div className="flex items-center gap-2 p-3 bg-accent/10 border border-accent text-accent text-xs font-body">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

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
