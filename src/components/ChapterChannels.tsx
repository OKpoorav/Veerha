"use client";

import { motion } from "motion/react";
import { Globe, Mail, Phone, MessageSquare } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.1v2.5H7.6V14h2.7v8h3.2z" />
    </svg>
  );
}

function MessengerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.7 1.3 5.1 3.4 6.8V22l3.1-1.7c.9.2 1.8.4 2.7.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2z" />
      <path d="M6.5 13.5l3.5-3.5 2 2 3.5-3.5-3.5 5-2-2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

type Channel = { name: string; Icon: ComponentType<IconProps> };

const CHANNELS: Channel[] = [
  { name: "WhatsApp", Icon: WhatsAppIcon },
  { name: "Instagram", Icon: InstagramIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Website", Icon: Globe },
  { name: "Email", Icon: Mail },
  { name: "Voice", Icon: Phone },
  { name: "SMS", Icon: MessageSquare },
  { name: "Messenger", Icon: MessengerIcon },
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
    <section className="chapter relative overflow-hidden mesh-ambient">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="h-editorial text-[clamp(2.75rem,5.4vw,4.75rem)]">
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
                  <div className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur flex items-center justify-center text-white/80 shadow-[0_4px_20px_-4px_rgba(139,92,246,0.25)] transition-all duration-500 hover:scale-110 hover:border-white/35">
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

    </section>
  );
}
