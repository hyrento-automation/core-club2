"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function MapSection() {
  const [zoomLevel, setZoomLevel] = useState(14);
  const [interactive, setInteractive] = useState(false);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 1, 18));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 1, 10));

  return (
    <section
      id="map"
      className="relative w-full h-[220px] md:h-[250px] bg-[#e6e6e6] overflow-hidden select-none border-t border-b border-grey-border"
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
        <svg
          className="w-full h-full object-cover opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 400"
          preserveAspectRatio="none"
        >
          <rect width="100%" height="100%" fill="#ececec" />
          {/* Lake Geneva (Lac Léman) water simulation on the left/top */}
          <path
            d="M0 0 L900 0 C850 90 780 180 680 250 C580 320 420 380 0 400 Z"
            fill="#dcdcdc"
          />
          {/* Lakeshore shoreline road */}
          <path
            d="M0 400 C420 380 580 320 680 250 C780 180 850 90 900 0"
            stroke="#ffffff"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M-50 220 L1650 240 M-50 320 L1650 310 M750 -20 L780 420 M1050 -20 L1020 420"
            stroke="#ffffff"
            strokeWidth="8"
            fill="none"
          />
          {/* Grid lines */}
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
          {/* Cologny residential plots */}
          <rect x="760" y="100" width="140" height="50" fill="#dfdfdf" />
          <rect x="920" y="90" width="130" height="50" fill="#e4e4e4" />
          <rect x="740" y="180" width="150" height="70" fill="#e0e0e0" />
          <rect x="910" y="170" width="160" height="80" fill="#dadada" />
        </svg>
      </div>

      {/* Custom Black Kettlebell SVG Marker on Cologny / Lake Geneva Shore */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <span className="absolute -top-1 w-12 h-12 rounded-full border-2 border-accent/40 animate-ping pointer-events-none" />

        <div className="relative group/pin cursor-pointer flex flex-col items-center">
          <svg
            className="w-10 h-10 text-black drop-shadow-xl hover:scale-110 transition-transform duration-200"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <path
              d="M22 6 C17 6 16 11 16 18 L16 22 L24 22 L24 16 C24 13 26 12 32 12 C38 12 40 13 40 16 L40 22 L48 22 L48 18 C48 11 47 6 42 6 Z"
              fill="#000000"
            />
            <path
              d="M32 16 C18 16 12 26 12 40 C12 52 20 60 32 60 C44 60 52 52 52 40 C52 26 46 16 32 16 Z"
              fill="#000000"
            />
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

          <div className="mt-1 bg-black text-white px-3 py-1 text-[10px] font-heading font-extrabold tracking-widest uppercase shadow-2xl whitespace-nowrap">
            {siteConfig.fullName} &bull; COLOGNY, LAKE GENEVA
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
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

      <div className="absolute bottom-2 left-4 z-20 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 bg-white/80 px-2 py-0.5 rounded">
          {siteConfig.address} &middot; Lake Geneva Shore
        </span>
      </div>
    </section>
  );
}
