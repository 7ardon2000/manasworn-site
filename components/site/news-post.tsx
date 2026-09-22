import { Icon } from "@/components/site/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { NewsPost } from "@/content/news";
import { cn } from "@/lib/utils";

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Media({ post }: { post: NewsPost }) {
  const frame = "mt-6 block overflow-hidden rounded-lg border border-border bg-black";
  if (post.youtube) {
    return (
      <div className={cn(frame, "aspect-video")}>
        <iframe
          src={`https://www.youtube.com/embed/${post.youtube.id}`}
          title={post.youtube.title}
          loading="lazy"
          allowFullScreen
          className="size-full border-0"
        />
      </div>
    );
  }
  if (!post.image) return null;
  const { src, alt, width, height, wide, href } = post.image;
  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={cn("w-full", !wide && "aspect-video object-cover")}
    />
  );
  return href ? (
    <a
      href={href}
      className={cn(
        frame,
        "transition-all hover:border-glow hover:shadow-[0_0_32px_rgba(110,160,255,.18)]",
      )}
    >
      {img}
    </a>
  ) : (
    <div className={frame}>{img}</div>
  );
}

export function NewsPostCard({ post }: { post: NewsPost }) {
  return (
    <Card className="p-5 sm:p-8 lg:grid lg:grid-cols-[150px_1fr] lg:gap-8">
      <time
        dateTime={post.date}
        className="mb-3 block font-display text-sm tracking-[.14em] text-faint lg:mb-0 lg:pt-1.5"
      >
        {formatDate(post.date)}
      </time>
      <div className="min-w-0">
        {post.tag && <Badge className="mb-3">{post.tag}</Badge>}
        <h3 className="text-2xl leading-tight text-pale sm:text-[1.75rem]">{post.title}</h3>
        <div className="prose-link mt-4 space-y-3 text-[0.97rem] leading-relaxed text-muted-foreground sm:text-base">
          {post.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <Media post={post} />
        {post.links && (
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {post.links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="font-display tracking-wide text-glow hover:underline"
              >
                <span className="text-faint">→ </span>
                {l.label}
              </a>
            ))}
          </p>
        )}
        {post.buttons && (
          <div className="mt-6 flex flex-wrap gap-3">
            {post.buttons.map((b) => (
              <Button key={b.href + b.label} asChild variant={b.primary ? "default" : "outline"}>
                <a href={b.href}>
                  {b.icon && <Icon name={b.icon} />}
                  {b.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
