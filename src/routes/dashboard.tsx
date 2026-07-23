import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Dashboard — The Shouter" },
      { name: "description", content: "Your command center for events, teams, tournaments and Discord activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardShell,
});
