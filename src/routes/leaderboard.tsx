import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — The Shouter" },
      { name: "description", content: "Top players, teams, and servers this season." },
      { property: "og:title", content: "Leaderboard — The Shouter" },
      { property: "og:description", content: "Top players, teams, and servers this season." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/leaderboard" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/leaderboard" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Ranks"
        title="Leaderboard"
        tagline="Top players, teams, and servers this season."
        heroKey="dash-tournament"
        actions={<><NeoBadge variant="accent">Ranks</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"443"},{"label":"This week","value":"15"},{"label":"Change","value":"+4%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"leaderboard-0","primary":"#1 shadow#0001","secondary":"12,480 XP · 68% WR","meta":"Season 5","tag":"👑"},{"id":"leaderboard-1","primary":"#2 ghostpixel","secondary":"11,020 XP · 61% WR","meta":"Season 5","tag":"🥈"},{"id":"leaderboard-2","primary":"#3 nova.exe","secondary":"9,870 XP · 59% WR","meta":"Season 5","tag":"🥉"},{"id":"leaderboard-3","primary":"#4 ember","secondary":"9,200 XP · 55% WR","meta":"Season 5","tag":""}]} />
          <NeoCard className="p-5 space-y-3 bg-secondary text-secondary-foreground">
            <div className="text-[10px] uppercase tracking-widest opacity-80">Get involved</div>
            <div className="font-display text-2xl leading-tight">Join the loudest server on Discord</div>
            <p className="text-sm opacity-90">The Shouter is open to every squad, streamer, and artist. Jump in and make some noise.</p>
            <a href="/explore" className="inline-block neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2 text-xs font-display uppercase">Explore events →</a>
          </NeoCard>
        </div>
      </DashboardPage>
    </div>
  );
}
