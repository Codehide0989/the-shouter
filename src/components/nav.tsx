import { Link } from "@tanstack/react-router";
import { Menu, X, Crosshair } from "lucide-react";
import { useState } from "react";
import { NeoButton, NeoBadge } from "./neo";
import { ThemeSwitcher } from "./theme-switcher";

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
        <Link to="/" className="flex items-center gap-2">
          <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md p-1.5">
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
              className="px-3 py-1.5 rounded-md font-display text-sm uppercase tracking-wide hover:bg-muted"
              activeProps={{ className: "bg-secondary text-secondary-foreground neo-border" }}
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
            className="md:hidden neo-border neo-shadow-sm bg-card rounded-md p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t-4 border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md font-display text-sm uppercase tracking-wide hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/profile" onClick={() => setOpen(false)}>
              <NeoButton size="sm" variant="secondary" className="w-full mt-2">
                Login with Discord
              </NeoButton>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
