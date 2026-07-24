import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Handshake, Cpu, Gamepad2, Users, Newspaper, Plug, Sparkles, CheckCircle2, ArrowRight,
  Camera, Radio, Trophy, Palette, Rocket, Globe2, Zap,
} from "lucide-react";
import { PARTNERS, type Partner, PARTNER_BENEFITS } from "@/lib/partners-data";

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

const CAT_ICON: Record<string, typeof Cpu> = {
  Featured: Sparkles, Technology: Cpu, Gaming: Gamepad2,
  Community: Users, Media: Newspaper, Integration: Plug,
};

const BENEFIT_ICON: Record<string, typeof Sparkles> = {
  Sparkles, Radio, Camera, Trophy, Palette, Rocket, Globe2, Zap,
  Users, Cpu, Newspaper, Plug, Handshake,
};

function TierPill({ tier }: { tier: Partner["tier"] }) {
  const cls = tier === "Featured" ? "accent" : tier === "Technology" ? "primary" : tier === "Gaming" ? "secondary" : "muted";
  return <NeoBadge variant={cls as never}>{tier}</NeoBadge>;
}

const REQUIREMENTS = [
  "Active Discord server (≥ 1K members) or shipping product/service in the gaming/creator space",
  "Alignment with community guidelines — no hate, harassment, or predatory monetization",
  "Willing to co-market at least one event or campaign per quarter",
  "Verified brand identity (domain, socials, or Discord partner badge)",
];

function Page() {
  const [tier, setTier] = useState<Partner["tier"] | "All">("All");
  const filtered = tier === "All" ? PARTNERS : PARTNERS.filter((p) => p.tier === tier);
  const tiers: (Partner["tier"] | "All")[] = ["All", "Featured", "Technology", "Gaming", "Community", "Media", "Integration"];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Hero */}
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

      {/* Partners grid — richer cards with cover art */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const CatIcon = CAT_ICON[p.tier] ?? Handshake;
          return (
            <Link
              key={p.slug}
              to="/partners/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <NeoCard className="p-0 overflow-hidden h-full transition-transform hover:-translate-y-1 hover:neo-shadow-lg">
                {/* Cover */}
                <div className="relative h-36 overflow-hidden border-b-[3px] border-border">
                  <img src={heroUrl(p.cover)} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.tint} to-background/85`} />
                  {p.featured && (
                    <span className="absolute -top-1 -left-1 rotate-[-6deg] neo-border neo-shadow-sm bg-accent text-accent-foreground font-display text-[10px] uppercase tracking-widest px-2 py-1">
                      ★ Featured
                    </span>
                  )}
                  <div className="absolute top-3 right-3"><TierPill tier={p.tier} /></div>
                  {/* Logo mark */}
                  <div className="absolute -bottom-6 left-4 neo-border neo-shadow-sm bg-card rounded-md h-14 w-14 grid place-items-center font-display text-lg">
                    {p.mark}
                  </div>
                </div>
                <div className="pt-9 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-base">{p.name}</div>
                    <CatIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.blurb}</p>
                  {/* Mini stat row */}
                  <div className="pt-2 mt-2 border-t-2 border-border/60 flex items-center justify-between text-[10px] font-display uppercase tracking-widest text-muted-foreground">
                    <span>Since {p.since}</span>
                    <span className="inline-flex items-center gap-1 group-hover:text-foreground">
                      View <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </NeoCard>
            </Link>
          );
        })}
      </div>

      {/* Benefits — Bento */}
      <div>
        <SectionHeader eyebrow="Why partner" title="What you get" subtitle="Every partnership ships with real distribution, real integrations and real audiences." />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
          {PARTNER_BENEFITS.map((b, i) => {
            const Icon = BENEFIT_ICON[b.icon] ?? Sparkles;
            // Bento sizing: first item spans 2 cols on lg, third spans 2 rows
            const span =
              i === 0 ? "lg:col-span-2" :
              i === 3 ? "lg:row-span-2" :
              "";
            return (
              <NeoCard key={b.title} className={`p-0 overflow-hidden h-full transition-transform hover:-translate-y-1 ${span}`}>
                <div className="relative h-32 sm:h-36 overflow-hidden border-b-[3px] border-border">
                  <img src={heroUrl(b.cover)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.tint} to-background/80`} />
                  <span className="absolute top-3 left-3 neo-border neo-shadow-sm bg-background rounded-md h-10 w-10 grid place-items-center rotate-[-4deg]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="absolute top-3 right-3 font-display text-[10px] uppercase tracking-widest bg-background/85 px-2 py-1 rounded-md neo-border">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="font-display text-lg leading-tight">{b.title}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
                </div>
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
