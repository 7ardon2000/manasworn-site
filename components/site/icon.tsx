import { cn } from "@/lib/utils";

export type IconName = "steam" | "discord" | "youtube" | "tiktok";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const mask = `url(/assets/icons/${name}.svg) center / contain no-repeat`;
  return (
    <i
      aria-hidden
      className={cn("inline-block size-[1.15em] shrink-0 bg-current", className)}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
