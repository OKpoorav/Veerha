"use client";

import { motion } from "motion/react";
import BrainCore from "./BrainCore";
import NeuralField from "./NeuralField";

export default function FinalCTA() {
  return (
    <section
      id="hire"
      className="relative overflow-hidden pt-40 pb-40 grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center plate opacity-[0.14]"
        style={{
          backgroundImage:
            "url(https://picsum.photos/seed/veerha-horizon/1920/1080)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 45%, rgba(8,6,15,0.4) 0%, rgba(8,6,15,0.92) 62%, #08060F 90%)",
        }}
      />
      <div className="absolute inset-0 mask-fade-radial opacity-80">
        <NeuralField nodeCount={70} intensity={1.4} />
      </div>

      <div className="container-wide relative">
        <div className="mb-16 flex justify-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrainCore size={340} />
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-editorial track-xl text-[clamp(3rem,7vw,6.5rem)]"
          >
            Build your AI workforce.
            <br />
            <span className="h-serif text-white/60">
              Not your software stack.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#start"
              className="press group inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-medium text-black transition-colors duration-300 hover:bg-white/90"
            >
              Start building
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <a
              href="#demo"
              id="demo"
              className="press inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-9 py-4 text-base text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.12]"
            >
              Book a demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 text-sm text-white/40"
          >
            5 minutes to set up. Live workforce by tomorrow.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
