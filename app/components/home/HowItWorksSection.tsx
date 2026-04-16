"use client";

import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/scroll-reveal";
import { Button as MovingBorderCard } from "@/components/ui/moving-border";

const steps = [
  {
    number: "01",
    title: "We deploy",
    description: "Your isolated container spins up on hardened infrastructure. Custom AI personality configured. We handle everything. You never touch a terminal.",
    detail: "Live in 48 hours",
  },
  {
    number: "02",
    title: "Connect your context",
    description: "Goals, key contacts, calendar, communication style. Two hours of guided onboarding. Then CommandPost starts learning how you work.",
    detail: "Guided setup session",
  },
  {
    number: "03",
    title: "Reclaim your time",
    description: "Morning briefings arrive. Meetings get prepped. Follow-ups get tracked. The longer it runs, the more it knows. The more it knows, the less you carry.",
    detail: "Gets smarter every week",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 lg:mb-12">
          <p className="eyebrow mb-4">How it works</p>
          <h2
            className="font-heading text-foreground"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Three steps to{" "}
            <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
              operational clarity.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {steps.map((step) => (
            <ScrollRevealItem key={step.number}>
              <MovingBorderCard
                as="div"
                borderRadius="1.25rem"
                duration={4000}
                containerClassName="w-full h-full"
                borderClassName="h-20 w-20 bg-[radial-gradient(var(--color-cta)_40%,transparent_60%)] opacity-[0.8]"
                className="flex flex-col items-start text-left p-7 lg:p-8 bg-[var(--color-surface-1)] border-[var(--color-border)]"
              >
                {/* Step number */}
                <span
                  className="font-heading text-gold"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    opacity: 0.4,
                    marginBottom: "1.25rem",
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="font-heading text-foreground mb-3"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.title}
                </h3>

                <p style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  marginBottom: "1.25rem",
                  flex: 1,
                }}>
                  {step.description}
                </p>

                <span style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  {step.detail}
                </span>
              </MovingBorderCard>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
