import type { Metadata } from "next";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Steel Motion LLC. Founded by a CISSP veteran with 20 years military and 20 years cybersecurity experience. Building the AI Chief of Staff for serious businesses.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-6">
              Built by someone who takes security personally
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              CommandPost is a product of Steel Motion LLC, founded in Dallas, TX
              by a cybersecurity veteran who spent two decades protecting systems
              before building one.
            </p>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: portrait placeholder */}
            <div>
              <div className="aspect-[3/4] max-w-sm rounded-2xl bg-surface-1 border border-border overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-surface-2 via-surface-1 to-accent/5 flex items-end justify-center pb-12">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-surface-3 border border-border mx-auto mb-4" />
                    <p className="font-semibold text-foreground">
                      Anouar Jamali
                    </p>
                    <p className="text-sm text-muted">
                      CISSP, MBA
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Founder, Steel Motion LLC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: story */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                The founder
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  20 years in the military. 20 years in cybersecurity. An MBA.
                  CISSP certified. The kind of background where you learn that
                  systems either work reliably or people get hurt.
                </p>
                <p>
                  That discipline shows in every layer of CommandPost. When we
                  say your data is isolated, we mean per-customer Docker bridge
                  networks with dropped capabilities and read-only filesystems.
                  When we say encrypted, we mean AES-256 with Restic to
                  Backblaze B2 on automated schedules.
                </p>
                <p>
                  The idea for CommandPost came from a simple observation: AI
                  tools are powerful, but they are reactive. You open ChatGPT,
                  you type a prompt, you get a response. Then you close the tab
                  and forget about it. Nothing accumulates. Nothing runs in the
                  background. Nothing knows your business tomorrow more than it
                  does today.
                </p>
                <p>
                  CommandPost is different. It is an AI employee that works while
                  you sleep. It processes your inbox, tracks your commitments,
                  builds a knowledge base, prepares for your meetings, and
                  sends you a briefing every morning before you have had your
                  coffee.
                </p>
                <p>
                  After three months, your AI Chief of Staff genuinely knows
                  your business. The switching cost is the value you have built.
                  That is the moat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-28 bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              Mission
            </span>
            <h2 className="text-3xl font-bold tracking-tight mt-2 mb-8">
              Why this product exists
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  The problem
                </h3>
                <p className="text-muted leading-relaxed">
                  Solo founders, consultants, and small business owners are
                  drowning in context-switching. They forget follow-ups, miss
                  opportunities, lose track of decisions, and spend hours on
                  work that an executive assistant could handle - but they
                  cannot justify an $80,000 salary.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  The gap
                </h3>
                <p className="text-muted leading-relaxed">
                  Existing AI tools are chat interfaces. They are powerful in
                  the moment but useless between conversations. They do not run
                  background jobs, do not track your contacts, do not build
                  institutional memory, and do not brief you proactively.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  The solution
                </h3>
                <p className="text-muted leading-relaxed">
                  CommandPost gives every business owner an AI Chief of Staff
                  that runs on their own server. It works 24/7. It accumulates
                  knowledge. It runs on infrastructure hardened by a
                  cybersecurity veteran. And it costs less than a part-time
                  contractor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Motion */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Steel Motion LLC
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                A veteran-owned technology company based in Dallas, Texas.
                Building managed AI infrastructure for businesses that take
                security seriously.
              </p>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  Dallas, TX
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  Veteran-owned
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  CISSP certified founder
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  anouar@steelmotionllc.ai
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                By the numbers
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "606+", label: "Tests passing" },
                  { number: "170+", label: "API routes" },
                  { number: "168", label: "Components" },
                  { number: "21", label: "Dashboard pages" },
                  { number: "66", label: "Library modules" },
                  { number: "7", label: "Security layers" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to meet your AI Chief of Staff?"
        subtext="We are onboarding a limited number of pilot customers. Let us show you what CommandPost can do for your business."
        buttonText="Get in touch"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
