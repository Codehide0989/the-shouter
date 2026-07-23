import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { THEMES, useTheme } from "@/lib/theme";
import { Bell, MessageSquare, Palette, Shield, Volume2, Zap } from "lucide-react";
import settingsHero from "@/assets/settings-hero.jpg";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — The Shouter" },
      { name: "description", content: "Notification, theme, and Discord sync settings." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Settings,
});

const NOTIFS = [
  { icon: Bell, label: "Event start reminders", hint: "Ping 10 min before kick-off" },
  { icon: MessageSquare, label: "Team invites", hint: "DM & in-app card" },
  { icon: Zap, label: "Vote milestones", hint: "Every 25 reactions" },
  { icon: Shield, label: "Admin announcements", hint: "Server-wide notices" },
];

function Settings() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <div className="relative overflow-hidden neo-border neo-shadow-lg rounded-lg bg-gradient-to-br from-primary/25 via-accent/20 to-secondary/25 p-6 md:p-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <NeoBadge variant="accent">Preferences</NeoBadge>
            <h1 className="text-4xl md:text-6xl mt-3">Settings</h1>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Tune the vibe, dial in your alerts, and keep Discord synced. Everything saves the moment you tap.
            </p>
          </div>
          <img
            src={settingsHero}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="h-32 w-32 md:h-44 md:w-44 object-contain drop-shadow-[6px_6px_0_var(--color-border)] animate-[spin_18s_linear_infinite]"
          />
        </div>
      </div>

      {/* Season theme */}
      <NeoCard className="mt-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 neo-border rounded-md bg-accent text-accent-foreground flex items-center justify-center">
            <Palette className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl">Season theme</h2>
            <p className="text-sm text-muted-foreground">Changes the whole platform look and effects.</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {THEMES.map((t) => {
            const active = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`relative neo-border neo-shadow-sm neo-press-hover rounded-md p-4 text-left font-display uppercase text-sm transition-all ${
                  active ? "bg-primary text-primary-foreground translate-x-[2px] translate-y-[2px]" : "bg-card"
                }`}
              >
                <div className="text-4xl">{t.emoji}</div>
                <div className="mt-2">{t.label}</div>
                {active && (
                  <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-[color:var(--success)] neo-border" />
                )}
              </button>
            );
          })}
        </div>
      </NeoCard>

      {/* Notifications */}
      <NeoCard className="mt-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 neo-border rounded-md bg-primary text-primary-foreground flex items-center justify-center">
            <Bell className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl">Notifications</h2>
            <p className="text-sm text-muted-foreground">Choose what pings your phone and what stays quiet.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {NOTIFS.map(({ icon: Icon, label, hint }) => (
            <label
              key={label}
              className="flex items-center gap-3 neo-border neo-shadow-sm rounded-md p-3 bg-muted cursor-pointer hover:bg-background transition-colors"
            >
              <div className="h-9 w-9 neo-border rounded-md bg-background flex items-center justify-center">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm">{label}</div>
                <div className="text-xs text-muted-foreground">{hint}</div>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 accent-[color:var(--color-primary)]" />
            </label>
          ))}
        </div>
      </NeoCard>

      {/* Audio + Discord */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <NeoCard>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 neo-border rounded-md bg-secondary text-secondary-foreground flex items-center justify-center">
              <Volume2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl">Sound</h2>
          </div>
          <div className="mt-4 space-y-3">
            <label className="block text-sm font-display uppercase tracking-widest">
              Notification volume
              <input type="range" defaultValue={70} className="mt-2 w-full accent-[color:var(--color-primary)]" />
            </label>
            <label className="flex items-center gap-3 neo-border rounded-md p-2 bg-muted">
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              <span className="text-sm">Play megaphone chime on event start</span>
            </label>
          </div>
        </NeoCard>

        <NeoCard>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 neo-border rounded-md bg-[color:var(--color-accent)] text-accent-foreground flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="text-2xl">Discord</h2>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Connected as <b className="text-foreground">shadow#0001</b> · 3 servers synced.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <NeoButton size="sm" variant="secondary">Reconnect Discord</NeoButton>
            <NeoButton size="sm" variant="ghost">Disconnect</NeoButton>
          </div>
        </NeoCard>
      </div>
    </div>
  );
}
