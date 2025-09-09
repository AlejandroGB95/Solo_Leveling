document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menu-toggle");
  const main = document.getElementById("main-content");

  // Alternar sidebar al click del botón
  menuToggle.addEventListener("click", (e) => {
    sidebar.classList.toggle("active");
    main.classList.toggle("shifted");
    e.stopPropagation();
  });

  // Cerrar sidebar al clicar fuera
  document.addEventListener("click", (e) => {
    if (sidebar.classList.contains("active") && !sidebar.contains(e.target) && e.target !== menuToggle) {
      sidebar.classList.remove("active");
      main.classList.remove("shifted");
    }
  });

  // Música
  const music = document.getElementById("bg-music");
  const musicControl = document.getElementById("music-control");
  let playing = false;

  musicControl.addEventListener("click", () => {
    if(playing) { music.pause(); musicControl.textContent='🎵 Play'; }
    else { music.play(); musicControl.textContent='🎵 Pause'; }
    playing = !playing;
  });
});
