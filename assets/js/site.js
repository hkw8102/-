/* ============================================================
   PLUSWIN — shared behaviour for the 4-page site
   (data.js: content + translations, i18n-extra.js: extra strings)
   ============================================================ */

let lang = "ja";
const state = { openId: null, pastYear: "all" };

/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function dictLookup(dict, key) {
  if (dict[key] !== undefined) return dict[key];
  if (key.indexOf(".") !== -1) {
    const parts = key.split(".");
    let cur = dict;
    for (const p of parts) {
      if (cur == null) return undefined;
      cur = cur[p];
    }
    if (cur !== undefined) return cur;
  }
  return undefined;
}

const t = (key) => {
  const v = dictLookup(T[lang], key);
  if (v !== undefined) return v;
  const fallback = dictLookup(T.ja, key);
  return fallback !== undefined ? fallback : key;
};

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* every poster file carries the build tag, so a browser that kept an older
   copy of a poster (the earlier cropped ones) asks for the new file instead */
const ASSET_V = "20261128l";
const vurl = (u) => (u ? u + (u.indexOf("?") === -1 ? "?" : "&") + "v=" + ASSET_V : u);

function monthName(m) {
  return ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][m - 1];
}

const pageKey = () => (document.body && document.body.dataset.page) || "home";

/* ---------- schedule: today in Japan, and what that does to the shows ----------
   A show stays in the UPCOMING grid until its last date has passed; from the
   next day (Japan time, no DST) it leaves the grid on its own and drops to the
   top of the past archive with the other archive entries. Nothing has to be
   edited by hand when a run finishes — only `endDate` on the event matters. */
function tokyoToday() {
  // ?today=YYYY-MM-DD previews the site as it will look on another day
  // (e.g. ?today=2026-12-21 shows KEN already moved to the archive).
  // Visitors without the parameter always get the real date in Japan.
  try {
    const q = new URLSearchParams(window.location.search).get("today");
    if (q && /^\d{4}-\d{2}-\d{2}$/.test(q)) return q;
  } catch (err) { /* ignore */ }
  const now = new Date();
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit"
    }).formatToParts(now);
    const pick = (type) => (parts.find((p) => p.type === type) || {}).value;
    const y = pick("year"), m = pick("month"), d = pick("day");
    if (y && m && d) return `${y}-${m}-${d}`;
  } catch (err) { /* fall through to the fixed offset */ }
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

function toArchiveItem(e) {
  const end = e.endDate || "";
  return {
    key: "auto-" + e.id,
    artist: e.artist || e.title,
    title: e.title,
    date: e.archiveDate || end.replace(/-/g, "."),
    sort: e.sort || end,
    year: end.slice(0, 4),
    venue: e.archiveVenue || (e.venues || []).map((v) => v.name).join(" / "),
    poster: e.poster || "",
    url: e.ticket || "",
    archive: e.archive
  };
}

/* ---------- recurring runs (e.g. a monthly series) ----------
   An event with `showDates` stays as ONE card for the whole series. Its date
   stamp moves to the next show still ahead (Japan time), and `posters` swaps
   the artwork when a new month starts — so nothing is edited by hand between
   months. The card leaves the grid after the last date, like any other show. */
(function applyNextShow() {
  const today = tokyoToday();
  const WD = { ja: "日月火水木金土", ko: "일월화수목금토", en: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] };
  EVENTS.forEach((e) => {
    if (!Array.isArray(e.showDates) || !e.showDates.length) return;
    const list = e.showDates.slice().sort();
    const next = list.find((d) => d >= today) || list[list.length - 1];
    const [y, m, d] = next.split("-").map(Number);
    const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    e.year = y; e.month = m; e.day = d;
    e.dateShort = String(m).padStart(2, "0") + "." + String(d).padStart(2, "0");
    e.weekday = { ja: WD.ja[wd], ko: WD.ko[wd], en: WD.en[wd] };
    e.startDate = next;
    if (Array.isArray(e.posters)) {
      e.posters.forEach((p) => { if (p.from <= next) e.poster = p.src; });
    }
  });
})();

const SCHEDULE = (() => {
  const today = tokyoToday();
  const active = [];
  const finished = [];
  EVENTS.forEach((e) => {
    const end = e.endDate || "";
    if (end && end < today) finished.push(e);
    else active.push(e);
  });
  active.sort((a, b) => ((a.startDate || "") < (b.startDate || "") ? -1 : (a.startDate || "") > (b.startDate || "") ? 1 : 0));
  return { today: today, active: active, finished: finished };
})();

