import type { ReactNode } from "react";

import { Divider } from "@/components/site/section-heading";

export function SiteFooter({ children, note }: { children: ReactNode; note?: ReactNode }) {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <Divider />
      <div className="pt-10 text-center text-sm text-faint">
        <div className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-2 [&_a]:text-muted-foreground [&_a]:transition-colors [&_a:hover]:text-pale">
          {children}
        </div>
        {note}
      </div>
    </footer>
  );
}
