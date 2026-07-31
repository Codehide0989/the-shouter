import { useTheme } from "@/lib/theme";

/**
 * Static seasonal atmosphere. No animation anywhere — purely a layered,
 * composed backdrop (gradients, glows, patterns and fixed decorative glyphs)
 * that changes with the active theme.
 */

type Glyph = { c: string; top: string; left: string; size: number; rot: number; op: number };

const g = (c: string, top: number, left: number, size: number, rot: number, op = 0.5): Glyph => ({
  c,
  top: `${top}%`,
  left: `${left}%`,
  size,
  rot,
  op,
});

const SCENES: Record<string, { glyphs: Glyph[]; glow?: string }> = {
  summer: {
    glow: "radial-gradient(circle at 82% 12%, oklch(0.86 0.19 85 / 0.55) 0%, transparent 55%)",
    glyphs: [
      g("🌴", 6, 4, 92, -8, 0.35),
      g("🌴", 62, 92, 78, 10, 0.28),
      g("🐚", 84, 14, 40, -14, 0.3),
      g("🦋", 22, 76, 34, 12, 0.32),
      g("🌺", 40, 8, 38, -6, 0.28),
      g("🍹", 74, 62, 42, 6, 0.24),
    ],
  },
  halloween: {
    glow: "radial-gradient(circle at 84% 10%, oklch(0.72 0.24 45 / 0.45) 0%, transparent 50%)",
    glyphs: [
      g("🎃", 10, 8, 76, -10, 0.35),
      g("🕸️", 2, 88, 96, 0, 0.25),
      g("🦇", 26, 66, 40, -12, 0.3),
      g("🕯️", 72, 18, 44, 0, 0.26),
      g("👻", 58, 84, 46, 8, 0.24),
      g("🪦", 86, 46, 48, -4, 0.2),
    ],
  },
  winter: {
    glow: "radial-gradient(circle at 50% -10%, oklch(0.92 0.05 240 / 0.5) 0%, transparent 55%)",
    glyphs: [
      g("❄️", 8, 12, 54, -12, 0.3),
      g("❄️", 34, 84, 40, 16, 0.24),
      g("⛄", 76, 8, 72, -4, 0.28),
      g("🌲", 66, 90, 78, 4, 0.24),
      g("🏔️", 88, 40, 84, 0, 0.18),
      g("🧊", 20, 52, 34, 10, 0.2),
    ],
  },
  spring: {
    glow: "radial-gradient(circle at 18% 8%, oklch(0.9 0.12 140 / 0.45) 0%, transparent 55%)",
    glyphs: [
      g("🌸", 10, 10, 56, -10, 0.32),
      g("🌸", 44, 88, 44, 14, 0.26),
      g("🍃", 70, 16, 48, -18, 0.28),
      g("🌷", 82, 74, 52, 6, 0.26),
      g("🦋", 26, 62, 36, -8, 0.26),
      g("🌱", 90, 34, 40, 0, 0.22),
    ],
  },
  cyber: {
    glow: "radial-gradient(circle at 20% 15%, oklch(0.7 0.25 300 / 0.45) 0%, transparent 50%), radial-gradient(circle at 85% 75%, oklch(0.78 0.2 200 / 0.4) 0%, transparent 50%)",
    glyphs: [
      g("◆", 14, 14, 64, 20, 0.22),
      g("▲", 30, 82, 56, -12, 0.2),
      g("●", 68, 10, 48, 0, 0.18),
      g("◼", 80, 70, 52, 24, 0.18),
      g("◇", 50, 48, 72, 12, 0.14),
    ],
  },
};

export function SeasonalEffects() {
  const { theme } = useTheme();
  const scene = SCENES[theme];
  if (!scene) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Ambient theme glow */}
      {scene.glow && <div className="absolute inset-0" style={{ background: scene.glow }} />}

      {/* Static decorative glyph scatter */}
      {scene.glyphs.map((p, i) => (
        <span
          key={i}
          className="emoji-glyph absolute"
          style={{
            top: p.top,
            left: p.left,
            fontSize: `${p.size}px`,
            opacity: p.op,
            transform: `translate(-50%, -50%) rotate(${p.rot}deg)`,
          }}
        >
          {p.c}
        </span>
      ))}

      {/* Bottom fade so content stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
