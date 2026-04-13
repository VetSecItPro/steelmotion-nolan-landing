import type { Metadata } from "next";
import Link from "next/link";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Seven layers of defense. Built by a CISSP-certified cybersecurity veteran. Your data never leaves your server.",
};

const layers = [
  {
    number: "01",
    name: "Edge",
    tech: "Cloudflare",
    description:
      "DDoS protection, WAF rules, and bot management before traffic ever reaches your server. All DNS managed through Cloudflare.",
    color: "bg-accent/10 border-accent/20",
  },
  {
    number: "02",
    name: "Authentication",
    tech: "Zero Trust SSO",
    description:
      "Cloudflare Access with Google, Microsoft, or email OTP authentication. No login page exists on the public internet. Users authenticate before traffic reaches the server.",
    color: "bg-accent/8 border-accent/15",
  },
  {
    number: "03",
    name: "Network",
    tech: "Per-tenant isolation",
    description:
      "Each customer gets a unique Docker bridge network. Cross-tenant communication is impossible at the network layer. UFW firewall with only ports 22, 80, 443 open. Fail2ban active.",
    color: "bg-accent/6 border-accent/12",
  },
  {
    number: "04",
    name: "Container",
    tech: "Read-only filesystem",
    description:
      "Non-root container users (uid 1001). All capabilities dropped except NET_BIND_SERVICE. CPU, memory, and PID limits per container. Seccomp and AppArmor profiles enforced.",
    color: "bg-accent/5 border-accent/10",
  },
  {
    number: "05",
    name: "Application",
    tech: "Zod + CSP + HSTS",
    description:
      "Every API input validated with Zod schemas. Parameterized SQL queries. Path traversal prevention with symlink blocking. Content-Security-Policy, HSTS, X-Frame-Options: DENY.",
    color: "bg-accent/4 border-accent/8",
  },
  {
    number: "06",
    name: "AI",
    tech: "Prompt injection detection",
    description:
      "13 regex patterns detect common injection techniques. External content sandboxed and marked as DATA, not INSTRUCTIONS. Information classification with role-based boundaries. Memory poisoning protection.",
    color: "bg-accent/3 border-accent/6",
  },
  {
    number: "07",
    name: "Data",
    tech: "AES-256 encrypted backups",
    description:
      "Restic to Backblaze B2 with AES-256 encryption. Automated daily backups with 7-day, 4-week, and 6-month retention. Self-service restore from the dashboard. Secrets stored in chmod 600 env files.",
    color: "bg-accent/2 border-accent/5",
  },
];

