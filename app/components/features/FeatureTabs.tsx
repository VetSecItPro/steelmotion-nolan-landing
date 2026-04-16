"use client";

import { useEffect, useState } from "react";

interface Category {
  id: string;
  label: string;
}

export default function FeatureTabs({ categories }: { categories: Category[] }) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? "");

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio among those intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // rootMargin offsets the viewport so the "active" feel matches when the
        // section header crosses below the sticky tab nav (~130px total overhead).
        rootMargin: "-140px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <div
      className="flex gap-2 overflow-x-auto"
      style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
    >
      {categories.map((cat) => {
        const isActive = activeId === cat.id;
        return (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="font-heading feature-tab whitespace-nowrap"
            aria-current={isActive ? "location" : undefined}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: isActive ? 600 : 500,
              letterSpacing: "-0.01em",
              color: isActive ? "#0A0A0B" : "var(--color-muted)",
              background: isActive
                ? "var(--color-accent)"
                : "var(--color-surface-1)",
              border: isActive
                ? "1px solid var(--color-accent)"
                : "1px solid var(--color-border)",
              boxShadow: isActive
                ? "0 0 20px rgba(217, 119, 6, 0.25)"
                : "none",
              transition: "all 0.25s ease",
            }}
          >
            {cat.label}
          </a>
        );
      })}
    </div>
  );
}
