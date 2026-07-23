import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/assists")({
  head: () => ({ meta: [{ title: "Assists — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Stats"
      title="Assists"
      tagline="Team plays counted."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Assists","value":512},{"label":"Per match","value":"1.7"},{"label":"Revives","value":88},{"label":"Support MVP","value":5}]} />
    </DashboardPage>
  );
}
