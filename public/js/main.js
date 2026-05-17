// Hero screenshot slideshow
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  var current = 0;
  slides[0].classList.add('active');
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
})();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Contact form — show success message (no backend wired yet)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-success');
    if (msg) { msg.hidden = false; form.reset(); }
  });
}
