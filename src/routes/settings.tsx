import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { THEMES, useTheme } from "@/lib/theme";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — The Shooter" },
      { name: "description", content: "Notification, theme, and Discord sync settings." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Settings,
});

function Settings() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <NeoBadge variant="accent">Preferences</NeoBadge>
      <h1 className="text-4xl mt-3">Settings</h1>

      <NeoCard className="mt-6">
        <h2 className="text-2xl">Season theme</h2>
        <p className="text-sm text-muted-foreground mt-1">Changes the whole platform look.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`neo-border neo-shadow-sm rounded-md px-4 py-3 text-left font-display uppercase text-sm ${theme === t.id ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              <div className="text-2xl">{t.emoji}</div>
              <div className="mt-1">{t.label}</div>
            </button>
          ))}
        </div>
      </NeoCard>

      <NeoCard className="mt-6">
        <h2 className="text-2xl">Notifications</h2>
        {["Event start reminders", "Team invites", "Vote milestones", "Admin announcements"].map((n) => (
          <label key={n} className="mt-3 flex items-center gap-3 text-sm neo-border rounded-md p-3 bg-muted">
            <input type="checkbox" defaultChecked className="h-4 w-4" /> {n}
          </label>
        ))}
      </NeoCard>

      <NeoCard className="mt-6">
        <h2 className="text-2xl">Discord</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage your Discord connection and server sync.</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <NeoButton size="sm" variant="secondary">Reconnect Discord</NeoButton>
          <NeoButton size="sm" variant="ghost">Disconnect</NeoButton>
        </div>
      </NeoCard>
    </div>
  );
}
