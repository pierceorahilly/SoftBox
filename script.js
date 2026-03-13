// NAV — shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// BURGER — mobile menu toggle
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// FADE-IN on scroll (simple intersection observer)
const fadeEls = document.querySelectorAll('.svc-card, .step, .why__card, .why__left, .hstat');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
