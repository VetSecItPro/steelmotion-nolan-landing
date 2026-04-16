"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import AnimatedCounter from "../AnimatedCounter";

const stats = [
  { value: 606, suffix: "+", label: "Tests passing" },
  { value: 170, suffix: "+", label: "API routes" },
  { value: 168, suffix: "", label: "Components" },
  { value: 21, suffix: "", label: "Dashboard pages" },
  { value: 66, suffix: "", label: "Library modules" },
  { value: 7, suffix: "", label: "Security layers" },
];

export default function StatsSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-3">Steel Motion LLC</p>
            <h2
              className="font-heading text-foreground mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Veteran-owned.{" "}
              <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
                Built with discipline.
              </span>
            </h2>
            <p style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              marginBottom: "1.5rem",
            }}>
              A veteran-owned technology company based in Dallas, Texas.
              Building managed AI infrastructure for businesses that take
              security seriously.
            </p>
            <div className="space-y-2.5" style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
              {["Dallas, TX", "Veteran-owned", "Enterprise-grade security", "anouar@steelmotionllc.ai"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "9999px",
                      background: "var(--color-accent)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="eyebrow mb-3">By the numbers</p>
            <h2
              className="font-heading text-foreground mb-6"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              What&apos;s inside.
            </h2>
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="stat-number text-gold"
                    style={{
                      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
