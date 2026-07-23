import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/invitations-pending")({
  head: () => ({ meta: [{ title: "Pending Invitations — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Squad"
      title="Pending Invitations"
      tagline="Awaiting your call."
      heroKey="dash-team"
    >
      <ListPanel title="Awaiting your response" items={[{"id":"1","primary":"Team Blaze wants you as a Sub","secondary":"Free Fire Arena Cup","tag":"Sub"},{"id":"2","primary":"Neon Ateliers invite","secondary":"Artwork collab","tag":"Solo"}]} empty="No pending invites. Fire up your rep!" />
    </DashboardPage>
  );
}
