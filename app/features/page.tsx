import type { Metadata } from "next";
import FeaturesHero from "../components/features/FeaturesHero";
import FeatureCategory from "../components/features/FeatureCategory";
import FeatureTabs from "../components/features/FeatureTabs";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything your AI Chief of Staff does: dashboard, knowledge management, meeting continuity, decision journal, business pulse, and more.",
};

const categories = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "See everything that matters. Nothing that doesn't.",
    description:
      "A single command center for your entire business. Not another generic dashboard. Built around how you actually work, so you spend less time looking for information and more time acting on it.",
    features: [
      {
        title: "Daily briefings",
        text: "Morning briefing at 7 AM with calendar, priority tasks, stale contacts, vault insights, and weather. Evening review at 9 PM. Weekly summary on Sundays.",
      },
      {
        title: "Business pulse score",
        text: "Weekly 0-100 health score from six weighted components: task velocity, goal progress, contact engagement, content output, inbox health, and decision velocity.",
      },
      {
        title: "Plan board",
        text: "Drag-and-drop Kanban with WIP limits, sprint planning, dependencies, subtasks, story points, labels, and a full activity audit trail on every task.",
      },
      {
        title: "Content studio",
        text: "Multi-platform pipeline with stage workflows. Idea through outline, draft, review, scheduled, and published. Brand voice checking and content calendar included.",
      },
      {
        title: "Analytics",
        text: "LLM cost tracking, activity trends, agent performance metrics, quality approval rates, and monthly budget management with alert thresholds.",
      },
      {
        title: "Command palette",
        text: "Cmd+K opens universal search across vault, tasks, contacts, and content. Navigate anywhere, create anything, trigger any action in two keystrokes.",
      },
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge",
    title: "Your business learns even when you are not paying attention.",
    description:
      "Every piece of research, every meeting insight, every decision - automatically organized and cross-referenced. Surfaced when relevant, searchable when needed.",
    features: [
      {
        title: "Vault architecture",
        text: "Structured as efforts (active, areas, dormant), resources, archives, calendar, decisions, contacts, content, and meetings. Every file indexed with metadata.",
      },
      {
        title: "Inbox pipeline",
        text: "Universal capture point that classifies incoming content into 9 types (task, decision, contact, followup, research, meeting, content, idea, note) with confidence scoring.",
      },
      {
        title: "Progressive summarization",
        text: "Four-layer compression: raw capture, key passages, highlights, summary, executive summary. Notes advance automatically based on how often you access them.",
      },
      {
        title: "Zettel auto-linking",
        text: "Automatic detection of notes sharing two or more tags. Bidirectional links stored and queryable. Maps of Content auto-generated from tag clusters.",
      },
      {
        title: "Spaced repetition",
        text: "Relevant notes surface in your briefings based on recency decay and access frequency. Stale and orphan notes flagged for review or archival.",
      },
      {
        title: "Full workspace browser",
        text: "Three-pane layout with Monaco editor, markdown preview, AI-powered rewrite, version history, file upload, and backup management.",
      },
    ],
  },
  {
    id: "chief-of-staff",
    label: "AI Chief of Staff",
    title: "An employee who anticipates what you need before you ask.",
    description:
      "Not a chatbot that waits for prompts. An autonomous agent running background jobs, processing your inbox, tracking your commitments, and keeping your business moving forward.",
    features: [
      {
        title: "Meeting continuity",
        text: "Pre-meeting: attendee context, last discussions, open commitments. Post-meeting: action items extracted, decisions recorded, contact interactions logged.",
      },
      {
        title: "Decision journal",
        text: "Structured records with context, alternatives, rationale, and confidence. 90-day review prompts. Accuracy analytics track your decision quality over time.",
      },
      {
        title: "Cross-system pipelines",
        text: "Transcripts become knowledge entries. Ideas become tasks. Activities become daily logs. Everything connects without manual effort.",
      },
      {
        title: "CRM with staleness detection",
        text: "Contact database with tier classification (VIP, Client, Network). Automatic alerts when important contacts go quiet. Interaction timeline and auto-enrichment from meetings.",
      },
      {
        title: "Goals and OKRs",
        text: "Quarterly objectives with auto-tracking key results from revenue, content published, contacts, and tasks completed. Progress visualization with trend data.",
      },
      {
        title: "Cron job orchestration",
        text: "Schedule any recurring job with execution history, heatmaps, manual triggers, and failure tracking. Your CoS runs dozens of background tasks automatically.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "Built to the same standards as financial institutions.",
    description:
      "Security is not a feature here. It is the foundation every other feature is built on. Seven layers of defense, each independently hardened.",
    features: [
      {
        title: "Isolated infrastructure",
        text: "Per-customer Docker containers with read-only filesystems, non-root users, dropped capabilities, resource limits, and separate bridge networks.",
      },
      {
        title: "Zero Trust access",
        text: "Cloudflare Access with SSO (Google, Microsoft, email OTP) authenticates before traffic reaches your server. No public login page exists.",
      },
      {
        title: "Application hardening",
        text: "Zod validation on all inputs, parameterized SQL, path traversal prevention, CSP headers, HSTS, and clickjacking protection.",
      },
      {
        title: "AI security",
        text: "Prompt injection detection with 13 regex patterns, content sandboxing, information classification, and memory poisoning protection.",
      },
      {
        title: "Encrypted backups",
        text: "Restic with AES-256 to Backblaze B2. Daily automated backups with 7-day, 4-week, and 6-month retention. Self-service restore from the dashboard.",
      },
      {
        title: "GDPR compliance",
        text: "Full data export as ZIP. Selective export by data type. 14-day deletion cooling period. Secrets auto-redacted from exports.",
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    title: "Works with your existing tools, not against them.",
    description:
      "Webhooks push data to Slack, Notion, or any custom URL. Calendar, transcript, and search integrations work out of the box. No walled garden.",
    features: [
      {
        title: "Messaging channels",
        text: "Telegram, WhatsApp, Discord, Slack, and more via the OpenClaw extension system. Use multiple channels simultaneously.",
      },
      {
        title: "Google Calendar",
        text: "OAuth integration for reading events, extracting meeting links, overload detection, conflict identification, and free block analysis.",
      },
      {
        title: "Meeting transcripts",
        text: "Granola Business API sync with local fallback. Auto-save to vault, action item extraction, and decision capture from transcript content.",
      },
      {
        title: "Webhooks",
        text: "12 event types with JSON, Slack Block Kit, and Markdown payload formats. Per-webhook enable/disable, test, and auto-disable after failures.",
      },
      {
        title: "Search",
        text: "Self-hosted SearXNG meta-search engine for private AI research. Brave Search integration for web content with freshness filters.",
      },
      {
        title: "PWA support",
        text: "Installable web app with service worker, offline caching of dashboard and vault files, and standalone display mode.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-background">
      <FeaturesHero />

      {/* Category nav — tab-style pills */}
      <section
        className="sticky top-16 z-40"
        style={{
          background: "rgba(9, 9, 11, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FeatureTabs categories={categories.map((c) => ({ id: c.id, label: c.label }))} />
        </div>
      </section>

      {/* Feature sections */}
      {categories.map((category, idx) => (
        <div key={category.id}>
          <FeatureCategory category={category} index={idx} />
          {idx < categories.length - 1 && <hr className="section-divider" />}
        </div>
      ))}

      <CTA
        headline="Ready to see it in action?"
        subtext="Request a walkthrough of the Mission Control dashboard and see how your AI Chief of Staff would work for your business."
        buttonText="Start your pilot"
        buttonHref="mailto:anouar@steelmotionllc.ai"
      />
    </div>
  );
}
