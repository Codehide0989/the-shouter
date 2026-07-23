import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/invitations-accepted")({
  head: () => ({ meta: [{ title: "Accepted Invitations — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Squad"
      title="Accepted Invitations"
      tagline="Teams you joined."
      heroKey="dash-team"
    >
      <ListPanel title="Accepted invites" items={[{"id":"1","primary":"Team RIOT — accepted","secondary":"Captain role · Feb 2025"},{"id":"2","primary":"Meme Vault — accepted","secondary":"Contributor · Jan 2025"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
