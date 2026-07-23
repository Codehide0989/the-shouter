import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/media-center")({
  head: () => ({
    meta: [
      { title: "Media Center — The Shouter" },
      { name: "description", content: "Assets, logos, and press-ready blurbs for The Shouter." },
      { property: "og:title", content: "Media Center — The Shouter" },
      { property: "og:description", content: "Assets, logos, and press-ready blurbs for The Shouter." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/media-center" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/media-center" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Press"
        title="Media Center"
        tagline="Assets, logos, and press-ready blurbs for The Shouter."
        heroKey="cover-artwork"
        actions={<><NeoBadge variant="accent">Press</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"511"},{"label":"This week","value":"19"},{"label":"Change","value":"+8%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"media-center-0","primary":"media-center · Getting started","secondary":"The fast-track intro for new players.","meta":"5 min","tag":"Guide"},{"id":"media-center-1","primary":"media-center · Latest updates","secondary":"What's new this week.","meta":"Today","tag":"New"},{"id":"media-center-2","primary":"media-center · Community picks","secondary":"Curated by the mods.","meta":"Weekly","tag":"Featured"},{"id":"media-center-3","primary":"media-center · Deep dive","secondary":"Everything you never asked but wanted to know.","meta":"12 min","tag":"Long read"}]} />
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
