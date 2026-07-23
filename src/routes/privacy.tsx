import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { Cookie, Database, KeyRound, Eye, Share2, Trash2 } from "lucide-react";
import heroUrl from "@/assets/privacy-hero.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Shouter" },
      { name: "description", content: "How The Shouter collects, uses, and protects your data." },
      { property: "og:title", content: "Privacy Policy — The Shouter" },
      { property: "og:description", content: "Transparent, plain-English privacy for The Shouter Discord event platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    icon: Database,
    title: "01 · What we collect",
    body: "Your Discord ID, username, avatar, server memberships you opt in with, and any event submissions you upload. We don't ask for phone numbers, addresses, or passwords.",
  },
  {
    icon: KeyRound,
    title: "02 · How we use it",
    body: "To run events, verify teams, post live updates to your server, and show your name on leaderboards. That's it — no ad targeting, no shadow selling.",
  },
  {
    icon: Share2,
    title: "03 · Sharing",
    body: "We share data with Discord (obviously) and hosting infrastructure we run this platform on. We never sell your data to third parties.",
  },
  {
    icon: Cookie,
    title: "04 · Cookies",
    body: "We store a small session cookie so you stay signed in, plus a theme preference so the site remembers your seasonal vibe. No third-party ad cookies.",
  },
  {
    icon: Eye,
    title: "05 · Your rights",
    body: "You can view, export, or delete your data any time from Settings. GDPR/DPDP-friendly requests are honoured within 30 days.",
  },
  {
    icon: Trash2,
    title: "06 · Deletion",
    body: "Deleting your account removes your profile, teams, and submissions. Leaderboards keep an anonymised placeholder so old brackets still add up.",
  },
];

function Privacy() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="relative neo-border neo-shadow rounded-lg overflow-hidden bg-card">
        <img src={heroUrl} alt="Bold padlock shield guarding cookies and data" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="relative p-6 sm:p-10 max-w-xl">
          <NeoBadge variant="accent">Last updated July 2026</NeoBadge>
          <h1 className="text-4xl sm:text-5xl mt-3">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No dark patterns. No creepy tracking. Just the data we need to run loud events on Discord.
          </p>
        </div>
      </div>

      <SectionHeader eyebrow="Data Handling" title="What we do with your info" />

      <div className="grid gap-4 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <NeoCard key={s.title} className="flex gap-4">
            <div className="neo-border bg-accent text-accent-foreground rounded-md p-2 h-fit">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg leading-tight">{s.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{s.body}</p>
            </div>
          </NeoCard>
        ))}
      </div>

      <NeoCard className="mt-8 bg-primary text-primary-foreground">
        <h2 className="font-display text-xl">Contact the admins</h2>
        <p className="text-sm mt-2">
          Have a privacy request or a security concern? Open a ticket in the Discord server or DM an admin — we reply within 3 working days.
        </p>
      </NeoCard>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/terms"><NeoBadge variant="muted">Read Terms & Conditions →</NeoBadge></Link>
        <Link to="/settings"><NeoBadge variant="secondary">Manage your data →</NeoBadge></Link>
      </div>
    </div>
  );
}
