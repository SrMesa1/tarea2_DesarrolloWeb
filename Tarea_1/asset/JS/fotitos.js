document.addEventListener('change', function(event) {
  mostrarImagen(event, 'previewDaniela');
});

document.addEventListener("DOMContentLoaded", function () {
  // Ruta de la imagen y el audio dentro de la misma carpeta
  const imagenDaniela   = "asset/img/daniela.jpg";  // Nombre de la imagen en la misma carpeta
  const imagenJuliana     = "asset/img/juliana.jpg";    // Nombre de la imagen en la misma carpeta
  const imagenShelcy     = "asset/img/shelcy.jpeg";    //Nombre de la imagen y la misma carpeta
  const audioDiagnostico = "audiopuppy.ogg";    // Nombre del audio en la misma carpeta


  // Cargar imagen del paciente automáticamente
  const imgDaniela = document.getElementById("previewDaniela");
  imgDaniela.src = imagenDaniela;
  imgDaniela.alt = "Foto de Daniela";

  // Cargar imagen del paciente automáticamente
  const imgJuliana = document.getElementById("previewJuliana");
  imgJuliana.src = imagenJuliana;
  imgJuliana.alt = "Foto de Juliana";

  // Cargar imagen del paciente automáticamente
  const imgShelcy = document.getElementById("previewShelcy");
  imgShelcy.src = imagenShelcy;
  imgShelcy.alt = "Foto de Shelcy";

   // Cargar imagen del paciente automáticamente
   const imgMapa = document.getElementById("previewMap");
   imgMapa.src = imagenMapa;
   imgMapa.alt = "Foto del mapa";

  // Cargar y reproducir el audio automáticamente
  const audioPlayer = document.getElementById("audioPlayback");
  audioPlayer.src = audioDiagnostico;
  audioPlayer.controls = true; // Muestra los controles de reproducción
});
