"use client";

import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { features } from "@/app/data/homepage";

const bentoClasses = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
];

const gradients = [
  "from-accent/10 to-transparent",
  "from-blue-500/10 to-transparent",
  "from-purple-500/10 to-transparent",
  "from-green-500/10 to-transparent",
  "from-amber-500/10 to-transparent",
];

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center" style={{ textAlign: "center" }}>
          <p className="eyebrow mb-6" style={{ textAlign: "center" }}>What you get</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-20" style={{ textAlign: "center" }}>
            Not a chatbot. An <span className="serif-accent">operating system</span> for your business.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <BentoGrid className="md:auto-rows-[20rem]">
            {features.map((feature, i) => (
              <BentoGridItem
                key={feature.title}
                title={
                  <span className="font-display text-lg font-bold text-foreground">
                    {feature.title}
                  </span>
                }
                description={
                  <span className="text-muted text-sm leading-relaxed">
                    {feature.desc}
                  </span>
                }
                header={
                  i === 0 ? (
                    <div className="flex-1 w-full min-h-[10rem] md:min-h-[14rem] rounded-xl overflow-hidden border border-border/50 relative">
                      <img src="/dashboard-mockup.png" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover object-left-top opacity-80 mix-blend-screen" />
                    </div>
                  ) : i === 4 ? (
                    <div className="flex-1 w-full min-h-[10rem] md:min-h-[14rem] rounded-xl overflow-hidden border border-border/50 relative">
                      <img src="/pipeline-mockup.png" alt="Data Pipeline" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-screen" />
                    </div>
                  ) : (
                    <div className={`flex-1 w-full min-h-[6rem] rounded-xl bg-gradient-to-br ${gradients[i]} border border-border/50`} />
                  )
                }
                className={`${bentoClasses[i]} border-border/50 bg-surface-1/80 hover:border-accent/30 transition-colors duration-300 overflow-hidden`}
              />
            ))}
          </BentoGrid>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <div className="mt-12 text-center" style={{ textAlign: "center" }}>
            <Link href="/features" className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium">
              See all features &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
