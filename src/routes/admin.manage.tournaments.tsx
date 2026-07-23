import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge, NeoButton } from "@/components/neo";

export const Route = createFileRoute("/admin/manage/tournaments")({
  head: () => ({ meta: [{ title: "Tournaments — Admin · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Manage"
      title="Tournaments"
      tagline="Brackets & seasons."
      heroKey="dash-tournament"
      actions={<><NeoBadge variant="destructive">Admin</NeoBadge><NeoBadge variant="muted">Manage</NeoBadge></>}
    >
      <StatGrid items={[{"label":"Total","value":"1,829"},{"label":"This week","value":"134"},{"label":"Change","value":"+3%"},{"label":"Health","value":"OK"}]} />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ListPanel title="Recent activity" items={[{"id":"managetournaments-0","primary":"Squad Rumble finals","secondary":"Discord #announcements","meta":"2m","tag":"New"},{"id":"managetournaments-1","primary":"Artwork drop approved","secondary":"@shadow · #artwork","meta":"14m","tag":"Approved"},{"id":"managetournaments-2","primary":"Bot resync completed","secondary":"12 guilds","meta":"1h","tag":"OK"},{"id":"managetournaments-3","primary":"Ban appeal opened","secondary":"@ghostpixel","meta":"3h","tag":"Review"},{"id":"managetournaments-4","primary":"Season rotated","secondary":"S4 → S5","meta":"yesterday","tag":"Ops"},{"id":"managetournaments-5","primary":"Webhook retried","secondary":"orders.paid","meta":"yesterday","tag":"Retry"}]} />
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
