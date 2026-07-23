import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/bot/temp-categories")({
  head: () => ({
    meta: [
      { title: "Temp Categories — The Shouter" },
      { name: "description", content: "Categories cleaned up after events." },
      { property: "og:title", content: "Temp Categories — The Shouter" },
      { property: "og:description", content: "Categories cleaned up after events." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Bot"
      title="Temp Categories"
      tagline="Categories cleaned up after events."
      heroKey="notice-drop"
    >
      <StatGrid items={[{"label":"Configured","value":"48 guilds"},{"label":"Last used","value":"2m ago"},{"label":"Health","value":"OK"},{"label":"Errors 24h","value":0}]} />
      <ListPanel title="Recent activity" items={[
        {id:"1",primary:"!register invoked",secondary:"Shouters HQ · #general",meta:"just now",tag:"OK"},
        {id:"2",primary:"Permission updated",secondary:"@Mod can run !seed",meta:"14m",tag:"Change"},
        {id:"3",primary:"Cooldown hit",secondary:"@user tried !ping ×5",meta:"1h",tag:"Throttled"},
        {id:"4",primary:"Webhook fired",secondary:"match.report → discord",meta:"3h",tag:"200 OK"},
      ]} />
    </DashboardPage>
  );
}
