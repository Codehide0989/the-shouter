import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — The Shouter" },
      { name: "description", content: "Guides, walkthroughs, and troubleshooting from the crew." },
      { property: "og:title", content: "Help Center — The Shouter" },
      { property: "og:description", content: "Guides, walkthroughs, and troubleshooting from the crew." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/help" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/help" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Support"
        title="Help Center"
        tagline="Guides, walkthroughs, and troubleshooting from the crew."
        heroKey="cover-community"
        actions={<><NeoBadge variant="accent">Support</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"137"},{"label":"This week","value":"9"},{"label":"Change","value":"+4%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"help-0","primary":"Getting started","secondary":"Link Discord, join a server, register for your first event.","meta":"5 min","tag":"Onboard"},{"id":"help-1","primary":"Hosting a tournament","secondary":"Bracket, schedule, and Discord sync setup.","meta":"10 min","tag":"Guide"},{"id":"help-2","primary":"Team management","secondary":"Invitations, reserves, captain transfer.","meta":"6 min","tag":"Team"},{"id":"help-3","primary":"Bot troubleshooting","secondary":"Common commands not firing? Try these.","meta":"3 min","tag":"Fix"}]} />
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
