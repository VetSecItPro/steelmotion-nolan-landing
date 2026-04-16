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
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="max-w-3xl mx-auto text-center" style={{ textAlign: "center" }}>
            <blockquote className="font-serif text-xl lg:text-2xl italic text-foreground/80 leading-[1.5] mb-6" style={{ textAlign: "center" }}>
              &ldquo;I spent two decades protecting systems before building this
              product. Every architectural decision reflects that experience.
              Your data deserves the same level of protection I gave to the
              systems I spent my career defending.&rdquo;
            </blockquote>
            <p className="text-sm text-muted" style={{ textAlign: "center" }}>
              Anouar Jamali - Founder, Steel Motion LLC
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
