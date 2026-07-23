import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { Cookie, Database, KeyRound, Eye, Share2, Trash2, ShieldCheck, Baby } from "lucide-react";
import heroUrl from "@/assets/privacy-hero.jpg";
import imgCollect from "@/assets/priv-collect.jpg";
import imgUse from "@/assets/priv-use.jpg";
import imgShare from "@/assets/priv-share.jpg";
import imgCookies from "@/assets/priv-cookies.jpg";
import imgRights from "@/assets/priv-rights.jpg";
import imgDelete from "@/assets/priv-delete.jpg";
import imgSecurity from "@/assets/priv-security.jpg";
import imgChildren from "@/assets/priv-children.jpg";

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
    img: imgCollect,
    tint: "bg-primary text-primary-foreground",
    title: "01 · What we collect",
    body: "Your Discord ID, username, avatar, server memberships you opt in with, and any event submissions you upload. We don't ask for phone numbers, addresses, or passwords.",
  },
  {
    icon: KeyRound,
    img: imgUse,
    tint: "bg-accent text-accent-foreground",
    title: "02 · How we use it",
    body: "To run events, verify teams, post live updates to your server, and show your name on leaderboards. That's it — no ad targeting, no shadow selling.",
  },
  {
    icon: Share2,
    img: imgShare,
    tint: "bg-secondary text-secondary-foreground",
    title: "03 · Sharing",
    body: "We share data with Discord (obviously) and the hosting infrastructure we run this platform on. We never sell your data to third parties or ad networks.",
  },
  {
    icon: Cookie,
    img: imgCookies,
    tint: "bg-primary text-primary-foreground",
    title: "04 · Cookies",
    body: "We store a small session cookie so you stay signed in, plus a theme preference so the site remembers your seasonal vibe. No third-party ad cookies.",
  },
  {
    icon: Eye,
    img: imgRights,
    tint: "bg-accent text-accent-foreground",
    title: "05 · Your rights",
    body: "You can view, export, or delete your data any time from Settings. GDPR/DPDP-friendly requests are honoured within 30 days — no forms, no phone calls.",
  },
  {
    icon: Trash2,
    img: imgDelete,
    tint: "bg-secondary text-secondary-foreground",
    title: "06 · Deletion",
    body: "Deleting your account removes your profile, teams, and submissions. Leaderboards keep an anonymised placeholder so old brackets still add up.",
  },
  {
    icon: ShieldCheck,
    img: imgSecurity,
    tint: "bg-primary text-primary-foreground",
    title: "07 · Security",
    body: "All traffic is TLS-encrypted end to end. Tokens rotate on every session, and admin actions require Discord 2FA. We disclose breaches within 72 hours.",
  },
  {
    icon: Baby,
    img: imgChildren,
    tint: "bg-accent text-accent-foreground",
    title: "08 · Age & children",
    body: "The Shouter is 13+ (16+ in the EU) in line with Discord's ToS. If we learn an underage account slipped in, we remove it and wipe the data.",
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

      <div className="grid gap-5 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <NeoCard key={s.title} className="overflow-hidden p-0">
            <div className="relative h-40 neo-border-b border-b-4 border-border overflow-hidden bg-muted">
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
