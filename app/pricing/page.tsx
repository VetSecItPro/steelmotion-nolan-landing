import type { Metadata } from "next";
import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import ComparisonTable from "../components/pricing/ComparisonTable";
import PricingFaq from "../components/pricing/PricingFaq";
import AnimateOnScroll from "../components/AnimateOnScroll";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for your AI Chief of Staff. Setup, Managed, and Workforce tiers. No hidden fees, no per-token charges.",
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      <PricingHero />
      <PricingCards />

      <hr className="section-divider" />

      <ComparisonTable />

      {/* Trust badges */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {[
                "Enterprise-grade security",
                "Veteran-owned",
                "GDPR compliant",
                "SOC 2 in progress",
                "AES-256 encryption",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                  {badge}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <PricingFaq />

      <CTA
        headline="Start your 30-day pilot"
        subtext="Full Managed tier access. If it does not deliver value within 30 days, we will make it right."
        buttonText="Start your pilot"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
