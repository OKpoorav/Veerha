"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  size?: number;
  pulse?: boolean;
  className?: string;
};

/**
 * BrainCore — the Veerha logo rendered as a living center.
 * Concentric rings pulse, a soft halo breathes, and orbiting glyphs
 * sit outside via the parent. Nothing about this is a "logo lockup" —
 * it's the visual identity of the product.
 */
export default function BrainCore({ size = 220, pulse = true, className = "" }: Props) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer breathing halo */}
      {pulse && (
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0) 60%)",
            filter: "blur(20px)",
          }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Rotating ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spin-slow"
        aria-hidden
      >
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="94"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="0.75"
          strokeDasharray="2 5"
        />
      </svg>

      {/* Inner reverse ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spin-reverse"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="rgba(167,139,250,0.35)"
          strokeWidth="0.5"
          strokeDasharray="1 8"
        />
      </svg>

      {/* Logo core */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding: size * 0.15 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={pulse ? { scale: [1, 1.04, 1] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/veerha-logo.png"
            alt="Veerha"
            fill
            sizes={`${size}px`}
            priority
            className="object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
