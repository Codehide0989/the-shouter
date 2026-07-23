import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/win-rate")({
  head: () => ({ meta: [{ title: "Win Rate — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Stats"
      title="Win Rate"
      tagline="How often you close it."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Overall","value":"68%"},{"label":"30 days","value":"72%"},{"label":"vs Diamond","value":"54%"},{"label":"Clutch","value":"41%"}]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-3">Last 12 matches</div>
        <div className="flex gap-1.5">
          {["W","W","L","W","W","W","L","W","W","W","W","L"].map((r,i)=>(<div key={i} className={`flex-1 h-10 rounded-md neo-border font-display flex items-center justify-center ${r==="W"?"bg-primary text-primary-foreground":"bg-destructive text-destructive-foreground"}`}>{r}</div>))}
        </div>
      </NeoCard>
    </DashboardPage>
  );
}
