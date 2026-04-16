import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:anouar@steelmotionllc.ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-background)" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8" style={{ paddingTop: "2rem", paddingBottom: "1.5rem" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                style={{
                  width: "1.75rem", height: "1.75rem", borderRadius: "0.375rem",
                  background: "var(--color-accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "0.7rem", color: "#0A0A0B",
                }}
              >
                CP
              </div>
              <span className="font-heading" style={{ fontWeight: 600, color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>
                Command<span style={{ color: "var(--color-accent)" }}>Post</span>
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--color-muted)", maxWidth: "18rem" }}>
              Your AI Chief of Staff. Dashboard, second brain, and 24/7 operations. All on your infrastructure.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="font-heading"
                style={{
                  fontSize: "0.7rem", fontWeight: 600,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            marginTop: "1.5rem", paddingTop: "1rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
            Veteran-owned. Dallas, TX. Built with discipline.
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
            &copy; {new Date().getFullYear()} Steel Motion LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
