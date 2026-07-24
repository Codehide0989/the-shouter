import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/tour-hero.jpg";
import fmtSingle from "@/assets/fmt-single.jpg";
import fmtDouble from "@/assets/fmt-double.jpg";
import fmtRound from "@/assets/fmt-round.jpg";
import fmtSwiss from "@/assets/fmt-swiss.jpg";
import fmtBr from "@/assets/fmt-br.jpg";
import toolBracket from "@/assets/tool-bracket.jpg";
import toolSchedule from "@/assets/tool-schedule.jpg";
import toolReport from "@/assets/tool-report.jpg";
import toolAppeals from "@/assets/tool-appeals.jpg";
import toolVerify from "@/assets/tool-verify.jpg";
import toolAnticheat from "@/assets/tool-anticheat.jpg";
import coverTournament from "@/assets/cover-tournament.jpg";
import coverArtwork from "@/assets/cover-artwork.jpg";
import coverPicbattle from "@/assets/cover-picbattle.jpg";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournament System — The Shouter" },
      { name: "description", content: "Formats, brackets, schedules, reports and appeals — one competitive stack." },
      { property: "og:title", content: "Tournament Arena — The Shouter" },
      { property: "og:description", content: "Every format, every tool, every bracket." },
      { property: "og:image", content: "/assets/tour-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const FORMATS = [
  { slug: "single-elim", label: "Single Elimination", img: fmtSingle, tag: "One loss and you're out.", diff: "Easy", matches: "15", players: "16 teams", tint: "from-primary/25" },
  { slug: "double-elim", label: "Double Elimination", img: fmtDouble, tag: "Losers bracket keeps hope alive.", diff: "Medium", matches: "30", players: "16 teams", tint: "from-secondary/25" },
  { slug: "round-robin", label: "Round Robin", img: fmtRound, tag: "Everyone plays everyone.", diff: "Medium", matches: "45", players: "10 teams", tint: "from-accent/25" },
  { slug: "swiss", label: "Swiss System", img: fmtSwiss, tag: "Matched by score every round.", diff: "Hard", matches: "35", players: "32 teams", tint: "from-primary/25" },
  { slug: "battle-royale", label: "Battle Royale", img: fmtBr, tag: "Last squad standing wins.", diff: "Chaos", matches: "12", players: "100 solos", tint: "from-destructive/25" },
];

const TOOLS = [
  { slug: "bracket-generator", label: "Bracket Generator", img: toolBracket, tag: "Auto-seed by rank or randomize.", accent: "bg-primary" },
  { slug: "schedule-generator", label: "Schedule Generator", img: toolSchedule, tag: "Slot matches around timezones.", accent: "bg-accent" },
  { slug: "match-reporting", label: "Match Reporting", img: toolReport, tag: "Score submission with proof.", accent: "bg-secondary" },
  { slug: "appeals", label: "Appeals", img: toolAppeals, tag: "Escalate to staff review.", accent: "bg-primary" },
  { slug: "verification", label: "Verification", img: toolVerify, tag: "Prove identity, prove roster.", accent: "bg-accent" },
  { slug: "anti-cheat", label: "Anti-Cheat", img: toolAnticheat, tag: "Screening, replays, receipts.", accent: "bg-destructive text-white" },
];

