import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/badges")({
  head: () => ({
    meta: [
      { title: "Badges — The Shouter" },
      { name: "description", content: "Collectible marks that show what you've done." },
      { property: "og:title", content: "Badges — The Shouter" },
      { property: "og:description", content: "Collectible marks that show what you've done." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/badges" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/badges" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Flex"
        title="Badges"
        tagline="Collectible marks that show what you've done."
        heroKey="dash-rewards"
        actions={<><NeoBadge variant="accent">Flex</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"426"},{"label":"This week","value":"14"},{"label":"Change","value":"+3%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"badges-0","primary":"badges · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"badges-1","primary":"badges · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"badges-2","primary":"badges · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"badges-3","primary":"badges · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
