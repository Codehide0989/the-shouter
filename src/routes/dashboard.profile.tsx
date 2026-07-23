import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/profile")({
  head: () => ({ meta: [{ title: "Profile Completion — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Profile Completion"
      tagline="Fill it out."
      heroKey="dashboard-hero"
    >
      <StatGrid items={[{"label":"Complete","value":"72%"},{"label":"Missing","value":3},{"label":"Verified","value":"Yes"},{"label":"Public","value":"Yes"}]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase text-muted-foreground mb-2">Complete your profile</div>
        <div className="h-4 rounded-md neo-border bg-muted overflow-hidden mb-4"><div className="h-full bg-primary" style={{width:"72%"}} /></div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">☐ Add a bio</li>
          <li className="flex items-center gap-2">☐ Upload avatar</li>
          <li className="flex items-center gap-2">☐ Link main game IGN</li>
          <li className="flex items-center gap-2 text-muted-foreground line-through">☑ Verify Discord</li>
        </ul>
      </NeoCard>
    </DashboardPage>
  );
}
