"use client";

import { FadeIn } from "@/components/motion/stagger-text";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "3rem" }}>
      {/* Ambient amber glow */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute", top: "-50px", left: "50%",
          transform: "translateX(-50%)",
          width: "800px", height: "400px",
          background: "radial-gradient(ellipse, rgba(217,119,6,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <p className="eyebrow" style={{ display: "block" }}>About</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="font-heading text-foreground"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              marginTop: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            I spent 20 years protecting systems.{" "}
            <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
              Now I build ones that protect your time.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.75vw, 1.15rem)",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            CommandPost is a product of Steel Motion LLC, founded in Dallas, TX
            by someone who saw a gap between what AI promises and what it
            actually delivers for business owners.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
