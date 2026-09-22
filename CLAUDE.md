# CLAUDE.md

Standing policy for this repository. Read it before making any change here.

## What this repo is

A Cloudflare Workers static-assets site. Everything served lives in `public/`
and there is no build step - the files in that directory are the site. The repo
is connected to Cloudflare Workers Builds, so **every push to `main` deploys to
production**.

```
public/            everything served
  index.html         the new site
  original/          frame of her live page
  offer/             the offer
  404.html
  fonts/             self-hosted Playfair Display + Inter
  assets/css|js|img
  _headers         security + caching headers
  robots.txt
wrangler.jsonc     assets-only config, no Worker script
package.json       wrangler devDependency + dev/deploy scripts
```

## Local development

```bash
npm install
npm run dev          # wrangler dev
```

## Verification - before every push to main

1. `npx wrangler deploy --dry-run`
2. Serve `public/`, render it with headless Chromium, and inspect the
   screenshots: styles applied, fonts loaded, layout intact.

Never leave pushed work unverified or half-finished. Work in small, complete
batches: implement, verify, commit, push.

## Git and release workflow

- Before committing: `git config user.name "Fid" && git config user.email "fid_kk@proton.me"`
- Develop on the working branch and push there first. Release verified work by
  fast-forwarding `main` onto it and pushing `main`.
- Every push to `main` is a release. Versions are an ascending `vMAJOR.MINOR`
  sequence starting at `v1.0`; every push bumps the minor regardless of size. A
  major bump is reserved for a ground-up overhaul.
- With every push to `main`, provide release-tag text in the reply, in exactly
  this shape. The owner creates the GitHub release manually - **never push tags**:

  ```
  Tag: v<next>  —  Title: <five to nine words, plain and evocative>
  Description: <one to three sentences of editorial prose describing what changed
  from the owner's point of view — outcomes, not implementation. No bullet lists,
  no jargon, no file names.>
  ```

- Append the release line to the ledger below as part of the same push.
- Commit messages: descriptive imperative first line (what the change does, not
  "update X"), then a short prose body; dash bullets are fine there. One commit
  per coherent piece of work; several may share a push, but each push gets
  exactly one version entry.
- Never include model names, AI attribution trailers, session links, or other
  tooling identifiers in commit messages, titles, or code.

## What the pages are

A site-pitch demo for Darcy Downs: `/` the new one-page site, `/original/` a
frame of her live Canva page, `/offer/` the offer. Every fact on `/` traces to an
entry in `work/brief.json`; nothing goes on the page that the brief cannot
source, and a missing fact is a question for the client (see `REPORT.md`), never
a guess. Every page stays `noindex,nofollow` and `robots.txt` stays disallow-all
for as long as this is a pitch. The numbers and terms on `/offer/` come from the
site-pitch offer sheet and are not re-invented here.

Do not tidy markup, rename classes, rewrite copy, or modernise CSS unless asked -
changes to the design are their own release, requested deliberately.

## Prompt archive

`prompt text/` holds the records for the version currently in service -
nothing else. Shipping version N replaces the folder's contents wholesale,
in the same push that releases the version: remove the previous version's
folder(s) and add `prompt text/N/` containing `input.txt` (the prompt, byte
for byte), `output.txt` (the reply that shipped it, byte for byte),
`ai model.txt` (three lines: Anthropic / Claude / Fable 5 Max unless the
owner directs otherwise) and any input images or files the owner provided.
The files are owner-supplied records: never edit, reformat, trim or
regenerate them.

## Release ledger

| Version | Title | Description |
| --- | --- | --- |
| v1.0 | Darcy's work, readable on a phone | A three-tab pitch for Darcy Downs: a new one-page site in her own colours with the work sorted into five tabs and pet brands first, her current page beside it for comparison, and the offer with its two prices. Every figure and quote on the new page comes from her own site, and the ones that did not add up were left off. |
| v1.1 | The offer, read in under a minute | Each problem with the current site is now a short title and one line, with the fix directly beneath it in the same shape. The rest of the offer page is trimmed to match, so the whole pitch reads in under a minute. |
