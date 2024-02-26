import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang ingin dicaching
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker....');

  // TODO: Caching App Shell Resourceeve
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...');

  // TODO: Delete old chaces
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));

  // TODO: add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
