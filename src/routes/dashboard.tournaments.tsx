import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid } from "@/components/dashboard-page";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { Trophy, Swords, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard/tournaments")({
  head: () => ({ meta: [{ title: "Tournament Progress — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

const RUNS = [
  { name: "BGMI Midnight Clash #14", stage: "Quarterfinals", opp: "Team RIOT", record: "3-1", pct: 75, next: "Sat 8:00 PM" },
  { name: "Free Fire Arena Cup", stage: "Round of 16", opp: "Blaze Boys", record: "1-0", pct: 25, next: "Mon 7:00 PM" },
  { name: "Valorant Neon Split", stage: "Group Stage", opp: "Ghost Circuit", record: "2-2", pct: 50, next: "Tomorrow" },
];

const STAGES = ["R64", "R32", "R16", "QF", "SF", "Final"];

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Tournament Progress"
      tagline="Bracket runs, opponents, next matches, and W/L history — everything you need for finals week."
      heroKey="dash-tournament"
    >
      <StatGrid
        items={[
          { label: "Active brackets", value: 3, hint: "In play" },
          { label: "Wins", value: 12, hint: "Season" },
          { label: "Losses", value: 5, hint: "Season" },
          { label: "Trophies", value: 3, hint: "Career" },
        ]}
      />

      <SectionHeader eyebrow="Live runs" title="Your active brackets" />
      <div className="grid gap-4 lg:grid-cols-2">
        {RUNS.map((r) => (
          <NeoCard key={r.name} className="p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <div className="font-display text-lg leading-tight truncate">{r.name}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  {r.stage} · vs {r.opp} · Next {r.next}
                </div>
              </div>
              <NeoBadge variant="success">{r.record}</NeoBadge>
            </div>

            {/* Stage tracker */}
            <div className="flex items-center gap-1">
              {STAGES.map((s, i) => {
                const idx = STAGES.indexOf(r.stage);
                const done = i < idx;
                const current = i === idx;
                return (
                  <div key={s} className="flex items-center flex-1">
                    <div className={`h-8 flex-1 rounded-md neo-border grid place-items-center text-[10px] font-display uppercase ${
                      current ? "bg-primary text-primary-foreground animate-pulse" : done ? "bg-secondary text-secondary-foreground" : "bg-muted"
                    }`}>{s}</div>
                    {i < STAGES.length - 1 && <div className={`h-1 w-2 ${done ? "bg-primary" : "bg-muted"}`} />}
                  </div>
                );
              })}
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[10px] uppercase text-muted-foreground mb-1">
                <span>Run progress</span><span>{r.pct}%</span>
              </div>
              <div className="h-2 rounded-full neo-border bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${r.pct}%` }} />
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <NeoButton size="sm"><Swords className="h-3.5 w-3.5" />Open bracket</NeoButton>
              <NeoButton size="sm" variant="ghost">Match history</NeoButton>
            </div>
          </NeoCard>
        ))}
      </div>

      <SectionHeader eyebrow="Timeline" title="Recent match results" />
      <NeoCard className="p-5">
        <ol className="relative border-l-4 border-foreground/40 space-y-4 pl-5">
          {[
            { r: "W", txt: "Beat Team RIOT 13-9 in Quarterfinals", t: "2h ago" },
            { r: "W", txt: "Beat Blaze Boys 2-0 in Round of 32", t: "1d ago" },
            { r: "L", txt: "Lost to Ghost Circuit 1-2 in Group Stage", t: "3d ago" },
            { r: "W", txt: "Beat Neon Wolves 3-1 in Round of 16", t: "5d ago" },
          ].map((m, i) => (
            <li key={i} className="relative">
              <span className={`absolute -left-[29px] h-5 w-5 rounded-full neo-border grid place-items-center text-[10px] font-display ${m.r === "W" ? "bg-[color:var(--success)] text-black" : "bg-destructive text-white"}`}>{m.r}</span>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1"><TrendingUp className="h-3 w-3" />{m.t}</div>
              <div className="text-sm">{m.txt}</div>
            </li>
          ))}
        </ol>
      </NeoCard>

      <NeoCard className="p-5 flex items-center gap-4 relative overflow-hidden">
        <Trophy className="h-10 w-10 shrink-0 text-primary" />
        <div className="min-w-0">
          <div className="font-display">Championship path</div>
          <div className="text-xs text-muted-foreground">2 wins from a trophy in BGMI Midnight Clash. Prep your squad — finals stream Saturday.</div>
        </div>
      </NeoCard>
    </DashboardPage>
  );
}
