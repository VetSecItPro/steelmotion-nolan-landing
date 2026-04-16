"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import AnimatedCounter from "../AnimatedCounter";

const stats = [
  { value: 606, suffix: "+", label: "Tests passing" },
  { value: 170, suffix: "+", label: "API routes" },
  { value: 168, suffix: "", label: "Components" },
  { value: 21, suffix: "", label: "Dashboard pages" },
  { value: 66, suffix: "", label: "Library modules" },
  { value: 7, suffix: "", label: "Security layers" },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          <AnimateOnScroll>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                Steel Motion LLC
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                A veteran-owned technology company based in Dallas, Texas.
                Building managed AI infrastructure for businesses that take
                security seriously.
              </p>
              <div className="space-y-3 text-sm text-muted">
                {["Dallas, TX", "Veteran-owned", "Enterprise-grade security", "anouar@steelmotionllc.ai"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
                By the numbers
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-extrabold text-foreground stat-number">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-sm text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
