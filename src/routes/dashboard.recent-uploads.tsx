import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/recent-uploads")({
  head: () => ({ meta: [{ title: "Recent Uploads — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Recent Uploads"
      tagline="Latest drops."
      heroKey="cover-artwork"
    >
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {[1,2,3,4,5,6,7,8].map((i)=>(
          <NeoCard key={i} className="p-0 overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-primary/40 to-accent/40 border-b-4 border-border" />
            <div className="p-2 text-xs font-display">Upload_{i}.png</div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
