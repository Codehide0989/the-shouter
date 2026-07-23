import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/delete-account")({
  head: () => ({ meta: [{ title: "Delete Account — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Delete Account"
      tagline="Nuke everything."
      heroKey="dash-security"
    >
      <NeoCard className="p-5 border-destructive">
        <div className="text-[10px] uppercase text-destructive font-display">Danger zone</div>
        <div className="font-display text-xl mt-1">Delete your account</div>
        <p className="text-sm text-muted-foreground mt-2">This wipes your profile, teams, submissions, coins and history. Cannot be undone.</p>
        <button className="mt-4 neo-border neo-shadow-sm bg-destructive text-destructive-foreground font-display uppercase px-4 py-2 rounded-md text-sm">Delete forever</button>
      </NeoCard>
    </DashboardPage>
  );
}
