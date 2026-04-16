"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const containers = [
  {
    name: "Mission Control",
    desc: "Next.js dashboard",
    security: "Read-only FS, uid 1001, 2GB RAM, 256 PID",
    gradient: "from-accent/10 to-transparent",
  },
  {
    name: "OpenClaw Gateway",
    desc: "AI agent runtime",
    security: "Non-root, token auth, cap_drop ALL",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    name: "SearXNG",
    desc: "Private search",
    security: "SHA-pinned, 512MB RAM, 64 PID",
    gradient: "from-purple-500/10 to-transparent",
  },
];

const infraItems = [
  "Isolated bridge network",
  "Encrypted volumes",
  "Seccomp + AppArmor",
  "Resource limits enforced",
];

export default function ContainerArchitecture() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow mb-2 block" style={{ textAlign: "center" }}>Infrastructure</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4" style={{ textAlign: "center" }}>
              Per-customer isolation
            </h2>
            <p className="text-muted text-lg leading-relaxed" style={{ textAlign: "center" }}>
              Every customer gets three isolated Docker containers on their own
              bridge network. No shared volumes. No cross-tenant communication.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <BentoGrid className="md:auto-rows-[14rem] max-w-4xl">
            {containers.map((container, i) => (
              <BentoGridItem
                key={container.name}
                title={
                  <span className="font-display text-base font-bold text-foreground">
                    {container.name}
                  </span>
                }
                description={
                  <div>
                    <p className="text-muted text-sm mb-2">{container.desc}</p>
                    <p className="text-[11px] font-mono text-accent/60 leading-relaxed">
                      {container.security}
                    </p>
                  </div>
                }
                header={
                  <div className={`flex-1 w-full min-h-[2rem] rounded-lg bg-gradient-to-br ${container.gradient} border border-border/30`} />
                }
                className="border-border/50 bg-surface-1/80 hover:border-accent/30 transition-colors duration-300"
              />
            ))}
          </BentoGrid>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="mt-8 max-w-4xl flex flex-wrap gap-6 text-xs text-muted">
            {infraItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                {item}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
