"use client";

import { motion } from "motion/react";
import BrainCore from "./BrainCore";

const CONVOS = [
  { from: "Sales", to: "Support", text: "Client prefers WhatsApp over email", color: "#A78BFA" },
  { from: "Support", to: "Ops", text: "Refund policy → 7 days for property deposits", color: "#C4B5FD" },
  { from: "Marketing", to: "Sales", text: "Instagram creatives outperform ads 3.2x", color: "#F0ABFC" },
  { from: "Calls", to: "Sales", text: "Ali always calls back after 6 PM", color: "#A78BFA" },
  { from: "Ops", to: "Finance", text: "Emaar approves invoices in 48h", color: "#7C3AED" },
  { from: "Brain", to: "All", text: "New pricing sheet — indexed and available", color: "#DDD6FE" },
];

export default function ChapterMemory() {
  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
              Chapter Five — One Memory
            </p>
            <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Your business
              <br />
              finally
              <br />
              <span className="text-gradient">remembers.</span>
            </h2>
            <div className="mt-10 space-y-5 text-white/60 text-lg font-light max-w-lg">
              <p>Sales learns something. Support instantly knows.</p>
              <p>Marketing adapts. Operations remembers.</p>
              <p className="text-white/85">
                Nobody repeats questions. Nobody loses context.
              </p>
              <p className="text-white h-serif text-2xl">Everything shares one memory.</p>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            {/* Center brain */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <BrainCore size={200} />
            </div>

            {/* Radiating conversations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[520px] max-h-[520px] mx-auto">
                {CONVOS.map((c, i) => {
                  const angle = (i / CONVOS.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 44; // percent
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={i}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.12, duration: 0.6 }}
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 4 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="rounded-2xl border border-white/10 bg-[#0D0A1A]/90 backdrop-blur-md p-3.5 w-56 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
                          />
                          <span className="text-[10px] uppercase tracking-widest text-white/50">
                            {c.from} → {c.to}
                          </span>
                        </div>
                        <p className="text-[12px] leading-snug text-white/85">"{c.text}"</p>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Absorbing lines */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  {CONVOS.map((c, i) => {
                    const angle = (i / CONVOS.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 50 + Math.cos(angle) * 42;
                    const y = 50 + Math.sin(angle) * 42;
                    return (
                      <g key={i}>
                        <line
                          x1={x}
                          y1={y}
                          x2={50}
                          y2={50}
                          stroke={c.color}
                          strokeOpacity="0.25"
                          strokeWidth="0.15"
                          strokeDasharray="1 1"
                        />
                        <motion.circle
                          r="0.6"
                          fill={c.color}
                          animate={{ cx: [x, 50], cy: [y, 50], opacity: [0, 1, 0] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeIn",
                          }}
                          style={{ filter: `drop-shadow(0 0 1px ${c.color})` }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
