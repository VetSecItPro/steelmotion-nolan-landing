import type { Metadata } from "next";
import Link from "next/link";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for your AI Chief of Staff. Setup, Managed, and Workforce tiers. No hidden fees, no per-token charges.",
};

const tiers = [
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

const comparisonRows = [
  { feature: "Dedicated server", setup: true, managed: true, workforce: true },
  { feature: "Custom CoS identity", setup: true, managed: true, workforce: true },
  { feature: "Messaging channels", setup: "1-2", managed: "Unlimited", workforce: "Unlimited" },
  { feature: "Skills installed", setup: "3-5", managed: "Unlimited", workforce: "Unlimited" },
  { feature: "Daily briefings", setup: false, managed: true, workforce: true },
  { feature: "Weekly reviews", setup: false, managed: true, workforce: true },
  { feature: "Memory optimization", setup: false, managed: true, workforce: true },
  { feature: "Custom skill development", setup: false, managed: "2-3/mo", workforce: "Unlimited" },
  { feature: "Backup frequency", setup: "24h", managed: "6h", workforce: "1h" },
  { feature: "Multi-user access", setup: false, managed: false, workforce: true },
  { feature: "Multiple agents", setup: false, managed: false, workforce: true },
  { feature: "Strategy calls", setup: false, managed: false, workforce: "Weekly" },
  { feature: "SLA", setup: false, managed: false, workforce: true },
  { feature: "LLM costs included", setup: false, managed: true, workforce: true },
  { feature: "Support", setup: "30-day", managed: "Same-day", workforce: "Priority + SLA" },
];

const faqs = [
  {
    q: "How is this different from ChatGPT or Claude?",
    a: "Those tools wait for you to type a prompt. CommandPost works autonomously in the background - running cron jobs, processing your inbox, sending briefings, tracking contacts. It accumulates institutional memory over time. After three months, it genuinely knows your business.",
  },
  {
    q: "Is my data safe?",
    a: "Your data runs on your own isolated server. It never touches our systems or any LLM provider for storage. Encrypted backups, Cloudflare Zero Trust SSO, and infrastructure hardened by a CISSP-certified cybersecurity veteran.",
  },
  {
    q: "What if I want to leave?",
    a: "Full GDPR data export. Download everything as a ZIP file - tasks, contacts, knowledge base, decisions, vault, activities. No lock-in beyond the value you have built.",
  },
  {
    q: "Can my team use it?",
    a: "The Workforce tier supports multiple users with role-based access: Admin (full access), Operator (all mutations except settings), and Viewer (read-only dashboards and reports).",
  },
  {
    q: "What LLM does it use?",
    a: "On Managed and Workforce tiers, we handle the LLM provider (currently OpenAI GPT-4o). On Setup, you bring your own API key from OpenAI, Anthropic, OpenRouter, or Ollama.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 2-3 business days from payment to a running dashboard. Provisioning is largely automated: DNS, Cloudflare Access, Docker containers, and welcome email are all handled by our pipeline.",
  },
  {
    q: "What does the 30-day pilot include?",
    a: "Full Managed tier access for 30 days. Daily briefings, memory building, custom skills. If it does not deliver value, we will work with you to make it right or refund the setup fee.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. You interact with your CoS through a dashboard (like using any web app) and messaging channels (Telegram, Slack). We handle all infrastructure, updates, and maintenance.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent mx-auto">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-muted/40">-</span>;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent tracking-wider uppercase">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-6">
            Transparent pricing
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            No hidden fees. No per-token charges. One price that covers
            infrastructure, LLM costs, and management. Pick the tier that fits
            how you work.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 card-lift ${
                  tier.highlight
                    ? "border border-accent/40 bg-surface-1 glow-accent relative"
                    : "border border-border bg-surface-1"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-8 px-3 py-0.5 bg-accent text-white text-xs font-medium rounded-full">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="text-3xl font-bold mb-1">
                  {tier.price}
                  <span className="text-sm text-muted font-normal ml-1">
                    {tier.period}
                  </span>
                </div>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  {tier.description}
                </p>

                <Link
                  href="mailto:anouar@steelmotionllc.ai"
                  className={`block text-center py-3 rounded-lg text-sm font-medium transition-colors duration-200 mb-8 ${
                    tier.highlight
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "border border-border text-foreground hover:border-border-hover"
                  }`}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-accent shrink-0 mt-0.5"
                      >
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 lg:py-28 bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-10 text-center">
            Full comparison
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-sm font-medium text-muted w-1/3">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-center text-foreground">
                    Setup
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-center text-accent">
                    Managed
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-center text-foreground">
                    Workforce
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-sm text-muted">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CellValue value={row.setup} />
                    </td>
                    <td className="py-3 px-4 text-center bg-accent/3">
                      <CellValue value={row.managed} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CellValue value={row.workforce} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              "CISSP certified",
              "Veteran-owned",
              "GDPR compliant",
              "SOC 2 in progress",
              "AES-256 encryption",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        headline="Start your 30-day pilot"
        subtext="Full Managed tier access. If it does not deliver value within 30 days, we will make it right."
        buttonText="Request early access"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
