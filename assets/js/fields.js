/* ============================================================
   PLUSWIN — date & time fields that follow the page language
   A native <input type="date"> / <input type="time"> draws its
   calendar, its month names and even its 12/24-hour format in the
   language of the device, not of the page: on a Korean phone a
   Japanese page showed "mm/dd/yyyy" and "05:00 PM". So the date
   fields are replaced here by one small calendar written in the
   page's own language (year/month/day order and weekday names for
   ja / ko / en), and the time fields are plain <select> lists of
   24-hour times that read the same everywhere.

   The real value stays in the original input (type=hidden, same
   id and name), so FormData, estimate.js and the availability
   calendar keep working unchanged.
   ============================================================ */
(function () {
  "use strict";

  var WEEK = {
    ja: ["日", "月", "火", "水", "木", "金", "土"],
    ko: ["일", "월", "화", "수", "목", "금", "토"],
    en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  };
  var WEEK_LONG = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] };
  var MONTH = {
    ja: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };

  var TXT = {
    ja: { pick: "日付を選ぶ", prev: "前の月", next: "次の月", close: "閉じる", req: "日付を選んでください。", open: "カレンダーを開く" },
    ko: { pick: "날짜 선택", prev: "이전 달", next: "다음 달", close: "닫기", req: "날짜를 선택해 주세요.", open: "달력 열기" },
    en: { pick: "Select a date", prev: "Previous month", next: "Next month", close: "Close", req: "Please choose a date.", open: "Open the calendar" }
  };

  function pageLang() {
    var l = document.documentElement.getAttribute("data-lang") || "ja";
    return TXT[l] ? l : "ja";
  }
  function txt(key) { return TXT[pageLang()][key]; }

  /* ---------- date <-> text ---------- */
  function parts(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3];
    var dow = new Date(y, mo - 1, d).getDay();
    return { y: y, m: mo, d: d, dow: dow };
  }
  function iso(y, m, d) {
    return y + "-" + String(m).padStart(2, "0") + "-" + String(d).padStart(2, "0");
  }
  function fmt(isoStr) {
    var p = parts(isoStr);
    if (!p) return "";
    var l = pageLang();
    if (l === "ko") return p.y + "년 " + p.m + "월 " + p.d + "일 (" + WEEK.ko[p.dow] + ")";
    if (l === "en") return WEEK_LONG.en[p.dow] + " " + p.d + " " + MONTH.en[p.m - 1].slice(0, 3) + " " + p.y;
    return p.y + "年" + p.m + "月" + p.d + "日（" + WEEK.ja[p.dow] + "）";
  }
  function todayIso() {
    var now = new Date();
    return iso(now.getFullYear(), now.getMonth() + 1, now.getDate());
  }

  /* ---------- the calendar popup (one, shared) ---------- */
  var pop = null;
  var popFor = null;
  var popMonth = null; // {y, m}

  function buildPop() {
    var el = document.createElement("div");
    el.className = "pwcal";
    el.setAttribute("role", "dialog");
    el.hidden = true;
    el.innerHTML =
      '<div class="pwcal-head">' +
        '<button class="pwcal-nav" type="button" data-step="-1"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7"/></svg></button>' +
        '<p class="pwcal-title" aria-live="polite"></p>' +
        '<button class="pwcal-nav" type="button" data-step="1"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7"/></svg></button>' +
      '</div>' +
      '<div class="pwcal-week" aria-hidden="true"></div>' +
      '<div class="pwcal-grid"></div>' +
      '<div class="pwcal-foot"><button class="pwcal-close" type="button"></button></div>';
    document.body.appendChild(el);
    el.addEventListener("click", function (ev) {
      var nav = ev.target.closest("[data-step]");
      if (nav) {
        var step = +nav.getAttribute("data-step");
        var m = popMonth.m + step, y = popMonth.y;
        if (m < 1) { m = 12; y -= 1; }
        if (m > 12) { m = 1; y += 1; }
        popMonth = { y: y, m: m };
        paintPop();
        return;
      }
      var day = ev.target.closest("[data-iso]");
      if (day) {
        var field = popFor;
        closePop(false);
        if (field) setValue(field, day.getAttribute("data-iso"));
        return;
      }
      if (ev.target.closest(".pwcal-close")) closePop(true);
    });
    el.addEventListener("mousedown", function (ev) { ev.preventDefault(); });
    return el;
  }

  function paintPop() {
    if (!pop) return;
    var l = pageLang();
    pop.querySelector(".pwcal-title").textContent =
      l === "ja" ? popMonth.y + "年" + popMonth.m + "月"
        : l === "ko" ? popMonth.y + "년 " + popMonth.m + "월"
          : MONTH.en[popMonth.m - 1] + " " + popMonth.y;
    pop.querySelector(".pwcal-nav[data-step='-1']").setAttribute("aria-label", txt("prev"));
    pop.querySelector(".pwcal-nav[data-step='1']").setAttribute("aria-label", txt("next"));
    var close = pop.querySelector(".pwcal-close");
    close.textContent = txt("close");

    pop.querySelector(".pwcal-week").innerHTML = WEEK[l].map(function (w) { return "<span>" + w + "</span>"; }).join("");

    var first = new Date(popMonth.y, popMonth.m - 1, 1).getDay();
    var last = new Date(popMonth.y, popMonth.m, 0).getDate();
    var sel = popFor ? popFor.value : "";
    var t = todayIso();
    var html = "";
    for (var i = 0; i < first; i += 1) html += '<span class="pwcal-pad"></span>';
    for (var d = 1; d <= last; d += 1) {
      var dayIso = iso(popMonth.y, popMonth.m, d);
      var cls = "pwcal-d";
      if (dayIso === sel) cls += " is-on";
      if (dayIso === t) cls += " is-today";
      var dow = new Date(popMonth.y, popMonth.m - 1, d).getDay();
      if (dow === 0) cls += " is-sun";
      if (dow === 6) cls += " is-sat";
      html += '<button class="' + cls + '" type="button" data-iso="' + dayIso + '">' + d + "</button>";
    }
    pop.querySelector(".pwcal-grid").innerHTML = html;
  }

  function placePop(btn) {
    var r = btn.getBoundingClientRect();
    pop.style.visibility = "hidden";
    pop.hidden = false;
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var left = Math.min(Math.max(8, r.left), window.innerWidth - w - 8);
    var top = r.bottom + 6;
    if (top + h > window.innerHeight - 8) top = r.top - h - 6;
    if (top < 8) top = Math.max(8, window.innerHeight - h - 8);
    pop.style.left = Math.round(left) + "px";
    pop.style.top = Math.round(top) + "px";
    pop.style.visibility = "";
  }

  function openPop(field) {
    if (!pop) pop = buildPop();
    popFor = field;
    var p = parts(field.value) || parts(todayIso());
    popMonth = { y: p.y, m: p.m };
    paintPop();
    var btn = field.pwBtn;
    placePop(btn);
    pop.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    var on = pop.querySelector(".pwcal-d.is-on");
    (on || pop.querySelector(".pwcal-close")).focus();
    document.addEventListener("keydown", onKey, true);
    window.addEventListener("scroll", onScroll, true);
    document.addEventListener("click", onDocClick, true);
    window.addEventListener("resize", onResize);
  }

  function closePop(focusBack) {
    if (!pop || pop.hidden) return;
    var field = popFor;
    pop.hidden = true;
    pop.classList.remove("is-open");
    if (field && field.pwBtn) field.pwBtn.setAttribute("aria-expanded", "false");
    popFor = null;
    document.removeEventListener("keydown", onKey, true);
    window.removeEventListener("scroll", onScroll, true);
    document.removeEventListener("click", onDocClick, true);
    window.removeEventListener("resize", onResize);
    if (focusBack && field && field.pwBtn) field.pwBtn.focus();
  }

  function onKey(ev) {
    if (ev.key === "Escape") { ev.stopPropagation(); closePop(true); }
  }
  function onScroll() {
    /* the popup is fixed to the field: follow it, and only go away once the
       field itself has left the screen */
    if (!pop || pop.hidden || !popFor || !popFor.pwBtn) return;
    var r = popFor.pwBtn.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) { closePop(false); return; }
    placePop(popFor.pwBtn);
  }
  function onResize() { closePop(false); }
  function onDocClick(ev) {
    if (!pop || pop.hidden) return;
    if (pop.contains(ev.target)) return;
    if (popFor && popFor.pwBtn && popFor.pwBtn.contains(ev.target)) return;
    closePop(false);
  }

  /* ---------- the field itself ---------- */
  function setValue(field, isoStr) {
    field.value = isoStr || "";
    sync(field);
    try { field.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) { /* older browsers */ }
    try { field.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) { /* older browsers */ }
  }

  function sync(field) {
    var btn = field.pwBtn;
    if (!btn) return;
    var out = btn.querySelector(".pwdate-txt");
    var label = fmt(field.value);
    out.textContent = label || txt("pick");
    btn.classList.toggle("is-empty", !label);
    btn.setAttribute("aria-label", (label || txt("pick")) + " — " + txt("open"));
    if (field.pwErr) field.pwErr.hidden = !!field.value || !field.pwRequired;
  }

  function enhance(input) {
    if (input.dataset.pwDateReady) return;
    input.dataset.pwDateReady = "1";
    var required = input.hasAttribute("required") || input.getAttribute("aria-required") === "true";
    input.removeAttribute("required");
    input.type = "hidden";
    if (required) input.setAttribute("data-pw-required", "1");

    var wrap = document.createElement("span");
    wrap.className = "pwdate";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pwdate-btn";
    btn.id = input.id ? input.id + "-btn" : "";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<span class="pwdate-txt"></span><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.2" y="5" width="17.6" height="16" rx="2"/><path d="M3.2 10h17.6M8 3v4M16 3v4"/></svg>';

    var err = document.createElement("span");
    err.className = "pwdate-err";
    err.setAttribute("role", "alert");
    err.hidden = true;

    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);
    wrap.appendChild(btn);
    wrap.appendChild(err);

    input.pwBtn = btn;
    input.pwErr = err;
    input.pwRequired = required;

    btn.addEventListener("click", function () {
      if (popFor === input) { closePop(false); return; }
      closePop(false);
      openPop(input);
    });
    input.addEventListener("change", function () { sync(input); });

    /* a label pointing at the old control now points at the visible button */
    var lab = input.id ? document.querySelector('label[for="' + input.id + '"]') : null;
    if (lab && btn.id) lab.setAttribute("for", btn.id);

    /* the form refuses to leave while a required date is still empty */
    var form = input.closest("form");
    if (form && required && !form.dataset.pwGuard) {
      form.dataset.pwGuard = "1";
      form.addEventListener("submit", function (ev) {
        var empty = Array.prototype.filter.call(form.querySelectorAll("[data-pw-required='1']"), function (f) { return !f.value; });
        if (!empty.length) return;
        ev.preventDefault();
        empty.forEach(function (f) { if (f.pwErr) f.pwErr.hidden = true; sync(f); });
        var first = empty[0];
        if (first.pwErr) { first.pwErr.textContent = txt("req"); first.pwErr.hidden = false; }
        if (first.pwBtn) first.pwBtn.focus();
      }, true);
    }

    sync(input);
  }

  /* ---------- time fields ---------- */
  /* 24-hour times read the same in every language: 09:00, 17:30.
     A native time control instead formats itself for the device
     ("오후 5:00" / "05:00 PM"), so these are plain selects. */
  function timeOptions(selected, blank) {
    var out = blank ? '<option value="">—</option>' : "";
    for (var h = 0; h < 24; h += 1) {
      for (var m = 0; m < 60; m += 30) {
        var v = String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
        out += '<option value="' + v + '"' + (v === selected ? " selected" : "") + ">" + v + "</option>";
      }
    }
    return out;
  }

  function enhanceTime(input) {
    if (input.dataset.pwTimeReady) return;
    input.dataset.pwTimeReady = "1";
    var sel = document.createElement("select");
    Array.prototype.forEach.call(input.attributes, function (a) {
      if (a.name === "type" || a.name === "value") return;
      sel.setAttribute(a.name, a.value);
    });
    var blank = !input.hasAttribute("required");
    sel.innerHTML = timeOptions(input.getAttribute("value") || "", blank);
    if (!sel.value && blank) sel.value = "";
    input.parentNode.replaceChild(sel, input);
  }

  /* ---------- boot ---------- */
  function syncAll() {
    Array.prototype.forEach.call(document.querySelectorAll("input[data-pw-date-ready]"), sync);
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll("input[type='date']"), enhance);
    Array.prototype.forEach.call(document.querySelectorAll("input[type='time']"), enhanceTime);
  }

  window.pwFields = { syncAll: syncAll, init: init };

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("pw:lang", function () {
    syncAll();
    if (pop && !pop.hidden) {
      var f = popFor;
      popMonth = popMonth || { y: new Date().getFullYear(), m: new Date().getMonth() + 1 };
      paintPop();
      if (f && f.pwBtn) placePop(f.pwBtn);
    }
  });
})();
