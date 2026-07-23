import { Link } from "@tanstack/react-router";
import { Crosshair, Bell, Search } from "lucide-react";
import { useState } from "react";
import { NeoButton, NeoBadge } from "./neo";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/explore", label: "Explore" },
  { to: "/rules", label: "Rules" },
  { to: "/bot-status", label: "Bot" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/admin", label: "Admin" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      {/* Main bar — chunky, no bottom border (wave provides it) */}
      <div className="bg-card/95 backdrop-blur border-b-0">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md p-1.5 rotate-[-6deg] group-hover:rotate-[6deg] transition-transform">
              <Crosshair className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl tracking-tight leading-none">
              THE
              <br className="sm:hidden" />
              <span className="sm:ml-1">SHOOTERS</span>
            </span>
            <NeoBadge variant="accent" className="hidden sm:inline-flex">Beta</NeoBadge>
          </Link>

          {/* Center capsule nav */}
          <nav className="ml-auto hidden md:flex items-center gap-1 neo-border neo-shadow-sm bg-background rounded-full p-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3.5 py-1.5 rounded-full font-display text-xs uppercase tracking-widest hover:bg-muted transition-colors"
                activeProps={{
                  className: "bg-primary text-primary-foreground neo-border neo-shadow-sm",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="ml-auto md:ml-0 flex items-center gap-2">
            <button
              aria-label="Search"
              className="hidden sm:grid neo-border neo-shadow-sm neo-press bg-background rounded-md h-9 w-9 place-items-center"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link
              to="/notifications"
              aria-label="Notifications"
              className="relative hidden sm:grid neo-border neo-shadow-sm neo-press bg-background rounded-md h-9 w-9 place-items-center"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive neo-border" />
            </Link>
            <ThemeSwitcher />
            <Link to="/profile" className="hidden md:inline-flex">
              <NeoButton size="sm" variant="primary">Login</NeoButton>
            </Link>
            <button
              className={cn(
                "md:hidden neo-border neo-shadow-sm neo-press rounded-md h-10 w-10 grid place-items-center transition-colors",
                open ? "bg-primary text-primary-foreground" : "bg-background",
              )}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-[3px] w-5 bg-current rounded-sm transition-all duration-300",
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-5 bg-current rounded-sm transition-all duration-200",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[3px] w-5 bg-current rounded-sm transition-all duration-300",
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Wavy bottom edge — mirrors footer's wave silhouette */}
      <div className="relative h-6 md:h-8 -mt-px">
        <svg
          className="absolute inset-0 h-full w-full block"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,0 H1200 V20 Q1125,40 1050,20 T900,20 T750,20 T600,20 T450,20 T300,20 T150,20 T0,20 Z"
            fill="var(--color-card)"
            stroke="var(--color-border)"
            strokeWidth="3"
          />
        </svg>
      </div>

      {open && (
        <div className="md:hidden -mt-3 border-t-4 border-border bg-card animate-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md font-display text-sm uppercase tracking-wide hover:bg-muted neo-border border-transparent hover:border-border"
                activeProps={{ className: "bg-secondary text-secondary-foreground neo-border" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/profile" onClick={() => setOpen(false)}>
              <NeoButton size="sm" variant="primary" className="w-full mt-2">
                Login with Discord
              </NeoButton>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
