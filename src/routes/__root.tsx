import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SeasonalEffects } from "@/components/seasonal-effects";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/lib/theme";
import notFoundHero from "@/assets/notfound-hero.jpg";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="grid max-w-4xl gap-8 md:grid-cols-2 md:items-center">
        <div className="neo-border neo-shadow rotate-[-2deg] overflow-hidden rounded-2xl bg-card">
          <img
            src={notFoundHero}
            alt="Broken target with off-course arrow"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-left">
          <div className="inline-block neo-border neo-shadow-sm rounded-full bg-accent px-3 py-1 text-xs font-display uppercase tracking-widest">
            Error 404
          </div>
          <h1 className="mt-4 text-6xl md:text-7xl font-display leading-none">Off Target</h1>
          <p className="mt-4 text-base text-muted-foreground">
            The page you were aiming for isn't here. Maybe it moved, maybe it never existed.
            Reload your quiver and pick another route.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              className="neo-border neo-shadow-sm inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-display uppercase tracking-wide text-primary-foreground hover:translate-y-[1px] transition"
            >
              Back to base
            </Link>
            <Link
              to="/explore"
              className="neo-border neo-shadow-sm inline-flex items-center justify-center rounded-md bg-card px-5 py-2.5 text-sm font-display uppercase tracking-wide"
            >
              Explore events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">Misfire</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something jammed. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="neo-border neo-shadow-sm inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-display uppercase text-primary-foreground"
          >
            Reload
          </button>
          <a
            href="/"
            className="neo-border neo-shadow-sm inline-flex items-center justify-center rounded-md bg-card px-4 py-2 text-sm font-display uppercase"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Shouter — Discord Event Platform" },
      {
        name: "description",
        content:
          "Run tournaments, artwork battles, and community events straight from Discord. Registration, teams, and live sync in one bold platform.",
      },
      { property: "og:title", content: "The Shouter — Discord Event Platform" },
      {
        property: "og:description",
        content: "The neobrutalist Discord event hub for tournaments, pic battles, and artwork wars.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Color+Emoji&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="theme-summer">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ScrollToTop />
        <div className="relative min-h-screen flex flex-col bg-noise">
          <SeasonalEffects />
          <div className="theme-decor" aria-hidden />
          <div className="relative z-10 flex flex-col min-h-screen">

            <Nav />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
