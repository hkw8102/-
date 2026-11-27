/* ============================================================
   PLUSWIN — Google Analytics 4 events (G-80L7MBMH2J)

   gtag.js itself is loaded in each page's <head>; this file only
   turns the actions the hall actually cares about into events, so
   the GA4 reports answer real questions:

     file_download        hall spec PDF (file_name in the params)
     ticket_click         ticket booking buttons / ticket providers
     outbound_click       any other link that leaves the site
     form_submit_rental   hall rental enquiry sent
     form_submit_stand    stand-flower application sent
     estimate_pdf_save    estimate sheet saved as PDF
     estimate_pdf_open    saved PDF opened again
     estimate_pdf_share   saved PDF shared (Web Share)
     estimate_print       estimate sheet printed
     theme_toggle         white <-> black switch

   Every call is guarded: with no gtag (blocked, offline, local file)
   the site behaves exactly as before.
   ============================================================ */
(function () {
  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  window.pwTrack = track;

  function pageName() {
    return (document.body && document.body.dataset.page) || "page";
  }

  function hostOf(href) {
    try { return new URL(href, location.href).hostname; } catch (e) { return ""; }
  }

  /* ticket providers the hall sells through today (e+ / LivePocket),
     plus the ones a future transfer to another service would use */
  var TICKET_HOST = /(^|\.)(eplus\.jp|livepocket\.jp|tiget\.net|zaiko\.io|peatix\.com|l-tike\.com|ticketboard\.co\.jp|ticket\.dmm\.com)$/i;

  /* buttons whose id alone says what happened */
  var BY_ID = {
    btnSavePdf: "estimate_pdf_save",
    btnPrint: "estimate_print",
    btnShare: "estimate_pdf_share",
    pdfOpen: "estimate_pdf_open"
  };

  function showInfo(el) {
    var card = el.closest("[data-id]");
    if (!card) return {};
    var title = card.querySelector(".evc-title, .evc-title button");
    return { show_id: card.getAttribute("data-id") || "", show_title: (title ? title.textContent : "").trim().slice(0, 80) };
  }

  document.addEventListener("click", function (ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("a,button") : null;
    if (!el) return;

    var page = pageName();

    /* explicit marker: data-ga="event_name" data-ga-file="name.pdf" */
    var mark = el.getAttribute("data-ga");
    if (mark) {
      var p = { page: page, link_text: (el.textContent || "").trim().slice(0, 60) };
      var file = el.getAttribute("data-ga-file");
      if (file) {
        p.file_name = file;
        p.file_extension = (file.split(".").pop() || "").toLowerCase();
      }
      if (el.tagName === "A") p.link_url = el.getAttribute("href") || "";
      track(mark, p);
      return;
    }

    if (el.id && BY_ID[el.id]) {
      track(BY_ID[el.id], { page: page });
      return;
    }

    if (el.tagName !== "A") return;
    var href = el.getAttribute("href") || "";
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) return;
    var host = hostOf(href);
    if (!host || host === location.hostname) return;

    var text = (el.textContent || "").trim().slice(0, 60);
    var isTicket = TICKET_HOST.test(host) || el.classList.contains("evc-btn") ||
                   el.classList.contains("btn-solid");
    if (isTicket) {
      var info = showInfo(el);
      track("ticket_click", {
        page: page, link_url: href, link_domain: host, link_text: text,
        show_id: info.show_id || "", show_title: info.show_title || ""
      });
    } else {
      track("outbound_click", { page: page, link_url: href, link_domain: host, link_text: text });
    }
  }, true);

  /* the two enquiry forms post to FormSubmit in a new tab, so the submit
     itself is the only reliable moment to count them */
  document.addEventListener("submit", function (ev) {
    var form = ev.target;
    if (!form || !form.id) return;
    if (form.id === "rentalForm") track("form_submit_rental", { page: pageName() });
    else if (form.id === "standForm") track("form_submit_stand", { page: pageName() });
  }, true);
})();
