"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface OutlineButtonProps {
  children: React.ReactNode;
  variant?: "inline" | "box" | "solid";
  theme?: "dark" | "light"; // dark = for dark backgrounds (white text/borders), light = for light backgrounds (black text/borders)
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function OutlineButton({
  children,
  variant = "inline",
  theme = "dark",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
}: OutlineButtonProps) {
  const isInline = variant === "inline";
  const isSolid = variant === "solid";

  // Base colors depending on theme
  // Dark theme: default text white, border white. Hover bg white, text black.
  // Light theme: default text black, border black. Hover bg black, text white.
  // Solid variant: black bg, white text, offset black border. Hover white bg, black text.
  let textStyles = "";
  let borderStyles = "";
  let offsetBorderStyles = "";
  let hoverBgStyles = "";

  if (isSolid) {
    textStyles = "text-white group-hover:text-black";
    borderStyles = "border border-black bg-black";
    offsetBorderStyles = "border border-black";
    hoverBgStyles = "group-hover:bg-white";
  } else if (theme === "dark") {
    textStyles = "text-white group-hover:text-black";
    borderStyles = isInline
      ? "border-l border-b border-white bg-transparent"
      : "border border-white bg-transparent";
    offsetBorderStyles = isInline
      ? "border-l border-b border-white/80"
      : "border border-white/80";
    hoverBgStyles = "group-hover:bg-white";
  } else {
    // Light theme
    textStyles = "text-black group-hover:text-white";
    borderStyles = isInline
      ? "border-l border-b border-black bg-transparent"
      : "border border-black bg-transparent";
    offsetBorderStyles = isInline
      ? "border-l border-b border-black/80"
      : "border border-black/80";
    hoverBgStyles = "group-hover:bg-black";
  }

  const content = (
    <div
      className={`group relative inline-flex items-center justify-center select-none cursor-pointer transition-all duration-300 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
    >
      {/* 2nd Offset Border Line (shifted 3px right and down) */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none transform translate-x-[3px] translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-editorial ${offsetBorderStyles}`}
      />

      {/* Main Box & Background Fill */}
      <span
        className={`relative z-10 flex items-center gap-2 px-4 py-2.5 text-[10px] font-heading font-bold uppercase tracking-wider transition-all duration-350 ease-editorial ${borderStyles} ${hoverBgStyles} ${textStyles}`}
      >
        <span>{children}</span>
        {loading ? (
          <span className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-300 ease-editorial group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            strokeWidth={2.2}
          />
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-block focus:outline-none"
    >
      {content}
    </button>
  );
}
