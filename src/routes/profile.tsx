import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { Trophy, Flame, Users, Star } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — THE SHOOTERS" },
      { name: "description", content: "Your public profile, teams, and event history." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <NeoCard className="flex flex-col sm:flex-row items-start gap-5">
        <div className="h-24 w-24 rounded-md neo-border neo-shadow bg-gradient-to-br from-orange-500 to-rose-600" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl">shadow#0001</h1>
            <NeoBadge variant="secondary">Verified</NeoBadge>
            <NeoBadge variant="accent">Team Leader</NeoBadge>
          </div>
          <p className="text-muted-foreground mt-2">BGMI enjoyer · Digital artist · 3 active teams</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <NeoButton size="sm" variant="primary">Login with Discord</NeoButton>
            <NeoButton size="sm" variant="ghost">Edit profile</NeoButton>
          </div>
        </div>
      </NeoCard>

      <div className="grid gap-4 sm:grid-cols-4 mt-6">
        {[
          { icon: Trophy, k: 12, v: "Wins" },
          { icon: Flame, k: 4, v: "Streak" },
          { icon: Users, k: 3, v: "Teams" },
          { icon: Star, k: 842, v: "Reactions" },
        ].map((s) => (
          <NeoCard key={s.v} className="text-center">
            <s.icon className="h-6 w-6 mx-auto text-accent" />
            <div className="font-display text-2xl mt-2">{s.k}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
          </NeoCard>
        ))}
      </div>

      <NeoCard className="mt-6">
        <h2 className="text-2xl mb-3">Event history</h2>
        <ul className="space-y-2 text-sm">
          {["BGMI Clash #13 — 🥇 Winner", "Neon Dreams #4 — 3rd place", "Summer Pic Battle #2 — Semifinalist", "Free Fire Cup #1 — Registered"].map((h) => (
            <li key={h} className="neo-border rounded-md bg-muted px-3 py-2">{h}</li>
          ))}
        </ul>
      </NeoCard>
    </div>
  );
}
