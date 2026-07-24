import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — Bot · The Shouter" }, { name: "description", content: "XP, wins, MVP and season ranking commands." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Stats"
      title="Leaderboard"
      tagline="XP boards, win rates, MVP counts and season ranking — queryable in-chat."
      heroKey="stat-wins"
      stats={[{ label: "Tracked players", value: "12.4K" }, { label: "Seasons", value: 4 }, { label: "Refresh", value: "60s" }]}
      commands={[
        { name: "top", syntax: "!top [xp|wins|mvp] [limit]", desc: "Show the top N players by metric.", example: "!top wins 10", output: "🥇 pixel — 214W · 🥈 axe — 198W ..." },
        { name: "rank", syntax: "!rank [@user]", desc: "Your rank card with XP, wins and season badge.", cooldown: "5s" },
        { name: "season", syntax: "!season", desc: "Current season stats: rank, tier, decay timer." },
        { name: "compare", syntax: "!compare <@a> <@b>", desc: "Head-to-head stat comparison card.", example: "!compare @pixel @axe" },
        { name: "resetrank", syntax: "!resetrank <@user>", desc: "Reset a player's season rank (staff only).", perms: "Administrator" },
      ]}
    />
  );
}
