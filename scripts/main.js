console.log("main.js loaded successfully!");
// add to scripts/main.js
// lock
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';
// unlock
document.documentElement.style.overflow = '';
document.body.style.overflow = '';
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