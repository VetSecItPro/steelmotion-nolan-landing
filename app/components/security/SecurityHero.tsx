"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function SecurityHero() {
  return (
    <LampContainer className="min-h-[550px] lg:min-h-[600px] bg-background rounded-none">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center max-w-3xl mx-auto pt-28 lg:pt-36"
        style={{ textAlign: "center" }}
      >
        <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>Security</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6 bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent" style={{ textAlign: "center" }}>
          Your competitors store your data on their servers. We don&apos;t.
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto" style={{ textAlign: "center" }}>
          Every CommandPost instance runs on your own isolated server. Seven
          layers of defense, each independently hardened. Built to the same
          standards as financial institutions.
        </p>
      </motion.div>
    </LampContainer>
  );
}
