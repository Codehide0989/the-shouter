import { THEMES, useTheme } from "@/lib/theme";
import { Palette } from "lucide-react";
import { useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = THEMES.find((t) => t.id === theme)!;
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="neo-border neo-shadow-sm bg-card rounded-md px-3 py-2 text-sm font-display uppercase tracking-wide inline-flex items-center gap-2"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">{current.emoji} {current.label}</span>
        <span className="sm:hidden">{current.emoji}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 neo-border neo-shadow bg-card rounded-md p-2 z-50">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-md font-display uppercase text-xs tracking-wide flex items-center gap-2 hover:bg-muted ${theme === t.id ? "bg-secondary text-secondary-foreground" : ""}`}
            >
              <span>{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
