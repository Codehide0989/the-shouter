import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/badges-hero.jpg";

export const Route = createFileRoute("/badges")({
  head: () => ({
    meta: [
      { title: "Badges — The Shouter" },
      { name: "description", content: "Collectible marks that show what you've done." },
      { property: "og:title", content: "Badge Cabinet — The Shouter" },
      { property: "og:description", content: "Legendary, seasonal, tournament, artist and community badges." },
      { property: "og:image", content: "/assets/badges-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const RARITIES = {
  common: { ring: "ring-muted", chip: "bg-muted text-foreground", glow: "" },
  rare: { ring: "ring-primary", chip: "bg-primary text-primary-foreground", glow: "shadow-[0_0_24px_hsl(var(--primary)/0.4)]" },
  epic: { ring: "ring-secondary", chip: "bg-secondary text-secondary-foreground", glow: "shadow-[0_0_28px_hsl(var(--secondary)/0.45)]" },
  legendary: { ring: "ring-accent", chip: "bg-accent text-accent-foreground", glow: "shadow-[0_0_36px_hsl(var(--accent)/0.55)]" },
} as const;
type Rarity = keyof typeof RARITIES;

type Badge = { icon: string; name: string; desc: string; xp: number; got: number; rarity: Rarity; locked?: boolean };

const CATEGORIES: Array<{ title: string; hue: string; badges: Badge[] }> = [
  { title: "Tournament", hue: "from-primary/25", badges: [
    { icon: "🥇", name: "First Blood", desc: "Win your very first match.", xp: 100, got: 100, rarity: "common" },
    { icon: "🏆", name: "Bracket Buster", desc: "Win a 16-team bracket.", xp: 800, got: 74, rarity: "epic" },
    { icon: "👑", name: "Season Champion", desc: "Take home a season crown.", xp: 2500, got: 12, rarity: "legendary" },
    { icon: "⚔️", name: "Duelist", desc: "Win 25 1v1s.", xp: 400, got: 62, rarity: "rare" },
  ]},
  { title: "Discord", hue: "from-secondary/25", badges: [
    { icon: "🔊", name: "Loud & Proud", desc: "Post 500 messages.", xp: 150, got: 88, rarity: "common" },
    { icon: "🎙️", name: "Voice Chatter", desc: "1000 minutes in VC.", xp: 300, got: 41, rarity: "rare" },
    { icon: "🤖", name: "Bot Whisperer", desc: "Use every prefix command.", xp: 500, got: 6, rarity: "epic", locked: true },
    { icon: "🛡️", name: "Mod Squad", desc: "Serve as a moderator.", xp: 1200, got: 0, rarity: "legendary", locked: true },
  ]},
  { title: "Artist", hue: "from-accent/25", badges: [
    { icon: "🎨", name: "First Drop", desc: "Post your first artwork.", xp: 100, got: 100, rarity: "common" },
    { icon: "🖌️", name: "Prolific", desc: "10 artworks in a month.", xp: 400, got: 33, rarity: "rare" },
    { icon: "🌟", name: "Featured", desc: "Get on the front page.", xp: 900, got: 18, rarity: "epic" },
    { icon: "🖼️", name: "Gallery Icon", desc: "100k lifetime views.", xp: 3000, got: 3, rarity: "legendary" },
  ]},
  { title: "Community", hue: "from-primary/20", badges: [
    { icon: "🤝", name: "Welcomer", desc: "Greet 50 new members.", xp: 200, got: 55, rarity: "rare" },
    { icon: "🎉", name: "Event Host", desc: "Host a picture battle.", xp: 350, got: 27, rarity: "rare" },
    { icon: "📣", name: "Recruiter", desc: "Bring 10 friends.", xp: 500, got: 14, rarity: "epic" },
    { icon: "💜", name: "Patron", desc: "Support the server.", xp: 1500, got: 8, rarity: "legendary" },
  ]},
  { title: "Seasonal", hue: "from-accent/25", badges: [
    { icon: "🎃", name: "Trick or Treat", desc: "Halloween 2025 event.", xp: 250, got: 100, rarity: "rare" },
    { icon: "❄️", name: "Frostbite", desc: "Winter tournament finalist.", xp: 500, got: 40, rarity: "epic" },
    { icon: "🌸", name: "Bloom", desc: "Spring art contest.", xp: 350, got: 22, rarity: "rare" },
    { icon: "🏖️", name: "Summer Slam", desc: "Summer battle royale.", xp: 600, got: 0, rarity: "legendary", locked: true },
  ]},
];

function Page() {
  const total = CATEGORIES.reduce((n, c) => n + c.badges.length, 0);
  const earned = CATEGORIES.reduce((n, c) => n + c.badges.filter(b => !b.locked && b.got > 0).length, 0);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-10">
      {/* HERO — split layout */}
      <section className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <NeoCard className="p-0 overflow-hidden relative min-h-[300px]">
          <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
          <div className="relative p-6 sm:p-8 h-full flex flex-col justify-end">
            <NeoBadge variant="accent" className="mb-3 w-fit">Badge Cabinet</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl leading-none">Every Flex, One Wall</h1>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">Collect legendary marks across tournaments, art, community and every season.</p>
          </div>
        </NeoCard>
        <div className="grid gap-4 sm:grid-cols-2">
          <NeoCard className="p-5 bg-primary text-primary-foreground">
            <div className="text-[10px] uppercase tracking-widest opacity-80">Collection</div>
            <div className="font-display text-4xl mt-1">{earned}/{total}</div>
            <div className="mt-3 h-2 w-full neo-border rounded-full bg-primary-foreground/20 overflow-hidden">
              <div className="h-full bg-accent" style={{ width: `${(earned/total)*100}%` }} />
            </div>
            <div className="text-[11px] mt-2 opacity-80">Next milestone: 25 badges</div>
          </NeoCard>
          <NeoCard className="p-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Rarity split</div>
            <div className="mt-3 space-y-2">
              {(["common","rare","epic","legendary"] as Rarity[]).map((r) => (
                <div key={r} className="flex items-center gap-2 text-xs">
                  <span className={`inline-block h-3 w-3 rounded-full ${RARITIES[r].chip}`} />
                  <span className="capitalize flex-1">{r}</span>
                  <span className="font-display">{CATEGORIES.reduce((n,c) => n + c.badges.filter(b=>b.rarity===r).length, 0)}</span>
                </div>
              ))}
            </div>
          </NeoCard>
          <NeoCard className="p-5 bg-secondary text-secondary-foreground col-span-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Next unlock</div>
                <div className="font-display text-xl mt-1">Season Champion 👑</div>
                <div className="text-[11px] opacity-80 mt-1">Reach top 4 in an official bracket.</div>
              </div>
              <div className="text-3xl">👑</div>
            </div>
            <div className="mt-3 h-2 w-full neo-border rounded-full bg-secondary-foreground/20 overflow-hidden">
              <div className="h-full bg-accent" style={{ width: "42%" }} />
            </div>
          </NeoCard>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {CATEGORIES.map((cat) => (
        <section key={cat.title}>
          <SectionHeader eyebrow="Category" title={cat.title + " Badges"} subtitle={`${cat.badges.length} to earn in this line.`} />
          <div className={`neo-border neo-shadow rounded-lg p-5 relative overflow-hidden bg-gradient-to-br ${cat.hue} to-transparent`}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cat.badges.map((b) => {
                const r = RARITIES[b.rarity];
                return (
                  <div key={b.name} className={`neo-border neo-shadow-sm rounded-md p-4 bg-card relative overflow-hidden ${b.locked ? "opacity-70" : ""}`}>
                    <div className="flex items-start justify-between">
                      <div className={`h-16 w-16 grid place-items-center rounded-full neo-border ${r.chip} text-3xl ring-4 ${r.ring} ${b.locked ? "" : r.glow}`}>
                        {b.locked ? "🔒" : b.icon}
                      </div>
                      <NeoBadge variant={b.rarity === "legendary" ? "accent" : b.rarity === "epic" ? "secondary" : b.rarity === "rare" ? "primary" : "muted"}>{b.rarity}</NeoBadge>
                    </div>
                    <div className="font-display text-lg mt-3">{b.name}</div>
                    <p className="text-[11px] text-muted-foreground mt-1 h-8">{b.desc}</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>{b.xp} XP</span>
                      <span>{b.got}%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full neo-border rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-700" style={{ width: `${b.got}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
