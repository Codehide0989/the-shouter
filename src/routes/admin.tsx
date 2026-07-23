import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — The Shouter" },
      { name: "description", content: "Manage events, teams, submissions, and bot sync." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminShell,
});
