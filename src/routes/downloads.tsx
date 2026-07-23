import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — The Shouter" },
      { name: "description", content: "Bot invites, brand kits, wallpapers, and stream overlays." },
      { property: "og:title", content: "Downloads — The Shouter" },
      { property: "og:description", content: "Bot invites, brand kits, wallpapers, and stream overlays." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/downloads" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Grab it"
        title="Downloads"
        tagline="Bot invites, brand kits, wallpapers, and stream overlays."
        heroKey="notice-drop"
        actions={<><NeoBadge variant="accent">Grab it</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"545"},{"label":"This week","value":"9"},{"label":"Change","value":"+10%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"downloads-0","primary":"downloads · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"downloads-1","primary":"downloads · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"downloads-2","primary":"downloads · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"downloads-3","primary":"downloads · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
