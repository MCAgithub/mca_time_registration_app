'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2f6e1e8df8011ed5af5bd4849a84e1d7",
".git/config": "a24138aa28f19db8bbf8cf90b07b8929",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf2a3ca8589d0a6114fd5f41db9e616d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9d5c0189a4e26d3bf3211002195cf05",
".git/logs/refs/heads/master": "708ade1668c7e4ce024d05b0b6a2c960",
".git/logs/refs/remotes/origin/master": "97e9d39e256b561ec358c2c00c0e9404",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/e3969938d5a5c0f99c28d317863d10d22c6ae2": "7807a386b9264db747a491c917c186b2",
".git/objects/16/46e59186503039b1a9dac0a2149347beb8f860": "83331c00662d2e6dca9e194a4baacafd",
".git/objects/1c/5194dd8fc74748a24f931ef67d64bbc64d3814": "5d467a935b73392920f5211849b7f17d",
".git/objects/1e/fc7640d1235ba4eb69706aa63c277c62dd1893": "946a7a27a102309f3da055c9650fd5d4",
".git/objects/22/727dcdc107fe441f1fa01db991bf86b11e0dd1": "4bfddd0d4cd8d144914cabeea55e6444",
".git/objects/28/1806637a12f67ab62eb267bc4d6db1bbb79fa2": "ce4885ced60eb6f1bb3303ccaba4694a",
".git/objects/2b/d5810ff75470b6b4a93b2ca8921adefb9a6cab": "f8260793a8fbf421a46c8bd03661df0f",
".git/objects/2b/e52d3b96826f939a3168d900f48678d9bd3907": "0bab251ed8900117a5305dcf0602e4cc",
".git/objects/2b/e6022084d41950e740d303c2b768236822eb33": "5c33ac5c13241e2ce89d502da28d14f5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/d526bfe8ccc5faa58543e4f007fa8a97393c91": "70c5633589600f21f5a08b73bfdd5ae0",
".git/objects/56/ecd39eda6685bfdcae0125c44368ba8373dcbe": "5c72347ab88dfab08b1c2dd876faf7b5",
".git/objects/57/078516f565f73f3c6b63ec42c594966b34992e": "c1218a24cc35f3442ce2346ff414c202",
".git/objects/58/1937c538de50bd4bdfdf3ab19143b5acf97e0a": "3a43d472f82757fb80b4330b1bba1f59",
".git/objects/64/16600e43a6acfa2b33dde938feb50d379dc820": "50a7cff551d74c3db8f6b8e12efb054e",
".git/objects/74/d44e2e122bad8b5513713f7d61700d60ba93b3": "ecb29bef0d12a3c78503fcc9eb7f61b1",
".git/objects/75/dfc3c59f90a56561b2a5a3d5b898fb9dabda56": "35923bb5e764223fe7042707ba25be7a",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/5e85eba943103259e1ecfac98115fb69cad8d3": "ad9a0e55d6383218df953c5675eb65bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/2e81f0e76cd2b5482f6eb71903b39083f32209": "a64bea2b3e7a62a07735fc027d51bfa9",
".git/objects/af/ad493c48dd73d1c17d0424143fb03afb259c80": "46eb8448e0173133f1a8e3ae87c3c784",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/ff86e1780d7823d44f2507ff226d067a424ba7": "47514b4e7cb3249b845314c8725439c7",
".git/objects/ce/495ff8b6b5cfb43599b652456aa0d3ff8759f3": "11f410ffc37247c8749e06c4f8cf0056",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/ec7ee483051cbe790298c2e9da94a7418ebd27": "b10f3d9f789ebdfc9086beefbb02c966",
".git/objects/df/12fec828ee7abaaaa0f26e690a4d8e60387a4e": "0c32145cb599a20a402784f132fee437",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/772c681bb5bb10cd2f5898cc27c635cec11c0c": "07a0f02c1339aa96963234239f8df1f9",
".git/objects/ea/d4f1a7c55f76b444ac43e529bf7284c585082f": "ef1e1f1b1103a196033279b0dac65294",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "7284dc09b8d28e06e43b287e85a3eac9",
".git/refs/remotes/origin/master": "7284dc09b8d28e06e43b287e85a3eac9",
"assets/asset/gifs/handshake.gif": "1ab342dbd1a35f88a3def191fc94c095",
"assets/asset/gifs/helper.gif": "50a857a7bbe36010c73c07792f1004f4",
"assets/asset/gifs/keyintolock.gif": "4da656a28c3355c3421714cfac62f104",
"assets/asset/gifs/mca_logo_black.jpg": "ba1529f686d66c7c93a6ba2a2a37daa4",
"assets/asset/gifs/newguy.gif": "f8eb5ade551a44e878700afc13d5c5b2",
"assets/asset/gifs/uidev.gif": "3f83ff76d2a4e678627b15efd4793d79",
"assets/asset/gifs/wallofpapers.gif": "8169ff8c24a10f093195330a062f1d9c",
"assets/asset/images/mca_logo_black.jpg": "ba1529f686d66c7c93a6ba2a2a37daa4",
"assets/asset/images/MCA_logo_black_notext.jpg": "83e05df19262e0369039ee4be9001898",
"assets/asset/images/MCA_logo_black_notext.png": "0aad5bf7546052fe33572c32209140ee",
"assets/AssetManifest.bin": "801c0a43dd0721057eb8d7d2810f7e8e",
"assets/AssetManifest.json": "d984f63feccd2afe3cd3395a62367a62",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "926f5e91fdea0bf74afcce801482286d",
"assets/NOTICES": "ad2b4e7573d4b6b4e78dd6cae77955d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0f436134ff5398b7f63f3a6c309ee54",
"/": "f0f436134ff5398b7f63f3a6c309ee54",
"main.dart.js": "223f4c2eb7f7e665c6c77c68775fded7",
"manifest.json": "c22ee867716e6e04b22e564a0d7b1744",
"version.json": "9b5adf539d3391529d09afef88ef7ccb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
