# manasworn.com

Static site for Manasworn. One `index.html`, no build step, no dependencies.

## Deploy

Repo, push and GitHub Pages are already done. The only step left is DNS.

**Cloudflare** — on the `manasworn.com` zone, add these records with the
proxy **OFF (grey cloud)**:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | 7ardon2000.github.io     |

Grey cloud matters: GitHub can only issue the Let's Encrypt certificate if it
can reach the domain directly. Once Pages shows the cert as issued, tick
**Enforce HTTPS** (Settings -> Pages). You can switch Cloudflare's proxy back
on afterwards - set SSL/TLS mode to **Full (strict)** if you do.

DNS + cert usually take 10-30 minutes.

## Editing

- **News:** copy an `<article>` block in `index.html` and put it at the top.
- **Links:** the `Elsewhere` grid and the two hero buttons. Every placeholder
  href is marked with a `FILL IN` comment.
- **Deploy a change:** commit and push. Pages rebuilds in ~1 minute.

## Still missing

- Real URLs for Steam / Discord / TikTok / YouTube / X (all `href="#"` for now).
- `og.png` (1200×630 key art) for social link previews — add the file, then put
  the `og:image` / `twitter:card` meta tags back in `<head>`.
- Video section — dropped for now.
