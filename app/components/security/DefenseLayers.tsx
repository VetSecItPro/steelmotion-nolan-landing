"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const layers = [
  {
    number: "01",
    name: "Edge",
    tech: "Cloudflare",
    description:
      "DDoS protection, WAF rules, and bot management before traffic ever reaches your server. All DNS managed through Cloudflare.",
  },
  {
    number: "02",
    name: "Authentication",
    tech: "Zero Trust SSO",
    description:
      "Cloudflare Access with Google, Microsoft, or email OTP authentication. No login page exists on the public internet. Users authenticate before traffic reaches the server.",
  },
  {
    number: "03",
    name: "Network",
    tech: "Per-tenant isolation",
    description:
      "Each customer gets a unique Docker bridge network. Cross-tenant communication is impossible at the network layer. UFW firewall with only ports 22, 80, 443 open. Fail2ban active.",
  },
  {
    number: "04",
    name: "Container",
    tech: "Read-only filesystem",
    description:
      "Non-root container users (uid 1001). All capabilities dropped except NET_BIND_SERVICE. CPU, memory, and PID limits per container. Seccomp and AppArmor profiles enforced.",
  },
  {
    number: "05",
    name: "Application",
    tech: "Zod + CSP + HSTS",
    description:
      "Every API input validated with Zod schemas. Parameterized SQL queries. Path traversal prevention with symlink blocking. Content-Security-Policy, HSTS, X-Frame-Options: DENY.",
  },
  {
    number: "06",
    name: "AI",
    tech: "Prompt injection detection",
    description:
      "13 regex patterns detect common injection techniques. External content sandboxed and marked as DATA, not INSTRUCTIONS. Information classification with role-based boundaries. Memory poisoning protection.",
  },
  {
    number: "07",
    name: "Data",
    tech: "AES-256 encrypted backups",
    description:
      "Restic to Cloudflare R2 with AES-256 encryption. Automated daily backups with 7-day, 4-week, and 6-month retention. Self-service restore from the dashboard. Secrets stored in chmod 600 env files.",
  },
];

const spotColors = [
  "#1a0808",
  "#180808",
  "#160808",
  "#140808",
  "#120808",
  "#100808",
  "#0e0808",
];

export default function DefenseLayers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16" style={{ textAlign: "center" }}>
            <p className="eyebrow mb-4" style={{ textAlign: "center" }}>Defense in depth</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ textAlign: "center" }}>
              Seven layers. Each independently hardened.
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto" style={{ textAlign: "center" }}>
              Every attack must penetrate all seven layers. Each layer is designed to function even if adjacent layers are compromised.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {layers.map((layer, i) => (
            <AnimateOnScroll key={layer.number} delay={i * 80}>
              <CardSpotlight
                className="rounded-xl border-border/50 bg-surface-1/60 p-7 h-full"
                radius={300}
                color={spotColors[i]}
              >
                <div className="relative z-10">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-accent font-mono text-sm font-bold">
                      {layer.number}
                    </span>
                    <h3 className="font-display font-bold text-white text-lg">
                      {layer.name}
                    </h3>
                  </div>
                  <span className="inline-block text-xs font-mono text-accent/60 mb-3 px-2 py-0.5 rounded bg-accent/5 border border-accent/10">
                    {layer.tech}
                  </span>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </CardSpotlight>
            </AnimateOnScroll>
          ))}
          {/* Fill the grid with a statement card */}
          <AnimateOnScroll delay={600}>
            <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-7 h-full flex items-center justify-center">
              <p className="font-display text-xl font-bold text-center text-foreground/90" style={{ textAlign: "center" }}>
                No central database.<br />No shared storage.<br />No harvested data.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
