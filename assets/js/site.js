/* ============================================================
   PLUSWIN — shared behaviour for the 4-page site
   (data.js: content + translations, i18n-extra.js: extra strings)
   ============================================================ */

let lang = "ja";
const state = { openId: null, openPastKey: null, pastYear: "all" };

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

function monthName(m) {
  return ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][m - 1];
}

const pageKey = () => (document.body && document.body.dataset.page) || "home";

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
  return `
    <article class="evc" data-id="${e.id}">
      <button class="evc-media" type="button" data-open="${e.id}" style="--poster:url('${e.poster}')" aria-label="${esc(e.title)} — ${t("events.detail")}">
        <img src="${e.poster}" alt="${esc(e.title)}" loading="lazy" decoding="async">
        <span class="evc-status${soon ? " is-soon" : ""}">${soon ? t("events.soon") : t("events.onsale")}</span>
        <span class="evc-stamp"><b>${monthName(e.month)}</b><i>${String(e.day).padStart(2, "0")}</i><em>${esc(e.weekday[lang])}</em></span>
      </button>
      <div class="evc-body">
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
  grid.innerHTML = EVENTS.map(eventCard).join("");
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
  const e = EVENTS[0];
  const chip = $("#nextChip");
  if (!chip || !e) return;
  chip.innerHTML = `
    <span class="next-chip-label">${t("hero.next")}</span>
    <span class="next-chip-date">${e.dateShort}</span>
    <span class="next-chip-title">${esc(e.title)}</span>
    <span class="next-chip-venue">${esc(e.venueShort[lang])}</span>`;
}

/* ---------- renderers: archive ---------- */
function pastFiltered() {
  return PAST
    .filter((p) => state.pastYear === "all" || p.year === state.pastYear)
    .slice()
    .sort((a, b) => (a.sort < b.sort ? 1 : a.sort > b.sort ? -1 : 0));
}

function renderArchiveFilters() {
  $$("[data-past-filter]").forEach((b) => {
    b.classList.toggle("is-active", b.getAttribute("data-past-filter") === state.pastYear);
  });
}

function renderArchive() {
  const grid = $("#pastGrid");
  const all = pastFiltered();
  const counts = [document.getElementById("pastCount"), document.getElementById("archiveCount")];
  if (!grid) {
    counts.forEach((c) => { if (c) c.textContent = String(PAST.length); });
    return;
  }
  grid.innerHTML = all.map((p) => {
    const poster = p.poster
      ? `<div class="arch-poster" style="--poster:url('${p.poster}')"><img src="${p.poster}" alt="${esc(p.artist)} — ${esc(p.title)}" loading="lazy" decoding="async"></div>`
      : `<div class="arch-poster"><span class="arch-typo-inner"><span class="arch-typo-mark" aria-hidden="true"></span><span class="arch-typo-name">${esc(p.artist)}</span><span class="arch-typo-year">${esc(p.year)}</span></span></div>`;
    return `
      <article class="arch-card${p.poster ? "" : " is-typo"}" data-past="${p.key}" tabindex="0" role="button" aria-label="${esc(p.artist)} — ${esc(p.title)}, ${esc(p.date)}, ${esc(p.venue)}">
        ${poster}
        <div class="arch-info">
          <h4 class="arch-artist">${esc(p.artist)}</h4>
          <p class="arch-title">${esc(p.title)}</p>
          <p class="arch-meta"><span>${esc(p.date)}</span><span class="arch-venue">${esc(p.venue)}</span></p>
        </div>
      </article>`;
  }).join("");
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
  state.openPastKey = null;
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
        <a class="btn btn-line btn-sm" href="stand.html">${t("stand.ctaShort")}</a>
      </div>`;
}

function openPast(key) {
  const p = PAST.find((x) => x.key === key);
  if (!p) return;
  state.openPastKey = key;
  const content = $("#drawerContent");
  if (!content) return;
  const hero = p.poster
    ? `<div class="dr-hero dr-hero-past" style="--poster:url('${p.poster}')"><img src="${p.poster}" alt="${esc(p.artist)} — ${esc(p.title)}"></div>`
    : `<div class="dr-hero dr-hero-past"><div class="dr-hero-fallback"><span>${esc(p.artist)}</span></div></div>`;
  content.innerHTML = `
    ${hero}
    <div class="dr-body">
      <div class="dr-kicker">
        <span class="ev-city">${esc(p.year)}</span>
        <span class="ev-city">${t("past.kicker")}</span>
      </div>
      <h3 class="dr-title" id="drawerTitle">${esc(p.artist)}</h3>
      <p class="dr-sub">${esc(p.title)}</p>
      <div class="dr-meta-grid">
        <div><span>${t("past.date")}</span><b>${esc(p.date)}</b></div>
        <div><span>${t("past.venue")}</span><b>${esc(p.venue)}</b></div>
      </div>
      ${guideMarkup()}
      <div class="dr-actions">
        <a class="btn btn-line" href="${p.url}" target="_blank" rel="noopener">${t("past.source")}</a>
      </div>
      <p class="dr-note">${t("past.producedBy")}</p>
    </div>`;
  openRoot("#drawerRoot");
}

