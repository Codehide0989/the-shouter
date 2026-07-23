import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/mvp")({
  head: () => ({ meta: [{ title: "MVP Count — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Stats"
      title="MVP Count"
      tagline="Times you carried."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"MVPs","value":7},{"label":"This season","value":3},{"label":"Bracket MVP","value":2},{"label":"Voted by team","value":4}]} />
      <ListPanel title="MVP moments" items={[{"id":"1","primary":"BGMI Clash #12 Finals","secondary":"18 kills · WWCD carry","tag":"MVP"},{"id":"2","primary":"Free Fire Cup — Semis","secondary":"Clutch 1v3","tag":"MVP"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
