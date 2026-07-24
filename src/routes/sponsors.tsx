import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { Trophy, Star, Crown, Gem, Users, Eye, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — The Shouter" },
      { name: "description", content: "Sponsor tiers, benefits, audience reach, and application to back The Shouter." },
      { property: "og:title", content: "Sponsors — The Shouter" },
      { property: "og:description", content: "Sponsor tiers, benefits, audience reach, and application to back The Shouter." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sponsors" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sponsors" }],
  }),
  component: Page,
});

const FEATURED = [
  { name: "PixelForge Studio", tier: "Diamond", since: "2024", blurb: "Season 4 Art Battle title sponsor.", hero: "cover-artwork" },
  { name: "Neon Arena", tier: "Platinum", since: "2025", blurb: "Grand Finals LAN venue partner.", hero: "cover-tournament" },
  { name: "Shoutcast Radio", tier: "Gold", since: "2026", blurb: "Weekly recap show sponsor.", hero: "notice-drop" },
];

const CURRENT = [
  { name: "Cloudflare", tier: "Platinum" },
  { name: "Neon Postgres", tier: "Gold" },
  { name: "Upstash", tier: "Gold" },
  { name: "Riot Community", tier: "Silver" },
  { name: "SupercellHub", tier: "Silver" },
  { name: "TwitchWaves", tier: "Silver" },
  { name: "Zapier", tier: "Bronze" },
  { name: "Notion", tier: "Bronze" },
];

const PAST = ["OldSchool GG", "Byte Battles", "PixelCup", "Skirmish.gg", "Cratebox"];

const PACKAGES = [
  { name: "Bronze", price: "$500/mo", icon: Star, tint: "from-secondary/30", perks: ["Logo on /sponsors", "Monthly Discord shoutout", "Bronze badge on events"] },
  { name: "Silver", price: "$1,500/mo", icon: Trophy, tint: "from-accent/30", perks: ["Everything in Bronze", "Weekly Discord ping", "Sponsored event slot / quarter", "Newsletter mention"] },
  { name: "Gold", price: "$4,000/mo", icon: Crown, tint: "from-primary/30", perks: ["Everything in Silver", "Dedicated podcast segment", "Branded tournament", "Homepage carousel"] },
  { name: "Platinum", price: "$10,000/mo", icon: Gem, tint: "from-accent/40", perks: ["Everything in Gold", "Grand Finals title co-brand", "Custom Discord bot skin", "Onstage LAN mention"] },
  { name: "Diamond", price: "Talk to us", icon: Gem, tint: "from-primary/40", perks: ["Everything in Platinum", "Season title sponsorship", "Co-designed events", "Executive Discord AMA"] },
];

const AUDIENCE = [
  { n: "48K", l: "Monthly active users" },
  { n: "480", l: "Discord guilds" },
  { n: "12.4K", l: "Ranked players" },
  { n: "2.1M", l: "Reactions / mo" },
  { n: "22", l: "Countries" },
  { n: "18-34", l: "Core age" },
];

const BENEFITS = [
  { icon: Eye, title: "Massive reach", desc: "Above-the-fold placement across dashboards, event pages and Discord embeds." },
  { icon: Users, title: "Engaged audience", desc: "Not passive views — active gamers, creators, and event organizers." },
  { icon: MessageCircle, title: "Native integration", desc: "Bot commands, custom embeds, and channel takeovers that don't feel like ads." },
  { icon: Trophy, title: "Category exclusivity", desc: "Gold+ tiers lock out direct competitors in your vertical." },
];

