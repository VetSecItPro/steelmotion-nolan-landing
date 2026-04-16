"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const pillars = [
  {
    title: "The problem",
    text: "Solo founders, consultants, and small business owners are drowning in context-switching. They forget follow-ups, miss opportunities, lose track of decisions, and spend hours on work that an executive assistant could handle - but they cannot justify an $80,000 salary.",
  },
  {
    title: "The gap",
    text: "Existing AI tools are chat interfaces. They are powerful in the moment but useless between conversations. They do not run background jobs, do not track your contacts, do not build institutional memory, and do not brief you proactively.",
  },
  {
    title: "The solution",
    text: "CommandPost gives every business owner an AI Chief of Staff that runs on their own server. It works 24/7. It accumulates knowledge. It runs on infrastructure built to financial institution security standards. And it costs less than a part-time contractor.",
  },
];

const spotColors = ["#1a0808", "#08081a", "#081a08"];

export default function MissionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-16" style={{ textAlign: "center" }}>
          <span className="eyebrow mb-4 block" style={{ textAlign: "center" }}>Mission</span>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-foreground/90 leading-[1.4]" style={{ textAlign: "center" }}>
            &ldquo;Every business owner deserves the operational leverage that
            only the largest companies can afford.&rdquo;
          </blockquote>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 150}>
              <CardSpotlight
                className="rounded-xl border-border/50 bg-surface-1/60 p-7 h-full"
                radius={300}
                color={spotColors[i]}
              >
                <h3 className="relative z-10 font-display font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="relative z-10 text-sm text-neutral-400 leading-relaxed">
                  {pillar.text}
                </p>
              </CardSpotlight>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
