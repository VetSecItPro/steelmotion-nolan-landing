"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const faqs = [
  {
    q: "How is this different from ChatGPT or Claude?",
    a: "Those tools wait for you to type a prompt. CommandPost works autonomously in the background - running cron jobs, processing your inbox, sending briefings, tracking contacts. It accumulates institutional memory over time. After three months, it genuinely knows your business.",
  },
  {
    q: "Is my data safe?",
    a: "Your data runs on your own isolated server. It never touches our systems or any LLM provider for storage. Encrypted backups, Cloudflare Zero Trust SSO, and seven layers of enterprise-grade security.",
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

export default function PricingFaq() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-14 text-center" style={{ textAlign: "center" }}>
            Frequently asked questions
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={faq.q} delay={i * 80}>
              <CardSpotlight
                className="rounded-xl border-border/50 bg-surface-1/60 p-7 h-full"
                radius={300}
                color="#1a1218"
              >
                <h3 className="relative z-10 font-display font-semibold text-white mb-3">
                  {faq.q}
                </h3>
                <p className="relative z-10 text-sm text-neutral-400 leading-relaxed">
                  {faq.a}
                </p>
              </CardSpotlight>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
