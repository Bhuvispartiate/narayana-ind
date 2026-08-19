"use client";

import { useRef, useState, ReactNode } from "react";
import { m, useInView } from "framer-motion";

export interface ColorWipeSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  colors?: string[];
  delay?: number;
}

/**
 * ColorWipeSection - Canva PPT "Color Wipe" Slide Transition In-Animation
 * Wraps entire sections with multi-layer traveling color ribbons and synchronized unmasking.
 */
export function ColorWipeSection({
  children,
  id,
  className = "",
  colors = ["#0284c7", "#4f46e5", "#38bdf8"],
  delay = 0,
}: ColorWipeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08, margin: "-40px" });
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <div
      ref={ref}
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* ── Section Content unveiled by left-to-right Canva Color Wipe ── */}
      <m.div
        initial={{
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          y: 12,
        }}
        animate={
          isInView
            ? {
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                y: 0,
              }
            : {
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
                y: 12,
              }
        }
        transition={{
          duration: 0.82,
          delay: delay + 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={() => {
          if (isInView) {
            setAnimationCompleted(true);
          }
        }}
        style={{
          clipPath: animationCompleted ? "none" : undefined,
        }}
        className="w-full relative z-0"
      >
        {children}
      </m.div>

      {/* ── Canva Multi-Layer Color Wipe Full-Section Ribbons ── */}
      {!animationCompleted && (
        <>
          {/* Ribbon 1 (Lead Brand Color) */}
          <m.div
            aria-hidden="true"
            className="absolute inset-y-0 -left-[20%] w-[140%] pointer-events-none z-30 shadow-2xl"
            style={{ backgroundColor: colors[0] }}
            initial={{ x: "-120%", skewX: "-10deg" }}
            animate={isInView ? { x: ["-120%", "0%", "120%"] } : { x: "-120%" }}
            transition={{
              duration: 0.95,
              delay: delay,
              times: [0, 0.48, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Ribbon 2 (Secondary Brand Color) */}
          <m.div
            aria-hidden="true"
            className="absolute inset-y-0 -left-[20%] w-[140%] pointer-events-none z-20 shadow-2xl"
            style={{ backgroundColor: colors[1] }}
            initial={{ x: "-120%", skewX: "-10deg" }}
            animate={isInView ? { x: ["-120%", "0%", "120%"] } : { x: "-120%" }}
            transition={{
              duration: 0.95,
              delay: delay + 0.08,
              times: [0, 0.48, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Ribbon 3 (Accent Brand Color) */}
          <m.div
            aria-hidden="true"
            className="absolute inset-y-0 -left-[20%] w-[140%] pointer-events-none z-10 shadow-2xl"
            style={{ backgroundColor: colors[2] }}
            initial={{ x: "-120%", skewX: "-10deg" }}
            animate={isInView ? { x: ["-120%", "0%", "120%"] } : { x: "-120%" }}
            transition={{
              duration: 0.95,
              delay: delay + 0.16,
              times: [0, 0.48, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </>
      )}
    </div>
  );
}

export default ColorWipeSection;
