import { useTheme } from "@/lib/theme";
import coverTournament from "@/assets/cover-tournament.jpg";
import coverArtwork from "@/assets/cover-artwork.jpg";
import coverPicbattle from "@/assets/cover-picbattle.jpg";
import coverCommunity from "@/assets/cover-community.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import heroSquad from "@/assets/hero-squad.jpg";

const IMAGES = [
  coverTournament,
  coverArtwork,
  coverPicbattle,
  coverCommunity,
  heroTrophy,
  heroSquad,
];

// Fixed, pointer-events-none, sits behind theme-decor but above bg color.
// Two horizontal rows scrolling in opposite directions + one vertical column.
export function SummerMarquee() {
  const { theme } = useTheme();
  if (theme !== "summer") return null;

  const row = [...IMAGES, ...IMAGES];

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.18] mix-blend-luminosity"
    >
      {/* Row 1 - top, drifting left */}
      <div className="absolute top-[8%] left-0 right-0 flex gap-6 animate-summer-marquee-left will-change-transform">
        {row.map((src, i) => (
          <img
            key={`t-${i}`}
            src={src}
            alt=""
            className="h-40 w-40 md:h-56 md:w-56 shrink-0 rounded-md neo-border object-cover -rotate-3"
          />
        ))}
      </div>

      {/* Row 2 - middle, drifting right */}
      <div className="absolute top-[42%] left-0 right-0 flex gap-8 animate-summer-marquee-right will-change-transform">
        {row.map((src, i) => (
          <img
            key={`m-${i}`}
            src={src}
            alt=""
            className="h-48 w-48 md:h-64 md:w-64 shrink-0 rounded-md neo-border object-cover rotate-2"
          />
        ))}
      </div>

      {/* Row 3 - bottom, drifting left slower */}
      <div className="absolute top-[74%] left-0 right-0 flex gap-6 animate-summer-marquee-slow will-change-transform">
        {row.map((src, i) => (
          <img
            key={`b-${i}`}
            src={src}
            alt=""
            className="h-36 w-36 md:h-52 md:w-52 shrink-0 rounded-md neo-border object-cover -rotate-6"
          />
        ))}
      </div>

      {/* Sun glow overlay to keep content readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 0%, color-mix(in oklab, var(--color-background) 55%, transparent) 55%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
