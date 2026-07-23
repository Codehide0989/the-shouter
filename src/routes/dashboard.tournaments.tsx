import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/tournaments")({
  head: () => ({ meta: [{ title: "Tournament Progress — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Tournament Progress"
      tagline="Your bracket runs."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Active brackets","value":2},{"label":"Wins","value":12},{"label":"Losses","value":5},{"label":"Trophies","value":3}]} />
      <ListPanel title="Bracket progress" items={[{"id":"1","primary":"BGMI Midnight Clash #14 — Quarterfinals","secondary":"Best of 3 · vs Team RIOT","tag":"Advanced","meta":"3-1"},{"id":"2","primary":"Free Fire Arena Cup — Round of 16","secondary":"Best of 3 · vs Blaze Boys","tag":"Upcoming","meta":"pending"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
