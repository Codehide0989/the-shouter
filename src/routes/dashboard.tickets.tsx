import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/tickets")({
  head: () => ({ meta: [{ title: "Support Tickets — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Support Tickets"
      tagline="Your help requests."
      heroKey="notice-hero"
    >
      <ListPanel title="Your tickets" items={[{"id":"T-042","primary":"Bracket seeding question","secondary":"Opened Jul 18","tag":"Open","meta":"#T-042"},{"id":"T-039","primary":"Discord role not applied","secondary":"Closed Jul 15","tag":"Resolved","meta":"#T-039"}]} empty="No tickets — smooth sailing." />
    </DashboardPage>
  );
}
