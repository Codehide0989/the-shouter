import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, type MockEvent } from "@/lib/mock-data";
import { Check, Clock, X } from "lucide-react";

export const Route = createFileRoute("/register/team/$id")({
  loader: ({ params }) => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Team Registration — ${loaderData.event.title}` },
          { name: "description", content: "Register your team." },
          { name: "robots", content: "noindex" },
        ]
      : [{ title: "Team Registration" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-10 text-center">Event not found</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: TeamRegister,
});

function TeamRegister() {
  const { event } = Route.useLoaderData() as { event: MockEvent };
  const size = event.teamSize ?? 4;
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<{ discord: string; status: "leader" | "invited" | "verified" | "pending" }[]>(
    Array.from({ length: size }, (_, i) => (i === 0 ? { discord: "shadow#0001", status: "leader" } : { discord: "", status: "pending" })),
  );

  const verifiedCount = members.filter((m) => m.status === "verified" || m.status === "leader").length;
  const complete = verifiedCount === size;

  const updateMember = (i: number, discord: string) => {
    setMembers((m) => m.map((mem, idx) => (idx === i ? { ...mem, discord, status: mem.status === "leader" ? "leader" : discord ? "invited" : "pending" } : mem)));
  };

  const verify = (i: number) => setMembers((m) => m.map((mem, idx) => (idx === i ? { ...mem, status: "verified" } : mem)));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <NeoBadge variant="accent">Team Registration</NeoBadge>
      <h1 className="text-4xl mt-3">{event.title}</h1>
      <p className="text-muted-foreground mt-1">
        Team size: <b>{size}</b>. Leader adds Discord tags. Each member confirms via bot DM.
      </p>

      <NeoCard className="mt-6">
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest">Team name</span>
          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Ghost Recon"
            className="mt-1 w-full neo-border rounded-md bg-background px-3 py-2 text-sm outline-none"
          />
        </label>

        <div className="mt-6 space-y-3">
          {members.map((m, i) => (
            <div key={i} className="neo-border rounded-md bg-muted p-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full neo-border bg-primary flex items-center justify-center text-primary-foreground font-display">
                {i + 1}
              </div>
              <input
                disabled={i === 0}
                value={m.discord}
                onChange={(e) => updateMember(i, e.target.value)}
                placeholder="discordtag#0000"
                className="flex-1 bg-background neo-border rounded-md px-3 py-2 text-sm outline-none disabled:opacity-70"
              />
              {m.status === "leader" && <NeoBadge variant="secondary">Leader</NeoBadge>}
              {m.status === "invited" && (
                <div className="flex items-center gap-2">
                  <NeoBadge variant="muted"><Clock className="h-3 w-3" /> Invited</NeoBadge>
                  <button onClick={() => verify(i)} className="text-xs underline">simulate</button>
                </div>
              )}
              {m.status === "verified" && <NeoBadge variant="success"><Check className="h-3 w-3" /> Verified</NeoBadge>}
              {m.status === "pending" && <NeoBadge variant="destructive"><X className="h-3 w-3" /> Empty</NeoBadge>}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-display uppercase tracking-widest">
            <span>Team completion</span>
            <span>{verifiedCount} / {size}</span>
          </div>
          <div className="mt-2 h-3 neo-border rounded-full bg-background overflow-hidden">
            <div className="h-full bg-[color:var(--success)] transition-all" style={{ width: `${(verifiedCount / size) * 100}%` }} />
          </div>
        </div>

        {complete ? (
          <Link to="/events/$id/dashboard" params={{ id: event.id }} className="mt-6 block">
            <NeoButton className="w-full">Enter event dashboard</NeoButton>
          </Link>
        ) : (
          <p className="mt-6 text-sm text-muted-foreground">
            Sensitive game details unlock only after all members verify.
          </p>
        )}
      </NeoCard>
    </div>
  );
}
