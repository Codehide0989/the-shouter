import { Link } from "@tanstack/react-router";
import { Users, Trophy, Radio } from "lucide-react";
import { NeoBadge, NeoButton } from "./neo";
import { TYPE_LABEL, STATUS_LABEL, type MockEvent } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: MockEvent }) {
  return (
    <div className="neo-border neo-shadow neo-press neo-press-hover bg-card rounded-md overflow-hidden flex flex-col">
      <div className={cn("h-36 bg-gradient-to-br relative", event.cover)}>
        <div className="absolute top-3 left-3 flex gap-2">
          <NeoBadge variant="secondary">{TYPE_LABEL[event.type]}</NeoBadge>
          {event.status === "live" && (
            <NeoBadge variant="destructive" className="animate-pulse">
              <Radio className="h-3 w-3" /> Live
            </NeoBadge>
          )}
          {event.status === "upcoming" && <NeoBadge variant="muted">{STATUS_LABEL[event.status]}</NeoBadge>}
          {event.status === "ended" && <NeoBadge variant="muted">Ended</NeoBadge>}
        </div>
        {event.game && (
          <div className="absolute bottom-3 right-3">
            <NeoBadge variant="accent">{event.game}</NeoBadge>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <h3 className="text-xl leading-tight">{event.title}</h3>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
            {event.server}
          </p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{event.description}</p>
        <div className="flex items-center gap-4 text-xs font-bold">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {event.registered}/{event.capacity}
          </span>
          <span className="flex items-center gap-1">
            <Trophy className="h-3.5 w-3.5" />
            {event.prize}
          </span>
        </div>
        <Link to="/events/$id" params={{ id: event.id }} className="mt-1">
          <NeoButton variant="primary" size="sm" className="w-full">
            View Event
          </NeoButton>
        </Link>
      </div>
    </div>
  );
}
