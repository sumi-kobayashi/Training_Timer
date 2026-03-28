const CACHE_NAME = 'rep-timer-v2';
const ASSETS = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(r => {
      const rc = r.clone();
      caches.open(CACHE_NAME).then(c => c.put(e.request, rc));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
