import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/registered")({
  head: () => ({ meta: [{ title: "Registered Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Registered Events"
      tagline="Events you're locked into."
      heroKey="cover-tournament"
    >
      <StatGrid items={[{"label":"Registered","value":6},{"label":"Live now","value":1},{"label":"Awaiting check-in","value":2},{"label":"Completed","value":14}]} />
      <ListPanel title="Your registrations" items={[{"id":"1","primary":"BGMI Midnight Clash #14","secondary":"Squad · captain","tag":"Confirmed","meta":"#SLOT-08"},{"id":"2","primary":"Neon Dreams Artwork Showcase","secondary":"Solo entry","tag":"Confirmed","meta":"#ART-042"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
