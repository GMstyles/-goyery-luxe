function enviarWhatsApp(imagen) {
  const numero = "573155588648";
  const mensaje = "Hola, estoy interesado en esta joya: " + window.location.href.replace("index.html", "") + imagen;
  const url = https://wa.me/${numero}?text=${encodeURIComponent(mensaje)};
  window.open(url, "_blank");
}
