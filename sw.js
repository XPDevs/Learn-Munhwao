/* Munhwao Mastery - service worker: makes the app installable and fully
   offline once hosted over HTTP(S). (file:// cannot register a SW.) */
const VERSION = "mm-v2";
const PRECACHE = [
  "index.html",
  "style.css",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "data/hangeul.js",
  "data/vocab.js",
  "data/lessons.js",
  "data/grammar.js",
  "data/placement.js",
  "data/dict.js",
  "data/library.js",
  "js/library.js",
  "js/speak.js",
  "js/tools.js",
  "audio/manifest.js"
];
const RUNTIME = "mm-runtime";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () { self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION && k !== RUNTIME; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const url = new URL(event.request.url);

  if (event.request.method !== "GET") return;
  if (url.origin !== location.origin) {
    event.respondWith(
      caches.match(event.request).then(function (hit) {
        if (hit) return hit;
        return fetch(event.request).then(function (res) {
          if (res.ok && (url.pathname.indexOf("/css") >= 0 || url.pathname.indexOf("/font/") >= 0 || url.hostname.indexOf("gstatic") >= 0)) {
            const copy = res.clone();
            caches.open(RUNTIME).then(function (c) { c.put(event.request, copy); });
          }
          return res;
        }).catch(function () {
          return new Response("", { status: 504, statusText: "Offline" });
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) {
        fetch(event.request).then(function (res) {
          if (res.ok) caches.open(RUNTIME).then(function (c) { c.put(event.request, res); });
        }).catch(function () {});
        return cached;
      }
      return fetch(event.request).then(function (res) {
        if (res.ok) {
          const copy = res.clone();
          caches.open(RUNTIME).then(function (c) { c.put(event.request, copy); });
        }
        return res;
      }).catch(function () { return caches.match("index.html"); });
    })
  );
});