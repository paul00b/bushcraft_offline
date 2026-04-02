// ============================================================
// BUSHCRAFT FIELD GUIDE — Service Worker
// Cache-first pour assets statiques
// Network-first + fallback pour images Wikimedia
// ============================================================

const CACHE_VERSION = 'bushcraft-v1';
const MEDIA_CACHE   = 'bushcraft-media-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/main.css',
  '/js/app.js',
  '/js/db.js',
  '/js/router.js',
  '/data/content.js',
  '/js/create-card.js',
  '/js/weather.js',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
];

// ── Install : précache tous les assets statiques ──────────
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate : supprimer les anciens caches ───────────────
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_VERSION && k !== MEDIA_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Wikimedia images → network-first avec fallback cache
  if (url.hostname.includes('wikimedia.org') || url.hostname.includes('wikipedia.org')) {
    e.respondWith(networkFirstMedia(e.request));
    return;
  }

  // Assets statiques → cache-first
  e.respondWith(cacheFirst(e.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Pas de réseau et pas de cache → page de fallback générique
    return new Response('Contenu non disponible offline.', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

async function networkFirstMedia(request) {
  try {
    const response = await fetch(request, { mode: 'cors' });
    if (response.ok) {
      const cache = await caches.open(MEDIA_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request, { cacheName: MEDIA_CACHE });
    if (cached) return cached;
    // Pas de cache → réponse vide (le placeholder CSS s'affiche côté app)
    return new Response('', { status: 503 });
  }
}