const TIER_STYLE: Record<string, "accent" | "primary" | "secondary" | "muted"> = {
  Diamond: "accent", Platinum: "primary", Gold: "primary", Silver: "secondary", Bronze: "muted",
};

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Hero — full-bleed collage */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("dash-rewards")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <span className="absolute top-4 right-4 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-16 w-16 grid place-items-center font-display text-[10px] uppercase text-center leading-none">
          Back<br/>The Shout
        </span>
        <div className="relative p-6 sm:p-10 max-w-3xl">
          <NeoBadge variant="accent">Sponsor</NeoBadge>
          <h1 className="font-display text-3xl sm:text-6xl mt-3 leading-none">Put your brand in the arena.</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
            48K monthly gamers, 480 Discord guilds, and one bracket that everyone's watching. Sponsors get above-the-fold everything — dashboards, embeds, finals stage.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <NeoButton variant="primary"><Trophy className="h-4 w-4" /> View packages</NeoButton>
            <Link to="/contact"><NeoButton variant="ghost">Contact sales <ArrowRight className="h-3.5 w-3.5" /></NeoButton></Link>
          </div>
        </div>
      </div>

      {/* Featured sponsors — magazine layout */}
      <div>
        <SectionHeader eyebrow="Featured" title="Season 4 headliners" />
        <div className="grid gap-4 lg:grid-cols-3">
          {FEATURED.map((f) => (
            <NeoCard key={f.name} className="p-0 overflow-hidden h-full transition-transform hover:-translate-y-1 hover:neo-shadow-lg">
              <div className="relative h-40 overflow-hidden border-b-[3px] border-border">
                <img src={heroUrl(f.hero)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
                <div className="absolute top-3 left-3"><NeoBadge variant={TIER_STYLE[f.tier]}>{f.tier}</NeoBadge></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="font-display text-xl">{f.name}</div>
                  <div className="text-[11px] text-muted-foreground">Sponsor since {f.since}</div>
                </div>
              </div>
              <div className="p-4 text-sm text-muted-foreground">{f.blurb}</div>
            </NeoCard>
          ))}
        </div>
      </div>

      {/* Audience stats */}
      <div>
        <SectionHeader eyebrow="Audience" title="Who you'll reach" />
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {AUDIENCE.map((a) => (
            <NeoCard key={a.l} className="p-4 text-center h-full">
              <div className="font-display text-2xl sm:text-3xl">{a.n}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{a.l}</div>
            </NeoCard>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div>
        <SectionHeader eyebrow="Tiers" title="Sponsorship packages" subtitle="Every tier includes exit anytime, monthly invoicing, and quarterly performance report." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PACKAGES.map((p) => {
            const Icon = p.icon;
            return (
              <NeoCard key={p.name} className="p-0 overflow-hidden h-full transition-transform hover:-translate-y-1 hover:neo-shadow-lg">
                <div className={`relative h-20 bg-gradient-to-br ${p.tint} to-background border-b-[3px] border-border grid place-items-center`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="p-4">
                  <div className="font-display text-lg">{p.name}</div>
                  <div className="text-sm font-display text-accent mt-1">{p.price}</div>
                  <ul className="mt-3 space-y-1.5">
                    {p.perks.map((k) => (
                      <li key={k} className="flex gap-1.5 text-[11px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5 text-[color:var(--success)]" /> {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </NeoCard>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <SectionHeader eyebrow="Why sponsor" title="Beyond a logo on a page" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <NeoCard key={b.title} className="p-5 h-full">
                <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md h-10 w-10 grid place-items-center rotate-[-4deg] inline-flex">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="font-display text-lg mt-3">{b.title}</div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
              </NeoCard>
            );
          })}
        </div>
      </div>

      {/* Current + Past */}
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeader eyebrow="Now" title="Current sponsors" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CURRENT.map((c) => (
              <NeoCard key={c.name} className="p-4 text-center h-full">
                <div className="font-display text-sm">{c.name}</div>
                <NeoBadge className="mt-2" variant={TIER_STYLE[c.tier]}>{c.tier}</NeoBadge>
              </NeoCard>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Alumni" title="Past sponsors" />
          <NeoCard className="p-4">
            <div className="flex flex-wrap gap-2">
              {PAST.map((p) => <NeoBadge key={p} variant="muted">{p}</NeoBadge>)}
            </div>
          </NeoCard>
        </div>
      </div>

      {/* Application form */}
      <NeoCard className="p-6 sm:p-8 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/40 neo-border" />
        <div className="relative grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Apply</div>
            <div className="font-display text-3xl mt-1">Sponsor The Shouter</div>
            <p className="text-sm opacity-90 mt-2">We reply within 48h with a tailored deck. Category exclusivity is first-come.</p>
          </div>
          <form className="grid gap-3 sm:grid-cols-2">
            <input placeholder="Brand name" className="neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
            <input placeholder="Your name" className="neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
            <input placeholder="Contact email" type="email" className="sm:col-span-2 neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
            <select className="neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm">
              <option>Interested tier — Bronze</option>
              <option>Silver</option><option>Gold</option><option>Platinum</option><option>Diamond</option>
            </select>
            <input placeholder="Budget range" className="neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
            <textarea placeholder="Goals / campaign idea" rows={3} className="sm:col-span-2 neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
            <NeoButton type="button" variant="accent" className="sm:col-span-2">Send application</NeoButton>
          </form>
        </div>
      </NeoCard>
    </div>
  );
}
