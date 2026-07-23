import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/picture-battles")({
  head: () => ({ meta: [{ title: "Picture Battles — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Picture Battles"
      tagline="1v1 photo brackets."
      heroKey="cover-picbattle"
    >
      <StatGrid items={[{"label":"Matches","value":22},{"label":"Wins","value":15},{"label":"Losses","value":7},{"label":"Streak","value":4}]} />
      <ListPanel title="Recent battles" items={[{"id":"1","primary":"vs @midnight_lens","tag":"Won","meta":"18-11"},{"id":"2","primary":"vs @sundropped","tag":"Won","meta":"22-4"},{"id":"3","primary":"vs @cosmic_frame","tag":"Lost","meta":"9-16"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
