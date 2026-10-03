"use client";

import React, { useState } from "react";
import { z } from "zod";
import OutlineButton from "@/components/ui/OutlineButton";
import SectionWatermark from "@/components/ui/SectionWatermark";
import { bmiStatusTable } from "@/data/siteData";
import { HeadingReveal, ScrollReveal } from "@/components/ui/ScrollReveal";

const bmiSchema = z.object({
  height: z
    .number({ invalid_type_error: "Enter valid height" })
    .min(100, "Height must be ≥ 100cm")
    .max(250, "Height must be ≤ 250cm"),
  weight: z
    .number({ invalid_type_error: "Enter valid weight" })
    .min(30, "Weight must be ≥ 30kg")
    .max(300, "Weight must be ≤ 300kg"),
  age: z
    .number({ invalid_type_error: "Enter valid age" })
    .min(14, "Age must be ≥ 14")
    .max(100, "Age must be ≤ 100"),
  gender: z.enum(["male", "female"]),
  activityFactor: z.string().min(1, "Please select an activity level"),
});

export default function BmiSection() {
  const [height, setHeight] = useState<string>("180");
  const [weight, setWeight] = useState<string>("75");
  const [age, setAge] = useState<string>("28");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activityFactor, setActivityFactor] = useState<string>("1.55");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bmiResult, setBmiResult] = useState<number | null>(23.1);
  const [bmrResult, setBmrResult] = useState<number | null>(1745);
  const [matchingStatus, setMatchingStatus] = useState<string>("Healthy Weight");
  const [displayBmi, setDisplayBmi] = useState<number>(23.1);
  const [displayBmr, setDisplayBmr] = useState<number>(1745);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = bmiSchema.safeParse({
      height: parseFloat(height),
      weight: parseFloat(weight),
      age: parseInt(age, 10),
      gender,
      activityFactor,
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

    const hMeters = parsed.data.height / 100;
    const rawBmi = parsed.data.weight / (hMeters * hMeters);
    const roundedBmi = parseFloat(rawBmi.toFixed(1));

    // Mifflin-St Jeor Equation for BMR
    let rawBmr = 0;
    if (parsed.data.gender === "male") {
      rawBmr = 10 * parsed.data.weight + 6.25 * parsed.data.height - 5 * parsed.data.age + 5;
    } else {
      rawBmr = 10 * parsed.data.weight + 6.25 * parsed.data.height - 5 * parsed.data.age - 161;
    }
    const totalDailyBmr = Math.round(rawBmr * parseFloat(parsed.data.activityFactor));

    setBmiResult(roundedBmi);
    setBmrResult(totalDailyBmr);

    // Find matching category
    let foundStatus = "Healthy Weight";
    if (roundedBmi < 18.5) foundStatus = "Underweight";
    else if (roundedBmi <= 24.9) foundStatus = "Healthy Weight";
    else if (roundedBmi <= 29.9) foundStatus = "Overweight";
    else foundStatus = "Obese";
    setMatchingStatus(foundStatus);

    // Count up animation over 1s
    const startTime = performance.now();
    const duration = 1000;
    const initialBmi = displayBmi;
    const initialBmr = displayBmr;

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentValBmi = parseFloat((initialBmi + (roundedBmi - initialBmi) * ease).toFixed(1));
      const currentValBmr = Math.round(initialBmr + (totalDailyBmr - initialBmr) * ease);

      setDisplayBmi(currentValBmi);
      setDisplayBmr(currentValBmr);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  };

  return (
    <section id="bmi" className="relative w-full bg-white text-black py-[110px] px-6 lg:px-16 overflow-hidden">
      {/* Watermark "BODY" pinned to left edge */}
      <SectionWatermark text="BODY" theme="light" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, intro paragraph, inputs & solid CALCULATE button */}
          <div className="lg:col-span-6">
            <HeadingReveal
              as="h2"
              className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-black mb-4"
            >
              WHAT IS BMI
            </HeadingReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-grey-body text-[14px] leading-relaxed mb-8">
                Body Mass Index (BMI) is a foundational anthropometric metric used to categorize personal weight status relative to height. Combine your basal metabolic rate with training volume for precise nutritional targets.
              </p>
            </ScrollReveal>

            <form onSubmit={calculateBmi} className="space-y-4">
              {/* Row 1: Height / cm and Weight / kg */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                    HEIGHT / CM
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height / cm"
                    className="w-full bg-transparent border border-grey-border focus:border-black px-4 py-3 text-sm font-body text-black placeholder:text-grey-body/60 outline-none transition-colors duration-250"
                  />
                  {errors.height && (
                    <span className="text-[11px] text-accent mt-1 block">{errors.height}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                    WEIGHT / KG
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight / kg"
                    className="w-full bg-transparent border border-grey-border focus:border-black px-4 py-3 text-sm font-body text-black placeholder:text-grey-body/60 outline-none transition-colors duration-250"
                  />
                  {errors.weight && (
                    <span className="text-[11px] text-accent mt-1 block">{errors.weight}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Age and Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                    AGE
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    className="w-full bg-transparent border border-grey-border focus:border-black px-4 py-3 text-sm font-body text-black placeholder:text-grey-body/60 outline-none transition-colors duration-250"
                  />
                  {errors.age && (
                    <span className="text-[11px] text-accent mt-1 block">{errors.age}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                    GENDER
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as "male" | "female")}
                    className="w-full bg-white border border-grey-border focus:border-black px-4 py-3 text-sm font-body text-black outline-none transition-colors duration-250 cursor-pointer"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Full-width "Select an activity factor" select */}
              <div>
                <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                  ACTIVITY LEVEL
                </label>
                <select
                  value={activityFactor}
                  onChange={(e) => setActivityFactor(e.target.value)}
                  className="w-full bg-white border border-grey-border focus:border-black px-4 py-3 text-sm font-body text-black outline-none transition-colors duration-250 cursor-pointer"
                >
                  <option value="1.2">Sedentary (little to no exercise)</option>
                  <option value="1.375">Lightly Active (training 1-3 days/week)</option>
                  <option value="1.55">Moderately Active (training 3-5 days/week)</option>
                  <option value="1.725">Very Active (hard training 6-7 days/week)</option>
                  <option value="1.9">Extra Active (intense twice-daily training)</option>
                </select>
              </div>

              {/* Solid black "CALCULATE ↗" button with offset outline */}
              <div className="pt-4">
                <OutlineButton variant="solid" type="submit" className="min-w-[170px]">
                  CALCULATE
                </OutlineButton>
              </div>
            </form>
          </div>

          {/* Right Column: Result table with vertical divider between columns, highlighted matching status, and caption */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Calculated Counter Panel */}
              <div className="bg-neutral-50 border border-grey-border p-6 mb-8 flex items-center justify-around text-center">
                <div>
                  <span className="block text-[11px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                    YOUR BMI
                  </span>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-black">
                    {displayBmi}
                  </span>
                </div>
                <div className="w-[1px] h-12 bg-grey-border" />
                <div>
                  <span className="block text-[11px] font-heading font-bold uppercase tracking-wider text-grey-body mb-1">
                    ESTIMATED BMR
                  </span>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-black">
                    {displayBmr} <span className="text-xs font-normal text-grey-body">kcal</span>
                  </span>
                </div>
              </div>

              {/* Result Table: BMI | WEIGHT STATUS */}
              <div className="border border-grey-border overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-2 bg-black text-white px-6 py-3.5 border-b border-grey-border text-xs font-heading font-bold uppercase tracking-wider">
                  <div className="border-r border-white/20 pr-4">BMI RANGE</div>
                  <div className="pl-4">WEIGHT STATUS</div>
                </div>

                {/* Table Rows */}
                {bmiStatusTable.map((row) => {
                  const isCurrentMatch = matchingStatus === row.status;

                  return (
                    <div
                      key={row.status}
                      className={`relative grid grid-cols-2 px-6 py-4 border-b border-grey-border text-xs sm:text-sm font-body transition-colors duration-300 ${
                        isCurrentMatch ? "bg-neutral-200/80 font-bold" : "bg-white text-neutral-800"
                      }`}
                    >
                      {/* Sliding highlight bar on match */}
                      {isCurrentMatch && (
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-black animate-in fade-in slide-in-from-left duration-300" />
                      )}

                      <div className="border-r border-grey-border pr-4 font-mono">
                        {row.range}
                      </div>
                      <div className="pl-4 flex items-center justify-between">
                        <span>{row.status}</span>
                        {isCurrentMatch && (
                          <span className="text-[10px] font-heading font-bold uppercase bg-black text-white px-2 py-0.5 tracking-wider">
                            ACTIVE
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Small Caption */}
            <p className="mt-4 text-[11px] font-body text-grey-body tracking-wider italic">
              BMR Metabolic Rate / BMI Body Mass Index &middot; Calculated using standard clinical athletic algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
