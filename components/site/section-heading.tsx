import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Rule({ className }: { className?: string }) {
  return <span aria-hidden className={cn("divider-end", className)} />;
}

/** Full-width divider with the ornament in the middle; spans its container. */
export function Divider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex w-full", className)}>
      <span className="divider-half" />
      <span className="divider-half -scale-x-100" />
    </div>
  );
}

export function SectionHeading({
  title,
  children,
  className,
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 sm:mb-12", className)}>
      <h2 className="text-3xl tracking-[.08em] text-ornament [text-shadow:0_2px_0_#000,0_0_24px_rgba(154,166,187,.16)] sm:text-4xl">
        {title}
      </h2>
      <Rule className="mt-2" />
      {children && (
        <div className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}
