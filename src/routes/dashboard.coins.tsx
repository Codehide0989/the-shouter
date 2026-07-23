import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/coins")({
  head: () => ({ meta: [{ title: "Coins — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Progress"
      title="Coins"
      tagline="Your wallet."
      heroKey="dash-rewards"
    >
      <StatGrid items={[{"label":"Balance","value":"3,120"},{"label":"Earned this week","value":"+480"},{"label":"Spent this week","value":"-120"},{"label":"All time","value":"18,240"}]} />
      <ListPanel title="Coin history" items={[{"id":"1","primary":"Won a tournament","tag":"+500","meta":"2d ago"},{"id":"2","primary":"Daily login streak","tag":"+50","meta":"1d ago"},{"id":"3","primary":"Store: Season Pass","tag":"-800","meta":"5d ago"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
