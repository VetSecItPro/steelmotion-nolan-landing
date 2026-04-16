"use client";

import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { securityPoints } from "@/app/data/homepage";

export default function SecuritySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <CardSpotlight
            className="rounded-3xl border-accent/20 bg-surface-1/40 p-8 lg:p-14"
            radius={500}
            color="#1a0808"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="eyebrow mb-6">Security</p>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white">
                  Your data stays on <span className="serif-accent">your</span> server.
                </h2>
                <p className="text-neutral-300 text-base lg:text-lg leading-relaxed mb-6">
                  Built to the same standards as financial institutions. Every customer gets their own isolated infrastructure. Nothing shared. Nothing exposed.
                </p>
                <Link href="/security" className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium">
                  Full security architecture &rarr;
                </Link>
              </div>
              <ul className="space-y-6">
                {securityPoints.map((point, i) => (
                  <AnimateOnScroll key={point} delay={i * 100}>
                    <li className="flex items-start gap-4 text-neutral-300 leading-relaxed text-base">
                      <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      {point}
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </CardSpotlight>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
