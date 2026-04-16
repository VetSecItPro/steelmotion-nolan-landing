"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

export default function FounderSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <ScrollReveal className="lg:col-span-2">
            <div
              className="glass-card rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3 / 4", maxWidth: "22rem" }}
            >
              <div
                className="h-full w-full flex items-end justify-center"
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(217,119,6,0.08) 0%, transparent 60%), linear-gradient(to bottom, var(--color-surface-2), var(--color-surface-1))",
                  paddingBottom: "2.5rem",
                }}
              >
                <div className="text-center">
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "9999px",
                      background: "var(--color-surface-3)",
                      border: "1px solid var(--color-border)",
                      margin: "0 auto 1rem",
                    }}
                  />
                  <p
                    className="font-heading text-foreground"
                    style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
                  >
                    Anouar Bencheqroun
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                    Founder, Steel Motion LLC
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <p className="eyebrow mb-4">The story</p>
            <h2
              className="font-heading text-foreground mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              Why I built this.
            </h2>
            <div
              className="space-y-5"
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
              }}
            >
              <p>
                Two decades of military service. Two decades in cybersecurity.
                The kind of background where you learn that systems either work
                reliably or people get hurt. That discipline shows in every
                layer of CommandPost.
              </p>
              <p>
                When we say your data is isolated, we mean per-customer Docker
                bridge networks with dropped capabilities and read-only
                filesystems. When we say encrypted, we mean AES-256 with
                automated offsite backups.
              </p>
              <p>
                The idea for CommandPost came from a simple observation. AI
                tools are powerful, but they are reactive. You open ChatGPT,
                type a prompt, get a response, close the tab, and forget about
                it. Nothing accumulates. Nothing runs in the background.
                Nothing knows your business tomorrow more than it does today.
              </p>
              <p>
                CommandPost is different. It is an AI employee that works while
                you sleep. It processes your inbox, tracks your commitments,
                builds a knowledge base, prepares for your meetings, and sends
                you a briefing every morning before you have had your coffee.
              </p>
              <p>
                <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>
                  After three months, your AI Chief of Staff genuinely knows
                  your business.
                </span>{" "}
                The longer it runs, the less you carry.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
