# Run report - Darcy Downs, 21 September 2026

## Status

Committed as v1.0. Not pushed and not live: the push and the first Cloudflare
connection are manual steps.

## Layout

A, tabbed. Five distinct bodies of work map straight onto tab panels, which is
also the fix for the 32-video scroll on her current page. Pet leads. There is no
timetable in the brief, so the hero carries no timetable card. B (single scroll)
was the other candidate and would have kept the long scroll.

One deliberate departure from the house grid law: the 9:16 clip grid uses fixed
columns (two on a phone, four from 760px) instead of the auto-fit template,
because auto-fit strands a single clip on its own row at mid widths. It cannot
overflow (`minmax(0,1fr)`). The text-card grids use the law-3 template as written.

## Verified

- `/` and `/offer/`: 13 widths from 320 to 1920 with the real fonts loaded. No
  overflow, single-word headings on one line, Playfair Display and Inter
  resolved, no request to her live host, no tracker.
- All five tab panels opened and checked for overflow at 320, 390, 768 and 1440.
  The gate only sees the default tab.
- `/original/`: layout clean at 13 widths.
- `wrangler deploy --dry-run` passes. Every local `href` and `src` resolves.
- Screenshots read at 390 and 1440 for all pages.

## Not verified, or not clean

- `/original/` is a frame, not a copy. The build machine could not reach
  canva.site. The gate reports the iframe as a reference to the live host; that
  is the fallback working as designed. Whether Canva permits framing was not
  testable. If it refuses, the strip's open-in-its-own-tab link is the remainder.
- Images are 2x upscaled crops from phone screenshots. Soft on a retina screen.
- The display face was identified by eye as Playfair Display.
- The email address comes from the search index text of her page, not from the
  current screenshots.

## Conflicts

- Results row: 411K likes and 41K comments beside 385,135 views. Likes cannot
  exceed views. Only views, accounts reached, saves and shares are on the page.
- The search index lists Rail Europe, Loop Earplugs, Workaway and Booking.com
  pieces that the current page no longer shows. Left off.
- Brand spellings: hers are "Any Van", "SunVitD3", "FreshPet". Captions keep
  hers; the brand list follows the logo where one is on her wall.

## Questions for the client

1. What are the right likes and comments figures, and what platform and period
   do the results cover?
2. Is Darcy0405ugc@gmail.com still the address for briefs?
3. Are the dog and the cat yours, and can the page say so?
4. Where are you based, and do you travel for shoots?
5. Rates or a rate-card request on the page? Turnaround and usage rights?
6. Can any testimonial carry a name or job title?
7. Which four pieces per category should lead? The demo picks one per brand.
8. Can you send the original video files and photographs?
9. Are the Rail Europe, Loop, Workaway and Booking.com pieces still yours to show?

## Skill notes

- `capture-site.js` exited 0 with `"note": "clean"` after saving the egress
  proxy's "host not in allowlist" page. It should fail when the response is a
  403 or the body is near-empty.
- `measure-font.js` fetches normal styles only. The Playfair Display bold italic
  was pulled from the same @fontsource package by hand.
- `demo-bar.html`: only the `<style>` and `<nav>` were inserted, not the
  instruction comment, which contains a literal marker and tags.
- `verify-layout.js` was run with an absolute `--dir`.
