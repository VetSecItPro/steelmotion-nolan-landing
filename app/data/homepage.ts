export const painPoints = [
  "Start every morning scrambling through emails, calendar, and Slack",
  "Forget follow-ups until it is too late",
  "Walk into meetings unprepared",
  "Lose track of decisions and commitments",
];

export const gains = [
  "Morning briefing waiting for you at 7 AM with everything you need",
  "Every commitment tracked, every follow-up surfaced automatically",
  "Pre-meeting context with attendee history and open items",
  "Decision journal with 90-day outcome tracking",
];

export const steps = [
  {
    num: "01",
    title: "We learn your business",
    desc: "A 30-minute call to map your workflows, tools, and goals.",
  },
  {
    num: "02",
    title: "We build your CoS",
    desc: "Your AI gets deployed on your own server, configured for your business, connected to your tools. Done in days.",
  },
  {
    num: "03",
    title: "You run your business",
    desc: "Morning briefings, meeting prep, task tracking, knowledge management. All running while you focus on growth.",
  },
];

export const features = [
  {
    title: "Morning briefings",
    desc: "Calendar, priorities, stale contacts, vault insights. Every day at 7 AM.",
  },
  {
    title: "Second brain",
    desc: "Every meeting, decision, and insight organized automatically. Searchable forever.",
  },
  {
    title: "Meeting continuity",
    desc: "Walk in prepared. Walk out with action items tracked.",
  },
  {
    title: "Business pulse",
    desc: "Weekly 0-100 health score. Know exactly where to focus.",
  },
  {
    title: "Custom dashboard",
    desc: "Your command center. Tasks, pipeline, content, contacts, goals - all connected.",
  },
];

export const securityPoints = [
  "Isolated container per customer - your data never touches our systems",
  "AES-256 encrypted backups, TLS in transit, 600-permission secrets",
  "Dashboard behind Cloudflare Zero Trust with SSO - no public login page",
  "Seven layers of defense: edge, auth, network, container, app, AI, data",
];

export const tiers = [
  {
    name: "Setup",
    price: "$3,000",
    interval: "one-time",
    desc: "Your AI Chief of Staff, deployed and configured on your own server.",
    items: [
      "Dedicated hardened VPS",
      "Custom personality and business context",
      "2 hours training + 30-day support",
    ],
    prominent: false,
  },
  {
    name: "Managed",
    price: "$2,000",
    interval: "/month",
    desc: "Daily briefings, memory optimization, custom skills, and all LLM costs included.",
    items: [
      "Everything in Setup",
      "Morning and evening briefings",
      "LLM costs included",
      "Ongoing optimization and tuning",
    ],
    prominent: true,
  },
  {
    name: "Workforce",
    price: "$5,000",
    interval: "/month",
    desc: "Multiple AI agents, team access, custom integrations, and dedicated account management.",
    items: [
      "Everything in Managed",
      "Multi-user RBAC access",
      "Weekly strategy calls + SLA",
      "Custom integrations",
    ],
    prominent: false,
  },
];
