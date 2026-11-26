/* ============================================================
   PLUSWIN — hall photo gallery + lightbox (hall.html)
   The gallery works without JS (each tile is a plain link to the
   full-size photo); this adds the zoom viewer on top of it.
   ============================================================ */
(function () {
  var grid = document.getElementById("hallGallery");
  var box = document.getElementById("galbox");
  if (!grid || !box) return;

  var items = Array.prototype.slice.call(grid.querySelectorAll(".gal-item"));
  if (!items.length) return;

  var imgEl = document.getElementById("galboxImg");
  var numEl = document.getElementById("galboxNum");
  var capEl = document.getElementById("galboxCap");
  var kickEl = document.getElementById("galboxKick");
  var countEl = document.getElementById("galboxCount");
  var figEl = box.querySelector(".galbox-fig");
  var current = 0;
  var lastFocus = null;

  function pad(n) {
    return String(n + 1).padStart(2, "0");
  }

  function caption(item) {
    var cap = item.querySelector(".gal-cap");
    return {
      title: cap ? (cap.querySelector("b") || {}).textContent || "" : "",
      kicker: cap ? (cap.querySelector("i") || {}).textContent || "" : "",
      alt: (item.querySelector("img") || {}).alt || ""
    };
  }

  function paint(i) {
    var total = items.length;
    current = (i + total) % total;
    var item = items[current];
    var cap = caption(item);
    imgEl.src = item.getAttribute("href") || (item.querySelector("img") || {}).src;
    imgEl.alt = cap.alt;
    numEl.textContent = pad(current);
    capEl.textContent = cap.title;
    kickEl.textContent = cap.kicker;
    countEl.textContent = pad(current) + " / " + pad(total - 1);
    box.setAttribute("aria-label", cap.title);
  }

  function open(i) {
    lastFocus = document.activeElement;
    paint(i);
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    window.setTimeout(function () {
      var btn = box.querySelector("[data-gal-close]");
      if (btn) btn.focus();
    }, 40);
  }

  function close() {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    imgEl.removeAttribute("src");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }

  function isOpen() {
    return box.classList.contains("is-open");
  }

  grid.addEventListener("click", function (ev) {
    var item = ev.target.closest(".gal-item");
    if (!item) return;
    ev.preventDefault();
    var list = Array.prototype.indexOf.call(items, item);
    open(list < 0 ? 0 : list);
  });

  box.addEventListener("click", function (ev) {
    if (ev.target.closest("[data-gal-close]")) { close(); return; }
    if (ev.target.closest("[data-gal-prev]")) { paint(current - 1); return; }
    if (ev.target.closest("[data-gal-next]")) { paint(current + 1); return; }
    if (ev.target === box || ev.target === figEl) close();
  });

  document.addEventListener("keydown", function (ev) {
    if (!isOpen()) return;
    if (ev.key === "Escape") { ev.preventDefault(); close(); }
    else if (ev.key === "ArrowLeft") { ev.preventDefault(); paint(current - 1); }
    else if (ev.key === "ArrowRight") { ev.preventDefault(); paint(current + 1); }
    else if (ev.key === "Tab") {
      var focusable = Array.prototype.slice.call(box.querySelectorAll("button"));
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });

  /* swipe left / right on touch screens */
  var startX = null;
  box.addEventListener("touchstart", function (ev) {
    if (ev.touches.length !== 1) return;
    startX = ev.touches[0].clientX;
  }, { passive: true });
  box.addEventListener("touchend", function (ev) {
    if (startX === null) return;
    var dx = (ev.changedTouches[0] || {}).clientX - startX;
    startX = null;
    if (Math.abs(dx) > 55) paint(current + (dx < 0 ? 1 : -1));
  });

  /* keep the viewer caption in the page's current language */
  function localizeBox() {
    if (typeof t !== "function") return;
    var c = box.querySelector("[data-gal-close]");
    var p = box.querySelector("[data-gal-prev]");
    var n = box.querySelector("[data-gal-next]");
    if (c) c.setAttribute("aria-label", t("photos.close"));
    if (p) p.setAttribute("aria-label", t("photos.prevPhoto"));
    if (n) n.setAttribute("aria-label", t("photos.nextPhoto"));
    figEl.setAttribute("aria-label", t("photos.viewer"));
  }

  document.addEventListener("DOMContentLoaded", localizeBox);

  Array.prototype.forEach.call(document.querySelectorAll("[data-lang-btn]"), function (btn) {
    btn.addEventListener("click", function () {
      localizeBox();
      if (isOpen()) window.setTimeout(function () { paint(current); }, 0);
    });
  });
})();
