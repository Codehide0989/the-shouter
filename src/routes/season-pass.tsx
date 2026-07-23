import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/season-pass")({
  head: () => ({
    meta: [
      { title: "Season Pass — The Shouter" },
      { name: "description", content: "90 days, 90 tiers, every drop earned." },
      { property: "og:title", content: "Season Pass — The Shouter" },
      { property: "og:description", content: "90 days, 90 tiers, every drop earned." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/season-pass" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/season-pass" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Level up"
        title="Season Pass"
        tagline="90 days, 90 tiers, every drop earned."
        heroKey="dash-tournament"
        actions={<><NeoBadge variant="accent">Level up</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"460"},{"label":"This week","value":"16"},{"label":"Change","value":"+5%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"season-pass-0","primary":"season-pass · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"season-pass-1","primary":"season-pass · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"season-pass-2","primary":"season-pass · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"season-pass-3","primary":"season-pass · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
