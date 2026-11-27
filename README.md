# PLUSWIN — website renewal preview

**Live preview: https://hkw8102.github.io/-/**

A 3-language (日本語 / 한국어 / English) preview build of the renewed **pluswin.net** site for
プラスウイン株式会社 (PLUSWIN Entertainment), Osaka — four compact pages that share one
header, footer, design system and language state.

## Pages

| Page | What it holds |
| --- | --- |
| `index.html` | Compact landing page: hero + key stats, 4 upcoming show cards with a detail drawer, 2-link action bar to the archive and the stand-flower guide, business overview (2 cards), hall overview (specs summary + access), company table, contact desks and official SNS. |
| `archive.html` | Past-event archive: all **55 shows**, year filter (All / 2026 / 2025 / 2024 / 2023) and a plain poster grid — artist, title, date and venue only. A show whose last date (`endDate` in `data.js`) has passed moves here automatically the next day (Japan time) and lands at the top by date; the year buttons are built from the years the archive actually contains, so a new year appears on its own. No detail drawer: details belong to the upcoming shows on `index.html`. |
| `hall.html` | PLUSWIN HALL OSAKA, in reading order with a sticky in-page shortcut bar: full specs + the official hall logo, a nine-photo hall gallery (`#photos`, lightbox, JP/KR/EN captions — standing barrier, FOH booth, full house, stage, seats, lobby, dressing rooms), access with a dark-mode SVG area map, the **2026-03-23 official rate card** with a note (JP/KR/EN) asking the visitor to send preferred dates through the enquiry form, a dark-mode SVG seating floor plan with a numbered facility legend, the house **equipment list** (`#equipment` — four tabs: sound 13 / lighting 12 / video 5 / backline 17, with the lighting plot PDF), a 12-question FAQ shown five at a time (`#faq`), the spec-sheet PDF download and the rental / site-visit enquiry form (`#rental-form`). |
| `stand.html` | Stand flower & balloon guide: the 6 placement rules (2×3 cards) and the embedded application form. |
| `estimate.html` | **Quote & application builder — unlisted.** No page links to it (it is kept `noindex`); the address is shared by hand with a client who has asked for a quote.  Pick the hall rate (weekday / weekend-holiday, 12 h or 6 h), the options and the organiser's details, and the page builds a tax-excluded quote plus the official one-page A4 **PLUSWINHALL 大阪 ご利用申込書** — the **PDF file** button writes that sheet straight to a one-page A4 PDF (html2canvas + jsPDF, served from `assets/js/vendor/`) and the **print** button opens the system print dialog. The input UI follows JP / KR / EN; the sheet itself is always the Japanese form. |

## Files

