// Homepage look alternates every two visits: dark, dark, cream, cream, ... (counted once per browser session).
// Stores only a small number in this browser. Add ?theme=dark or ?theme=cream to the address to preview one.
(function () {
  var d = document.documentElement, t, q = /[?&]theme=(dark|cream)/.exec(location.search);
  if (q) t = q[1];
  else {
    var n = 0;
    try {
      n = +localStorage.getItem("tlm_visits") || 0;
      if (!sessionStorage.getItem("tlm_counted")) { n++; localStorage.setItem("tlm_visits", n); sessionStorage.setItem("tlm_counted", "1"); }
    } catch (e) { n = 1; }
    t = Math.floor((Math.max(n, 1) - 1) / 2) % 2 === 0 ? "dark" : "cream";
  }
  d.setAttribute("data-theme", t);
  if (!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) d.classList.add("intro");
})();
