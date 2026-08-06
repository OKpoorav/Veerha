"use client";

import { motion } from "motion/react";
import OrbitingEmployees from "./OrbitingEmployees";
import NeuralField from "./NeuralField";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-24 overflow-hidden">
      {/* Ambient field */}
      <div className="absolute inset-0 mask-fade-radial opacity-70">
        <NeuralField nodeCount={54} />
      </div>
      <div className="absolute inset-0 grid-bg opacity-40 mask-fade-radial" />
      <div className="absolute inset-0 radial-fade opacity-60" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 lg:gap-16 items-center">
          {/* Left: editorial headline */}
          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI Sales Executive · Available now
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-editorial text-[clamp(3rem,6.5vw,5.75rem)]"
            >
              Hire your first
              <br />
              <span className="text-gradient">AI employee.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 space-y-2 text-white/50 text-lg font-light"
            >
              <p>Not another chatbot.</p>
              <p>Not another CRM.</p>
              <p className="text-white/80">
                A real AI Sales Executive. Working 24 hours a day.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-white/60 text-[15px] leading-relaxed max-w-md"
            >
              Veerha starts with Sales — captures leads across every channel,
              qualifies them instantly, books meetings, and follows up. Support,
              Marketing, Operations and the rest of the workforce are on the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#hire"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Hire your first AI employee
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#watch"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3.5 text-sm text-white/90 hover:bg-white/10 transition"
              >
                <PlayGlyph />
                Watch your AI workforce
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex items-center gap-6 text-[12px] text-white/40"
            >
              <div className="flex items-center gap-2">
                <Check /> No credit card
              </div>
              <div className="flex items-center gap-2">
                <Check /> Setup in 5 minutes
              </div>
              <div className="flex items-center gap-2">
                <Check /> Works 24/7
              </div>
            </motion.div>
          </div>

          {/* Right: orbiting brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <OrbitingEmployees />
          </motion.div>
        </div>

        {/* Bottom logo strip */}
        <div className="mt-24 pt-10 border-t border-white/5">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-white/30 mb-6">
            Powering the next generation of businesses
          </p>
          <div className="overflow-hidden mask-fade-y" style={{ maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)" }}>
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...LOGOS, ...LOGOS].map((n, i) => (
                <span
                  key={i}
                  className="text-white/30 text-xl font-serif italic tracking-wide"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  "DAMAC", "EMAAR", "Betterhomes", "dubizzle", "Policybazaar",
  "Nobroker", "Sobha", "Meraas", "Azizi", "Danube",
];

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
