import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/auto-threads")({
  head: () => ({ meta: [{ title: "Auto Threads — Bot · The Shouter" }, { name: "description", content: "Spin threads on hot messages, art drops, and replies." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Modules"
      title="Auto Threads"
      tagline="Spawn threads automatically on hot messages, art drops, and reply chains — keeping channels clean."
      heroKey="cover-artwork"
      status="beta"
      stats={[{ label: "Rules", value: 6 }, { label: "Threads today", value: 84 }, { label: "Errors", value: 0 }]}
      commands={[
        { name: "threads", aliases: ["th"], syntax: "!threads <list|add|remove> [channel]", desc: "Manage auto-thread rules per channel.", cooldown: "3s", perms: "Manage Threads",
          args: [{ name: "action", desc: "list, add or remove", required: true }, { name: "channel", desc: "Target channel mention" }],
          example: "!threads add #art-drops", output: "✅ Auto-threads enabled for #art-drops (rename after 1st reply)" },
        { name: "threadhot", syntax: "!threadhot <reactions>", desc: "Spawn a thread when a message hits N reactions.", example: "!threadhot 8", output: "🔥 Threshold set: 8 reactions." },
        { name: "threadname", syntax: "!threadname <template>", desc: "Rename spawned threads using {author}, {topic}, {date}.", example: "!threadname {topic} by {author}" },
        { name: "threadarchive", syntax: "!threadarchive <hours>", desc: "Auto-archive inactive threads.", example: "!threadarchive 24" },
      ]}
    />
  );
}
