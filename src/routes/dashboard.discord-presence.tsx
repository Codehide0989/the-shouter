import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/discord-presence")({
  head: () => ({ meta: [{ title: "Discord Presence — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Discord"
      title="Discord Presence"
      tagline="Current status & rich presence."
      heroKey="bot-mascot"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <NeoCard className="p-4">
          <div className="text-[10px] uppercase text-muted-foreground">Now playing</div>
          <div className="font-display text-lg mt-1">BGMI · Ranked Squad</div>
          <div className="text-xs mt-2 text-muted-foreground">Started 42 min ago</div>
        </NeoCard>
        <NeoCard className="p-4">
          <div className="text-[10px] uppercase text-muted-foreground">Status</div>
          <div className="font-display text-lg mt-1 flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-500" /> Online</div>
          <div className="text-xs mt-2 text-muted-foreground">Custom: "grinding season 4"</div>
        </NeoCard>
      </div>
    </DashboardPage>
  );
}
