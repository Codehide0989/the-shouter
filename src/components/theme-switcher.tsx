import { THEMES, useTheme } from "@/lib/theme";
import { Palette } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = THEMES.find((t) => t.id === theme)!;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={`Theme: ${current.label}`}
        title={`Theme: ${current.label}`}
        className={cn(
          "neo-border neo-shadow-sm neo-press bg-background rounded-md h-9 w-9 grid place-items-center relative",
          open && "bg-primary text-primary-foreground",
        )}
      >
        <Palette className="h-4 w-4" />
        <span className="absolute -bottom-1 -right-1 text-[10px] leading-none">{current.emoji}</span>
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
