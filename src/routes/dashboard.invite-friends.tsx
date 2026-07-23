import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/invite-friends")({
  head: () => ({ meta: [{ title: "Invite Friends — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Invite Friends"
      tagline="Bring the squad."
      heroKey="dash-team"
    >
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-2">Send an invite</div>
        <div className="flex gap-2 flex-wrap">
          <input placeholder="friend@email.com" className="flex-1 min-w-[200px] neo-border rounded-md bg-background px-3 py-2 text-sm" />
          <button className="neo-border neo-shadow-sm bg-primary text-primary-foreground font-display uppercase px-4 py-2 rounded-md text-sm">Invite</button>
        </div>
        <div className="mt-4 text-[11px] text-muted-foreground">Or share to Discord, X, Instagram from the referral page.</div>
      </NeoCard>
    </DashboardPage>
  );
}
