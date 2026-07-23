import { createFileRoute, notFound } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, MOCK_GALLERY, type MockEvent } from "@/lib/mock-data";
import { Heart, Flame, Star } from "lucide-react";

export const Route = createFileRoute("/events/$id/gallery")({
  loader: ({ params }) => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Gallery — ${loaderData.event.title}` },
          { name: "description", content: `Live submissions and votes for ${loaderData.event.title}.` },
        ]
      : [{ title: "Gallery" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-10 text-center">Event not found</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: Gallery,
});

function Gallery() {
  const { event } = Route.useLoaderData() as { event: MockEvent };
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <NeoBadge variant="accent">Gallery</NeoBadge>
      <h1 className="text-4xl mt-3">{event.title}</h1>
      <p className="text-muted-foreground mt-2">Votes and reactions sync with Discord in real time.</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {MOCK_GALLERY.map((g) => (
          <NeoCard key={g.id} className="p-0 overflow-hidden">
            <div className={`h-48 bg-gradient-to-br ${g.gradient} flex items-end p-4`}>
              <div className="text-white drop-shadow-lg">
                <div className="font-display text-2xl">{g.title}</div>
                <div className="text-xs">by {g.author}</div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs font-bold">
                <span className="flex items-center gap-1"><Flame className="h-3 w-3" />{g.reactions}</span>
                <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{Math.floor(g.reactions / 2)}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3" />{Math.floor(g.reactions / 3)}</span>
              </div>
              <NeoButton size="sm" variant="primary">Vote</NeoButton>
            </div>
          </NeoCard>
        ))}
      </div>
    </div>
  );
}
