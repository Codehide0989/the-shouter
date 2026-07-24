import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Handshake, Cpu, Gamepad2, Users, Newspaper, Plug, Sparkles, CheckCircle2, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — The Shouter" },
      { name: "description", content: "Tech, gaming, community, media and integration partners building louder events with us." },
      { property: "og:title", content: "Partners — The Shouter" },
      { property: "og:description", content: "Tech, gaming, community, media and integration partners building louder events with us." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: Page,
});

type Tier = "Featured" | "Technology" | "Gaming" | "Community" | "Media" | "Integration";

const PARTNERS: { name: string; tier: Tier; icon: typeof Cpu; blurb: string; tint: string }[] = [
  { name: "PixelForge Studio", tier: "Featured", icon: Sparkles, blurb: "Indie art collective — 2M followers, sponsors Art Battle Season 4.", tint: "from-accent/30" },
  { name: "Neon Arena", tier: "Featured", icon: Gamepad2, blurb: "LAN tournament chain across 14 cities.", tint: "from-primary/30" },
  { name: "Cloudflare", tier: "Technology", icon: Cpu, blurb: "Global edge network and DDoS shield.", tint: "from-secondary/25" },
  { name: "Neon Postgres", tier: "Technology", icon: Cpu, blurb: "Serverless Postgres with branching.", tint: "from-primary/25" },
  { name: "Upstash Redis", tier: "Technology", icon: Cpu, blurb: "Ultra-low latency KV + realtime pub/sub.", tint: "from-accent/25" },
  { name: "Riot Community", tier: "Gaming", icon: Gamepad2, blurb: "Official partner for League community cups.", tint: "from-primary/30" },
  { name: "SupercellHub", tier: "Gaming", icon: Gamepad2, blurb: "Clash & Brawl bracket integrations.", tint: "from-secondary/30" },
  { name: "Shouters United", tier: "Community", icon: Users, blurb: "12K-member creator alliance.", tint: "from-accent/25" },
  { name: "Discord Devs", tier: "Community", icon: Users, blurb: "Verified bot developer program.", tint: "from-secondary/25" },
  { name: "TwitchWaves", tier: "Media", icon: Newspaper, blurb: "Weekly stream coverage of finals.", tint: "from-primary/25" },
  { name: "The Shoutcast", tier: "Media", icon: Newspaper, blurb: "Podcast network — 480K downloads/mo.", tint: "from-accent/30" },
  { name: "Zapier", tier: "Integration", icon: Plug, blurb: "1000+ downstream automations.", tint: "from-secondary/25" },
  { name: "Notion", tier: "Integration", icon: Plug, blurb: "Auto-sync brackets to team wikis.", tint: "from-primary/20" },
];

const BENEFITS = [
  { icon: Sparkles, title: "Co-branded events", desc: "Custom banners, embeds, and dashboards with your logo front and center." },
  { icon: Users, title: "Audience access", desc: "48K+ monthly active Discord users across 480 partnered guilds." },
  { icon: Cpu, title: "API + webhook priority", desc: "Higher rate limits, early access to new bot endpoints, dedicated support." },
  { icon: Newspaper, title: "Editorial features", desc: "Blog spotlight, podcast slot, and quarterly Shoutcast segment." },
];

const REQUIREMENTS = [
  "Active Discord server (≥ 1K members) or shipping product/service in the gaming/creator space",
  "Alignment with community guidelines — no hate, harassment, or predatory monetization",
  "Willing to co-market at least one event or campaign per quarter",
  "Verified brand identity (domain, socials, or Discord partner badge)",
];

function TierPill({ tier }: { tier: Tier }) {
  const cls = tier === "Featured" ? "accent" : tier === "Technology" ? "primary" : tier === "Gaming" ? "secondary" : "muted";
  return <NeoBadge variant={cls as never}>{tier}</NeoBadge>;
}

