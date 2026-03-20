const CACHE_NAME = 'guielifer-admin-v1';
const ASSETS = [
  'admin.html',
  'manifest.json',
  'Imagenes/logo_transparente_v2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
