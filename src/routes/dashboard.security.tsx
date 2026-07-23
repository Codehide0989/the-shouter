import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/security")({
  head: () => ({ meta: [{ title: "Security — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Security"
      tagline="Lock it down."
      heroKey="dash-security"
    >
      <StatGrid items={[{"label":"2FA","value":"On"},{"label":"Devices","value":3},{"label":"Last login","value":"12m ago"},{"label":"Alerts","value":0}]} />
      <ListPanel title="Security checklist" items={[{"id":"1","primary":"Two-factor authentication","secondary":"Authenticator app","tag":"On"},{"id":"2","primary":"Password strength","secondary":"Last changed 34 days ago","tag":"Strong"},{"id":"3","primary":"Backup codes","secondary":"10 codes remaining","tag":"OK"},{"id":"4","primary":"Discord OAuth scope","secondary":"identify · guilds","tag":"Minimal"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
