"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Step = {
  actor: string;
  title: string;
  detail: string;
  color: string;
  future?: boolean;
};

const STEPS: Step[] = [
  {
    actor: "The lead",
    title: "A lead clicks an ad.",
    detail: "Instagram, 11:42 PM. 'Looking for 2BHK in Dubai Marina.'",
    color: "#F0ABFC",
  },
  {
    actor: "Veerha · Sales",
    title: "Veerha responds in 3 seconds.",
    detail: "On WhatsApp, in the customer's language, at midnight.",
    color: "#A78BFA",
  },
  {
    actor: "Veerha · Sales",
    title: "Qualifies automatically.",
    detail: "Budget, timeline, preferred area, ready-to-move — captured in one flow.",
    color: "#A78BFA",
  },
  {
    actor: "Veerha · Sales",
    title: "Books the meeting.",
    detail: "Tomorrow, 4:00 PM. Calendar synced. Reminder sent on WhatsApp.",
    color: "#A78BFA",
  },
  {
    actor: "Veerha · Sales",
    title: "Follows up. And follows up.",
    detail: "Nudges every warm lead until they convert or opt out.",
    color: "#A78BFA",
  },
  {
    actor: "The brain",
    title: "Everything gets remembered.",
    detail: "Every message, every preference — indexed into the shared memory.",
    color: "#DDD6FE",
  },
  {
    actor: "Support · Coming soon",
    title: "Support picks up without asking a single repeat question.",
    detail: "When your Support AI joins, she inherits Veerha's memory. Zero handoff loss.",
    color: "#C4B5FD",
    future: true,
  },
  {
    actor: "Marketing · Coming soon",
    title: "Marketing tunes the funnel from what closes.",
    detail: "Veerha's conversion data flows back into ad targeting and creative.",
    color: "#F0ABFC",
    future: true,
  },
];

export default function ChapterJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-32 overflow-hidden">
      <div className="container-x">
        <div className="max-w-2xl mb-24 mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
            Chapter Four — A Customer Journey
          </p>
          <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
            One lead.
            <br />
            <span className="text-gradient">One journey.</span>
            <br />
            <span className="h-serif text-white/70">Zero drop-off.</span>
          </h2>
          <p className="mt-8 text-white/50 text-lg">
            Watch how a midnight ad click becomes a booked meeting — with Veerha today,
            and the full workforce tomorrow.
          </p>
        </div>

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Static rail */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/5" />
          {/* Progress rail */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 sm:left-1/2 top-0 -translate-x-1/2 w-px origin-top"
          >
            <div className="w-full h-full bg-gradient-to-b from-violet-400 via-violet-500 to-transparent shadow-[0_0_15px_2px_rgba(139,92,246,0.5)]" />
          </motion.div>

          <ol className="space-y-12 sm:space-y-20">
            {STEPS.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={i}
                  className={`relative pl-20 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center`}
                >
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-8 sm:left-1/2 -translate-x-1/2 top-2 z-10"
                    style={{ color: s.color }}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full ring-4 ring-[#08060F] ${
                        s.future ? "opacity-40" : ""
                      }`}
                      style={{
                        background: s.color,
                        boxShadow: s.future ? "none" : `0 0 20px ${s.color}`,
                      }}
                    />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className={`${isEven ? "sm:col-start-1 sm:text-right sm:pr-8" : "sm:col-start-2 sm:pl-8"} ${s.future ? "opacity-55" : ""}`}
                  >
                    <div
                      className={`text-[11px] uppercase tracking-[0.22em] mb-2`}
                      style={{ color: s.color }}
                    >
                      {s.actor}
                    </div>
                    <h4 className="h-editorial text-[clamp(1.5rem,2.6vw,2.25rem)]">
                      {s.title}
                    </h4>
                    <p className="mt-3 text-white/50 max-w-md sm:max-w-none">
                      {s.detail}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-24 text-center max-w-xl mx-auto">
          <p className="h-serif text-white/50 text-2xl">Everything connected.</p>
          <p className="h-serif text-white/50 text-2xl">Everything remembered.</p>
          <p className="text-gradient text-2xl h-serif">Automatically.</p>
        </div>
      </div>
    </section>
  );
}
