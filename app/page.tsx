import Link from "next/link";
import CTA from "./components/CTA";

const features = [
  {
    label: "01",
    title: "You used to start every morning scrambling. Now you start with clarity.",
    description:
      "At 7 AM, your Chief of Staff sends a structured briefing: calendar, priorities, stale contacts, open commitments, and insights from your knowledge base. By the time you sit down, the context is already loaded.",
    detail: "Evening reviews and weekly summaries included.",
  },
  {
    label: "02",
    title: "You used to lose track of what was said. Now nothing falls through.",
    description:
      "Every meeting insight, research finding, decision, and contact interaction gets organized in a second-brain vault. Cross-referenced. Searchable. After three months, your CoS genuinely knows your business better than any assistant you have ever hired.",
    detail: "PARA + Zettelkasten hybrid knowledge architecture.",
  },
  {
    label: "03",
    title: "You used to walk into meetings cold. Now you walk in loaded.",
    description:
      "Before every meeting: attendee context, last discussions, open commitments pulled automatically. After: action items extracted and tracked. Nothing slips through the cracks.",
    detail: "Integrates with Google Calendar and Granola transcripts.",
  },
  {
    label: "04",
    title: "You used to wonder if your decisions were right. Now you have the data.",
    description:
      "Every business decision recorded with context, alternatives considered, and rationale. 90 days later, your CoS prompts a review of what actually happened. Build a track record of your judgment over time.",
    detail: "Decision accuracy analytics by type and confidence.",
  },
];

