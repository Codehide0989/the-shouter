import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — The Shouter" },
      { name: "description", content: "Everything you need to run events, teams, and the bot." },
      { property: "og:title", content: "Documentation — The Shouter" },
      { property: "og:description", content: "Everything you need to run events, teams, and the bot." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/docs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Learn"
        title="Documentation"
        tagline="Everything you need to run events, teams, and the bot."
        heroKey="settings-hero"
        actions={<><NeoBadge variant="accent">Learn</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"154"},{"label":"This week","value":"10"},{"label":"Change","value":"+5%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"docs-0","primary":"docs · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"docs-1","primary":"docs · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"docs-2","primary":"docs · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"docs-3","primary":"docs · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
