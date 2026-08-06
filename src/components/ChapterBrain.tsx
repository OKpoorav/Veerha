"use client";

import { motion } from "motion/react";
import BrainCore from "./BrainCore";
import NeuralField from "./NeuralField";

const CHANNELS: { label: string; angle: number; side: "L" | "R" }[] = [
  { label: "WhatsApp", angle: -150, side: "L" },
  { label: "Instagram", angle: -125, side: "L" },
  { label: "Email", angle: -100, side: "L" },
  { label: "Phone", angle: -75, side: "L" },
  { label: "Website", angle: 165, side: "L" },
  { label: "Facebook", angle: 140, side: "L" },
  { label: "CRM", angle: -30, side: "R" },
  { label: "Calendar", angle: -5, side: "R" },
  { label: "Payments", angle: 20, side: "R" },
  { label: "ERP", angle: 45, side: "R" },
  { label: "Documents", angle: 70, side: "R" },
  { label: "Voice notes", angle: 95, side: "R" },
];

export default function ChapterBrain() {
  const size = 900;
  const cx = size / 2;
  const cy = size / 2;
  const r = 380;

  return (
    <section id="brain" className="section relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 mask-fade-y">
        <NeuralField nodeCount={38} />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20 mask-fade-y" />

      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
            Chapter One — The Brain
          </p>
          <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
            One brain.
            <br />
            <span className="text-gradient">Every conversation.</span>
            <br />
            <span className="h-serif text-white/70">Every customer.</span>
          </h2>
          <p className="mt-8 text-white/50 text-base sm:text-lg max-w-lg mx-auto">
            Every channel, every system, every voice — flowing into a single
            intelligence that learns your business as it runs it.
          </p>
        </div>

        <div className="relative mx-auto" style={{ width: "100%", maxWidth: 1000, aspectRatio: "1 / 1" }}>
          <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full" aria-hidden>
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                <stop offset="60%" stopColor="#C4B5FD" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="brainAura" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(139,92,246,0.35)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0)" />
              </radialGradient>
            </defs>

            <circle cx={cx} cy={cy} r={r + 40} fill="url(#brainAura)" />

            {CHANNELS.map((c, i) => {
              const rad = (c.angle * Math.PI) / 180;
              const sx = cx + Math.cos(rad) * r;
              const sy = cy + Math.sin(rad) * r;
              const ex = cx + Math.cos(rad) * 130;
              const ey = cy + Math.sin(rad) * 130;
              return (
                <g key={c.label}>
                  <line
                    x1={sx}
                    y1={sy}
                    x2={ex}
                    y2={ey}
                    stroke="url(#flowGrad)"
                    strokeWidth="1"
                  />
                  <motion.circle
                    r="3"
                    fill="#DDD6FE"
                    style={{ filter: "drop-shadow(0 0 4px #A78BFA)" }}
                    animate={{ cx: [sx, ex], cy: [sy, ey], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2.8 + (i % 4) * 0.3,
                      repeat: Infinity,
                      ease: "easeIn",
                      delay: i * 0.28,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <BrainCore size={280} />
          </div>

          {CHANNELS.map((c, i) => {
            const rad = (c.angle * Math.PI) / 180;
            const xPct = 50 + (Math.cos(rad) * r) / (size / 100);
            const yPct = 50 + (Math.sin(rad) * r) / (size / 100);
            return (
              <motion.div
                key={c.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${xPct}%`, top: `${yPct}%` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
              >
                <div className="rounded-xl border border-white/10 bg-[#0D0A1A]/80 backdrop-blur px-3 py-1.5 text-[12px] whitespace-nowrap">
                  {c.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { k: "Signals ingested", v: "1.2B / week" },
            { k: "Facts remembered", v: "∞" },
            { k: "Systems connected", v: "40+" },
            { k: "Latency", v: "sub-second" },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-5">
              <div className="text-white/50 text-[11px] uppercase tracking-[0.18em]">{m.k}</div>
              <div className="mt-2 text-2xl font-medium text-gradient">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
