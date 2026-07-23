import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/upcoming")({
  head: () => ({ meta: [{ title: "Upcoming Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Upcoming Events"
      tagline="What's on the horizon."
      heroKey="dash-calendar"
    >
      <StatGrid items={[{"label":"This week","value":4},{"label":"This month","value":11},{"label":"Priority","value":2},{"label":"Saved","value":6}]} />
      <ListPanel title="Coming up" items={[{"id":"1","primary":"BGMI Midnight Clash #14","secondary":"Jul 24 · 8:00 PM · Shouters HQ","tag":"Tournament","meta":"in 2d"},{"id":"2","primary":"Neon Dreams Artwork Showcase","secondary":"Jul 20 · 12:00 PM · Neon Ateliers","tag":"Artwork","meta":"in 5h"},{"id":"3","primary":"Summer Vibes Pic Battle","secondary":"Jul 30 · 6:00 PM · Shouters HQ","tag":"Pic Battle","meta":"in 8d"},{"id":"4","primary":"Free Fire Arena Cup","secondary":"Aug 02 · 7:00 PM · Blaze Squad","tag":"Tournament","meta":"in 11d"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
