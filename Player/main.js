/** @format */

var audio = document.getElementById("audio");
var playButton = document.getElementById("play-button");
var playlist = document.getElementById("playlist");

// Lista de músicas
const songs = [
  "Music/01 - Basta Nele Crer.mp3",
  "Music/02 - Jesus Está na Frente.mp3",
  "Music/03 - Maranata.mp3",
  "Music/04 - Mistério de Fogo.mp3",
  "Music/05 - Vou te Adorar.mp3",
  "Music/06 - Testemunho.mp3",
];

// Adiciona músicas à lista de reprodução
songs.forEach((song, index) => {
  var listItem = document.createElement("li");
  listItem.className = "music";
  listItem.setAttribute("data-src", song);
  listItem.innerText =
   song.split("/").pop().replace(".mp3", "");

  listItem.onclick = function () {
    playSong(song, listItem);
  };

  playlist.appendChild(listItem);
});

// Inicia automaticamente a primeira música quando a página é carregada
playSong(songs[0], playlist.children[0]);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="bi bi-caret-right-fill"></i>';
  }
}

function playSong(songSrc, listItem) {
  // Remove a classe 'selected' de todas as faixas
  Array.from(playlist.children).forEach((child) => {
    child.classList.remove("selected");
  });

  // Adiciona a classe 'selected' à faixa clicada
  listItem.classList.add("selected");

  audio.src = songSrc;
  audio.play();
  playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
}
