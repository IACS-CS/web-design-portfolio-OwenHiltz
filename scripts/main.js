console.log("main.js loaded successfully!");
// add to scripts/main.js
// (page scroll is handled in CSS)
// add to scripts/main.js
function lockScroll() {
  const y = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${y}px`;
  document.body.dataset.scrollY = y;
}
function unlockScroll() {
  const y = parseInt(document.body.dataset.scrollY || '0', 10);
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, y);
  delete document.body.dataset.scrollY;
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main) return;

  // This code was generated with help from GitHub Copilot
  // in response to the prompt: "only display one text box at once and have the rest be able to scroll through with a click of the button" - 1/13/26

  // target only the direct `main > section` children as slides (avoid nested sections)
  const slides = Array.from(main.children).filter(
    (c) => c.tagName && c.tagName.toLowerCase() === 'section'
  );
  if (!slides.length) return;

  let current = 0;
  slides.forEach((s, i) => s.classList.toggle('active', i === 0));

  // create controls if they don't exist
  let controls = main.querySelector('.carousel-controls');
  if (!controls) {
    controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.innerHTML = '<button id="prev">Prev</button><button id="next">Next</button>';
    main.appendChild(controls);
  }

  const prevBtn = controls.querySelector('#prev');
  const nextBtn = controls.querySelector('#next');

  function show(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));
});