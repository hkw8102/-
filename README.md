# PLUSWIN — website renewal preview

**Live preview: https://hkw8102.github.io/-/**

A 3-language (日本語 / 한국어 / English) preview build of the renewed **pluswin.net** site for
プラスウイン株式会社 (PLUSWIN Entertainment), Osaka — four compact pages that share one
header, footer, design system and language state.

## Pages

| Page | What it holds |
| --- | --- |
| `index.html` | Compact landing page: hero + key stats, 4 upcoming show cards with a detail drawer, 2-link action bar to the archive and the stand-flower guide, business overview (2 cards), hall overview (specs summary + access), company table, contact desks and official SNS. |
| `archive.html` | Past-event archive: all **53 shows**, year filter (All / 2026 / 2025 / 2024 / 2023) and a plain poster grid — artist, title, date and venue only. No detail drawer: details belong to the upcoming shows on `index.html`. |
| `hall.html` | PLUSWIN HALL OSAKA: full specs, seating floor plan, step-by-step access from Nihonbashi Exit 2 and Namba with map, the **2026-03-23 official rate card**, options, 6 usage terms, the rental availability calendar (`#availability`, ○ / △ / ×), a 12-question FAQ (`#faq`), the spec-sheet PDF download and the rental / site-visit enquiry form (`#rental-form`). |
| `stand.html` | Stand flower & balloon guide: the 6 placement rules (2×3 cards) and the embedded application form. |

## Files

- `index.html`, `archive.html`, `hall.html`, `stand.html` — static pages (no build step)
- `styles.css` — design system & layout (shared + compact 4-page additions)
- `assets/js/data.js` — content data and the JP/KR/EN dictionary
- `assets/js/i18n-extra.js` — strings added for the compact 4-page layout
- `assets/js/site.js` — language state, page renderers, drawers, forms, navigation
- `assets/js/hall-extras.js` — FAQ content (12 items × 3 languages) and the availability calendar
- `assets/js/hall-availability.js` — date availability only (○ / △ / ×), generated from the hall's booking calendar
- `assets/pdf/pluswin-hall-osaka-spec.pdf` — downloadable venue sheet (specs, stage, floor plan, access, rate card)
- `assets/` — photos, event posters, hall floor plan & access map, official logo, subset webfonts

Language switcher: **JP / KR / EN** in the header and footer. The choice is kept in
`localStorage` (`pluswin.lang`) and in the `?lang=ja|ko|en` query parameter, so it survives
moving between pages. Open `index.html` directly, or serve the folder with any static server.

## Content constraints

- Standing capacity **350** (not 500); seated 220.
- Only **PLUSWIN HALL OSAKA** — no other halls, no vision / restaurant / affiliated artists /
  dance studio / artist management.
- Official `PLUSWIN ENTERTAINMENT` white + cyan logo in header, footer and favicon.
- Official SNS only: X (`@mh_klovers`) and Instagram (`@kloversxpluswin`) — no YouTube.

Fonts: Noto Sans JP / KR, subset to the characters used on the four pages (OFL).

## Enquiries

Both forms (hall rental, stand flowers) submit directly through FormSubmit
(`https://formsubmit.co/ajax/info@pluswin.jp`), with a pre-filled `mailto:info@pluswin.jp`
fallback if the request fails. The first submission to a new address makes FormSubmit send a
one-time activation email to `info@pluswin.jp`; messages are delivered once that link is opened.

## Availability calendar

`assets/js/hall-availability.js` holds only the state per date (`o` open / `d` part of the day
booked, by consultation / `x` booked). It is produced by `work/gen_availability.py` from the
hall's booking calendar — no event titles, artists or client names are stored or shown.

This is a preview build — not the production site. Search indexing is disabled.
