"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const pains = [
  {
    eyebrow: "THE PROBLEM",
    headline: "You're the single point of failure.",
    body: "Right now, your business runs because you remember things. Client promises, invoice deadlines, that conversation with the investor three weeks ago. If you forget, it drops. If you're sick, it stalls. Everything important lives in your head, and your head is full.",
    accent: "Your head is full.",
  },
  {
    eyebrow: "THE FRICTION",
    headline: "Your tools don't talk to each other.",
    body: "Calendar in Google. Notes in Notion. CRM in a spreadsheet. Your AI chatbot forgets everything the moment you close the tab. Nothing connects. Nothing compounds. Every Monday morning, you start from zero.",
    accent: "Every Monday, you start from zero.",
  },
  {
    eyebrow: "THE GAP",
    headline: "You need the leverage but can't justify the headcount.",
    body: "A real Chief of Staff costs $120K. A good EA costs $80K. You need that leverage. Someone who preps your meetings, tracks your commitments, flags what's slipping. But you're not at that headcount yet. So you do it yourself, at 11 PM, badly.",
    accent: "So you do it yourself.",
  },
];

export default function PainSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <p className="eyebrow mb-4">Why this exists</p>
          <h2
            className="font-heading text-foreground"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Sound familiar?
          </h2>
        </ScrollReveal>

        <div className="space-y-10 lg:space-y-14">
          {pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
                style={{ borderLeft: "3px solid var(--color-accent)" }}
              >
                {/* Subtle accent glow */}
                <div
                  className="pointer-events-none"
                  style={{
                    position: "absolute", top: 0, left: 0,
                    width: "300px", height: "300px",
                    background: "radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                <p className="eyebrow mb-5" style={{ fontSize: "0.7rem" }}>
                  {pain.eyebrow}
                </p>

                <h3
                  className="font-heading text-foreground mb-5"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                  }}
                >
                  {pain.headline}
                </h3>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "var(--color-muted)",
                    maxWidth: "38rem",
                  }}
                >
                  {pain.body.replace(pain.accent, "")}
                  <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>
                    {pain.accent}
                  </span>
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transition to solution */}
        <ScrollReveal delay={0.2} className="mt-12 lg:mt-16 text-center">
          <p
            className="font-heading"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--color-foreground)",
            }}
          >
            What if you had an employee who{" "}
            <span className="serif-accent" style={{ color: "var(--color-accent)" }}>
              never forgot anything?
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
