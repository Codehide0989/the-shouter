import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/season-rank")({
  head: () => ({ meta: [{ title: "Season Rank — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Progress"
      title="Season Rank"
      tagline="Ladder standing."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Rank","value":"Diamond II"},{"label":"Points","value":"2,180"},{"label":"Global","value":"#412"},{"label":"Guild","value":"#8"}]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-2">Ladder tier</div>
        <div className="flex items-center gap-3">
          {["Bronze","Silver","Gold","Platinum","Diamond","Master"].map((t,i)=>(
            <div key={t} className={`flex-1 h-8 rounded-md neo-border flex items-center justify-center text-[10px] uppercase font-display ${i===4?"bg-primary text-primary-foreground":"bg-muted"}`}>{t}</div>
          ))}
        </div>
      </NeoCard>
    </DashboardPage>
  );
}
