import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/submissions")({
  head: () => ({ meta: [{ title: "Submission History — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Submission History"
      tagline="All your uploads."
      heroKey="cover-artwork"
    >
      <ListPanel title="Everything you've uploaded" items={[{"id":"1","primary":"Neon Dreams #024","secondary":"Artwork · Jul 20","tag":"Approved"},{"id":"2","primary":"Summer Vibes Pic #12","secondary":"Pic Battle · Jul 18","tag":"Live"},{"id":"3","primary":"Meme Off #03","secondary":"Meme · Jul 10","tag":"Ended"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
