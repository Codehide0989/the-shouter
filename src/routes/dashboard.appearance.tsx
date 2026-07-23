import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/appearance")({
  head: () => ({ meta: [{ title: "Appearance — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Appearance"
      tagline="Look & feel."
      heroKey="settings-hero"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {[["Density","Comfortable"],["Radius","Medium"],["Motion","Full"],["Contrast","High"]].map(([l,v])=>(
          <NeoCard key={l} className="p-4">
            <div className="text-[10px] uppercase text-muted-foreground">{l}</div>
            <div className="font-display text-lg mt-1">{v}</div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
