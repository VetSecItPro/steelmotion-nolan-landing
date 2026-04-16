import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  HeroSection,
  PainSection,
  EcosystemSection,
  HowItWorksSection,
  PricingSection,
  CtaSection,
} from "./components/home";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />

      <PainSection />

      <EcosystemSection />

      <HowItWorksSection />

      {/* Divider */}
      <div style={{ maxWidth: "6rem", margin: "0 auto", height: "1px", background: "var(--color-border)" }} />

      <PricingSection />

      {/* Founder quote */}
      <section className="py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <blockquote
              className="font-serif"
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontStyle: "italic",
                color: "var(--color-foreground)",
                lineHeight: 1.7,
                letterSpacing: "0.01em",
                wordSpacing: "0.05em",
                marginBottom: "1.5rem",
                opacity: 0.9,
              }}
            >
              &ldquo;I built CommandPost because I was drowning in context-switching.
              Now my AI handles the operational overhead while I focus on the work
              that actually moves the needle.&rdquo;
            </blockquote>
            <p className="font-heading" style={{ fontWeight: 600, color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
              Anouar B.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
              Founder, Steel Motion LLC, Dallas, TX
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
