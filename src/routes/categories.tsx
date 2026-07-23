import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/dashboard-page";
import { Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Event Categories — The Shouter" },
      { name: "description", content: "14 categories — from BGMI brackets to Minecraft builds and meme wars." },
      { property: "og:title", content: "Event Categories — The Shouter" },
      { property: "og:description", content: "14 categories — from BGMI brackets to Minecraft builds and meme wars." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Explore"
      title="Event Categories"
      tagline="14 categories — from BGMI brackets to Minecraft builds and meme wars."
      heroKey="cover-community"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[{slug:"photography",label:"Photography Contests",tag:"Capture the shot, take the crown."},{slug:"video",label:"Video Contests",tag:"60s reels, cinematic edits, montage madness."},{slug:"minecraft",label:"Minecraft Events",tag:"Build battles, PvP arenas, and speedruns."},{slug:"logo",label:"Logo Design Contests",tag:"Design a mark, win the crown."},{slug:"banner",label:"Banner Design Contests",tag:"Server banners & profile art."},{slug:"meme",label:"Meme Battles",tag:"The funniest post wins the internet."},{slug:"tournament",label:"Game Tournaments",tag:"BGMI, Free Fire, Valorant and more."},{slug:"community",label:"Community Events",tag:"Movie nights, hangouts, watch parties."},{slug:"voice",label:"Voice Events",tag:"Karaoke, impressions, live podcasts."},{slug:"movie-night",label:"Movie Nights",tag:"Sync watch with the whole server."},{slug:"music",label:"Music Nights",tag:"DJ sessions and listening parties."},{slug:"streaming",label:"Streaming Events",tag:"Simultaneous streams and raids."},{slug:"quiz",label:"Quiz & Trivia",tag:"Fastest fingers first."},{slug:"custom",label:"Custom Events",tag:"Anything the server dreams up."}].map((c) => (
          <Link key={c.slug} to={"/categories/$slug"} params={{slug:c.slug}}>
            <NeoCard className="p-5 hover:-translate-y-1 transition-transform h-full">
              <NeoBadge variant="accent">{c.tag}</NeoBadge>
              <div className="font-display text-xl mt-2">{c.label}</div>
              <div className="text-xs text-muted-foreground mt-2">Browse events →</div>
            </NeoCard>
          </Link>
        ))}
      </div>
    </DashboardPage>
  );
}
