/* THERMAL ME — Service Worker (v1.5)
   Cache-first, sepenuhnya offline setelah kunjungan pertama.
   Nama cache wajib dinaikkan setiap kali index.html berubah —
   cache lama otomatis dihapus agar versi lama tidak tersajikan.
   Penamaan mengikuti versi aplikasi: V1.6 berikutnya, dst. */
'use strict';

const CACHE = 'thermalme-v1.5';
const ASET = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASET)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hitung =>
      hitung ||
      fetch(req).then(res => {
        if (res && res.ok) {
          const salinan = res.clone();
          caches.open(CACHE).then(c => c.put(req, salinan));
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});