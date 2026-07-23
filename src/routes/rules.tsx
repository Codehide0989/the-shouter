import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoCard } from "@/components/neo";
import { ShieldCheck, Swords, Palette, Scale, CheckCircle2 } from "lucide-react";
import rulesHero from "@/assets/rules-hero.jpg";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules — The Shooter" },
      { name: "description", content: "Community rules, event guidelines, and fair play policy." },
      { property: "og:title", content: "Rules" },
      { property: "og:description", content: "How events work on The Shooter." },
    ],
  }),
  component: Rules,
});

const SECTIONS = [
  {
    title: "General",
    tag: "01",
    icon: ShieldCheck,
    accent: "bg-primary text-primary-foreground",
    items: [
      "Be a member of the host Discord server.",
      "One account per player. No smurfing.",
      "Respect staff decisions and event moderators.",
    ],
  },
  {
    title: "Tournaments",
    tag: "02",
    icon: Swords,
    accent: "bg-secondary text-secondary-foreground",
    items: [
      "Team leader registers and adds Discord IDs for each member.",
      "All members must verify via bot DM before check-in.",
      "Submit IGN, game ID, and region at check-in.",
      "Sensitive game details unlock only after team verification.",
    ],
  },
  {
    title: "Artwork & Pic Battles",
    tag: "03",
    icon: Palette,
    accent: "bg-accent text-accent-foreground",
    items: [
      "Original work only. AI-generated art must be disclosed.",
      "One submission per round unless the event states otherwise.",
      "Voting happens on Discord — reactions mirror to the site live.",
    ],
  },
  {
    title: "Fair Play",
    tag: "04",
    icon: Scale,
    accent: "bg-destructive text-destructive-foreground",
    items: [
      "Cheating, hacks, or third-party tools = permanent ban.",
      "Toxicity, harassment, or slurs = removal from event.",
      "Appeals via the #support channel.",
    ],
  },
];

function Rules() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <section className="relative neo-border neo-shadow bg-card overflow-hidden rounded-lg">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <NeoBadge variant="accent">Playbook</NeoBadge>
            <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[0.95] tracking-tight">
              RULES OF<br />ENGAGEMENT
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              Read before you register. These apply to every event on the platform — tournaments, art battles, community drops.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <NeoBadge>Fair Play</NeoBadge>
              <NeoBadge variant="accent">Discord verified</NeoBadge>
              <NeoBadge>Zero tolerance</NeoBadge>
            </div>
          </div>
          <div className="relative min-h-64 md:min-h-full bg-secondary/30 border-t-4 md:border-t-0 md:border-l-4 border-border overflow-hidden">
            <img
              src={rulesHero}
              alt="Rulebook illustration"
              width={1536}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute top-3 right-3 neo-border neo-shadow-sm bg-primary text-primary-foreground font-display text-xs px-2 py-1 rotate-3">
              READ ME
            </span>
          </div>
        </div>
      </section>

      {/* Rule cards */}
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <NeoCard key={s.title} className="relative overflow-hidden">
              <span
                aria-hidden
                className="absolute -top-3 -right-2 font-display text-7xl leading-none text-border/20 select-none"
              >
                {s.tag}
              </span>
              <div className="flex items-center gap-3">
                <span className={`neo-border neo-shadow-sm ${s.accent} rounded-md p-2`}>
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <h2 className="font-display text-2xl tracking-tight">{s.title}</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </NeoCard>
          );
        })}
      </div>

      {/* Footer stamp */}
      <div className="mt-8 neo-border neo-shadow bg-accent text-accent-foreground rounded-lg p-5 flex flex-wrap items-center gap-4 justify-between">
        <div>
          <div className="font-display text-xl">Break a rule → forfeit the run.</div>
          <div className="text-sm opacity-80">Appeals through #support · decisions logged on Discord.</div>
        </div>
        <span className="neo-border bg-background text-foreground font-display text-xs px-3 py-1.5 rotate-[-3deg]">
          v2.6 · updated weekly
        </span>
      </div>
    </div>
  );
}
