import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/saved-teams")({
  head: () => ({ meta: [{ title: "Saved Teams — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Squad"
      title="Saved Teams"
      tagline="Loadouts of squads."
      heroKey="dash-team"
    >
      <ListPanel title="Saved squads" items={[{"id":"1","primary":"Team RIOT (Main)","secondary":"BGMI · Squad","tag":"Default"},{"id":"2","primary":"Duo — Nova & Shadow","secondary":"Free Fire · Duo"},{"id":"3","primary":"Art Collective","secondary":"Artwork events"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
