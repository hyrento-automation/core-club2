"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  yOffset = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HeadingRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  delay?: number;
}

export function HeadingReveal({
  children,
  as = "h2",
  className = "",
  delay = 0,
}: HeadingRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = useReducedMotion();

  const Tag = as;

  if (reducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.1,
      }}
      animate={
        isInView
          ? {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
            }
          : {
              clipPath: "inset(100% 0% 0% 0%)",
              scale: 1.1,
            }
      }
      transition={{
        duration: 1.0,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
