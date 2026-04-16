"use client";

import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/scroll-reveal";
import { Shield, Brain, LayoutDashboard, MessageSquare, Clock } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    label: "Your AI Chief of Staff",
    headline: "Briefs you at 7 AM. Before you ask.",
    body: "Overnight emails triaged. Today's calendar analyzed. Stale contacts flagged. Decisions from last week surfaced. Your morning starts with clarity, not scrambling.",
    accentColor: "rgba(217, 119, 6, 0.15)",
  },
  {
    icon: LayoutDashboard,
    label: "Mission Control Dashboard",
    headline: "Everything in one place. Finally.",
    body: "Tasks, pipeline, content calendar, contacts, goals, analytics, decision journal. Not another tab to check. The command center that connects all the tabs you already have.",
    accentColor: "rgba(239, 68, 68, 0.12)",
  },
  {
    icon: Brain,
    label: "Your Second Brain",
    headline: "Three months in, it knows your business better than you remember it.",
    body: "Every meeting, every decision, every research note. Auto-indexed, full-text searchable, resurfaced when relevant. Your knowledge compounds. Nothing slips through.",
    accentColor: "rgba(217, 119, 6, 0.12)",
  },
  {
    icon: MessageSquare,
    label: "Natural Conversation",
    headline: "Talk to it like your best employee.",
    body: "'Prep me for the 2 PM with Lindsay.' 'What did we decide about pricing last month?' 'Draft a follow-up to Tom.' Telegram, WhatsApp, or Slack. Natural language in, structured action out.",
    accentColor: "rgba(99, 102, 241, 0.10)",
  },
  {
    icon: Shield,
    label: "Your Infrastructure",
    headline: "Your data never leaves your environment.",
    body: "Isolated container. AES-256 encryption. Cloudflare Zero Trust. No public login page. Your conversations, your decisions, your client data. Never stored on our servers, never used to train models.",
    accentColor: "rgba(34, 197, 94, 0.10)",
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-10 lg:py-16" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 lg:mb-12">
          <p className="eyebrow mb-4">The ecosystem</p>
          <h2
            className="font-heading text-foreground mb-5"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Not a chatbot.{" "}
            <span className="text-gold">An operating system</span>{" "}
            for your business.
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-muted)", maxWidth: "36rem", margin: "0 auto" }}>
            Most AI tools give you a chat window. CommandPost gives you an employee, a dashboard, a second brain, and 24/7 operations.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ScrollRevealItem key={pillar.label}>
                <div
                  className="glass-card rounded-xl p-7 h-full flex flex-col relative overflow-hidden"
                  style={{ minHeight: "280px" }}
                >
                  {/* Ambient glow */}
                  <div
                    className="pointer-events-none"
                    style={{
                      position: "absolute", top: "-40px", right: "-40px",
                      width: "200px", height: "200px",
                      background: `radial-gradient(circle, ${pillar.accentColor} 0%, transparent 70%)`,
                      filter: "blur(40px)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        style={{
                          width: "36px", height: "36px", borderRadius: "10px",
                          background: "var(--color-surface-2)",
                          border: "1px solid var(--color-border)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Icon size={18} style={{ color: "var(--color-accent)" }} />
                      </div>
                      <span
                        className="font-heading"
                        style={{
                          fontSize: "0.7rem", fontWeight: 600,
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          color: "var(--color-accent)",
                        }}
                      >
                        {pillar.label}
                      </span>
                    </div>

                    <h3
                      className="font-heading text-foreground mb-3"
                      style={{
                        fontSize: "1.2rem", fontWeight: 600,
                        letterSpacing: "-0.02em", lineHeight: 1.25,
                      }}
                    >
                      {pillar.headline}
                    </h3>

                    <p style={{
                      fontSize: "0.9rem", lineHeight: 1.65,
                      color: "var(--color-muted)", flex: 1,
                    }}>
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
