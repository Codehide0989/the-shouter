import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/achievements")({
  head: () => ({ meta: [{ title: "Achievements — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Progress"
      title="Achievements"
      tagline="Unlocked feats."
      heroKey="dash-rewards"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[["First Blood","Won a match"],["Streaker","5 wins in a row"],["Ace","20 kills in a game"],["MVP","Team MVP"],["Community","1000 reactions"],["Bracket Buster","Reached Finals"],["Artist","10 artworks"],["Loyal","1 year member"]].map(([t,d])=>(
          <NeoCard key={t} className="p-3 text-center">
            <div className="mx-auto h-14 w-14 rounded-full neo-border bg-primary flex items-center justify-center text-primary-foreground font-display">🏆</div>
            <div className="font-display text-sm mt-2">{t}</div>
            <div className="text-[11px] text-muted-foreground">{d}</div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
