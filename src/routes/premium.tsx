import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium — The Shouter" },
      { name: "description", content: "Bigger events, more automations, and a shiny badge." },
      { property: "og:title", content: "Premium — The Shouter" },
      { property: "og:description", content: "Bigger events, more automations, and a shiny badge." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/premium" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/premium" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Upgrade"
        title="Premium"
        tagline="Bigger events, more automations, and a shiny badge."
        heroKey="dash-rewards"
        actions={<><NeoBadge variant="accent">Upgrade</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"358"},{"label":"This week","value":"10"},{"label":"Change","value":"+8%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"premium-0","primary":"premium · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"premium-1","primary":"premium · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"premium-2","primary":"premium · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"premium-3","primary":"premium · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
