import { Link } from "@tanstack/react-router";
import { Crosshair } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-card mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md p-1.5">
              <Crosshair className="h-4 w-4" />
            </span>
            <span className="font-display text-lg">THE SHOOTERS</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Discord-first event platform for tournaments, artwork, and community battles.
          </p>
        </div>
        <div>
          <p className="font-display text-sm uppercase mb-3">Platform</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/explore" className="hover:underline">Explore events</Link></li>
            <li><Link to="/rules" className="hover:underline">Rules</Link></li>
            <li><Link to="/bot-status" className="hover:underline">Bot status</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase mb-3">Account</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/settings" className="hover:underline">Settings</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase mb-3">Admin</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/admin" className="hover:underline">Admin dashboard</Link></li>
            <li><Link to="/notifications" className="hover:underline">Notifications</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t-4 border-border py-4 text-center text-xs uppercase font-display tracking-widest text-muted-foreground">
        © 2026 The Shooters — Locked & Loaded
      </div>
    </footer>
  );
}
