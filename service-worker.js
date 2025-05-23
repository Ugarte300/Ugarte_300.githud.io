self.addEventListener("install", (event) => {
  console.log("Service worker instalado.");
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  // Puedes agregar caché aquí si deseas
});
