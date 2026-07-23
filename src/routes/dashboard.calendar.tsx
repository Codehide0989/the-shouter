import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/calendar")({
  head: () => ({ meta: [{ title: "Calendar — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Calendar"
      tagline="Month view of the grind."
      heroKey="dash-calendar"
    >
      <NeoCard className="p-5">
        <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] uppercase text-muted-foreground">
          {["S","M","T","W","T","F","S"].map((d,i)=>(<div key={i}>{d}</div>))}
        </div>
        <div className="grid grid-cols-7 gap-1.5 mt-2">
          {Array.from({length:35}).map((_,i)=>{
            const hasEvent=[3,7,10,15,19,24,28,31].includes(i);
            return (<div key={i} className={`aspect-square rounded-md neo-border flex items-center justify-center text-xs font-display ${hasEvent?"bg-primary text-primary-foreground":"bg-card"}`}>{i+1}</div>);
          })}
        </div>
      </NeoCard>
    </DashboardPage>
  );
}
