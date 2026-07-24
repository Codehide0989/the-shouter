import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/badges-hero-v2.jpg";

export const Route = createFileRoute("/badges")({
  head: () => ({
    meta: [
      { title: "Badge Cabinet — The Shouter" },
      { name: "description", content: "Original illustrated badges — tournaments, art, discord, mythic and more." },
      { property: "og:title", content: "Badge Cabinet — The Shouter" },
      { property: "og:description", content: "Legendary, seasonal, tournament, artist and community badges — all illustrated." },
      { property: "og:image", content: "/assets/badges-hero-v2.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/assets/badges-hero-v2.jpg" },
    ],
  }),
  component: Page,
});

type Rarity = "common" | "rare" | "epic" | "legendary" | "mythic";

const RARITY: Record<Rarity, { ring: string; chip: string; glow: string; grad: string }> = {
  common:    { ring: "ring-muted", chip: "bg-muted text-foreground", glow: "", grad: "from-muted/40 to-transparent" },
  rare:      { ring: "ring-primary", chip: "bg-primary text-primary-foreground", glow: "shadow-[0_0_20px_hsl(var(--primary)/0.45)]", grad: "from-primary/25 to-transparent" },
  epic:      { ring: "ring-secondary", chip: "bg-secondary text-secondary-foreground", glow: "shadow-[0_0_26px_hsl(var(--secondary)/0.5)]", grad: "from-secondary/25 to-transparent" },
  legendary: { ring: "ring-accent", chip: "bg-accent text-accent-foreground", glow: "shadow-[0_0_34px_hsl(var(--accent)/0.6)]", grad: "from-accent/30 to-transparent" },
  mythic:    { ring: "ring-[#ff2fa8]", chip: "bg-[#ff2fa8] text-white", glow: "shadow-[0_0_40px_#ff2fa855]", grad: "from-[#ff2fa8]/25 to-[#5a2ea6]/20" },
};

/** Rich SVG-quality illustrated "badge" — each is a stacked emoji + shape combo. */
function BadgeArt({ base, top, ring, tint }: { base: string; top?: string; ring: string; tint: string }) {
  return (
    <div className={`relative h-20 w-20 grid place-items-center rounded-full neo-border ${tint} ring-4 ${ring}`}>
      {/* base shape */}
      <span className="text-4xl leading-none">{base}</span>
      {/* stacked accent */}
      {top && (
        <span className="absolute -top-1.5 -right-1.5 text-xl neo-border neo-shadow-sm bg-card text-foreground h-7 w-7 grid place-items-center rounded-full">
          {top}
        </span>
      )}
      {/* shine */}
      <span className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 45%)",
      }} />
      {/* sparkle */}
      <span className="absolute -bottom-1 -left-1 text-xs animate-pulse">✨</span>
    </div>
  );
}

type Badge = {
  base: string;
  top?: string;
  name: string;
  desc: string;
  req: string;
  xp: number;
  progress: number;
  rarity: Rarity;
  eta?: string;
  earners: string[];
  locked?: boolean;
};

