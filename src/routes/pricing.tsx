import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — The Shouter" },
      { name: "description", content: "Free for players. Paid tiers unlock hosting superpowers." },
      { property: "og:title", content: "Pricing — The Shouter" },
      { property: "og:description", content: "Free for players. Paid tiers unlock hosting superpowers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Plans"
        title="Pricing"
        tagline="Free for players. Paid tiers unlock hosting superpowers."
        heroKey="dash-rewards"
        actions={<><NeoBadge variant="accent">Plans</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"341"},{"label":"This week","value":"9"},{"label":"Change","value":"+7%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"pricing-0","primary":"Free — Player","secondary":"Join unlimited events. No card required.","meta":"$0","tag":"Popular"},{"id":"pricing-1","primary":"Pro — Host","secondary":"Host tournaments up to 128 teams.","meta":"$9/mo","tag":"Best value"},{"id":"pricing-2","primary":"Server — Community","secondary":"Unlimited events + white-label bot.","meta":"$29/mo","tag":"Growing"},{"id":"pricing-3","primary":"Enterprise","secondary":"SLA, SSO, custom modules.","meta":"Talk to us","tag":"Custom"}]} />
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
