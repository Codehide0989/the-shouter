import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/theme")({
  head: () => ({ meta: [{ title: "Theme Selector — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Theme Selector"
      tagline="Pick your palette."
      heroKey="settings-hero"
    >
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-3">Pick your palette</div>
        <p className="text-sm text-muted-foreground">Use the header switcher to change theme instantly. Every page adapts colors, shadows and particles.</p>
      </NeoCard>
    </DashboardPage>
  );
}
