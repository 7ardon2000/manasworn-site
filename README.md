# manasworn.com

Static site for Manasworn. One `index.html`, no build step, no dependencies.

## Deploy (one time)

1. **Create the repo** on GitHub: new **public** repo named `manasworn-site` under `7ardon2000`.
2. **Push this folder:**

   ```
   git remote add origin https://github.com/7ardon2000/manasworn-site.git
   git push -u origin main
   ```

3. **Turn on Pages:** repo → Settings → Pages → Source = *Deploy from a branch*,
   Branch = `main` / `(root)` → Save. Custom domain = `manasworn.com` (the `CNAME`
   file already sets this; the field should fill itself in).

4. **Cloudflare DNS** — add these on the `manasworn.com` zone, all with the
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
   **Enforce HTTPS**. You can switch Cloudflare's proxy back on afterwards — set
   SSL/TLS mode to **Full (strict)** if you do.

DNS + cert usually take 10–30 minutes.

## Editing

- **News:** copy an `<article>` block in `index.html` and put it at the top.
- **Links:** the `Elsewhere` grid and the two hero buttons. Every placeholder
  href is marked with a `FILL IN` comment.
- **Deploy a change:** commit and push. Pages rebuilds in ~1 minute.

## Still missing

- Real URLs for Steam / Discord / TikTok / YouTube / X.
- `og.png` (1200×630 key art) for social link previews — add the file, then put
  the `og:image` / `twitter:card` meta tags back in `<head>`.
- Video section — dropped for now.
