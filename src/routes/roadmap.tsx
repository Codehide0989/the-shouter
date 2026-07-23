import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — The Shouter" },
      { name: "description", content: "Shipped, cooking, and dreamt-up features — public and live." },
      { property: "og:title", content: "Roadmap — The Shouter" },
      { property: "og:description", content: "Shipped, cooking, and dreamt-up features — public and live." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/roadmap" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="What's next"
        title="Roadmap"
        tagline="Shipped, cooking, and dreamt-up features — public and live."
        heroKey="dash-overview"
        actions={<><NeoBadge variant="accent">What's next</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"256"},{"label":"This week","value":"16"},{"label":"Change","value":"+11%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"roadmap-0","primary":"Live spectator overlay","secondary":"Multi-cam bracket viewer for streams.","meta":"Q3","tag":"Shipping"},{"id":"roadmap-1","primary":"Coach mode","secondary":"Silent observers on team channels.","meta":"Q4","tag":"Design"},{"id":"roadmap-2","primary":"Mobile companion","secondary":"iOS + Android for check-in and alerts.","meta":"2027","tag":"Planned"},{"id":"roadmap-3","primary":"AI match summaries","secondary":"Auto-generated recaps posted to Discord.","meta":"2027","tag":"Exploring"}]} />
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
