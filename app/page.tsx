import { Fragment } from "react";
import type { Metadata } from "next";

import { Icon, type IconName } from "@/components/site/icon";
import { NewsPostCard } from "@/components/site/news-post";
import { Divider, SectionHeading } from "@/components/site/section-heading";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { sortedNews } from "@/content/news";
import { DISCORD, EMAIL, STEAM, TIKTOK, YOUTUBE } from "@/lib/links";

export const metadata: Metadata = {
  title: "Manasworn — an isometric dungeon crawl about casting",
  description:
    "Manasworn is an isometric action-RPG about casting: three spellcasters, generated dungeons, runewords, and four-player co-op. Coming to Steam in 2027.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Manasworn",
    description:
      "An isometric action-RPG about casting. Three spellcasters, generated dungeons, runewords, four-player co-op. Coming to Steam in 2027.",
    url: "/",
    images: ["/assets/og.jpg"],
  },
};

const features = [
  {
    img: "/assets/game-mana.jpg",
    alt: "A mage hurling a comet across a torchlit cemetery",
    title: "Mana is life",
    text: "No blades, no shields. You are a caster, and your mana is the only thing between you and the dark.",
  },
  {
    img: "/assets/game-spells.jpg",
    alt: "A phoenix strike erupting in a dungeon room",
    title: "Shape your spells",
    text: "Relics, runes and runewords change what a spell does, not just how hard it hits.",
  },
  {
    img: "/assets/game-dungeon.jpg",
    alt: "An isometric dungeon room with stone floors and enemies",
    title: "Dungeons that keep going",
    text: "Generated depths with bosses at the bottom and a difficulty ladder above them.",
  },
  {
    img: "/assets/game-coop.jpg",
    alt: "A necromancer raising skeletons beside another player",
    title: "Bring friends",
    text: "Drop-in co-op for up to four. Descend together.",
  },
];

const classes = [
  { img: "/assets/mage.jpg", name: "Mage", text: "Comets, novas and beams. Raw arcane, thrown from range." },
  {
    img: "/assets/necromancer.jpg",
    name: "Necromancer",
    text: "Raise the dead, drain the living, let the pack do the work.",
  },
  { img: "/assets/shaman.jpg", name: "Shaman", text: "Chained lightning and storms that fill a room." },
];

const community: { id?: string; href: string; icon: IconName; name: string; text: string }[] = [
  { id: "steam", href: STEAM, icon: "steam", name: "Steam", text: "Store page & wishlist" },
  { href: DISCORD, icon: "discord", name: "Discord", text: "Playtests and bug reports" },
  { href: YOUTUBE, icon: "youtube", name: "YouTube", text: "Trailers and devlogs" },
  { href: TIKTOK, icon: "tiktok", name: "TikTok", text: "Clips and spell showcases" },
];

const wrap = "mx-auto max-w-6xl px-4 sm:px-6";

export default function Home() {
  return (
    <>
      <SiteNav
        homeHref="#top"
        links={[
          { href: "#news", label: "News" },
          { href: "#game", label: "The game" },
          { href: "#community", label: "Community" },
        ]}
      />

      <header id="top" className="relative overflow-hidden text-center">
        <div className="relative flex h-[clamp(380px,62vh,680px)] justify-center">
          <img
            src="/assets/hero.jpg"
            alt=""
            width={2876}
            height={1620}
            className="h-full w-auto max-w-none [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,18,.5)_0%,rgba(6,9,18,0)_30%,rgba(6,9,18,0)_70%,var(--background)_100%)]" />
          <h1 className="absolute top-[clamp(28px,5vh,56px)] left-1/2 z-10 w-[min(560px,78vw)] -translate-x-1/2">
            <img
              src="/assets/logo.png"
              alt="Manasworn"
              width={1400}
              height={397}
              className="w-full drop-shadow-[0_8px_40px_rgba(60,110,220,.35)]"
            />
          </h1>
        </div>
        <div className="relative -mt-6 px-4 pb-20">
          <p className="mx-auto max-w-[36ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            An isometric dungeon crawl about casting — three spellcasters, generated depths, and no
            weapon but your own mana.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full max-w-72 sm:w-auto">
              <a href={STEAM}>
                <Icon name="steam" />
                Wishlist on Steam
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full max-w-72 sm:w-auto">
              <a href={DISCORD}>
                <Icon name="discord" />
                Join the Discord
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-faint">
            Coming to Steam in <b className="font-medium text-gold">2027</b> · Windows
          </p>
        </div>
      </header>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="news" className="py-20 sm:py-24">
        <div className={wrap}>
          <SectionHeading title="News">Devlogs, clips and release news, newest first.</SectionHeading>
          <div className="flex flex-col gap-6">
            {sortedNews().map((post, i) => (
              <Fragment key={post.date + post.title}>
                {i > 0 && <Divider className="opacity-70" />}
                <NewsPostCard post={post} />
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="game" className="py-20 sm:py-24">
        <div className={wrap}>
          <SectionHeading title="The game">
            Play a Mage, a Necromancer or a Shaman and descend through generated dungeons, cemeteries,
            temples and deserts. Every run rebuilds the world; every kill feeds a build made of spells,
            relics, runes and runewords rather than swords.
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <Card key={f.title} className="group game-panel-hover">
                <div className="overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.alt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-5 sm:p-6">
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription className="text-base">{f.text}</CardDescription>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {classes.map((c) => (
              <Card key={c.name} className="game-panel-simple flex-row items-center gap-4 p-4">
                <img
                  src={c.img}
                  alt={`${c.name} portrait`}
                  width={256}
                  height={256}
                  loading="lazy"
                  className="size-24 shrink-0 rounded-[3px] border border-[#6b5a3a] bg-background shadow-[0_0_0_1px_#000,inset_0_0_12px_rgba(0,0,0,.8)]"
                />
                <div>
                  <h3 className="text-xl tracking-[.06em] text-gold">{c.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className={wrap}>
        <Divider />
      </div>
      <section id="community" className="py-20 sm:py-24">
        <div className={wrap}>
          <SectionHeading title="Community" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {community.map((c) => (
              <Card
                key={c.name}
                asChild
                className="game-panel-simple game-panel-hover flex-row items-center gap-4 p-5"
              >
                <a id={c.id} href={c.href}>
                  <Icon name={c.icon} className="size-8 text-pale" />
                  <span>
                    <span className="block font-display text-xl tracking-wide text-foreground">
                      {c.name}
                    </span>
                    <span className="text-sm text-faint">{c.text}</span>
                  </span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter note="© 2026 Manasworn. All rights reserved.">
        <a href="/press/">Press kit</a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={DISCORD}>Discord</a>
        <a href={YOUTUBE}>YouTube</a>
        <a href={TIKTOK}>TikTok</a>
      </SiteFooter>
    </>
  );
}
