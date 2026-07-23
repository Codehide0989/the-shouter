import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/team")({
  head: () => ({ meta: [{ title: "Current Team — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Squad"
      title="Current Team"
      tagline="Your active roster."
      heroKey="dash-team"
    >
      <NeoCard className="p-5">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="h-16 w-16 rounded-md neo-border bg-gradient-to-br from-primary to-accent" />
          <div className="flex-1 min-w-0">
            <div className="font-display text-xl">Team RIOT</div>
            <div className="text-xs text-muted-foreground">Captain: shadow#0001 · 4 members · Founded 2024</div>
          </div>
          <NeoBadge variant="success">Active</NeoBadge>
        </div>
      </NeoCard>
      <ListPanel title="Roster" items={[{"id":"1","primary":"shadow#0001","secondary":"Captain · IGL","tag":"Online"},{"id":"2","primary":"volt#4420","secondary":"Support","tag":"Online"},{"id":"3","primary":"pixel#2211","secondary":"Fragger","tag":"Away"},{"id":"4","primary":"nova#7788","secondary":"Sniper","tag":"Offline"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
