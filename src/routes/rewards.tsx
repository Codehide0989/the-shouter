import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/rewards-hero.jpg";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards — The Shouter" },
      { name: "description", content: "Redeem XP, coins, and badges for real perks." },
      { property: "og:title", content: "Rewards Vault — The Shouter" },
      { property: "og:description", content: "Daily, weekly, event, and premium rewards — claim your loot." },
      { property: "og:image", content: "/assets/rewards-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const DAILY = [
  { d: "Mon", icon: "🎁", loot: "50 coins", claimed: true },
  { d: "Tue", icon: "💎", loot: "1 gem", claimed: true },
  { d: "Wed", icon: "🎨", loot: "Sticker pack", claimed: true },
  { d: "Thu", icon: "🎟️", loot: "Raffle ticket", claimed: false, today: true },
  { d: "Fri", icon: "🔥", loot: "XP boost", claimed: false },
  { d: "Sat", icon: "⭐", loot: "200 coins", claimed: false },
  { d: "Sun", icon: "👑", loot: "Legendary chest", claimed: false, mega: true },
];

const CHESTS = [
  { name: "Bronze Cache", icon: "📦", odds: "Common drops", price: "500", tint: "from-muted/60" },
  { name: "Silver Vault", icon: "🗃️", odds: "Rare + XP", price: "1,200", tint: "from-primary/25" },
  { name: "Golden Trove", icon: "💰", odds: "Epic guaranteed", price: "3,000", tint: "from-accent/30" },
  { name: "Crystal Relic", icon: "💎", odds: "Legendary chance", price: "6,500", tint: "from-secondary/30" },
];

