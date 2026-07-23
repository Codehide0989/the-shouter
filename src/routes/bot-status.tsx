import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { Bot, Radio, Zap } from "lucide-react";

export const Route = createFileRoute("/bot-status")({
  head: () => ({
    meta: [
      { title: "Bot Status — THE SHOOTERS" },
      { name: "description", content: "Live Discord bot uptime, command usage, and sync stats." },
      { property: "og:title", content: "Bot Status" },
      { property: "og:description", content: "Real-time Discord bot health." },
    ],
  }),
  component: BotStatus,
});

function BotStatus() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <NeoBadge variant="success"><Radio className="h-3 w-3" /> Online</NeoBadge>
      <h1 className="text-5xl mt-3 flex items-center gap-3"><Bot className="h-12 w-12" /> Shooters Bot</h1>
      <p className="text-muted-foreground mt-2">Prefix commands only. Canva-style card responses. Real-time Discord sync.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {[
          { k: "99.9%", v: "Uptime (30d)" },
          { k: "12", v: "Servers" },
          { k: "38k", v: "Users" },
          { k: "142ms", v: "Avg latency" },
        ].map((s) => (
          <NeoCard key={s.v} className="text-center">
            <div className="font-display text-4xl">{s.k}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
          </NeoCard>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-10">
        <div>
          <SectionHeader eyebrow="Commands" title="Prefix commands" />
          <NeoCard className="space-y-2 font-mono text-sm">
            {[
              ["!help", "Show the help card"],
              ["!register <event>", "Register for an event"],
              ["!team create <name>", "Create a team"],
              ["!team invite @user", "Invite a member"],
              ["!leaderboard", "Show leaderboard card"],
              ["!bracket <event>", "Show tournament bracket"],
              ["!vote <group>", "Cast a vote"],
              ["!remind", "Get event reminder card"],
            ].map(([cmd, desc]) => (
              <div key={cmd} className="neo-border rounded-md bg-muted px-3 py-2 flex justify-between gap-3">
                <span className="font-bold">{cmd}</span>
                <span className="text-muted-foreground text-xs">{desc}</span>
              </div>
            ))}
          </NeoCard>
        </div>

        <div>
          <SectionHeader eyebrow="Live" title="Recent activity" />
          <NeoCard>
            <ul className="space-y-2 text-sm">
              {[
                "Posted registration card in #bgmi-clash",
                "Created temp category: PIC-BATTLE-SUMMER",
                "Synced 24 reactions from #artwork-neon",
                "Sent DM verification to raven#4210",
                "!leaderboard used by boss#2020",
              ].map((a, i) => (
                <li key={i} className="neo-border rounded-md bg-background px-3 py-2 flex items-center gap-2">
                  <Zap className="h-3 w-3 text-accent" /> {a}
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </div>
    </div>
  );
}