const CATEGORIES: Array<{ title: string; icon: string; hue: string; badges: Badge[] }> = [
  { title: "Tournament", icon: "🏆", hue: "from-primary/20", badges: [
    { base: "🏆", top: "👑", name: "Golden Trophy", desc: "Win an official tournament.", req: "Take 1 official bracket.", xp: 800, progress: 74, rarity: "epic", eta: "2 events left", earners: ["N","K","B","V"] },
    { base: "🛡️", top: "⭐", name: "Champion Shield", desc: "Defend a title back-to-back.", req: "Win 2 brackets in a row.", xp: 1500, progress: 45, rarity: "legendary", eta: "1 win away", earners: ["N","B"] },
    { base: "🌿", top: "🥇", name: "Winner Laurel", desc: "Podium in a season cup.", req: "Finish top-3 in a season cup.", xp: 500, progress: 100, rarity: "rare", earners: ["N","K","B","V","M","T","+3"] },
    { base: "⚔️", name: "Crossed Swords", desc: "Win 25 1v1 duels.", req: "25 duel wins.", xp: 400, progress: 62, rarity: "rare", eta: "9 duels left", earners: ["N","K","V","+12"] },
  ]},
  { title: "Discord", icon: "💬", hue: "from-secondary/20", badges: [
    { base: "🛡️", top: "💜", name: "Discord Shield", desc: "Verified server member.", req: "Link + verify your account.", xp: 100, progress: 100, rarity: "common", earners: ["all"] },
    { base: "💬", top: "🔊", name: "Chat Bubble", desc: "Post 500 messages.", req: "500 messages sent.", xp: 200, progress: 88, rarity: "rare", eta: "62 msgs left", earners: ["N","K","B","+40"] },
    { base: "🛡️", top: "⚖️", name: "Moderator Crest", desc: "Trusted community mod.", req: "Serve as a mod.", xp: 1200, progress: 0, rarity: "legendary", locked: true, earners: ["B","M"] },
    { base: "🎙️", top: "👑", name: "Voice Crown", desc: "1,000 minutes in VC.", req: "1000 VC minutes.", xp: 300, progress: 41, rarity: "epic", eta: "9h left", earners: ["N","V","K"] },
  ]},
  { title: "Community", icon: "🤝", hue: "from-accent/20", badges: [
    { base: "🤝", name: "Handshake", desc: "Welcome 50 new members.", req: "50 welcomes.", xp: 200, progress: 55, rarity: "rare", earners: ["N","+22"] },
    { base: "❤️", top: "⭐", name: "Heart Badge", desc: "React 500 times.", req: "500 reactions.", xp: 150, progress: 78, rarity: "common", earners: ["all"] },
    { base: "⭐", top: "🌟", name: "Community Star", desc: "Reach 10k karma.", req: "10,000 karma points.", xp: 900, progress: 34, rarity: "legendary", earners: ["N","K","+3"] },
  ]},
  { title: "Photography", icon: "📸", hue: "from-primary/20", badges: [
    { base: "📷", top: "🔭", name: "Camera Lens", desc: "Upload 25 photos.", req: "25 uploads.", xp: 250, progress: 60, rarity: "rare", eta: "10 photos", earners: ["K","V","+8"] },
    { base: "📷", top: "✨", name: "Golden Aperture", desc: "Win a Snapshot Showdown.", req: "1st place in Snapshot.", xp: 700, progress: 20, rarity: "epic", earners: ["K","N"] },
    { base: "🎗️", top: "📷", name: "Photo Ribbon", desc: "10 featured shots.", req: "10 featured photos.", xp: 500, progress: 45, rarity: "rare", earners: ["K","+5"] },
  ]},
  { title: "Artwork", icon: "🎨", hue: "from-accent/20", badges: [
    { base: "🖌️", top: "✨", name: "Paint Brush", desc: "Post your first artwork.", req: "1 artwork posted.", xp: 100, progress: 100, rarity: "common", earners: ["all"] },
    { base: "🎨", top: "💎", name: "Creative Palette", desc: "Post in 5 categories.", req: "5 different categories.", xp: 400, progress: 60, rarity: "rare", earners: ["K","+18"] },
    { base: "🎗️", top: "🖋️", name: "Ink Medal", desc: "Featured artist of the month.", req: "Featured 30 days.", xp: 1200, progress: 12, rarity: "legendary", earners: ["K"] },
  ]},
  { title: "Gaming", icon: "🎮", hue: "from-secondary/20", badges: [
    { base: "🎮", top: "⭐", name: "Controller Badge", desc: "Play 50 matches.", req: "50 matches finished.", xp: 300, progress: 72, rarity: "rare", earners: ["N","V","+30"] },
    { base: "👾", top: "👑", name: "Pixel Crown", desc: "Top-100 leaderboard.", req: "Reach top-100.", xp: 900, progress: 30, rarity: "epic", earners: ["N","+7"] },
    { base: "🏅", top: "🔟", name: "Level Badge", desc: "Reach level 50.", req: "Level 50.", xp: 700, progress: 82, rarity: "rare", earners: ["+80"] },
  ]},
  { title: "Developer", icon: "💻", hue: "from-primary/20", badges: [
    { base: "🔷", top: "💻", name: "Code Crystal", desc: "Contribute to the bot repo.", req: "1 merged PR.", xp: 800, progress: 0, rarity: "epic", locked: true, earners: ["+4"] },
    { base: "⬛", top: "🖥️", name: "Terminal Badge", desc: "Use every dev command.", req: "All CLI cmds used.", xp: 500, progress: 22, rarity: "rare", earners: ["+6"] },
    { base: "🐛", top: "🎯", name: "Bug Hunter", desc: "Report a valid bug.", req: "1 confirmed bug.", xp: 250, progress: 33, rarity: "rare", earners: ["+11"] },
  ]},
  { title: "Moderator", icon: "🛡️", hue: "from-secondary/20", badges: [
    { base: "🔨", top: "⚡", name: "Golden Hammer", desc: "Resolve 100 reports.", req: "100 mod actions.", xp: 900, progress: 40, rarity: "epic", earners: ["B","M"] },
    { base: "🛡️", top: "🔒", name: "Security Shield", desc: "Prevent a raid.", req: "Auto-mod trigger stopped a raid.", xp: 1500, progress: 0, rarity: "legendary", locked: true, earners: ["B"] },
  ]},
  { title: "Verified", icon: "✅", hue: "from-accent/20", badges: [
    { base: "🛡️", top: "⭐", name: "Star Shield", desc: "Verified creator.", req: "Apply + approval.", xp: 600, progress: 0, rarity: "epic", locked: true, earners: ["K","N"] },
    { base: "⚡", top: "✅", name: "Lightning Badge", desc: "Verified fast responder.", req: "Reply within 5m for 30d.", xp: 400, progress: 55, rarity: "rare", earners: ["+9"] },
  ]},
  { title: "Mythic", icon: "🌌", hue: "from-[#ff2fa8]/15", badges: [
    { base: "🐉", top: "👑", name: "Legendary Dragon", desc: "Only 0.1% will ever hold this.", req: "Ultra-rare season objective.", xp: 5000, progress: 3, rarity: "mythic", earners: ["N"] },
    { base: "🔥", top: "🕊️", name: "Phoenix Medal", desc: "Return from a 30-day silence and win.", req: "Hidden objective.", xp: 4000, progress: 0, rarity: "mythic", locked: true, earners: [] },
    { base: "🌌", top: "✨", name: "Galaxy Badge", desc: "Every category maxed.", req: "Complete every category.", xp: 8000, progress: 12, rarity: "mythic", earners: [] },
    { base: "💎", top: "👑", name: "Diamond Crown", desc: "1-year premium streak.", req: "365d premium.", xp: 6000, progress: 44, rarity: "mythic", earners: ["N","K","B"] },
  ]},
];

