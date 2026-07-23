import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge, NeoButton } from "@/components/neo";

export const Route = createFileRoute("/admin/tools/export")({
  head: () => ({ meta: [{ title: "Export — Admin · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Tools"
      title="Export"
      tagline="Bulk export data."
      heroKey="settings-hero"
      actions={<><NeoBadge variant="destructive">Admin</NeoBadge><NeoBadge variant="muted">Tools</NeoBadge></>}
    >
      <StatGrid items={[{"label":"Total","value":"3,161"},{"label":"This week","value":"242"},{"label":"Change","value":"+3%"},{"label":"Health","value":"OK"}]} />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ListPanel title="Recent activity" items={[{"id":"toolsexport-0","primary":"Squad Rumble finals","secondary":"Discord #announcements","meta":"2m","tag":"New"},{"id":"toolsexport-1","primary":"Artwork drop approved","secondary":"@shadow · #artwork","meta":"14m","tag":"Approved"},{"id":"toolsexport-2","primary":"Bot resync completed","secondary":"12 guilds","meta":"1h","tag":"OK"},{"id":"toolsexport-3","primary":"Ban appeal opened","secondary":"@ghostpixel","meta":"3h","tag":"Review"},{"id":"toolsexport-4","primary":"Season rotated","secondary":"S4 → S5","meta":"yesterday","tag":"Ops"},{"id":"toolsexport-5","primary":"Webhook retried","secondary":"orders.paid","meta":"yesterday","tag":"Retry"}]} />
        <NeoCard className="p-5 space-y-3">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Quick actions</div>
          <div className="flex flex-wrap gap-2">
            <NeoButton size="sm" variant="primary">Refresh</NeoButton>
            <NeoButton size="sm" variant="secondary">Export CSV</NeoButton>
            <NeoButton size="sm" variant="ghost">Docs</NeoButton>
          </div>
          <div className="text-xs text-muted-foreground">Live data streams from the bot and site are wired to this panel. Use with care — actions may be irreversible.</div>
        </NeoCard>
      </div>
    </DashboardPage>
  );
}
