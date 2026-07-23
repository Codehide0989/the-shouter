import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — The Shouter" },
      { name: "description", content: "Cosmetics, boosts, and squad drops. Coins accepted." },
      { property: "og:title", content: "Store — The Shouter" },
      { property: "og:description", content: "Cosmetics, boosts, and squad drops. Coins accepted." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/store" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Shop"
        title="Store"
        tagline="Cosmetics, boosts, and squad drops. Coins accepted."
        heroKey="dash-rewards"
        actions={<><NeoBadge variant="accent">Shop</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"392"},{"label":"This week","value":"12"},{"label":"Change","value":"+10%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"store-0","primary":"store · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"store-1","primary":"store · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"store-2","primary":"store · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"store-3","primary":"store · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
