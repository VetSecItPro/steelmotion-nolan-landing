"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden min-h-[450px] flex items-center">
      <BackgroundBeams className="opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>About</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6"
            style={{ textAlign: "center" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            I spent 20 years protecting systems. Now I build ones that protect your time.
          </motion.h1>
          <motion.p
            className="text-lg text-muted leading-relaxed max-w-2xl mx-auto"
            style={{ textAlign: "center" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            CommandPost is a product of Steel Motion LLC, founded in Dallas, TX
            by someone who saw a gap between what AI promises and what it
            actually delivers for business owners.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
