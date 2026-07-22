# AGENTS.md

## Project purpose

This repository contains a mobile-first, Korean-language travel guide for a family trip to Los Angeles from July 24 through August 3, 2026. It is a public static site deployed with GitHub Pages at `https://silver9204.github.io/2026-la-trip/`.

The guide is intended for quick use on smartphones and tablets during the trip. Preserve fast scanning, large touch targets, compact day-by-day navigation, and useful offline behavior.

## Repository structure

- `index.html`: app shell, global navigation, metadata, and versioned asset references.
- `app.js`: trip data, links, day routes, maps, reservation and travel-information content, and all view rendering.
- `styles.css`: the complete responsive visual system.
- `service-worker.js`: application-shell caching and offline support.
- `manifest.webmanifest`: installable web-app metadata.
- `assets/info/`: locally stored hotel and restaurant images.
- `README.md`: short public project description and privacy rules.

There is no build system or package manager. Do not add a framework or build step unless the user explicitly requests one. Keep the site deployable directly from the repository root.

## Content and UX rules

- Write user-facing copy in natural, concise Korean.
- Keep the current mobile-first card-and-timeline design and the warm green, cream, orange, and yellow palette.
- Treat `styles.css` as the shared design system. Reuse existing components before introducing new one-off styles.
- Keep all day pages at a comparable level of detail and use a consistent order: map, daily flow/timeline, place previews, practical notes, attractions or shopping/food details when relevant.
- Do not remove existing itinerary details, links, reservations, maps, or researched tips unless the user explicitly asks.
- Prefer improving incomplete sections over shortening other days to match them.
- Keep the four-item bottom navigation: Home, Schedule, Reservations, and Travel Info.
- Preserve hash-based navigation and browser back/forward behavior.
- Make interactive controls finger-friendly and accessible. Add meaningful `alt` text, labels, focus behavior, and adequate color contrast.
- Test narrow mobile layouts first. Avoid clipped cards, horizontal page overflow, tiny text, and headings that wrap awkwardly.
- Hotel and restaurant cards in Travel Info should include useful photography. Restaurant names should link to a Google Maps result for the restaurant name, not merely an address.
- Day maps are embedded in the site. Keep each map view tightly framed around that day's actual locations and route.

## Facts, links, and research

- Time-sensitive facts such as opening hours, ticket rules, parking procedures, attraction height limits, lounge access, prices, ratings, and transportation instructions must be verified against current authoritative sources before editing.
- Prefer official venue, airline, airport, hotel, university, theme-park, or retailer sources. Use reputable secondary sources only when an official source does not cover the needed detail.
- Keep source or booking links attached to the relevant day or reservation instead of collecting them without context.
- Use HTTPS image URLs from stable, credible sources. Prefer official media or Wikimedia Commons. If an external image is unreliable, download an appropriately licensed copy into `assets/` and record its source.
- Never invent Google Maps ratings or review counts. Treat them as time-sensitive and re-check them when the user requests current ranking information.

## Privacy and public-repository boundary

This repository is public. Never commit or display:

- passport, ESTA, payment-card, phone-number, or home-address details;
- reservation numbers, ticket barcodes, QR codes, or private confirmation PDFs;
- credentials, access tokens, cookies, or private API keys;
- personal family photos unless the user explicitly approves publication.

Tickets, vouchers, and confirmations must remain in Google Drive or the relevant booking service and be represented only by user-approved links. Do not copy private Drive document contents into the repository. Before committing, inspect the full diff for accidental personal information.

## Editing guidance

- Keep central constants such as `LINKS`, `DAY_MAPS`, `DAY_MAP_VIEWS`, visual metadata, and day data in `app.js` rather than scattering duplicate values through render functions.
- Preserve existing public links unless replacing them with a user-supplied or verified newer link.
- Escape or safely template any new dynamic content. Do not insert untrusted HTML.
- Keep locally generated QA files and imported source material out of Git. `.codex-qa/`, `.codex-trusted-read/`, `tmp/`, and `bridge/` are intentionally ignored.
- Make focused changes and do not reformat unrelated large data blocks.
- When a user-visible asset changes, increment the shared asset version in `index.html` and the `CACHE_NAME` version in `service-worker.js` together. This prevents stale GitHub Pages/PWA content. An instructions-only change such as this file does not require a cache bump.

## Validation before delivery

At minimum, run:

```powershell
node --check app.js
git diff --check
```

For user-visible changes, also serve the repository over local HTTP rather than opening `index.html` with `file://`, then verify:

- Home, Schedule, every Day page, Reservations, and Travel Info render without console errors.
- Bottom navigation, day picker, internal links, map embeds, horizontal card scrollers, and external booking links work.
- Layout remains readable at approximately 390 px phone width, tablet width, and desktop width.
- Images load, have useful alternative text, and do not collapse card heights when unavailable.
- The service worker receives the matching cache-version bump when applicable.

## Git and deployment workflow

- `origin` is `https://github.com/silver9204/2026-la-trip.git`.
- GitHub Pages deploys the repository root from `main`.
- Work on a focused branch and review the diff before committing. Prefer a pull request into `main` for web-based Codex work.
- Because merging to `main` publishes the live guide, do not combine unrelated experiments with requested changes.
- Before starting work, pull the latest remote changes. Before handing work between desktop Codex and web Codex, commit and push all intended changes and clearly state the active branch.
- Use concise Korean commit messages that describe the user-visible result.

## Product intent

This is a practical family travel companion, not a generic tourism article. Optimize for decisions people make while moving: where to go next, when to leave, where to park, what is reserved, which link to open, and what must not be forgotten. Preserve the user's shopping plans and personal reasons for selected stops unless asked to reconsider them.
