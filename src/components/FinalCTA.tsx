"use client";

import { motion } from "motion/react";
import BrainCore from "./BrainCore";
import NeuralField from "./NeuralField";

export default function FinalCTA() {
  return (
    <section id="hire" className="relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 mask-fade-radial opacity-90">
        <NeuralField nodeCount={70} intensity={1.4} />
      </div>
      <div className="absolute inset-0 radial-fade opacity-80" />

      <div className="container-x relative">
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <BrainCore size={380} />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="h-editorial text-[clamp(3rem,8vw,7rem)]"
          >
            Build your
            <br />
            <span className="text-gradient">AI workforce.</span>
            <br />
            <span className="h-serif text-white/70">Not your software stack.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#start"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-base font-medium hover:bg-white/90 transition"
            >
              Start building
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#demo"
              id="demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-8 py-4 text-base text-white/90 hover:bg-white/10 transition"
            >
              Book a demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 text-white/40 text-sm"
          >
            5 minutes to set up. Live workforce by tomorrow.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
