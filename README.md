# manasworn.com

Static site for Manasworn. One `index.html`, no build step, no dependencies.

## Deploy

Live at **https://manasworn.com** — GitHub Pages, custom domain, Enforce HTTPS on.

Cloudflare holds four apex `A` records (185.199.108-111.153) and
`CNAME www -> 7ardon2000.github.io`, all **DNS only (grey cloud)**. Keep them grey:
the orange-cloud proxy blocks GitHub from issuing the certificate, which silently
drops the Cloudflare-to-GitHub hop back to plain HTTP.

If the certificate ever goes missing, remove and re-add the custom domain in
Settings -> Pages. That is what unstuck it the first time; issuance had sat idle
for over an hour with DNS already correct.

## Editing

- **News:** the main section. Copy an `<article class="post">` in `index.html` and put it
  at the top; a commented template with a YouTube embed and a link row sits above the first
  post.
- **Steam:** every wishlist control (nav pill, hero button, Community card) links to
  https://store.steampowered.com/app/5133760/Manasworn/
- **Assets:** `assets/` is derived from the game repo's art — `hero.jpg` is the Steam page
  background, `logo.png` the wordmark, `game-*.jpg` are brightened gameplay stills, the
  portraits are the in-game 128 px pixel art, `og.jpg` the main capsule. The generator is
  not checked in here; re-export from mana2 (`release/steam/`) if the art changes.
  `assets/icons/` are Simple Icons SVGs, coloured through CSS `mask`.
- **Deploy a change:** commit and push. Pages rebuilds in ~1 minute.

## Still missing

- `support@manasworn.com` only works once Cloudflare Email Routing is enabled on the zone.
