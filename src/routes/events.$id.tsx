import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, STATUS_LABEL, TYPE_LABEL, type MockEvent } from "@/lib/mock-data";
import { EVENT_IMAGE } from "@/lib/event-images";
import {
  Users,
  Trophy,
  Radio,
  Calendar,
  Hash,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  Image as ImageIcon,
  ListOrdered,
  GitBranch,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/events/$id")({
  loader: ({ params }): { event: MockEvent } => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title} — The Shouter` },
          { name: "description", content: loaderData.event.description },
          { property: "og:title", content: loaderData.event.title },
          { property: "og:description", content: loaderData.event.description },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Event not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl p-10 text-center">
      <h1 className="text-4xl">Event not found</h1>
      <Link to="/explore" className="mt-4 inline-block underline">Back to events</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl p-10 text-center">
      <h1 className="text-3xl">Something broke</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
    </div>
  ),
  component: EventDetail,
});

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}
function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}
function countdown(iso: string) {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff <= 0) return "In progress";
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return d > 0 ? `${d}d ${h}h` : h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function SectionTitle({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div className="h-9 w-9 shrink-0 neo-border rounded-md bg-primary text-primary-foreground flex items-center justify-center font-display text-sm">
        {n}
      </div>
      <div>
        <h2 className="text-2xl leading-none">{title}</h2>
        {sub && <p className="text-xs text-muted-foreground mt-1.5">{sub}</p>}
      </div>
    </div>
  );
}

function EventDetail() {
  const { event } = Route.useLoaderData() as { event: MockEvent };

  const isTeam = event.type === "tournament";
  const pct = Math.min(100, Math.round((event.registered / event.capacity) * 100));
  const spotsLeft = Math.max(0, event.capacity - event.registered);
  const img = EVENT_IMAGE[event.type];
  const channel = `#${event.server.toLowerCase().replace(/\s+/g, "-")}`;

  const tabs = [
    { to: "/events/$id/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/events/$id/leaderboard", label: "Leaderboard", icon: ListOrdered },
    { to: "/events/$id/gallery", label: "Gallery", icon: ImageIcon },
    ...(isTeam ? [{ to: "/events/$id/bracket", label: "Bracket", icon: GitBranch }] : []),
  ] as const;

  const schedule = [
    { t: "Registration opens", d: "Now — bot posts the card in " + channel, done: true },
    { t: "Check-in", d: "30 min before start, react ✅ to confirm", done: false },
    { t: "Event starts", d: `${fmtDate(event.startsAt)} · ${fmtTime(event.startsAt)}`, done: false },
    { t: "Results & payout", d: `${event.prize} distributed within 24h`, done: false },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs font-display uppercase tracking-widest text-muted-foreground mb-4">
        <Link to="/explore" className="hover:text-foreground">Explore</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground truncate">{TYPE_LABEL[event.type]}</span>
      </nav>

      {/* HERO */}
      <div className={`relative overflow-hidden neo-border neo-shadow-lg rounded-lg bg-gradient-to-br ${event.cover}`}>
        <img src={img} alt={`${event.title} cover artwork`} className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="relative p-5 sm:p-8 md:p-12 grid gap-8 lg:grid-cols-[1.4fr_.9fr] lg:items-end">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 mb-4">
              <NeoBadge variant="secondary">{TYPE_LABEL[event.type]}</NeoBadge>
              {event.game && <NeoBadge variant="accent">{event.game}</NeoBadge>}
              {event.status === "live" ? (
                <NeoBadge variant="destructive" className="animate-pulse">
                  <Radio className="h-3 w-3" /> Live now
                </NeoBadge>
              ) : (
                <NeoBadge variant="muted">{STATUS_LABEL[event.status]}</NeoBadge>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.6)] break-words">
              {event.title}
            </h1>
            <p className="mt-3 text-white/90 max-w-xl text-sm sm:text-base">{event.description}</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { icon: Calendar, k: "Date", v: fmtDate(event.startsAt) },
                { icon: Clock, k: "Starts in", v: countdown(event.startsAt) },
                { icon: Users, k: "Slots", v: `${event.registered}/${event.capacity}` },
                { icon: Trophy, k: "Prize", v: event.prize },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="neo-border rounded-md bg-background/92 backdrop-blur px-3 py-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-display uppercase tracking-widest text-muted-foreground">
                    <Icon className="h-3 w-3 text-accent shrink-0" /> {k}
                  </div>
                  <div className="text-sm font-bold truncate mt-0.5">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Register panel */}
          <div className="neo-border neo-shadow rounded-lg bg-background p-4 sm:p-5">
            <div className="flex items-center justify-between text-[10px] font-display uppercase tracking-widest mb-1.5">
              <span>Filled</span>
              <span>{pct}%</span>
            </div>
            <div className="h-3 neo-border rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {spotsLeft > 0 ? `${spotsLeft} spots left` : "Waitlist only"} · {channel}
            </p>
            <Link to={isTeam ? "/register/team/$id" : "/register/$id"} params={{ id: event.id }} className="mt-4 block">
              <NeoButton size="lg" variant="primary" className="w-full">
                {isTeam ? "Register Team" : "Register Now"}
              </NeoButton>
            </Link>
            <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--success)]" /> Discord-verified entry
            </div>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        <span className="neo-border neo-shadow-sm rounded-md bg-primary text-primary-foreground px-3 py-2 text-xs font-display uppercase whitespace-nowrap">
          Overview
        </span>
        {tabs.map(({ to, label, icon: Icon }) => (
          <Link
            key={label}
            to={to}
            params={{ id: event.id }}
            className="neo-border rounded-md bg-background px-3 py-2 text-xs font-display uppercase whitespace-nowrap flex items-center gap-1.5 hover:bg-muted transition-colors"
          >
            <Icon className="h-3.5 w-3.5 text-accent" /> {label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] mt-6">
        <div className="space-y-6 min-w-0">
          <NeoCard>
            <SectionTitle n="01" title="Overview" sub={`Hosted on ${event.server}`} />
            <p className="text-muted-foreground text-sm">
              This event runs on <span className="font-bold text-foreground">{event.server}</span>. The bot posts live
              registration cards, opens a temporary category, and mirrors reactions between Discord and this dashboard.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
              {[
                "Discord-verified registration",
                "Live participant feed",
                "Reaction-synced voting",
                "Real-time dashboard",
                ...(isTeam ? ["Team leader verification flow", "Mandatory game IDs at check-in"] : ["Single-entry fair play", "Anonymous judging round"]),
              ].map((f) => (
                <li key={f} className="neo-border rounded-md px-3 py-2 bg-muted flex items-center gap-2">
                  <span className="h-4 w-4 rounded-sm neo-border bg-[color:var(--success)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard>
            <SectionTitle n="02" title="Schedule" sub="All times shown in your local timezone" />
            <ol className="relative space-y-3 pl-6 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:bg-foreground/20">
              {schedule.map((s) => (
                <li key={s.t} className="relative">
                  <span
                    className={`absolute -left-6 top-2 h-4 w-4 rounded-full neo-border ${s.done ? "bg-[color:var(--success)]" : "bg-background"}`}
                  />
                  <div className="neo-border rounded-md bg-background px-3 py-2">
                    <div className="font-display uppercase text-sm">{s.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </NeoCard>

          <NeoCard>
            <SectionTitle n="03" title="Rules snapshot" sub="Short version — full rulebook linked below" />
            <ol className="space-y-2 text-sm">
              {[
                `Must be a member of ${event.server} on Discord.`,
                "Registration closes 30 minutes before start.",
                ...(isTeam
                  ? [`Team size: ${event.teamSize} verified members.`, "Submit game IGN, ID, and region at check-in."]
                  : ["One submission per player per round.", "Original work only — no reposts or AI-only entries."]),
                "Toxicity, cheating, or smurfing = instant ban.",
              ].map((r, i) => (
                <li key={r} className="neo-border rounded-md bg-muted px-3 py-2 flex gap-2.5">
                  <span className="font-display text-xs text-accent shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{r}</span>
                </li>
              ))}
            </ol>
            <Link to="/rules" className="mt-4 inline-flex items-center text-sm font-display uppercase underline">
              Full rules <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </NeoCard>

          <NeoCard>
            <SectionTitle n="04" title="Live activity" sub="Synced from Discord" />
            <ul className="space-y-2 text-sm">
              {[
                "shadow#0001 registered",
                "raven#4210 joined team Ghost Recon",
                "boss#2020 uploaded submission",
                "42 reactions on group A",
              ].map((a) => (
                <li key={a} className="neo-border rounded-md bg-background px-3 py-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--success)] animate-pulse shrink-0" />
                  <span className="truncate">{a}</span>
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <NeoCard className="p-0 overflow-hidden">
            <div className={`relative h-32 bg-gradient-to-br ${event.cover}`}>
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-3 font-display uppercase text-white text-sm drop-shadow">
                {TYPE_LABEL[event.type]}
              </div>
            </div>
            <div className="p-4 space-y-2.5 text-sm">
              {[
                { icon: Calendar, v: `${fmtDate(event.startsAt)} · ${fmtTime(event.startsAt)}` },
                { icon: Users, v: `${event.registered} / ${event.capacity} registered` },
                { icon: Trophy, v: event.prize },
                { icon: Hash, v: channel },
                ...(isTeam ? [{ icon: Sparkles, v: `Team size: ${event.teamSize}` }] : []),
              ].map(({ icon: Icon, v }) => (
                <div key={v} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent shrink-0" />
                  <span className="truncate">{v}</span>
                </div>
              ))}
              <Link to={isTeam ? "/register/team/$id" : "/register/$id"} params={{ id: event.id }} className="block pt-1">
                <NeoButton variant="primary" className="w-full">
                  {isTeam ? "Register Team" : "Register Now"}
                </NeoButton>
              </Link>
            </div>
          </NeoCard>

          <NeoCard className="bg-secondary text-secondary-foreground">
            <h3 className="text-xl">Bot commands</h3>
            <div className="mt-3 space-y-2 text-xs font-mono">
              {[`!register ${event.id}`, `!status ${event.id}`, "!leaderboard"].map((c) => (
                <div key={c} className="neo-border rounded-md bg-background text-foreground px-2 py-1 overflow-x-auto whitespace-nowrap">
                  {c}
                </div>
              ))}
            </div>
          </NeoCard>

          <NeoCard>
            <h3 className="text-lg">Need help?</h3>
            <p className="text-xs text-muted-foreground mt-1">Ping a mod or open a ticket if registration fails.</p>
            <div className="mt-3 grid gap-2">
              <Link to="/support"><NeoButton variant="outline" className="w-full">Open support</NeoButton></Link>
              <Link to="/faq"><NeoButton variant="outline" className="w-full">Read FAQ</NeoButton></Link>
            </div>
          </NeoCard>
        </aside>
      </div>
    </div>
  );
}