const FEATURED = [
  { title: "Squad Rumble · Season 5", prize: "$5,000", banner: coverTournament, when: "Starts Sat 20:00 UTC", tag: "Live registration" },
  { title: "Pixel Wars Grand Finale", prize: "$2,500", banner: coverArtwork, when: "Sun 18:00 UTC", tag: "Featured" },
  { title: "Snapshot Showdown", prize: "$1,200", banner: coverPicbattle, when: "Next week", tag: "Community" },
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-12">
      {/* HERO — arena banner with overlay stats */}
      <section className="relative neo-border neo-shadow rounded-lg overflow-hidden">
        <img src={heroImg} alt="Tournament arena" className="w-full h-[380px] sm:h-[460px] object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent" />
        {/* Floating particles */}
        <span className="absolute top-8 left-10 h-3 w-3 rounded-full bg-accent neo-border animate-pulse" />
        <span className="absolute top-24 right-16 h-4 w-4 rounded-full bg-primary neo-border animate-pulse" style={{ animationDelay: "300ms" }} />
        <span className="absolute bottom-16 left-1/3 h-2 w-2 rounded-full bg-secondary neo-border animate-pulse" style={{ animationDelay: "600ms" }} />
        {/* Live ribbon */}
        <div className="absolute top-5 right-5 rotate-6 neo-border neo-shadow-sm bg-destructive text-white px-3 py-1.5 font-display text-xs uppercase tracking-widest flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> Live · 18 arenas
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-10">
          <NeoBadge variant="accent" className="mb-3">Compete</NeoBadge>
          <h1 className="font-display text-3xl sm:text-6xl leading-none max-w-2xl">Tournament Arena</h1>
          <p className="mt-3 max-w-lg text-sm sm:text-base text-foreground/90">Formats, brackets, schedules, reports and appeals — every match, one stack.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <NeoButton variant="primary">Register a Team</NeoButton>
            <NeoButton variant="secondary">Browse Live</NeoButton>
          </div>
        </div>
      </section>

      {/* COUNTDOWN RIBBON */}
      <div className="neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-display uppercase text-xs tracking-widest">Next Match Starts In</span>
        </div>
        <div className="flex gap-2 font-display text-xl">
          {[["02","D"],["14","H"],["37","M"],["09","S"]].map(([n,l]) => (
            <div key={l} className="neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-1 min-w-[52px] text-center">
              {n}<span className="text-[9px] block leading-none opacity-70">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STAT DASHBOARD — asymmetric bento */}
      <section className="grid gap-4 md:grid-cols-4">
        <NeoCard className="md:col-span-2 relative overflow-hidden p-6 min-h-[160px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Prize Pool · Season 5</div>
            <div className="font-display text-5xl mt-1">$127,400</div>
            <div className="mt-3 h-2 w-full neo-border rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "68%" }} />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">68% of season target funded</div>
          </div>
        </NeoCard>
        {[
          { l: "Active", v: "18", h: "arenas" },
          { l: "Teams", v: "1,204", h: "registered" },
          { l: "Live now", v: "312", h: "spectators" },
          { l: "This week", v: "92", h: "matches" },
        ].slice(0, 4).map((s) => (
          <NeoCard key={s.l} className="p-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
            <div className="font-display text-3xl mt-1">{s.v}</div>
            <div className="text-[11px] text-muted-foreground mt-1">{s.h}</div>
          </NeoCard>
        ))}
      </section>

      {/* FEATURED CAROUSEL */}
      <section>
        <SectionHeader eyebrow="Featured" title="Headline Tournaments" subtitle="Curated picks with live registration." />
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {FEATURED.map((f) => (
            <div key={f.title} className="snap-start shrink-0 w-[85%] sm:w-[420px]">
              <NeoCard className="p-0 overflow-hidden group">
                <div className="relative">
                  <img src={f.banner} alt="" className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <NeoBadge variant="destructive" className="absolute top-3 left-3">{f.tag}</NeoBadge>
                  <div className="absolute top-3 right-3 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md px-2 py-1 font-display text-[10px] uppercase">Prize {f.prize}</div>
                </div>
                <div className="p-4">
                  <div className="font-display text-xl">{f.title}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{f.when}</div>
                  <div className="mt-3 flex gap-2">
                    <NeoButton size="sm" variant="primary">Register</NeoButton>
                    <NeoButton size="sm" variant="ghost">Bracket</NeoButton>
                  </div>
                </div>
              </NeoCard>
            </div>
          ))}
        </div>
      </section>

      {/* BRACKET PREVIEW — mini ascii-style */}
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <NeoCard className="p-5 sm:p-6 relative overflow-hidden">
          <NeoBadge variant="secondary" className="mb-3">Preview</NeoBadge>
          <h3 className="font-display text-2xl">Bracket · Squad Rumble QF</h3>
          <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
            {[
              ["QUARTERS", ["Team Alpha","Nova","Phantom","Blaze","Riot","Kite","Hex","Onyx"]],
              ["SEMIS", ["Alpha","Phantom","Riot","Onyx"]],
              ["FINAL", ["Alpha","Onyx"]],
            ].map(([col, teams]) => (
              <div key={col as string} className="space-y-2">
                <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">{col}</div>
                {(teams as string[]).map((t, i) => (
                  <div key={i} className="neo-border neo-shadow-sm bg-card rounded-md px-2 py-1.5 flex justify-between items-center">
                    <span className="truncate font-display">{t}</span>
                    <span className="text-[10px] text-muted-foreground">{Math.floor(Math.random()*3)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </NeoCard>
        <NeoCard className="p-5 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="text-[10px] uppercase tracking-widest opacity-80">Timeline</div>
          <div className="font-display text-2xl mt-1">Road to the Cup</div>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              ["Open Registration", "Aug 1 – Aug 12"],
              ["Qualifiers", "Aug 15 – Aug 20"],
              ["Group Stage", "Aug 22 – Aug 30"],
              ["Playoffs", "Sep 4 – Sep 8"],
              ["Grand Final", "Sep 14 · 20:00 UTC"],
            ].map(([t, w], i) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="neo-border bg-background text-foreground h-6 w-6 grid place-items-center rounded-full font-display text-[10px] shrink-0">{i+1}</span>
                <div>
                  <div className="font-display">{t}</div>
                  <div className="text-[11px] opacity-80">{w}</div>
                </div>
              </li>
            ))}
          </ol>
        </NeoCard>
      </section>

      {/* FORMATS — big magazine cards */}
      <section>
        <SectionHeader eyebrow="Choose your battle" title="Tournament Formats" subtitle="Every format ships with its own bracket engine, tiebreakers, and reporting flow." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((f) => (
            <Link key={f.slug} to={"/tournaments/formats/$slug" as any} params={{ slug: f.slug } as any}>
              <NeoCard className="p-0 overflow-hidden group h-full transition-all hover:-translate-y-1 hover:neo-shadow-lg">
                <div className="relative h-40 overflow-hidden">
                  <img src={f.img} alt={f.label} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${f.tint} to-transparent`} />
                  <NeoBadge variant="secondary" className="absolute top-3 left-3">Format</NeoBadge>
                </div>
                <div className="p-5">
                  <div className="font-display text-xl">{f.label}</div>
                  <p className="text-xs text-muted-foreground mt-1">{f.tag}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="neo-border rounded-md p-2 bg-muted/40">
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Diff</div>
                      <div className="font-display text-sm">{f.diff}</div>
                    </div>
                    <div className="neo-border rounded-md p-2 bg-muted/40">
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Matches</div>
                      <div className="font-display text-sm">{f.matches}</div>
                    </div>
                    <div className="neo-border rounded-md p-2 bg-muted/40">
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Roster</div>
                      <div className="font-display text-sm">{f.players}</div>
                    </div>
                  </div>
                  <NeoButton size="sm" variant="primary" className="mt-4 w-full">Use this format →</NeoButton>
                </div>
              </NeoCard>
            </Link>
          ))}
          <NeoCard className="p-6 flex flex-col justify-center items-center text-center bg-accent text-accent-foreground">
            <div className="font-display text-2xl">Custom Format</div>
            <p className="text-xs mt-2 opacity-90">Design your own hybrid — Swiss into single-elim, GSL groups, or a full ladder.</p>
            <NeoButton size="sm" variant="ghost" className="mt-4">Talk to Ops</NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* TOOLS — horizontal image cards */}
      <section>
        <SectionHeader eyebrow="Toolbox" title="Tournament Tools" subtitle="Everything staff and captains need after registration closes." />
        <div className="grid gap-4 md:grid-cols-2">
          {TOOLS.map((t) => (
            <Link key={t.slug} to={"/tournaments/$slug" as any} params={{ slug: t.slug } as any}>
              <NeoCard className="p-0 overflow-hidden flex group transition-all hover:-translate-y-0.5 hover:neo-shadow-lg h-full">
                <div className="w-32 sm:w-40 shrink-0 relative">
                  <img src={t.img} alt={t.label} className="h-full w-full object-cover" loading="lazy" />
                  <div className={`absolute inset-y-0 right-0 w-1 ${t.accent}`} />
                </div>
                <div className="flex-1 p-4 min-w-0">
                  <NeoBadge variant="muted">Tool</NeoBadge>
                  <div className="font-display text-lg mt-2 truncate">{t.label}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t.tag}</p>
                  <div className="mt-3 text-[11px] font-display uppercase tracking-widest text-primary">Open →</div>
                </div>
              </NeoCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
