import { useTheme } from "@/lib/theme";
import { useMemo } from "react";

// Deterministic pseudo-random from index — avoids SSR hydration mismatch.
const rand = (i: number, salt = 0) => {
  const x = Math.sin((i + 1) * 9973 + salt * 131) * 10000;
  return x - Math.floor(x);
};

type Particle = { left: string; delay: string; duration: string; size: string; rotate: string; drift: string };

function useParticles(count: number, opts: { minSize: number; maxSize: number; minDur: number; maxDur: number; salt?: number }) {
  return useMemo<Particle[]>(() => {
    const list: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const r1 = rand(i, opts.salt);
      const r2 = rand(i, (opts.salt ?? 0) + 7);
      const r3 = rand(i, (opts.salt ?? 0) + 13);
      const r4 = rand(i, (opts.salt ?? 0) + 19);
      list.push({
        left: `${(r1 * 100).toFixed(2)}%`,
        delay: `${(r2 * -15).toFixed(2)}s`,
        duration: `${(opts.minDur + r3 * (opts.maxDur - opts.minDur)).toFixed(2)}s`,
        size: `${(opts.minSize + r4 * (opts.maxSize - opts.minSize)).toFixed(1)}px`,
        rotate: `${Math.floor(r1 * 360)}deg`,
        drift: `${(r3 * 60 - 30).toFixed(0)}px`,
      });
    }
    return list;
  }, [count, opts.minSize, opts.maxSize, opts.minDur, opts.maxDur, opts.salt]);
}

export function SeasonalEffects() {
  const { theme } = useTheme();

  const petals = useParticles(24, { minSize: 14, maxSize: 28, minDur: 9, maxDur: 18, salt: 1 });
  const leaves = useParticles(18, { minSize: 16, maxSize: 30, minDur: 10, maxDur: 20, salt: 2 });
  const pumpkins = useParticles(10, { minSize: 22, maxSize: 40, minDur: 12, maxDur: 22, salt: 3 });
  const bats = useParticles(8, { minSize: 18, maxSize: 30, minDur: 14, maxDur: 26, salt: 4 });
  const flakes = useParticles(40, { minSize: 8, maxSize: 22, minDur: 7, maxDur: 16, salt: 5 });

  if (theme === "spring") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {petals.map((p, i) => (
          <span
            key={`petal-${i}`}
            className="absolute -top-10 select-none animate-season-fall will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
              "--spin": p.rotate,
            }}
          >
            🌸
          </span>
        ))}
        {leaves.map((p, i) => (
          <span
            key={`leaf-${i}`}
            className="absolute -top-10 select-none animate-season-fall will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
              "--spin": p.rotate,
            }}
          >
            🍃
          </span>
        ))}
      </div>
    );
  }

  if (theme === "halloween") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Blood-moon glow */}
        <div
          className="absolute top-6 right-8 h-40 w-40 rounded-full opacity-40 blur-2xl"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.24 45) 0%, transparent 70%)" }}
        />
        {pumpkins.map((p, i) => (
          <span
            key={`pumpkin-${i}`}
            className="absolute -top-10 select-none animate-season-fall will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
              "--spin": p.rotate,
              filter: "drop-shadow(0 0 8px oklch(0.72 0.24 45 / 0.6))",
            }}
          >
            🎃
          </span>
        ))}
        {bats.map((p, i) => (
          <span
            key={`bat-${i}`}
            className="absolute -top-10 select-none animate-season-fall will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
              "--spin": p.rotate,
            }}
          >
            🦇
          </span>
        ))}
      </div>
    );
  }

  if (theme === "winter") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {flakes.map((p, i) => (
          <span
            key={`flake-${i}`}
            className="absolute -top-10 select-none text-white animate-season-fall will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              opacity: 0.85,
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
              "--spin": p.rotate,
              textShadow: "0 0 6px rgba(180,220,255,0.9)",
            }}
          >
            ❄
          </span>
        ))}
      </div>
    );
  }

  if (theme === "summer") {
    // Beach vibes — palms, watermelon, beach ball, waves, burning ice cube
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Palm silhouettes bottom corners */}
        <span className="absolute -bottom-4 -left-2 text-7xl md:text-8xl select-none opacity-90 rotate-[-12deg]"
          style={{ filter: "drop-shadow(3px 3px 0 var(--color-border))" }}
        >
          🌴
        </span>
        <span className="absolute -bottom-6 -right-2 text-7xl md:text-8xl select-none opacity-90 rotate-[14deg]"
          style={{ filter: "drop-shadow(-3px 3px 0 var(--color-border))" }}
        >
          🌴
        </span>

        {/* Watermelon slice top-left */}
        <span className="absolute top-8 left-6 text-5xl md:text-6xl select-none rotate-[-15deg] animate-ice-bob"
          style={{ filter: "drop-shadow(3px 3px 0 var(--color-border))" }}
        >
          🍉
        </span>

        {/* Beach ball top-right */}
        <span className="absolute top-24 right-8 text-5xl md:text-6xl select-none animate-ice-bob"
          style={{ filter: "drop-shadow(3px 3px 0 var(--color-border))", animationDelay: "-1.5s" }}
        >
          🏐
        </span>

        {/* Sunglasses sticker mid-left */}
        <span className="absolute top-1/3 left-4 text-4xl md:text-5xl select-none rotate-[8deg] opacity-90"
          style={{ filter: "drop-shadow(2px 2px 0 var(--color-border))" }}
        >
          🕶️
        </span>

        {/* Wave strip bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 opacity-60"
          style={{
            background:
              "repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-secondary) 50%, transparent) 0 24px, transparent 24px 48px), linear-gradient(0deg, color-mix(in oklab, var(--color-accent) 40%, transparent), transparent)",
          }}
        />

        {/* Heat haze */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 opacity-30 animate-heat-haze"
          style={{
            background:
              "linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 40%, transparent), transparent)",
          }}
        />

        {/* Burning ice cube sticker */}
        <div className="absolute right-4 bottom-24 md:right-10 md:bottom-32 select-none">
          <div className="relative">
            <span className="absolute -inset-6 rounded-full blur-xl opacity-70 animate-ice-flame"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.24 40) 0%, transparent 60%)" }}
            />
            <span className="relative block text-6xl md:text-7xl animate-ice-bob" style={{ filter: "drop-shadow(0 4px 0 var(--color-border))" }}>
              🧊
            </span>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl md:text-6xl animate-ice-flame">
              🔥
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
