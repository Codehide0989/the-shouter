import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/api-keys")({
  head: () => ({ meta: [{ title: "API Keys — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="API Keys"
      tagline="Developer tokens."
      heroKey="dash-security"
    >
      <ListPanel title="Developer tokens" items={[{"id":"1","primary":"Personal token","secondary":"Created Jun 10 · Read-only","tag":"Active","meta":"sk_live_...ab12"},{"id":"2","primary":"Bot integration","secondary":"Created May 04 · Read/Write","tag":"Active","meta":"sk_live_...9f0c"}]} empty="No tokens yet." />
    </DashboardPage>
  );
}
