import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/discord")({
  head: () => ({ meta: [{ title: "Discord Account — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Discord"
      title="Discord Account"
      tagline="Your linked identity."
      heroKey="bot-mascot"
    >
      <StatGrid items={[{"label":"Username","value":"shadow#0001"},{"label":"Joined","value":"2024"},{"label":"Guilds","value":8},{"label":"Presence","value":"Online"}]} />
      <ListPanel title="Account" items={[{"id":"1","primary":"shadow#0001","secondary":"Discord ID: 928374...","tag":"Verified"},{"id":"2","primary":"Two-Factor Auth","secondary":"Enabled via authenticator","tag":"On"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
