import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Divider, SectionHeading } from "@/components/site/section-heading";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DISCORD, EMAIL, STEAM, TIKTOK, YOUTUBE } from "@/lib/links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Manasworn — Press kit",
  description:
    "Press kit for Manasworn: fact sheet, description, trailers, gameplay B-roll, screenshots, key art and logos.",
  alternates: { canonical: "/press/" },
  openGraph: {
    type: "website",
    title: "Manasworn — Press kit",
    description: "Trailers, gameplay B-roll, screenshots, key art and logos for Manasworn.",
    url: "/press/",
    images: ["/assets/og.jpg"],
  },
};

const V = "/press/video";
const I = "/press/img";

const facts: [string, ReactNode][] = [
  ["Developer", "Jamoose"],
  ["Publisher", "Jamoose (self-published)"],
  ["Release", "2027"],
  ["Platform", "Windows PC, via Steam"],
  ["Price", "To be announced"],
  ["Genre", "Isometric action RPG"],
  ["Players", "1–4, online co-op"],
  ["Language", "English"],
  ["Website", <a key="w" href="https://manasworn.com">manasworn.com</a>],
  ["Steam", <a key="s" href={STEAM}>store page</a>],
  [
    "Social",
    <span key="so">
      <a href={YOUTUBE}>YouTube</a> · <a href={TIKTOK}>TikTok</a> · <a href={DISCORD}>Discord</a>
    </span>,
  ],
  ["Key art", "Jesus Da Silva (work in progress)"],
  ["Press", <a key="p" href={`mailto:${EMAIL}`}>{EMAIL}</a>],
];

const keyFeatures: [string, string][] = [
  ["Three spellcasters.", "Mage, Shaman and Necromancer, each with its own 15-spell kit: comets and novas, chain lightning and storms, skeletons and life drain."],
  ["Spells you reshape.", "Relics with five sockets, runes and runewords change how spells behave, not just how hard they hit."],
  ["Generated depths.", "Dungeons, cemeteries, temples, forests and deserts, rebuilt every run and filled with 20+ enemy types."],
  ["30+ bosses.", "Phased boss fights, demon lords and an endless tier ladder with global leaderboards."],
  ["Online co-op for up to four.", "Drop in with friends through Steam."],
  ["Steam features.", "Achievements, cloud saves and controller support."],
];

const broll: [string, string][] = [
  ["broll-mage", "Mage run · 0:14"],
  ["broll-necromancer", "Necromancer run · 0:15"],
  ["broll-shaman", "Shaman run · 0:15"],
  ["broll-coop", "Co-op run · 0:20"],
  ["broll-boss-warlord", "Boss: Warlord · 0:14"],
  ["broll-boss-emberlord", "Boss: Emberlord · 0:15"],
  ["broll-spells", "Spell showcase · 0:13"],
  ["broll-relics", "Relic showcase · 0:13"],
];

const screenshots = [
  "Boss fight: the Warlord",
  "Boss fight: the Emberlord",
  "Four-player co-op",
  "Mage",
  "Shaman",
  "Necromancer",
  "Relic proc",
  "Spell storm",
  "Emberlord, tier ladder",
  "Horde",
];

const keyArt: { file: string; label: string; alt: string; w: number; h: number; wip?: boolean }[] = [
  { file: "manasworn-key-art-wip-jesus-da-silva-533x800.png", label: "Key art · by Jesus Da Silva · 533×800", alt: "Manasworn key art, work in progress, by Jesus Da Silva: the mage, shaman and necromancer with a giant undead figure behind them", w: 533, h: 800, wip: true },
  { file: "manasworn-key-art-1232x706.png", label: "Key art · 1232×706", alt: "Manasworn key art", w: 640, h: 367 },
  { file: "manasworn-art-no-logo-1438x810.png", label: "Key art, no logo · 1438×810", alt: "Manasworn key art, no logo", w: 640, h: 361 },
  { file: "manasworn-wide-no-logo-3840x1240.png", label: "Wide art, no logo · 3840×1240", alt: "Manasworn wide art, no logo", w: 640, h: 207 },
  { file: "manasworn-header-920x430.png", label: "Header · 920×430", alt: "Manasworn header", w: 640, h: 299 },
  { file: "manasworn-vertical-748x896.png", label: "Vertical · 748×896", alt: "Manasworn vertical", w: 640, h: 767 },
  { file: "manasworn-portrait-600x900.png", label: "Portrait · 600×900", alt: "Manasworn portrait", w: 600, h: 900 },
  { file: "manasworn-banner-2560x1440.jpg", label: "Banner · 2560×1440", alt: "Manasworn banner", w: 640, h: 360 },
];

const characters = ["Mage", "Necromancer", "Shaman"];

const logos = [
  { href: `${I}/logos/manasworn-logo.png`, src: `${I}/logos/manasworn-logo-1000w.png`, label: "Wordmark · full size", alt: "Manasworn wordmark" },
  { href: `${I}/logos/manasworn-logo-1000w.png`, src: `${I}/logos/manasworn-logo-1000w.png`, label: "Wordmark · 1000 px", alt: "Manasworn wordmark, 1000 px" },
  { href: `${I}/logos/manasworn-icon-512.png`, src: `${I}/logos/manasworn-icon-512.png`, label: "Icon · 512 px", alt: "Manasworn icon" },
];

