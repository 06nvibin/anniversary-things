const box = document.getElementById('box');
const music = document.getElementById('bg-music');

let opened = false;

box.addEventListener('click', () => {
  if (!opened) {
    box.classList.add('open');
    opened = true;
    music.play();
  }
});
