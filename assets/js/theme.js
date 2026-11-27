/* ============================================================
   PLUSWIN — theme switch (light / dark)

   Light is the default. The choice is kept in localStorage under
   "pluswin.theme" and is applied to <html data-theme> by the small
   inline script in each page's <head> before anything paints, so
   there is no flash and the choice follows the visitor from
   index → hall → archive → stand → estimate.

   ?theme=dark / ?theme=light overrides the stored value, which is
   handy for screenshots and for sharing a link in one skin.
   ============================================================ */
(function () {
  var KEY = "pluswin.theme";
  var BG = { light: "#f4f2ed", dark: "#08080a" };
  var root = document.documentElement;

  function save(t) { try { localStorage.setItem(KEY, t); } catch (e) { /* private mode */ } }
  function normalise(t) { return t === "dark" ? "dark" : "light"; }

  function syncPaint(t) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", BG[t]);
    var btns = document.querySelectorAll("[data-theme-btn]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed",
        btns[i].getAttribute("data-theme-btn") === t ? "true" : "false");
    }
  }

  function set(t, opts) {
    t = normalise(t);
    root.setAttribute("data-theme", t);
    syncPaint(t);
    if (opts && opts.store) save(t);
    if (opts && opts.store && typeof window.pwTrack === "function") {
      window.pwTrack("theme_toggle", { theme: t, page: (document.body && document.body.dataset.page) || "page" });
    }
    if (opts && opts.url) {
      try {
        var url = new URL(location.href);
        if (t === "light") url.searchParams.delete("theme");
        else url.searchParams.set("theme", t);
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) { /* ignore */ }
    }
    document.dispatchEvent(new CustomEvent("pw:theme", { detail: { theme: t } }));
  }

  /* the <head> script has already picked the skin; match buttons and chrome */
  set(root.getAttribute("data-theme") || "light");

  document.addEventListener("click", function (ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest("[data-theme-btn]") : null;
    if (!btn) return;
    ev.preventDefault();
    set(btn.getAttribute("data-theme-btn"), { store: true, url: true });
  });

  window.pwTheme = { get: function () { return normalise(root.getAttribute("data-theme")); }, set: set };
})();
