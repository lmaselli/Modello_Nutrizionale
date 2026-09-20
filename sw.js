/* Dieta in Grammi - service worker
   Cache-first sul guscio dell'app: dopo la prima apertura funziona senza rete.
   Per pubblicare un aggiornamento basta cambiare VERSIONE. */
const VERSIONE = 'dieta-v9';
const GUSCIO = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSIONE)
      .then(c => c.addAll(GUSCIO))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== VERSIONE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'aggiorna') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  /* navigazione: prima la cache, così l'app apre anche offline */
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html').then(r => r || fetch(req).catch(() => caches.match('./')))
    );
    return;
  }

  /* tutto il resto, font di Google compresi: cache, poi rete, e si conserva */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copia = res.clone();
      caches.open(VERSIONE).then(c => c.put(req, copia)).catch(() => {});
      return res;
    }).catch(() => hit))
  );
});
