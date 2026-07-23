import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Privacy"
      tagline="What we do with data."
      heroKey="dash-security"
    >
      <ListPanel title="Privacy controls" items={[{"id":"1","primary":"Profile visibility","secondary":"Who can see your stats","tag":"Public"},{"id":"2","primary":"Discord presence","secondary":"Show what you're playing","tag":"On"},{"id":"3","primary":"Match history","secondary":"Public / team / private","tag":"Team"},{"id":"4","primary":"Search indexing","secondary":"Show in leaderboards","tag":"On"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
