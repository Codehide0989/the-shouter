import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — The Shouter" },
      { name: "description", content: "Recaps, tournament stories, product updates, and community wins." },
      { property: "og:title", content: "Blog — The Shouter" },
      { property: "og:description", content: "Recaps, tournament stories, product updates, and community wins." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="News"
        title="Blog"
        tagline="Recaps, tournament stories, product updates, and community wins."
        heroKey="notice-hero"
        actions={<><NeoBadge variant="accent">News</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"239"},{"label":"This week","value":"15"},{"label":"Change","value":"+10%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"blog-0","primary":"How Squad Rumble #14 was won","secondary":"A last-second clutch and 40k viewers.","meta":"Jul 22","tag":"Recap"},{"id":"blog-1","primary":"Behind the Cyber Nights theme","secondary":"Design notes from our art lead.","meta":"Jul 12","tag":"Design"},{"id":"blog-2","primary":"The bot did what?!","secondary":"Weirdest support tickets of the season.","meta":"Jul 04","tag":"Fun"},{"id":"blog-3","primary":"Meet the Shouter mods","secondary":"The volunteers keeping it clean.","meta":"Jun 28","tag":"People"}]} />
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
