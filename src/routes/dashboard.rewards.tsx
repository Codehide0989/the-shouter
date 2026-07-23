import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/rewards")({
  head: () => ({ meta: [{ title: "Rewards — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Progress"
      title="Rewards"
      tagline="Claim your loot."
      heroKey="dash-rewards"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[["Nitro 1 month","500 coins"],["Custom role","1200 coins"],["Profile flair","300 coins"],["Bracket boost","1500 coins"],["Team banner","900 coins"],["Season badge","2000 coins"]].map(([t,c])=>(
          <NeoCard key={t} className="p-4">
            <div className="font-display">{t}</div>
            <div className="text-[11px] text-muted-foreground">{c}</div>
            <button className="mt-3 neo-border neo-shadow-sm bg-primary text-primary-foreground text-xs font-display uppercase px-3 py-1.5 rounded-md">Claim</button>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
