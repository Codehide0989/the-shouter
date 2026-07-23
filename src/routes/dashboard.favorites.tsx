import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/favorites")({
  head: () => ({ meta: [{ title: "Favorite Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Favorite Events"
      tagline="Ones you love."
      heroKey="cover-tournament"
    >
      <ListPanel title="Favorite events" items={[{"id":"1","primary":"BGMI Midnight Clash","secondary":"Weekly · Wednesdays","tag":"⭐"},{"id":"2","primary":"Neon Dreams","secondary":"Monthly · Last Friday","tag":"⭐"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
