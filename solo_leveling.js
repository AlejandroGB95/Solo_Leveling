const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');
const music = document.getElementById('bg-music');
const musicControl = document.getElementById('music-control');
let playing = false;

musicControl.addEventListener('click', () => {
  if(playing){ music.pause(); musicControl.textContent='🎵 Play'; }
  else { music.play(); musicControl.textContent='🎵 Pause'; }
  playing = !playing;
});

// Mostrar barra al pasar el ratón por los primeros 20px
document.body.addEventListener('mousemove', e => {
  if(e.clientX <= 20){ 
    sidebar.classList.add('active');
    main.classList.add('shifted');
  } else if(!sidebar.matches(':hover')){
    sidebar.classList.remove('active');
    main.classList.remove('shifted');
  }
});

const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});