function openDrawer(id) {
  const e = EVENTS.find((x) => x.id === id);
  if (!e) return;
  const content = $("#drawerContent");
  if (!content) return;
  state.openId = id;
  const addrKey = lang === "ko" ? "addrKo" : lang === "en" ? "addrEn" : "addrJa";
  content.innerHTML = `
    <div class="dr-hero" style="--poster:url('${e.poster}')"><img src="${e.poster}" alt="${esc(e.title)}"></div>
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
  renderPillars();
  renderNextChip();
  renderStandRules();
}

function setLang(next) {
  if (!LANGS.includes(next)) next = "ja";
  lang = next;
  try { localStorage.setItem(LANG_KEY, lang); } catch (err) { /* ignore */ }
  applyStatic();
  renderPage();
  if (state.openId) openDrawer(state.openId);
  else if (state.openPastKey) openPast(state.openPastKey);
  localizeLinks();
  updateUrl();
}

function initialLang() {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q && LANGS.includes(q.toLowerCase())) return q.toLowerCase();
  const saved = (() => { try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; } })();
  if (saved && LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "ja").slice(0, 2).toLowerCase();
  return nav === "ko" ? "ko" : nav === "en" ? "en" : "ja";
}

/* ---------- forms ---------- */
function bindRentalForm() {
  const form = $("#rentalForm");
  if (!form) return;
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const get = (k) => (data.get(k) || "").toString().trim();
    const subject = `[PLUSWIN HALL OSAKA] レンタル相談 — ${get("name") || "(no name)"}`;
    const lines = [
      `お名前 / Name: ${get("name")}`,
      `会社・団体名 / Company: ${get("company")}`,
      `メール / Email: ${get("email")}`,
      `電話 / Tel: ${get("tel")}`,
      `希望日 / Preferred date: ${get("date")}`,
      `利用目的 / Purpose: ${get("purpose")}`,
      `予定人数 / Attendance: ${get("people")}`,
      "",
      "ご相談内容 / Message:",
      get("message"),
      "",
      "—— sent from pluswin.net (renewal prototype)"
    ];
    window.location.href = `mailto:${MAIL_RENTAL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    const status = $("#formStatus");
    if (status) status.classList.add("is-on");
  });
}

function bindStandForm() {
  const form = $("#standForm");
  if (!form) return;
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const get = (k) => (data.get(k) || "").toString().trim();
    const typeMap = { flower: "stand.fTypeFlower", balloon: "stand.fTypeBalloon", dressing: "stand.fTypeDressing" };
    const types = data.getAll("type").map((v) => t(typeMap[String(v)] || String(v))).filter(Boolean);
    const subject = `[PLUSWIN] ${t("stand.mailSubject")} — ${get("perf") || "(no title)"}`;
    const venue = get("venue") === "other" ? [t("stand.fVenueOther"), get("venuename")].filter(Boolean).join(" / ") : t("stand.fVenueHall");
    const lines = [
      `公演名・出演者名 / Show · artist: ${get("perf")}`,
      `開催日 / Date: ${get("date")}`,
      `開催時間 / Time: ${get("time")}`,
      `会場 / Venue: ${venue}`,
      `スタンドの種類 / Type: ${types.join(", ")}`,
      `申請者名 / Applicant: ${get("name")}`,
      `お花屋名 / Florist: ${get("florist")}`,
      `メール / Email: ${get("email")}`,
      `電話 / Tel: ${get("tel")}`,
      "",
      "備考 / Notes:",
      get("notes"),
      "",
      "—— sent from pluswin.net (renewal prototype)"
    ];
    window.location.href = `mailto:${MAIL_RENTAL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    const stStatus = $("#standStatus");
    if (stStatus) stStatus.classList.add("is-on");
  });
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
    const past = ev.target.closest("[data-past]");
    if (past) openPast(past.getAttribute("data-past"));
  });

  document.addEventListener("keydown", (ev) => {
    const active = document.activeElement;
    if ((ev.key === "Enter" || ev.key === " ") && active && active.matches("[data-past]")) {
      ev.preventDefault();
      openPast(active.getAttribute("data-past"));
      return;
    }
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
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
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
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  lang = initialLang();
  try { localStorage.setItem(LANG_KEY, lang); } catch (err) { /* ignore */ }
  applyStatic();
  renderPage();
  localizeLinks();
  bind();
  updateUrl();
});
