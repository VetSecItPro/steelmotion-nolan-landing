"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { WobbleCard } from "@/components/ui/wobble-card";
import { painPoints, gains } from "@/app/data/homepage";

export default function BeforeAfterSection() {
  return (
    <>
      {/* Problem statement */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="max-w-3xl mx-auto text-center" style={{ textAlign: "center" }}>
            <p className="eyebrow mb-6" style={{ textAlign: "center" }}>The problem</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-8" style={{ textAlign: "center" }}>
              You&apos;re using AI like a<br className="hidden lg:block" /> search engine.
            </h2>
            <p className="text-lg lg:text-xl text-muted leading-relaxed mb-10 max-w-xl mx-auto" style={{ textAlign: "center" }}>
              You open ChatGPT. Ask a question. Close the tab. That&apos;s not AI working for you. That&apos;s you working for AI.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300} className="max-w-3xl mx-auto text-center" style={{ textAlign: "center" }}>
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90 leading-[1.2]" style={{ textAlign: "center" }}>
              What if your AI worked<br className="hidden sm:block" /> <span className="serif-accent text-accent/80">whether you opened it or not?</span>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Before / After with WobbleCards */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="text-center" style={{ textAlign: "center" }}>
            <p className="eyebrow mb-16" style={{ textAlign: "center" }}>The difference</p>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <AnimateOnScroll delay={100} direction="left">
              <div className="relative h-full flex flex-col p-8 md:p-12 rounded-2xl border border-red-500/10 bg-gradient-to-br from-red-500/5 via-surface-1 to-background shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-red-500/10 transition-colors duration-700" />
                <h3 className="relative font-display text-xs md:text-sm font-bold tracking-widest uppercase mb-10 text-red-500/70 border-b border-red-500/20 pb-4 inline-block max-w-fit">
                  Legacy AI Workflows
                </h3>
                <ul className="relative space-y-6 flex-1">
                  {painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-white/60 leading-relaxed text-sm lg:text-base">
                      <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 shrink-0">
                        <span className="text-red-500 text-xs font-bold leading-none">&times;</span>
                      </div>
                      <span className="group-hover:text-white/80 transition-colors duration-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300} direction="right">
              <div className="relative h-full flex flex-col p-8 md:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-[#0a1410] to-background shadow-[0_0_50px_rgba(var(--accent),0.05)] overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-accent/15 transition-colors duration-700" />
                <h3 className="relative font-display text-xs md:text-sm font-bold tracking-widest uppercase mb-10 text-accent/90 border-b border-accent/30 pb-4 inline-block max-w-fit flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Powered by OpenClaw
                </h3>
                <ul className="relative space-y-6 flex-1">
                  {gains.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-white/80 leading-relaxed text-sm lg:text-base font-medium">
                      <div className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 border border-accent/40 shadow-[0_0_15px_rgba(var(--accent),0.3)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="group-hover:text-white transition-colors duration-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
