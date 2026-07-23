import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/xp")({
  head: () => ({ meta: [{ title: "XP — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Progress"
      title="XP"
      tagline="Level & experience."
      heroKey="dash-rewards"
    >
      <StatGrid items={[{"label":"Level","value":24},{"label":"XP","value":"12,480"},{"label":"Next level","value":"3,020 XP"},{"label":"Season","value":"S4"}]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-2">Progress</div>
        <div className="h-6 rounded-md neo-border bg-muted overflow-hidden"><div className="h-full bg-primary" style={{width:"62%"}} /></div>
        <div className="mt-2 text-xs text-muted-foreground">62% to level 25 — join any live event for +50 XP.</div>
      </NeoCard>
    </DashboardPage>
  );
}
