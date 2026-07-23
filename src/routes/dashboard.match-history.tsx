import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/match-history")({
  head: () => ({ meta: [{ title: "Match History — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Stats"
      title="Match History"
      tagline="Every clash logged."
      heroKey="dash-tournament"
    >
      <ListPanel title="Recent matches" items={[{"id":"1","primary":"BGMI — Erangel","secondary":"Squad · 8 kills, 3 assists","tag":"Won","meta":"WWCD"},{"id":"2","primary":"Free Fire — Bermuda","secondary":"Duo · 6 kills","tag":"Won","meta":"Booyah"},{"id":"3","primary":"BGMI — Miramar","secondary":"Squad · 2 kills","tag":"Lost","meta":"#4"},{"id":"4","primary":"Valorant — Haven","secondary":"5v5 · 14 kills","tag":"Won","meta":"13-9"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
