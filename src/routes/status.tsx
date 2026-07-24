import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Activity, Wifi, Database, HardDrive, Cloud, Zap, Cpu, Server,
  Sparkles, ShieldCheck, GitBranch, MapPin, RefreshCcw, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "System Status — The Shouter" },
      { name: "description", content: "Live uptime, response latency, incidents and deployments across every service." },
      { property: "og:title", content: "System Status — The Shouter" },
      { property: "og:description", content: "Live uptime, response latency, incidents and deployments across every service." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/status" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/status" }],
  }),
  component: Page,
});

type Health = "operational" | "degraded" | "maintenance" | "outage";

interface Service {
  name: string;
  group: string;
  icon: typeof Wifi;
  uptime: number; // 90d %
  latency: number; // ms
  status: Health;
  region?: string;
}

const SERVICES: Service[] = [
  { name: "Discord API", group: "Core", icon: Wifi, uptime: 99.98, latency: 42, status: "operational" },
  { name: "Shouter Bot", group: "Core", icon: Cpu, uptime: 99.94, latency: 61, status: "operational" },
  { name: "Realtime Sync (Socket.IO)", group: "Core", icon: Activity, uptime: 99.92, latency: 38, status: "operational" },
  { name: "Postgres (Neon)", group: "Data", icon: Database, uptime: 99.99, latency: 12, status: "operational", region: "us-east-1" },
  { name: "Redis (Upstash)", group: "Data", icon: Zap, uptime: 99.97, latency: 4, status: "operational", region: "global" },
  { name: "Storage (R2)", group: "Data", icon: HardDrive, uptime: 100, latency: 18, status: "operational" },
  { name: "CDN (Cloudflare)", group: "Edge", icon: Cloud, uptime: 100, latency: 6, status: "operational" },
  { name: "ImageKit", group: "Edge", icon: Sparkles, uptime: 99.9, latency: 88, status: "degraded" },
  { name: "Railway (bot host)", group: "Infra", icon: Server, uptime: 99.96, latency: 24, status: "operational", region: "us-west" },
  { name: "Vercel (web)", group: "Infra", icon: Server, uptime: 99.99, latency: 19, status: "operational", region: "iad1" },
  { name: "Gemini AI", group: "AI", icon: Sparkles, uptime: 99.7, latency: 412, status: "operational" },
  { name: "Groq AI", group: "AI", icon: Sparkles, uptime: 99.85, latency: 187, status: "operational" },
  { name: "Auth (Discord OAuth)", group: "Core", icon: ShieldCheck, uptime: 99.98, latency: 71, status: "operational" },
];

const INCIDENTS = [
  { when: "2h ago", title: "ImageKit — elevated latency", severity: "minor", status: "monitoring", body: "Investigating slow thumbnails in EU. Fallback CDN engaged." },
  { when: "3d ago", title: "Realtime sync degraded (12m)", severity: "minor", status: "resolved", body: "Shard rebalance caused reaction delay. Auto-rebalanced." },
  { when: "9d ago", title: "Scheduled DB maintenance", severity: "maintenance", status: "resolved", body: "Neon minor version upgrade. 4 min read-only window." },
];

const DEPLOYS = [
  { when: "12m", branch: "main", msg: "feat(bot): auto-threads GA", by: "pixel" },
  { when: "48m", branch: "main", msg: "fix(web): mobile nav focus trap", by: "axe" },
  { when: "3h", branch: "release/4.2", msg: "chore(infra): bump redis client", by: "nova" },
  { when: "6h", branch: "main", msg: "feat(status): live heartbeat + regions", by: "rune" },
];

const LOGS = [
  "[bot] ! command !register handled in 42ms",
  "[sync] reaction ✅ mirrored to /dashboard/reactions",
  "[db] replica caught up · lag 0ms",
  "[cdn] purged 128 keys · region iad1",
  "[bot] ! command !top wins handled in 61ms",
  "[edge] imagekit fallback triggered → cf",
];

const HEALTH_META: Record<Health, { label: string; badge: "success" | "secondary" | "muted" | "destructive"; dot: string }> = {
  operational: { label: "Operational", badge: "success", dot: "bg-[color:var(--success)]" },
  degraded: { label: "Degraded", badge: "secondary", dot: "bg-secondary" },
  maintenance: { label: "Maintenance", badge: "muted", dot: "bg-muted-foreground" },
  outage: { label: "Outage", badge: "destructive", dot: "bg-destructive" },
};

function useCountUp(target: number, ms = 900) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

