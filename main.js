// ===========================================================
// TEXAS GRAVESTONE CARE — Interacciones del sitio
// ===========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Menu movil ---------- */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('mobile-open');
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* ---------- Proceso activo (efecto grabado) ---------- */
  const processItems = document.querySelectorAll('.process-item');
  if (processItems.length) {
    const processObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        }
      });
    }, { threshold: 0.5 });
    processItems.forEach(function (item) { processObserver.observe(item); });
  }

  /* ---------- Idioma (ES / EN) simple toggle ---------- */
  const langButtons = document.querySelectorAll('.lang-toggle button');
  const translatable = document.querySelectorAll('[data-en][data-es]');

  function setLang(lang) {
    translatable.forEach(function (el) {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) { el.innerHTML = text; }
    });
    langButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('tgc-lang', lang); } catch (e) {}
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
  });

  /* ---------- Header background on scroll ---------- */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 1px 0 rgba(28,30,31,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  /* ---------- Form submit a Formspree (AJAX, sin redirigir) ---------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      const currentLang = document.documentElement.getAttribute('lang') || 'es';
      btn.disabled = true;
      btn.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            btn.textContent = currentLang === 'en' ? 'Request sent' : 'Solicitud enviada';
            form.reset();
          } else {
            btn.textContent = currentLang === 'en' ? 'Something went wrong - try again' : 'Algo salio mal - intenta de nuevo';
          }
        })
        .catch(function () {
          btn.textContent = currentLang === 'en' ? 'Something went wrong - try again' : 'Algo salio mal - intenta de nuevo';
        })
        .finally(function () {
          setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
          }, 3500);
        });
    });
  }

});
