/* ============================================================
   PLUSWIN — floor plan zoom (hall.html)
   The mobile plan is a wide landscape drawing, so a tap opens the
   detailed SVG in a full-screen, scrollable viewer with zoom steps.
   ============================================================ */
(function () {
  var media = document.querySelector(".floorplan-media");
  var box = document.getElementById("fpZoom");
  if (!media || !box) return;

  var stage = document.getElementById("fpZoomStage");
  var closeBtn = box.querySelector(".fpzoom-close");
  var inBtn = box.querySelector(".fpzoom-in");
  var outBtn = box.querySelector(".fpzoom-out");
  var detailed = media.querySelector(".fp-svg:not(.fp-svg--mob)");
  var mq = window.matchMedia("(max-width: 900px)");

  var steps = [1100, 1500, 2000, 2600];
  var step = 1;
  var lastFocus = null;
  var built = false;

  function build() {
    if (built || !detailed) return;
    var clone = detailed.cloneNode(true);
    clone.setAttribute("class", "fp-svg fpzoom-svg");
    stage.appendChild(clone);
    stage.style.setProperty("--zw", steps[step] + "px");
    built = true;
  }

  function open() {
    build();
    lastFocus = document.activeElement;
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function zoom(d) {
    step = Math.max(0, Math.min(steps.length - 1, step + d));
    stage.style.setProperty("--zw", steps[step] + "px");
  }

  var openBtn = document.querySelector(".fp-zoom-open");
  if (openBtn) openBtn.addEventListener("click", function (e) { e.preventDefault(); open(); });

  media.addEventListener("click", function (e) {
    if (!mq.matches) return;
    e.preventDefault();
    open();
  });
  media.addEventListener("keydown", function (e) {
    if (!mq.matches) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", close);
  if (inBtn) inBtn.addEventListener("click", function () { zoom(1); });
  if (outBtn) outBtn.addEventListener("click", function () { zoom(-1); });
  box.addEventListener("click", function (e) {
    if (e.target === box) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && box.classList.contains("is-open")) close();
  });
})();
