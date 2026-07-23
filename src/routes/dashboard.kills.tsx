import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/kills")({
  head: () => ({ meta: [{ title: "Kills — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Stats"
      title="Kills"
      tagline="Elimination totals."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Total kills","value":"1,842"},{"label":"Headshots","value":"612"},{"label":"Best game","value":"22"},{"label":"Avg / match","value":"6.1"}]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-2">Trend</div>
        <div className="flex items-end gap-1 h-32">
          {[4,6,3,8,7,10,5,12,9,7,11,6].map((v,i)=>(<div key={i} className="flex-1 neo-border bg-primary rounded-t-md" style={{height:`${v*8}%`}} />))}
        </div>
      </NeoCard>
    </DashboardPage>
  );
}
