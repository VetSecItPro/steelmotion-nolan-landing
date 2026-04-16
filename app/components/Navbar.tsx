"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled ? "rgba(9, 9, 11, 0.75)" : "rgba(9, 9, 11, 0.3)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(217, 119, 6, 0.1)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: "4rem" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              style={{
                width: "2rem", height: "2rem", borderRadius: "0.5rem",
                background: "var(--color-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: "0.8rem", color: "#0A0A0B",
                letterSpacing: "-0.02em",
                transition: "transform 0.2s ease",
              }}
              className="group-hover:scale-105"
            >
              CP
            </div>
            <span
              className="font-heading"
              style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-foreground)", letterSpacing: "-0.02em" }}
            >
              Command<span style={{ color: "var(--color-accent)" }}>Post</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading nav-link"
                style={{
                  fontSize: "0.85rem", fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="mailto:anouar@steelmotionllc.ai?subject=I%20want%20to%20hire%20my%20Chief%20of%20Staff"
              className="font-heading"
              style={{
                padding: "0.5rem 1.25rem",
                background: "var(--color-cta)",
                color: "#0A0A0B",
                fontSize: "0.82rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                transition: "all 0.2s ease",
                letterSpacing: "-0.01em",
              }}
            >
              Hire Your Chief of Staff
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: "var(--color-muted)" }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(9, 9, 11, 0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <div className="px-6 py-5 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-heading"
                style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-muted)", padding: "0.25rem 0" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:anouar@steelmotionllc.ai?subject=I%20want%20to%20hire%20my%20Chief%20of%20Staff"
              onClick={() => setMobileOpen(false)}
              className="block font-heading text-center mt-4"
              style={{
                padding: "0.625rem 1.5rem",
                background: "var(--color-cta)",
                color: "#0A0A0B",
                fontSize: "0.85rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
              }}
            >
              Hire Your Chief of Staff
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
