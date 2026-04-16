"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export default function FeaturesHero() {
  return (
    <LampContainer
      className="!min-h-[520px] lg:!min-h-[560px] rounded-none"
      // Reduce default -translate-y-80 to -translate-y-24 so content sits
      // well below the 65px navbar without being pushed off-screen by the
      // LampContainer's vertical centering.
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
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            textAlign: "center",
          }}
        >
          The end of{" "}
          <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
            context switching.
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
          Stop letting critical decisions and follow-ups fall through the cracks.
          Your AI Chief of Staff operates seamlessly in the background to capture
          context, structure your workflow, and give you the ultimate competitive advantage:{" "}
          <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>
            absolute clarity.
          </span>
        </p>
      </motion.div>
    </LampContainer>
  );
}
