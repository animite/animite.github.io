var CACHE_STATIC_NAME = 'static-v39';
var CACHE_DYNAMIC_NAME = 'dynamic-v29';

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html',
          '/offline.html',
          '/grid.svg',
          '/js/bootstrap.min.js',
          '/js/jquery.min.js',
          '/js/app.js',
          '/js/fetch.js',
          '/js/promise.js',
          '/css/bootstrap.min.css',
          '/fonts/arrow-circle-up.svg',
          '/fonts/arrow-circle-left.svg',
          '/fonts/bars.svg',
          '/fonts/search.svg',
          '/fonts/times-circle.svg',
          '/fonts/twitter.svg',
          '/images/eldorado_park_thumb.jpg',
          '/images/eldorado_park_2.jpg',
          '/images/gallery/thumbs/02(1)_lt.jpg',
          '/images/gallery/thumbs/02(2)_lt.jpg',
          '/images/gallery/thumbs/02(3)_lt.jpg',
          '/images/pic.png',
          '/images/prev.png',
          '/images/searchicon.png'

        ]);
      })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function() {
              return caches.open(CACHE_STATIC_NAME)
              .then(function(cache){
                if(event.request.headers.get('accept').includes('text/html')) {
                return cache.match('/offline.html');
                }
              });
            });
        }
      })
  );
});
