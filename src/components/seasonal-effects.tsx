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
  const palms = useParticles(10, { minSize: 20, maxSize: 34, minDur: 14, maxDur: 24, salt: 6 });
  const tropicals = useParticles(14, { minSize: 16, maxSize: 26, minDur: 12, maxDur: 22, salt: 7 });
  const bubbles = useParticles(18, { minSize: 8, maxSize: 20, minDur: 10, maxDur: 20, salt: 8 });
  const butterflies = useParticles(6, { minSize: 18, maxSize: 26, minDur: 16, maxDur: 26, salt: 9 });
  const sparkles = useParticles(30, { minSize: 4, maxSize: 10, minDur: 6, maxDur: 14, salt: 10 });
  const cyberShapes = useParticles(14, { minSize: 22, maxSize: 44, minDur: 10, maxDur: 20, salt: 11 });
  const cyberDots = useParticles(40, { minSize: 3, maxSize: 8, minDur: 5, maxDur: 12, salt: 12 });
  const cyberStreaks = useParticles(6, { minSize: 2, maxSize: 4, minDur: 5, maxDur: 11, salt: 13 });

  if (theme === "spring") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {petals.map((p, i) => (
          <span
            key={`petal-${i}`}
            className="emoji-glyph absolute -top-10 select-none animate-season-fall will-change-transform"
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
            className="emoji-glyph absolute -top-10 select-none animate-season-fall will-change-transform"
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
            className="emoji-glyph absolute -top-10 select-none animate-season-fall will-change-transform"
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
            className="emoji-glyph absolute -top-10 select-none animate-season-fall will-change-transform"
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
            className="emoji-glyph absolute -top-10 select-none text-white animate-season-fall will-change-transform"
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
    // Tropical ambient — palms, petals, bubbles, butterflies, sun rays, wave shimmer
    const palmEmojis = ["🌴", "🌿", "🍃"];
    const tropicalEmojis = ["🌺", "🌸", "🌼", "🍋", "🍊", "🐚"];
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Corner palm silhouettes */}
        <span className="emoji-glyph absolute -bottom-4 -left-2 text-7xl md:text-8xl select-none opacity-90 rotate-[-12deg]"
          style={{ filter: "drop-shadow(3px 3px 0 var(--color-border))" }}>🌴</span>
        <span className="emoji-glyph absolute -bottom-6 -right-2 text-7xl md:text-8xl select-none opacity-90 rotate-[14deg]"
          style={{ filter: "drop-shadow(-3px 3px 0 var(--color-border))" }}>🌴</span>

        {/* Animated sunshine rays top-right */}
        <div className="absolute -top-24 -right-24 h-96 w-96 opacity-40 animate-sun-ray"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0 10deg, color-mix(in oklab, var(--color-secondary) 60%, transparent) 10deg 14deg, transparent 14deg 30deg, color-mix(in oklab, var(--color-primary) 55%, transparent) 30deg 34deg, transparent 34deg 60deg, color-mix(in oklab, var(--color-secondary) 55%, transparent) 60deg 64deg, transparent 64deg 90deg)",
            borderRadius: "9999px",
            filter: "blur(2px)",
          }}
        />

        {/* Palm leaves gently falling */}
        {palms.map((p, i) => (
          <span
            key={`palm-${i}`}
            className="emoji-glyph absolute -top-10 select-none animate-summer-drift will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
              "--spin": p.rotate,
              filter: "drop-shadow(2px 2px 0 var(--color-border))",
            }}
          >
            {palmEmojis[i % palmEmojis.length]}
          </span>
        ))}

        {/* Tropical flower petals, lemons, shells */}
        {tropicals.map((p, i) => (
          <span
            key={`trop-${i}`}
            className="emoji-glyph absolute -top-10 select-none animate-summer-drift will-change-transform"
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
            {tropicalEmojis[i % tropicalEmojis.length]}
          </span>
        ))}

        {/* Floating bubbles rising */}
        {bubbles.map((p, i) => (
          <span
            key={`bub-${i}`}
            className="absolute select-none animate-summer-bubble will-change-transform"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              borderRadius: "9999px",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), color-mix(in oklab, var(--color-primary) 40%, transparent) 60%, transparent 75%)",
              boxShadow: "inset 0 0 6px rgba(255,255,255,0.4)",
              // @ts-expect-error CSS custom prop
              "--drift": p.drift,
            }}
          />
        ))}

        {/* Tiny butterflies */}
        {butterflies.map((p, i) => (
          <span
            key={`fly-${i}`}
            className="emoji-glyph absolute -top-10 select-none animate-summer-drift will-change-transform"
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
            🦋
          </span>
        ))}

        {/* Sparkling sunlight particles */}
        {sparkles.map((p, i) => (
          <span
            key={`spk-${i}`}
            className="absolute animate-cyber-pulse"
            style={{
              left: p.left,
              top: `${(i * 137) % 100}%`,
              width: p.size,
              height: p.size,
              borderRadius: "9999px",
              background: "radial-gradient(circle, rgba(255,240,180,1) 0%, transparent 70%)",
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Ocean wave shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 opacity-60"
          style={{
            background:
              "repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-secondary) 50%, transparent) 0 24px, transparent 24px 48px), linear-gradient(0deg, color-mix(in oklab, var(--color-accent) 40%, transparent), transparent)",
          }}
        />

        {/* Heatwave shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 opacity-30 animate-heat-haze"
          style={{
            background:
              "linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 40%, transparent), transparent)",
          }}
        />
      </div>
    );
  }

  if (theme === "cyber") {
    const shapes = ["◆", "▲", "◼", "◯", "✦", "⬢"];
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Neon horizon glow */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--color-secondary) 55%, transparent) 0%, transparent 55%), linear-gradient(0deg, color-mix(in oklab, var(--color-accent) 25%, transparent), transparent 70%)",
          }}
        />

        {/* Animated light streaks */}
        {cyberStreaks.map((p, i) => (
          <div
            key={`streak-${i}`}
            className="absolute h-[2px] w-1/3 animate-cyber-streak will-change-transform"
            style={{
              top: `${10 + (i * 79) % 80}%`,
              left: 0,
              animationDelay: p.delay,
              animationDuration: p.duration,
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-primary) 90%, white) 45%, color-mix(in oklab, var(--color-secondary) 90%, white) 55%, transparent)",
              boxShadow:
                "0 0 12px color-mix(in oklab, var(--color-primary) 80%, transparent), 0 0 24px color-mix(in oklab, var(--color-secondary) 60%, transparent)",
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        {cyberShapes.map((p, i) => (
          <span
            key={`shape-${i}`}
            className="emoji-glyph absolute select-none animate-cyber-float"
            style={{
              left: p.left,
              top: `${(i * 173) % 90}%`,
              fontSize: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              color:
                i % 3 === 0
                  ? "color-mix(in oklab, var(--color-primary) 90%, white)"
                  : i % 3 === 1
                    ? "color-mix(in oklab, var(--color-secondary) 90%, white)"
                    : "color-mix(in oklab, var(--color-accent) 90%, white)",
              // @ts-expect-error CSS custom prop
              "--spin": p.rotate,
              filter:
                "drop-shadow(0 0 8px currentColor) drop-shadow(0 0 16px currentColor)",
              opacity: 0.85,
            }}
          >
            {shapes[i % shapes.length]}
          </span>
        ))}

        {/* Neon particle dots */}
        {cyberDots.map((p, i) => (
          <span
            key={`dot-${i}`}
            className="absolute rounded-full animate-cyber-pulse"
            style={{
              left: p.left,
              top: `${(i * 113) % 100}%`,
              width: p.size,
              height: p.size,
              background:
                i % 2 === 0
                  ? "color-mix(in oklab, var(--color-primary) 95%, white)"
                  : "color-mix(in oklab, var(--color-secondary) 95%, white)",
              boxShadow: "0 0 8px currentColor, 0 0 16px currentColor",
              color:
                i % 2 === 0
                  ? "color-mix(in oklab, var(--color-primary) 95%, white)"
                  : "color-mix(in oklab, var(--color-secondary) 95%, white)",
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Scanline veil */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0 2px, color-mix(in oklab, var(--color-primary) 40%, transparent) 2px 3px)",
          }}
        />
      </div>
    );
  }

  return null;
}