function Page() {
  const all = CATEGORIES.flatMap(c => c.badges);
  const total = all.length;
  const earned = all.filter(b => b.progress === 100).length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-14">
      {/* HERO */}
      <section className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <NeoCard className="p-0 overflow-hidden relative min-h-[340px] neo-shadow-lg">
          <img src={heroImg} alt="Badge cabinet wall" className="absolute inset-0 h-full w-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-transparent" />
          {/* floating decorations */}
          {["🏆","🎖️","🥇","🛡️","⭐"].map((e,i)=>(
            <span key={i} className="absolute text-2xl neo-border neo-shadow-sm bg-card rounded-full h-10 w-10 grid place-items-center animate-pulse"
              style={{ top: `${8 + i*15}%`, right: `${4 + (i%2)*8}%`, animationDelay: `${i*250}ms` }}>{e}</span>
          ))}
          <div className="relative p-6 sm:p-10 h-full flex flex-col justify-end">
            <NeoBadge variant="accent" className="mb-3 w-fit">Badge Cabinet</NeoBadge>
            <h1 className="font-display text-4xl sm:text-6xl leading-none">Every Flex, One Wall</h1>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">Original illustrated badges across 10 lines — from Common all the way to Mythic.</p>
          </div>
        </NeoCard>

        <div className="grid gap-4 sm:grid-cols-2">
          <NeoCard className="p-5 bg-primary text-primary-foreground relative overflow-hidden">
            <span className="absolute -top-2 -right-2 text-6xl opacity-20 rotate-12">🏅</span>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Collection</div>
            <div className="font-display text-4xl mt-1">{earned}/{total}</div>
            <div className="mt-3 h-2 w-full neo-border rounded-full bg-primary-foreground/20 overflow-hidden">
              <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${(earned/total)*100}%` }} />
            </div>
            <div className="text-[11px] mt-2 opacity-80">Next milestone · 25 badges</div>
          </NeoCard>
          <NeoCard className="p-5 relative overflow-hidden">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Rarity split</div>
            <div className="mt-3 space-y-2">
              {(["common","rare","epic","legendary","mythic"] as Rarity[]).map((r) => (
                <div key={r} className="flex items-center gap-2 text-xs">
                  <span className={`inline-block h-3 w-3 rounded-full ${RARITY[r].chip}`} />
                  <span className="capitalize flex-1">{r}</span>
                  <span className="font-display">{all.filter(b => b.rarity === r).length}</span>
                </div>
              ))}
            </div>
          </NeoCard>
          <NeoCard className="p-5 bg-accent text-accent-foreground col-span-2 relative overflow-hidden">
            <span className="absolute -bottom-4 -right-4 text-7xl opacity-20 -rotate-12">👑</span>
            <div className="flex items-start justify-between gap-3 relative">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Next unlock</div>
                <div className="font-display text-2xl mt-1">Legendary Dragon Crest 🐉</div>
                <div className="text-[11px] opacity-80 mt-1">Complete the season objective before Sunday.</div>
              </div>
              <div className="text-4xl animate-bounce" style={{ animationDuration: "2s" }}>🐉</div>
            </div>
            <div className="mt-3 h-2 w-full neo-border rounded-full bg-accent-foreground/20 overflow-hidden">
              <div className="h-full bg-background" style={{ width: "42%" }} />
            </div>
          </NeoCard>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {CATEGORIES.map((cat) => (
        <section key={cat.title}>
          <SectionHeader
            eyebrow="Category"
            title={`${cat.icon}  ${cat.title} Badges`}
            subtitle={`${cat.badges.length} in this line.`}
            action={<NeoBadge variant="muted">{cat.badges.filter(b=>b.progress===100).length} / {cat.badges.length} earned</NeoBadge>}
          />
          <div className={`neo-border neo-shadow rounded-lg p-5 relative overflow-hidden bg-gradient-to-br ${cat.hue} to-transparent`}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cat.badges.map((b) => {
                const r = RARITY[b.rarity];
                const unlocked = b.progress === 100;
                return (
                  <div key={b.name} className={`neo-border neo-shadow-sm rounded-md p-4 bg-card relative overflow-hidden group hover:-translate-y-1 transition-transform ${b.locked ? "opacity-75" : ""} ${unlocked ? r.glow : ""}`}>
                    {/* Mini background artwork */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${r.grad}`} />
                    <span className="absolute -top-4 -right-4 text-7xl opacity-10 rotate-12">{b.base}</span>
                    {/* Particles */}
                    {unlocked && (
                      <>
                        <span className="absolute top-2 right-2 text-xs animate-pulse">✨</span>
                        <span className="absolute bottom-3 left-3 text-[10px] animate-pulse" style={{animationDelay:"400ms"}}>⭐</span>
                      </>
                    )}
                    <div className="relative">
                      <div className="flex items-start justify-between gap-2">
                        <div className={`group-hover:scale-110 transition-transform ${b.locked ? "grayscale opacity-70" : ""}`}>
                          <BadgeArt base={b.locked ? "🔒" : b.base} top={b.locked ? undefined : b.top} ring={r.ring} tint={r.chip} />
                        </div>
                        <NeoBadge variant={
                          b.rarity === "mythic" ? "destructive" :
                          b.rarity === "legendary" ? "accent" :
                          b.rarity === "epic" ? "secondary" :
                          b.rarity === "rare" ? "primary" : "muted"
                        }>{b.rarity}</NeoBadge>
                      </div>

                      <div className="font-display text-lg mt-4">{b.name}</div>
                      <p className="text-[11px] text-muted-foreground mt-0.5 min-h-[32px]">{b.desc}</p>

                      {/* Requirement chip */}
                      <div className="mt-3 neo-border neo-shadow-sm rounded-md bg-background/60 px-2 py-1.5 text-[10px] font-display uppercase tracking-widest flex items-center gap-2">
                        <span>📋</span><span className="truncate">{b.req}</span>
                      </div>

                      {/* Progress ring style bar */}
                      <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                        <span>+{b.xp} XP</span>
                        <span>{b.progress}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full neo-border rounded-full bg-muted overflow-hidden">
                        <div className={`h-full transition-all duration-700 ${unlocked ? "bg-accent" : "bg-primary"}`} style={{ width: `${b.progress}%` }} />
                      </div>

                      {/* Recent earners */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-1.5">
                          {b.earners.slice(0,4).map((e,i)=>(
                            <span key={i} className="h-6 w-6 grid place-items-center rounded-full neo-border bg-primary text-primary-foreground text-[9px] font-display">
                              {e.length > 2 ? e : e[0]}
                            </span>
                          ))}
                        </div>
                        <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                          {b.eta ?? (unlocked ? "Earned" : "Locked")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Recent earners global feed */}
      <section>
        <SectionHeader eyebrow="Live" title="Just unlocked" subtitle="Fresh badge unlocks across the server." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "Nova", b: "Golden Trophy", t: "1m ago", r: "epic" },
            { n: "Kite", b: "Golden Aperture", t: "4m ago", r: "epic" },
            { n: "Blaze", b: "Community Star", t: "12m ago", r: "legendary" },
            { n: "Vex", b: "Level Badge", t: "22m ago", r: "rare" },
            { n: "Mira", b: "Handshake", t: "40m ago", r: "rare" },
            { n: "Toma", b: "Chat Bubble", t: "1h ago", r: "rare" },
          ].map((u) => (
            <NeoCard key={`${u.n}-${u.b}`} className="p-3 flex items-center gap-3 hover:-translate-y-0.5 transition-transform">
              <div className="h-11 w-11 grid place-items-center neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-full font-display">{u.n[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-sm truncate">{u.n} <span className="text-muted-foreground text-[11px] font-normal">earned</span> {u.b}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{u.t} · {u.r}</div>
              </div>
              <NeoBadge variant={u.r==="legendary"?"accent":u.r==="epic"?"secondary":"primary"}>{u.r}</NeoBadge>
            </NeoCard>
          ))}
        </div>
      </section>
    </div>
  );
}
