import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/rewards-hero-v2.jpg";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards Vault — The Shouter" },
      { name: "description", content: "Chests, streaks, lucky spins and premium rewards — claim your loot." },
      { property: "og:title", content: "Rewards Vault — The Shouter" },
      { property: "og:description", content: "Daily, weekly, monthly, tournament and premium rewards — all in one vault." },
      { property: "og:image", content: "/assets/rewards-hero-v2.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/assets/rewards-hero-v2.jpg" },
    ],
  }),
  component: Page,
});

type Rarity = "common" | "rare" | "epic" | "legendary";
const RARITY: Record<Rarity, { chip: string; glow: string; grad: string }> = {
  common:    { chip: "bg-muted text-foreground", glow: "", grad: "from-muted/40" },
  rare:      { chip: "bg-primary text-primary-foreground", glow: "shadow-[0_0_20px_hsl(var(--primary)/0.4)]", grad: "from-primary/25" },
  epic:      { chip: "bg-secondary text-secondary-foreground", glow: "shadow-[0_0_26px_hsl(var(--secondary)/0.45)]", grad: "from-secondary/25" },
  legendary: { chip: "bg-accent text-accent-foreground", glow: "shadow-[0_0_34px_hsl(var(--accent)/0.6)]", grad: "from-accent/30" },
};

const DAILY = [
  { d: "Mon", icon: "🎁", loot: "50 coins", claimed: true },
  { d: "Tue", icon: "💎", loot: "1 gem", claimed: true },
  { d: "Wed", icon: "🎨", loot: "Sticker pack", claimed: true },
  { d: "Thu", icon: "🎟️", loot: "Raffle ticket", claimed: false, today: true },
  { d: "Fri", icon: "🔥", loot: "XP boost", claimed: false },
  { d: "Sat", icon: "⭐", loot: "200 coins", claimed: false },
  { d: "Sun", icon: "👑", loot: "Legendary chest", claimed: false, mega: true },
];

const CHESTS: Array<{ name: string; icon: string; art: string; odds: string; price: string; rarity: Rarity }> = [
  { name: "Bronze Cache", icon: "📦", art: "🪵", odds: "Common drops", price: "500", rarity: "common" },
  { name: "Silver Vault", icon: "🗃️", art: "🥈", odds: "Rare + XP boost", price: "1,200", rarity: "rare" },
  { name: "Golden Trove", icon: "💰", art: "🥇", odds: "Epic guaranteed", price: "3,000", rarity: "epic" },
  { name: "Crystal Relic", icon: "💎", art: "🔮", odds: "Legendary chance", price: "6,500", rarity: "legendary" },
];

const CATEGORIES: Array<{ i: string; t: string; d: string; count: number; tint: string }> = [
  { i: "🗓️", t: "Daily", d: "Login streak drops", count: 7, tint: "from-primary/20" },
  { i: "📅", t: "Weekly", d: "Refreshing missions", count: 4, tint: "from-secondary/20" },
  { i: "🌙", t: "Monthly", d: "Ends on the 30th", count: 3, tint: "from-accent/20" },
  { i: "🏆", t: "Tournament", d: "Bracket + placement", count: 12, tint: "from-primary/25" },
  { i: "🌸", t: "Season", d: "S4 exclusive loot", count: 8, tint: "from-accent/25" },
  { i: "👑", t: "Premium", d: "VIP-only drops", count: 6, tint: "from-secondary/25" },
  { i: "🖼️", t: "Gallery", d: "Art & featured", count: 5, tint: "from-primary/20" },
  { i: "🎖️", t: "Badges", d: "Badge tie-ins", count: 9, tint: "from-secondary/20" },
  { i: "💬", t: "Discord", d: "Server activity", count: 6, tint: "from-accent/20" },
];

