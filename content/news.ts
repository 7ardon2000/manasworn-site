import type { IconName } from "@/components/site/icon";
import { DISCORD, STEAM, TIKTOK, YOUTUBE } from "@/lib/links";

export type NewsPost = {
  /** ISO date, YYYY-MM-DD. Posts are shown newest first; same-day posts keep array order. */
  date: string;
  title: string;
  /** Small gold pill above the title, e.g. "Now on Steam". */
  tag?: string;
  /** One string per paragraph. Inline HTML is allowed: <strong>, <em>, <a href="...">. */
  paragraphs: string[];
  /** An image below the text. `wide` keeps its own aspect ratio instead of cropping to 16:9; `href` makes it a link. */
  image?: { src: string; alt: string; width: number; height: number; wide?: boolean; href?: string };
  /** A YouTube embed below the text: the id from youtube.com/watch?v=<id>. */
  youtube?: { id: string; title: string };
  /** A row of small arrow links. */
  links?: { label: string; href: string }[];
  /** A row of buttons. The first `primary` one is the blue call to action. */
  buttons?: { label: string; href: string; primary?: boolean; icon?: IconName }[];
};

/*
  Template: copy into the array below, fill in, delete the fields you don't need.

  {
    date: "2026-09-30",
    title: "Post title",
    tag: "Devlog",
    paragraphs: ["Body text. <a href=\"/press/\">Links</a> work inline."],
    youtube: { id: "VIDEO_ID", title: "Video title" },
    links: [
      { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=VIDEO_ID" },
      { label: "TikTok cut", href: TIKTOK },
    ],
  },
*/

export const news: NewsPost[] = [
  {
    date: "2026-09-25",
    title: "The cover art is finished",
    tag: "Key art",
    paragraphs: [
      "A few days ago we showed you the key art while it was still being painted. Now it&rsquo;s done. Here is the final cover for Manasworn, by <strong>Jesus Da Silva</strong>.",
      "The necromancer stands in front with a burning skull in his hand. The mage and the shaman are right behind him, and something very large and very dead is reaching over all three of them. Click the image to see the full-size cover.",
      "The <a href=\"/press/\">press kit</a> now has the new art in it: the full 2400&times;3600 cover with and without the logo, 4K key art, the background on its own, and painted portraits of each class cut from the cover. You can use all of it for articles, videos and streams, free.",
      "Tell us what you think on Discord. And if the art makes you want to play, wishlisting on Steam is the best way to help.",
    ],
    image: {
      src: "/assets/news-cover-art-final.jpg",
      alt: "The final Manasworn cover art: the necromancer, mage and shaman with a giant undead figure behind them, next to the Manasworn logo",
      width: 1920,
      height: 1080,
      href: "/press/img/key-art/manasworn-cover-art-2400x3600.jpg",
    },
    links: [
      { label: "Press kit", href: "/press/#images" },
      { label: "Join the Discord", href: DISCORD },
      { label: "YouTube", href: YOUTUBE },
      { label: "TikTok", href: TIKTOK },
    ],
    buttons: [{ label: "Wishlist on Steam", href: STEAM, primary: true, icon: "steam" }],
  },
  {
    date: "2026-09-23",
    title: "Extended gameplay and mechanics showcase",
    tag: "New video",
    paragraphs: [
      "The trailer is short on purpose. This one isn&rsquo;t. We just put up a longer look at Manasworn: real runs, raw footage, and a proper walk through how the game actually plays.",
      "You&rsquo;ll see the dungeons, the spells and how they stack, the enemies that want you dead, and the bosses waiting at the bottom. If you&rsquo;ve been wondering what a run feels like from start to finish, this is the video to watch.",
      "Questions about anything in it? Ask in the comments or on Discord. We read all of it, and if you like what you see, a wishlist on Steam helps more than you&rsquo;d think.",
    ],
    youtube: { id: "udraw59DEEQ", title: "Manasworn: extended gameplay and mechanics showcase" },
    links: [
      { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=udraw59DEEQ" },
      { label: "Ask us on Discord", href: DISCORD },
    ],
    buttons: [{ label: "Wishlist on Steam", href: STEAM, primary: true, icon: "steam" }],
  },
  {
    date: "2026-09-22",
    title: "A first look at our key art",
    tag: "Work in progress",
    paragraphs: [
      "We&rsquo;ve been sitting on this one and can&rsquo;t wait any longer. Here is the new key art for Manasworn, painted by <strong>Jesus Da Silva</strong>, from the first rough sketch to the colour pass.",
      "The mage, the shaman and the necromancer, with a giant undead figure looming behind them. It&rsquo;s still a work in progress, so expect it to keep changing. We&rsquo;ll share the finished piece here first.",
    ],
    image: {
      src: "/assets/news-key-art-wip.jpg",
      alt: "Key art for Manasworn in four stages, from rough greyscale sketch to the coloured painting of the mage, shaman and necromancer",
      width: 1800,
      height: 666,
      wide: true,
    },
    links: [{ label: "Tell us what you think on Discord", href: DISCORD }],
  },
  {
    date: "2026-09-22",
    title: "Manasworn has a Steam page!",
    tag: "Now on Steam",
    paragraphs: [
      "It&rsquo;s real. The store page is live, with the trailer, screenshots, and three very grumpy spellcasters on the capsule art. Months of dungeons, bosses and co-op bugs are finally something you can point at.",
      "Wishlisting is the single best thing you can do for a small game right now. It tells Steam people care, and you&rsquo;ll get a ping the moment Manasworn launches.",
      "Writing about Manasworn, streaming it, or cutting a video? The new <a href=\"/press/\">press kit</a> has everything in one place: a fact sheet, the trailer in landscape and vertical, raw gameplay B-roll with no music or captions, 1080p screenshots, key art, logos and character portraits, all free to use.",
    ],
    image: {
      src: "/assets/news-steam-store.jpg",
      alt: "The Manasworn store page on Steam",
      width: 1216,
      height: 684,
      href: STEAM,
    },
    buttons: [
      { label: "Wishlist on Steam", href: STEAM, primary: true, icon: "steam" },
      { label: "Press kit", href: "/press/" },
    ],
  },
  {
    date: "2026-09-16",
    title: "A new home for Manasworn",
    paragraphs: [
      "The site got a rebuild, and this is where news lands first: devlogs, patch notes, and clips of whatever we broke that week. Short cuts go to TikTok and YouTube, and the Discord is where playtests get organised.",
    ],
    links: [
      { label: "TikTok", href: TIKTOK },
      { label: "YouTube", href: YOUTUBE },
      { label: "Discord", href: DISCORD },
    ],
  },
];

export function sortedNews(): NewsPost[] {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}
