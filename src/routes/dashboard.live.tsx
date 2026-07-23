import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/live")({
  head: () => ({ meta: [{ title: "Live Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Live Events"
      tagline="Happening right now."
      heroKey="cover-tournament"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3].map((i)=>(
          <NeoCard key={i} className="relative overflow-hidden p-0">
            <div className="relative h-32 border-b-4 border-border">
              <div className="absolute top-2 left-2 flex gap-1"><span className="h-2 w-2 rounded-full bg-destructive animate-pulse" /><NeoBadge variant="destructive">LIVE</NeoBadge></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50" />
            </div>
            <div className="p-3"><div className="font-display text-sm">Live Event #{i}</div><div className="text-[11px] text-muted-foreground">62 watching · 4 rounds left</div></div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