const ext = (f: string) => f.split(".").pop()!.toUpperCase();

function Asset({
  children,
  title,
  download,
  downloadLabel,
  badge,
  className,
}: {
  children: ReactNode;
  title: string;
  download: string;
  downloadLabel: string;
  badge?: string;
  className?: string;
}) {
  return (
    <Card asChild className={cn("game-panel-simple game-panel-hover", className)}>
      <figure className="m-0">
        {children}
        <figcaption className="flex flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-4 py-3 text-sm">
          <span className="flex flex-wrap items-center gap-2">
            <b className="font-display text-base font-normal tracking-wide text-pale">{title}</b>
            {badge && <Badge>{badge}</Badge>}
          </span>
          <a href={download} download className="font-display tracking-[.08em] text-glow hover:underline">
            {downloadLabel}
          </a>
        </figcaption>
      </figure>
    </Card>
  );
}

function Video({ name, className }: { name: string; className?: string }) {
  return (
    <video
      controls
      preload="none"
      poster={`${V}/${name}.jpg`}
      src={`${V}/${name}.mp4`}
      className={cn("w-full bg-black", className)}
    />
  );
}

function Checker({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="checker flex min-h-44 items-center justify-center p-7">
      {children}
    </a>
  );
}

const wrap = "mx-auto max-w-6xl px-4 sm:px-6";
const grid3 = "grid gap-4 sm:grid-cols-3";