- `index.html`, `archive.html`, `hall.html`, `stand.html` — static pages (no build step)
- `styles.css` — design system & layout (shared + compact 4-page additions)
- `assets/js/data.js` — content data and the JP/KR/EN dictionary (`EVENTS` entries carry `startDate`/`endDate`/`sort` and the archive fields `archiveDate`/`archiveVenue`) 
- `assets/js/i18n-extra.js` — strings added for the compact 4-page layout
- `assets/js/site.js` — language state, page renderers, drawers, forms, navigation
- `assets/js/theme.js` — white / black theme switch, stored in `localStorage` (`pluswin.theme`)
- `assets/js/analytics.js` — GA4 events (see *Analytics* below)
- `assets/js/hall-extras.js` — FAQ content (12 items × 3 languages), equipment tabs and the availability calendar renderer (the calendar itself is not published on `hall.html` at the moment; the section is gone and the data file is no longer loaded)
- `assets/js/hall-availability.js` — date availability only (○ / △ / ×), generated from the hall's booking calendar (kept for when the calendar comes back)
- `assets/js/fields.js` — the date fields (a calendar written in the page language, so a Korean or English phone cannot draw the Japanese page's date in its own format) and the 24-hour time selects
- `assets/pdf/pluswin-hall-osaka-spec.pdf` — downloadable venue sheet, A4, 6 pages (specs, sound/lighting/video, backline & mics, floor plan, access, rate card)
- `assets/pdf/pluswin-hall-lighting-plot.pdf` — the hall's own lighting plot (2026.7.26), linked from the lighting tab and the page head
- `assets/css/estimate.css` — quote-builder layout and the fixed black-on-white A4 sheet (`@media print`)
- `assets/js/estimate.js` — rate table, weekday detection, option maths and the sheet renderer
- `assets/js/vendor/` — html2canvas-pro 2.6.5 (the maintained fork of html2canvas 1.4.1, whose table-cell text sits a few pixels low and cut the sheet's rules) and jsPDF 2.5.1, used by the direct PDF export (CDN is only a fallback)
- `assets/` — photos (cleaned hall photos in `assets/img/hall/`), event posters, official logo, subset webfonts
- the floor plan and area map are inline SVG in `hall.html` (palette-matched, labels translated by `data-i18n`); the print PDF still uses the light JPEG versions

Language switcher: **JP / KR / EN** in the header and footer. **Japanese is the site's main
language**: with no `?lang=` and no choice made by the visitor, every page opens in Japanese
whatever language the phone or browser is set to (a Korean phone used to open the whole site in
Korean). A language the visitor picks with the switcher is remembered in `localStorage`
(`pluswin.lang` + `pluswin.lang.chosen`) and the `?lang=ja|ko|en` query parameter keeps it while
moving between pages. Open `index.html` directly, or serve the folder with any static server.

## Theme — white (default) / black

One design system, two skins, one stylesheet. **White (ivory)** is the default for a first
visit and the no-JS fallback; **black (stage black)** is one tap away:

- the **☀ / ☾ pill** sits right of the JP / KR / EN switcher in the header (from 481 px wide;
  on phones the same control is the **ライト / ダーク** row inside the full-screen menu);
- `assets/js/theme.js` switches `[data-theme]` on `<html>` instantly (no reload), stores the
  choice in `localStorage` (`pluswin.theme`) and mirrors it in `?theme=dark|light`, so the
  skin follows the visitor from `index` → `hall` → `archive` → `stand` → `estimate`;
- a few lines of inline script in each `<head>` apply the stored skin **before the first
  paint**, so a page never flashes the other theme;
- `:root` holds the white tokens, `html[data-theme="dark"]` the black ones; the white-layer
  component rules are wrapped in `:where(html:not([data-theme="dark"]))`, which keeps their
  original specificity so each skin renders exactly as it did before the merge.
- `estimate.html`: the input panel follows the theme, but the A4 sheet (`#paper`) and the
  PDF / print output stay **white paper + black ink** in both skins.

Shows move on their own: after a show's last date (`endDate` in `assets/js/data.js`, Japan
time) the next day's page load takes it out of the home grid and puts it at the top of
`archive.html`. `?today=YYYY-MM-DD` (e.g. `?today=2026-12-21`) previews the site as it will
look on that date; without it, the visitor's real date in Japan is used.

## Content constraints

- Standing capacity **350** (not 500); seated 220 (rows A–W).
- No coin lockers for the audience — the lockers in the floor plan are inside dressing rooms 1 & 2 and are for performers only.
- Only **PLUSWIN HALL OSAKA** — no other halls, no vision / restaurant / affiliated artists /
  dance studio / artist management.
- Official `PLUSWIN ENTERTAINMENT` white + cyan logo in header, footer and favicon.
- Official SNS only: X (`@mh_klovers`) and Instagram (`@kloversxpluswin`) — no YouTube.

Fonts: Noto Sans JP / KR, subset to the characters used on the four pages (OFL).

## Analytics (GA4)

Every page loads `gtag.js` for **G-80L7MBMH2J** (in the `<head>`, `async`). Besides the
automatic `page_view`, `assets/js/analytics.js` reports the actions the hall cares about:

| Event | Fires on |
| --- | --- |
| `file_download` (`file_name`) | the hall spec PDF link on `hall.html` |
| `ticket_click` | ticket buttons and links to e+ / LivePocket (`link_domain`, `show_id`, `show_title`) |
| `outbound_click` | any other link that leaves the site (SNS, maps, tickets elsewhere) |
| `form_submit_rental` | rental / site-visit enquiry sent (`#rentalForm`) |
| `form_submit_stand` | stand-flower application sent (`#standForm`) |
| `estimate_pdf_save` / `estimate_pdf_open` / `estimate_pdf_share` / `estimate_print` | the four buttons in the estimate builder |
| `theme_toggle` (`theme: light|dark`) | the ☀ / ☾ switch |

All calls are guarded by `typeof gtag === "function"`, so with an ad-blocker or offline the
site behaves exactly as before.

## Enquiries

Both forms submit directly through FormSubmit — the hall rental form to
`hallrental@pluswin.jp`, the stand-flower form to `contact@pluswin.jp` — with a pre-filled
`mailto:` fallback to the same address if the request fails. The first submission to each new
address makes FormSubmit send a one-time activation email to it; messages to an address are
delivered only after that address's activation link has been opened once.

Contact addresses used on the site:

- `hallrental@pluswin.jp` — hall rental desk: rental form, FAQ box and rental notes on the hall page, HALL & RENTAL desk on the home page, venue lost-property note, hall spec PDF.
- `contact@pluswin.jp` — everything else: shows, tickets, stand flowers (form and note), production / other enquiries, site footer.
- the old `info@…` address — retired; it must not appear anywhere in the site or the PDF.

## Availability calendar

`assets/js/hall-availability.js` holds only the state per date (`o` open / `d` part of the day
booked, by consultation / `x` booked). It is produced by `work/gen_availability.py` from the
hall's booking calendar — no event titles, artists or client names are stored or shown.

This is a preview build — not the production site. Search indexing is disabled.
