# web-darcy-downs-ugc

Pitch demo for Darcy Downs, UGC creator. Three pages joined by a demo bar:

| Route | Page |
| --- | --- |
| `/` | The new one-page site, dressed in her own palette and typeface |
| `/original/` | Her current Canva page, shown in a frame of the live site |
| `/offer/` | The offer: tale of the tape, the two prices, the terms |

Every page carries `noindex,nofollow` and `robots.txt` disallows everything. A
pitch demo never reaches a search index.

## Structure

```
public/                 everything served - no build step
  index.html            the new site
  original/index.html   frame of her live page, with the reason stated
  offer/index.html      the offer
  404.html
  assets/css            site.css (new site + 404), offer.css
  assets/js             site.js - the brief form writes the email
  assets/img            stills, photographs and logos (see below)
  assets/video          the 16 clips in the work tabs (see below)
  fonts/                Playfair Display and Inter, self-hosted
  _headers  robots.txt  favicon.svg
work/brief.json         the sourced brief: every fact on the new site traces here
REPORT.md               the run report: layout, checks, questions for the client
wrangler.jsonc          assets-only Worker config
```

## Local development

```bash
npm install
npm run dev
```

## Deployment

Cloudflare Workers static assets. Once the repo is connected in the Cloudflare
dashboard (Workers & Pages, Create, Import a repository) every push to `main`
deploys. Check first with `npm run check`.

## External resources

- `/original/` frames `https://darcyugcportfolio.my.canva.site/my-portfolio`.
  It is the only reference to her live host and it is there on purpose: a clean
  copy could not be made from the machine this was built on.
- The brief form opens a `mailto:` to the address in the brief. Nothing is
  posted anywhere.

## Images and clips are placeholders

The 16 clips in the work tabs are the copies her Canva page plays, downloaded
by the owner on 1 October 2026 and re-encoded at 540x960 so each file stays
well under Cloudflare's 25 MiB limit. Each clip's poster is a frame of the clip
itself (`assets/video/*.webp`), and site.js lays one play button over it.

Every still, photograph and portrait is a crop from a phone screenshot of her
current page, upscaled 2x. They are hers, shown back to her in her own pitch,
and not cleared for anything beyond this demo. The finished build takes her
original files.

The 32 logos are the exception: they are the image files from her page itself,
saved from a browser on 22 September 2026, and shown whole. They are the
brands' own marks, used exactly as her page uses them, and not cleared for
anything beyond this demo either.