function Page() {
  const [tier, setTier] = useState<Tier | "All">("All");
  const filtered = tier === "All" ? PARTNERS : PARTNERS.filter((p) => p.tier === tier);
  const tiers: (Tier | "All")[] = ["All", "Featured", "Technology", "Gaming", "Community", "Media", "Integration"];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Hero — split with sticker */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("dash-team")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        <span className="absolute top-4 right-4 -rotate-6 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-3 py-2 font-display text-xs uppercase">
          🤝 Partners
        </span>
        <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-[2fr_1fr] items-center">
          <div>
            <NeoBadge variant="accent">Grow together</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Louder together.</h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
              {PARTNERS.length} studios, guilds and platforms building bigger events with The Shouter. Bring your community — we amplify it.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <NeoButton variant="primary"><Handshake className="h-4 w-4" /> Become a partner</NeoButton>
              <Link to="/contact"><NeoButton variant="ghost">Talk to us <ArrowRight className="h-3.5 w-3.5" /></NeoButton></Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[{ n: "480", l: "Guilds" }, { n: "48K", l: "Monthly users" }, { n: "22", l: "Countries" }].map((s) => (
              <div key={s.l} className="neo-border neo-shadow-sm bg-background rounded-md p-3">
                <div className="font-display text-2xl">{s.n}</div>
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tier filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {tiers.map((t) => (
          <button key={t} onClick={() => setTier(t)}
            className={`shrink-0 neo-border neo-shadow-sm rounded-md px-3 py-2 text-xs font-display uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
              tier === t ? "bg-primary text-primary-foreground" : "bg-card"
            }`}>
            {t}
          </button>
        ))}
      </div>

      {/* Partners grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const Icon = p.icon;
          return (
            <NeoCard key={p.name} className="p-0 overflow-hidden h-full transition-transform hover:-translate-y-1 hover:neo-shadow-lg">
              <div className={`relative h-24 bg-gradient-to-br ${p.tint} to-background border-b-[3px] border-border`}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, var(--color-border) 0 1px, transparent 1px 10px)",
                }} />
                <div className="absolute -bottom-6 left-4 neo-border neo-shadow-sm bg-card rounded-md h-12 w-12 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="absolute top-2 right-2"><TierPill tier={p.tier} /></div>
              </div>
              <div className="pt-8 p-4 space-y-2">
                <div className="font-display text-base">{p.name}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.blurb}</p>
              </div>
            </NeoCard>
          );
        })}
      </div>

      {/* Benefits */}
      <div>
        <SectionHeader eyebrow="Why partner" title="What you get" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <NeoCard key={b.title} className="p-5 h-full">
                <span className="neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md h-10 w-10 grid place-items-center rotate-[-4deg] inline-flex">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="font-display text-lg mt-3">{b.title}</div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
              </NeoCard>
            );
          })}
        </div>
      </div>

      {/* Requirements + CTA */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <NeoCard className="p-6 sm:p-7">
          <NeoBadge variant="muted">Requirements</NeoBadge>
          <div className="font-display text-2xl mt-3">Who we work with</div>
          <ul className="mt-4 space-y-2.5">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="flex gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--success)] shrink-0 mt-0.5" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </NeoCard>

        <NeoCard className="p-6 sm:p-7 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-accent/40 neo-border" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-widest opacity-80">Apply</div>
            <div className="font-display text-2xl mt-1">Become a partner</div>
            <p className="text-sm opacity-90 mt-2">Tell us your community size, focus, and what you'd co-launch. We reply within 3 days.</p>
            <form className="mt-4 space-y-3">
              <input placeholder="Org / community name" className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
              <input placeholder="Contact email" type="email" className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
              <input placeholder="Discord invite or domain" className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
              <textarea placeholder="What are you looking to build?" rows={3} className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
              <NeoButton type="button" variant="accent" className="w-full">Submit application</NeoButton>
            </form>
          </div>
        </NeoCard>
      </div>
    </div>
  );
}
