/* THERMAL ME — Service Worker (v1.7)
   Cache-first, sepenuhnya offline setelah kunjungan pertama.
   Nama cache wajib dinaikkan setiap kali index.html berubah —
   cache lama otomatis dihapus agar versi lama tidak tersajikan.
   v1.7: logo.png ikut di-cache; caching dilakukan PER ASET —
   bila suatu saat file logo tidak ada, instalasi offline tetap
   berhasil (logo hanya hilang tampilannya, aplikasi tetap jalan). */
'use strict';

const CACHE = 'thermalme-v1.7';
const ASET = ['./', './index.html', './manifest.json', './logo.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(ASET.map(a => c.add(a).catch(() => null)))
    ).then(() => self.skipWaiting())
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