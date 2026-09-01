"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EMPLOYEES, type Employee } from "@/lib/employees";

const sales = EMPLOYEES.find((e) => e.id === "sales")!;
const roadmap = EMPLOYEES.filter((e) => e.id !== "sales");

/**
 * Gapless 6-column bento.
 *   Row 1: Veerha (3 wide, 2 tall) + roadmap[0] (3 wide)  = 6
 *   Row 2: Veerha continues (3)    + roadmap[1] (3 wide)  = 6
 *   Row 3: roadmap[2] + [3] + [4]  (2 each)               = 6
 * grid-flow-dense guarantees no orphaned cells at any breakpoint.
 */
export default function ChapterWorkforce() {
  return (
    <section id="workforce" className="chapter relative mesh-ambient grain">
      <div className="container-wide relative">
        <div className="mb-20 max-w-4xl">
          <h2 className="h-editorial text-[clamp(2.75rem,5.4vw,4.75rem)]">
            This one is not a feature.
            <br />
            <span className="text-gradient">She is an employee.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/50">
            Veerha is live today. The rest of the workforce arrives already
            knowing your customers &mdash; every hire inherits the same memory.
          </p>
        </div>

        <div className="grid grid-flow-dense auto-rows-[minmax(230px,auto)] grid-cols-6 gap-4">
          <FeaturedCard e={sales} />
          {roadmap.map((e, i) => (
            <RoadmapCard key={e.id} e={e} i={i} />
          ))}
        </div>

        {/* Live company strip — the whole org, running itself */}
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-3xl border border-white/[0.07] bg-white/[0.02] px-7 py-5 text-[13px] text-white/50">
          <span className="flex items-center gap-2 text-white/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
          <span>127 conversations</span>
          <span>18 meetings booked</span>
          <span>$142k revenue influenced today</span>
          <span className="ml-auto text-white/30">Updated just now</span>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ e }: { e: Employee }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative col-span-6 row-span-2 overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] to-white/[0.01] p-7 transition-colors duration-500 hover:border-violet-400/40 md:col-span-3 lg:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center plate opacity-[0.10] transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage:
            "url(https://picsum.photos/seed/veerha-sales-desk/1200/1400)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(139,92,246,0.32), transparent 55%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-emerald-300">Live &middot; Available today</span>
          </div>

          <h3 className="h-editorial text-[clamp(2.25rem,4vw,3.25rem)]">
            AI Sales
            <br />
            <span className="h-serif text-white/70">Executive</span>
          </h3>

          <p className="mt-5 max-w-md leading-relaxed text-white/60">{e.bio}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "WhatsApp leads",
              "Instagram DMs",
              "Website forms",
              "Meta Ads",
              "Calls",
              "Email",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Working feed */}
          <div className="mt-7 space-y-2.5">
            {e.activity.slice(0, 3).map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.5 }}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/25 px-3.5 py-2.5"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: e.color, boxShadow: `0 0 6px ${e.color}` }}
                />
                <span className="flex-1 text-[13px] leading-snug text-white/85">
                  {a.text}
                </span>
                <span className="shrink-0 text-[10px] text-white/30">{a.t}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-3 gap-3">
            {e.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/5 bg-black/25 p-3"
              >
                <div className="text-[10px] uppercase tracking-widest text-white/40">
                  {m.label}
                </div>
                <div className="mt-1.5 text-xl font-medium tracking-tight">
                  {m.value}
                </div>
                {m.delta && (
                  <div
                    className="mt-0.5 text-[10px] font-medium"
                    style={{ color: e.color }}
                  >
                    {m.delta}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#hire"
              className="press group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-white/90"
            >
              Hire Veerha
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
              >
                &rarr;
              </span>
            </a>
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40">
              <Image
                src="/veerha-logo.png"
                alt=""
                width={20}
                height={20}
                className="object-contain opacity-70"
              />
              Working
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function RoadmapCard({ e, i }: { e: Employee; i: number }) {
  // First two roadmap hires take the 3-wide slots beside the featured card;
  // the remaining three tile the final row at 2 wide each.
  const span = i < 2 ? "md:col-span-3" : "md:col-span-2";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative col-span-6 ${span} overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.02] p-7 transition-colors duration-500 hover:border-white/20`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle, ${e.color}55, transparent 65%)`,
        }}
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="mb-6 flex items-start justify-between gap-3">
          <span
            className="mt-1.5 h-2 w-2 rounded-full"
            style={{ background: e.color, boxShadow: `0 0 10px ${e.color}` }}
          />
          <span className="whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-widest text-white/40">
            {e.eta || "Soon"}
          </span>
        </div>

        <div>
          <h4 className="h-editorial track-md text-[clamp(1.5rem,2.4vw,2rem)]">
            {e.role.replace("AI ", "").replace(" Executive", "")}
          </h4>
          <div className="mt-1 text-[11px] uppercase tracking-widest text-white/35">
            AI Executive
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-white/55">
            {e.bio}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
