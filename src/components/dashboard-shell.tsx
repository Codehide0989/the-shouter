import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { DASH_SECTIONS, DASH_GROUPS } from "@/lib/dashboard-nav";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { NeoBadge } from "@/components/neo";

function toPath(slug: string) {
  return slug ? `/dashboard/${slug}` : "/dashboard";
}

export function DashboardShell() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const sidebar = (
    <nav className="space-y-6 p-4">
      {DASH_GROUPS.map((group) => (
        <div key={group}>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 px-2">{group}</div>
          <ul className="space-y-1">
            {DASH_SECTIONS.filter((s) => s.group === group).map((s) => {
              const path = toPath(s.slug);
              const active = pathname === path || (s.slug === "" && pathname === "/dashboard");
              return (
                <li key={s.slug || "overview"}>
                  <Link
                    to={path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-all",
                      active
                        ? "neo-border neo-shadow-sm bg-primary text-primary-foreground"
                        : "hover:bg-muted hover:translate-x-0.5",
                    )}
                  >
                    <s.icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{s.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="mx-auto max-w-[1400px] px-3 sm:px-5 py-6">
      {/* Mobile toggle */}
      <div className="lg:hidden mb-4 flex items-center justify-between">
        <button
          onClick={() => setOpen((v) => !v)}
          className="neo-border neo-shadow-sm bg-card rounded-md px-3 py-2 inline-flex items-center gap-2 text-sm font-display"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Sections
        </button>
        <NeoBadge variant="accent">Dashboard</NeoBadge>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside
          className={cn(
            "neo-border neo-shadow bg-card rounded-lg h-[calc(100vh-8rem)] overflow-y-auto sticky top-24",
            "lg:block",
            open ? "block" : "hidden",
          )}
        >
          {sidebar}
        </aside>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
