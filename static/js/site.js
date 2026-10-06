const toggle = document.querySelector('.nav-toggle'), nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
const carousel = document.querySelector('[data-carousel]');
if (carousel) { const slides = [...carousel.querySelectorAll('.hero-slide')], dots = [...carousel.querySelectorAll('[data-slide]')]; let i = 0; const show = n => { i = n; slides.forEach((s, k) => s.classList.toggle('active', k === n)); dots.forEach((d, k) => d.classList.toggle('active', k === n)); }; dots.forEach((d, k) => d.addEventListener('click', () => show(k))); setInterval(() => show((i + 1) % slides.length), 7000); }
