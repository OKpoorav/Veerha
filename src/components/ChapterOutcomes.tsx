"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  arrow: "up" | "down";
  quote: string;
  decimals?: number;
};

const METRICS: Metric[] = [
  { label: "Response time", value: 3, suffix: "s", arrow: "down", quote: "From hours to seconds." },
  { label: "Meetings booked", value: 4.2, suffix: "x", arrow: "up", quote: "Every lead. Every hour.", decimals: 1 },
  { label: "Conversion rate", value: 40, suffix: "%", arrow: "up", quote: "Because nothing goes cold." },
  { label: "Manual work", value: 72, suffix: "%", arrow: "down", quote: "Your team, on the interesting parts." },
  { label: "Revenue influenced", value: 1.6, prefix: "$", suffix: "M", arrow: "up", quote: "Per team. Per month.", decimals: 1 },
];

export default function ChapterOutcomes() {
  return (
    <section id="outcomes" className="section relative overflow-hidden">
      <div className="container-x">
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
            Chapter Seven — Outcomes
          </p>
          <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
            <span className="h-serif text-white/70">The numbers</span>
            <br />
            <span className="text-gradient">that matter.</span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {METRICS.map((m, i) => (
            <MetricRow key={m.label} m={m} reverse={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricRow({ m, reverse, index }: { m: Metric; reverse: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-2 gap-8 items-end border-b border-white/5 pb-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-3">
          {String(index + 1).padStart(2, "0")} — {m.label}
        </div>
        <div className="flex items-baseline gap-3">
          <ArrowIcon dir={m.arrow} />
          <div className="h-editorial text-[clamp(4rem,12vw,10rem)] leading-none tracking-tighter">
            {m.prefix && <span className="text-white/60 text-[0.55em] align-top">{m.prefix}</span>}
            <Counter value={m.value} decimals={m.decimals} />
            {m.suffix && <span className="text-white/50 text-[0.4em] align-top ml-1">{m.suffix}</span>}
          </div>
        </div>
      </div>

      <div className={`${reverse ? "md:text-right" : ""}`}>
        <p className="h-serif text-2xl sm:text-3xl text-white/80 max-w-md md:ml-auto">
          "{m.quote}"
        </p>
      </div>
    </motion.div>
  );
}

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now();
            const duration = 1400;
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(value * eased);
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {decimals ? display.toFixed(decimals) : Math.round(display).toLocaleString()}
    </span>
  );
}

function ArrowIcon({ dir }: { dir: "up" | "down" }) {
  return (
    <span
      className={`inline-flex w-10 h-10 rounded-full items-center justify-center text-lg ${
        dir === "up" ? "text-emerald-400 bg-emerald-400/10" : "text-orange-400 bg-orange-400/10"
      }`}
      aria-hidden
    >
      {dir === "up" ? "↑" : "↓"}
    </span>
  );
}
