import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/achievements-hero-v2.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievement Hall — The Shouter" },
      { name: "description", content: "Every unlockable, every champion — the full trophy room." },
      { property: "og:title", content: "Achievement Hall — The Shouter" },
      { property: "og:description", content: "Progress tracker, timeline, categories and every rare unlock in one place." },
      { property: "og:image", content: "/assets/achievements-hero-v2.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/assets/achievements-hero-v2.jpg" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: Page,
});

type Diff = "easy" | "normal" | "hard" | "mythic";
type Ach = {
  icon: string;
  name: string;
  desc: string;
  xp: number;
  progress: number;
  diff: Diff;
  reward: string;
  unlocked?: string;
  hidden?: boolean;
};

const DIFF: Record<Diff, { chip: string; ring: string; glow: string }> = {
  easy: { chip: "bg-[color:var(--success)] text-black", ring: "ring-[color:var(--success)]", glow: "" },
  normal: { chip: "bg-primary text-primary-foreground", ring: "ring-primary", glow: "shadow-[0_0_16px_hsl(var(--primary)/0.35)]" },
  hard: { chip: "bg-secondary text-secondary-foreground", ring: "ring-secondary", glow: "shadow-[0_0_22px_hsl(var(--secondary)/0.4)]" },
  mythic: { chip: "bg-accent text-accent-foreground", ring: "ring-accent", glow: "shadow-[0_0_28px_hsl(var(--accent)/0.55)]" },
};

const CATEGORIES: Array<{ title: string; icon: string; hue: string; items: Ach[] }> = [
  { title: "Tournament", icon: "🏆", hue: "from-primary/25", items: [
    { icon: "🥇", name: "First Blood", desc: "Win your first tournament match.", xp: 100, progress: 100, diff: "easy", reward: "Rookie badge", unlocked: "May 12" },
    { icon: "🏆", name: "Bracket Buster", desc: "Take a 16-team bracket.", xp: 800, progress: 74, diff: "hard", reward: "Bracket frame" },
    { icon: "👑", name: "Season Champion", desc: "Win an official season crown.", xp: 2500, progress: 42, diff: "mythic", reward: "Champion aura" },
  ]},
  { title: "Discord", icon: "💬", hue: "from-secondary/25", items: [
    { icon: "🔊", name: "Loud & Proud", desc: "Post 500 messages.", xp: 150, progress: 88, diff: "easy", reward: "Chat badge" },
    { icon: "🎙️", name: "Voice Chatter", desc: "1,000 minutes in VC.", xp: 300, progress: 41, diff: "normal", reward: "Voice crown" },
    { icon: "🤖", name: "Bot Whisperer", desc: "Use every prefix command.", xp: 500, progress: 6, diff: "hard", reward: "Bot cape" },
  ]},
  { title: "Artwork", icon: "🎨", hue: "from-accent/25", items: [
    { icon: "🎨", name: "First Drop", desc: "Post your first artwork.", xp: 100, progress: 100, diff: "easy", reward: "Artist ribbon", unlocked: "Apr 02" },
    { icon: "🌟", name: "Featured", desc: "Land on the front page.", xp: 900, progress: 18, diff: "hard", reward: "Gold frame" },
    { icon: "🖼️", name: "Gallery Icon", desc: "100k lifetime views.", xp: 3000, progress: 3, diff: "mythic", reward: "Legendary frame" },
  ]},
  { title: "Photography", icon: "📸", hue: "from-primary/20", items: [
    { icon: "📷", name: "Shutterbug", desc: "Upload 25 photos.", xp: 200, progress: 60, diff: "normal", reward: "Lens badge" },
    { icon: "🔭", name: "Golden Hour", desc: "Win a Snapshot Showdown.", xp: 700, progress: 20, diff: "hard", reward: "Golden aperture" },
  ]},
  { title: "Community", icon: "🤝", hue: "from-secondary/25", items: [
    { icon: "🤝", name: "Welcomer", desc: "Greet 50 new members.", xp: 200, progress: 55, diff: "normal", reward: "Handshake" },
    { icon: "🎉", name: "Event Host", desc: "Host a picture battle.", xp: 350, progress: 27, diff: "normal", reward: "Host badge" },
    { icon: "💜", name: "Patron", desc: "Support the server.", xp: 1500, progress: 8, diff: "mythic", reward: "Patron aura" },
  ]},
  { title: "Bot & Dev", icon: "🤖", hue: "from-accent/20", items: [
    { icon: "🐛", name: "Bug Hunter", desc: "Report a valid bug.", xp: 250, progress: 33, diff: "normal", reward: "Bug crystal" },
    { icon: "🧪", name: "Beta Tester", desc: "Test 5 pre-releases.", xp: 400, progress: 40, diff: "hard", reward: "Terminal badge" },
  ]},
];

