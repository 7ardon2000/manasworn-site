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

- **News:** copy an `<article>` block in `index.html` and put it at the top.
- **Links:** the `Elsewhere` grid and the two hero buttons. Every placeholder
  href is marked with a `FILL IN` comment.
- **Deploy a change:** commit and push. Pages rebuilds in ~1 minute.

## Still missing

- Real URLs for Steam / Discord / TikTok / YouTube / X (all `href="#"` for now).
- `support@manasworn.com` is wired into the contact link; it only works once
  Cloudflare Email Routing is enabled on the zone (Email -> Email Routing).
- `og.png` (1200×630 key art) for social link previews — add the file, then put
  the `og:image` / `twitter:card` meta tags back in `<head>`.
- Video section — dropped for now.
