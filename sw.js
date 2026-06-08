const CACHE = 'gymbeast-v5';
const ASSETS = [
  '/gymbeast/',
  '/gymbeast/index.html',
  '/gymbeast/manifest.json',
  '/gymbeast/sw.js',
  '/gymbeast/icon-192.png',
  '/gymbeast/icon-512.png',
  '/gymbeast/e1_0.jpg','/gymbeast/e1_1.jpg',
  '/gymbeast/e2_0.jpg','/gymbeast/e2_1.jpg',
  '/gymbeast/e3_0.jpg','/gymbeast/e3_1.jpg',
  '/gymbeast/e4_0.jpg','/gymbeast/e4_1.jpg',
  '/gymbeast/e5_0.jpg','/gymbeast/e5_1.jpg',
  '/gymbeast/e6_0.jpg','/gymbeast/e6_1.jpg',
  '/gymbeast/e7_0.jpg','/gymbeast/e7_1.jpg',
  '/gymbeast/e8_0.jpg','/gymbeast/e8_1.jpg',
  '/gymbeast/e9_0.jpg','/gymbeast/e9_1.jpg',
  '/gymbeast/e10_0.jpg','/gymbeast/e10_1.jpg',
  '/gymbeast/e11_0.jpg','/gymbeast/e11_1.jpg',
  '/gymbeast/e12_0.jpg','/gymbeast/e12_1.jpg',
  '/gymbeast/e13_0.jpg','/gymbeast/e13_1.jpg',
  '/gymbeast/e14_0.jpg','/gymbeast/e14_1.jpg',
  '/gymbeast/e15_0.jpg','/gymbeast/e15_1.jpg',
  '/gymbeast/e16_0.jpg','/gymbeast/e16_1.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/index.html')))
  );
});
