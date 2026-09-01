"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const MODELS = [
  {
    key: "managed",
    title: "Managed by Veerha",
    body: "We operate and continuously optimise your AI sales system.",
    seed: "veerha-control-managed",
    accent: "#A78BFA",
  },
  {
    key: "co",
    title: "Co-Managed",
    body: "Your team operates the system while Veerha provides technology, support and optimisation.",
    seed: "veerha-control-comanaged",
    accent: "#C4B5FD",
  },
  {
    key: "client",
    title: "Client Managed",
    body: "Your organisation takes operational control while Veerha provides the underlying implementation and technology.",
    seed: "veerha-control-client",
    accent: "#F0ABFC",
  },
];

/**
 * Horizontal accordion.
 *
 * The open/close motion is a critically damped spring (bounce 0, response 0.4)
 * rather than a CSS transition: no gesture precedes it, so it should settle
 * without overshoot, and a spring can be re-targeted mid-flight when someone
 * sweeps across all three slices quickly. A CSS transition would restart from
 * its own timeline and visibly stutter on each re-target.
 *
 * Selection responds on pointer-down, not click, so touch feels immediate.
 * Collapses to a stacked list below md, where horizontal slicing stops working.
 */
export default function ControlAccordion() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-3 md:h-[420px] md:flex-row">
      {MODELS.map((m, i) => {
        const isActive = i === active;
        return (
          <motion.button
            key={m.key}
            type="button"
            onPointerDown={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            aria-expanded={isActive}
            animate={{ flexGrow: isActive ? 3 : 1 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", bounce: 0, duration: 0.4 }
            }
            style={{ flexBasis: 0 }}
            className={`group relative overflow-hidden rounded-[28px] border text-left transition-colors duration-500 md:min-w-0 ${
              isActive
                ? "border-white/25 bg-white/[0.05]"
                : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
            }`}
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-cover bg-center plate transition-all duration-700 ease-out ${
                isActive ? "scale-105 opacity-[0.20]" : "opacity-[0.07]"
              }`}
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${m.seed}/1200/1400)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 25%, rgba(8,6,15,0.92) 92%), radial-gradient(60% 40% at 50% 0%, ${m.accent}22, transparent 70%)`,
              }}
            />

            <div className="relative flex h-full min-h-[220px] flex-col justify-end p-7">
              <span
                className="mb-4 block h-2 w-2 rounded-full"
                style={{ background: m.accent, boxShadow: `0 0 12px ${m.accent}` }}
              />
              <h4 className="h-editorial track-md text-[clamp(1.5rem,2.6vw,2.25rem)]">
                {m.title}
              </h4>
              <p
                className={`mt-3 max-w-sm text-[14px] leading-relaxed text-white/60 transition-all duration-500 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-0 opacity-100 md:translate-y-2 md:opacity-0"
                }`}
              >
                {m.body}
              </p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
