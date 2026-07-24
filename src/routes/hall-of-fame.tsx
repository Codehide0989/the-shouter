import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { Trophy, Crown, Medal, Star, Camera, Users, Zap, Award } from "lucide-react";

export const Route = createFileRoute("/hall-of-fame")({
  head: () => ({
    meta: [
      { title: "Hall of Fame — The Shouter" },
      { name: "description", content: "Champions, MVPs, and record-holders across every season of The Shouter." },
      { property: "og:title", content: "Hall of Fame — The Shouter" },
      { property: "og:description", content: "Legendary players, teams and creators enshrined forever." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const SEASONS = ["S5 · 2026", "S4 · 2025", "S3 · 2025", "S2 · 2024", "S1 · 2024"];

const PODIUM = [
  { rank: 2, name: "ghostpixel", team: "Shadow Ops", pts: 11020, medal: "🥈" },
  { rank: 1, name: "shadow#0001", team: "Neon Kings", pts: 12480, medal: "🥇" },
  { rank: 3, name: "nova.exe", team: "Rift Angels", pts: 9870, medal: "🥉" },
];

const CATEGORIES = [
  { icon: Trophy, title: "Tournament Champions", w: "Neon Kings", meta: "Grand Finals · 3-time winner", img: "dash-tournament" },
  { icon: Camera, title: "Top Photographer", w: "shadow#0001", meta: "1,240 featured shots", img: "cover-picbattle" },
  { icon: Star, title: "Top Artist", w: "pixel.exe", meta: "48 legendary drops", img: "cover-artwork" },
  { icon: Users, title: "Top Team", w: "Shadow Ops", meta: "94% season winrate", img: "dash-team" },
  { icon: Zap, title: "MVP", w: "axeman", meta: "12 MVP nods · S5", img: "stat-wins" },
  { icon: Award, title: "World Record", w: "ember", meta: "Fastest bracket clear: 4h 12m", img: "notice-drop" },
];

const TIMELINE = [
  { yr: "2024", ev: "Season 1 launches", body: "First 100 guilds join · 2,400 registered players." },
  { yr: "2024", ev: "Neon Kings crown", body: "First-ever Grand Finals win in a 5-hour series." },
  { yr: "2025", ev: "Art Battle debut", body: "12K submissions, pixel.exe named top artist." },
  { yr: "2025", ev: "Cross-guild sync", body: "Bot deployed to 480 partnered servers." },
  { yr: "2026", ev: "Season 5 all-time high", body: "48K monthly actives, 22 countries represented." },
];

function Page() {
  const [season, setSeason] = useState(SEASONS[0]);

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-6 sm:py-10 space-y-12">
      {/* Champion banner */}
      <div className="relative neo-border neo-shadow-lg rounded-2xl overflow-hidden bg-card min-h-[360px] sm:min-h-[440px]">
        <img src={heroUrl("dash-tournament")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-transparent" />
        {/* Confetti dots */}
        {[...Array(24)].map((_, i) => (
          <span key={i} className="absolute h-2 w-2 rounded-sm rotate-45 neo-border" style={{
            top: `${(i * 37) % 90 + 5}%`, left: `${(i * 53) % 90 + 5}%`,
            background: ["var(--color-primary)", "var(--color-accent)", "var(--color-secondary)"][i % 3],
            animation: `pulse ${2 + (i % 3)}s ease-in-out ${i * 0.1}s infinite`,
          }} />
        ))}
        <span className="absolute top-5 right-5 -rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md px-3 py-2 font-display text-[11px] uppercase">👑 Legends</span>
        <div className="relative p-6 sm:p-10 max-w-2xl">
          <NeoBadge variant="accent">Season 5 · 2026</NeoBadge>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Hall of <span className="text-primary">Fame</span></h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Champions, MVPs, artists and record-holders — enshrined forever across five seasons of The Shouter.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SEASONS.map((s) => (
              <button key={s} onClick={() => setSeason(s)} className={`neo-border rounded-md px-3 py-1.5 text-[11px] font-display uppercase tracking-wide ${season === s ? "bg-primary text-primary-foreground neo-shadow-sm" : "bg-background"}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Podium */}
      <div>
        <SectionHeader eyebrow={season} title="Season Podium" />
        <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end max-w-3xl mx-auto">
          {PODIUM.map((p) => {
            const h = p.rank === 1 ? "h-52 sm:h-72" : p.rank === 2 ? "h-40 sm:h-56" : "h-32 sm:h-44";
            const bg = p.rank === 1 ? "bg-accent text-accent-foreground" : p.rank === 2 ? "bg-secondary text-secondary-foreground" : "bg-primary/80 text-primary-foreground";
            return (
              <div key={p.rank} className="text-center">
                <div className="text-3xl sm:text-5xl mb-2 animate-bounce" style={{ animationDelay: `${p.rank * 100}ms`, animationDuration: "2.4s" }}>{p.medal}</div>
                <NeoCard className="p-3 mb-2">
                  <div className="font-display text-sm sm:text-base truncate">{p.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{p.team}</div>
                  <div className="font-display text-lg sm:text-xl mt-1">{p.pts.toLocaleString()}</div>
                </NeoCard>
                <div className={`neo-border neo-shadow ${bg} ${h} rounded-t-lg grid place-items-center font-display text-4xl sm:text-6xl`}>
                  {p.rank}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category grid — zig-zag */}
      <div>
        <SectionHeader eyebrow="Records" title="Category Winners" subtitle="Every discipline. Every crown." />
        <div className="space-y-4">
          {CATEGORIES.map((c, i) => {
            const I = c.icon;
            const flip = i % 2 === 1;
            return (
              <NeoCard key={c.title} className={`p-0 overflow-hidden grid md:grid-cols-[220px_1fr] ${flip ? "md:[direction:rtl]" : ""}`}>
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[140px] [direction:ltr]">
                  <img src={heroUrl(c.img)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
                  <span className="absolute top-2 left-2 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-lg h-10 w-10 grid place-items-center"><I className="h-5 w-5" /></span>
                </div>
                <div className="p-5 [direction:ltr]">
                  <NeoBadge variant="muted">{c.title}</NeoBadge>
                  <div className="font-display text-xl sm:text-2xl mt-2">{c.w}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.meta}</div>
                  <NeoButton size="sm" variant="ghost" className="mt-3">View history</NeoButton>
                </div>
              </NeoCard>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <SectionHeader eyebrow="History" title="The road so far" />
        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-border before:rounded-full">
          {TIMELINE.map((t, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-6 sm:-left-8 top-1 h-5 w-5 rounded-full bg-primary neo-border neo-shadow-sm" />
              <NeoCard className="p-4">
                <div className="flex items-center gap-2">
                  <NeoBadge variant="accent">{t.yr}</NeoBadge>
                  <div className="font-display text-base sm:text-lg">{t.ev}</div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">{t.body}</p>
              </NeoCard>
            </div>
          ))}
        </div>
      </div>

      {/* Player showcase */}
      <div>
        <SectionHeader eyebrow="Legends" title="Champion Cards" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...PODIUM, { rank: 4, name: "ember", team: "Rift Angels", pts: 9200, medal: "⭐" }, { rank: 5, name: "axeman", team: "Neon Kings", pts: 8940, medal: "⭐" }, { rank: 6, name: "pixel.exe", team: "Art Guild", pts: 8710, medal: "🎨" }].map((p) => (
              <NeoCard key={p.name} className="p-0 overflow-hidden relative">
                <div className="relative h-24 bg-gradient-to-br from-primary/30 to-accent/20">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--color-border) 0 1px, transparent 1px 12px)" }} />
                  <span className="absolute top-2 right-2 neo-border neo-shadow-sm bg-background rounded-md px-2 py-0.5 font-display text-[10px]">#{p.rank}</span>
                  <div className="absolute -bottom-6 left-4 h-14 w-14 rounded-lg neo-border neo-shadow-sm bg-card grid place-items-center text-2xl">{p.medal}</div>
                </div>
                <div className="pt-8 p-4">
                  <div className="font-display text-lg">{p.name}</div>
                  <div className="text-[11px] text-muted-foreground">{p.team}</div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div className="neo-border rounded-md bg-background p-2"><div className="font-display text-sm">{p.pts.toLocaleString()}</div><div className="text-[9px] text-muted-foreground uppercase">Pts</div></div>
                    <div className="neo-border rounded-md bg-background p-2"><div className="font-display text-sm">S{6 - Math.min(p.rank, 5)}</div><div className="text-[9px] text-muted-foreground uppercase">Since</div></div>
                    <div className="neo-border rounded-md bg-background p-2"><div className="font-display text-sm">{100 - p.rank * 3}%</div><div className="text-[9px] text-muted-foreground uppercase">WR</div></div>
                  </div>
                </div>
              </NeoCard>
            ))}
        </div>
      </div>

      {/* Trophy CTA */}
      <NeoCard className="p-6 sm:p-8 relative overflow-hidden bg-accent text-accent-foreground">
        <div className="pointer-events-none absolute -right-16 -bottom-16 opacity-30">
          <Crown className="h-64 w-64" />
        </div>
        <div className="relative">
          <NeoBadge variant="secondary">Your name here</NeoBadge>
          <div className="font-display text-2xl sm:text-3xl mt-2">Ready to be a legend?</div>
          <p className="text-sm mt-2 max-w-md opacity-90">Season 6 registration opens next month. Every crown starts with a single bracket.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <NeoButton variant="primary"><Medal className="h-4 w-4" /> Register squad</NeoButton>
            <NeoButton variant="ghost">See rules</NeoButton>
          </div>
        </div>
      </NeoCard>
    </div>
  );
}
