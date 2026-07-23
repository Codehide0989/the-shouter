import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — The Shouter" },
      { name: "description", content: "Every release, feature drop, and fix — dated and shipped." },
      { property: "og:title", content: "Changelog — The Shouter" },
      { property: "og:description", content: "Every release, feature drop, and fix — dated and shipped." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/changelog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/changelog" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Updates"
        title="Changelog"
        tagline="Every release, feature drop, and fix — dated and shipped."
        heroKey="notice-drop"
        actions={<><NeoBadge variant="accent">Updates</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"273"},{"label":"This week","value":"17"},{"label":"Change","value":"+3%"},{"label":"Popular","value":"Yes"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"changelog-0","primary":"v4.2 — Season 5 launch","secondary":"90 tiers, new theme, and reward vault.","meta":"Jul 20","tag":"Release"},{"id":"changelog-1","primary":"v4.1 — Cyber Nights theme","secondary":"Neon grid theme with animated particles.","meta":"Jul 12","tag":"Feature"},{"id":"changelog-2","primary":"v4.0 — Team reserves","secondary":"Backup players & mid-tourney subs.","meta":"Jun 30","tag":"Feature"},{"id":"changelog-3","primary":"v3.9 — Anti-cheat pass","secondary":"Better detection for boosted accounts.","meta":"Jun 18","tag":"Fix"}]} />
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
