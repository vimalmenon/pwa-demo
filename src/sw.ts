/* eslint-disable */
const version = '0.0.0';

const cacheList = [
  '/',
  '/fonts/manifest.json',
  '/fonts/192x192.png',
  '/fonts/512x512.png',
  '/main.js',
];

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(version).then((cache) => {
      return cache.addAll(cacheList);
    })
  );
});

self.addEventListener('activate', (event: any) => {
  event.waitUntil(
    caches.keys().then((cache) => {
      return Promise.all(
        cache
          .filter((cacheName) => {
            return cacheName !== version;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request);
    })
  );
});

self.addEventListener('beforeinstallprompt', (e) => {
  console.log('this is called', e);
});

/* eslint-enable */
