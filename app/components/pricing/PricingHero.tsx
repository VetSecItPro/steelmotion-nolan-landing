"use client";

import { Spotlight } from "@/components/ui/spotlight-new";

export default function PricingHero() {
  return (
    <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 60%, .06) 0, hsla(0, 100%, 45%, .02) 50%, hsla(0, 100%, 35%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 60%, .04) 0, hsla(0, 100%, 45%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 60%, .03) 0, hsla(0, 100%, 35%, .01) 80%, transparent 100%)"
        duration={8}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>Pricing</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6" style={{ textAlign: "center" }}>
          Transparent pricing
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto" style={{ textAlign: "center" }}>
          No hidden fees. No per-token charges. One price that covers
          infrastructure, LLM costs, and management. Pick the tier that fits
          how you work.
        </p>
      </div>
    </section>
  );
}
