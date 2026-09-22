# manasworn.com

Site for Manasworn. Next.js (App Router, TypeScript) + Tailwind v4 + shadcn/ui, statically
exported to `out/` and served by GitHub Pages.

```
npm install
npm run dev       # http://localhost:3000
npm run build     # static export -> out/
npm run preview   # serve out/ at http://localhost:4173 (python)
```

## Layout

| Path | What |
|---|---|
| `app/page.tsx` | `/` — hero, News, The game, Community, footer |
| `app/press/page.tsx` | `/press/` — fact sheet, description, videos, B-roll, images (tabs), logos, contact |
| `app/layout.tsx` | fonts, favicon, theme colour, shared metadata |
| `app/globals.css` | Tailwind + the colour tokens (night-sky blue, gold, glow) |
| `app/fonts/IMFellEnglishSC.ttf` | the wordmark font, used for every heading, nav item, button and badge |
| `content/news.ts` | **the news posts** |
| `components/ui/` | shadcn primitives: Button, Card, Badge, Separator, Tabs |
| `components/site/` | nav, footer, section heading (rule with diamond), news post, icon |
| `lib/links.ts` | Steam / Discord / YouTube / TikTok / email URLs |
| `public/` | every static file, served at the same path as before (`/assets/...`, `/press/img/...`, `/press/video/...`, `/press/manasworn-press-kit.zip`, `/press/factsheet.txt`, `CNAME`) |

Game UI look: every `Card` (alias `GameFrame`) is a `.game-panel` — a gold 9-slice
`border-image` frame over a CSS stone/noise fill. Big panels use `public/ui/frame-ornate.png`,
compact cards add `.game-panel-simple` (`frame-simple.png`); section headings use
`public/ui/divider.png`. The art is Kenney's "Fantasy UI Borders" (CC0, licence in
`public/ui/kenney/License.txt`), re-coloured by `python scripts/tint-ui.py` from the three
originals kept in `public/ui/kenney/`. Swap it with the CSS variables on `:root` in
`app/globals.css` (`--frame-src`, `--frame-slice`, `--frame-width`, `--frame-corners`);
`--frame-src: none` falls back to a bronze border with CSS corner brackets. Buttons are `.game-btn-primary` (blue, gold trim) and
`.game-btn-secondary` (stone).

Fonts: headings/nav/buttons use IM Fell English SC (self-hosted via `next/font/local`);
everything else is Inter (`next/font/google`, downloaded and self-hosted at build time).
No serif body text.

## Adding a news post

Add one object to the top of the `news` array in `content/news.ts`. Posts are sorted newest
first by `date`; posts on the same date keep their array order.

```ts
{
  date: "2026-09-30",                 // YYYY-MM-DD
  title: "Post title",
  tag: "Devlog",                      // optional gold badge
  paragraphs: [                       // inline HTML allowed: <strong>, <em>, <a href>
    "First paragraph. See the <a href=\"/press/\">press kit</a>.",
  ],
  // optional media, pick one:
  youtube: { id: "VIDEO_ID", title: "Video title" },
  image: { src: "/assets/news-foo.jpg", alt: "...", width: 1600, height: 900, wide: false, href: STEAM },
  // optional rows:
  links: [{ label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=VIDEO_ID" }],
  buttons: [{ label: "Wishlist on Steam", href: STEAM, primary: true, icon: "steam" }],
}
```

Put post images in `public/assets/` and reference them as `/assets/<file>`. `wide: true` keeps
the image's own aspect ratio instead of cropping it to 16:9.

## Deploy

`.github/workflows/pages.yml` builds on every push to `main` and deploys `out/` with
`actions/deploy-pages`. The repo's **Settings -> Pages -> Source must be "GitHub Actions"**
(not "Deploy from a branch"). `public/CNAME` ends up in `out/CNAME`.

Live at **https://manasworn.com** — custom domain, Enforce HTTPS on.

Cloudflare holds four apex `A` records (185.199.108-111.153) and
`CNAME www -> 7ardon2000.github.io`, all **DNS only (grey cloud)**. Keep them grey:
the orange-cloud proxy blocks GitHub from issuing the certificate, which silently
drops the Cloudflare-to-GitHub hop back to plain HTTP.

If the certificate ever goes missing, remove and re-add the custom domain in
Settings -> Pages. That is what unstuck it the first time.

## Assets

- `public/assets/` is derived from the game repo's art — `hero.jpg` is the Steam page
  background, `logo.png` the wordmark, `game-*.jpg` brightened gameplay stills, the
  portraits the in-game 128 px pixel art, `og.jpg` the main capsule. Re-export from mana2
  (`release/steam/`) if the art changes. `assets/icons/` are Simple Icons SVGs, coloured
  through CSS `mask`.
- Press kit: videos in `public/press/video/`, images in `public/press/img/`, fact sheet in
  `public/press/factsheet.txt`. `manasworn-press-kit.zip` bundles images, logos and fact
  sheet (no video); rebuild it after changing any of them. Keep single files under 50 MB
  (GitHub warns above that and refuses 100 MB).

## Still missing

- `support@manasworn.com` only works once Cloudflare Email Routing is enabled on the zone.

## Deploying (current)

GitHub Actions is blocked on the account (billing lock, 2026-09-22), so `.github/workflows/pages.yml`
fails on every push. Pages is set to **Deploy from a branch → `gh-pages` / root**. To publish:

```
bash scripts/deploy.sh
```

It builds `out/` locally and force-pushes it to `gh-pages`; Pages serves it about a minute later.
Once billing is fixed you can switch back: Settings → Pages → Source → GitHub Actions, and pushes to
`main` deploy through the workflow again.
