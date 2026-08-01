import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { Trophy, Search, TrendingUp, TrendingDown, Minus, Coins, Star, Camera, Palette } from "lucide-react";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — The Shouter" },
      { name: "description", content: "Global, seasonal and category leaderboards updated every 60 seconds." },
      { property: "og:title", content: "Leaderboard — The Shouter" },
      { property: "og:description", content: "Global, seasonal and category leaderboards updated every 60 seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const SCOPES = ["Global", "Season", "Weekly", "Monthly", "Yearly"] as const;
const CATS = [
  { k: "xp", label: "XP", icon: Star },
  { k: "wins", label: "Tournament", icon: Trophy },
  { k: "art", label: "Artwork", icon: Palette },
  { k: "photo", label: "Photography", icon: Camera },
  { k: "coins", label: "Coins", icon: Coins },
] as const;

const PLAYERS = Array.from({ length: 22 }, (_, i) => {
  const trend = i % 3 === 0 ? "up" : i % 3 === 1 ? "down" : "flat";
  const names = ["shadow#0001", "ghostpixel", "nova.exe", "ember", "axeman", "pixel.exe", "captain", "riot.god", "meme.god", "atlas", "kira", "vex", "zenith", "orion", "flux", "raze", "lyric", "wren", "juno", "nyx", "sable", "prism"];
  return {
    rank: i + 1,
    prev: i + 1 + (trend === "up" ? 3 : trend === "down" ? -2 : 0),
    name: names[i],
    team: ["Neon Kings", "Shadow Ops", "Rift Angels", "Art Guild"][i % 4],
    xp: Math.round(12480 - i * 430 + Math.sin(i) * 200),
    wr: Math.max(30, 78 - i * 2),
    badges: 8 - Math.floor(i / 4),
    trend,
  };
});

function Page() {
  const [scope, setScope] = useState<(typeof SCOPES)[number]>("Global");
  const [cat, setCat] = useState<(typeof CATS)[number]["k"]>("xp");
  const [q, setQ] = useState("");
  const filtered = PLAYERS.filter((p) => p.name.includes(q.toLowerCase()));
  const top3 = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-6 sm:py-10 space-y-10">
      {/* Split hero: title left, mini-podium right */}
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative neo-border neo-shadow-lg rounded-2xl overflow-hidden bg-card p-6 sm:p-8 min-h-[280px]">
          <img src={heroUrl("stat-wins")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent" />
          <div className="relative">
            <NeoBadge variant="accent">Live · updates every 60s</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Leaderboard</h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">Every kill, drop, upvote and check-in ranked across the community.</p>
            <div className="mt-4 flex gap-1 flex-wrap">
              {SCOPES.map((s) => (
                <button key={s} onClick={() => setScope(s)} className={`neo-border rounded-md px-3 py-1.5 text-[11px] font-display uppercase tracking-wide ${scope === s ? "bg-primary text-primary-foreground neo-shadow-sm" : "bg-background"}`}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Mini podium with rank artwork */}
        <div className="grid grid-cols-3 gap-2 items-end">
          {[top3[1], top3[0], top3[2]].filter(Boolean).map((p, idx) => {
            const rank = p.rank;
            const heights = ["h-28 sm:h-36", "h-36 sm:h-48", "h-20 sm:h-28"];
            const art = rank === 1 ? "rank-gold" : rank === 2 ? "rank-silver" : "rank-bronze";
            const bg = rank === 1 ? "bg-accent text-accent-foreground" : rank === 2 ? "bg-secondary text-secondary-foreground" : "bg-primary/80 text-primary-foreground";
            return (
              <div key={p.name} className="min-w-0">
                <NeoCard className="p-0 mb-2 overflow-hidden text-center">
                  <div className="relative bg-muted/40 border-b-[3px] border-border">
                    <img
                      src={heroUrl(art)}
                      alt={`Rank ${rank} medal`}
                      loading="lazy"
                      width={768}
                      height={768}
                      className={`mx-auto object-contain ${rank === 1 ? "h-20 sm:h-24" : "h-14 sm:h-20"}`}
                    />
                    <span className="absolute top-1 left-1 neo-border bg-card rounded-md px-1.5 text-[10px] font-display">#{rank}</span>
                  </div>
                  <div className="p-2">
                    <div className="font-display text-xs truncate">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground">{p.xp.toLocaleString()}</div>
                  </div>
                </NeoCard>
                <div className={`neo-border neo-shadow ${bg} ${heights[idx]} rounded-t-lg grid place-items-center font-display text-3xl sm:text-5xl`}>{rank}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top 3 spotlight */}
      {top3.length === 3 && (
        <div className="grid gap-4 sm:grid-cols-3">
          {top3.map((p) => {
            const art = p.rank === 1 ? "rank-gold" : p.rank === 2 ? "rank-silver" : "rank-bronze";
            const label = p.rank === 1 ? "Champion" : p.rank === 2 ? "Runner-up" : "Third place";
            return (
              <NeoCard key={p.name} className="p-0 overflow-hidden transition-transform hover:-translate-y-1">
                <div className="relative h-40 bg-muted/40 border-b-[3px] border-border grid place-items-center">
                  <img src={heroUrl(art)} alt={`${label} medal`} loading="lazy" width={768} height={768} className="h-32 w-auto object-contain" />
                  <span className="absolute top-2 left-2"><NeoBadge variant={p.rank === 1 ? "accent" : p.rank === 2 ? "secondary" : "muted"}>{label}</NeoBadge></span>
                </div>
                <div className="p-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <div className="min-w-0">
                    <div className="font-display text-lg truncate">{p.name}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{p.team} · {p.wr}% winrate</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-lg">{p.xp.toLocaleString()}</div>
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground">XP</div>
                  </div>
                </div>
              </NeoCard>
            );
          })}
        </div>
      )}

      {/* Category tabs — horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
        {CATS.map((c) => {
          const I = c.icon;
          const active = c.k === cat;
          return (
            <button key={c.k} onClick={() => setCat(c.k)} className={`shrink-0 neo-border neo-shadow-sm rounded-lg px-4 py-2 font-display text-[11px] uppercase tracking-wide flex items-center gap-2 transition-transform hover:-translate-y-0.5 ${active ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <I className="h-3.5 w-3.5" /> {c.label}
            </button>
          );
        })}
      </div>

      {/* Search + table */}
      <div className="neo-border neo-shadow-sm rounded-xl bg-card overflow-hidden">
        <div className="p-3 sm:p-4 border-b-[3px] border-border flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find player…" className="w-full neo-border bg-background rounded-md pl-9 pr-3 py-2 text-sm" />
          </div>
          <div className="text-[11px] text-muted-foreground">Showing <b className="text-foreground">{filtered.length}</b> of {PLAYERS.length} · {scope} · {CATS.find((c) => c.k === cat)?.label}</div>
        </div>
        <div className="divide-y-[3px] divide-border">
          {rest.map((p) => {
            const delta = p.prev - p.rank;
            return (
              <div key={p.name} className="p-3 sm:p-4 grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto_auto] items-center gap-3 sm:gap-6 hover:bg-muted/40 transition-colors group">
                <div className="w-10 sm:w-12 text-center">
                  <div className="font-display text-xl sm:text-2xl leading-none">{p.rank}</div>
                  <div className={`text-[10px] mt-1 flex items-center justify-center gap-0.5 ${p.trend === "up" ? "text-[color:var(--success)]" : p.trend === "down" ? "text-destructive" : "text-muted-foreground"}`}>
                    {p.trend === "up" ? <TrendingUp className="h-3 w-3" /> : p.trend === "down" ? <TrendingDown className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                    {Math.abs(delta) || "—"}
                  </div>
                </div>
                <div className="min-w-0 flex items-center gap-3">
                  <span className="neo-border neo-shadow-sm bg-secondary text-secondary-foreground h-10 w-10 rounded-lg grid place-items-center font-display text-sm shrink-0">{p.name.slice(0, 2).toUpperCase()}</span>
                  <div className="min-w-0">
                    <div className="font-display text-sm truncate">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground truncate">{p.team}</div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="font-display text-base">{p.wr}%</div>
                  <div className="text-[10px] text-muted-foreground uppercase">Winrate</div>
                </div>
                <div className="hidden sm:flex gap-0.5">
                  {[...Array(p.badges)].map((_, i) => (<span key={i} className="h-2 w-2 rounded-full bg-accent neo-border" />))}
                </div>
                <div className="text-right">
                  <div className="font-display text-base sm:text-lg">{p.xp.toLocaleString()}</div>
                  <div className="text-[10px] text-muted-foreground uppercase">XP</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Movers */}
      <div>
        <SectionHeader eyebrow="Momentum" title="Rank movers this week" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLAYERS.filter((p) => p.trend === "up").slice(0, 4).map((p) => (
            <NeoCard key={p.name} className="p-4 relative overflow-hidden">
              <span className="absolute top-2 right-2 neo-border neo-shadow-sm bg-[color:var(--success)] text-black rounded-md px-1.5 py-0.5 text-[10px] font-display uppercase flex items-center gap-0.5"><TrendingUp className="h-3 w-3" /> +{Math.max(1, p.prev - p.rank)}</span>
              <div className="font-display text-lg">{p.name}</div>
              <div className="text-[11px] text-muted-foreground">{p.team}</div>
              <div className="mt-3 h-2 w-full neo-border rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary transition-all duration-700" style={{ width: `${p.wr}%` }} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-1 uppercase">Winrate {p.wr}%</div>
            </NeoCard>
          ))}
        </div>
      </div>

      {/* Server CTA */}
      <NeoCard className="p-6 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-accent/40 neo-border" />
        <div className="relative flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Climb</div>
            <div className="font-display text-xl sm:text-2xl">Join the ranked pool</div>
          </div>
          <NeoButton variant="accent">Link Discord →</NeoButton>
        </div>
      </NeoCard>
    </div>
  );
}
