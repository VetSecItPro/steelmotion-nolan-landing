"use client";

import AnimateOnScroll from "../AnimateOnScroll";

export default function FounderSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: portrait placeholder */}
          <AnimateOnScroll direction="left">
            <div className="aspect-[3/4] max-w-sm rounded-2xl bg-surface-1 border border-border overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-surface-2 via-surface-1 to-accent/5 flex items-end justify-center pb-12">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-surface-3 border border-border mx-auto mb-4" />
                  <p className="font-display font-semibold text-foreground">
                    Anouar Jamali
                  </p>
                  <p className="text-sm text-muted">
                    Founder, Steel Motion LLC
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: story */}
          <AnimateOnScroll direction="right" delay={200}>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
                The story
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  Two decades of military service. Two decades in cybersecurity.
                  The kind of background where you learn that systems either work
                  reliably or people get hurt. That discipline shows in every
                  layer of CommandPost.
                </p>
                <p>
                  When we say your data is isolated, we mean per-customer Docker
                  bridge networks with dropped capabilities and read-only
                  filesystems. When we say encrypted, we mean AES-256 with Restic
                  to Backblaze B2 on automated schedules.
                </p>
                <p>
                  The idea for CommandPost came from a simple observation: AI
                  tools are powerful, but they are reactive. You open ChatGPT,
                  you type a prompt, you get a response. Then you close the tab
                  and forget about it. Nothing accumulates. Nothing runs in the
                  background. Nothing knows your business tomorrow more than it
                  does today.
                </p>
                <p>
                  CommandPost is different. It is an AI employee that works while
                  you sleep. It processes your inbox, tracks your commitments,
                  builds a knowledge base, prepares for your meetings, and
                  sends you a briefing every morning before you have had your
                  coffee.
                </p>
                <p>
                  After three months, your AI Chief of Staff genuinely knows
                  your business. The switching cost is the value you have built.
                  That is the moat.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
