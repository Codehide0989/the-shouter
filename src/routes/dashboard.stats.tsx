import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/stats")({
  head: () => ({ meta: [{ title: "Tournament Stats — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Stats"
      title="Tournament Stats"
      tagline="Numbers don't lie."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Matches","value":184,"hint":"Career total"},{"label":"Wins","value":125,"hint":"68% rate"},{"label":"K/D","value":"2.4","hint":"All modes"},{"label":"MVPs","value":7,"hint":"This season"}]} />
    </DashboardPage>
  );
}
