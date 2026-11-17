/* Efeitos sutis — funciona em WordPress colado num bloco HTML ou via plugin de scripts.
   Sem dependências. Sem JS, todo o conteúdo continua visível. */
(function () {
  document.documentElement.classList.add('js');

  // Cabeçalho compacta ao rolar
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Entradas ao rolar (uma vez)
  var items = document.querySelectorAll('.reveal, .hero__bg, .office__media');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
