"use client";

import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface Feature {
  title: string;
  text: string;
}

interface Category {
  id: string;
  label: string;
  title: string;
  description: string;
  features: Feature[];
}

const colorSets: Record<string, { gradient: string; spotColor: string }> = {
  dashboard: { gradient: "from-accent/10 to-transparent", spotColor: "#1a0808" },
  knowledge: { gradient: "from-blue-500/10 to-transparent", spotColor: "#08081a" },
  "chief-of-staff": { gradient: "from-purple-500/10 to-transparent", spotColor: "#10081a" },
  security: { gradient: "from-green-500/10 to-transparent", spotColor: "#081a08" },
  integrations: { gradient: "from-amber-500/10 to-transparent", spotColor: "#1a1408" },
};

// Bento layout patterns - alternating patterns for visual variety
const layoutPatterns = [
  ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2", "md:col-span-1", "md:col-span-1"],
  ["md:col-span-1", "md:col-span-1", "md:col-span-1", "md:col-span-1", "md:col-span-2", "md:col-span-1 md:row-span-1"],
];

export default function FeatureCategory({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const colors = colorSets[category.id] || colorSets.dashboard;
  const pattern = layoutPatterns[index % layoutPatterns.length];

  return (
    <section
      id={category.id}
      className="py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-2 block" style={{ textAlign: "center" }}>{category.label}</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4" style={{ textAlign: "center" }}>
              {category.title}
            </h2>
            <p className="text-muted text-lg leading-relaxed" style={{ textAlign: "center" }}>
              {category.description}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          {category.id === "dashboard" && (
            <div className="mb-12 rounded-2xl overflow-hidden border border-border/50 relative shadow-2xl shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img src="/dashboard-mockup.png" alt="Mission Control Dashboard" className="relative z-0 w-full object-cover aspect-video object-left-top opacity-90" />
            </div>
          )}
          {category.id === "knowledge" && (
            <div className="mb-12 rounded-2xl overflow-hidden border border-border/50 relative shadow-2xl shadow-blue-500/20 bg-[#0a0f18] flex items-center justify-center">
              <img src="/pipeline-mockup.png" alt="Data Pipeline View" className="w-full max-h-[700px] object-cover mix-blend-screen opacity-80" />
            </div>
          )}
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <BentoGrid className="md:auto-rows-[16rem]">
            {category.features.map((feature, i) => (
              <BentoGridItem
                key={feature.title}
                title={
                  <span className="font-display text-base font-bold text-foreground">
                    {feature.title}
                  </span>
                }
                description={
                  <span className="text-muted text-sm leading-relaxed">
                    {feature.text}
                  </span>
                }
                header={
                  <div className={`flex-1 w-full min-h-[3rem] rounded-lg bg-gradient-to-br ${colors.gradient} border border-border/30`} />
                }
                className={`${pattern[i] || ""} border-border/50 bg-surface-1/80 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5`}
              />
            ))}
          </BentoGrid>
        </AnimateOnScroll>

        {category.id !== "integrations" && (
          <AnimateOnScroll delay={400}>
            <div className="mt-10" style={{ textAlign: "center" }}>
              <Link
                href="/pricing"
                className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
              >
                See pricing &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
