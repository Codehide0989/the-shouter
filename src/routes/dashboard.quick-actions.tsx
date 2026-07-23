import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/quick-actions")({
  head: () => ({ meta: [{ title: "Quick Actions — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Quick Actions"
      tagline="Do it fast."
      heroKey="dash-overview"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[["Create Event","+"],["Invite Friends","→"],["Join a Team","⚔️"],["Open Support","💬"],["Redeem Code","🎟️"],["Sync Discord","🔄"]].map(([t,i])=>(
          <NeoCard key={t} className="p-4 flex items-center justify-between">
            <div className="font-display">{t}</div>
            <span className="text-2xl">{i}</span>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
