"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { WobbleCard } from "@/components/ui/wobble-card";

const compliance = [
  {
    title: "GDPR data export",
    text: "Download everything as a ZIP: tasks, contacts, knowledge, goals, content, activities, vault, and settings. Secrets auto-redacted. Selective export by data type.",
  },
  {
    title: "Data deletion",
    text: "14-day cooling period, then permanent deletion of all customer data. No data retained after account termination.",
  },
  {
    title: "Backup retention",
    text: "Setup tier: daily backups. Managed tier: every 6 hours. Workforce tier: hourly. All encrypted with AES-256 and stored in encrypted offsite storage.",
  },
  {
    title: "How your data moves",
    text: "The AI processes your prompts in the moment, then lets them go. Our LLM partner doesn't store them, log them, or train future models on them. Nothing gets harvested, nothing gets shared, nothing gets resold.",
  },
  {
    title: "Access control",
    text: "RBAC with three roles: Admin (full access), Operator (mutations except security), Viewer (read-only). Scrypt password hashing with HMAC-signed session tokens.",
  },
  {
    title: "Audit trail",
    text: "Every action logged with timestamp, user, and context. 30-day activity retention in SQLite. CSV export available for compliance reporting.",
  },
];

const bgColors = [
  "bg-[#0a1a0a]",
  "bg-[#0a0a1a]",
  "bg-[#1a0a0a]",
  "bg-[#0a1a1a]",
  "bg-[#1a1a0a]",
  "bg-[#0a0a14]",
];

export default function ComplianceSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-2 block" style={{ textAlign: "center" }}>Compliance</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4" style={{ textAlign: "center" }}>
              Your data, your control
            </h2>
            <p className="text-muted text-lg leading-relaxed" style={{ textAlign: "center" }}>
              Full data portability, transparent retention policies, and
              role-based access control. Built for the kind of customers who
              read the security page.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {compliance.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <WobbleCard containerClassName={`${bgColors[i]} min-h-[200px]`}>
                <h3 className="font-display font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </WobbleCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
