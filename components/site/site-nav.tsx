import Link from "next/link";

import { Icon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { STEAM } from "@/lib/links";

export function SiteNav({
  links,
  homeHref,
}: {
  links: { href: string; label: string }[];
  homeHref: string;
}) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 md:h-20 md:gap-6">
        <Link href={homeHref} aria-label="Manasworn home" className="shrink-0">
          <img src="/assets/logo-nav.png" alt="Manasworn" width={640} height={89} className="h-[30px] w-auto md:h-10" />
        </Link>
        <div className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 font-display text-base tracking-[.08em] text-muted-foreground transition-colors hover:text-pale"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Button asChild variant="outline" size="sm" className="ml-auto md:ml-2">
          <a href={STEAM}>
            <Icon name="steam" />
            Wishlist
          </a>
        </Button>
      </div>
    </nav>
  );
}
