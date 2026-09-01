"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import BrainCore from "./BrainCore";

const STATEMENT =
  "Sales learns something and Support instantly knows. Marketing adapts. Operations remembers. Nobody repeats questions. Nobody loses context. Everything shares one memory.";

const CONVOS = [
  { from: "Sales", to: "Support", text: "Client prefers WhatsApp over email", color: "#A78BFA" },
  { from: "Support", to: "Ops", text: "Refund policy → 7 days for property deposits", color: "#C4B5FD" },
  { from: "Marketing", to: "Sales", text: "Instagram creatives outperform ads 3.2x", color: "#F0ABFC" },
  { from: "Calls", to: "Sales", text: "Ali always calls back after 6 PM", color: "#A78BFA" },
  { from: "Ops", to: "Finance", text: "Emaar approves invoices in 48h", color: "#7C3AED" },
  { from: "Brain", to: "All", text: "New pricing sheet — indexed and available", color: "#DDD6FE" },
];

export default function ChapterMemory() {
  const section = useRef<HTMLElement>(null);
  const copy = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      // Word-by-word opacity scrub: 0.12 -> 1 as the reader moves through.
      // Dim from JS so the copy stays readable if this never runs.
      gsap.set("[data-word]", { opacity: 0.12 });
      gsap.to("[data-word]", {
        opacity: 1,
        ease: "none",
        stagger: 0.4,
        scrollTrigger: {
          trigger: copy.current,
          start: "top 78%",
          end: "bottom 55%",
          scrub: true,
        },
      });
    },
    { scope: section }
  );

  return (
    <section ref={section} className="chapter relative overflow-hidden grain">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(139,92,246,0.16) 0%, transparent 62%)",
        }}
      />

      <div className="container-wide relative">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h-editorial text-[clamp(2.75rem,5.4vw,4.75rem)]">
            Your business
            <br />
            <span className="text-gradient">finally remembers.</span>
          </h2>

          <p
            ref={copy}
            className="mx-auto mt-14 max-w-4xl text-[clamp(1.35rem,2.6vw,2.25rem)] font-light leading-[1.35] tracking-tight"
          >
            {STATEMENT.split(" ").map((w, i) => (
              <span key={i} data-word className="scrub-word">
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Everything flowing back into one core */}
        <div className="relative mx-auto mt-24 aspect-square w-full max-w-[720px]">
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <BrainCore size={200} />
          </div>

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
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

          {CONVOS.map((c, i) => {
            const angle = (i / CONVOS.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 44;
            const y = 50 + Math.sin(angle) * 44;
            return (
              <motion.div
                key={i}
                className="absolute w-56 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-2xl border border-white/10 bg-[#0D0A1A]/90 p-3.5 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)] backdrop-blur-md transition-colors duration-500 hover:border-white/25"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
                    />
                    <span className="text-[10px] uppercase tracking-widest text-white/50">
                      {c.from} &rarr; {c.to}
                    </span>
                  </div>
                  <p className="text-[12px] leading-snug text-white/85">
                    &ldquo;{c.text}&rdquo;
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