const HIDDEN: Ach[] = [
  { icon: "🕵️", name: "??? · Ghost Mode", desc: "Do the thing no one talks about.", xp: 1200, progress: 0, diff: "mythic", reward: "Hidden crest", hidden: true },
  { icon: "🎭", name: "??? · Masked Player", desc: "Only 12 members have this.", xp: 900, progress: 0, diff: "hard", reward: "Mask badge", hidden: true },
  { icon: "🌌", name: "??? · Cosmic", desc: "Reach the impossible.", xp: 5000, progress: 0, diff: "mythic", reward: "Galaxy aura", hidden: true },
];

const TIMELINE = [
  { d: "Today", i: "🏆", t: "Bracket Buster · Tier III", xp: 800, tag: "Tournament" },
  { d: "2d ago", i: "🎨", t: "Featured on the front page", xp: 900, tag: "Artwork" },
  { d: "5d ago", i: "🔊", t: "Loud & Proud · 500 msgs", xp: 150, tag: "Discord" },
  { d: "1w ago", i: "🤝", t: "Welcomer · 50 members", xp: 200, tag: "Community" },
  { d: "2w ago", i: "🥇", t: "First Blood", xp: 100, tag: "Tournament" },
];

const FRIENDS = [
  { n: "Nova", i: "N", a: "👑 Season Champion", when: "just now" },
  { n: "Kite", i: "K", a: "🖼️ Gallery Icon +5%", when: "12m ago" },
  { n: "Blaze", i: "B", a: "🎙️ Voice Chatter maxed", when: "1h ago" },
  { n: "Vex", i: "V", a: "🐛 Bug Hunter", when: "3h ago" },
];

const HEATMAP = Array.from({ length: 7 * 12 }, (_, i) => {
  // Deterministic pseudo-random 0–4
  const v = Math.floor(((i * 73 + 13) % 17) / 4);
  return Math.min(4, v);
});
const HEAT_COLORS = ["bg-muted", "bg-primary/30", "bg-primary/55", "bg-primary/80", "bg-accent"];

