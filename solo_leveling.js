document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main-content');
  const menuToggle = document.getElementById('menu-toggle');
  const music = document.getElementById('bg-music');
  const musicControl = document.getElementById('music-control');
  let playing = false;

  // Control de música
  musicControl.addEventListener('click', () => {
    if(playing){ 
      music.pause(); 
      musicControl.textContent='🎵 Play'; 
    } else { 
      music.play(); 
      musicControl.textContent='🎵 Pause'; 
    }
    playing = !playing;
  });

  // Botón menú (solo móviles)
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Hover en escritorio (opcional)
  document.body.addEventListener('mousemove', e => {
    if(window.innerWidth > 768){ // solo escritorio
      if(e.clientX <= 20){ 
        sidebar.classList.add('active');
        main.classList.add('shifted');
      } else if(!sidebar.matches(':hover')){
        sidebar.classList.remove('active');
        main.classList.remove('shifted');
      }
    }
  });
});
