// sw.js - ProfeDesk v16
// Versión del cache - cambiar este número fuerza actualización en todos los dispositivos
const CACHE_VERSION = 'profedesk-v16-2';

// Al instalar: NO pre-cachear nada, dejar que el navegador maneje
self.addEventListener('install', function(e) {
  self.skipWaiting(); // Activar inmediatamente sin esperar
});

// Al activar: borrar caches viejos
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_VERSION; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: siempre intentar red primero, caché solo como fallback offline
self.addEventListener('fetch', function(e) {
  // Solo manejar requests GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        // Guardar copia en caché solo si la respuesta es válida
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(e.request, copy);
          });
        }
        return response;
      })
      .catch(function() {
        // Sin internet: servir desde caché
        return caches.match(e.request);
      })
  );
});