export default function Press() {
  return (
    <>
      <SiteNav
        homeHref="/"
        links={[
          { href: "#factsheet", label: "Fact sheet" },
          { href: "#videos", label: "Videos" },
          { href: "#images", label: "Images" },
          { href: "#logos", label: "Logos" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      <header className="bg-[radial-gradient(80%_100%_at_50%_0%,rgba(79,116,192,.22),transparent_70%)] px-4 pt-16 pb-14 text-center sm:pt-20">
        <h1 className="mx-auto w-[min(460px,78vw)]">
          <img
            src="/assets/logo.png"
            alt="Manasworn"
            width={1400}
            height={397}
            className="w-full drop-shadow-[0_8px_32px_rgba(60,110,220,.35)]"
          />
        </h1>
        <p className="mt-6 font-display text-lg tracking-[.3em] text-gold">PRESS KIT</p>
        <p className="mx-auto mt-3 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
          An isometric action RPG about casting. Everything you need to write about, stream or cut a
          video of Manasworn.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-auto max-w-full flex-wrap py-3 whitespace-normal">
            <a href="/press/manasworn-press-kit.zip" download>
              Download everything
              <small className="font-sans text-sm tracking-normal opacity-75">
                (images, logos, fact sheet)
              </small>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={STEAM}>Steam page</a>
          </Button>
        </div>
      </header>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="factsheet" className="py-20">
        <div className={cn(wrap, "grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-[400px_minmax(0,1fr)] [&>*]:min-w-0")}>
          <div>
            <SectionHeading title="Fact sheet" className="mb-8" />
            <Card className="p-5">
              <dl className="prose-link grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 text-[0.95rem]">
                {facts.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="pt-0.5 font-display text-sm tracking-[.12em] text-faint uppercase">
                      {k}
                    </dt>
                    <dd className="m-0 min-w-0 break-words text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-faint">
                Plain text: <a href="/press/factsheet.txt" className="text-glow hover:underline">factsheet.txt</a>
              </p>
            </Card>
          </div>

          <div>
            <SectionHeading title="Description" className="mb-8" />
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <b className="font-semibold text-foreground">Short:</b> Manasworn is an isometric
                action RPG with three spellcaster classes. Pick a Mage, a Shaman or a Necromancer,
                push deeper into generated dungeons, and shape your spells with runes and relics.
                Fight alone or with up to three friends in online co-op.
              </p>
              <p>
                <b className="font-semibold text-foreground">Long:</b> There are no swords in
                Manasworn. You are a caster, and mana is both your weapon and your lifeline. Descend
                through generated dungeons, cemeteries, temples, forests and deserts, where every run
                rebuilds the world and every kill feeds a build assembled from spells, relics, runes
                and runewords. Relics and runes don&rsquo;t just add damage; they change what a spell
                does. At the bottom wait the bosses, and above them an endless ladder of harder tiers
                and demon lords for anyone who wants to see how far a build can go.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-2xl tracking-wide text-pale">Key features</h3>
            <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
              {keyFeatures.map(([b, t]) => (
                <li key={b} className="relative pl-6 leading-relaxed text-muted-foreground">
                  <span className="absolute top-[.6em] left-0.5 size-1.5 rotate-45 bg-gold/80" />
                  <b className="font-semibold text-foreground">{b}</b> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="videos" className="py-20">
        <div className={wrap}>
          <SectionHeading title="Videos" />
          <div className="grid items-start gap-4 md:grid-cols-[2.2fr_1fr]">
            <Asset
              title="Trailer · 1080p · 0:55"
              download={`${V}/manasworn-trailer-1080p.mp4`}
              downloadLabel="Download MP4"
            >
              <Video name="manasworn-trailer-1080p" className="aspect-video" />
            </Asset>
            <Asset
              title="Vertical · 9:16"
              download={`${V}/manasworn-trailer-vertical.mp4`}
              downloadLabel="Download MP4"
              className="mx-auto w-full max-w-xs md:max-w-none"
            >
              <Video name="manasworn-trailer-vertical" className="aspect-[9/16]" />
            </Asset>
          </div>

          <h3 className="mt-14 text-2xl tracking-wide text-pale">Gameplay B-roll</h3>
          <p className="mt-2 mb-6 text-sm text-faint">
            Raw 1080p gameplay with in-game sound only: no music, no captions. Cut it however you like.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {broll.map(([name, label]) => (
              <Asset key={name} title={label} download={`${V}/${name}.mp4`} downloadLabel="MP4">
                <Video name={name} className="aspect-video" />
              </Asset>
            ))}
          </div>
        </div>
      </section>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="images" className="py-20">
        <div className={wrap}>
          <SectionHeading title="Images" />
          <Tabs defaultValue="screenshots">
            <TabsList>
              <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
              <TabsTrigger value="key-art">Key art</TabsTrigger>
              <TabsTrigger value="characters">Characters</TabsTrigger>
            </TabsList>

            <TabsContent value="screenshots" forceMount>
              <p className="mb-6 text-sm text-faint">1920×1080, straight from the game. Click for full size.</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {screenshots.map((label, i) => {
                  const n = String(i + 1).padStart(2, "0");
                  const full = `${I}/screenshots/manasworn-screenshot-${n}.jpg`;
                  return (
                    <Asset key={n} title={label} download={full} downloadLabel="JPG">
                      <a href={full}>
                        <img
                          src={`${I}/thumb/manasworn-screenshot-${n}.jpg`}
                          alt={`Manasworn screenshot: ${label}`}
                          width={640}
                          height={360}
                          loading="lazy"
                          className="aspect-video w-full bg-black object-cover"
                        />
                      </a>
                    </Asset>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="key-art" forceMount>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {keyArt.map((k) => {
                  const full = `${I}/key-art/${k.file}`;
                  return (
                    <Asset
                      key={k.file}
                      title={k.label}
                      download={full}
                      downloadLabel={ext(k.file)}
                      badge={k.wip ? "Work in progress" : undefined}
                    >
                      <a href={full}>
                        <img
                          src={`${I}/thumb/${k.file.replace(/\.png$/, ".jpg")}`}
                          alt={k.alt}
                          width={k.w}
                          height={k.h}
                          loading="lazy"
                          className="aspect-video w-full bg-[#070b16] object-contain"
                        />
                      </a>
                    </Asset>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="characters" forceMount>
              <p className="mb-6 text-sm text-faint">
                The three class portraits, pixel art scaled 8× to 1024×1024.
              </p>
              <div className={grid3}>
                {characters.map((c) => {
                  const file = `${I}/characters/manasworn-${c.toLowerCase()}-1024.png`;
                  return (
                    <Asset key={c} title={c} download={file} downloadLabel="PNG">
                      <Checker href={file}>
                        <img
                          src={file}
                          alt={`${c} portrait`}
                          width={150}
                          height={150}
                          loading="lazy"
                          className="pixelated size-[150px]"
                        />
                      </Checker>
                    </Asset>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="logos" className="py-20">
        <div className={wrap}>
          <SectionHeading title="Logos" />
          <div className={grid3}>
            {logos.map((l) => (
              <Asset key={l.label} title={l.label} download={l.href} downloadLabel="PNG">
                <Checker href={l.href}>
                  <img src={l.src} alt={l.alt} loading="lazy" className="max-h-[150px] w-auto" />
                </Checker>
              </Asset>
            ))}
          </div>
        </div>
      </section>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="contact" className="py-20">
        <div className={cn(wrap, "grid grid-cols-1 gap-12 md:grid-cols-2")}>
          <div>
            <SectionHeading title="Contact" className="mb-6 sm:mb-6" />
            <div className="prose-link space-y-3 text-muted-foreground">
              <p>
                Press, keys and interviews: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
              <p>
                Community and playtests: <a href={DISCORD}>Discord</a>
              </p>
            </div>
          </div>
          <div>
            <SectionHeading title="Usage" className="mb-6 sm:mb-6" />
            <p className="leading-relaxed text-muted-foreground">
              Everything on this page may be used for coverage, previews, reviews, videos and streams
              of Manasworn. Monetised videos are welcome. Please don&rsquo;t alter the logo.
            </p>
            <p className="mt-3 text-sm text-faint">
              Manasworn is developed by Jamoose. All game art, logos and footage © 2026 Jamoose.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter>
        <a href="/">← manasworn.com</a>
      </SiteFooter>
    </>
  );
}
