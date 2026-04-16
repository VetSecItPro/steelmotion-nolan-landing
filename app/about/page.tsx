import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import FounderSection from "../components/about/FounderSection";
import MissionSection from "../components/about/MissionSection";
import StatsSection from "../components/about/StatsSection";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Steel Motion LLC. The story behind CommandPost and why we built an AI Chief of Staff that runs on your server.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <AboutHero />

      <FounderSection />

      <hr className="section-divider" />

      <MissionSection />

      <hr className="section-divider" />

      <StatsSection />

      <CTA
        headline="Ready to meet your AI Chief of Staff?"
        subtext="We are onboarding a limited number of pilot customers. 30 days to prove the value, or we make it right."
        buttonText="Start your pilot"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
