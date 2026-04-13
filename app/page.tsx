import Link from "next/link";
import AnimateOnScroll from "./components/AnimateOnScroll";
import SpotlightCard from "./components/SpotlightCard";
import { StaggerText } from "./components/TextReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import {
  painPoints,
  gains,
  steps,
  features,
  securityPoints,
  tiers,
} from "./data/homepage";

function HeroClient() {
  return (
    <section className="mesh-bg relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[120px] float-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] float-orb-reverse pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[80px] float-orb pointer-events-none" style={{ animationDelay: "-4s" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-28 lg:py-36">
        <div className="max-w-5xl">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/60 bg-surface-1/60 backdrop-blur-sm text-xs text-muted mb-10 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              AI Chief of Staff
            </div>
          </AnimateOnScroll>

          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8">
            <AnimateOnScroll delay={100}>
              <span className="block">I gave my business</span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={250}>
              <span className="block">an AI employee.</span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <span className="block serif-accent text-accent/90 text-[0.85em]">
                It hasn&apos;t taken a day off since.
              </span>
            </AnimateOnScroll>
          </h1>

          <AnimateOnScroll delay={550}>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted/80 leading-relaxed max-w-2xl mb-12">
              A private AI that runs your operations around the clock, on your own server. Not a chatbot you open. An employee that <span className="text-foreground/90">works whether you&apos;re watching or not</span>.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/pricing" className="btn-primary text-base px-8 py-4">
                Start your pilot
              </Link>
              <Link href="/features" className="btn-outline text-base px-8 py-4">
                See what it does
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={900}>
            <div className="flex flex-wrap gap-3">
              <span className="stat-pill">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="stat-number text-foreground/90 font-semibold">24/7</span> autonomous
              </span>
              <span className="stat-pill">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Your server, your data
              </span>
              <span className="stat-pill">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Live in <span className="stat-number text-foreground/90 font-semibold">48h</span>
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-background">
      <HeroClient />

      {/* ============ THE PROBLEM ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow mb-6">The problem</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-8">
              You&apos;re using AI like a<br className="hidden lg:block" /> search engine.
            </h2>
            <p className="text-lg lg:text-xl text-muted leading-relaxed mb-10 max-w-xl">
              You open ChatGPT. Ask a question. Close the tab. That&apos;s not AI working for you. That&apos;s you working for AI.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300} className="max-w-3xl">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90 leading-[1.2]">
              What if your AI worked<br className="hidden sm:block" /> <span className="serif-accent text-accent/80">whether you opened it or not?</span>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ BEFORE / AFTER ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="eyebrow mb-16">The difference</p>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <AnimateOnScroll delay={100} direction="left">
              <SpotlightCard className="rounded-2xl border border-accent/15 bg-surface-1/50 p-8 lg:p-10 h-full" spotlightColor="rgba(255, 59, 48, 0.06)">
                <h3 className="font-display text-sm font-bold tracking-widest uppercase mb-8 text-accent/70">
                  Without CommandPost
                </h3>
                <ul className="space-y-6">
                  {painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-muted leading-relaxed text-base lg:text-lg">
                      <span className="text-accent/40 mt-1 shrink-0 text-xl leading-none">&times;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300} direction="right">
              <SpotlightCard className="rounded-2xl border border-green-500/15 bg-surface-1/50 p-8 lg:p-10 h-full" spotlightColor="rgba(74, 222, 128, 0.06)">
                <h3 className="font-display text-sm font-bold tracking-widest uppercase mb-8 text-green-400/70">
                  With CommandPost
                </h3>
                <ul className="space-y-6">
                  {gains.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-foreground/80 leading-relaxed text-base lg:text-lg">
                      <span className="text-green-400/60 mt-1 shrink-0 text-xl leading-none">&rarr;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="eyebrow mb-6">How it works</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-20">
              Three steps to <span className="serif-accent">operational clarity</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 200} className={i < steps.length - 1 ? "step-connector" : ""}>
                <div className="lg:px-10">
                  <span className="font-serif text-6xl lg:text-7xl stat-highlight italic block mb-6">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-base lg:text-lg">
                    {step.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ FEATURES ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="eyebrow mb-6">What you get</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-20">
              Not a chatbot. An <span className="serif-accent">operating system</span> for your business.
            </h2>
          </AnimateOnScroll>
          <div className="border-t border-border/50">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 80}>
                <div className="feature-row py-8 lg:py-10 px-2 lg:px-6 group cursor-default">
                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-4 lg:gap-20 items-center">
                    <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-base lg:text-lg">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={400}>
            <div className="mt-12">
              <Link href="/features" className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium">
                See all features &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ SECURITY ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <SpotlightCard className="rounded-3xl border border-accent/20 bg-surface-1/40 p-8 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="eyebrow mb-6">Security</p>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                    Your data stays on <span className="serif-accent">your</span> server.
                  </h2>
                  <p className="text-muted text-base lg:text-lg leading-relaxed mb-6">
                    Built to the same standards as financial institutions. Every customer gets their own isolated infrastructure. Nothing shared. Nothing exposed.
                  </p>
                  <Link href="/security" className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium">
                    Full security architecture &rarr;
                  </Link>
                </div>
                <ul className="space-y-6">
                  {securityPoints.map((point, i) => (
                    <AnimateOnScroll key={point} delay={i * 100}>
                      <li className="flex items-start gap-4 text-muted leading-relaxed text-base">
                        <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </span>
                        {point}
                      </li>
                    </AnimateOnScroll>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </AnimateOnScroll>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ PRICING ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-20">
              <p className="eyebrow mb-6">Pricing</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                One price. <span className="serif-accent">Everything</span> included.
              </h2>
              <p className="text-muted text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                An executive assistant costs $80K a year and works 40 hours a week. Your AI Chief of Staff costs a fraction and never clocks out.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {tiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 150}>
                <SpotlightCard
                  className={`rounded-2xl bg-surface-1 p-6 sm:p-8 relative ${
                    tier.prominent
                      ? "pricing-prominent border-2 border-accent/40"
                      : "border border-border"
                  }`}
                  spotlightColor={tier.prominent ? "rgba(255, 59, 48, 0.08)" : "rgba(255, 255, 255, 0.03)"}
                >
                  {tier.prominent && (
                    <span className="absolute -top-3 left-8 px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full tracking-wide">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold mb-2">{tier.name}</h3>
                  <div className="mb-1">
                    <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">{tier.price}</span>
                    <span className="text-sm text-muted font-normal ml-2">{tier.interval}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted mb-8 leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-3 text-sm sm:text-base text-muted">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-accent mt-px shrink-0">&mdash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={500}>
            <div className="mt-12 text-center">
              <Link href="/pricing" className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium">
                Full pricing details &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ FOUNDER QUOTE ============ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-foreground/90 leading-[1.4] mb-10">
              &ldquo;I built CommandPost because I was drowning in context-switching. Now my AI handles the operational overhead while I focus on the work that actually moves the needle.&rdquo;
            </blockquote>
            <div>
              <p className="font-display font-bold text-foreground tracking-tight">Anouar M.</p>
              <p className="text-sm text-muted mt-1">Founder, Steel Motion LLC - Dallas, TX</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ============ FINAL CTA ============ */}
      <section className="py-28 lg:py-44 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.06] rounded-full blur-[150px] cta-glow pointer-events-none" />

        <AnimateOnScroll className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Stop being your own<br className="hidden sm:block" /> <span className="serif-accent">assistant.</span>
          </h2>
          <p className="text-muted text-lg lg:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Limited pilot spots available. 30 days to prove the value. Your data exportable at any time.
          </p>
          <Link href="mailto:anouar@steelmotionllc.ai" className="btn-primary text-base lg:text-lg px-10 py-4 lg:px-12 lg:py-5">
            Start your pilot
          </Link>
          <p className="mt-10 text-sm text-muted">
            Questions?{" "}
            <a href="mailto:anouar@steelmotionllc.ai" className="text-accent hover:text-accent-hover transition-colors">
              anouar@steelmotionllc.ai
            </a>
          </p>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
