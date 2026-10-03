"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, User, MapPin, ChevronDown } from "lucide-react";
import {
  timetableCategories,
  timetableDays,
  timetableEvents,
  TimetableEvent,
} from "@/data/siteData";
import SectionWatermark from "@/components/ui/SectionWatermark";
import OutlineButton from "@/components/ui/OutlineButton";
import { HeadingReveal } from "@/components/ui/ScrollReveal";

const displayHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default function TimetableSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL EVENTS");
  const [selectedEvent, setSelectedEvent] = useState<TimetableEvent | null>(null);
  const [expandedMobileDay, setExpandedMobileDay] = useState<string>("MON");

  const filteredEvents = timetableEvents.filter((ev) => {
    if (activeCategory === "ALL EVENTS") return true;
    return ev.category === activeCategory;
  });

  return (
    <section
      id="timetable"
      className="relative w-full bg-dark text-white py-[110px] px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/5"
    >
      {/* Watermark "TIMETABLE" */}
      <SectionWatermark text="TIMETABLE" theme="dark" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Intro */}
        <div className="text-center mb-12">
          <HeadingReveal
            as="h2"
            className="font-heading font-extrabold text-[clamp(26px,3.8vw,44px)] tracking-tight leading-[1.08] uppercase text-white mb-6"
          >
            WORKING HOURS AND CLASSES
          </HeadingReveal>

          {/* Filter Tabs: ALL EVENTS, CARDIO, CROSSFIT, GYM, POWERLIFTING
              with sliding bracket-style left + bottom 1px border indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-6">
            {timetableCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-2 text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider transition-colors duration-200 select-none focus:outline-none"
                >
                  <span className={isActive ? "text-white" : "text-grey-body hover:text-white"}>
                    {cat}
                  </span>

                  {/* Bracket-style left + bottom 1px border indicator that slides between tabs */}
                  {isActive && (
                    <motion.span
                      layoutId="timetableTabBracket"
                      className="absolute inset-0 border-l border-b border-white pointer-events-none"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Weekly Grid (hidden on mobile/tablet) */}
        <div className="hidden lg:block w-full bg-black border border-[#262626] overflow-x-auto shadow-2xl">
          <div className="min-w-[960px]">
            {/* Header Row: Days of Week */}
            <div className="grid grid-cols-8 border-b border-[#262626] bg-[#0c0c0c]">
              <div className="p-3 text-[10px] font-heading tracking-widest text-grey-body uppercase border-r border-[#262626] flex items-center justify-center">
                TIME
              </div>
              {timetableDays.map((day) => (
                <div
                  key={day}
                  className="p-3 text-center text-[11px] font-heading font-bold tracking-widest text-white uppercase border-r last:border-r-0 border-[#262626]"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slot Rows with Hourly Grid */}
            <div className="relative">
              {displayHours.map((hour) => (
                <div
                  key={hour}
                  className="grid grid-cols-8 h-[68px] border-b last:border-b-0 border-[#262626]"
                >
                  {/* Hour label */}
                  <div className="border-r border-[#262626] text-[10px] font-mono text-grey-body flex items-center justify-center bg-[#0e0e0e]">
                    {hour.toString().padStart(2, "0")}:00
                  </div>
                  {/* 7 empty Day column cells that serve as the visual grid */}
                  {timetableDays.map((day) => (
                    <div
                      key={day}
                      className="border-r last:border-r-0 border-[#262626] bg-black/60 relative"
                    />
                  ))}
                </div>
              ))}

              {/* Absolute Positioned Event Blocks with Span across Hourly Rows */}
              <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
                {/* Column 0 is time labels spacer */}
                <div />

                {/* Columns 1-7 for Mon-Sun */}
                {timetableDays.map((day, colIdx) => {
                  const dayEvents = filteredEvents.filter((ev) => ev.day === day);

                  return (
                    <div key={day} className="relative h-full pointer-events-auto">
                      <AnimatePresence>
                        {dayEvents.map((ev) => {
                          const startHourOffset = ev.startHour - 7;
                          if (startHourOffset < 0 || startHourOffset >= displayHours.length)
                            return null;

                          const topPx = startHourOffset * 68;
                          const heightPx = ev.duration * 68 - 2;

                          return (
                            <motion.div
                              key={ev.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.35 }}
                              onClick={() => setSelectedEvent(ev)}
                              style={{
                                top: `${topPx + 1}px`,
                                height: `${heightPx}px`,
                              }}
                              className="group absolute left-1 right-1 bg-[#141414] hover:bg-[#1a1a1a] border-l-2 border-accent hover:border-white p-2.5 flex flex-col justify-between cursor-pointer transition-colors duration-200 z-10 overflow-hidden shadow-lg"
                            >
                              <div>
                                <span className="block text-[9px] font-heading font-semibold text-accent uppercase tracking-wider mb-0.5">
                                  {ev.category}
                                </span>
                                <h4 className="font-heading font-extrabold text-[11px] uppercase tracking-wide text-white group-hover:text-accent transition-colors leading-tight line-clamp-2">
                                  {ev.title}
                                </h4>
                              </div>

                              <div className="flex items-center justify-between mt-1 text-[9px] text-grey-body">
                                <span>{ev.trainer}</span>
                                <span className="font-mono">
                                  {ev.startHour}:00 - {ev.startHour + ev.duration}:00
                                </span>
                              </div>

                              {/* Hover Tooltip showing detail */}
                              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black border border-white/20 px-3 py-1.5 rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                <span className="text-[10px] font-heading text-white">
                                  {ev.room} &bull; {ev.level}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Day-by-day Accordion List */}
        <div className="lg:hidden space-y-3">
          {timetableDays.map((day) => {
            const dayEvents = filteredEvents.filter((ev) => ev.day === day);
            const isExpanded = expandedMobileDay === day;

            return (
              <div key={day} className="bg-black border border-[#262626] overflow-hidden">
                <button
                  onClick={() => setExpandedMobileDay(isExpanded ? "" : day)}
                  className="w-full flex items-center justify-between p-4 bg-[#141414] text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-sm uppercase tracking-widest text-white">
                      {day}
                    </span>
                    <span className="text-[10px] font-mono text-grey-body">
                      ({dayEvents.length} {dayEvents.length === 1 ? "class" : "classes"})
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-grey-body transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="divide-y divide-[#262626]"
                    >
                      {dayEvents.length === 0 ? (
                        <div className="p-4 text-xs font-body text-grey-body italic">
                          No classes scheduled for this category.
                        </div>
                      ) : (
                        dayEvents.map((ev) => (
                          <div
                            key={ev.id}
                            onClick={() => setSelectedEvent(ev)}
                            className="p-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer flex items-center justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[9px] font-heading font-bold text-accent uppercase tracking-wider">
                                  {ev.category}
                                </span>
                                <span className="text-[10px] font-mono text-grey-body">
                                  {ev.startHour}:00 - {ev.startHour + ev.duration}:00
                                </span>
                              </div>
                              <h4 className="font-heading font-bold text-sm uppercase text-white">
                                {ev.title}
                              </h4>
                              <p className="text-[11px] font-body text-grey-body mt-0.5">
                                Trainer: {ev.trainer} &bull; {ev.room}
                              </p>
                            </div>
                            <span className="text-xs font-heading font-bold text-accent">
                              DETAILS &rsaquo;
                            </span>
                          </div>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-black border border-white/20 p-8 shadow-2xl z-50 text-white"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 text-white/70 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-widest text-accent mb-2">
                {selectedEvent.category} &bull; {selectedEvent.level}
              </span>

              <h3 className="font-heading font-black text-2xl uppercase tracking-wider mb-4">
                {selectedEvent.title}
              </h3>

              <p className="font-body text-[14px] text-grey-body leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10 mb-6 text-xs font-body text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>
                    {selectedEvent.day}, {selectedEvent.startHour}:00 -{" "}
                    {selectedEvent.startHour + selectedEvent.duration}:00
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-accent" />
                  <span>Coach: {selectedEvent.trainer}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{selectedEvent.room}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <OutlineButton
                  onClick={() => {
                    setSelectedEvent(null);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="box"
                  theme="dark"
                >
                  RESERVE SPOT
                </OutlineButton>
                <span className="text-[11px] font-body text-grey-body">
                  Limited to 16 athletes
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
