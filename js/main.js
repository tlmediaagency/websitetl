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
