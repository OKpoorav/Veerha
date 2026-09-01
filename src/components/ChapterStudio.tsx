"use client";

import { motion } from "motion/react";
import ControlAccordion from "./ControlAccordion";

const CONNECTORS = [
  "APIs",
  "CRM",
  "ERP",
  "Databases",
  "Websites",
  "Applications",
  "Internal Systems",
];

/**
 * Gapless 6-column bento for "What We Build".
 *   R1: A(3w,2h) + B(3w) = 6
 *   R2: A cont.  + C(3w) = 6
 *   R3: D(2) + E(2) + F(2) = 6
 *   R4: G(6w) = 6
 */
const BUILDS = [
  {
    title: "Custom AI Sales Agents",
    body: "AI agents designed around your products, services, customers and sales process.",
    span: "md:col-span-3 md:row-span-2",
    seed: "veerha-studio-agents",
    feature: true,
  },
  {
    title: "AI Voice Agents",
    body: "Custom voice agents for inbound enquiries, outbound calling, qualification, follow-ups and customer service.",
    span: "md:col-span-3",
    seed: "veerha-studio-voice",
  },
  {
    title: "AI Lead Qualification",
    body: "Define your own qualification logic, scoring, questions and routing rules.",
    span: "md:col-span-3",
    seed: "veerha-studio-qualify",
  },
  {
    title: "Custom AI Workflows",
    body: "Connect AI with your existing business processes and automate repetitive customer-facing tasks.",
    span: "md:col-span-2",
    seed: "veerha-studio-workflow",
  },
  {
    title: "CRM & System Integration",
    body: "Connect your AI agents with your CRM, website, marketing platforms, APIs, PMS, ERP and other business systems.",
    span: "md:col-span-2",
    seed: "veerha-studio-integrate",
  },
  {
    title: "Custom Knowledge & AI",
    body: "Train the system to work with your product information, policies, FAQs, documents and business knowledge.",
    span: "md:col-span-2",
    seed: "veerha-studio-knowledge",
  },
  {
    title: "Customer-Owned Infrastructure",
    body: "For organisations that require greater control, security or operational independence, implementations can be designed around the client's preferred infrastructure and technology environment.",
    span: "md:col-span-6",
    seed: "veerha-studio-infra",
    wide: true,
  },
];

const LADDER = [
  {
    title: "Use Veerha",
    body: "Ready-to-use AI sales capabilities for your business.",
  },
  {
    title: "Customise Veerha",
    body: "Adapt conversations, qualification, workflows and integrations to your requirements.",
  },
  {
    title: "Build with Veerha AI Studio",
    body: "Create a customised AI implementation designed specifically around your organisation.",
  },
];

const COMPLEX = [
  "Multiple Products",
  "Multiple Teams",
  "Multiple Lead Sources",
  "Complex Qualification Rules",
  "Custom Integrations",
  "Enterprise Workflows",
  "Custom AI Agents",
  "Specialised Customer Journeys",
];

const OWNERSHIP = [
  "Your customer journeys.",
  "Your qualification rules.",
  "Your systems.",
  "Your data.",
  "Your sales team.",
  "Your business logic.",
];

