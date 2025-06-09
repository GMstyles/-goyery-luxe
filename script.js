// script.js

function redirigirWhatsApp(imagenUrl) {
  const numero = "573155588648";
  const mensaje = encodeURIComponent("Hola, estoy interesado en esta joya: " + imagenUrl);
  window.open("https://wa.me/" + numero + "?text=" + mensaje, "_blank");
}