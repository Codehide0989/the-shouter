import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/badges")({
  head: () => ({ meta: [{ title: "Badges — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Progress"
      title="Badges"
      tagline="Collectibles earned."
      heroKey="dash-rewards"
    >
      <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
        {["🥇","🥈","🥉","🎨","🎯","💥","🔥","⭐","🎬","🎮","🏹","🧠"].map((e,i)=>(
          <NeoCard key={i} className="p-3 aspect-square flex flex-col items-center justify-center">
            <div className="text-3xl">{e}</div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1">Rare</div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
