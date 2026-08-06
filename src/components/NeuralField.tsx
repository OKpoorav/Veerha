"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

type Props = {
  className?: string;
  nodeCount?: number;
  intensity?: number;
};

/**
 * NeuralField — ambient background of soft glowing nodes with
 * connecting lines. Deterministic (seed-based) so SSR matches CSR.
 * Used behind hero and pivotal chapters as a living substrate.
 */
export default function NeuralField({
  className = "",
  nodeCount = 42,
  intensity = 1,
}: Props) {
  const nodes = useMemo(() => generateNodes(nodeCount), [nodeCount]);
  const edges = useMemo(() => generateEdges(nodes), [nodes]);

  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity={0.9 * intensity} />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.35 * intensity} />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
        </linearGradient>
      </defs>

      {edges.map((e, i) => (
        <line
          key={`e${i}`}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="url(#edgeGrad)"
          strokeWidth={0.6}
          opacity={0.55}
        />
      ))}

      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r={n.r * 3.5} fill="url(#nodeGlow)" />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#DDD6FE"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 7) * 0.35,
            }}
          />
        </g>
      ))}
    </svg>
  );
}

type Node = { x: number; y: number; r: number };

function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function generateNodes(count: number): Node[] {
  const rand = seeded(1337);
  return Array.from({ length: count }, () => ({
    x: rand() * 1000,
    y: rand() * 700,
    r: 0.9 + rand() * 1.6,
  }));
}

function generateEdges(nodes: Node[]) {
  const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const maxDist = 180;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.hypot(dx, dy);
      if (d < maxDist) {
        edges.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
  }
  return edges;
}
