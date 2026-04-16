"use client";

import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

const tiers: Tier[] = [
  {
    name: "Setup",
    price: "$3,000",
    period: "one-time",
    description:
      "We deploy your AI Chief of Staff on a dedicated, hardened server. You own the infrastructure.",
    features: [
      "Dedicated hardened VPS",
      "Custom CoS personality and business context",
      "1-2 messaging channels (Telegram, WhatsApp, Slack)",
      "3-5 skills installed and configured",
      "SearXNG private search engine",
      "Cloudflare Zero Trust SSO",
      "2 hours onboarding and training",
      "30-day support included",
      "Daily automated backups",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Managed",
    price: "$2,000",
    period: "/month",
    description:
      "Ongoing management with daily briefings, memory optimization, custom skill development, and all LLM costs covered.",
    features: [
      "Everything in Setup",
      "Morning, evening, and weekly briefings",
      "Second brain maintenance and optimization",
      "Memory and knowledge base curation",
      "Custom skill development (2-3 per month)",
      "6-hour backup frequency",
      "Priority same-day support",
      "All LLM and infrastructure costs included",
      "Monitoring and uptime management",
    ],
    cta: "Request early access",
    highlight: true,
  },
  {
    name: "Workforce",
    price: "$5,000",
    period: "/month",
    description:
      "Multiple AI agents with team access, role-based permissions, custom integrations, and an SLA.",
    features: [
      "Everything in Managed",
      "Multi-user access (Admin, Operator, Viewer roles)",
      "Multiple specialized agents",
      "Custom integrations and webhooks",
      "Hourly backup frequency",
      "Weekly strategy calls",
      "SLA with uptime guarantee",
      "Dedicated account manager",
      "Custom reporting and analytics",
    ],
    cta: "Contact us",
    highlight: false,
  },
];

const tierColors = ["bg-[#121218]", "", "bg-[#0a0a1a]"];

function TierContent({ tier }: { tier: Tier }) {
  const textColor = tier.highlight ? "text-foreground" : "text-white";
  const mutedColor = tier.highlight ? "text-muted" : "text-white/60";

  return (
    <>
      <h3 className={`font-display text-xl font-bold mb-1 ${textColor}`}>{tier.name}</h3>
      <div className="text-3xl font-bold mb-1">
        <span className={textColor}>{tier.price}</span>
        <span className={`text-sm font-normal ml-1 ${mutedColor}`}>
          {tier.period}
        </span>
      </div>
      <p className={`text-sm mb-8 leading-relaxed ${mutedColor}`}>
        {tier.description}
      </p>
      <Link
        href="mailto:anouar@steelmotionllc.ai"
        className={`block text-center py-3 rounded-lg text-sm font-medium transition-colors duration-200 mb-8 ${
          tier.highlight
            ? "bg-accent text-white hover:bg-accent-hover"
            : "border border-white/20 text-white/80 hover:border-white/40"
        }`}
      >
        {tier.cta}
      </Link>
      <ul className="space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className={`flex items-start gap-2.5 text-sm ${mutedColor}`}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0 mt-0.5">
              <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function PricingCards() {
  return (
    <section className="pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={tier.name} delay={i * 150}>
              {tier.highlight ? (
                <MovingBorderButton
                  as="div"
                  borderRadius="1rem"
                  containerClassName="w-full h-full"
                  borderClassName="bg-[radial-gradient(#FF3B30_40%,transparent_60%)]"
                  className="bg-surface-1 p-6 sm:p-8 border-accent/20 text-left block w-full"
                  duration={4000}
                >
                  <div className="relative">
                    <span className="absolute -top-2 left-0 px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full tracking-wide">
                      Recommended
                    </span>
                    <div className="pt-6">
                      <TierContent tier={tier} />
                    </div>
                  </div>
                </MovingBorderButton>
              ) : (
                <WobbleCard containerClassName={`${tierColors[i]} min-h-[400px]`}>
                  <TierContent tier={tier} />
                </WobbleCard>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
