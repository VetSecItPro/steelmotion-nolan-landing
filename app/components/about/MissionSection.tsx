"use client";

import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/scroll-reveal";

const pillars = [
  {
    title: "The problem",
    text: "Solo founders, consultants, and small business owners are drowning in context-switching. They forget follow-ups, miss opportunities, lose track of decisions, and spend hours on work an executive assistant could handle. But they cannot justify an $80,000 salary.",
  },
  {
    title: "The gap",
    text: "Existing AI tools are chat interfaces. Powerful in the moment, useless between conversations. They do not run background jobs, do not track your contacts, do not build institutional memory, and do not brief you proactively.",
  },
  {
    title: "The solution",
    text: "CommandPost gives every business owner an AI Chief of Staff that runs in their own environment. It works 24/7. It accumulates knowledge. It runs on infrastructure built to financial-institution standards. And it costs less than a part-time contractor.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 lg:mb-14">
          <p className="eyebrow mb-4">Mission</p>
          <blockquote
            className="font-serif text-foreground"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontStyle: "italic",
              lineHeight: 1.5,
              opacity: 0.92,
              maxWidth: "44rem",
              margin: "0 auto",
              letterSpacing: "0.01em",
              wordSpacing: "0.05em",
            }}
          >
            &ldquo;Every business owner deserves the operational leverage that
            only the largest companies can afford.&rdquo;
          </blockquote>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
          {pillars.map((pillar) => (
            <ScrollRevealItem key={pillar.title}>
              <div className="glass-card rounded-2xl p-7 h-full flex flex-col">
                <h3
                  className="font-heading text-foreground mb-3"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                }}>
                  {pillar.text}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
