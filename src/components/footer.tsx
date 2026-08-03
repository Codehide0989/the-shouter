import { Link } from "@tanstack/react-router";
import { Crosshair, Twitter, Instagram, Github, MessageCircle } from "lucide-react";

const footerLinks = {
  platform: {
    label: "Platform",
    links: [
      { to: "/explore", label: "Explore" },
      { to: "/tournaments", label: "Tournaments" },
      { to: "/teams", label: "Teams" },
      { to: "/leaderboard", label: "Leaderboard" },
      { to: "/gallery", label: "Gallery" },
    ],
  },
  account: {
    label: "Account",
    links: [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/profile", label: "Profile" },
      { to: "/achievements", label: "Achievements" },
      { to: "/premium", label: "Premium" },
    ],
  },
  resources: {
    label: "Resources",
    links: [
      { to: "/faq", label: "FAQ" },
      { to: "/help", label: "Help Center" },
      { to: "/support", label: "Support" },
      { to: "/docs", label: "Docs" },
      { to: "/status", label: "Status" },
    ],
  },
  legal: {
    label: "Legal",
    links: [
      { to: "/terms", label: "Terms" },
      { to: "/privacy", label: "Privacy" },
      { to: "/admin", label: "Admin" },
    ],
  },
};

const socials = [
  { icon: MessageCircle, label: "Discord", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "Github", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-16">
      {/* Wavy top edge */}
      <div className="relative h-8 -mb-px">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,16 Q75,2 150,16 T300,16 T450,16 T600,16 T750,16 T900,16 T1050,16 T1200,16 V32 H0 Z"
            fill="var(--color-primary)"
            stroke="var(--color-border)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="border-t-4 border-border bg-primary">
        <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-5 sm:pt-8 sm:pb-6">
          {/* Sticker chips */}
          <span className="absolute -top-5 left-4 sm:left-10 -rotate-6 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-2.5 py-1 font-display text-[10px] uppercase">
            Join the Squad
          </span>
          <span className="absolute -top-5 right-4 sm:right-12 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-11 w-11 grid place-items-center font-display text-[10px] uppercase text-center leading-none">
            New
            <br />Drop
          </span>

          {/* Top row: brand + link grid */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.25fr_2fr]">
            {/* Brand column */}
            <div className="text-primary-foreground">
              <div className="flex items-center gap-2">
                <span className="neo-border neo-shadow-sm bg-card text-card-foreground rounded-md p-1.5">
                  <Crosshair className="h-4 w-4" />
                </span>
                <span className="font-display text-base sm:text-lg">The Shouter</span>
              </div>
              <p className="mt-2 max-w-xs text-xs leading-relaxed opacity-90">
                Discord-first event platform for tournaments, artwork, and community battles.
              </p>
              <div className="mt-3 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="neo-border neo-shadow-sm neo-press neo-press-hover bg-card text-card-foreground rounded-md h-8 w-8 grid place-items-center"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 text-primary-foreground">
              {Object.values(footerLinks).map((section) => (
                <div key={section.label}>
                  <p className="font-display text-[11px] uppercase tracking-wider mb-2 opacity-80">
                    {section.label}
                  </p>
                  <ul className="space-y-1.5">
                    {section.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-xs opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Wordmark strip */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t-4 border-border/30 pt-4">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none text-primary-foreground tracking-tighter">
              shouters<span className="text-accent">.</span>
            </h2>
            <p className="text-[10px] sm:text-xs uppercase font-display tracking-widest text-primary-foreground/80">
              © 2026 The Shouter — Locked & Loaded
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

