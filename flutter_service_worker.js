'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "75a84aa4a9f12679320e163a6eb6b9ad",
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
".git/index": "e59abdb1a12dfc858265ec9dbf4c24aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fcfc8030e465bf2908317944568703f4",
".git/logs/refs/heads/master": "a019c31b401079776051dc9e6830e3df",
".git/logs/refs/remotes/origin/master": "8d546eb7d34b2990916f7f598c8902ad",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/e3969938d5a5c0f99c28d317863d10d22c6ae2": "7807a386b9264db747a491c917c186b2",
".git/objects/0e/c4c1618c3ee51719907128fd4729e0b6473e43": "d3666f2ee85c622c5af32a488dfcd9a1",
".git/objects/10/237685d4063b62d6126b20c619aedfad582c9b": "f8ed781dca87b9fae9fa5e327b976b57",
".git/objects/10/abe5dbad3b49f3e7994eeaf0e8d34df27157ba": "a541f6cfcd4a3e03ee8dcbbe555a556e",
".git/objects/16/46e59186503039b1a9dac0a2149347beb8f860": "83331c00662d2e6dca9e194a4baacafd",
".git/objects/17/bc98d29feddb1a2827ab3040d8508c23e3150a": "9e292c2e3df01f51c04a6c3933d3be92",
".git/objects/1c/5194dd8fc74748a24f931ef67d64bbc64d3814": "5d467a935b73392920f5211849b7f17d",
".git/objects/1e/fc7640d1235ba4eb69706aa63c277c62dd1893": "946a7a27a102309f3da055c9650fd5d4",
".git/objects/22/727dcdc107fe441f1fa01db991bf86b11e0dd1": "4bfddd0d4cd8d144914cabeea55e6444",
".git/objects/28/1806637a12f67ab62eb267bc4d6db1bbb79fa2": "ce4885ced60eb6f1bb3303ccaba4694a",
".git/objects/28/c2acbe8e00808a08777be6a5ed0492339f94d6": "bc33b7ca8311ceb75c302c0186d89337",
".git/objects/2b/d5810ff75470b6b4a93b2ca8921adefb9a6cab": "f8260793a8fbf421a46c8bd03661df0f",
".git/objects/2b/e52d3b96826f939a3168d900f48678d9bd3907": "0bab251ed8900117a5305dcf0602e4cc",
".git/objects/2b/e6022084d41950e740d303c2b768236822eb33": "5c33ac5c13241e2ce89d502da28d14f5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3b/8e4d98bd5d8aeb29c801aa0a87f5156e6403af": "175921e5afe11410e71255a9cb36dbe3",
".git/objects/46/323f087ed244df8f8b895cd8cfde44e616e095": "49cffeb02e8023cd02afcb861e7071cd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9ff2291cd64d4aa3627db8b89e1d6c2cf568a7": "4c0a1faf93e643995c184d6293b558e1",
".git/objects/48/23d9f4d9129f5d79c1a33baec160336295b8ae": "b8b5e692c38a4e49ce006f953e45723f",
".git/objects/4b/2b9f64b36f8cac14ce408c0b347724c908ab4a": "359eeebe499dd156fe5b0983b601f66a",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/db230154f0e6e976952c411bd148405e02d1c1": "08a0d4b5e11289884d2203bf504c6d90",
".git/objects/56/d526bfe8ccc5faa58543e4f007fa8a97393c91": "70c5633589600f21f5a08b73bfdd5ae0",
".git/objects/56/ecd39eda6685bfdcae0125c44368ba8373dcbe": "5c72347ab88dfab08b1c2dd876faf7b5",
".git/objects/57/078516f565f73f3c6b63ec42c594966b34992e": "c1218a24cc35f3442ce2346ff414c202",
".git/objects/58/1937c538de50bd4bdfdf3ab19143b5acf97e0a": "3a43d472f82757fb80b4330b1bba1f59",
".git/objects/5a/9701b27a2d3645a8a545772aa2514cc65e49ac": "dc4e75e21e60dd16693a9cf467757157",
".git/objects/5b/688f0f0b75dc412e4afdeb28a638bfd8ae9a2b": "d2308953714530e92aeae70b3a55c142",
".git/objects/60/989477e4b26b5594cf4ff35b7cb5579a6bbe84": "6586e737e3308d3b3b6b42992501c47e",
".git/objects/64/16600e43a6acfa2b33dde938feb50d379dc820": "50a7cff551d74c3db8f6b8e12efb054e",
".git/objects/67/1998f9c0f444b6e83e34ef1acd1481cc013fa5": "56a110f899602c0f805f46d3e80e8e3d",
".git/objects/6a/9022b0122521b793823384605d440a79f9e895": "8948bff69547268b3591f9fcc7e80942",
".git/objects/74/d44e2e122bad8b5513713f7d61700d60ba93b3": "ecb29bef0d12a3c78503fcc9eb7f61b1",
".git/objects/75/dfc3c59f90a56561b2a5a3d5b898fb9dabda56": "35923bb5e764223fe7042707ba25be7a",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7b/61c93469c67088703d92f87538810f6f41f73d": "c05cd7fd9daa1391389857b4e089cf9f",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/4aeff6afc0aa74929420ea550fd32e98147a5b": "0ca461b84ac340889a939c9ee221cffc",
".git/objects/86/5e85eba943103259e1ecfac98115fb69cad8d3": "ad9a0e55d6383218df953c5675eb65bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d44db4c8adcd9272d06c0e05a4b8ee8ca87e10": "78fb0792754998292f94c820f793eedd",
".git/objects/8d/47853f5c578de7a3374b2932c8a338352cd4df": "c7183c27665eabb969e5169a139bf38b",
".git/objects/91/67db06c2fd1045cff86c5bcc92c95869393073": "1763293056f9655806d2454bc063d332",
".git/objects/96/45541f703ed47396114f72895f0f5829f9d398": "8e86f7e65d4e5239e9a82bb6ec12a371",
".git/objects/9e/b6ea7546e937bbd90bfff8a330ea77f7b1a9dc": "34ba2bd57a26e8e125197b496f159b45",
".git/objects/a4/6ec657c6435f1fa28660622371ca79b693d3d4": "ef23ea681f4648a7875c320bba734a0e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/2e81f0e76cd2b5482f6eb71903b39083f32209": "a64bea2b3e7a62a07735fc027d51bfa9",
".git/objects/af/13a92c42db235eea95da33e38783201efb3778": "9638b250c9c6e95aa9a1dae83a3a52da",
".git/objects/af/ad493c48dd73d1c17d0424143fb03afb259c80": "46eb8448e0173133f1a8e3ae87c3c784",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/9bf05f9dfc054e47a83f559016cf13fd9b99eb": "c604d72e6123d13e8cad883b820cc8a6",
".git/objects/c5/ff86e1780d7823d44f2507ff226d067a424ba7": "47514b4e7cb3249b845314c8725439c7",
".git/objects/cc/25fd7427d605cab761e1ee9cf65150d6c32e13": "2aae260e609f61f21908dcd10da87606",
".git/objects/cd/ad1bf0c04e6bf3722766f124f46cdc3546961c": "daab9078d863946ffe6291dc9265384e",
".git/objects/ce/495ff8b6b5cfb43599b652456aa0d3ff8759f3": "11f410ffc37247c8749e06c4f8cf0056",
".git/objects/d0/7ad84b8a604a23c097223ce9648d9adadfff8d": "18afde415a362903c529e3ea0e1ef7a2",
".git/objects/d1/b4131ef91a437b44916db871d8b6a6b9a28c21": "54ed0389a87ca4932e3f9f85d285f5fb",
".git/objects/d2/f507a74ed25abc69f4c95b0df6900e85e5d2b9": "7f1222c63227767d078e2fc365a36771",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4372ec714eb1f96b74015746ffab791cfbeb8e": "aca580f037e8eeb0e3fd87977813b6fd",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/ec7ee483051cbe790298c2e9da94a7418ebd27": "b10f3d9f789ebdfc9086beefbb02c966",
".git/objects/df/0e0c0ee689488e33a3f3de055ab3e383788133": "225cf6e42bc30dd078f6a8c68bbc1876",
".git/objects/df/12fec828ee7abaaaa0f26e690a4d8e60387a4e": "0c32145cb599a20a402784f132fee437",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e4/e49441abfbc393dd39f841d684bb640c50b38b": "844c0bf0aecfc3b4eb112f422fc47484",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/772c681bb5bb10cd2f5898cc27c635cec11c0c": "07a0f02c1339aa96963234239f8df1f9",
".git/objects/ea/c0984c07d7ed5857d595ac1d5e594e9e0f5c5f": "a0268f31032cecf45cc2940251b80922",
".git/objects/ea/d4f1a7c55f76b444ac43e529bf7284c585082f": "ef1e1f1b1103a196033279b0dac65294",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/2d581351ade75a47a8d37b7e3af1ef28e54043": "8e3ec36ef0c90c1ccf54ac670f43d8dd",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "71c40932903e7bb0f6b2859b2cf06f7f",
".git/refs/remotes/origin/master": "71c40932903e7bb0f6b2859b2cf06f7f",
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
"favicon.png": "060556feef5532064f2a1698f2833a71",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "e3b287740308225401d3f90fe6249d0d",
"icons/favicon-16x16.png": "060556feef5532064f2a1698f2833a71",
"icons/favicon-32x32.png": "3317747f2bc6610cd88e5fc1d2aef321",
"icons/favicon.ico": "5f3c4516ae53e4b2ad3a59608cb6b396",
"icons/Icon-192.png": "6486752fd54c9c090bbeeea60b69bf8d",
"icons/Icon-512.png": "8422469a62c39c2036d29b0bc9f63348",
"icons/Icon-maskable-192.png": "6486752fd54c9c090bbeeea60b69bf8d",
"icons/Icon-maskable-512.png": "8422469a62c39c2036d29b0bc9f63348",
"index.html": "822b735537841cb4191f1db595b6543f",
"/": "822b735537841cb4191f1db595b6543f",
"main.dart.js": "cdc232b1f3272b36d1c3fb763b2e9398",
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
