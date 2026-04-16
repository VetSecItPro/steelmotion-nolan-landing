"use client";

import Link from "next/link";
import { StaggerText, FadeIn } from "@/components/motion/stagger-text";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background" style={{ minHeight: "100dvh", display: "flex", alignItems: "center" }}>
      {/* Animated gradient mesh — pure CSS, zero JS weight */}
      <div className="hero-mesh" />
      <div className="noise-overlay" />

      {/* Floating ambient orbs */}
      <div
        className="float-orb pointer-events-none"
        style={{
          position: "absolute", top: "15%", left: "20%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(80px)",
        }}
      />
      <div
        className="float-orb-reverse pointer-events-none"
        style={{
          position: "absolute", bottom: "20%", right: "15%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "5.5rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Eyebrow */}
          <FadeIn delay={0} className="mb-8">
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: "1.5rem", height: "1px", background: "var(--color-accent)" }} />
              AI Chief of Staff
              <span style={{ width: "1.5rem", height: "1px", background: "var(--color-accent)" }} />
            </span>
          </FadeIn>

          {/* Main headline — stagger-reveal on first visit, instant on return */}
          <StaggerText
            text="Stop running your business from memory."
            tag="h1"
            className="font-heading text-center"
            wordDelay={0.05}
            wordDuration={0.5}
            sessionKey="cp-hero-v2"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              marginBottom: "2rem",
              color: "var(--color-foreground)",
            }}
          />

          {/* Subline */}
          <FadeIn delay={1.2} className="text-center" style={{ maxWidth: "38rem" }}>
            <p style={{
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              marginBottom: "3rem",
            }}>
              CommandPost is your AI-powered operations center.{" "}
              <span style={{ color: "var(--color-foreground)" }}>
                Morning briefings before coffee.
              </span>{" "}
              Meetings prepped automatically. Every decision logged. A second brain that gets{" "}
              <span className="serif-accent" style={{ color: "var(--color-accent)" }}>sharper</span>{" "}
              every week.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={1.6} className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href="mailto:anouar@steelmotionllc.ai?subject=I%20want%20to%20hire%20my%20Chief%20of%20Staff"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.25rem", borderRadius: "0.75rem",
                background: "var(--color-cta)", color: "#0A0A0B",
                fontFamily: "var(--font-heading)", fontWeight: 600,
                fontSize: "1.05rem", letterSpacing: "-0.01em",
                transition: "all 0.3s ease",
              }}
              className="glow-cta-pulse hover:scale-[1.02]"
            >
              Hire Your Chief of Staff
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#how-it-works"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "1rem 2.25rem", borderRadius: "0.75rem",
                background: "transparent",
                border: "1px solid var(--color-border-hover)",
                color: "var(--color-foreground)",
                fontFamily: "var(--font-heading)", fontWeight: 500,
                fontSize: "1.05rem", letterSpacing: "-0.01em",
                transition: "all 0.3s ease",
              }}
              className="hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              See What It Does
            </Link>
          </FadeIn>

          {/* Proof points — understated, not a trust bar */}
          <FadeIn delay={2.0}>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center",
              color: "var(--color-muted)", fontSize: "0.8rem", letterSpacing: "0.02em",
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
                Runs 24/7 autonomously
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-accent)" }} />
                Your infrastructure, your data
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-cta)" }} />
                Live in 48 hours
              </span>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "10rem",
        background: "linear-gradient(to top, var(--color-background), transparent)",
        pointerEvents: "none", zIndex: 5,
      }} />
    </section>
  );
}
