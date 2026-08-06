"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EMPLOYEES, type Employee } from "@/lib/employees";

const sales = EMPLOYEES.find((e) => e.id === "sales")!;
const roadmap = EMPLOYEES.filter((e) => e.id !== "sales");

export default function ChapterEmployees() {
  return (
    <section id="employees" className="section relative">
      <div className="container-x">
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
            Chapter Two — Your first hire
          </p>
          <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
            This one is not
            <br />
            <span className="h-serif text-white/70">a feature. </span>
            <span className="text-gradient">She's an employee.</span>
          </h2>
          <p className="mt-8 text-white/50 text-lg max-w-lg">
            Meet <span className="text-white">Veerha</span> — your AI Sales Executive.
            Live today. Working now.
          </p>
        </div>

        <FeaturedEmployee e={sales} />

        <div className="mt-32 mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-4">
              Coming next
            </p>
            <h3 className="h-editorial text-[clamp(2rem,4.5vw,3.5rem)]">
              The rest of the
              <br />
              <span className="text-gradient">workforce.</span>
            </h3>
            <p className="mt-6 text-white/50 max-w-lg">
              Every new hire shares Veerha's memory. When your Support AI joins,
              she already knows your customers.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {roadmap.map((e, i) => (
              <RoadmapCard key={e.id} e={e} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedEmployee({ e }: { e: Employee }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 lg:gap-14 items-stretch rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] to-white/[0.01] p-6 lg:p-10 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(139,92,246,0.35), transparent 50%)",
        }}
      />

      <div className="relative flex flex-col justify-between min-h-[420px]">
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-300">Live · Available today</span>
          </div>
          <h3 className="h-editorial text-[clamp(2.5rem,5vw,3.75rem)]">
            AI Sales
            <br />
            <span className="h-serif text-white/70">Executive</span>
          </h3>
          <p className="mt-5 text-white/60 max-w-md leading-relaxed">
            {e.bio}
          </p>
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
                className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {e.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/5 bg-black/20 p-3">
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {m.label}
              </div>
              <div className="mt-1.5 text-xl font-medium tracking-tight">
                {m.value}
              </div>
              {m.delta && (
                <div className="text-[10px] font-medium mt-0.5" style={{ color: e.color }}>
                  {m.delta}
                </div>
              )}
            </div>
          ))}
        </div>

        <a
          href="#hire"
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
        >
          Hire Veerha
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="relative rounded-[24px] border border-white/5 bg-[#0A0716]/85 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 80% 0%, ${e.color}44, transparent 60%)`,
          }}
        />
        <div className="relative p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div
                className="relative w-11 h-11 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${e.color}22, #4C1D9522)`,
                  boxShadow: `0 0 20px -4px ${e.color}55`,
                }}
              >
                <Image
                  src="/veerha-logo.png"
                  alt="Veerha"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Veerha</div>
                <div className="text-[11px] text-white/50">AI Sales Executive</div>
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Working
            </div>
          </div>

          <div className="relative flex-1 min-h-[260px]">
            <div className="absolute inset-0 space-y-3">
              {e.activity.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i, duration: 0.5 }}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 px-3.5 py-2.5"
                >
                  <div
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: e.color, boxShadow: `0 0 6px ${e.color}` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-white/85 leading-snug">{a.text}</div>
                  </div>
                  <div className="text-[10px] text-white/30 shrink-0">{a.t}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function RoadmapCard({ e, i }: { e: Employee; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.05, duration: 0.5 }}
      className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition p-5 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-40 group-hover:opacity-60 transition"
        style={{
          background: `radial-gradient(circle, ${e.color}55, transparent 65%)`,
        }}
      />
      <div className="flex items-start justify-between gap-2 mb-4">
        <span
          className="w-2 h-2 rounded-full mt-1"
          style={{ background: e.color, boxShadow: `0 0 8px ${e.color}` }}
        />
        <span className="text-[9px] uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-2 py-0.5 whitespace-nowrap">
          {e.eta || "Soon"}
        </span>
      </div>
      <h4 className="text-lg font-medium tracking-tight">
        {e.role.replace("AI ", "").replace(" Executive", "")}
      </h4>
      <div className="text-[11px] text-white/40 uppercase tracking-widest mb-3">
        AI Executive
      </div>
      <p className="text-[13px] text-white/55 leading-relaxed line-clamp-3">
        {e.bio}
      </p>
    </motion.div>
  );
}
