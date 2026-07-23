import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/dashboard-page";
import { Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/bot")({
  head: () => ({
    meta: [
      { title: "Bot Control — The Shouter" },
      { name: "description", content: "Commands, permissions, modules, logs, guild settings, temp channels and webhooks." },
      { property: "og:title", content: "Bot Control — The Shouter" },
      { property: "og:description", content: "Commands, permissions, modules, logs, guild settings, temp channels and webhooks." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Discord"
      title="Bot Control"
      tagline="Commands, permissions, modules, logs, guild settings, temp channels and webhooks."
      heroKey="bot-mascot"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {slug:"commands",label:"Commands"},
          {slug:"permissions",label:"Permissions"},
          {slug:"prefixes",label:"Prefixes"},
          {slug:"cooldowns",label:"Cooldowns"},
          {slug:"modules",label:"Modules"},
          {slug:"logs",label:"Logs"},
          {slug:"guild-settings",label:"Guild Settings"},
          {slug:"auto-roles",label:"Auto Roles"},
          {slug:"auto-channels",label:"Auto Channels"},
          {slug:"temp-channels",label:"Temp Channels"},
          {slug:"temp-categories",label:"Temp Categories"},
          {slug:"cleanup",label:"Cleanup"},
          {slug:"webhooks",label:"Webhooks"},
          {slug:"templates",label:"Message Templates"},
        ].map((f) => (
          <Link key={f.slug} to={"/bot/$slug" as any} params={{slug:f.slug}}>
            <NeoCard className="p-5 hover:-translate-y-1 transition-transform h-full">
              <NeoBadge variant="secondary">Bot</NeoBadge>
              <div className="font-display text-xl mt-2">{f.label}</div>
            </NeoCard>
          </Link>
        ))}
      </div>
    </DashboardPage>
  );
}
