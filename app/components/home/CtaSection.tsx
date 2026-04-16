"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export default function CtaSection() {
  return (
    <section className="py-12 lg:py-18 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: "800px", height: "600px",
          background: "radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <p className="eyebrow mb-6">Get started</p>
          <h2
            className="font-heading text-foreground mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
            }}
          >
            Stop being your own{" "}
            <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
              assistant.
            </span>
          </h2>
          <p style={{
            fontSize: "1.1rem", lineHeight: 1.7,
            color: "var(--color-muted)",
            maxWidth: "32rem", margin: "0 auto 2.5rem",
          }}>
            Each deployment is custom. 30 days of hands-on onboarding included.
            We don&apos;t just deploy it. We make sure it works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="mailto:anouar@steelmotionllc.ai?subject=I%20want%20to%20hire%20my%20Chief%20of%20Staff"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.5rem", borderRadius: "0.75rem",
                background: "var(--color-cta)", color: "#0A0A0B",
                fontFamily: "var(--font-heading)", fontWeight: 600,
                fontSize: "1.1rem", letterSpacing: "-0.01em",
                transition: "all 0.3s ease",
              }}
              className="glow-cta-pulse hover:scale-[1.02]"
            >
              Hire Your Chief of Staff
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
            Or email{" "}
            <a href="mailto:anouar@steelmotionllc.ai" style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              anouar@steelmotionllc.ai
            </a>
            {" "} - we reply the same day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
