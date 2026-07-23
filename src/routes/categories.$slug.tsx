import { createFileRoute, notFound } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoBadge, NeoCard, NeoButton } from "@/components/neo";

const CATS: Record<string,{label:string;tag:string;hero:string;group:string}> = {
  "photography": { label:"Photography Contests", tag:"Capture the shot, take the crown.", hero:"cover-picbattle", group:"Media" },
  "video": { label:"Video Contests", tag:"60s reels, cinematic edits, montage madness.", hero:"cover-artwork", group:"Media" },
  "minecraft": { label:"Minecraft Events", tag:"Build battles, PvP arenas, and speedruns.", hero:"cover-community", group:"Games" },
  "logo": { label:"Logo Design Contests", tag:"Design a mark, win the crown.", hero:"cover-artwork", group:"Design" },
  "banner": { label:"Banner Design Contests", tag:"Server banners & profile art.", hero:"cover-artwork", group:"Design" },
  "meme": { label:"Meme Battles", tag:"The funniest post wins the internet.", hero:"cover-community", group:"Community" },
  "tournament": { label:"Game Tournaments", tag:"BGMI, Free Fire, Valorant and more.", hero:"cover-tournament", group:"Games" },
  "community": { label:"Community Events", tag:"Movie nights, hangouts, watch parties.", hero:"cover-community", group:"Community" },
  "voice": { label:"Voice Events", tag:"Karaoke, impressions, live podcasts.", hero:"notice-reaction", group:"Voice" },
  "movie-night": { label:"Movie Nights", tag:"Sync watch with the whole server.", hero:"cover-community", group:"Community" },
  "music": { label:"Music Nights", tag:"DJ sessions and listening parties.", hero:"notice-reaction", group:"Voice" },
  "streaming": { label:"Streaming Events", tag:"Simultaneous streams and raids.", hero:"notice-hero", group:"Live" },
  "quiz": { label:"Quiz & Trivia", tag:"Fastest fingers first.", hero:"cover-community", group:"Community" },
  "custom": { label:"Custom Events", tag:"Anything the server dreams up.", hero:"dash-overview", group:"Community" }
};

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const c = CATS[params.slug];
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.label + " — The Shouter" },
          { name: "description", content: loaderData.label + " on The Shouter — join, host, and win." },
          { property: "og:title", content: loaderData.label + " — The Shouter" },
          { property: "og:description", content: loaderData.label + " on The Shouter." },
        ]
      : [{ title: "Category — The Shouter" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="p-10 text-center"><EmptyState title="Category not found" hint="Head back to categories to pick a real one." /></div>
  ),
  component: Page,
});

function Page() {
  const c = Route.useLoaderData();
  return (
    <DashboardPage
      eyebrow={c.group}
      title={c.label}
      tagline={"Every " + c.label.toLowerCase() + " on The Shouter. Join, host, or spectate."}
      heroKey={c.hero}
      actions={<><NeoButton variant="primary">Host an event</NeoButton><NeoBadge variant="muted">{c.tag}</NeoBadge></>}
    >
      <StatGrid items={[{label:"Live now",value:2},{label:"Upcoming",value:6},{label:"This month",value:14},{label:"Total hosted",value:"120+"}]} />
      <ListPanel title="Featured events" items={[
        {id:"1",primary:c.label+" Weekly",secondary:"Every Friday · Shouters HQ",meta:"Live",tag:"Hot"},
        {id:"2",primary:c.label+" Championship",secondary:"Season finale bracket",meta:"Sat",tag:"Bracket"},
        {id:"3",primary:c.label+" Rookie Cup",secondary:"Newbies-only",meta:"Sun",tag:"Open"},
      ]} />
      <NeoCard className="p-5">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">How it works</div>
        <ol className="list-decimal list-inside text-sm space-y-1">
          <li>Pick an event from the list above.</li>
          <li>Register solo or with a squad.</li>
          <li>Show up on Discord — the bot handles the rest.</li>
        </ol>
      </NeoCard>
    </DashboardPage>
  );
}