const securityPoints = [
  {
    number: "01",
    title: "Your server, your data",
    text: "Every customer gets their own isolated container stack. Your data never touches our systems or any LLM provider for storage.",
  },
  {
    number: "02",
    title: "Encrypted everything",
    text: "AES-256 encrypted backups. TLS in transit. Secrets management with 600-permission env files. Built to financial institution standards from day one.",
  },
  {
    number: "03",
    title: "Zero public exposure",
    text: "Your dashboard sits behind Cloudflare Zero Trust with SSO. No login page on the public internet. Period.",
  },
  {
    number: "04",
    title: "Seven layers of defense",
    text: "Edge, authentication, network, container, application, AI, and data layers. Each one independently hardened. Defense in depth is not a marketing phrase here.",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero - asymmetric split */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface-1 text-xs text-muted mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Runs on your server. Your data never leaves.
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                The employee who <span className="serif-accent">never</span> forgets, <span className="serif-accent">never</span> sleeps, <span className="serif-accent">never</span> drops the ball.
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-lg mb-10">
                An AI Chief of Staff that works whether you open it or not. It briefs you every morning, tracks every commitment, and runs 24/7 on <span className="text-foreground">your own server</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200 glow-accent"
                >
                  Start your pilot
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-muted font-medium rounded-lg hover:border-border-hover hover:text-foreground transition-colors duration-200"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* Right: gradient orb / dashboard mockup */}
            <div className="relative flex items-center justify-center fade-up fade-up-delay-2">
              <div className="relative w-full aspect-square max-w-md">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-accent/8 rounded-full blur-3xl orb-animate" />
                {/* Inner orb */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/20 via-surface-2 to-surface-1 border border-border orb-animate" style={{ animationDelay: "-3s" }} />
                {/* Dashboard mockup overlay */}
                <div className="absolute inset-16 rounded-2xl bg-surface-1 border border-border overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-surface-3" />
                      <div className="w-2.5 h-2.5 rounded-full bg-surface-3" />
                    </div>
                    <div className="h-2 w-24 bg-surface-3 rounded mb-2" />
                    <div className="h-1.5 w-36 bg-surface-2 rounded" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-8 bg-surface-2 rounded-lg" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-surface-2 rounded-lg" />
                      <div className="h-12 bg-surface-2 rounded-lg" />
                    </div>
                    <div className="h-6 bg-accent/10 rounded-lg" />
                    <div className="h-8 bg-surface-2 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-8 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-center">
            <span className="text-foreground/70">Isolated container per customer</span>
            <span className="hidden sm:block text-border">|</span>
            <span className="text-foreground/70">AES-256 encrypted backups</span>
            <span className="hidden sm:block text-border">|</span>
            <span className="text-foreground/70">Cloudflare Zero Trust SSO</span>
            <span className="hidden sm:block text-border">|</span>
            <span className="text-foreground/70">Live in <span className="stat-number text-foreground">48 hours</span></span>
          </div>
        </div>
      </section>

      {/* Features - zig-zag layout */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Not a chatbot. An <span className="serif-accent">operating system</span> for your business.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Most AI tools wait for you to open them. CommandPost works whether you remember to or not - anticipating needs, tracking commitments, building institutional knowledge that compounds over time. Nothing goes out without your approval.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {features.map((feature, i) => (
              <div
                key={feature.label}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-xs font-mono text-accent tracking-wider">
                    {feature.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <p className="text-sm text-muted/70">{feature.detail}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl bg-surface-1 border border-border overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-surface-2 via-surface-1 to-accent/5 flex items-center justify-center">
                      <span className="text-6xl font-bold text-accent/10">
                        {feature.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/features"
              className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              See all features &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Security section */}
      <section className="py-24 lg:py-32 bg-surface-1/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-xs font-mono text-accent tracking-wider uppercase">
                Security
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-4">
                Your data stays on <span className="serif-accent">your</span> server. Full stop.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Your competitors store your data on their servers. We deploy on
                yours. Built with the same security standards as financial
                institutions, because your business data deserves nothing less.
              </p>
              <Link
                href="/security"
                className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
              >
                Full security architecture &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {securityPoints.map((point) => (
                <div key={point.number} className="flex gap-4">
                  <span className="text-accent font-mono text-sm font-bold shrink-0 mt-0.5">
                    {point.number}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              One price. <span className="serif-accent">Everything</span> included.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              An executive assistant costs $80K a year. Your AI Chief of Staff costs a fraction and works around the clock. No hidden fees. No per-token charges.
            </p>
          </div>

          {/* Horizontal pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Setup */}
            <div className="rounded-2xl border border-border bg-surface-1 p-6 sm:p-8 card-lift">
              <h3 className="text-lg font-bold mb-1">Setup</h3>
              <div className="text-2xl font-bold mb-1">
                $3,000
                <span className="text-sm text-muted font-normal ml-1">
                  one-time
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted mb-6">
                Your AI Chief of Staff, deployed and configured on your own
                server. You own the infrastructure.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Dedicated hardened VPS
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Custom personality and business context
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  2 hours training + 30-day support
                </li>
              </ul>
            </div>

            {/* Managed - highlighted */}
            <div className="rounded-2xl border border-accent/40 bg-surface-1 p-6 sm:p-8 relative card-lift glow-accent">
              <span className="absolute -top-3 left-8 px-3 py-0.5 bg-accent text-white text-xs font-medium rounded-full">
                Most popular
              </span>
              <h3 className="text-lg font-bold mb-1">Managed</h3>
              <div className="text-2xl font-bold mb-1">
                $2,000
                <span className="text-sm text-muted font-normal ml-1">
                  /month
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted mb-6">
                Daily briefings, memory optimization, custom skills, and all LLM
                costs. Hands-off management.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Everything in Setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Morning and evening briefings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  LLM costs included
                </li>
              </ul>
            </div>

            {/* Workforce */}
            <div className="rounded-2xl border border-border bg-surface-1 p-6 sm:p-8 card-lift">
              <h3 className="text-lg font-bold mb-1">Workforce</h3>
              <div className="text-2xl font-bold mb-1">
                $5,000
                <span className="text-sm text-muted font-normal ml-1">
                  /month
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted mb-6">
                Multiple AI agents, team access, custom integrations, and
                dedicated account management with SLA.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Everything in Managed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Multi-user RBAC access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-px">-</span>
                  Weekly strategy calls + SLA
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              Full pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        headline="Stop being your own assistant."
        subtext="We are onboarding a limited number of pilot customers. 30 days to prove the value, or we make it right."
        buttonText="Start your pilot"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
