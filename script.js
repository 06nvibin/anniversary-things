const box = document.getElementById('box');
const music = document.getElementById('bg-music');

let opened = false;

// Make it shake occasionally
setInterval(() => {
  if (!opened) {
    box.classList.add('shake');
    setTimeout(() => box.classList.remove('shake'), 500);
  }
}, 3000);

// Open the box on click
box.addEventListener('click', () => {
  if (!opened) {
    box.classList.add('open');
    opened = true;
    music.play();
  }
});
