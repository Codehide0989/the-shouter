import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/api-docs")({
  head: () => ({
    meta: [
      { title: "API Docs — The Shouter" },
      { name: "description", content: "REST + realtime endpoints for events, teams, and reactions." },
      { property: "og:title", content: "API Docs — The Shouter" },
      { property: "og:description", content: "REST + realtime endpoints for events, teams, and reactions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/api-docs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/api-docs" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Reference"
        title="API Docs"
        tagline="REST + realtime endpoints for events, teams, and reactions."
        heroKey="dash-security"
        actions={<><NeoBadge variant="accent">Reference</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"188"},{"label":"This week","value":"12"},{"label":"Change","value":"+7%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"api-docs-0","primary":"api-docs · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"api-docs-1","primary":"api-docs · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"api-docs-2","primary":"api-docs · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"api-docs-3","primary":"api-docs · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
