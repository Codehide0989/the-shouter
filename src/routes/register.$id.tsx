import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, type MockEvent } from "@/lib/mock-data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/register/$id")({
  loader: ({ params }) => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Register — ${loaderData.event.title}` },
          { name: "description", content: `Register for ${loaderData.event.title} via Discord.` },
          { name: "robots", content: "noindex" },
        ]
      : [{ title: "Register" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-10 text-center">Event not found</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: Register,
});

function Register() {
  const { event } = Route.useLoaderData() as { event: MockEvent };
  const [step, setStep] = useState(1);
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <NeoBadge variant="accent">Registration</NeoBadge>
      <h1 className="text-4xl mt-3">{event.title}</h1>
      <p className="text-muted-foreground mt-1">Complete these steps to lock your spot.</p>

      <div className="mt-6 flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 neo-border rounded-full ${
              s <= step ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      <NeoCard className="mt-6">
        {step === 1 && (
          <div>
            <h2 className="text-2xl">1. Verify Discord</h2>
            <p className="text-sm text-muted-foreground mt-2">
              We'll check you're in <b>{event.server}</b> before locking you in.
            </p>
            <div className="mt-4 neo-border rounded-md bg-muted p-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary neo-border" />
                <div>
                  <div className="font-bold">shadow#0001</div>
                  <div className="text-xs text-muted-foreground">Member since 2023 · Verified ✅</div>
                </div>
              </div>
            </div>
            <NeoButton className="mt-5 w-full" onClick={() => setStep(2)}>Continue</NeoButton>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl">2. Event details</h2>
            <p className="text-sm text-muted-foreground mt-2">Optional info the organizer requested.</p>
            <div className="mt-4 space-y-3">
              <Field label="Display name" placeholder="How you want to appear" />
              <Field label="Region" placeholder="e.g. IN, EU, NA" />
              {event.type === "artwork" && <Field label="Submission title" placeholder="Optional" />}
            </div>
            <div className="mt-5 flex gap-2">
              <NeoButton variant="ghost" className="flex-1" onClick={() => setStep(1)}>Back</NeoButton>
              <NeoButton className="flex-1" onClick={() => setStep(3)}>Continue</NeoButton>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            <div className="mx-auto neo-border neo-shadow bg-[color:var(--success)] text-black rounded-full h-16 w-16 flex items-center justify-center">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="text-3xl mt-4">You're in!</h2>
            <p className="text-muted-foreground mt-2">
              A confirmation card was posted in the event channel. Your dashboard is now unlocked.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Link to="/events/$id/dashboard" params={{ id: event.id }}>
                <NeoButton className="w-full">Go to Event Dashboard</NeoButton>
              </Link>
              <Link to="/dashboard">
                <NeoButton variant="ghost" className="w-full">My dashboard</NeoButton>
              </Link>
            </div>
          </div>
        )}
      </NeoCard>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-display text-xs uppercase tracking-widest">{label}</span>
      <input
        className="mt-1 w-full neo-border rounded-md bg-background px-3 py-2 text-sm outline-none focus:neo-shadow-sm"
        placeholder={placeholder}
      />
    </label>
  );
}
