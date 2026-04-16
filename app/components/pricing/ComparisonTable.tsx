"use client";

import AnimateOnScroll from "../AnimateOnScroll";

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

export default function ComparisonTable() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-12 text-center" style={{ textAlign: "center" }}>
            Full comparison
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-border bg-surface-1/50 p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-sm font-medium text-muted w-1/3">Feature</th>
                  <th className="py-3 px-4 text-sm font-medium text-center text-foreground">Setup</th>
                  <th className="py-3 px-4 text-sm font-medium text-center text-accent">Managed</th>
                  <th className="py-3 px-4 text-sm font-medium text-center text-foreground">Workforce</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border/30 transition-colors duration-200 hover:bg-accent/[0.03]"
                  >
                    <td className="py-3.5 pr-4 text-sm text-muted">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellValue value={row.setup} /></td>
                    <td className="py-3.5 px-4 text-center bg-accent/[0.02]"><CellValue value={row.managed} /></td>
                    <td className="py-3.5 px-4 text-center"><CellValue value={row.workforce} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
