import type { ReactNode } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { Copy, Terminal, Search, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export interface BotCommand {
  name: string;
  aliases?: string[];
  syntax: string;
  desc: string;
  perms?: string;
  cooldown?: string;
  args?: { name: string; desc: string; required?: boolean }[];
  example?: string;
  output?: string;
}

interface Props {
  eyebrow: string;
  title: string;
  tagline: string;
  heroKey: string;
  status?: "live" | "beta" | "idle";
  stats?: { label: string; value: string | number }[];
  commands: BotCommand[];
  children?: ReactNode;
}

function copy(text: string) {
  if (typeof navigator !== "undefined") navigator.clipboard?.writeText(text).catch(() => {});
}

export function BotSectionDetail({ eyebrow, title, tagline, heroKey, status = "live", stats = [], commands, children }: Props) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(commands[0]?.name ?? null);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return commands;
    return commands.filter((c) =>
      c.name.toLowerCase().includes(s) ||
      c.desc.toLowerCase().includes(s) ||
      c.aliases?.some((a) => a.toLowerCase().includes(s)),
    );
  }, [q, commands]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <Link to="/bot" className="inline-flex items-center gap-1 text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> Bot Control
      </Link>

      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl(heroKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-transparent" />
        <div className="relative p-6 sm:p-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <NeoBadge variant="accent">{eyebrow}</NeoBadge>
            <NeoBadge variant={status === "live" ? "success" : status === "beta" ? "secondary" : "muted"}>
              ● {status}
            </NeoBadge>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">{title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">{tagline}</p>
          {stats.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {stats.map((s) => (
                <span key={s.label} className="neo-border neo-shadow-sm bg-background rounded-md px-3 py-1.5 text-xs font-display uppercase">
                  <span className="text-muted-foreground">{s.label}:</span> <span>{s.value}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {children}

      {/* Command reference */}
      <div>
        <SectionHeader eyebrow="Reference" title="Commands" subtitle={`${commands.length} available · tap any to expand`} />
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search commands, aliases, description..."
            className="w-full neo-border neo-shadow-sm bg-background rounded-md py-3 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="grid gap-3">
          {filtered.map((c) => {
            const isOpen = open === c.name;
            return (
              <NeoCard key={c.name} className="p-0 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : c.name)}
                  className="w-full text-left flex items-start gap-3 p-4"
                >
                  <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md h-10 w-10 grid place-items-center shrink-0">
                    <Terminal className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <code className="font-mono text-sm font-black">!{c.name}</code>
                      {c.aliases?.map((a) => <NeoBadge key={a} variant="muted">{a}</NeoBadge>)}
                      {c.cooldown && <NeoBadge variant="secondary">CD {c.cooldown}</NeoBadge>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.desc}</p>
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t-2 border-border/60 bg-muted/30 p-4 space-y-4">
                    <div>
                      <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-1.5">Syntax</div>
                      <div className="relative">
                        <pre className="neo-border neo-shadow-sm bg-background rounded-md p-3 pr-14 text-xs font-mono overflow-x-auto">{c.syntax}</pre>
                        <NeoButton size="sm" variant="ghost" className="absolute top-2 right-2" onClick={() => copy(c.syntax)}>
                          <Copy className="h-3 w-3" />
                        </NeoButton>
                      </div>
                    </div>
                    {c.args && c.args.length > 0 && (
                      <div>
                        <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-1.5">Arguments</div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {c.args.map((a) => (
                            <div key={a.name} className="neo-border rounded-md p-2 bg-background">
                              <code className="text-xs font-mono font-black">{a.name}{a.required ? "*" : ""}</code>
                              <div className="text-[11px] text-muted-foreground mt-0.5">{a.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {c.example && (
                      <div>
                        <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-1.5">Example</div>
                        <pre className="neo-border neo-shadow-sm bg-background rounded-md p-3 text-xs font-mono overflow-x-auto">{c.example}</pre>
                      </div>
                    )}
                    {c.output && (
                      <div>
                        <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-1.5">Expected output</div>
                        <div className="neo-border rounded-md p-3 text-xs bg-card">{c.output}</div>
                      </div>
                    )}
                    {c.perms && (
                      <div className="text-[11px]">
                        <span className="text-muted-foreground">Required permissions: </span>
                        <span className="font-black">{c.perms}</span>
                      </div>
                    )}
                  </div>
                )}
              </NeoCard>
            );
          })}
          {filtered.length === 0 && (
            <NeoCard className="p-6 text-center text-sm text-muted-foreground">No commands match "{q}".</NeoCard>
          )}
        </div>
      </div>
    </div>
  );
}
