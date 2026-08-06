"use client";

import { motion } from "motion/react";

type Dept = {
  name: string;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  live: string;
};

const DEPTS: Dept[] = [
  { name: "Sales", color: "#A78BFA", x: 5, y: 8, w: 40, h: 38, live: "Veerha is qualifying 12 leads" },
  { name: "Marketing", color: "#F0ABFC", x: 55, y: 8, w: 40, h: 38, live: "Kai launched 3 campaigns" },
  { name: "Support", color: "#C4B5FD", x: 5, y: 54, w: 28, h: 38, live: "Aria resolved 89 tickets today" },
  { name: "Operations", color: "#7C3AED", x: 38, y: 54, w: 28, h: 38, live: "Nero synced 47 events" },
  { name: "Finance", color: "#F5D0FE", x: 71, y: 54, w: 24, h: 20, live: "Ori sent 18 invoices" },
  { name: "HR", color: "#DDD6FE", x: 71, y: 78, w: 24, h: 14, live: "Ivy screened 22 candidates" },
];

export default function ChapterCompany() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container-x relative">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
            Chapter Three — Inside an AI Company
          </p>
          <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
            An entire company.
            <br />
            <span className="text-gradient">Running itself.</span>
          </h2>
        </div>

        <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0E0A1E] to-[#08060F] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(76,29,149,0.4), transparent 50%)",
            }}
          />
          <div className="relative aspect-[16/10] p-4 sm:p-8">
            <div className="relative w-full h-full">
              {DEPTS.map((d, i) => (
                <motion.div
                  key={d.name}
                  className="absolute rounded-2xl border border-white/10 overflow-hidden group"
                  style={{
                    left: `${d.x}%`,
                    top: `${d.y}%`,
                    width: `${d.w}%`,
                    height: `${d.h}%`,
                    background: `linear-gradient(155deg, ${d.color}18, rgba(255,255,255,0.02))`,
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(155deg, ${d.color}55, transparent)`,
                    }}
                    aria-hidden
                  />
                  <div className="relative h-full p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: d.color, boxShadow: `0 0 8px ${d.color}` }}
                        />
                        <span className="text-[10px] uppercase tracking-widest text-white/50">
                          Department
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-medium tracking-tight">
                        {d.name}
                      </h4>
                    </div>

                    <div className="flex items-end justify-between gap-2">
                      <div className="text-[11px] text-white/60 leading-snug max-w-[80%]">
                        {d.live}
                      </div>
                      <ActivityBars color={d.color} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative border-t border-white/5 px-6 py-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
            <span>127 conversations</span>
            <span>18 meetings booked</span>
            <span>$142k revenue influenced today</span>
            <span className="ml-auto text-white/40">Updated just now</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityBars({ color }: { color: string }) {
  return (
    <div className="flex items-end gap-0.5 h-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="w-0.5 rounded-full"
          style={{ background: color }}
          animate={{
            height: [
              `${20 + ((i * 13) % 60)}%`,
              `${40 + ((i * 7) % 60)}%`,
              `${20 + ((i * 13) % 60)}%`,
            ],
          }}
          transition={{
            duration: 1.8 + (i % 3) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}
