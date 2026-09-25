self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {
  // Sin caché especial: siempre va a la red (necesitamos datos frescos del backend)
  e.respondWith(fetch(e.request).catch(() => new Response('Sin conexión')));
});
