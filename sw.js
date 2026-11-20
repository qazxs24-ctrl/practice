// 改版時把 VERSION 換成新字串（例如 ninja-v2），使用者下次打開就會更新到新版
const VERSION = 'practice-v8';
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./fonts.css", "./fonts/dotgothic16-subset.woff2", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./icons/apple-touch-icon.png"];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url); if (u.origin !== location.origin) return;
  const isPage = e.request.mode === 'navigate' || u.pathname.endsWith('/index.html');
  if (isPage) {
    e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); caches.open(VERSION).then(c => c.put(e.request, cp)); return res; })));
  }
});
