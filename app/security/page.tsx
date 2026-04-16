import type { Metadata } from "next";
import SecurityHero from "../components/security/SecurityHero";
import DefenseLayers from "../components/security/DefenseLayers";
import ContainerArchitecture from "../components/security/ContainerArchitecture";
import ComplianceSection from "../components/security/ComplianceSection";
import AnimateOnScroll from "../components/AnimateOnScroll";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Seven layers of defense. Your data runs on your server, not ours. Enterprise-grade security architecture.",
};

export default function SecurityPage() {
  return (
    <div className="bg-background">
      <SecurityHero />

      <DefenseLayers />

      <hr className="section-divider" />

      <ContainerArchitecture />

      <hr className="section-divider" />

      <ComplianceSection />

      {/* Founder credential quote */}
      <section className="py-12 lg:py-16" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="text-center" style={{ textAlign: "center" }}>
            <blockquote
              className="font-serif"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                fontStyle: "italic",
                color: "var(--color-foreground)",
                opacity: 0.9,
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                letterSpacing: "0.01em",
                wordSpacing: "0.05em",
                textAlign: "center",
              }}
            >
              &ldquo;I spent two decades protecting systems before building
              this product. Every architectural decision reflects that
              experience. Your data deserves the same level of protection I
              gave to the systems I spent my career defending.&rdquo;
            </blockquote>
            <p
              className="font-heading"
              style={{
                fontWeight: 600,
                color: "var(--color-foreground)",
                letterSpacing: "-0.01em",
              }}
            >
              Anouar Bencheqroun
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
              Founder, Steel Motion LLC
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <CTA
        headline="Security questions?"
        subtext="We are happy to walk through our security architecture in detail. Ask us anything."
        buttonText="Contact us"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
