import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/tournaments/appeals")({
  head: () => ({
    meta: [
      { title: "Match Appeals — The Shouter" },
      { name: "description", content: "Contest a result with evidence." },
      { property: "og:title", content: "Match Appeals — The Shouter" },
      { property: "og:description", content: "Contest a result with evidence." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Tournament"
      title="Match Appeals"
      tagline="Contest a result with evidence."
      heroKey="dash-security"
    >
      <StatGrid items={[{"label":"Active","value":12},{"label":"Queued","value":4},{"label":"This week","value":23},{"label":"SLA","value":"< 2m"}]} />
      <ListPanel title="Latest activity" items={[
        {id:"1",primary:"Bracket sealed",secondary:"Squad Rumble · Final 8",meta:"2m",tag:"OK"},
        {id:"2",primary:"Match submitted",secondary:"Alpha vs Bravo · 13-9",meta:"14m",tag:"Review"},
        {id:"3",primary:"Appeal opened",secondary:"@ghostpixel · missed call",meta:"1h",tag:"Open"},
        {id:"4",primary:"Verification passed",secondary:"@shadow",meta:"3h",tag:"Verified"},
      ]} />
    </DashboardPage>
  );
}
