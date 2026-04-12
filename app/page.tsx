export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF3B30] rounded-lg flex items-center justify-center font-bold text-sm">SM</div>
          <span className="font-semibold text-lg">Steel Motion</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-400 mb-6">
          Veteran-Owned &middot; Security-First &middot; AI-Powered
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Your AI Chief of Staff.
          <br />
          <span className="text-[#FF3B30]">Working 24/7.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A managed AI employee that runs on your own server, manages your tasks,
          processes your meetings, and sends you a briefing every morning -
          before you have had your coffee.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#FF3B30] text-white font-semibold rounded-lg hover:bg-[#E0352B] transition text-sm"
          >
            Request Early Access
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition text-sm"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          Built by a cybersecurity veteran. Enterprise-grade security. Your data never leaves your server.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">What Your AI Chief of Staff Does</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Not a chatbot. An actual digital employee that works in the background,
          anticipates your needs, and keeps your business running.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Morning Briefings", desc: "Every morning at 7 AM, your CoS sends a briefing via Telegram with today's calendar, priority tasks, stale contacts, and vault insights.", icon: "sun" },
            { title: "Knowledge Management", desc: "Every piece of research, every meeting insight, every decision - automatically organized, cross-referenced, and searchable.", icon: "brain" },
            { title: "Meeting Continuity", desc: "Before every meeting: attendee context, last discussions, open commitments. After: action items extracted and tracked.", icon: "handshake" },
            { title: "Task Intelligence", desc: "Kanban board with dependencies, sprints, and a validation pipeline. Your CoS reviews content before you approve it.", icon: "check" },
            { title: "Decision Journal", desc: "Every business decision recorded with context, alternatives, and rationale. 90 days later, review what actually happened.", icon: "chart" },
            { title: "Business Pulse", desc: "Weekly 0-100 health score from task velocity, goal progress, contact engagement, and content output. Trend over months.", icon: "trending" },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-800 bg-[#1A1A1A] hover:border-gray-700 transition">
              <div className="w-10 h-10 rounded-lg bg-[#FF3B30]/10 flex items-center justify-center mb-4">
                <div className="w-5 h-5 rounded-full bg-[#FF3B30]/30" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="p-8 rounded-xl border border-gray-800 bg-[#1A1A1A]">
          <h2 className="text-2xl font-bold mb-6 text-center">Security-First. Not an Afterthought.</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div className="flex gap-3">
              <span className="text-[#FF3B30] font-bold shrink-0">01</span>
              <p><strong className="text-white">Your server, your data.</strong> Every customer gets their own isolated container. Your data never touches our systems or any LLM provider for storage.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF3B30] font-bold shrink-0">02</span>
              <p><strong className="text-white">Encrypted everything.</strong> Disk encryption, TLS in transit, encrypted backups, secrets management. Enterprise-grade from day one.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF3B30] font-bold shrink-0">03</span>
              <p><strong className="text-white">Zero public exposure.</strong> Your dashboard is behind Cloudflare Access with SSO. No login page on the public internet.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF3B30] font-bold shrink-0">04</span>
              <p><strong className="text-white">Cybersecurity veteran.</strong> Built by someone who spent years protecting systems, not someone who learned security from a YouTube tutorial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-gray-400 text-center mb-12">No hidden fees. No per-token charges. One monthly price.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              tier: "Setup", price: "$2K - $5K", period: "one-time",
              desc: "We set up your AI Chief of Staff on your own server.",
              features: ["Dedicated hardened VPS", "Custom personality and business context", "1-2 messaging channels", "3-5 skills installed", "2 hours training", "30-day support"],
            },
            {
              tier: "Managed", price: "$1.5K - $3K", period: "/month",
              desc: "Ongoing management with full second brain.",
              features: ["Everything in Setup", "Morning and evening briefings", "Memory maintenance and optimization", "Custom skill development", "Priority same-day support", "Model costs included"],
              highlight: true,
            },
            {
              tier: "Workforce", price: "$5K - $15K", period: "/month",
              desc: "Multiple AI agents with team access.",
              features: ["Everything in Managed", "Multi-user access (RBAC)", "Multiple specialized agents", "Custom integrations", "Weekly strategy calls", "SLA with uptime guarantee"],
            },
          ].map((p) => (
            <div key={p.tier} className={`p-6 rounded-xl border ${p.highlight ? "border-[#FF3B30] ring-1 ring-[#FF3B30]/20" : "border-gray-800"} bg-[#1A1A1A]`}>
              {p.highlight && <div className="text-xs font-semibold text-[#FF3B30] mb-2">MOST POPULAR</div>}
              <h3 className="text-xl font-bold mb-1">{p.tier}</h3>
              <div className="text-2xl font-bold mb-1">{p.price}<span className="text-sm text-gray-500 font-normal"> {p.period}</span></div>
              <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="text-[#FF3B30] mt-0.5">-</span>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Meet Your AI Chief of Staff?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          We are onboarding a limited number of pilot customers. If you are a solo founder,
          consultant, or small business owner who wants an AI that actually knows your business -
          let us talk.
        </p>
        <a href="mailto:anouar@steelmotionllc.ai" className="inline-block px-8 py-4 bg-[#FF3B30] text-white font-semibold rounded-lg hover:bg-[#E0352B] transition">
          Get in Touch
        </a>
        <p className="text-gray-500 text-sm mt-4">anouar@steelmotionllc.ai</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <p>Steel Motion LLC - Veteran-owned. Dallas, TX.</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
