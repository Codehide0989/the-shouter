import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Notifications"
      tagline="Everything the bot sent."
      heroKey="notice-hero"
    >
      <ListPanel title="Recent pings" items={[{"id":"1","primary":"Your team advanced to Quarterfinals","secondary":"BGMI Clash #14","meta":"12m"},{"id":"2","primary":"Neon Dreams voting starts in 1h","secondary":"Artwork event","meta":"45m"},{"id":"3","primary":"volt#4420 accepted your invite","secondary":"Team RIOT","meta":"2h"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
