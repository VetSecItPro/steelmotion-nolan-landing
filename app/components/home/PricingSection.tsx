"use client";

import Link from "next/link";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/scroll-reveal";
import { Button as MovingBorderCard } from "@/components/ui/moving-border";

const tiers = [
  {
    name: "Setup",
    price: "$3,000",
    interval: "one-time",
    desc: "Your AI Chief of Staff, deployed and configured in your own isolated environment.",
    items: [
      "Dedicated hardened container",
      "Custom personality and business context",
      "2 hours guided onboarding",
      "30-day support included",
    ],
    cta: "Get Started",
    prominent: false,
  },
  {
    name: "Managed",
    price: "$2,000",
    interval: "/month",
    desc: "Everything running. Daily briefings, continuous optimization, all LLM costs included.",
    items: [
      "Everything in Setup",
      "Morning and evening briefings",
      "All LLM costs included",
      "Ongoing tuning and skill updates",
      "Priority support",
    ],
    cta: "Hire Your Chief of Staff",
    prominent: true,
  },
  {
    name: "Workforce",
    price: "$5,000",
    interval: "/month",
    desc: "Multiple AI agents, team access, custom integrations, and a dedicated account manager.",
    items: [
      "Everything in Managed",
      "Multi-user RBAC access",
      "Custom integrations and skills",
      "Weekly strategy calls + SLA",
      "Dedicated infrastructure available",
    ],
    cta: "Talk to Us",
    prominent: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 lg:mb-12">
          <p className="eyebrow mb-4">Pricing</p>
          <h2
            className="font-heading text-foreground mb-5"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            An executive assistant costs $80K.{" "}
            <br className="hidden md:block" />
            <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
              This costs less than your coffee budget.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-3 gap-5 items-stretch" staggerDelay={0.1}>
          {tiers.map((tier) => (
            <ScrollRevealItem key={tier.name}>
              {tier.prominent ? (
                <MovingBorderCard
                  as="div"
                  borderRadius="1rem"
                  containerClassName="w-full h-full"
                  borderClassName="h-20 w-20 bg-[radial-gradient(var(--color-cta)_40%,transparent_60%)] opacity-[0.8]"
                  className="flex flex-col p-7 lg:p-8 bg-[var(--color-surface-1)] border-[var(--color-border)] text-left w-full"
                  duration={4000}
                >
                  <TierContent tier={tier} />
                </MovingBorderCard>
              ) : (
                <div className="glass-card rounded-2xl p-7 lg:p-8 h-full flex flex-col">
                  <TierContent tier={tier} />
                </div>
              )}
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal delay={0.3} className="text-center mt-10">
          <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", maxWidth: "34rem", margin: "0 auto" }}>
            30 days of hands-on onboarding included.{" "}
            <span style={{ color: "var(--color-foreground)" }}>
              We don&apos;t just deploy it. We make sure it works.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TierContent({ tier }: { tier: typeof tiers[0] }) {
  return (
    <>
      <h3
        className="font-heading text-foreground mb-2"
        style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "-0.01em" }}
      >
        {tier.name}
      </h3>

      <div className="mb-1">
        <span
          className="font-heading text-foreground"
          style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          {tier.price}
        </span>
        <span style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginLeft: "0.5rem" }}>
          {tier.interval}
        </span>
      </div>

      <p style={{
        fontSize: "0.88rem", lineHeight: 1.6,
        color: "var(--color-muted)", marginBottom: "1.5rem",
      }}>
        {tier.desc}
      </p>

      <ul className="space-y-2.5 flex-1" style={{ fontSize: "0.88rem" }}>
        {tier.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              style={{ marginTop: "3px", flexShrink: 0 }}
            >
              <path
                d="M3 8.5l3 3 7-7"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ color: "var(--color-muted)" }}>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`mailto:anouar@steelmotionllc.ai?subject=CommandPost%20${tier.name}`}
        style={{
          display: "block", textAlign: "center",
          marginTop: "1.5rem", padding: "0.75rem 1.5rem",
          borderRadius: "0.625rem",
          background: tier.prominent ? "var(--color-cta)" : "transparent",
          border: tier.prominent ? "none" : "1px solid var(--color-border-hover)",
          color: tier.prominent ? "#0A0A0B" : "var(--color-foreground)",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "0.9rem",
          letterSpacing: "-0.01em",
          transition: "all 0.3s ease",
        }}
      >
        {tier.cta}
      </Link>
    </>
  );
}