function Sparkline({ data, color = "var(--color-primary)" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = Math.max(1, max - min);
  const w = 100, h = 30;
  const step = w / (data.length - 1);
  const d = data.map((y, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - ((y - min) / range) * h).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8" preserveAspectRatio="none">
      <path d={d} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function seedData(seed: number, len = 24) {
  const out: number[] = [];
  let s = seed;
  for (let i = 0; i < len; i++) {
    s = (s * 9301 + 49297) % 233280;
    out.push(40 + (s / 233280) * 60);
  }
  return out;
}

function ServiceRow({ svc, i }: { svc: Service; i: number }) {
  const meta = HEALTH_META[svc.status];
  const Icon = svc.icon;
  const spark = useMemo(() => seedData(i + 7), [i]);
  return (
    <NeoCard className="p-0 overflow-hidden">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-4">
        <span className="neo-border neo-shadow-sm bg-background rounded-md h-10 w-10 grid place-items-center shrink-0">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-sm sm:text-base truncate">{svc.name}</span>
            <NeoBadge variant="muted">{svc.group}</NeoBadge>
            {svc.region && <NeoBadge variant="muted"><MapPin className="h-2.5 w-2.5" />{svc.region}</NeoBadge>}
          </div>
          <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
            <span>{svc.uptime.toFixed(2)}% uptime · 90d</span>
            <span>{svc.latency}ms</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <NeoBadge variant={meta.badge}>
            <span className={`inline-block h-2 w-2 rounded-full ${meta.dot} mr-1`} />{meta.label}
          </NeoBadge>
          <div className="w-20 sm:w-28"><Sparkline data={spark} /></div>
        </div>
      </div>
      {/* 90d uptime bars */}
      <div className="border-t-2 border-border/50 bg-muted/20 px-3 py-2 flex gap-[2px]">
        {Array.from({ length: 60 }).map((_, k) => {
          const bad = (k * (i + 3)) % 47 === 0 && svc.status !== "operational";
          return <span key={k} className={`h-4 flex-1 rounded-sm ${bad ? "bg-destructive" : "bg-[color:var(--success)]"} opacity-80`} />;
        })}
      </div>
    </NeoCard>
  );
}

function Page() {
  const operational = SERVICES.filter((s) => s.status === "operational").length;
  const health = Math.round((operational / SERVICES.length) * 100);
  const animatedHealth = useCountUp(health);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % LOGS.length), 1800);
    return () => clearInterval(id);
  }, []);

  const groups = useMemo(() => {
    const g: Record<string, Service[]> = {};
    for (const s of SERVICES) (g[s.group] ??= []).push(s);
    return g;
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("notice-hero")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/40" />
        <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-[2fr_1fr] items-center">
          <div>
            <NeoBadge variant="accent">System</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">All systems in the fight.</h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
              Live uptime, latency, incidents and deployments across every service powering The Shouter.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 neo-border neo-shadow-sm bg-card rounded-md px-3 py-2">
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-[color:var(--success)] animate-ping opacity-60" />
                  <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--success)]" />
                </span>
                <span className="font-display text-xs uppercase tracking-widest">Heartbeat · live</span>
              </span>
              <NeoBadge variant="success">{operational}/{SERVICES.length} online</NeoBadge>
              <NeoButton size="sm" variant="ghost"><RefreshCcw className="h-3 w-3" /> Refresh</NeoButton>
            </div>
          </div>
          {/* Health gauge */}
          <div className="relative neo-border neo-shadow rounded-md bg-background p-6 text-center">
            <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Health Score</div>
            <div className="font-display text-6xl sm:text-7xl leading-none mt-2">{animatedHealth.toFixed(0)}<span className="text-2xl text-muted-foreground">%</span></div>
            <div className="mt-3 h-2 neo-border rounded-full overflow-hidden bg-muted">
              <div className="h-full bg-[color:var(--success)] transition-all duration-700" style={{ width: `${animatedHealth}%` }} />
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">Rolling 24h · {SERVICES.length} services</div>
          </div>
        </div>
      </div>

      {/* Service groups */}
      {Object.entries(groups).map(([group, list]) => (
        <div key={group}>
          <SectionHeader eyebrow={group} title={`${group} services`} />
          <div className="grid gap-3 lg:grid-cols-2">
            {list.map((s, i) => <ServiceRow key={s.name} svc={s} i={i + group.length} />)}
          </div>
        </div>
      ))}

      {/* Incidents + Deploys */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="History" title="Recent incidents" />
          <div className="space-y-3">
            {INCIDENTS.map((i) => (
              <NeoCard key={i.title} className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <NeoBadge variant={i.severity === "maintenance" ? "muted" : i.status === "resolved" ? "success" : "secondary"}>
                    {i.status}
                  </NeoBadge>
                  <span className="font-display text-sm">{i.title}</span>
                  <span className="text-[11px] text-muted-foreground ml-auto">{i.when}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{i.body}</p>
              </NeoCard>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Ship log" title="Recent deployments" />
          <div className="space-y-3">
            {DEPLOYS.map((d) => (
              <NeoCard key={d.msg} className="p-4">
                <div className="flex items-center gap-2">
                  <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md h-8 w-8 grid place-items-center">
                    <GitBranch className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-sm truncate">{d.msg}</div>
                    <div className="text-[11px] text-muted-foreground">{d.branch} · by {d.by}</div>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{d.when}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </div>

      {/* Live logs preview */}
      <div>
        <SectionHeader eyebrow="Live" title="Log stream (preview)" />
        <NeoCard className="p-0 overflow-hidden">
          <div className="bg-background p-4 font-mono text-[11px] leading-relaxed space-y-1 max-h-56 overflow-hidden">
            {[...LOGS.slice(tick), ...LOGS.slice(0, tick)].map((l, i) => (
              <div key={i} className={i === 0 ? "text-foreground" : "text-muted-foreground"}>
                <span className="text-[color:var(--success)]">●</span>{" "}
                <span className="opacity-60">{new Date(Date.now() - i * 1500).toISOString().split("T")[1].slice(0, 8)}</span>{" "}
                {l}
              </div>
            ))}
          </div>
        </NeoCard>
      </div>
    </div>
  );
}