const HISTORY = [
  { icon: "🏆", name: "Season 4 Winner Pack", when: "2d ago", tag: "Tournament" },
  { icon: "🎨", name: "Artist Bundle · Vol 3", when: "5d ago", tag: "Artwork" },
  { icon: "🎁", name: "Daily Streak · Day 30", when: "1w ago", tag: "Daily" },
  { icon: "💜", name: "Patron Thank-you Box", when: "2w ago", tag: "Premium" },
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-10">
      {/* HERO */}
      <section className="relative neo-border neo-shadow rounded-lg overflow-hidden">
        <img src={heroImg} alt="Treasure vault" className="w-full h-[320px] sm:h-[420px] object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
        {/* Confetti stickers */}
        {["✨","⭐","💎","🎉","🪙"].map((e, i) => (
          <span key={i} className="absolute text-2xl sm:text-3xl neo-border neo-shadow-sm bg-card rounded-full h-10 w-10 sm:h-12 sm:w-12 grid place-items-center animate-pulse"
                style={{ top: `${10 + i*12}%`, right: `${5 + (i%3)*8}%`, animationDelay: `${i*250}ms`, transform: `rotate(${i*15 - 20}deg)` }}>{e}</span>
        ))}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
          <NeoBadge variant="accent" className="mb-3 w-fit">Vault</NeoBadge>
          <h1 className="font-display text-3xl sm:text-6xl leading-none">Rewards Center</h1>
          <p className="mt-3 max-w-lg text-sm sm:text-base text-foreground/90">Coins, chests, and loot for showing up, competing, and creating.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="neo-border neo-shadow-sm bg-card px-4 py-2 rounded-md flex items-center gap-2">
              <span className="text-xl">🪙</span>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Coins</div>
                <div className="font-display text-lg leading-none">12,480</div>
              </div>
            </div>
            <div className="neo-border neo-shadow-sm bg-card px-4 py-2 rounded-md flex items-center gap-2">
              <span className="text-xl">💎</span>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Gems</div>
                <div className="font-display text-lg leading-none">86</div>
              </div>
            </div>
            <div className="neo-border neo-shadow-sm bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <div>
                <div className="text-[9px] uppercase tracking-widest opacity-80">XP</div>
                <div className="font-display text-lg leading-none">54,210</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAILY STREAK */}
      <section>
        <SectionHeader eyebrow="Daily" title="Login Streak" subtitle="Show up every day. Sunday is a legendary drop." />
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {DAILY.map((d) => (
            <NeoCard key={d.d} className={`p-4 text-center relative overflow-hidden ${d.mega ? "bg-accent text-accent-foreground" : d.today ? "bg-primary text-primary-foreground" : ""} ${d.claimed ? "opacity-70" : ""}`}>
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
        <SectionHeader eyebrow="Loot" title="Treasure Chests" subtitle="Trade coins for a shot at rare drops." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHESTS.map((c) => (
            <NeoCard key={c.name} className={`p-5 relative overflow-hidden text-center group hover:-translate-y-1 transition-transform bg-gradient-to-br ${c.tint} to-transparent`}>
              <div className="text-6xl group-hover:scale-110 transition-transform">{c.icon}</div>
              <div className="font-display text-lg mt-3">{c.name}</div>
              <div className="text-[11px] text-muted-foreground">{c.odds}</div>
              <div className="mt-3 neo-border neo-shadow-sm rounded-md bg-card px-2 py-1 inline-flex items-center gap-1 font-display text-sm">
                🪙 {c.price}
              </div>
              <NeoButton size="sm" variant="primary" className="mt-3 w-full">Open</NeoButton>
            </NeoCard>
          ))}
        </div>
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
                ["Win 5 matches", 3, 5, "500 XP"],
                ["Post 3 artworks", 2, 3, "300 XP"],
                ["React 50 times", 41, 50, "150 XP + 🪙"],
                ["Recruit 1 friend", 0, 1, "🎁 Mystery box"],
              ].map(([t, c, m, r]) => {
                const pct = (Number(c)/Number(m))*100;
                return (
                  <div key={t as string} className="neo-border neo-shadow-sm bg-card rounded-md p-3">
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-display text-sm">{t}</span>
                      <span className="text-[10px] font-display">{c}/{m}</span>
                    </div>
                    <div className="mt-2 h-1.5 neo-border rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Reward: {r}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </NeoCard>
        <NeoCard className="p-6 relative overflow-hidden bg-secondary text-secondary-foreground">
          <NeoBadge variant="accent">Event</NeoBadge>
          <h3 className="font-display text-2xl mt-3">Event Rewards</h3>
          <p className="text-xs opacity-80">Ongoing tournament and creator drops.</p>
          <div className="mt-4 space-y-3">
            {[
              { i: "🏆", t: "Squad Rumble Top 8", r: "Golden Trophy Badge" },
              { i: "🎨", t: "Pixel Wars entry", r: "Featured Artist Frame" },
              { i: "📸", t: "Snapshot Showdown", r: "500 coins + Sticker" },
              { i: "🎥", t: "Best VOD of the week", r: "Discord Nitro (1mo)" },
            ].map((e) => (
              <div key={e.t} className="neo-border neo-shadow-sm bg-background text-foreground rounded-md p-3 flex items-center gap-3">
                <div className="text-2xl">{e.i}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm truncate">{e.t}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{e.r}</div>
                </div>
                <NeoButton size="sm" variant="ghost">Join</NeoButton>
              </div>
            ))}
          </div>
        </NeoCard>
      </section>

      {/* HISTORY */}
      <section>
        <SectionHeader eyebrow="Log" title="Recently Claimed" />
        <div className="grid gap-3 sm:grid-cols-2">
          {HISTORY.map((h) => (
            <NeoCard key={h.name} className="p-3 flex items-center gap-3">
              <span className="h-12 w-12 grid place-items-center neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md text-xl">{h.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-display text-sm truncate">{h.name}</div>
                <div className="text-[11px] text-muted-foreground">{h.when} · {h.tag}</div>
              </div>
              <NeoBadge variant="success">Claimed</NeoBadge>
            </NeoCard>
          ))}
        </div>
      </section>
    </div>
  );
}
