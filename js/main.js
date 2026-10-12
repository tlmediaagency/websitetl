(function () {
  var btn = document.querySelector(".menu-btn");
  var links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Scroll-in effects (skipped for reduced-motion visitors)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
    var sel = ".section .label, .section h2, .section .sub, .section > .container > p, .card, .cta-box, details.faq, .split > *, .audience-item, .swatch";
    var els = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
      return !el.closest(".page-hero") && !el.closest("header") && !el.closest("footer");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) {
      var sibs = Array.prototype.filter.call(el.parentNode.children, function (s) { return els.indexOf(s) > -1; });
      var i = Math.min(sibs.indexOf(el), 5);
      el.style.setProperty("--d", i * 110 + "ms");
      el.classList.add("reveal");
      if (el.parentNode.classList.contains("split")) el.classList.add(el === el.parentNode.firstElementChild ? "from-left" : "from-right");
      io.observe(el);
    });
  }
  var pid = "6308c982d2ebe70007fedc1e";
  if (document.querySelector('[class*="hb-p-' + pid + '-"]')) {
    window._HB_ = window._HB_ || {};
    window._HB_.pid = pid;
    var s = document.createElement("script");
    s.async = true;
    s.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    document.body.appendChild(s);
  }
})();
