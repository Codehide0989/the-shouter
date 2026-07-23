import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/reactions")({
  head: () => ({ meta: [{ title: "Reaction History — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Reaction History"
      tagline="All your reacts on Discord."
      heroKey="notice-reaction"
    >
      <ListPanel title="Reactions given" items={[{"id":"1","primary":"🔥 on Bracket announcement","secondary":"Shouters HQ · #announcements","meta":"2h"},{"id":"2","primary":"🎉 on Winner post","secondary":"Shouters HQ · #winners","meta":"1d"},{"id":"3","primary":"👀 on Match schedule","secondary":"Blaze Squad · #matches","meta":"3d"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
