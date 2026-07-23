import { forwardRef, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const NeoCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "neo-border neo-shadow bg-card text-card-foreground rounded-md p-5",
        className,
      )}
      {...props}
    />
  ),
);
NeoCard.displayName = "NeoCard";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const NeoButton = forwardRef<HTMLButtonElement, BtnProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const bg = {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      ghost: "bg-card text-card-foreground",
    }[variant];
    const sz = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
    }[size];
    return (
      <button
        ref={ref}
        className={cn(
          "neo-border neo-shadow-sm neo-press neo-press-hover font-display uppercase tracking-wide rounded-md inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
          bg,
          sz,
          className,
        )}
        {...props}
      />
    );
  },
);
NeoButton.displayName = "NeoButton";

export function NeoBadge({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "muted" | "success" | "destructive";
  className?: string;
}) {
  const bg = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    muted: "bg-muted text-muted-foreground",
    success: "bg-[color:var(--success)] text-black",
    destructive: "bg-destructive text-white",
  }[variant];
  return (
    <span
      className={cn(
        "neo-border neo-shadow-sm inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-widest",
        bg,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <NeoBadge variant="accent" className="mb-3">{eyebrow}</NeoBadge>}
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-xl text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
