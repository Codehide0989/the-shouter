import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/season-hero.jpg";

export const Route = createFileRoute("/season-pass")({
  head: () => ({
    meta: [
      { title: "Season Pass — The Shouter" },
      { name: "description", content: "90 days, 90 tiers, every drop earned." },
      { property: "og:title", content: "Season 5 Battle Pass — The Shouter" },
      { property: "og:description", content: "Free + Premium tracks, daily missions, and legendary rewards." },
      { property: "og:image", content: "/assets/season-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const CURRENT_TIER = 34;
const MAX_TIER = 90;

const TIER_REWARDS: Array<{ tier: number; free: { i: string; n: string }; premium: { i: string; n: string; legendary?: boolean } }> = [
  { tier: 1, free: { i: "🪙", n: "100 coins" }, premium: { i: "🎨", n: "Frame" } },
  { tier: 5, free: { i: "⚡", n: "XP boost" }, premium: { i: "👤", n: "Avatar" } },
  { tier: 10, free: { i: "🎟️", n: "Raffle" }, premium: { i: "🏷️", n: "Title" } },
  { tier: 15, free: { i: "🪙", n: "250 coins" }, premium: { i: "✨", n: "Effect" } },
  { tier: 20, free: { i: "🎁", n: "Chest" }, premium: { i: "🎨", n: "Legend Skin", legendary: true } },
  { tier: 25, free: { i: "🥉", n: "Badge" }, premium: { i: "👑", n: "Crown Frame" } },
  { tier: 30, free: { i: "⚡", n: "2x XP" }, premium: { i: "🎬", n: "Emote pack" } },
  { tier: 35, free: { i: "🪙", n: "500 coins" }, premium: { i: "🎨", n: "Banner set" } },
  { tier: 40, free: { i: "🎟️", n: "Ticket x3" }, premium: { i: "💎", n: "50 gems" } },
  { tier: 45, free: { i: "🥈", n: "Badge" }, premium: { i: "🐉", n: "Mythic Avatar", legendary: true } },
];

const MISSIONS_DAILY = [
  { t: "Play 3 matches", c: 2, m: 3, xp: 100 },
  { t: "Send 20 messages", c: 20, m: 20, xp: 50, done: true },
  { t: "React 15 times", c: 8, m: 15, xp: 40 },
];

const MISSIONS_WEEKLY = [
  { t: "Win a bracket", c: 0, m: 1, xp: 800 },
  { t: "Post 3 artworks", c: 1, m: 3, xp: 400 },
  { t: "Voice chat 60 min", c: 42, m: 60, xp: 250 },
];

const CHALLENGES = [
  { t: "Flawless Victory", d: "Win a match without losing a round.", xp: 1500, tier: "Elite" },
  { t: "Trend Setter", d: "Get 100 reactions on one post.", xp: 1200, tier: "Elite" },
  { t: "Season Speedrun", d: "Hit tier 30 in 14 days.", xp: 2000, tier: "Mythic" },
];

function Page() {
  const pct = (CURRENT_TIER / MAX_TIER) * 100;
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-10">
      {/* HERO */}
      <section className="relative neo-border neo-shadow rounded-lg overflow-hidden">
        <img src={heroImg} alt="Season 5 Battle Pass" className="w-full h-[340px] sm:h-[440px] object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        <span className="absolute top-6 right-6 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-16 w-16 grid place-items-center font-display text-[10px] uppercase text-center leading-none">
          47<br />DAYS<br />LEFT
        </span>
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-2xl">
          <NeoBadge variant="accent" className="mb-3 w-fit">Season 5 · Ascension</NeoBadge>
          <h1 className="font-display text-3xl sm:text-6xl leading-none">Battle Pass</h1>
          <p className="mt-3 text-sm sm:text-base text-foreground/90">A skyward season. Ninety tiers of loot, missions, and mythic drops.</p>
          <div className="mt-5 flex gap-3">
            <NeoButton variant="primary">Unlock Premium — $9.99</NeoButton>
            <NeoButton variant="ghost">See rewards</NeoButton>
          </div>
        </div>
      </section>

      {/* PROGRESS BAR — big */}
      <section className="neo-border neo-shadow rounded-lg p-5 sm:p-6 bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Current Tier</div>
            <div className="font-display text-4xl">{CURRENT_TIER} <span className="text-lg text-muted-foreground">/ {MAX_TIER}</span></div>
          </div>
          <div className="flex gap-3">
            <div className="neo-border neo-shadow-sm bg-muted rounded-md px-3 py-2 text-center">
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Free XP</div>
              <div className="font-display text-lg leading-none">3,412</div>
            </div>
            <div className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md px-3 py-2 text-center">
              <div className="text-[9px] uppercase tracking-widest opacity-80">Boost</div>
              <div className="font-display text-lg leading-none">×1.5</div>
            </div>
          </div>
        </div>
        <div className="relative h-6 w-full neo-border rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000" style={{ width: `${pct}%` }} />
          <div className="absolute inset-0 flex items-center justify-center font-display text-xs">{Math.round(pct)}% to tier {CURRENT_TIER+1}</div>
        </div>
      </section>

      {/* TIER GRID — dual track scroll */}
      <section>
        <SectionHeader eyebrow="Rewards" title="Tier Track" subtitle="Free track above, Premium track below. Legendary tiers glow." />
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-3 min-w-max">
            {TIER_REWARDS.map((r) => {
              const claimedFree = r.tier <= CURRENT_TIER;
              const claimedPrem = r.tier <= CURRENT_TIER - 5; // demo
              return (
                <div key={r.tier} className="w-28 shrink-0 space-y-2 text-center">
                  {/* Free */}
                  <NeoCard className={`p-3 aspect-square flex flex-col items-center justify-center ${claimedFree ? "" : "opacity-60"}`}>
                    <div className="text-3xl">{r.free.i}</div>
                    <div className="text-[10px] mt-1">{r.free.n}</div>
                    {claimedFree && <div className="text-[9px] font-display uppercase text-primary mt-1">✓</div>}
                  </NeoCard>
                  {/* Tier number */}
                  <div className={`neo-border neo-shadow-sm rounded-full h-8 w-8 mx-auto grid place-items-center font-display text-xs ${r.tier === CURRENT_TIER ? "bg-accent text-accent-foreground animate-pulse" : "bg-card"}`}>
                    {r.tier}
                  </div>
                  {/* Premium */}
                  <NeoCard className={`p-3 aspect-square flex flex-col items-center justify-center ${r.premium.legendary ? "bg-accent text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.5)]" : "bg-secondary text-secondary-foreground"} ${claimedPrem ? "" : "opacity-70"}`}>
                    <div className="text-3xl">{r.premium.i}</div>
                    <div className="text-[10px] mt-1">{r.premium.n}</div>
                    {r.premium.legendary && <div className="text-[8px] font-display uppercase mt-1">LEGENDARY</div>}
                  </NeoCard>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-3 flex gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-muted neo-border" /> Free</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-secondary neo-border" /> Premium</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-accent neo-border" /> Legendary</span>
        </div>
      </section>

      {/* MISSIONS + CHALLENGES */}
      <section className="grid gap-5 lg:grid-cols-3">
        <NeoCard className="p-5">
          <NeoBadge variant="primary">Daily</NeoBadge>
          <h3 className="font-display text-xl mt-2">Daily Missions</h3>
          <div className="text-[10px] text-muted-foreground mb-3">Resets in 6h 23m</div>
          {MISSIONS_DAILY.map((m) => (
            <div key={m.t} className={`mb-2 neo-border neo-shadow-sm rounded-md p-3 ${m.done ? "bg-primary/10" : "bg-card"}`}>
              <div className="flex justify-between text-sm">
                <span className="font-display">{m.t}</span>
                <span className="text-[10px]">+{m.xp} XP</span>
              </div>
              <div className="mt-2 h-1.5 neo-border rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${(m.c/m.m)*100}%` }} />
              </div>
              <div className="text-[10px] mt-1 text-muted-foreground">{m.c}/{m.m}{m.done ? " · ✓" : ""}</div>
            </div>
          ))}
        </NeoCard>
        <NeoCard className="p-5 bg-secondary text-secondary-foreground">
          <NeoBadge variant="accent">Weekly</NeoBadge>
          <h3 className="font-display text-xl mt-2">Weekly Missions</h3>
          <div className="text-[10px] opacity-80 mb-3">Resets Monday 00:00 UTC</div>
          {MISSIONS_WEEKLY.map((m) => (
            <div key={m.t} className="mb-2 neo-border neo-shadow-sm rounded-md p-3 bg-background text-foreground">
              <div className="flex justify-between text-sm">
                <span className="font-display">{m.t}</span>
                <span className="text-[10px]">+{m.xp} XP</span>
              </div>
              <div className="mt-2 h-1.5 neo-border rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-accent" style={{ width: `${(m.c/m.m)*100}%` }} />
              </div>
              <div className="text-[10px] mt-1 text-muted-foreground">{m.c}/{m.m}</div>
            </div>
          ))}
        </NeoCard>
        <NeoCard className="p-5 bg-accent text-accent-foreground relative overflow-hidden">
          <NeoBadge variant="destructive">Elite</NeoBadge>
          <h3 className="font-display text-xl mt-2">Elite Challenges</h3>
          <div className="text-[10px] opacity-80 mb-3">Season-long feats</div>
          {CHALLENGES.map((c) => (
            <div key={c.t} className="mb-2 neo-border neo-shadow-sm rounded-md p-3 bg-background text-foreground">
              <div className="flex justify-between items-center">
                <span className="font-display text-sm">{c.t}</span>
                <NeoBadge variant="muted">{c.tier}</NeoBadge>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">{c.d}</p>
              <div className="text-[10px] font-display uppercase mt-2 text-primary">+{c.xp} XP</div>
            </div>
          ))}
        </NeoCard>
      </section>

      {/* SEASONAL STORY */}
      <NeoCard className="p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <NeoBadge variant="secondary">Season Story</NeoBadge>
        <h3 className="font-display text-3xl mt-3">Ascension</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">The old ladder shattered. The Shouter's ninety tiers rise through cloud, cavern, and sky-arena — chase the crown before the sun sets on Season 5.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          {[["Skyline","1–20"],["Cavern","21–45"],["Storm","46–70"],["Zenith","71–90"]].map(([n, r]) => (
            <div key={n} className="neo-border neo-shadow-sm rounded-md p-3 bg-card">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Chapter</div>
              <div className="font-display text-lg">{n}</div>
              <div className="text-[11px] text-muted-foreground">Tiers {r}</div>
            </div>
          ))}
        </div>
      </NeoCard>
    </div>
  );
}
