import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/sessions")({
  head: () => ({ meta: [{ title: "Sessions — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Sessions"
      tagline="Where you're signed in."
      heroKey="dash-security"
    >
      <ListPanel title="Signed-in sessions" items={[{"id":"1","primary":"MacBook Pro — Chrome","secondary":"Mumbai, IN · 12m ago","tag":"This device"},{"id":"2","primary":"iPhone 15 — Safari","secondary":"Mumbai, IN · 3h ago"},{"id":"3","primary":"Windows 11 — Firefox","secondary":"Delhi, IN · 2d ago"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
