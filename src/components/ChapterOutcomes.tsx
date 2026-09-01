"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  arrow: "up" | "down";
  quote: string;
  decimals?: number;
  seed: string;
};

const METRICS: Metric[] = [
  { label: "Response time", value: 3, suffix: "s", arrow: "down", quote: "From hours to seconds.", seed: "veerha-speed" },
  { label: "Meetings booked", value: 4.2, suffix: "x", arrow: "up", quote: "Every lead. Every hour.", decimals: 1, seed: "veerha-calendar" },
  { label: "Conversion rate", value: 40, suffix: "%", arrow: "up", quote: "Because nothing goes cold.", seed: "veerha-growth" },
  { label: "Manual work", value: 72, suffix: "%", arrow: "down", quote: "Your team, on the interesting parts.", seed: "veerha-team" },
  { label: "Revenue influenced", value: 1.6, prefix: "$", suffix: "M", arrow: "up", quote: "Per team. Per month.", decimals: 1, seed: "veerha-revenue" },
];

/**
 * Card stack: every metric card sticks at a slightly lower offset than the
 * one before it, so the deck physically builds up as the reader scrolls.
 * GSAP scrubs scale and brightness on the buried cards.
 */
export default function ChapterOutcomes() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", section.current);

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9,
          filter: "brightness(0.45)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 92%",
            end: "top 42%",
            scrub: true,
          },
        });
      });
    },
    { scope: section }
  );

  return (
    <section
      id="outcomes"
      ref={section}
      className="chapter relative overflow-hidden mesh-ambient"
    >
      <div className="container-wide relative">
        <div className="mb-20 max-w-3xl">
          <h2 className="h-editorial text-[clamp(2.75rem,5.4vw,4.75rem)]">
            <span className="h-serif text-white/70">The numbers</span>
            <br />
            <span className="text-gradient">that matter.</span>
          </h2>
        </div>

        <div className="relative">
          {METRICS.map((m, i) => (
            <article
              key={m.label}
              data-card
              className="group sticky mb-6 overflow-hidden rounded-[32px] border border-white/[0.09] bg-[#0C0918]/90 backdrop-blur-xl"
              style={{ top: `${112 + i * 26}px`, willChange: "transform" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center plate opacity-[0.14] transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${m.seed}/1600/900)`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, rgba(12,9,24,0.96) 40%, rgba(12,9,24,0.55) 100%)",
                }}
              />

              <div className="relative grid items-end gap-8 p-8 md:grid-cols-2 md:p-12">
                <div>
                  <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/40">
                    {m.label}
                  </div>
                  <div className="flex items-baseline gap-4">
                    <ArrowIcon dir={m.arrow} />
                    <div className="h-editorial track-xl tabular text-[clamp(3.5rem,10vw,8rem)]">
                      {m.prefix && (
                        <span className="align-top text-[0.55em] text-white/60">
                          {m.prefix}
                        </span>
                      )}
                      <Counter value={m.value} decimals={m.decimals} />
                      {m.suffix && (
                        <span className="ml-1 align-top text-[0.4em] text-white/50">
                          {m.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="h-serif max-w-md text-2xl text-white/80 sm:text-3xl md:ml-auto md:text-right">
                  &ldquo;{m.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
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
    <span ref={ref} className="tabular">
      {decimals ? display.toFixed(decimals) : Math.round(display).toLocaleString()}
    </span>
  );
}

function ArrowIcon({ dir }: { dir: "up" | "down" }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-lg ${
        dir === "up"
          ? "bg-emerald-400/10 text-emerald-400"
          : "bg-orange-400/10 text-orange-400"
      }`}
      aria-hidden
    >
      {dir === "up" ? "↑" : "↓"}
    </span>
  );
}