function Page() {
  const totalItems = [...CATEGORIES.flatMap(c => c.items), ...HIDDEN];
  const completed = totalItems.filter(a => a.progress === 100).length;
  const total = totalItems.length;
  const completionPct = Math.round((completed / total) * 100);
  const totalXP = totalItems.reduce((n, a) => n + Math.round(a.xp * (a.progress/100)), 0);
  const circumference = 2 * Math.PI * 68;
  const dash = (completionPct/100) * circumference;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-14">
      {/* HERO — achievement hall */}
      <section className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden">
        <img src={heroImg} alt="Achievement Hall" className="w-full h-[320px] sm:h-[440px] object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        {/* Confetti */}
        {["🎉","🎊","⭐","✨","🏆","👑","🥇","🌟"].map((e, i) => (
          <span key={i} className="absolute text-2xl sm:text-3xl animate-bounce"
            style={{
              top: `${5 + (i*11)%75}%`,
              left: `${(i*17)%90}%`,
              animationDelay: `${i*200}ms`,
              animationDuration: `${2 + (i%3)}s`,
            }}>{e}</span>
        ))}
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end max-w-2xl">
          <NeoBadge variant="accent" className="mb-3 w-fit">Achievement Hall</NeoBadge>
          <h1 className="font-display text-4xl sm:text-6xl leading-none">Every Feat, Framed.</h1>
          <p className="mt-3 text-sm sm:text-base text-foreground/90 max-w-lg">Champion trophies, hidden crests, seasonal medals and the rare stuff nobody talks about — all yours to earn.</p>
        </div>
      </section>

      {/* PROGRESS DASHBOARD — completion circle + stats + heatmap */}
      <section className="grid gap-5 lg:grid-cols-[auto_1fr_1fr]">
        {/* Completion Wheel */}
        <NeoCard className="p-6 flex flex-col items-center bg-gradient-to-br from-accent/20 to-transparent relative overflow-hidden">
          <div className="absolute -top-6 -right-6 text-8xl opacity-10 rotate-12">🏆</div>
          <NeoBadge variant="accent">Completion</NeoBadge>
          <div className="relative mt-4 h-44 w-44 grid place-items-center">
            <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
              <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="14" className="text-muted" />
              <circle
                cx="80" cy="80" r="68" fill="none"
                stroke="hsl(var(--accent))" strokeWidth="14" strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute text-center">
              <div className="font-display text-4xl">{completionPct}%</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{completed}/{total}</div>
            </div>
          </div>
          <div className="mt-3 text-[11px] text-muted-foreground text-center">Global average · <b>34%</b></div>
        </NeoCard>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "Total XP", v: totalXP.toLocaleString(), i: "⚡", bg: "bg-primary text-primary-foreground" },
            { t: "Unlocked", v: `${completed}`, i: "🏅", bg: "bg-accent text-accent-foreground" },
            { t: "Rare (mythic)", v: totalItems.filter(a=>a.diff==="mythic"&&a.progress===100).length.toString(), i: "💎", bg: "bg-secondary text-secondary-foreground" },
            { t: "Hidden found", v: "0/3", i: "🕵️", bg: "bg-card" },
          ].map((s) => (
            <NeoCard key={s.t} className={`p-5 relative overflow-hidden ${s.bg}`}>
              <div className="absolute -top-3 -right-3 text-6xl opacity-25">{s.i}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">{s.t}</div>
              <div className="font-display text-3xl mt-2">{s.v}</div>
            </NeoCard>
          ))}
        </div>

        {/* Heatmap */}
        <NeoCard className="p-5">
          <div className="flex items-center justify-between mb-3">
            <NeoBadge variant="primary">12-week unlock heatmap</NeoBadge>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">less → more</span>
          </div>
          <div className="grid grid-cols-12 gap-1">
            {HEATMAP.map((v, i) => (
              <div key={i} className={`aspect-square rounded-sm neo-border ${HEAT_COLORS[v]}`} title={`Week ${Math.floor(i/7)+1}`} />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1 text-[9px] text-center text-muted-foreground uppercase">
            {["M","T","W","T","F","S","S"].map((d,i)=>(<div key={i}>{d}</div>))}
          </div>
        </NeoCard>
      </section>

      {/* TIMELINE + FRIENDS */}
      <section className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <NeoCard className="p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div>
              <NeoBadge variant="accent">Recent unlocks</NeoBadge>
              <h3 className="font-display text-2xl mt-2">Your timeline</h3>
            </div>
            <NeoButton variant="ghost" size="sm">Export</NeoButton>
          </div>
          <ol className="relative space-y-4 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-1 before:bg-foreground/20 before:neo-border">
            {TIMELINE.map((t) => (
              <li key={t.t} className="relative pl-14">
                <span className="absolute left-0 top-0 h-11 w-11 grid place-items-center neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full text-xl z-10">{t.i}</span>
                <div className="neo-border neo-shadow-sm bg-card rounded-md p-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-display text-sm truncate">{t.t}</div>
                    <div className="text-[11px] text-muted-foreground">{t.d} · {t.tag}</div>
                  </div>
                  <NeoBadge variant="primary">+{t.xp} XP</NeoBadge>
                </div>
              </li>
            ))}
          </ol>
        </NeoCard>

        <div className="space-y-5">
          <NeoCard className="p-5 bg-secondary text-secondary-foreground">
            <NeoBadge variant="accent">Friends</NeoBadge>
            <h3 className="font-display text-xl mt-2">Latest from your squad</h3>
            <div className="mt-4 space-y-2">
              {FRIENDS.map((f) => (
                <div key={f.n} className="neo-border neo-shadow-sm bg-background text-foreground rounded-md p-2.5 flex items-center gap-3">
                  <div className="h-9 w-9 grid place-items-center rounded-full neo-border neo-shadow-sm bg-primary text-primary-foreground font-display">{f.i}</div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-xs truncate">{f.n}</div>
                    <div className="text-[10px] text-muted-foreground truncate">{f.a}</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">{f.when}</div>
                </div>
              ))}
            </div>
          </NeoCard>

          <NeoCard className="p-5 bg-accent text-accent-foreground relative overflow-hidden">
            <span className="absolute -top-4 -right-4 text-7xl opacity-20 rotate-12">💜</span>
            <NeoBadge variant="destructive">Rare</NeoBadge>
            <h3 className="font-display text-xl mt-2">Global completion</h3>
            <p className="text-xs opacity-90 mt-1">Only <b>0.8%</b> of members hold all three mythics. Keep going.</p>
            <div className="mt-3 h-2 w-full neo-border rounded-full bg-background/30 overflow-hidden">
              <div className="h-full bg-background" style={{ width: "18%" }} />
            </div>
          </NeoCard>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {CATEGORIES.map((cat) => (
        <section key={cat.title}>
          <SectionHeader
            eyebrow="Category"
            title={`${cat.icon}  ${cat.title} achievements`}
            subtitle={`${cat.items.length} feats in this line.`}
          />
          <div className={`neo-border neo-shadow rounded-lg p-5 bg-gradient-to-br ${cat.hue} to-transparent`}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((a) => {
                const d = DIFF[a.diff];
                const unlocked = a.progress === 100;
                return (
                  <div key={a.name} className={`neo-border neo-shadow-sm rounded-md p-4 bg-card relative overflow-hidden group hover:-translate-y-1 transition-transform ${unlocked ? d.glow : ""}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className={`h-16 w-16 grid place-items-center rounded-full neo-border ${d.chip} text-3xl ring-4 ${d.ring} ${unlocked ? d.glow : ""} group-hover:scale-110 transition-transform`}>
                        {a.icon}
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        <NeoBadge variant={a.diff === "mythic" ? "accent" : a.diff === "hard" ? "secondary" : a.diff === "normal" ? "primary" : "success"}>{a.diff}</NeoBadge>
                        <NeoBadge variant="muted">+{a.xp} XP</NeoBadge>
                      </div>
                    </div>
                    <div className="font-display text-lg mt-3">{a.name}</div>
                    <p className="text-[11px] text-muted-foreground mt-1 min-h-[32px]">{a.desc}</p>

                    {/* Reward preview */}
                    <div className="mt-3 neo-border neo-shadow-sm bg-muted/60 rounded-md px-2 py-1.5 text-[10px] font-display uppercase tracking-widest flex items-center gap-2">
                      <span>🎁</span><span className="truncate">Reward: {a.reward}</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>{unlocked ? `Unlocked ${a.unlocked ?? ""}` : "In progress"}</span>
                      <span>{a.progress}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full neo-border rounded-full bg-muted overflow-hidden">
                      <div className={`h-full transition-all duration-700 ${unlocked ? "bg-accent" : "bg-primary"}`} style={{ width: `${a.progress}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* HIDDEN + SEASON */}
      <section className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <NeoCard className="p-6 relative overflow-hidden bg-gradient-to-br from-secondary/20 via-card to-primary/10">
          <div className="flex items-center justify-between">
            <NeoBadge variant="secondary">Hidden · Rare</NeoBadge>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">0 / 3 found</span>
          </div>
          <h3 className="font-display text-2xl mt-3">Hidden Achievements</h3>
          <p className="text-xs text-muted-foreground">Only unlocks when you find them. No hints.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {HIDDEN.map((h) => (
              <div key={h.name} className="neo-border neo-shadow-sm rounded-md p-4 bg-background/50 backdrop-blur text-center">
                <div className="text-4xl grayscale opacity-60">{h.icon}</div>
                <div className="font-display text-sm mt-2 blur-[3px] select-none">{h.name}</div>
                <div className="text-[10px] text-muted-foreground mt-1">+{h.xp} XP · Mythic</div>
              </div>
            ))}
          </div>
        </NeoCard>

        <NeoCard className="p-6 bg-primary text-primary-foreground relative overflow-hidden">
          <span className="absolute -bottom-4 -right-4 text-7xl opacity-25 -rotate-12">🌸</span>
          <NeoBadge variant="accent">Season 4</NeoBadge>
          <h3 className="font-display text-2xl mt-3">Season achievements</h3>
          <p className="text-xs opacity-90 mt-1">Time-limited feats. Locks when the season ends.</p>
          <div className="mt-4 space-y-2">
            {[
              ["🌸 Bloom", 60],
              ["⚔️ 5 bracket wins", 40],
              ["📸 Snapshot Top 10", 20],
            ].map(([t, p]) => (
              <div key={t as string} className="neo-border neo-shadow-sm bg-background/20 rounded-md p-2.5">
                <div className="flex justify-between text-xs font-display"><span>{t}</span><span>{p}%</span></div>
                <div className="mt-1.5 h-1.5 rounded-full bg-background/25 overflow-hidden neo-border">
                  <div className="h-full bg-accent" style={{ width: `${p}%` }} />
                </div>
              </div>
            ))}
          </div>
          <NeoButton variant="ghost" size="sm" className="mt-4 w-full">View season page</NeoButton>
        </NeoCard>
      </section>
    </div>
  );
}
