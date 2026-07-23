import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status — The Shouter" },
      { name: "description", content: "Bot uptime, sync latency, and infra health in one place." },
      { property: "og:title", content: "Status — The Shouter" },
      { property: "og:description", content: "Bot uptime, sync latency, and infra health in one place." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/status" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/status" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="System"
        title="Status"
        tagline="Bot uptime, sync latency, and infra health in one place."
        heroKey="notice-hero"
        actions={<><NeoBadge variant="accent">System</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"290"},{"label":"This week","value":"18"},{"label":"Change","value":"+4%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"status-0","primary":"Bot cluster","secondary":"Ping 43ms · 12 shards · healthy","meta":"OK","tag":"Green"},{"id":"status-1","primary":"Realtime sync","secondary":"Reaction pipeline nominal","meta":"OK","tag":"Green"},{"id":"status-2","primary":"Database","secondary":"All replicas caught up","meta":"OK","tag":"Green"},{"id":"status-3","primary":"CDN","secondary":"Global edge fully cached","meta":"OK","tag":"Green"}]} />
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
