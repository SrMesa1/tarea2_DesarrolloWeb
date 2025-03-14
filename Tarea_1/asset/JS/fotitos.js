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



  const audio = " ";    // asset/img/"NOMBREAUDIO"
  const video = " ";    // asset/img/"NOMBREVIDEO"


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
  const audioPlayer = document.getElementById("audioPlayback");
  audioPlayer.src = audio;
  audioPlayer.controls = true; // Muestra los controles de reproducción

  const vidio = document.getElementById("video");
  vidio.src = video;
  vidio.controls = true; // Muestra los controles de reproducción
});
