import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/servers")({
  head: () => ({ meta: [{ title: "Connected Servers — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Discord"
      title="Connected Servers"
      tagline="Guilds you're in."
      heroKey="bot-mascot"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {["Shouters HQ","Blaze Squad","Neon Ateliers","Meme Vault","Pixel Arena","Build Republic"].map((n)=>(
          <NeoCard key={n} className="p-4">
            <div className="h-12 w-12 rounded-md neo-border bg-gradient-to-br from-primary/40 to-accent/40 mb-3" />
            <div className="font-display">{n}</div>
            <div className="text-[11px] text-muted-foreground">Bot connected · 2.4k members</div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