const HISTORY = [
  { icon: "🏆", name: "Season 4 Winner Pack", when: "2d ago", tag: "Tournament", rarity: "legendary" as Rarity },
  { icon: "🎨", name: "Artist Bundle · Vol 3", when: "5d ago", tag: "Artwork", rarity: "epic" as Rarity },
  { icon: "🎁", name: "Daily Streak · Day 30", when: "1w ago", tag: "Daily", rarity: "rare" as Rarity },
  { icon: "💜", name: "Patron Thank-you Box", when: "2w ago", tag: "Premium", rarity: "legendary" as Rarity },
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-14">
      {/* HERO — treasure room */}
      <section className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden">
        <img src={heroImg} alt="Treasure vault" className="w-full h-[340px] sm:h-[440px] object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/45 to-transparent" />

        {/* Coins raining */}
        {["🪙","💰","💎","✨","🎁","🎉","⭐","🔮"].map((e, i) => (
          <span key={i} className="absolute text-2xl sm:text-3xl neo-border neo-shadow-sm bg-card rounded-full h-11 w-11 grid place-items-center animate-bounce"
                style={{
                  top: `${8 + (i*13)%70}%`,
                  right: `${4 + (i%3)*8}%`,
                  animationDelay: `${i*220}ms`,
                  animationDuration: `${2 + (i%3)}s`,
                  transform: `rotate(${i*18 - 30}deg)`,
                }}>{e}</span>
        ))}

        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end max-w-2xl">
          <NeoBadge variant="accent" className="mb-3 w-fit">Vault · Live</NeoBadge>
          <h1 className="font-display text-4xl sm:text-6xl leading-none">Rewards Center</h1>
          <p className="mt-3 max-w-lg text-sm sm:text-base text-foreground/90">Coins, chests, XP crystals and rare loot — for showing up, competing, and creating.</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { i: "🪙", t: "Coins", v: "12,480", bg: "bg-card" },
              { i: "💎", t: "Gems", v: "86", bg: "bg-card" },
              { i: "⚡", t: "XP", v: "54,210", bg: "bg-primary text-primary-foreground" },
              { i: "🎟️", t: "Tickets", v: "9", bg: "bg-accent text-accent-foreground" },
            ].map((s) => (
              <div key={s.t} className={`neo-border neo-shadow-sm ${s.bg} px-4 py-2 rounded-md flex items-center gap-2`}>
                <span className="text-xl">{s.i}</span>
                <div>
                  <div className="text-[9px] uppercase tracking-widest opacity-80">{s.t}</div>
                  <div className="font-display text-lg leading-none">{s.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward categories grid */}
      <section>
        <SectionHeader eyebrow="Categories" title="Choose your loot line" subtitle="Every reward category has its own drops, rarity mix and refresh cycle." />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((c) => (
            <NeoCard key={c.t} className={`p-4 relative overflow-hidden hover:-translate-y-1 transition-transform bg-gradient-to-br ${c.tint} to-transparent`}>
              <div className="text-4xl">{c.i}</div>
              <div className="font-display text-base mt-2">{c.t}</div>
              <div className="text-[10px] text-muted-foreground">{c.d}</div>
              <div className="mt-2 text-[10px] uppercase tracking-widest font-display">{c.count} drops</div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* DAILY STREAK */}
      <section>
        <SectionHeader eyebrow="Daily" title="7-Day Login Streak" subtitle="Sunday is a guaranteed legendary chest." />
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {DAILY.map((d) => (
            <NeoCard key={d.d} className={`p-4 text-center relative overflow-hidden ${d.mega ? "bg-accent text-accent-foreground shadow-[0_0_28px_hsl(var(--accent)/0.5)]" : d.today ? "bg-primary text-primary-foreground animate-pulse" : ""} ${d.claimed ? "opacity-70" : ""}`}>
              {d.mega && <span className="absolute top-1 right-1 text-xs">✨</span>}
              <div className="text-[10px] uppercase tracking-widest font-display">{d.d}</div>
              <div className="text-4xl my-3">{d.icon}</div>
              <div className="text-xs">{d.loot}</div>
              {d.claimed ? (
                <div className="mt-2 text-[10px] font-display uppercase tracking-widest">✓ Claimed</div>
              ) : d.today ? (
                <NeoButton size="sm" variant="ghost" className="mt-2 w-full">Claim</NeoButton>
              ) : (
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Locked</div>
              )}
            </NeoCard>
          ))}
        </div>
      </section>

      {/* CHESTS */}
      <section>
        <SectionHeader eyebrow="Loot" title="Treasure Chests" subtitle="Trade coins for a shot at rarer drops." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHESTS.map((c) => {
            const r = RARITY[c.rarity];
            return (
              <NeoCard key={c.name} className={`p-5 relative overflow-hidden text-center group hover:-translate-y-1 transition-transform bg-gradient-to-br ${r.grad} to-transparent ${r.glow}`}>
                <span className="absolute -top-3 -right-3 text-6xl opacity-15 rotate-12">{c.art}</span>
                <span className="absolute top-2 left-2 text-xs animate-pulse">✨</span>
                <div className="text-7xl group-hover:scale-110 group-hover:-rotate-6 transition-transform">{c.icon}</div>
                <div className="font-display text-lg mt-3">{c.name}</div>
                <div className="text-[11px] text-muted-foreground">{c.odds}</div>
                <NeoBadge variant={c.rarity==="legendary"?"accent":c.rarity==="epic"?"secondary":c.rarity==="rare"?"primary":"muted"} className="mt-2">{c.rarity}</NeoBadge>
                <div className="mt-3 neo-border neo-shadow-sm rounded-md bg-card px-2 py-1 inline-flex items-center gap-1 font-display text-sm">
                  🪙 {c.price}
                </div>
                <NeoButton size="sm" variant="primary" className="mt-3 w-full">Open chest</NeoButton>
              </NeoCard>
            );
          })}
        </div>
      </section>

      {/* LUCKY SPIN + MYSTERY BOX */}
      <section className="grid gap-5 lg:grid-cols-2">
        <NeoCard className="p-6 relative overflow-hidden bg-gradient-to-br from-accent/25 via-card to-primary/15">
          <span className="absolute -top-6 -right-6 text-8xl opacity-15 rotate-12">🎰</span>
          <NeoBadge variant="accent">Lucky Spin</NeoBadge>
          <h3 className="font-display text-2xl mt-3">Spin the wheel</h3>
          <p className="text-xs text-muted-foreground">1 free spin every 24h. Bonus spins from tickets.</p>

          <div className="mt-5 flex items-center justify-center">
            <div className="relative h-44 w-44 rounded-full neo-border neo-shadow overflow-hidden animate-[spin_20s_linear_infinite]"
              style={{ background: "conic-gradient(hsl(var(--primary)) 0 25%, hsl(var(--accent)) 25% 50%, hsl(var(--secondary)) 50% 75%, hsl(var(--muted)) 75% 100%)" }}>
              <div className="absolute inset-4 rounded-full bg-card neo-border grid place-items-center font-display text-3xl">🎁</div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="text-[11px] text-muted-foreground">Next free spin in <b className="text-foreground">04h 22m</b></div>
            <NeoButton size="sm" variant="primary">Spin now — 🎟️ 1</NeoButton>
          </div>
        </NeoCard>

        <NeoCard className="p-6 relative overflow-hidden bg-secondary text-secondary-foreground">
          <span className="absolute -bottom-4 -right-4 text-8xl opacity-20 -rotate-12">❓</span>
          <NeoBadge variant="accent">Mystery Box</NeoBadge>
          <h3 className="font-display text-2xl mt-3">Mystery Drops</h3>
          <p className="text-xs opacity-90">Random contents. Sometimes silly. Sometimes legendary.</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["🎁","📦","🎁","📦","🎁","📦"].map((e, i) => (
              <button key={i} className="neo-border neo-shadow-sm bg-background text-foreground rounded-md aspect-square grid place-items-center text-3xl hover:-translate-y-1 hover:rotate-3 transition-transform">
                {e}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-[11px] opacity-90">Cost per box · <b>🪙 800</b></div>
            <NeoButton size="sm" variant="ghost">Open mystery box</NeoButton>
          </div>
        </NeoCard>
      </section>

      {/* WEEKLY + EVENT tracks */}
      <section className="grid gap-5 lg:grid-cols-2">
        <NeoCard className="p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
          <div className="relative">
            <NeoBadge variant="primary">Weekly</NeoBadge>
            <h3 className="font-display text-2xl mt-3">Weekly Missions</h3>
            <p className="text-xs text-muted-foreground">Refreshes every Monday. Stack XP fast.</p>
            <div className="mt-4 space-y-3">
              {[
                ["Win 5 matches", 3, 5, "500 XP", "🏆"],
                ["Post 3 artworks", 2, 3, "300 XP", "🎨"],
                ["React 50 times", 41, 50, "150 XP + 🪙", "❤️"],
                ["Recruit 1 friend", 0, 1, "🎁 Mystery box", "🤝"],
              ].map((row) => {
                const [t, c, m, r, i] = row as [string, number, number, string, string];
                const pct = (c/m)*100;
                return (
                  <div key={t} className="neo-border neo-shadow-sm bg-card rounded-md p-3 flex items-center gap-3">
                    <div className="h-10 w-10 grid place-items-center neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md text-lg">{i}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center gap-2">
                        <span className="font-display text-sm">{t}</span>
                        <span className="text-[10px] font-display">{c}/{m}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 neo-border rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Reward · {r}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </NeoCard>

        <NeoCard className="p-6 relative overflow-hidden bg-secondary text-secondary-foreground">
          <span className="absolute -top-3 -right-3 text-7xl opacity-15 rotate-12">🏆</span>
          <NeoBadge variant="accent">Event</NeoBadge>
          <h3 className="font-display text-2xl mt-3">Event Rewards</h3>
          <p className="text-xs opacity-80">Ongoing tournament and creator drops.</p>
          <div className="mt-4 space-y-3">
            {[
              { i: "🏆", t: "Squad Rumble Top 8", r: "Golden Trophy Badge", rarity: "epic" as Rarity, exp: "3d" },
              { i: "🎨", t: "Pixel Wars entry", r: "Featured Artist Frame", rarity: "rare" as Rarity, exp: "6d" },
              { i: "📸", t: "Snapshot Showdown", r: "500 coins + Sticker", rarity: "rare" as Rarity, exp: "1d" },
              { i: "🎥", t: "Best VOD of the week", r: "Discord Nitro (1mo)", rarity: "legendary" as Rarity, exp: "5d" },
            ].map((e) => (
              <div key={e.t} className="neo-border neo-shadow-sm bg-background text-foreground rounded-md p-3 flex items-center gap-3">
                <div className="text-2xl h-10 w-10 grid place-items-center neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md">{e.i}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm truncate">{e.t}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{e.r} · Ends in {e.exp}</div>
                </div>
                <NeoBadge variant={e.rarity==="legendary"?"accent":e.rarity==="epic"?"secondary":"primary"}>{e.rarity}</NeoBadge>
              </div>
            ))}
          </div>
        </NeoCard>
      </section>

      {/* HISTORY */}
      <section>
        <SectionHeader eyebrow="Log" title="Recently Claimed" subtitle="Your last few loot drops." />
        <div className="grid gap-3 sm:grid-cols-2">
          {HISTORY.map((h) => {
            const r = RARITY[h.rarity];
            return (
              <NeoCard key={h.name} className={`p-3 flex items-center gap-3 relative overflow-hidden bg-gradient-to-r ${r.grad} to-transparent`}>
                <span className={`h-12 w-12 grid place-items-center neo-border neo-shadow-sm ${r.chip} rounded-md text-xl`}>{h.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm truncate">{h.name}</div>
                  <div className="text-[11px] text-muted-foreground">{h.when} · {h.tag} · <span className="capitalize">{h.rarity}</span></div>
                </div>
                <NeoBadge variant="success">Claimed</NeoBadge>
              </NeoCard>
            );
          })}
        </div>
      </section>
    </div>
  );
}
