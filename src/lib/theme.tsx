import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type SeasonTheme = "summer" | "halloween" | "winter" | "spring";

export const THEMES: { id: SeasonTheme; label: string; emoji: string }[] = [
  { id: "summer", label: "Summer Heat", emoji: "🔥" },
  { id: "halloween", label: "Halloween", emoji: "🎃" },
  { id: "winter", label: "Winter Crazy", emoji: "❄️" },
  { id: "spring", label: "Spring Bloom", emoji: "🌸" },
];

const ThemeCtx = createContext<{ theme: SeasonTheme; setTheme: (t: SeasonTheme) => void }>({
  theme: "summer",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SeasonTheme>("summer");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("shouters-theme")) as
      | SeasonTheme
      | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setThemeState(saved);
    }
  }, []);

  useEffect(() => {
    const cls = document.documentElement.classList;
    THEMES.forEach((t) => cls.remove(`theme-${t.id}`));
    cls.add(`theme-${theme}`);
    localStorage.setItem("shouters-theme", theme);
  }, [theme]);

  const setTheme = useCallback((t: SeasonTheme) => setThemeState(t), []);
  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
