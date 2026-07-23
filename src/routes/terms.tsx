import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { FileText, Users, ShieldAlert, Gavel, Ban, Sparkles } from "lucide-react";
import heroUrl from "@/assets/terms-hero.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — The Shouter" },
      { name: "description", content: "The rules of engagement for using The Shouter Discord event platform." },
      { property: "og:title", content: "Terms & Conditions — The Shouter" },
      { property: "og:description", content: "Read the terms of use for events, teams, submissions, and rewards on The Shouter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    icon: FileText,
    title: "01 · Acceptance",
    body: "By joining an event, verifying your Discord, or clicking a big loud button on this site, you agree to these terms. If you don't, don't press the button.",
  },
  {
    icon: Users,
    title: "02 · Your Account",
    body: "You're responsible for your Discord handle, your squad, and every message the bot posts on your behalf. Share credentials, share the blame.",
  },
  {
    icon: Sparkles,
    title: "03 · Submissions & Content",
    body: "Artwork, screenshots, and clips you upload stay yours. You grant The Shouter a license to display them inside event pages, leaderboards, and social recaps.",
  },
  {
    icon: Gavel,
    title: "04 · Fair Play",
    body: "Cheats, alt accounts, brigading, and match-fixing get you kicked from the event and the server. Admin decisions on fair play are final.",
  },
  {
    icon: Ban,
    title: "05 · Prohibited Conduct",
    body: "No harassment, hate speech, doxxing, or illegal content — on Discord, in submissions, or in event chats. Zero tolerance, immediate ban.",
  },
  {
    icon: ShieldAlert,
    title: "06 · Prizes & Rewards",
    body: "Prizes are awarded to verified winners only. Rewards may change based on sponsor availability. We may withhold prizes if fair play rules were broken.",
  },
];

function Terms() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow rounded-lg overflow-hidden bg-card">
        <img src={heroUrl} alt="Stacked contract scrolls with stamp and quill" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="relative p-6 sm:p-10 max-w-xl">
          <NeoBadge variant="accent">Effective July 2026</NeoBadge>
          <h1 className="text-4xl sm:text-5xl mt-3">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The rulebook for everyone stepping into The Shouter arena. Read once, then go win.
          </p>
        </div>
      </div>

      <SectionHeader eyebrow="Ground Rules" title="What you agree to" />

      <div className="grid gap-4 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <NeoCard key={s.title} className="flex gap-4">
            <div className="neo-border bg-primary text-primary-foreground rounded-md p-2 h-fit">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg leading-tight">{s.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{s.body}</p>
            </div>
          </NeoCard>
        ))}
      </div>

      <NeoCard className="mt-8 bg-secondary text-secondary-foreground">
        <h2 className="font-display text-xl">Changes to these terms</h2>
        <p className="text-sm mt-2">
          We may update these terms as new event formats, features, and platforms roll in. Big changes are announced in the Discord and shown on this page with a fresh date.
        </p>
      </NeoCard>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/privacy"><NeoBadge variant="muted">Read Privacy Policy →</NeoBadge></Link>
        <Link to="/rules"><NeoBadge variant="secondary">Event Rules →</NeoBadge></Link>
      </div>
    </div>
  );
}
