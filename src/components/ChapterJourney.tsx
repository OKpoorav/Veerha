"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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
    detail: "Instagram, 11:42 PM. “Looking for 2BHK in Dubai Marina.”",
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
    detail:
      "Budget, timeline, preferred area, ready-to-move — captured in one flow.",
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
    detail:
      "Every message, every preference — indexed into the shared memory.",
    color: "#DDD6FE",
  },
  {
    actor: "Support · Coming soon",
    title: "Support picks up without a single repeat question.",
    detail:
      "When your Support AI joins, she inherits Veerha's memory. Zero handoff loss.",
    color: "#C4B5FD",
    future: true,
  },
  {
    actor: "Marketing · Coming soon",
    title: "Marketing tunes the funnel from what closes.",
    detail:
      "Veerha's conversion data flows back into ad targeting and creative.",
    color: "#F0ABFC",
    future: true,
  },
];

export default function ChapterJourney() {
  const section = useRef<HTMLElement>(null);
  const pinned = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Pin the title column while the journey scrolls past it.
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: section.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinned.current,
          pinSpacing: false,
        });
      });

      // Each step grows into place, then dims as it leaves.
      const items = gsap.utils.toArray<HTMLElement>("[data-step]", track.current);
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(el, {
          opacity: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 12%",
            end: "top top",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section
      id="journey"
      ref={section}
      className="chapter relative overflow-hidden mesh-ambient"
    >
      <div className="container-wide relative">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Pinned column */}
          <div>
            <div
              ref={pinned}
              className="lg:flex lg:h-screen lg:flex-col lg:justify-center"
            >
              <h2 className="h-editorial text-[clamp(2.75rem,5.4vw,4.75rem)]">
                One lead.
                <br />
                <span className="text-gradient">One journey.</span>
                <br />
                <span className="h-serif text-white/70">Zero drop-off.</span>
              </h2>
              <p className="mt-8 max-w-sm text-lg font-light leading-relaxed text-white/50">
                Watch a midnight ad click become a booked meeting &mdash; with
                Veerha today, and the full workforce tomorrow.
              </p>
              <div className="mt-10 hidden h-px w-24 bg-gradient-to-r from-violet-400 to-transparent lg:block" />
            </div>
          </div>

          {/* Scrolling track */}
          <ol ref={track} className="relative space-y-6">
            <div
              aria-hidden
              className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent"
            />
            {STEPS.map((s, i) => (
              <li
                key={i}
                data-step
                className={`group relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 pl-16 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.04] ${
                  s.future ? "opacity-90" : ""
                }`}
              >
                <span
                  className="absolute left-[7px] top-9 block h-4 w-4 rounded-full ring-4 ring-[#08060F] transition-transform duration-500 group-hover:scale-125"
                  style={{
                    background: s.color,
                    boxShadow: s.future ? "none" : `0 0 20px ${s.color}`,
                    opacity: s.future ? 0.45 : 1,
                  }}
                />
                <div
                  className="mb-2 text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: s.color }}
                >
                  {s.actor}
                </div>
                <h3 className="h-editorial track-md text-[clamp(1.35rem,2.3vw,2rem)]">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/50">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
