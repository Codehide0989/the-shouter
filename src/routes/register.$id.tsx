import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, type MockEvent } from "@/lib/mock-data";
import { EVENT_IMAGE } from "@/lib/event-images";
import { Check, ShieldCheck, ClipboardList, PartyPopper } from "lucide-react";
import verifyImg from "@/assets/register-verify.jpg";
import detailsImg from "@/assets/register-details.jpg";
import successImg from "@/assets/register-success.jpg";

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

const STEPS = [
  { n: 1, label: "Verify", icon: ShieldCheck },
  { n: 2, label: "Details", icon: ClipboardList },
  { n: 3, label: "Locked in", icon: PartyPopper },
];

function Register() {
  const { event } = Route.useLoaderData() as { event: MockEvent };
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Event mini-banner */}
      <div className={`relative overflow-hidden neo-border neo-shadow rounded-lg bg-gradient-to-br ${event.cover} p-5`}>
        <img
          src={EVENT_IMAGE[event.type]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative">
          <NeoBadge variant="accent">Registration</NeoBadge>
          <h1 className="text-3xl md:text-4xl mt-2 text-white drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
            {event.title}
          </h1>
          <p className="text-white/90 text-sm mt-1">Complete these steps to lock your spot.</p>
        </div>
      </div>

      {/* Step indicator */}
      <div className="mt-6 grid grid-cols-3 gap-2">
        {STEPS.map(({ n, label, icon: Icon }) => {
          const done = step >= n;
          return (
            <div
              key={n}
              className={`neo-border rounded-md p-3 text-center transition-all ${
                done ? "bg-primary text-primary-foreground neo-shadow-sm" : "bg-muted text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5 mx-auto" />
              <div className="mt-1 font-display uppercase text-xs tracking-widest">
                {n}. {label}
              </div>
            </div>
          );
        })}
      </div>

      <NeoCard className="mt-6">
        {step === 1 && (
          <div className="grid md:grid-cols-[1fr_180px] gap-6 items-center">
            <div>
              <h2 className="text-2xl">Verify Discord</h2>
              <p className="text-sm text-muted-foreground mt-2">
                We'll check you're in <b className="text-foreground">{event.server}</b> before locking you in.
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
            <img
              src={verifyImg}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              className="h-40 w-40 md:h-44 md:w-44 mx-auto object-contain drop-shadow-[4px_4px_0_var(--color-border)]"
            />
          </div>
        )}
        {step === 2 && (
          <div className="grid md:grid-cols-[1fr_180px] gap-6 items-start">
            <div>
              <h2 className="text-2xl">Event details</h2>
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
            <img
              src={detailsImg}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              className="h-40 w-40 md:h-44 md:w-44 mx-auto object-contain drop-shadow-[4px_4px_0_var(--color-border)]"
            />
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            <img
              src={successImg}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              className="h-48 w-48 mx-auto object-contain drop-shadow-[6px_6px_0_var(--color-border)]"
            />
            <div className="mx-auto mt-2 neo-border neo-shadow bg-[color:var(--success)] text-black rounded-full h-14 w-14 flex items-center justify-center">
              <Check className="h-7 w-7" />
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
