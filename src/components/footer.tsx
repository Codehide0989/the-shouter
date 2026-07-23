import { Link } from "@tanstack/react-router";
import { Crosshair, Twitter, Instagram, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Wavy top edge */}
      <div className="relative h-10 -mb-px">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,20 Q75,0 150,20 T300,20 T450,20 T600,20 T750,20 T900,20 T1050,20 T1200,20 V40 H0 Z"
            fill="var(--color-primary)"
            stroke="var(--color-border)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="border-t-4 border-border bg-primary">
        <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-6">
          {/* Sticker chips */}
          <span className="absolute -top-6 left-4 md:left-16 -rotate-6 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-3 py-1.5 font-display text-xs uppercase">
            Join the Squad
          </span>
          <span className="absolute -top-6 right-4 md:right-24 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-14 w-14 grid place-items-center font-display text-[11px] uppercase text-center leading-none">
            New
            <br />Drop
          </span>

          {/* Links row */}
          <div className="grid gap-8 md:grid-cols-4 text-primary-foreground">
            <div>
              <div className="flex items-center gap-2">
                <span className="neo-border neo-shadow-sm bg-card text-card-foreground rounded-md p-1.5">
                  <Crosshair className="h-4 w-4" />
                </span>
                <span className="font-display text-lg">The Shooter</span>
              </div>
              <p className="mt-3 text-sm opacity-90">
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

          {/* Big wordmark + socials */}
          <div className="mt-10 flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display text-6xl sm:text-7xl md:text-9xl leading-none text-primary-foreground tracking-tighter">
              shooters<span className="text-accent">.</span>
            </h2>
            <div className="flex gap-2">
              {[
                { icon: MessageCircle, label: "Discord" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "Github" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="neo-border neo-shadow-sm neo-press neo-press-hover bg-card text-card-foreground rounded-md h-10 w-10 grid place-items-center"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-4 border-border py-4 text-center text-xs uppercase font-display tracking-widest text-primary-foreground/80">
          © 2026 The Shooters — Locked & Loaded
        </div>
      </div>
    </footer>
  );
}