export default function ChapterStudio() {
  return (
    <section id="studio" className="relative overflow-hidden">
      {/* Opening statement */}
      <div className="chapter relative mesh-ambient grain border-t border-white/5">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center plate opacity-[0.16]"
          style={{
            backgroundImage:
              "url(https://picsum.photos/seed/veerha-studio-architecture/1920/1080)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(75% 65% at 50% 40%, rgba(8,6,15,0.45) 0%, rgba(8,6,15,0.9) 60%, #08060F 88%)",
          }}
        />

        <div className="container-wide relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="h-serif mb-6 text-2xl text-white/50">
              Veerha AI Studio
            </p>
            <h2 className="h-editorial mx-auto max-w-5xl text-[clamp(2.75rem,5.6vw,5rem)]">
              Your AI. Your business.
              <br />
              <span className="text-gradient">Your control.</span>
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-lg font-light leading-relaxed text-white/55 sm:text-xl">
              Not every business wants a ready-made AI sales platform. Some want
              AI built around{" "}
              <span className="text-white/90">
                their products, their processes, their data and their technology
                stack
              </span>
              . We design and implement a customised AI sales and customer
              engagement system &mdash; and hand your team the flexibility to
              manage, operate and scale it their way.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#studio-contact"
                className="press group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-black transition-colors duration-300 hover:bg-white/90"
              >
                Talk to our AI team
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="#studio-contact"
                className="press inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-[15px] text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.12]"
              >
                Build your AI system
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What we build */}
      <div className="chapter relative">
        <div className="container-wide relative">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <h3 className="h-editorial text-[clamp(2.5rem,5vw,4.25rem)]">
              Built using
              <br />
              <span className="text-gradient">your APIs.</span>
            </h3>
            <div className="lg:pt-4">
              <p className="text-lg font-light leading-relaxed text-white/55">
                Your existing systems already contain the information your AI
                needs. Instead of forcing your business to move everything into a
                new platform, we build AI that works with the infrastructure you
                already run.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {CONNECTORS.map((c) => (
                  <span
                    key={c}
                    className="press rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/70 transition-colors duration-300 hover:border-white/30 hover:text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-flow-dense auto-rows-[minmax(210px,auto)] grid-cols-6 gap-4">
            {BUILDS.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: (i % 3) * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative col-span-6 ${b.span} overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] transition-colors duration-500 hover:border-white/25`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center plate opacity-[0.12] transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${b.seed}/1200/900)`,
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(70% 60% at 100% 0%, rgba(139,92,246,0.22), transparent 65%)",
                  }}
                />

                <div
                  className={`relative flex h-full flex-col p-7 lg:p-8 ${
                    b.feature ? "justify-end" : "justify-between"
                  } ${b.wide ? "md:flex-row md:items-end md:justify-between md:gap-10" : ""}`}
                >
                  <h4
                    className={`h-editorial track-md ${
                      b.feature
                        ? "text-[clamp(1.75rem,3vw,2.75rem)]"
                        : "text-[clamp(1.25rem,2vw,1.75rem)]"
                    } ${b.wide ? "md:max-w-md md:shrink-0" : ""}`}
                  >
                    {b.title}
                  </h4>
                  <p
                    className={`text-[14px] leading-relaxed text-white/55 ${
                      b.feature ? "mt-5 max-w-sm text-[15px]" : "mt-5"
                    } ${b.wide ? "md:mt-0 md:max-w-xl" : ""}`}
                  >
                    {b.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Ladder — use, customise, build */}
      <div className="relative pb-32">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-3">
            {LADDER.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition-colors duration-500 hover:border-violet-400/40"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#A78BFA]" />
                </div>
                <h4 className="h-editorial track-md text-[clamp(1.4rem,2.2vw,1.9rem)]">
                  {s.title}
                </h4>
                <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Control models */}
      <div className="chapter relative mesh-ambient border-t border-white/5">
        <div className="container-wide relative">
          <div className="mb-14 max-w-3xl">
            <h3 className="h-editorial text-[clamp(2.5rem,5vw,4.25rem)]">
              You decide how much
              <br />
              <span className="text-gradient">control you want.</span>
            </h3>
          </div>

          <ControlAccordion />

          <p className="h-serif mt-14 max-w-2xl text-2xl text-white/70 sm:text-3xl">
            The AI is built around your business &mdash; not the other way
            around.
          </p>
        </div>
      </div>

      {/* Built for complex businesses */}
      <div className="relative pb-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h3 className="h-editorial text-[clamp(2.25rem,4.4vw,3.75rem)]">
                Built for complex
                <br />
                <span className="text-gradient">businesses.</span>
              </h3>
              <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-white/50">
                Veerha AI Studio is designed for organisations that need more
                than a standard SaaS product.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {COMPLEX.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: (i % 4) * 0.05, duration: 0.5 }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.05]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 transition-transform duration-500 group-hover:scale-150" />
                  <span className="text-[14px] text-white/75">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ownership close */}
      <div
        id="studio-contact"
        className="chapter relative border-t border-white/5 grain"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(139,92,246,0.14), transparent 70%)",
          }}
        />
        <div className="container-wide relative">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="h-editorial text-[clamp(2.5rem,5.4vw,4.5rem)]">
              Your AI. Your data.
              <br />
              <span className="text-gradient">Your process.</span>
            </h3>

            <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-white/55">
              We do not believe every business should have to change its sales
              process to fit an AI platform. We build the AI around the way you
              work.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {OWNERSHIP.map((o) => (
                <span
                  key={o}
                  className="h-serif text-xl text-white/45 transition-colors duration-500 hover:text-white/90 sm:text-2xl"
                >
                  {o}
                </span>
              ))}
            </div>

            <p className="h-serif mt-14 text-3xl text-gradient sm:text-4xl">
              That is Veerha AI Studio.
            </p>

            <a
              href="#hire"
              className="press group mt-12 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4.5 text-base font-medium text-black transition-colors duration-300 hover:bg-white/90"
            >
              Talk to us about your AI implementation
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
