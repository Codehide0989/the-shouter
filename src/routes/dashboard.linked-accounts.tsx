import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/linked-accounts")({
  head: () => ({ meta: [{ title: "Linked Accounts — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Linked Accounts"
      tagline="Connected services."
      heroKey="dash-security"
    >
      <ListPanel title="Connected services" items={[{"id":"1","primary":"Discord","secondary":"shadow#0001","tag":"Linked"},{"id":"2","primary":"Twitch","secondary":"@shadowplays","tag":"Linked"},{"id":"3","primary":"YouTube","secondary":"Not linked","tag":"Link"},{"id":"4","primary":"Steam","secondary":"Not linked","tag":"Link"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
