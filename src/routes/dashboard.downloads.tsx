import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/downloads")({
  head: () => ({ meta: [{ title: "Downloads — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Downloads"
      tagline="Files & receipts."
      heroKey="notice-drop"
    >
      <ListPanel title="Files & receipts" items={[{"id":"1","primary":"Match summary — Clash #12.pdf","secondary":"2.1 MB · Jul 12","tag":"PDF"},{"id":"2","primary":"Reward receipt #4820.pdf","secondary":"0.4 MB · Jul 08","tag":"PDF"},{"id":"3","primary":"Team banner pack.zip","secondary":"12 MB · Jun 30","tag":"ZIP"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
