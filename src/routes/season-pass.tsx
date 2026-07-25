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

type Reward = { i: string; n: string; xp: number; orbit: string[]; grad: string; legendary?: boolean };
const TIER_REWARDS: Array<{ tier: number; free: Reward; premium: Reward }> = [
  { tier: 1,  free: { i: "🪙", n: "100 coins",   xp: 500,  orbit: ["💰","✨"],       grad: "from-yellow-500/25 to-amber-600/10" },
              premium: { i: "🎨", n: "Frame",     xp: 500,  orbit: ["🖼️","✨"],       grad: "from-primary/25 to-secondary/10" } },
  { tier: 5,  free: { i: "⚡", n: "XP boost",     xp: 1200, orbit: ["🔥","💫"],       grad: "from-primary/25 to-accent/10" },
              premium: { i: "👤", n: "Avatar",    xp: 1200, orbit: ["🎭","✨"],       grad: "from-secondary/25 to-primary/10" } },
  { tier: 10, free: { i: "🎟️", n: "Raffle",     xp: 2000, orbit: ["🎊","🎉"],       grad: "from-accent/25 to-primary/10" },
              premium: { i: "🏷️", n: "Title",    xp: 2000, orbit: ["⭐","👑"],       grad: "from-secondary/30 to-accent/10" } },
  { tier: 15, free: { i: "🪙", n: "250 coins",   xp: 3200, orbit: ["💰","💰"],       grad: "from-yellow-500/25 to-amber-600/10" },
              premium: { i: "🌈", n: "Name color",xp: 3200, orbit: ["✨","💫"],       grad: "from-pink-500/25 to-purple-600/10" } },
  { tier: 20, free: { i: "🎁", n: "Loot box",    xp: 4500, orbit: ["🎀","✨"],       grad: "from-primary/25 to-secondary/10" },
              premium: { i: "🐉", n: "Legend Skin", xp: 4500, orbit: ["🔥","👑","💎"], grad: "from-accent/40 to-primary/20", legendary: true } },
  { tier: 25, free: { i: "🥉", n: "Bronze badge",xp: 6000, orbit: ["🏅","✨"],       grad: "from-amber-700/25 to-yellow-900/10" },
              premium: { i: "👑", n: "Crown frame",xp: 6000, orbit: ["💎","✨"],      grad: "from-yellow-500/30 to-amber-600/10" } },
  { tier: 30, free: { i: "⚡", n: "2x XP boost", xp: 7500, orbit: ["🔥","💫"],       grad: "from-primary/25 to-accent/10" },
              premium: { i: "😂", n: "Emote pack",xp: 7500, orbit: ["🎭","💬"],       grad: "from-secondary/25 to-primary/10" } },
  { tier: 35, free: { i: "🪙", n: "500 coins",   xp: 9000, orbit: ["💰","💰","✨"],  grad: "from-yellow-500/25 to-amber-600/10" },
              premium: { i: "🎌", n: "Banner set",xp: 9000, orbit: ["✨","🎨"],       grad: "from-primary/25 to-secondary/10" } },
  { tier: 40, free: { i: "🎟️", n: "Tickets x3", xp: 10500,orbit: ["🎊","🎉"],       grad: "from-accent/25 to-primary/10" },
              premium: { i: "💎", n: "50 gems",   xp: 10500,orbit: ["💠","✨"],       grad: "from-cyan-500/25 to-blue-600/10" } },
  { tier: 45, free: { i: "🥈", n: "Silver badge",xp: 12000,orbit: ["🏅","✨"],       grad: "from-slate-400/25 to-slate-600/10" },
              premium: { i: "🐲", n: "Mythic Avatar", xp: 12000, orbit: ["🔥","👑","💎"], grad: "from-accent/40 to-primary/20", legendary: true } },
  { tier: 50, free: { i: "🎁", n: "Chest",       xp: 13800,orbit: ["🎀","✨"],       grad: "from-primary/25 to-secondary/10" },
              premium: { i: "🐾", n: "Pet",       xp: 13800,orbit: ["✨","💫"],       grad: "from-pink-500/25 to-rose-600/10" } },
  { tier: 55, free: { i: "🎨", n: "Sticker set", xp: 15500,orbit: ["🖌️","🌈"],      grad: "from-purple-500/25 to-pink-500/10" },
              premium: { i: "🎭", n: "Theme unlock",xp:15500,orbit: ["🌌","✨"],       grad: "from-secondary/30 to-accent/10" } },
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
        <SectionHeader eyebrow="Rewards" title="Tier Track" subtitle="Free track above, premium below. Connected by the ascension timeline." />
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="inline-flex gap-2 min-w-max relative">
            {TIER_REWARDS.map((r) => {
              const claimedFree = r.tier <= CURRENT_TIER;
              const claimedPrem = r.tier <= CURRENT_TIER - 5; // demo
              const isCurrent = r.tier === CURRENT_TIER;
              const RewardTile = ({ rw, claimed, ribbon, ribbonCls }: { rw: Reward; claimed: boolean; ribbon: string; ribbonCls: string }) => (
                <div className={`group relative w-32 shrink-0 neo-border neo-shadow-sm rounded-md overflow-hidden bg-gradient-to-br ${rw.grad} ${rw.legendary ? "shadow-[0_0_22px_hsl(var(--accent)/0.55)] ring-2 ring-accent" : ""} ${claimed ? "" : "opacity-60"} transition-transform hover:-translate-y-1`}>
                  {/* ribbon */}
                  <div className={`absolute top-1 left-1 z-10 text-[8px] font-display uppercase tracking-widest px-1.5 py-0.5 rounded ${ribbonCls}`}>{ribbon}</div>
                  {/* claim state */}
                  {claimed ? (
                    <div className="absolute top-1 right-1 z-10 text-[9px] font-display bg-[color:var(--success)] text-background rounded px-1.5 py-0.5">✓</div>
                  ) : (
                    <div className="absolute top-1 right-1 z-10 text-[10px]">🔒</div>
                  )}
                  {/* art */}
                  <div className="relative h-20 grid place-items-center">
                    {rw.orbit.map((e, i) => (
                      <span key={i} className="absolute text-xs animate-bounce" style={{
                        top: `${15 + (i * 25) % 60}%`,
                        left: `${i % 2 === 0 ? 10 : 78}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: `${2 + (i % 3)}s`,
                      }}>{e}</span>
                    ))}
                    <span className="text-4xl drop-shadow-[2px_2px_0_hsl(var(--foreground)/0.3)] transition-transform group-hover:scale-110 group-hover:-rotate-6">{rw.i}</span>
                    {rw.legendary && <span className="absolute bottom-0 right-0 text-[8px] font-display uppercase bg-accent text-accent-foreground px-1 rounded">LGD</span>}
                  </div>
                  <div className="px-2 py-1.5 border-t-2 border-border bg-background/70">
                    <div className="text-[10px] font-display leading-tight line-clamp-1">{rw.n}</div>
                    <div className="text-[9px] text-muted-foreground">{rw.xp.toLocaleString()} XP</div>
                  </div>
                </div>
              );
              return (
                <div key={r.tier} className="flex flex-col items-center gap-1.5 shrink-0">
                  <RewardTile rw={r.free} claimed={claimedFree} ribbon="Free" ribbonCls="bg-muted text-foreground" />
                  {/* timeline connector node */}
                  <div className="relative w-32 flex items-center justify-center">
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary via-accent to-secondary neo-border" />
                    <div className={`relative neo-border neo-shadow-sm rounded-full h-9 w-9 grid place-items-center font-display text-xs ${isCurrent ? "bg-accent text-accent-foreground animate-pulse ring-2 ring-accent" : claimedFree ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                      {r.tier}
                    </div>
                  </div>
                  <RewardTile rw={r.premium} claimed={claimedPrem} ribbon="Premium" ribbonCls="bg-accent text-accent-foreground" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-muted neo-border" /> Free</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-accent neo-border" /> Premium</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-accent neo-border shadow-[0_0_10px_hsl(var(--accent))]" /> Legendary</span>
          <span className="flex items-center gap-1">✓ Claimed · 🔒 Locked</span>
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
