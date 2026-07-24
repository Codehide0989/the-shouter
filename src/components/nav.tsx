import { Link } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { NeoButton, NeoBadge } from "./neo";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo.png";
import imgExplore from "@/assets/cover-tournament.jpg";
import imgRules from "@/assets/rules-hero.jpg";
import imgBot from "@/assets/bot-mascot.jpg";
import imgDash from "@/assets/dashboard-hero.jpg";
import imgAdmin from "@/assets/admin-hero.jpg";
import imgTeams from "@/assets/dash-team.jpg";
import imgTourney from "@/assets/dash-tournament.jpg";
import imgGallery from "@/assets/cover-artwork.jpg";
import imgLeader from "@/assets/stat-wins.jpg";
import imgNotif from "@/assets/notice-hero.jpg";
import imgProfile from "@/assets/avatar-shadow.jpg";
import imgSettings from "@/assets/settings-hero.jpg";

const LINKS = [
  { to: "/explore", label: "Explore", img: imgExplore },
  { to: "/rules", label: "Rules", img: imgRules },
  { to: "/bot-status", label: "Bot", img: imgBot },
  { to: "/dashboard", label: "Dashboard", img: imgDash },
  { to: "/admin", label: "Admin", img: imgAdmin },
];

const MOBILE_EXTRA = [
  { to: "/tournaments", label: "Tournaments", img: imgTourney },
  { to: "/teams", label: "Teams", img: imgTeams },
  { to: "/gallery", label: "Gallery", img: imgGallery },
  { to: "/leaderboard", label: "Leaderboard", img: imgLeader },
  { to: "/notifications", label: "Notifications", img: imgNotif },
  { to: "/profile", label: "Profile", img: imgProfile },
  { to: "/settings", label: "Settings", img: imgSettings },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-2 sm:pt-3 px-2 sm:px-4">
      <div
        className={cn(
          "mx-auto max-w-7xl neo-border rounded-2xl transition-all duration-300",
          "supports-[backdrop-filter]:bg-card/70 bg-card/95 backdrop-blur-xl",
          scrolled ? "neo-shadow-lg translate-y-0" : "neo-shadow-sm",
        )}
      >
        <div className="px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <span className="neo-border neo-shadow-sm bg-background rounded-lg p-1 rotate-[-4deg] group-hover:rotate-[4deg] transition-transform duration-300">
              <img src={logoUrl} alt="The Shouter" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7 block" />
            </span>
            <span className="font-display text-base sm:text-lg tracking-tight leading-none">
              The<span className="ml-1 text-primary">Shouter</span>
            </span>
            <NeoBadge variant="accent" className="hidden lg:inline-flex">Beta</NeoBadge>
          </Link>

          {/* Center capsule nav */}
          <nav className="ml-auto hidden md:flex items-center gap-0.5 neo-border bg-background/80 rounded-full p-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3.5 py-1.5 rounded-full font-display text-[11px] uppercase tracking-widest hover:bg-muted transition-colors"
                activeProps={{
                  className: "bg-primary text-primary-foreground neo-border shadow-[2px_2px_0_0_var(--color-border)]",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="ml-auto md:ml-0 flex items-center gap-1.5 sm:gap-2">
            <Link
              to="/notifications"
              aria-label="Notifications"
              className="relative hidden sm:grid neo-border neo-shadow-sm neo-press bg-background rounded-lg h-9 w-9 place-items-center hover:-translate-y-0.5 transition-transform"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive neo-border animate-pulse" />
            </Link>
            <ThemeSwitcher />
            <Link to="/profile" className="hidden md:inline-flex">
              <NeoButton size="sm" variant="primary">Login</NeoButton>
            </Link>
            <button
              className={cn(
                "md:hidden neo-border neo-shadow-sm neo-press rounded-lg h-9 w-9 grid place-items-center transition-colors",
                open ? "bg-primary text-primary-foreground" : "bg-background",
              )}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <span className={cn("absolute left-0 h-[3px] w-5 bg-current rounded-sm transition-all duration-300", open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-5 bg-current rounded-sm transition-all duration-200", open ? "opacity-0" : "opacity-100")} />
                <span className={cn("absolute left-0 h-[3px] w-5 bg-current rounded-sm transition-all duration-300", open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t-[3px] border-border animate-in slide-in-from-top-2 duration-200 rounded-b-2xl overflow-hidden">
            <nav className="px-3 py-3 grid grid-cols-2 gap-2">
              {[...LINKS, ...MOBILE_EXTRA].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="group relative overflow-hidden neo-border neo-shadow-sm neo-press-hover rounded-lg bg-background aspect-[5/3]"
                  activeProps={{ className: "ring-2 ring-primary" }}
                >
                  <img
                    src={l.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 right-2 font-display text-xs uppercase tracking-wide leading-tight">
                    {l.label}
                  </span>
                </Link>
              ))}
              <Link to="/profile" onClick={() => setOpen(false)} className="col-span-2">
                <NeoButton size="sm" variant="primary" className="w-full mt-1">
                  Login with Discord
                </NeoButton>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
