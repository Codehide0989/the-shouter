import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { FileText, Users, ShieldAlert, Gavel, Ban, Sparkles, AlertTriangle, Scale } from "lucide-react";
import heroUrl from "@/assets/terms-hero.jpg";
import imgAccept from "@/assets/terms-accept.jpg";
import imgAccount from "@/assets/terms-account.jpg";
import imgContent from "@/assets/terms-content.jpg";
import imgFair from "@/assets/terms-fair.jpg";
import imgProhibited from "@/assets/terms-prohibited.jpg";
import imgPrizes from "@/assets/terms-prizes.jpg";
import imgLiability from "@/assets/terms-liability.jpg";
import imgLaw from "@/assets/terms-law.jpg";

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
    img: imgAccept,
    tint: "bg-primary text-primary-foreground",
    title: "01 · Acceptance",
    body: "By joining an event, verifying your Discord, or clicking a big loud button on this site, you agree to these terms. If you don't, don't press the button.",
  },
  {
    icon: Users,
    img: imgAccount,
    tint: "bg-accent text-accent-foreground",
    title: "02 · Your Account",
    body: "You're responsible for your Discord handle, your squad, and every message the bot posts on your behalf. Share credentials, share the blame.",
  },
  {
    icon: Sparkles,
    img: imgContent,
    tint: "bg-secondary text-secondary-foreground",
    title: "03 · Submissions & Content",
    body: "Artwork, screenshots, and clips you upload stay yours. You grant The Shouter a license to display them inside event pages, leaderboards, and social recaps.",
  },
  {
    icon: Gavel,
    img: imgFair,
    tint: "bg-primary text-primary-foreground",
    title: "04 · Fair Play",
    body: "Cheats, alt accounts, brigading, and match-fixing get you kicked from the event and the server. Admin decisions on fair play are final.",
  },
  {
    icon: Ban,
    img: imgProhibited,
    tint: "bg-accent text-accent-foreground",
    title: "05 · Prohibited Conduct",
    body: "No harassment, hate speech, doxxing, or illegal content — on Discord, in submissions, or in event chats. Zero tolerance, immediate ban.",
  },
  {
    icon: ShieldAlert,
    img: imgPrizes,
    tint: "bg-secondary text-secondary-foreground",
    title: "06 · Prizes & Rewards",
    body: "Prizes are awarded to verified winners only. Rewards may change based on sponsor availability. We may withhold prizes if fair play rules were broken.",
  },
  {
    icon: AlertTriangle,
    img: imgLiability,
    tint: "bg-primary text-primary-foreground",
    title: "07 · Liability & Service",
    body: "The platform ships as-is. Downtime, missed pings, or Discord outages happen — we'll fix them fast, but we can't be held liable for lost matches or bragging rights.",
  },
  {
    icon: Scale,
    img: imgLaw,
    tint: "bg-accent text-accent-foreground",
    title: "08 · Governing Law",
    body: "These terms are governed by international arbitration norms and the local laws of the operator. Disputes go to a friendly chat first, courts only as a last resort.",
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

      <div className="grid gap-5 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <NeoCard key={s.title} className="overflow-hidden p-0">
            <div className="relative h-40 border-b-4 border-border overflow-hidden bg-muted">
              <img src={s.img} alt="" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              <div className={`absolute top-3 left-3 neo-border rounded-md p-2 ${s.tint}`}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="p-4">
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
