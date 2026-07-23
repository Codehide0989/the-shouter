import { Link } from "@tanstack/react-router";
import { Crosshair } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b-4 border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md p-1.5 rotate-[-6deg]">
            <Crosshair className="h-5 w-5" />
          </span>
          <span className="font-display text-xl tracking-tight">THE SHOOTERS</span>
          <NeoBadge variant="accent" className="hidden sm:inline-flex">Beta</NeoBadge>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 rounded-md font-display text-sm uppercase tracking-wide hover:bg-muted transition-colors"
              activeProps={{ className: "bg-secondary text-secondary-foreground neo-border neo-shadow-sm" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          <ThemeSwitcher />
          <Link to="/profile" className="hidden md:inline-flex">
            <NeoButton size="sm" variant="secondary">Login with Discord</NeoButton>
          </Link>
          <button
            className={cn(
              "md:hidden neo-border neo-shadow-sm neo-press rounded-md h-10 w-10 grid place-items-center transition-colors",
              open ? "bg-primary text-primary-foreground" : "bg-card",
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
      {open && (
        <div className="md:hidden border-t-4 border-border bg-background animate-in slide-in-from-top-2 duration-200">
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
