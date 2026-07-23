import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/artwork")({
  head: () => ({ meta: [{ title: "Artwork Submissions — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Artwork Submissions"
      tagline="Your creative drops."
      heroKey="cover-artwork"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i)=>(
          <NeoCard key={i} className="p-0 overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-fuchsia-400 to-indigo-500 border-b-4 border-border" />
            <div className="p-3"><div className="font-display text-sm">Submission #{i}</div><div className="text-[11px] text-muted-foreground">{12*i} votes · {3*i} reactions</div></div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