const compliance = [
  {
    title: "GDPR data export",
    text: "Download everything as a ZIP: tasks, contacts, knowledge, goals, content, activities, vault, and settings. Secrets auto-redacted. Selective export by data type.",
  },
  {
    title: "Data deletion",
    text: "14-day cooling period, then permanent deletion of all customer data. No data retained after account termination.",
  },
  {
    title: "Backup retention",
    text: "Setup tier: daily backups. Managed tier: every 6 hours. Workforce tier: hourly. All encrypted with AES-256 and stored in Backblaze B2.",
  },
  {
    title: "No data sharing",
    text: "Your data never leaves your server for storage. LLM API calls use your context in transit but nothing is stored by OpenAI, Anthropic, or any provider.",
  },
  {
    title: "Access control",
    text: "RBAC with three roles: Admin (full access), Operator (mutations except security), Viewer (read-only). Scrypt password hashing with HMAC-signed session tokens.",
  },
  {
    title: "Audit trail",
    text: "Every action logged with timestamp, user, and context. 30-day activity retention in SQLite. CSV export available for compliance reporting.",
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              Security
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-6">
              Seven layers of defense
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Built by a CISSP-certified cybersecurity veteran with 20 years of
              experience protecting systems. Security is the foundation, not an
              add-on.
            </p>
          </div>
        </div>
      </section>

      {/* Prominent statement */}
      <section className="py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-bold tracking-tight">
            Your data never leaves your server.
          </p>
        </div>
      </section>

      {/* Security layers diagram */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: SVG diagram */}
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                Defense in depth
              </h2>
              {/* Concentric rings diagram */}
              <div className="relative aspect-square max-w-md mx-auto">
                <svg
                  viewBox="0 0 400 400"
                  fill="none"
                  className="w-full h-full"
                >
                  {/* Outer rings */}
                  <circle cx="200" cy="200" r="190" stroke="rgba(255,59,48,0.08)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="165" stroke="rgba(255,59,48,0.1)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="140" stroke="rgba(255,59,48,0.12)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="115" stroke="rgba(255,59,48,0.14)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="90" stroke="rgba(255,59,48,0.16)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="65" stroke="rgba(255,59,48,0.18)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="40" stroke="rgba(255,59,48,0.25)" strokeWidth="1.5" fill="rgba(255,59,48,0.05)" />

                  {/* Layer labels */}
                  <text x="200" y="22" textAnchor="middle" fill="rgba(255,59,48,0.5)" fontSize="10" fontFamily="var(--font-mono)">EDGE</text>
                  <text x="200" y="47" textAnchor="middle" fill="rgba(255,59,48,0.5)" fontSize="10" fontFamily="var(--font-mono)">AUTH</text>
                  <text x="200" y="72" textAnchor="middle" fill="rgba(255,59,48,0.5)" fontSize="10" fontFamily="var(--font-mono)">NETWORK</text>
                  <text x="200" y="97" textAnchor="middle" fill="rgba(255,59,48,0.5)" fontSize="10" fontFamily="var(--font-mono)">CONTAINER</text>
                  <text x="200" y="122" textAnchor="middle" fill="rgba(255,59,48,0.5)" fontSize="10" fontFamily="var(--font-mono)">APP</text>
                  <text x="200" y="147" textAnchor="middle" fill="rgba(255,59,48,0.5)" fontSize="10" fontFamily="var(--font-mono)">AI</text>

                  {/* Center label */}
                  <text x="200" y="197" textAnchor="middle" fill="rgba(255,59,48,0.7)" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">YOUR</text>
                  <text x="200" y="211" textAnchor="middle" fill="rgba(255,59,48,0.7)" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">DATA</text>
                </svg>
              </div>
            </div>

            {/* Right: layer descriptions */}
            <div className="space-y-0">
              {layers.map((layer, idx) => (
                <div
                  key={layer.number}
                  className={`flex gap-4 py-5 ${
                    idx < layers.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <div className="shrink-0">
                    <span className="text-accent font-mono text-sm font-bold">
                      {layer.number}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="font-semibold text-foreground">
                        {layer.name}
                      </h3>
                      <span className="text-xs font-mono text-muted">
                        {layer.tech}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Container architecture */}
      <section className="py-24 lg:py-28 bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              Infrastructure
            </span>
            <h2 className="text-3xl font-bold tracking-tight mt-2 mb-4">
              Per-customer isolation
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Every customer gets three isolated Docker containers on their own
              bridge network. No shared volumes. No cross-tenant communication.
            </p>
          </div>

          {/* Container diagram - CSS based */}
          <div className="max-w-3xl">
            <div className="rounded-xl border border-border bg-surface-1 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <span className="text-xs font-mono text-muted">
                  your-company.aicommandpost.com
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Mission Control",
                    desc: "Next.js dashboard",
                    security: "Read-only FS, uid 1001, 2GB RAM, 256 PID",
                  },
                  {
                    name: "OpenClaw Gateway",
                    desc: "AI agent runtime",
                    security: "Non-root, token auth, cap_drop ALL",
                  },
                  {
                    name: "SearXNG",
                    desc: "Private search",
                    security: "SHA-pinned, 512MB RAM, 64 PID",
                  },
                ].map((container) => (
                  <div
                    key={container.name}
                    className="rounded-lg border border-border bg-surface-2 p-4"
                  >
                    <h4 className="font-medium text-sm text-foreground mb-1">
                      {container.name}
                    </h4>
                    <p className="text-xs text-muted mb-3">{container.desc}</p>
                    <div className="text-[10px] font-mono text-accent/60 leading-relaxed">
                      {container.security}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-muted">
                <span>Isolated bridge network</span>
                <span className="text-border">|</span>
                <span>Encrypted volumes</span>
                <span className="text-border">|</span>
                <span>Seccomp + AppArmor</span>
                <span className="text-border">|</span>
                <span>Resource limits enforced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              Compliance
            </span>
            <h2 className="text-3xl font-bold tracking-tight mt-2 mb-4">
              Your data, your control
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Full data portability, transparent retention policies, and
              role-based access control. We built CommandPost for the kind of
              customers who read the security page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {compliance.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface-1/50 p-7"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder credential */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted leading-relaxed">
              &ldquo;I spent 20 years in the military and 20 years in
              cybersecurity before building this product. Every architectural
              decision reflects that experience. Your data deserves the same
              level of protection I gave to the systems I spent my career
              defending.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted">
              Anouar Jamali, CISSP - Founder, Steel Motion LLC
            </p>
          </div>
        </div>
      </section>

      <CTA
        headline="Security questions?"
        subtext="We are happy to walk through our security architecture in detail. Ask us anything."
        buttonText="Contact us"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
