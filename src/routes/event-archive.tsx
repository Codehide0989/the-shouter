import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/event-archive")({
  head: () => ({
    meta: [
      { title: "Event Archive — The Shouter" },
      { name: "description", content: "Every event ever hosted, forever browsable." },
      { property: "og:title", content: "Event Archive — The Shouter" },
      { property: "og:description", content: "Every event ever hosted, forever browsable." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/event-archive" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/event-archive" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="History"
        title="Event Archive"
        tagline="Every event ever hosted, forever browsable."
        heroKey="cover-tournament"
        actions={<><NeoBadge variant="accent">History</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"494"},{"label":"This week","value":"18"},{"label":"Change","value":"+7%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"event-archive-0","primary":"event-archive · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"event-archive-1","primary":"event-archive · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"event-archive-2","primary":"event-archive · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"event-archive-3","primary":"event-archive · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
