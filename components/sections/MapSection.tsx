"use client";

import React, { useState } from "react";
import { Plus, Minus, Navigation } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function MapSection() {
  const [zoomLevel, setZoomLevel] = useState(14);
  const [interactive, setInteractive] = useState(false);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 1, 18));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 1, 10));

  return (
    <section
      id="map"
      className="relative w-full h-[210px] md:h-[240px] bg-[#e6e6e6] overflow-hidden select-none border-t border-b border-grey-border"
      onClick={() => setInteractive(true)}
      onMouseLeave={() => setInteractive(false)}
    >
      {/* Light-grey Cartographic Grayscale Map Canvas / Vector Grid */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${1 + (zoomLevel - 14) * 0.15})`,
          transformOrigin: "center center",
        }}
      >
        {/* Grayscale Map Vector Layer */}
        <svg
          className="w-full h-full object-cover opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 400"
          preserveAspectRatio="none"
        >
          <rect width="100%" height="100%" fill="#ececec" />
          {/* Water body simulation */}
          <path
            d="M0 0 L450 0 C480 80 520 180 500 280 C490 330 460 380 430 400 L0 400 Z"
            fill="#dcdcdc"
          />
          {/* Major arterial roads */}
          <path
            d="M-50 120 L1650 140 M-50 260 L1650 250 M580 -20 L620 420 M980 -20 L940 420 M1280 -20 L1320 420"
            stroke="#ffffff"
            strokeWidth="10"
            fill="none"
          />
          <path
            d="M-50 120 L1650 140 M-50 260 L1650 250 M580 -20 L620 420 M980 -20 L940 420 M1280 -20 L1320 420"
            stroke="#d0d0d0"
            strokeWidth="2"
            fill="none"
          />
          {/* Street grid matrix */}
          {Array.from({ length: 28 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 20}
              x2="1600"
              y2={i * 20}
              stroke="#e2e2e2"
              strokeWidth="2"
            />
          ))}
          {Array.from({ length: 45 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="400"
              stroke="#e2e2e2"
              strokeWidth="2"
            />
          ))}
          {/* City building block parcels */}
          <rect x="660" y="80" width="120" height="40" fill="#dfdfdf" />
          <rect x="800" y="80" width="140" height="40" fill="#e4e4e4" />
          <rect x="660" y="160" width="130" height="80" fill="#e0e0e0" />
          <rect x="810" y="160" width="110" height="80" fill="#dadada" />
          <rect x="960" y="160" width="160" height="70" fill="#e3e3e3" />
        </svg>
      </div>

      {/* Custom Black Kettlebell SVG Marker centred in map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 w-12 h-12 rounded-full border-2 border-accent/40 animate-ping pointer-events-none" />

        {/* Custom Black Kettlebell SVG Icon */}
        <div className="relative group/pin cursor-pointer flex flex-col items-center">
          <svg
            className="w-10 h-10 text-black drop-shadow-xl hover:scale-110 transition-transform duration-200"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            {/* Kettlebell Handle */}
            <path
              d="M22 6 C17 6 16 11 16 18 L16 22 L24 22 L24 16 C24 13 26 12 32 12 C38 12 40 13 40 16 L40 22 L48 22 L48 18 C48 11 47 6 42 6 Z"
              fill="#000000"
            />
            {/* Kettlebell Body */}
            <path
              d="M32 16 C18 16 12 26 12 40 C12 52 20 60 32 60 C44 60 52 52 52 40 C52 26 46 16 32 16 Z"
              fill="#000000"
            />
            {/* Center ONYX Monogram engraving */}
            <text
              x="32"
              y="44"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              OX
            </text>
          </svg>

          {/* Marker Tooltip label */}
          <div className="mt-1 bg-black text-white px-3 py-1 text-[10px] font-heading font-extrabold tracking-widest uppercase shadow-2xl whitespace-nowrap">
            {siteConfig.fullName} &bull; BROOKLYN HQ
          </div>
        </div>
      </div>

      {/* Zoom Controls on the Right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-20 flex flex-col gap-1.5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="w-8 h-8 bg-white border border-black/20 text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 shadow-md"
          aria-label="Zoom in map"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="w-8 h-8 bg-white border border-black/20 text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 shadow-md"
          aria-label="Zoom out map"
        >
          <Minus className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Helper Overlay note */}
      {!interactive && (
        <div className="absolute bottom-2 left-4 z-20 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-white/80 px-2 py-0.5 rounded">
            Click map to activate zoom
          </span>
        </div>
      )}
    </section>
  );
}
