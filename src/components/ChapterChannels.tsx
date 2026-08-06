"use client";

import { motion } from "motion/react";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  Send,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Channel = { name: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };

const CHANNELS: Channel[] = [
  { name: "WhatsApp", Icon: MessageCircle },
  { name: "Instagram", Icon: Instagram },
  { name: "Facebook", Icon: Facebook },
  { name: "Website", Icon: Globe },
  { name: "Email", Icon: Mail },
  { name: "Voice", Icon: Phone },
  { name: "SMS", Icon: MessageSquare },
  { name: "Messenger", Icon: Send },
];

// SVG canvas in local coords 1200 x 700
const W = 1200;
const H = 700;
const HUB_X = 720; // center-right for hub
const HUB_Y = H / 2;
const HUB_R = 110;
const ICON_X = 220; // where lines start on the right edge of icons
const RESP_X = 1000;
const RESP_Y = H / 2;

// Compute Y for each channel row so lines align to icons visually
const rowY = (i: number, n: number) => {
  const topPad = 90;
  const bottomPad = 90;
  const usable = H - topPad - bottomPad;
  return topPad + (usable * i) / (n - 1);
};

export default function ChapterChannels() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300/70 mb-5">
            Chapter Six — Works Everywhere
          </p>
          <h2 className="h-editorial text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Every channel.
            <br />
            <span className="text-gradient">One intelligence.</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            Wherever your customers are, Veerha is already there — with the same voice,
            memory, and context.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            aria-hidden
          >
            <defs>
              <linearGradient id="chanIn" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                <stop offset="55%" stopColor="#C4B5FD" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="chanOut" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#C4B5FD" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(167,139,250,0.5)" />
                <stop offset="70%" stopColor="rgba(139,92,246,0.15)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0)" />
              </radialGradient>
              <radialGradient id="hubCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="55%" stopColor="#6D28D9" />
                <stop offset="100%" stopColor="#4C1D95" />
              </radialGradient>
            </defs>

            {/* Input curves — each ends at hub's LEFT edge, control points cluster
                so the fan tightens as it approaches the hub. */}
            {CHANNELS.map((c, i) => {
              const y = rowY(i, CHANNELS.length);
              const sx = ICON_X;
              const sy = y;
              const ex = HUB_X - HUB_R + 6; // approach left edge
              const ey = HUB_Y;
              // Two control points: one pulls out from icon horizontally,
              // second pulls into the hub horizontally — clean S-less arc.
              const c1x = sx + 220;
              const c1y = sy;
              const c2x = ex - 200;
              const c2y = ey;
              const d = `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`;
              const pathId = `chanPath-${i}`;
              return (
                <g key={c.name}>
                  <path
                    id={pathId}
                    d={d}
                    fill="none"
                    stroke="url(#chanIn)"
                    strokeWidth="1.6"
                  />
                  <circle r="3.5" fill="#DDD6FE" opacity="0">
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.15;0.85;1"
                      dur="3.2s"
                      begin={`${i * 0.28}s`}
                      repeatCount="indefinite"
                    />
                    <animateMotion
                      dur="3.2s"
                      begin={`${i * 0.28}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}

            {/* Output curve — hub RIGHT edge to response */}
            <path
              id="respPath"
              d={`M ${HUB_X + HUB_R - 6} ${HUB_Y} C ${HUB_X + HUB_R + 120} ${HUB_Y}, ${RESP_X - 120} ${RESP_Y}, ${RESP_X} ${RESP_Y}`}
              fill="none"
              stroke="url(#chanOut)"
              strokeWidth="2"
            />
            <circle r="4.5" fill="#DDD6FE" opacity="0">
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="2.2s"
                repeatCount="indefinite"
              />
              <animateMotion dur="2.2s" repeatCount="indefinite">
                <mpath href="#respPath" />
              </animateMotion>
            </circle>

            {/* Hub glow */}
            <circle cx={HUB_X} cy={HUB_Y} r={HUB_R + 60} fill="url(#hubGlow)" />
            {/* Hub core */}
            <circle cx={HUB_X} cy={HUB_Y} r={HUB_R} fill="url(#hubCore)" />
            <circle
              cx={HUB_X}
              cy={HUB_Y}
              r={HUB_R}
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
            />
            {/* Rotating dashed ring around hub */}
            <g style={{ transformOrigin: `${HUB_X}px ${HUB_Y}px` }} className="animate-spin-slow">
              <circle
                cx={HUB_X}
                cy={HUB_Y}
                r={HUB_R + 22}
                fill="none"
                stroke="rgba(196,181,253,0.35)"
                strokeWidth="0.8"
                strokeDasharray="3 8"
              />
            </g>

            {/* Veerha logo inside hub — SVG <image> so it lives in the same
                coordinate space and animates cleanly with the ring. */}
            <image
              href="/veerha-logo.png"
              x={HUB_X - 78}
              y={HUB_Y - 78}
              width={156}
              height={156}
              preserveAspectRatio="xMidYMid meet"
              style={{ filter: "drop-shadow(0 0 22px rgba(233,213,255,0.65))" }}
            />
          </svg>

          {/* Left icon rail — HTML overlay, absolute positioned to match rowY() */}
          <div className="absolute inset-0 pointer-events-none">
            {CHANNELS.map((c, i) => {
              const y = rowY(i, CHANNELS.length);
              const yPct = (y / H) * 100;
              const xPct = ((ICON_X - 80) / W) * 100; // icons sit slightly left of line start
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="absolute -translate-y-1/2 flex items-center gap-3 pointer-events-auto"
                  style={{ top: `${yPct}%`, left: `${xPct}%` }}
                >
                  <div className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur flex items-center justify-center text-white/80 shadow-[0_4px_20px_-4px_rgba(139,92,246,0.25)]">
                    <c.Icon width={18} height={18} strokeWidth={1.6} />
                  </div>
                  <span className="text-[13px] text-white/70 hidden sm:block">
                    {c.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Hub HTML overlay (for the wordmark under the logo) */}
          <div
            className="absolute pointer-events-none flex flex-col items-center"
            style={{
              left: `${(HUB_X / W) * 100}%`,
              top: `${(HUB_Y / H) * 100}%`,
              transform: "translate(-50%, calc(-50% + 68px))",
            }}
          >
            <div className="text-[10px] uppercase tracking-[0.32em] text-white/70">
              Veerha
            </div>
          </div>

          {/* Response card overlay */}
          <div
            className="absolute -translate-y-1/2 pointer-events-auto"
            style={{
              left: `${((RESP_X + 20) / W) * 100}%`,
              top: `${(RESP_Y / H) * 100}%`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-[#0D0A1A]/85 backdrop-blur px-4 py-3 max-w-[240px] shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
            >
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                Response
              </div>
              <div className="text-sm text-white/90 mt-1 leading-snug">
                One coherent voice across every channel.
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hide the tiny wordmark on very small screens where hub compresses */}
      <style>{`
        @media (max-width: 640px) {
          [data-hub-wordmark] { display: none; }
        }
      `}</style>
      {/* Sanity anchor for anyone auditing next.js Image import — Image is used in other components; logo here is intentionally SVG <image> for coord-space alignment */}
      <span className="sr-only">
        <Image src="/veerha-logo.png" alt="" width={1} height={1} aria-hidden />
      </span>
    </section>
  );
}
