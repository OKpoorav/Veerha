export type Employee = {
  id: string;
  role: string;
  name: string;
  color: string;
  ring: string;
  bio: string;
  status: "live" | "soon";
  eta?: string;
  metrics: { label: string; value: string; delta?: string }[];
  activity: { t: string; text: string }[];
};

export const EMPLOYEES: Employee[] = [
  {
    id: "sales",
    role: "AI Sales Executive",
    name: "Veerha",
    color: "#A78BFA",
    ring: "from-violet-500 to-indigo-600",
    status: "live",
    bio: "Captures leads across every channel, qualifies intent, books meetings. Never sleeps.",
    metrics: [
      { label: "Conversations today", value: "1,284", delta: "+12%" },
      { label: "Meetings booked", value: "47", delta: "+8" },
      { label: "Median reply", value: "3.2s" },
    ],
    activity: [
      { t: "now", text: "Qualified lead — 2BHK, Dubai Marina, budget 1.5M AED" },
      { t: "2s", text: "Booked meeting: Tomorrow 4:00 PM with Sales Expert" },
      { t: "18s", text: "New WhatsApp lead — Ibdul Marina" },
      { t: "34s", text: "Followed up on cold lead from Instagram" },
    ],
  },
  {
    id: "support",
    role: "AI Support Executive",
    name: "Aria",
    color: "#C4B5FD",
    ring: "from-fuchsia-400 to-violet-600",
    status: "soon",
    eta: "Q4 2026",
    bio: "Resolves tickets in seconds, escalates only what matters, learns from every case.",
    metrics: [
      { label: "Tickets resolved", value: "892", delta: "+18%" },
      { label: "CSAT", value: "97%" },
      { label: "Avg. time", value: "22s" },
    ],
    activity: [
      { t: "now", text: "Refund processed for order #A-9182" },
      { t: "6s", text: "Escalated: pricing dispute → routed to human" },
      { t: "24s", text: "Answered: SDK v2 upgrade path" },
    ],
  },
  {
    id: "marketing",
    role: "AI Marketing Executive",
    name: "Kai",
    color: "#8B5CF6",
    ring: "from-indigo-500 to-violet-500",
    status: "soon",
    eta: "Q1 2027",
    bio: "Launches campaigns, adapts creative in real-time, learns which messages actually convert.",
    metrics: [
      { label: "Campaigns live", value: "14" },
      { label: "CAC", value: "-31%" },
      { label: "Creatives shipped", value: "126" },
    ],
    activity: [
      { t: "now", text: "Paused ad set — CPL up 24% in last hour" },
      { t: "1m", text: "Launched retargeting cohort for Betterhomes leads" },
      { t: "3m", text: "New variant: 'Instant home tours' shipped" },
    ],
  },
  {
    id: "ops",
    role: "AI Operations Executive",
    name: "Nero",
    color: "#7C3AED",
    ring: "from-violet-600 to-purple-700",
    status: "soon",
    eta: "Q1 2027",
    bio: "Runs the plumbing. Updates orders, syncs calendars, keeps every system in step.",
    metrics: [
      { label: "Orders updated", value: "3,412" },
      { label: "Sync latency", value: "0.8s" },
      { label: "Failures", value: "0" },
    ],
    activity: [
      { t: "now", text: "Onboarding prep sent to new client — Emaar Group" },
      { t: "12s", text: "Synced calendars: 47 events" },
      { t: "40s", text: "ERP write — inventory delta reconciled" },
    ],
  },
  {
    id: "finance",
    role: "AI Finance Executive",
    name: "Ori",
    color: "#F0ABFC",
    ring: "from-pink-400 to-violet-600",
    status: "soon",
    eta: "Q2 2027",
    bio: "Invoices, dunning, reconciliation. Chases what's owed before you notice it's late.",
    metrics: [
      { label: "Invoices sent", value: "218" },
      { label: "DSO", value: "-9d" },
      { label: "Reconciled", value: "$1.2M" },
    ],
    activity: [
      { t: "now", text: "Invoice #INV-2028 dispatched" },
      { t: "8s", text: "Reminder sent — 3rd notice, INV-2011" },
      { t: "1m", text: "Ledger reconciled — Stripe, Razorpay" },
    ],
  },
  {
    id: "recruit",
    role: "AI Recruitment Executive",
    name: "Ivy",
    color: "#DDD6FE",
    ring: "from-violet-300 to-indigo-500",
    status: "soon",
    eta: "Q2 2027",
    bio: "Sources, screens, and schedules. Only sends you people worth a real interview.",
    metrics: [
      { label: "Candidates screened", value: "620" },
      { label: "Interviews booked", value: "38" },
      { label: "Response rate", value: "64%" },
    ],
    activity: [
      { t: "now", text: "Shortlisted 4 candidates — Senior React role" },
      { t: "20s", text: "Interview booked — Priya S., Wed 3:00 PM" },
      { t: "50s", text: "Sent take-home task — Backend Eng" },
    ],
  },
  {
    id: "voice",
    role: "AI Voice Executive",
    name: "Echo",
    color: "#A5B4FC",
    ring: "from-indigo-400 to-blue-500",
    status: "soon",
    eta: "Q4 2026",
    bio: "Calls warm leads, follows up on quotes, confirms bookings — in the customer's language.",
    metrics: [
      { label: "Calls placed", value: "412" },
      { label: "Contact rate", value: "71%" },
      { label: "Avg. call", value: "1m 48s" },
    ],
    activity: [
      { t: "now", text: "Confirmed site visit — Dubai Hills, Sat 11 AM" },
      { t: "22s", text: "Handoff to human — objection on price" },
      { t: "1m", text: "Voicemail left — will retry in 2h" },
    ],
  },
  {
    id: "knowledge",
    role: "AI Knowledge Executive",
    name: "Sage",
    color: "#F5D0FE",
    ring: "from-fuchsia-300 to-purple-500",
    status: "soon",
    eta: "Q1 2027",
    bio: "Reads your docs, calls, chats — turns them into memory every other AI can use.",
    metrics: [
      { label: "Docs indexed", value: "12,842" },
      { label: "Recall @1", value: "94%" },
      { label: "Fresh embeddings", value: "24m" },
    ],
    activity: [
      { t: "now", text: "Learned: new pricing sheet for Q3" },
      { t: "14s", text: "Deprecated old FAQ entry — 'onboarding v1'" },
      { t: "3m", text: "Extracted 27 facts from support transcripts" },
    ],
  },
];