const ACTIVE_EVENTS = SCHEDULE.active;

/* past archive = the hand-kept list, plus every show whose last date has passed */
const ARCHIVE = PAST.concat(
  SCHEDULE.finished
    .map(toArchiveItem)
    .filter((p) => !PAST.some((q) => q.key === p.key || (q.sort === p.sort && q.title === p.title)))
);

/* ---------- static translation pass ---------- */
function applyStatic() {
  const dict = T[lang];

  $$("[data-i18n]").forEach((el) => {
    const val = dictLookup(dict, el.getAttribute("data-i18n"));
    if (val === undefined) return;
    if (val.indexOf("<") !== -1) el.innerHTML = val;
    else el.textContent = val;
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const val = dictLookup(dict, el.getAttribute("data-i18n-ph"));
    if (val !== undefined) el.setAttribute("placeholder", val);
  });
  // labels that live in attributes (theme switch, icon-only controls)
  $$("[data-i18n-aria]").forEach((el) => {
    const val = dictLookup(dict, el.getAttribute("data-i18n-aria"));
    if (val !== undefined) el.setAttribute("aria-label", val);
  });
  $$("[data-i18n-title]").forEach((el) => {
    const val = dictLookup(dict, el.getAttribute("data-i18n-title"));
    if (val !== undefined) el.setAttribute("title", val);
  });

  const key = pageKey();
  document.title = t("meta." + key + "Title");
  const meta = $('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta." + key + "Desc"));
  const ogT = $('meta[property="og:title"]');
  if (ogT) ogT.setAttribute("content", document.title);
  const ogD = $('meta[property="og:description"]');
  if (ogD) ogD.setAttribute("content", t("meta." + key + "Desc"));

  $$("[data-lang-btn]").forEach((b) => {
    b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang ? "true" : "false");
  });
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
  renderArchiveFilters();
}

