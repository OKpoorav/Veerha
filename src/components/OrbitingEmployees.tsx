"use client";

import { motion } from "motion/react";
import BrainCore from "./BrainCore";

type Orbit = {
  label: string;
  role: string;
  color: string;
  angle: number;
  ring: number;
  status: "live" | "soon";
};

const ORBITS: Orbit[] = [
  // Inner ring — Sales live, others coming next
  { label: "Sales", role: "Executive", color: "#A78BFA", angle: -90, ring: 0, status: "live" },
  { label: "Support", role: "Executive", color: "#C4B5FD", angle: 30, ring: 0, status: "soon" },
  { label: "Marketing", role: "Executive", color: "#F0ABFC", angle: 150, ring: 0, status: "soon" },
  // Outer ring — three roadmap agents, evenly spread
  { label: "Operations", role: "Executive", color: "#7C3AED", angle: -30, ring: 1, status: "soon" },
  { label: "Finance", role: "Executive", color: "#F5D0FE", angle: 90, ring: 1, status: "soon" },
  { label: "Recruitment", role: "Executive", color: "#DDD6FE", angle: -150, ring: 1, status: "soon" },
];

export default function OrbitingEmployees() {
  const size = 900;
  const cx = size / 2;
  const cy = size / 2;
  const innerR = 220;
  const outerR = 360;

  return (
    <div
      className="relative mx-auto"
      style={{ width: "100%", maxWidth: size, aspectRatio: "1 / 1" }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradSoon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="none"
          stroke="rgba(167,139,250,0.13)"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          fill="none"
          stroke="rgba(167,139,250,0.1)"
          strokeWidth="0.5"
          strokeDasharray="2 8"
        />

        {ORBITS.map((o, i) => {
          const r = o.ring === 0 ? innerR : outerR;
          const rad = (o.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * r;
          const y = cy + Math.sin(rad) * r;
          const startR = 90;
          const endShrink = 46;
          const sx = cx + Math.cos(rad) * startR;
          const sy = cy + Math.sin(rad) * startR;
          const ex = cx + Math.cos(rad) * (r - endShrink);
          const ey = cy + Math.sin(rad) * (r - endShrink);
          const isLive = o.status === "live";

          return (
            <g key={o.label}>
              <line
                x1={sx}
                y1={sy}
                x2={ex}
                y2={ey}
                stroke={`url(#${isLive ? "lineGrad" : "lineGradSoon"})`}
                strokeWidth={isLive ? 1.4 : 0.8}
              />
              {isLive && (
                <>
                  <motion.circle
                    r="3.5"
                    fill={o.color}
                    initial={{ cx: sx, cy: sy, opacity: 0 }}
                    animate={{
                      cx: [sx, ex, sx],
                      cy: [sy, ey, sy],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ filter: `drop-shadow(0 0 8px ${o.color})` }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill={o.color}
                    opacity={0.35}
                    animate={{ scale: [1, 2.4, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <BrainCore size={260} />
      </div>

      {ORBITS.map((o) => {
        const r = o.ring === 0 ? innerR : outerR;
        const rad = (o.angle * Math.PI) / 180;
        const xPct = 50 + (Math.cos(rad) * r) / (size / 100);
        const yPct = 50 + (Math.sin(rad) * r) / (size / 100);
        const isLive = o.status === "live";

        return (
          <motion.div
            key={o.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + (o.ring === 0 ? 0.1 : 0.3), duration: 0.6 }}
          >
            <div
              className={`rounded-2xl border backdrop-blur-md px-3.5 py-2 whitespace-nowrap ${
                isLive
                  ? "bg-[#0D0A1A]/85 shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]"
                  : "bg-[#0D0A1A]/60"
              }`}
              style={{
                borderColor: isLive ? `${o.color}80` : "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="block w-1.5 h-1.5 rounded-full"
                  style={{
                    background: isLive ? o.color : "rgba(255,255,255,0.3)",
                    boxShadow: isLive ? `0 0 8px ${o.color}` : "none",
                  }}
                />
                <span className={`text-[11px] font-medium ${isLive ? "text-white" : "text-white/45"}`}>
                  {o.label}
                </span>
                {!isLive && (
                  <span className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 rounded-full px-1.5 py-0.5 ml-1">
                    Soon
                  </span>
                )}
                {isLive && (
                  <span className="text-[9px] uppercase tracking-widest text-emerald-300 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-1.5 py-0.5 ml-1">
                    Live
                  </span>
                )}
              </div>
              <div className={`text-[9px] uppercase tracking-widest mt-0.5 ${isLive ? "text-white/60" : "text-white/25"}`}>
                AI {o.role}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
