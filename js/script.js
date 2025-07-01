document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slides');
  if (!track) return;

  const slides = Array.from(track.children);
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let idx = 0;

  function update() {
    track.style.transform = `translateX(-${idx * 100}%)`;
  }

  prev?.addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    update();
  });

  next?.addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    update();
  });

  setInterval(() => next?.click(), 5000);
  update();
});