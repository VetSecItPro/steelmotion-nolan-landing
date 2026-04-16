"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export default function SecurityHero() {
  return (
    <LampContainer
      className="!min-h-[520px] lg:!min-h-[560px] rounded-none"
      contentClassName="!-translate-y-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto"
        style={{ textAlign: "center" }}
      >
        <h1
          className="font-heading text-foreground mb-5"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Your data doesn&apos;t leave{" "}
          <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
            your environment.
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.75vw, 1.15rem)",
            lineHeight: 1.7,
            color: "var(--color-muted)",
            maxWidth: "36rem",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Every CommandPost instance runs in your own isolated container. Seven
          layers of defense, each independently hardened. Built to the same
          standards as financial institutions.
        </p>
      </motion.div>
    </LampContainer>
  );
}
