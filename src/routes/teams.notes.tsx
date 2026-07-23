import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/teams/notes")({
  head: () => ({
    meta: [
      { title: "Team Notes — The Shouter" },
      { name: "description", content: "Strategy notes only teammates see." },
      { property: "og:title", content: "Team Notes — The Shouter" },
      { property: "og:description", content: "Strategy notes only teammates see." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Team"
      title="Team Notes"
      tagline="Strategy notes only teammates see."
      heroKey="cover-community"
    >
      <StatGrid items={[{"label":"Teams","value":"48"},{"label":"Members","value":"196"},{"label":"Pending","value":9},{"label":"Ready","value":"87%"}]} />
      <ListPanel title="Recent" items={[
        {id:"1",primary:"Neon Ateliers · invitation sent",secondary:"@shadow → @ghostpixel",meta:"5m",tag:"Sent"},
        {id:"2",primary:"Squad Rumble · ready check",secondary:"3/4 green",meta:"12m",tag:"Waiting"},
        {id:"3",primary:"Blaze Squad · captain transfer",secondary:"@ace → @nova",meta:"1h",tag:"Done"},
        {id:"4",primary:"Reserve activated",secondary:"@ember subbing for @cinder",meta:"2h",tag:"Swap"},
      ]} />
    </DashboardPage>
  );
}
