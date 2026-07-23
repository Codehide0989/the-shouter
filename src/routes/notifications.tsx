import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — THE SHOOTERS" },
      { name: "description", content: "Event alerts, team updates, and Discord activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Notifications,
});

function Notifications() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between">
        <div>
          <NeoBadge variant="accent">Alerts</NeoBadge>
          <h1 className="text-4xl mt-3">Notifications</h1>
        </div>
        <NeoButton size="sm" variant="ghost">Mark all read</NeoButton>
      </div>
      <NeoCard className="mt-6 space-y-3">
        {MOCK_NOTIFICATIONS.map((n) => (
          <div key={n.id} className={`neo-border rounded-md p-4 flex gap-3 items-start ${n.unread ? "bg-secondary text-secondary-foreground" : "bg-muted"}`}>
            {n.unread && <span className="h-2 w-2 rounded-full bg-destructive mt-2" />}
            <div className="flex-1">
              <div className="text-sm">{n.text}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70 mt-1">{n.time}</div>
            </div>
          </div>
        ))}
      </NeoCard>
    </div>
  );
}