/* ---------- internal links keep the selected language ---------- */
function langHref(href) {
  if (!href || /^(mailto:|tel:|https?:|javascript:|#)/i.test(href)) return null;
  if (!/^[a-z0-9_-]+\.html([?#]|$)/i.test(href) && !/^\.?\/?(index\.html)?([?#]|$)/i.test(href)) return null;
  if (/[?&]lang=/.test(href)) return href.replace(/([?&])lang=[a-z]{2}/, "$1lang=" + lang);
  const hashAt = href.indexOf("#");
  const hash = hashAt === -1 ? "" : href.slice(hashAt);
  let path = hashAt === -1 ? href : href.slice(0, hashAt);
  if (!path) path = "index.html";
  const sep = path.indexOf("?") === -1 ? "?" : "&";
  return path + sep + "lang=" + lang + hash;
}

function localizeLinks() {
  $$("a[href]").forEach((a) => {
    const next = langHref(a.getAttribute("href"));
    if (next) a.setAttribute("href", next);
  });
}

/* ---------- renderers: home ---------- */
function eventCard(e) {
  const soon = e.status === "soon";
  const cancel = e.cancelBadge ? `<span class="evc-cancel">${esc(e.cancelBadge[lang])}</span>` : "";
  const inBody = e.stampPos === "body";
  const stamp = `<span class="evc-stamp${inBody ? " is-body" : ""}"><b>${monthName(e.month)}</b><i>${String(e.day).padStart(2, "0")}</i><em>${esc(e.weekday[lang])}</em></span>`;
  return `
    <article class="evc" data-id="${e.id}">
      <button class="evc-media${e.stampPos && !inBody ? " is-stamp-" + e.stampPos : ""}" type="button" data-open="${e.id}" style="--poster:url('${vurl(e.poster)}');aspect-ratio:4/5" aria-label="${esc(e.title)} — ${t("events.detail")}">
        <img src="${vurl(e.poster)}" alt="${esc(e.title)}" loading="lazy" decoding="async" style="object-fit:contain">
        <span class="evc-status${soon ? " is-soon" : ""}">${soon ? t("events.soon") : t("events.onsale")}</span>
        ${cancel}
        ${inBody ? "" : stamp}
      </button>
      <div class="evc-body">
        ${inBody ? `<div class="evc-meta">${stamp}</div>` : ""}
        <p class="evc-city">${esc(e.cityLabel)}</p>
        <h3 class="evc-title"><button type="button" data-open="${e.id}">${esc(e.title)}</button></h3>
        <p class="evc-venue">${esc(e.venueShort[lang])}</p>
        <p class="evc-price">${esc(e.priceLabel[lang])}</p>
        <div class="evc-actions">
          <a class="evc-btn is-solid" href="${e.ticket}" target="_blank" rel="noopener">${t("events.ticket")}</a>
          <button class="evc-btn" type="button" data-open="${e.id}">${t("events.detail")}</button>
        </div>
      </div>
    </article>`;
}

function renderEvents() {
  const grid = $("#eventGrid");
  if (!grid) return;
  if (!ACTIVE_EVENTS.length) {
    grid.innerHTML = `<p class="sec-desc evc-empty" style="grid-column:1 / -1;text-align:center;margin:0 auto;padding:40px 16px 32px">${esc(t("events.empty"))}</p>`;
    return;
  }
  grid.innerHTML = ACTIVE_EVENTS.map(eventCard).join("");
}

/* the newest archive posters as one small strip under the events grid, so the
   past shows are visible on the home page; it follows the archive by itself */
function renderArchiveStrip() {
  const wrap = $("#archiveThumbs");
  if (!wrap) return;
  const newest = ARCHIVE_LIST
    .filter((p) => p.poster)
    .slice()
    .sort((a, b) => (a.sort < b.sort ? 1 : a.sort > b.sort ? -1 : 0))
    .slice(0, 5);
  wrap.innerHTML = newest
    .map((p) => `<img src="${vurl(p.poster)}" alt="" title="${esc(p.artist)} — ${esc(p.title)}" loading="lazy" decoding="async">`)
    .join("");
}

function renderPillars() {
  const wrap = $("#pillars");
  if (!wrap) return;
  wrap.innerHTML = PILLARS.map((p) => `
    <article class="pillar is-compact">
      <span class="pillar-num">${p.num}</span>
      <h3>${esc(p.en)}<span>${esc(p.title[lang])}</span></h3>
      <p>${esc(p.desc[lang])}</p>
      <div class="pillar-tags">${p.tags[lang].map((x) => `<span>${esc(x)}</span>`).join("")}</div>
    </article>`).join("");
}

function renderNextChip() {
  const e = ACTIVE_EVENTS[0];
  const chip = $("#nextChip");
  if (!chip) return;
  if (!e) {
    chip.style.display = "none";
    chip.innerHTML = "";
    return;
  }
  chip.style.display = "";
  chip.innerHTML = `
    <span class="next-chip-label">${t("hero.next")}</span>
    <span class="next-chip-date">${e.dateShort}</span>
    <span class="next-chip-title">${esc(e.title)}</span>
    <span class="next-chip-venue">${esc(e.venueShort[lang])}</span>`;
}

/* the show count in the hero comes from the archive itself, so it grows
   on its own as soon as a show has finished (55 → 56 → …) */
function renderShowCount() {
  const el = $("#heroShows");
  if (el) el.textContent = ARCHIVE.length + "+";
}

/* ---------- renderers: archive ---------- */
function archiveYears() {
  const years = [];
  ARCHIVE_LIST.forEach((p) => {
    const y = String(p.year);
    if (years.indexOf(y) === -1) years.push(y);
  });
  return years.sort((a, b) => b.localeCompare(a));
}

/* entries marked `archive: false` (e.g. a monthly series that is still running)
   still count toward the show total in the hero, but are not listed in the archive */
const ARCHIVE_LIST = ARCHIVE.filter((p) => p.archive !== false);

function pastFiltered() {
  const all = ARCHIVE_LIST
    .slice()
    .sort((a, b) => (a.sort < b.sort ? 1 : a.sort > b.sort ? -1 : 0));
  if (state.pastYear === "all") return all;
  return all.filter((p) => String(p.year) === String(state.pastYear));
}

/* the year buttons come from the archive itself, so a new year (2027, …) appears
   on its own as soon as a show of that year has finished */
function renderArchiveFilters() {
  const years = archiveYears();
  if (state.pastYear !== "all" && years.indexOf(String(state.pastYear)) === -1) state.pastYear = "all";
  const wrap = $("#pastFilters");
  if (!wrap) return;
  const mk = (val, label) =>
    `<button type="button" class="filter${String(val) === String(state.pastYear) ? " is-active" : ""}" data-past-filter="${esc(val)}">${esc(label)}</button>`;
  wrap.innerHTML = mk("all", t("events.pastAll")) + years.map((y) => mk(y, y)).join("");
}

function renderArchive() {
  const grid = $("#pastGrid");
  const all = pastFiltered();
  const counts = [document.getElementById("pastCount"), document.getElementById("archiveCount")];
  if (!grid) {
    counts.forEach((c) => { if (c) c.textContent = String(ARCHIVE_LIST.length); });
    return;
  }
  grid.innerHTML = all.map((p) => {
    const poster = p.poster
      ? `<div class="arch-poster" data-poster="${vurl(p.poster)}"><img src="${vurl(p.poster)}" alt="${esc(p.artist)} — ${esc(p.title)}" loading="lazy" decoding="async"></div>`
      : `<div class="arch-poster"><span class="arch-typo-inner"><span class="arch-typo-mark" aria-hidden="true"></span><span class="arch-typo-name">${esc(p.artist)}</span><span class="arch-typo-year">${esc(p.year)}</span></span></div>`;
    return `
      <article class="arch-card${p.poster ? "" : " is-typo"}">
        ${poster}
        <div class="arch-info">
          <h4 class="arch-artist">${esc(p.artist)}</h4>
          <p class="arch-title">${esc(p.title)}</p>
          <p class="arch-meta"><span>${esc(p.date)}</span><span class="arch-venue">${esc(p.venue)}</span></p>
        </div>
      </article>`;
  }).join("");
  /* the blurred backdrop reuses the poster only after the lazy <img> has loaded,
     so posters further down the page are not all downloaded on first open */
  grid.querySelectorAll(".arch-poster[data-poster] img").forEach((img) => {
    const box = img.parentNode;
    const set = () => box.style.setProperty("--poster", "url('" + box.getAttribute("data-poster") + "')");
    if (img.complete && img.naturalWidth) set();
    else img.addEventListener("load", set, { once: true });
  });
  counts.forEach((c) => { if (c) c.textContent = String(all.length); });
}

/* ---------- renderers: stand flowers ---------- */
function renderStandRules() {
  const html = STAND_RULES.map((r, i) => `
    <li>
      <span class="sr-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="sr-body"><b class="sr-t">${esc(r[lang].t)}</b><p class="sr-d">${esc(r[lang].d)}</p></div>
    </li>`).join("");
  ["#standRules", "#standFormRules"].forEach((sel) => {
    const el = $(sel);
    if (el) el.innerHTML = html;
  });
}

/* ---------- renderers: food, drink & gifts ---------- */
function renderGiftGuide() {
  const wrap = $("#giftGuide");
  if (!wrap) return;
  wrap.innerHTML = GIFT_GUIDE.map((g) => {
    const c = g[lang] || g.ja;
    const lists = g.kind === "ok"
      ? `<div>
           <p class="gift-sub">${esc(c.okHead)}</p>
           <ul class="gift-list is-ok">${c.ok.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
         </div>
         <div>
           <p class="gift-sub">${esc(c.ngHead)}</p>
           <ul class="gift-list is-ng">${c.ng.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
         </div>`
      : `<div>
           <p class="gift-sub">${esc(c.liHead)}</p>
           <ul class="gift-list">${c.li.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
         </div>`;
    return `
      <article class="gift-card">
        <div class="gift-head">
          <span class="gift-badge is-${g.kind}">${esc(c.badge)}</span>
        </div>
        <h3 class="gift-t">${esc(c.t)}</h3>
        <p class="gift-d">${esc(c.d)}</p>
        ${lists}
      </article>`;
  }).join("");
}

/* ---------- drawers ---------- */
function openRoot(id) {
  const root = $(id);
  if (!root) return;
  const sc = $(".drawer-scroll", root);
  if (sc) sc.scrollTop = 0;
  root.classList.add("is-open");
  root.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  const drawer = $(".drawer", root);
  setTimeout(() => drawer && drawer.focus(), 60);
}

function closeDrawer() {
  const root = $("#drawerRoot");
  if (!root) return;
  root.classList.remove("is-open");
  root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  state.openId = null;
}

function guideMarkup() {
  return `
      <div class="dr-section dr-guide">
        <h4>${t("guide.title")}</h4>
        <p class="dr-guide-lead">${t("guide.lead")}</p>
        <div class="guide-list">
          ${GUIDES.map((g, i) => `
            <details class="guide-item">
              <summary><span class="guide-num">${String(i + 1).padStart(2, "0")}</span><b>${esc(g[lang].t)}</b><i aria-hidden="true"></i></summary>
              <ul>${g[lang].li.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            </details>`).join("")}
        </div>
      </div>`;
}

function standHintMarkup() {
  return `
      <div class="stand-hint">
        <div>
          <b>${t("stand.hintTitle")}</b>
          <span>${t("stand.hintText")}</span>
        </div>
        <a class="btn btn-line btn-sm" href="stand.html?lang=${lang}">${t("stand.ctaShort")}</a>
      </div>`;
}

function openDrawer(id) {
  const e = EVENTS.find((x) => x.id === id);
  if (!e) return;
  const content = $("#drawerContent");
  if (!content) return;
  state.openId = id;
  const addrKey = lang === "ko" ? "addrKo" : lang === "en" ? "addrEn" : "addrJa";
  const cancel = e.cancelBadge ? `<span class="dr-cancel">${esc(e.cancelBadge[lang])}</span>` : "";
  content.innerHTML = `
    <div class="dr-hero" style="--poster:url('${vurl(e.poster)}')"><figure class="dr-hero-frame"><img src="${vurl(e.poster)}" alt="${esc(e.title)}"></figure>${cancel}</div>
    <div class="dr-body">
      <div class="dr-kicker">
        <span class="ev-city">${esc(e.cityLabel)}</span>
        <span class="ev-status ${e.status === "soon" ? "is-soon" : ""}">${e.status === "soon" ? t("events.soon") : t("events.onsale")}</span>
      </div>
      <h3 class="dr-title" id="drawerTitle">${esc(e.title)}</h3>
      <p class="dr-sub">${esc(e.sub[lang])}</p>

      <div class="dr-section">
        <h4>${t("labels.venue")}</h4>
        <ul class="dr-list">
          ${e.dates.map((d) => `<li>${esc(d[lang])}</li>`).join("")}
        </ul>
      </div>

      <div class="dr-section">
        <h4>${t("labels.sessions")}</h4>
        <div class="dr-sessions">
          ${e.sessions.map((s) => `
            <div class="dr-session">
              <div class="dr-session-top">
                <span class="dr-session-name">${esc(s.name[lang])}</span>
                <span class="dr-session-price">${esc(s.price)}</span>
              </div>
              <div class="dr-session-time">${t("labels.open")} ${s.open} / ${t("labels.start")} ${s.start}</div>
              <div class="dr-session-note">${esc(s.seat[lang])}${s.note ? " — " + esc(s.note[lang]) : ""}</div>
            </div>`).join("")}
        </div>
      </div>

      <div class="dr-section">
        <h4>${t("labels.notes")}</h4>
        <ul class="dr-list">${e.notes.map((n) => `<li>${esc(n[lang])}</li>`).join("")}</ul>
      </div>

      <div class="dr-section">
        <h4>${t("labels.access")}</h4>
        <ul class="dr-list">
          ${e.venues.map((v) => `<li>${esc(v.name)} — ${esc(v[addrKey])} <a class="link-arrow" style="margin-left:8px" href="${v.map}" target="_blank" rel="noopener">MAP</a></li>`).join("")}
        </ul>
      </div>

      ${guideMarkup()}
      ${standHintMarkup()}

      <div class="dr-actions">
        <a class="btn btn-solid" href="${e.ticket}" target="_blank" rel="noopener">${t("events.ticket")}
          <svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
        </a>
        <a class="btn btn-line" href="${e.venues[0].map}" target="_blank" rel="noopener">${t("events.access")}</a>
      </div>
      <p class="dr-note">${esc(e.ticketNote[lang])}　—　${esc(e.priceLabel[lang])}</p>
    </div>`;

  openRoot("#drawerRoot");
}

/* ---------- language ---------- */
function updateUrl() {
  if (window.location.protocol === "file:") return;
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  } catch (err) { /* ignore */ }
}

function renderPage() {
  renderEvents();
  renderArchive();
  renderArchiveStrip();
  renderShowCount();
  renderPillars();
  renderNextChip();
  renderStandRules();
  renderGiftGuide();
  if (typeof renderHallExtras === "function") renderHallExtras();
}

function setLang(next) {
  if (!LANGS.includes(next)) next = "ja";
  lang = next;
  try {
    localStorage.setItem(LANG_KEY, lang);
    localStorage.setItem(LANG_KEY + ".chosen", "1");
  } catch (err) { /* ignore */ }
  applyStatic();
  renderPage();
  if (state.openId) openDrawer(state.openId);
  localizeLinks();
  updateUrl();
  document.dispatchEvent(new CustomEvent("pw:lang", { detail: { lang: lang } }));
}

function initialLang() {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q && LANGS.includes(q.toLowerCase())) return q.toLowerCase();
  /* Japanese is the site's main language: a visitor who has not pressed a
     language button sees Japanese, whatever language the phone or browser is
     set to (a Korean phone used to open the whole site in Korean). Once a
     visitor has chosen a language themselves, that choice is kept. */
  try {
    const chosen = localStorage.getItem(LANG_KEY + ".chosen");
    const saved = localStorage.getItem(LANG_KEY);
    if (chosen === "1" && saved && LANGS.includes(saved)) return saved;
  } catch (e) { /* private mode */ }
  return "ja";
}

/* ---------- forms ----------
   Both enquiries are sent by a real HTML form POST to FormSubmit in a new tab
   (hall rental → https://formsubmit.co/hallrental@pluswin.jp,
    stand flowers → https://formsubmit.co/contact@pluswin.jp):
     · FormSubmit's AJAX endpoint answers without CORS headers, so fetch()
       from the page cannot read the result;
     · its confirmation page is sent with X-Frame-Options: SAMEORIGIN, so a
       hidden iframe cannot show the outcome;
     · the POST is handled behind Cloudflare's verification, which needs a
       top-level page.
   A new tab lets the visitor see the real result ("thank you", or the
   activation notice) while the site stays put. A pre-filled mailto: link is
   always offered as a fallback.

   NOTE: the first submission to an address makes FormSubmit send a one-time
   activation email to that address (hallrental@pluswin.jp, contact@pluswin.jp);
   mail flows after each link has been opened once. ------------------------ */
const FORM_ACTION = "https://formsubmit.co/" + MAIL_RENTAL;

function formPairs(form) {
  const fd = new FormData(form);
  const rows = [];
  fd.forEach((v, k) => {
    if (k.charAt(0) === "_") return;
    const value = String(v).trim();
    if (value) rows.push([k, value]);
  });
  return rows;
}

function mailtoFrom(form, subject, mail) {
  const body = formPairs(form).map(([k, v]) => `${k}: ${v}`).join("\n");
  return `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function showFormMsg(msg, kind, text, mailto, mail) {
  if (!msg) return;
  msg.className = "form-msg is-on is-" + kind;
  msg.innerHTML = `<span class="fm-ic" aria-hidden="true"></span><span class="fm-t">${esc(text)}</span>` +
    (mailto ? ` <a class="fm-link" href="${mailto}">${esc(t("form.fallback"))} · ${mail}</a>` : "");
}

function bindMailForm(form, opts) {
  if (!form) return;
  const mail = opts.mail || MAIL_CONTACT;
  const msg = document.getElementById(opts.msgId);
  const btn = form.querySelector('button[type="submit"]');
  const label = btn ? btn.querySelector("span") : null;
  const subjectField = form.querySelector('input[name="_subject"]');
  const nextField = form.querySelector('input[name="_next"]');
  const fallback = form.querySelector("[data-fallback]");

  const subjectNow = () => {
    const fd = new FormData(form);
    const key = opts.subjectField;
    const value = key ? (fd.get(key) || "").toString().trim() : "";
    return opts.subject(value);
  };

  form.addEventListener("submit", () => {
    const subject = subjectNow();
    if (subjectField) subjectField.value = subject;
    if (nextField) {
      const base = window.location.pathname.replace(/[^/]*$/, "");
      nextField.value = window.location.origin + base + "assets/sent.html?from=" + (document.body.getAttribute("data-page") || "hall");
    }
    if (fallback) fallback.setAttribute("href", mailtoFrom(form, subject, mail));
    if (btn) { btn.disabled = true; btn.classList.add("is-loading"); btn.classList.remove("is-done"); }
    if (label) label.textContent = t("form.sending");
    form.setAttribute("aria-busy", "true");
    if (msg) msg.classList.remove("is-on");

    // the tab opens on its own; report on this page right after the hand-off
    window.setTimeout(() => {
      if (btn) { btn.disabled = false; btn.classList.remove("is-loading"); btn.classList.add("is-done"); }
      form.removeAttribute("aria-busy");
      if (label) label.textContent = t(opts.submitKey);
      showFormMsg(msg, "ok", t("form.sentTab"), mailtoFrom(form, subject, mail), mail);
      form.reset();
      if (fallback) fallback.setAttribute("href", `mailto:${mail}`);
    }, 1400);
  });
}

function bindRentalForm() {
  bindMailForm($("#rentalForm"), {
    msgId: "rentalMsg",
    submitKey: "form.submit",
    mail: MAIL_RENTAL,
    subjectField: "お名前 / Name",
    subject: (name) => `[PLUSWIN HALL OSAKA] レンタル相談 — ${name || "(no name)"}`
  });
}

function bindStandForm() {
  bindMailForm($("#standForm"), {
    msgId: "standMsg",
    submitKey: "stand.submit",
    mail: MAIL_CONTACT,
    subjectField: "公演名・出演者名 / Show",
    subject: (perf) => `[PLUSWIN] 祝花・差し入れ申請 — ${perf || "(no title)"}`
  });
}

/* ---------- floating "back to top" ----------
   The hall page is several phone screens long, so a small round ↑ sits in
   the bottom-right corner once the visitor has scrolled past the first
   section. It is built here (not in each page's HTML) so all five pages get
   it from one place; its label goes through the same translation pass as
   the rest of the chrome. */
function ensureTopButton() {
  if ($("#toTopBtn")) return;
  const btn = document.createElement("button");
  btn.id = "toTopBtn";
  btn.type = "button";
  btn.className = "to-top-btn";
  btn.setAttribute("data-i18n-aria", "footer.toTop");
  btn.setAttribute("aria-label", t("footer.toTop"));
  btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;
  btn.addEventListener("click", () => {
    let reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (err) { /* ignore */ }
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
  document.body.appendChild(btn);
}

/* ---------- interactions ---------- */
function bind() {
  $$("[data-lang-btn]").forEach((b) => {
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang-btn")));
  });

  document.addEventListener("click", (ev) => {
    if (ev.target.closest("[data-stand-close]")) {
      const root = $("#standRoot");
      if (root) { root.classList.remove("is-open"); root.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); }
      return;
    }
    const opener = ev.target.closest("[data-open]");
    if (opener) { ev.preventDefault(); openDrawer(opener.getAttribute("data-open")); return; }
    if (ev.target.closest("[data-drawer-close]")) { closeDrawer(); return; }
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      closeDrawer();
      const nav = $("#mainNav");
      if (nav && nav.classList.contains("is-open")) toggleMenu(false);
    }
  });

  const pastFilters = $("#pastFilters");
  if (pastFilters) {
    pastFilters.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-past-filter]");
      if (!btn) return;
      state.pastYear = btn.getAttribute("data-past-filter");
      renderArchiveFilters();
      renderArchive();
    });
  }

  const header = $("#siteHeader");
  ensureTopButton();
  const toTop = $("#toTopBtn");
  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    if (toTop) toTop.classList.toggle("is-on", window.scrollY > 400);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  function toggleMenu(force) {
    if (!nav || !toggle) return;
    const open = force !== undefined ? force : !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("is-locked", open);
  }
  if (toggle) toggle.addEventListener("click", () => toggleMenu());
  $$("#mainNav a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".reveal").forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  bindRentalForm();
  bindStandForm();
  if (typeof bindAvail === "function") bindAvail();
  if (typeof bindHallWidgets === "function") bindHallWidgets();
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  lang = initialLang();
  try { localStorage.setItem(LANG_KEY, lang); } catch (err) { /* ignore */ }
  ensureTopButton();
  applyStatic();
  renderPage();
  localizeLinks();
  bind();
  updateUrl();
  document.dispatchEvent(new CustomEvent("pw:lang", { detail: { lang: lang } }));
});
