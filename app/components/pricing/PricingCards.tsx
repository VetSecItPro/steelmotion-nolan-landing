"use client";

import Link from "next/link";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/scroll-reveal";
import { Button as MovingBorderCard } from "@/components/ui/moving-border";

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  prominent: boolean;
}

const tiers: Tier[] = [
  {
    name: "Setup",
    price: "$3,000",
    period: "one-time",
    description:
      "Your AI Chief of Staff, deployed and configured in your own isolated environment.",
    features: [
      "Dedicated hardened container",
      "Custom personality and business context",
      "1 to 2 messaging channels (Telegram, WhatsApp, Slack)",
      "3 to 5 skills installed and configured",
      "SearXNG private search engine",
      "Cloudflare Zero Trust SSO",
      "2 hours guided onboarding",
      "30-day support included",
      "Daily automated backups",
    ],
    cta: "Get Started",
    prominent: false,
  },
  {
    name: "Managed",
    price: "$2,000",
    period: "/month",
    description:
      "Everything running. Daily briefings, continuous optimization, all LLM costs included.",
    features: [
      "Everything in Setup",
      "Morning, evening, and weekly briefings",
      "Second brain maintenance and curation",
      "Custom skill development (2 to 3 per month)",
      "Memory and knowledge base tuning",
      "All LLM costs included (no per-token charges)",
      "Infrastructure monitoring",
      "Monthly strategy review",
      "Priority support",
    ],
    cta: "Hire Your Chief of Staff",
    prominent: true,
  },
  {
    name: "Workforce",
    price: "$5,000",
    period: "/month",
    description:
      "Multiple AI agents, team access, custom integrations, and a dedicated account manager.",
    features: [
      "Everything in Managed",
      "Multi-user RBAC access",
      "2 to 4 specialized AI agents",
      "Custom integrations (CRM, ERP, internal tools)",
      "Weekly strategy calls and SLA",
      "Dedicated account manager",
      "Priority feature requests",
      "Quarterly business review",
      "Dedicated infrastructure available",
    ],
    cta: "Talk to Us",
    prominent: false,
  },
];

function TierContent({ tier }: { tier: Tier }) {
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
          {tier.period}
        </span>
      </div>
      <p
        style={{
          fontSize: "0.88rem",
          lineHeight: 1.6,
          color: "var(--color-muted)",
          marginBottom: "1.5rem",
        }}
      >
        {tier.description}
      </p>
      <ul className="space-y-2.5 flex-1" style={{ fontSize: "0.88rem" }}>
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
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
            <span style={{ color: "var(--color-muted)" }}>{feat}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`mailto:anouar@steelmotionllc.ai?subject=CommandPost%20${tier.name}`}
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
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

export default function PricingCards() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollRevealGroup
          className="grid md:grid-cols-3 gap-5 items-stretch"
          staggerDelay={0.1}
        >
          {tiers.map((tier) => (
            <ScrollRevealItem key={tier.name} className="h-full">
              <MovingBorderCard
                as="div"
                borderRadius="1rem"
                containerClassName="w-full h-full"
                borderClassName="h-20 w-20 bg-[radial-gradient(var(--color-cta)_40%,transparent_60%)] opacity-[0.8]"
                className="flex flex-col p-7 lg:p-8 bg-[var(--color-surface-1)] border-[var(--color-border)] text-left w-full h-full"
                duration={4000}
              >
                <TierContent tier={tier} />
              </MovingBorderCard>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal delay={0.3} className="text-center mt-10">
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-muted)",
              maxWidth: "34rem",
              margin: "0 auto",
            }}
          >
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
