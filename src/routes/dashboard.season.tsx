import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/season")({
  head: () => ({ meta: [{ title: "Season Selector — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Season Selector"
      tagline="Change the vibe."
      heroKey="settings-hero"
    >
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-3">Season</div>
        <p className="text-sm text-muted-foreground">Summer, Winter, Halloween, Spring, Cyber Nights — each ships its own ambient effects and cover art.</p>
      </NeoCard>
    </DashboardPage>
  );
}
