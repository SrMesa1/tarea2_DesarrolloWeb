document.addEventListener('change', function(event) {
  mostrarImagen(event, 'previewDaniela');
});

document.addEventListener("DOMContentLoaded", function () {
  // Ruta de la imagen y el audio dentro de la misma carpeta
  const imagenDaniela   = "asset/img/daniela.jpg";  // Nombre de la imagen en la misma carpeta
  const imagenJuliana     = "asset/img/juliana.jpg";    // Nombre de la imagen en la misma carpeta
  const imagenShelcy     = "asset/img/shelcy.jpeg";    //Nombre de la imagen y la misma carpeta
  const imagenSamuel    = "asset/img/samuel.jpeg";    //Nombre de la imagen y la misma carpeta
  const imagenjuandavid    = "asset/img/juan david.jpeg";    //Nombre de la imagen y la misma carpeta
  const audioDaniela = "asset/audio/AUDIO_DANIELA.ogg";
  const audioShelcy = "asset/audio/AUDIO_SHELCY.ogg";
  const audioJuanda = "asset/audio/AUDIO_JUANDA.ogg";
  const audioJuliana = "asset/audio/AUDIO_JULIANA.ogg";
  const audioSamuel = "asset/audio/AUDIO_SAMUEL.ogg";


  const video = " ";    // asset/img/"NOMBREVIDEO"*/


  // Cargar imagen del integrante automáticamente
  const imgDaniela = document.getElementById("previewDaniela");
  imgDaniela.src = imagenDaniela;
  imgDaniela.alt = "Foto de Daniela";

  // Cargar imagen del integrante automáticamente
  const imgJuliana = document.getElementById("previewJuliana");
  imgJuliana.src = imagenJuliana;
  imgJuliana.alt = "Foto de Juliana";

  // Cargar imagen del integrante automáticamente
  const imgShelcy = document.getElementById("previewShelcy");
  imgShelcy.src = imagenShelcy;
  imgShelcy.alt = "Foto de Shelcy";


   // Cargar imagen del integrante automáticamente
  const imgSamuel = document.getElementById("previewSamuel");
  imgSamuel.src = imagenSamuel;
  imgSamuel.alt = "Foto de Samuel";

  // Cargar imagen del integrante automáticamente
  const img = document.getElementById("previewJuandavid");
  img.src = imagenjuandavid;
  img.alt = "Foto de Juan David Lopez";

  // Cargar y reproducir el audio automáticamente
  const audioPlayer1 = document.getElementById("audioPlayback");
  audioPlayer1.src = audioDaniela;
  audioPlayer1.controls = true; // Muestra los controles de reproducción

  const audioPlayer2 = document.getElementById("audioPlayback1");
  audioPlayer2.src = audioShelcy;
  audioPlayer2.controls = true; // Muestra los controles de reproducción

  const audioPlayer3 = document.getElementById("audioPlayback2");
  audioPlayer3.src = audioJuanda;
  audioPlayer3.controls = true; // Muestra los controles de reproducción

  const audioPlayer4 = document.getElementById("audioPlayback3");
  audioPlayer4.src = audioJuliana;
  audioPlayer4.controls = true; // Muestra los controles de reproducción

  const audioPlayer5 = document.getElementById("audioPlayback4");
  audioPlayer5.src = audioSamuel;
  audioPlayer5.controls = true; // Muestra los controles de reproducción


  const vidio = document.getElementById("video");
  vidio.src = video;
  vidio.controls = true; // Muestra los controles de reproducción
});
