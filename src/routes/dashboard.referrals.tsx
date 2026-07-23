import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/referrals")({
  head: () => ({ meta: [{ title: "Referral Program — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Referral Program"
      tagline="Earn for invites."
      heroKey="dash-rewards"
    >
      <StatGrid items={[{"label":"Invited","value":14},{"label":"Joined","value":9},{"label":"Coins earned","value":"1,800"},{"label":"Rank","value":"#22"}]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-2">Your link</div>
        <div className="neo-border rounded-md p-3 bg-muted font-mono text-sm break-all">https://theshouter.gg/r/shadow0001</div>
        <div className="mt-3 text-xs text-muted-foreground">Earn 200 coins per friend who joins a live event.</div>
      </NeoCard>
    </DashboardPage>
  );
}
