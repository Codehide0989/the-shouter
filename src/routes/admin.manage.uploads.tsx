import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge, NeoButton } from "@/components/neo";

export const Route = createFileRoute("/admin/manage/uploads")({
  head: () => ({ meta: [{ title: "Uploads — Admin · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Manage"
      title="Uploads"
      tagline="All incoming files."
      heroKey="cover-artwork"
      actions={<><NeoBadge variant="destructive">Admin</NeoBadge><NeoBadge variant="muted">Manage</NeoBadge></>}
    >
      <StatGrid items={[{"label":"Total","value":"1,940"},{"label":"This week","value":"143"},{"label":"Change","value":"+6%"},{"label":"Health","value":"OK"}]} />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ListPanel title="Recent activity" items={[{"id":"manageuploads-0","primary":"Squad Rumble finals","secondary":"Discord #announcements","meta":"2m","tag":"New"},{"id":"manageuploads-1","primary":"Artwork drop approved","secondary":"@shadow · #artwork","meta":"14m","tag":"Approved"},{"id":"manageuploads-2","primary":"Bot resync completed","secondary":"12 guilds","meta":"1h","tag":"OK"},{"id":"manageuploads-3","primary":"Ban appeal opened","secondary":"@ghostpixel","meta":"3h","tag":"Review"},{"id":"manageuploads-4","primary":"Season rotated","secondary":"S4 → S5","meta":"yesterday","tag":"Ops"},{"id":"manageuploads-5","primary":"Webhook retried","secondary":"orders.paid","meta":"yesterday","tag":"Retry"}]} />
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
