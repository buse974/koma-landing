(function () {
  'use strict';
  var items = document.querySelectorAll('[data-reveal]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el, i) {
    el.style.setProperty('--d', (i % 3) * 90 + 'ms');
    io.observe(el);
  });
})();
