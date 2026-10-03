# Run report - Darcy Downs, 21 September 2026

## Status

v1.3 released to `main` on 3 October 2026. Not yet live: the first Cloudflare
connection is a manual dashboard step. v1.0 shipped the two builds made before
this repository existed (the three-tab demo, then the offer page rewritten as
title-and-subtitle pairs, problem over fix); the site-pitch skill was updated to
build the offer that way from now on. v1.1 puts the logo files from her own
page on the brands wall, shown whole, and adds the domain line to the offer.
v1.2 is a proofreading pass (a claim the page could not back is gone, and the
pages, the brief and this report agree again) and puts her real clips in the
work tabs. v1.3 makes the clips sit properly: whole, sharp, one play button.

## v1.3 - the clips, fitted

- The owner saw the clips spill past their cards in Safari, a soft poster and
  a play button that did nothing. The card now keeps its clip inside it
  (`min-width:0`, overflow clipped) and the clip box is 9:16, the clips' own
  shape, so nothing is cropped.
- The posters were the old upscaled screenshot stills, with her page's play
  icon baked in, which is why clicking it did nothing. Each poster is now a
  sharp 540x960 frame of the clip itself, and the 16 old stills are gone.
- One real play button sits over each poster; pressing it starts the clip,
  pauses any other, and brings up the native controls. Without the script
  the clips keep their native controls.
- Verified: `wrangler deploy --dry-run` passes; the work tabs were rendered at
  320, 390, 768 and 1440 in Chromium: every clip sits inside its card, nothing
  overflows, every poster loads, and the button hands over to the controls.
  WebKit is not available on the build machine, so Safari itself was not run;
  the card now clips anything wider than itself, whatever the browser does.

## v1.2 - the proofreading pass and the clips

- "Four pieces in each, one brand apiece" is gone from `/` and from the offer's
  second fix. Her page has only three property brands, so the Property tab
  shows Merry Lakes twice, and the Photos tab holds six pieces. The lede now
  reads "Pick your corner." and the fix "One tap to the right corner."
- The offer's fourth fix title is five words, as the offer sheet asks ("Only
  figures that hold up"), and no longer leaves "up" alone on a second line at
  desktop widths. "My Portfolio" no longer splits across two lines.
- The current-site strip speaks to her ("Your live site"), as the rest of the
  pitch does. Three image descriptions on `/` are corrected ("thirty-second",
  "mid-repair", and a stray "reading" dropped).
- The saved page (kept with the v1.1 release, in `prompt text/2/`) confirms
  the email: both Get in touch buttons are mailto: links to
  Darcy0405ugc@gmail.com. The brief now marks it confirmed and the
  question about it is gone.
- The README no longer calls the logos hers; they are the brands' own marks, as
  the brief records. The questions below now match the brief, with the four
  unnamed marks and the brand spellings added.
- The work tabs now play. The owner downloaded the 32 videos her page plays
  (1 October 2026); each of the 16 cards was matched to its video frame by
  frame, and every match was checked by eye. They are re-encoded at 540x960
  (84 MB in all, the largest 17 MB, under Cloudflare's 25 MiB per-file limit),
  load only when played, and use the old still as the poster. The demo note
  now says what they are.
- Verified: `wrangler deploy --dry-run` passes; all four pages and all five tab
  panels were rendered at 320, 390, 768 and 1440 with the real fonts. Every
  local `href` and `src` resolves, every image loads at its stated size, and
  nothing overflows. The offer's card titles were measured from 320 to 1920.
  The current-site frame still cannot be loaded from the build machine.

## v1.1 - the logo wall and the domain line

- The owner supplied the live page saved from a browser (My_Portfolio.html and
  its files folder, 22 September 2026). Its Trusted-by section holds 32 image
  files; each one was matched to its tile on her wall using IMG_0391, and the
  wall on `/` shows them in that order, each logo whole. Her page clips every
  logo into a circle, which is where the cut-off words came from.
- Four of the 32 marks carry no wordmark (an owl face, an H, a PK monogram, a
  teal loop). They are on the wall without a name and the question is in the
  brief. Beco, unreadable in the screenshot, is now named.
- The offer's third pair kept its problem ("Logos cropped mid-word") and its
  fix now says every logo is shown whole, which the first tab bears out.
- The offer's last pair says DarcyDowns.com is available for £9.99 a year on
  GoDaddy. Source: the owner, 22 September 2026. Domain prices and availability
  move; re-check before the pitch is sent.
- Verified: `wrangler deploy --dry-run` passes, every local `href` and `src`
  resolves, and the wall and the tale of the tape were rendered at 320, 390 and
  1440 with the real fonts: no horizontal overflow, every logo file loads. The
  current-site frame is unchanged and still cannot be loaded from the build
  machine.

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
- The headless browser here cannot play H.264, so playback was not watched in a
  browser; every clip decodes cleanly end to end and every file and poster
  resolves.
- The display face was identified by eye as Playfair Display.

## Conflicts

- Results row: 411K likes and 41K comments beside 385,135 views. Likes cannot
  exceed views. Only views, accounts reached, saves and shares are on the page.
- The search index lists Rail Europe, Loop Earplugs, Workaway and Booking.com
  pieces that the current page no longer shows. Left off.
- Brand spellings: hers are "Any Van", "SunVitD3", "FreshPet". Captions and
  format cards keep hers; the logo and photo descriptions and the page
  description follow each brand's own.

## Questions for the client

1. What are the right likes and comments figures, and what platform and period
   do the results cover?
2. Are the dog and the cat yours, and can the page say so?
3. Where are you based, and do you travel for shoots?
4. Rates or a rate-card request on the page? Turnaround and usage rights?
5. Can any testimonial carry a name or job title?
6. Which four pieces per category should lead? The demo picks one per brand
   where it can; Property has three brands, so Merry Lakes shows twice.
7. Can you send the original video files and photographs?
8. Are the Rail Europe, Loop, Workaway and Booking.com pieces still yours to show?
9. Which brands are the four unnamed marks on the logo wall: the owl face, the
   H, the PK monogram and the teal loop?
10. Happy for brand names to follow each brand's own spelling (AnyVan,
    SunVit-D3, Freshpet)?

## Skill notes

- `capture-site.js` exited 0 with `"note": "clean"` after saving the egress
  proxy's "host not in allowlist" page. It should fail when the response is a
  403 or the body is near-empty.
- `measure-font.js` fetches normal styles only. The Playfair Display bold italic
  was pulled from the same @fontsource package by hand.
- `demo-bar.html`: only the `<style>` and `<nav>` were inserted, not the
  instruction comment, which contains a literal marker and tags.
- `verify-layout.js` was run with an absolute `--dir`.
- `render_check.py` (cloudflare-static-site): headless Chromium lays out at a
  500px minimum whatever `--window-size` asks for, so its 390-wide shots crop a
  500px layout and look overflowed. Measured at exact 320 and 390 viewports with
  Playwright instead: no overflow.
