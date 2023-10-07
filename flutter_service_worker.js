'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bf1784cb3aa0cb3b37f87430cd36166a",
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
".git/index": "f7438c0385f2e6110acd39dd05a68050",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d1ecfb8dcde62a4cedb9d1d4267e0fd",
".git/logs/refs/heads/master": "7b866895feeda7a0779de845f29a94fe",
".git/logs/refs/remotes/origin/master": "fa5b92533d4a1d1c8f680a2b8e411f4f",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0a/00ce371ce445720dd78be4a8262745c3b146e5": "f2cdbe8a49bb5df82001b29f5d13804c",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/53dac81b022a7062e5ea7dc73b87574ac2e291": "e15e859daac6f426c1807d02b0b0e267",
".git/objects/0d/e3969938d5a5c0f99c28d317863d10d22c6ae2": "7807a386b9264db747a491c917c186b2",
".git/objects/0e/c4c1618c3ee51719907128fd4729e0b6473e43": "d3666f2ee85c622c5af32a488dfcd9a1",
".git/objects/10/237685d4063b62d6126b20c619aedfad582c9b": "f8ed781dca87b9fae9fa5e327b976b57",
".git/objects/10/abe5dbad3b49f3e7994eeaf0e8d34df27157ba": "a541f6cfcd4a3e03ee8dcbbe555a556e",
".git/objects/12/3ad4abaf147e89f7d97538e9f8fb50879960a2": "c4e5a057f73fe096f4c3948008ccbb2b",
".git/objects/16/46e59186503039b1a9dac0a2149347beb8f860": "83331c00662d2e6dca9e194a4baacafd",
".git/objects/17/22f0210a7c6c9f2c5e041a7e239381c097ee5b": "cf9616e348c4263c59ae192290e4ccbf",
".git/objects/17/bc98d29feddb1a2827ab3040d8508c23e3150a": "9e292c2e3df01f51c04a6c3933d3be92",
".git/objects/18/99d1b3d2f2f27735624502862f50ec487246c4": "249170e304d68b018de6b8b3d13cbbce",
".git/objects/1a/3a3f2691fcb09147a4aede7bdac4d293d00778": "da287e655e8b75fd1c3c566aaa55d540",
".git/objects/1c/5194dd8fc74748a24f931ef67d64bbc64d3814": "5d467a935b73392920f5211849b7f17d",
".git/objects/1d/fa0c554aac32e06a1b055cf2ed81617967b26b": "5c7d9b1278ab53a9d750b6e99c4b9fe4",
".git/objects/1e/fc7640d1235ba4eb69706aa63c277c62dd1893": "946a7a27a102309f3da055c9650fd5d4",
".git/objects/1f/33e9b31b5c2a12a381b5c78a4edc49acdac3ba": "1793472220eb6552063072acb17220d3",
".git/objects/1f/af8ea74a8c3fb50cc03d6690d148b8345c63ff": "30310e49f2fedfe0b8bfe618878a20ad",
".git/objects/22/727dcdc107fe441f1fa01db991bf86b11e0dd1": "4bfddd0d4cd8d144914cabeea55e6444",
".git/objects/22/802f39e4f1eb731e78737af932657644ac22ab": "369bf86f834443b730bdbc29fe59ccce",
".git/objects/28/1806637a12f67ab62eb267bc4d6db1bbb79fa2": "ce4885ced60eb6f1bb3303ccaba4694a",
".git/objects/28/c2acbe8e00808a08777be6a5ed0492339f94d6": "bc33b7ca8311ceb75c302c0186d89337",
".git/objects/2b/d5810ff75470b6b4a93b2ca8921adefb9a6cab": "f8260793a8fbf421a46c8bd03661df0f",
".git/objects/2b/e52d3b96826f939a3168d900f48678d9bd3907": "0bab251ed8900117a5305dcf0602e4cc",
".git/objects/2b/e6022084d41950e740d303c2b768236822eb33": "5c33ac5c13241e2ce89d502da28d14f5",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3b/8e4d98bd5d8aeb29c801aa0a87f5156e6403af": "175921e5afe11410e71255a9cb36dbe3",
".git/objects/3f/06b0039655ce8ef2f3c14cf8b66c3a90ba62fd": "27c692e8f7023e8b751fe98093835301",
".git/objects/40/3833719674edc5f21deb8b5f9cad7721c79e5a": "da10a27f8b3e61a2d7a0f664b011adac",
".git/objects/40/902aa4a4fb1c21414d20ba6695c0fefe8474fb": "f54e9dc9c8945ba1db2868a7b6ed7246",
".git/objects/42/61f5888941d1cfa3672ea6e0e253e2d6f6c072": "ff5fd9a84cdc2f8e8334d2d02d7b7787",
".git/objects/42/8984bca2de9fb9aece0a2072ffe7a09c92b094": "55f17963ed03e7ec2065324ced9d50e4",
".git/objects/46/323f087ed244df8f8b895cd8cfde44e616e095": "49cffeb02e8023cd02afcb861e7071cd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9ff2291cd64d4aa3627db8b89e1d6c2cf568a7": "4c0a1faf93e643995c184d6293b558e1",
".git/objects/46/a401f843e9615e6c46bdcb1faaedb9a5985d9d": "11f07163e616ac21f40efd66fd8d76bd",
".git/objects/48/23d9f4d9129f5d79c1a33baec160336295b8ae": "b8b5e692c38a4e49ce006f953e45723f",
".git/objects/4b/2b9f64b36f8cac14ce408c0b347724c908ab4a": "359eeebe499dd156fe5b0983b601f66a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/51/1e07002dff1cbde6f6ab4bb9fd28a0ea47c6f4": "7ac9b39c0232c51e07c15b103a7efd91",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/db230154f0e6e976952c411bd148405e02d1c1": "08a0d4b5e11289884d2203bf504c6d90",
".git/objects/56/d526bfe8ccc5faa58543e4f007fa8a97393c91": "70c5633589600f21f5a08b73bfdd5ae0",
".git/objects/56/ecd39eda6685bfdcae0125c44368ba8373dcbe": "5c72347ab88dfab08b1c2dd876faf7b5",
".git/objects/57/078516f565f73f3c6b63ec42c594966b34992e": "c1218a24cc35f3442ce2346ff414c202",
".git/objects/58/1937c538de50bd4bdfdf3ab19143b5acf97e0a": "3a43d472f82757fb80b4330b1bba1f59",
".git/objects/58/bf38e3762a668a085035591c376857cf22c8f5": "c6bbb8da09d0fe0a7fba05cc5e092839",
".git/objects/58/f45a86321364842fac1e826533b4a684187909": "f413a0cbec7be7fffc87463839b170ff",
".git/objects/5a/9701b27a2d3645a8a545772aa2514cc65e49ac": "dc4e75e21e60dd16693a9cf467757157",
".git/objects/5b/688f0f0b75dc412e4afdeb28a638bfd8ae9a2b": "d2308953714530e92aeae70b3a55c142",
".git/objects/5e/a26e36836c4c4149b9490c4dacd552efe81f6c": "0b65ae3bdccfebc9122a1123e9a2d0de",
".git/objects/60/989477e4b26b5594cf4ff35b7cb5579a6bbe84": "6586e737e3308d3b3b6b42992501c47e",
".git/objects/64/16600e43a6acfa2b33dde938feb50d379dc820": "50a7cff551d74c3db8f6b8e12efb054e",
".git/objects/67/1998f9c0f444b6e83e34ef1acd1481cc013fa5": "56a110f899602c0f805f46d3e80e8e3d",
".git/objects/6a/9022b0122521b793823384605d440a79f9e895": "8948bff69547268b3591f9fcc7e80942",
".git/objects/74/d44e2e122bad8b5513713f7d61700d60ba93b3": "ecb29bef0d12a3c78503fcc9eb7f61b1",
".git/objects/74/dc17ebc7ba635f336c0a45665ed8c6959c6ca9": "07f2fc40a61076033ac6006cbc1f86aa",
".git/objects/75/dfc3c59f90a56561b2a5a3d5b898fb9dabda56": "35923bb5e764223fe7042707ba25be7a",
".git/objects/77/921326933c54b3ecf0731b92388d84ed1d1a63": "6fb66c1a4f29808f943818f4c3f0b4e5",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7b/61c93469c67088703d92f87538810f6f41f73d": "c05cd7fd9daa1391389857b4e089cf9f",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/4aeff6afc0aa74929420ea550fd32e98147a5b": "0ca461b84ac340889a939c9ee221cffc",
".git/objects/86/5e85eba943103259e1ecfac98115fb69cad8d3": "ad9a0e55d6383218df953c5675eb65bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d44db4c8adcd9272d06c0e05a4b8ee8ca87e10": "78fb0792754998292f94c820f793eedd",
".git/objects/8d/47853f5c578de7a3374b2932c8a338352cd4df": "c7183c27665eabb969e5169a139bf38b",
".git/objects/90/42b9c2fb04c53c8638f97af6a50859908b37f6": "8c945cc59901ee00b24f05bac547a4e1",
".git/objects/91/67db06c2fd1045cff86c5bcc92c95869393073": "1763293056f9655806d2454bc063d332",
".git/objects/93/dca5325aaa335bf0db0abbe9448d09440a024f": "4e5683c304f568c205323301d3f94e1b",
".git/objects/94/f97e25e1bd9eba06bf381bf1f7bd558b253074": "532d269822fd35ef77397034cb82ce10",
".git/objects/95/5f91ddb722ff5fd87e79f3bcb17480ca95b63e": "bfd3576f6183d5ce94bb136f06451de5",
".git/objects/96/45541f703ed47396114f72895f0f5829f9d398": "8e86f7e65d4e5239e9a82bb6ec12a371",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/4cfebeaef2abe488df8fb38b40125d3292e22c": "1581ea62fb4132d1a4116f14cc8a7e56",
".git/objects/9c/57ee0d2d65a24f7d184a2ccc722a2b94fdacde": "18ef47beff0be9f17351bb264d883253",
".git/objects/9c/cb99140025be4f0338608c69e4f25b56f5fb3f": "cf6fd9203b3386664dda45aff25af6a3",
".git/objects/9e/b6ea7546e937bbd90bfff8a330ea77f7b1a9dc": "34ba2bd57a26e8e125197b496f159b45",
".git/objects/a2/775dde78609d167367ba8028c9f6b0f678592f": "7af164033d63c3c93e9cd63b014fd169",
".git/objects/a2/c0aa88a40f7af48e821bb9dddc3c074482faaf": "bbd8d576aefd8f948eb06fbc2435a633",
".git/objects/a4/6ec657c6435f1fa28660622371ca79b693d3d4": "ef23ea681f4648a7875c320bba734a0e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/2e81f0e76cd2b5482f6eb71903b39083f32209": "a64bea2b3e7a62a07735fc027d51bfa9",
".git/objects/ac/f8a166532b4dd38f352e3ade495ba92cc5934a": "49d7d59e9c4d75ec7d8f536c2675e1e4",
".git/objects/af/13a92c42db235eea95da33e38783201efb3778": "9638b250c9c6e95aa9a1dae83a3a52da",
".git/objects/af/ad493c48dd73d1c17d0424143fb03afb259c80": "46eb8448e0173133f1a8e3ae87c3c784",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a722595be50015c54b82c8c0a0a12013f0117f": "b2fda9a1321a36380fcfe73a3f72f0d5",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/9bf05f9dfc054e47a83f559016cf13fd9b99eb": "c604d72e6123d13e8cad883b820cc8a6",
".git/objects/be/851378b070254869bc81b7da8901a1b2c83422": "48555e871ee2ef68fc4b2da44041fb43",
".git/objects/be/be317051987512151de9602fa8951c47102a22": "0a8fbf4fa603cbfecfeaf555d5b1da54",
".git/objects/c1/f28ee3cc2479f810218ab9fb80042ee0f75ff0": "7ff63115bb46d24d68c8a8de947661bd",
".git/objects/c2/bd13718ebc5611bf66c51d1e24c8fb333dd27a": "88f223215afeecdc092a8046492a150a",
".git/objects/c5/ff86e1780d7823d44f2507ff226d067a424ba7": "47514b4e7cb3249b845314c8725439c7",
".git/objects/cc/25fd7427d605cab761e1ee9cf65150d6c32e13": "2aae260e609f61f21908dcd10da87606",
".git/objects/cd/ad1bf0c04e6bf3722766f124f46cdc3546961c": "daab9078d863946ffe6291dc9265384e",
".git/objects/ce/495ff8b6b5cfb43599b652456aa0d3ff8759f3": "11f410ffc37247c8749e06c4f8cf0056",
".git/objects/d0/7ad84b8a604a23c097223ce9648d9adadfff8d": "18afde415a362903c529e3ea0e1ef7a2",
".git/objects/d1/b4131ef91a437b44916db871d8b6a6b9a28c21": "54ed0389a87ca4932e3f9f85d285f5fb",
".git/objects/d2/f507a74ed25abc69f4c95b0df6900e85e5d2b9": "7f1222c63227767d078e2fc365a36771",
".git/objects/d2/f9ebbc5c9ac4f241fdc96dbebb63aadd59a607": "571d8630053a49dcdc1f8f9a702b0536",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4372ec714eb1f96b74015746ffab791cfbeb8e": "aca580f037e8eeb0e3fd87977813b6fd",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/4f1b792fdddf59dd79f69516518c7c9d4240d8": "b5f7e92ef952d45c3daef1b5e5f743ab",
".git/objects/db/3371eafdc9274819a45355533a433ff1e433f4": "c90619bca5643e037dafc23345e67683",
".git/objects/db/982ebd3bbcdd207553e8dc8fd2ebf1bc5ce715": "110d7b5f69797a62c51a7333f3c4feae",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/ec7ee483051cbe790298c2e9da94a7418ebd27": "b10f3d9f789ebdfc9086beefbb02c966",
".git/objects/dd/fc22cbdc500dac4ac4d1f0e691126986d65b72": "ee37419cb4c627b108c17f50d869a7f8",
".git/objects/df/0e0c0ee689488e33a3f3de055ab3e383788133": "225cf6e42bc30dd078f6a8c68bbc1876",
".git/objects/df/12fec828ee7abaaaa0f26e690a4d8e60387a4e": "0c32145cb599a20a402784f132fee437",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/56f24e8bb90783e0334a744a0a38d578f05e01": "4733cb37beaf560188bb338c84ea160d",
".git/objects/e2/a1dff8e6f2fb9c316b1571f3fdd7e946e5f4f2": "81ad995099b67bb1b07b06c870542836",
".git/objects/e4/e49441abfbc393dd39f841d684bb640c50b38b": "844c0bf0aecfc3b4eb112f422fc47484",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/091017ee3e0d28ec2248d19749ce4df5286815": "02bded3da7ed92d50fd6808f6205f354",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/772c681bb5bb10cd2f5898cc27c635cec11c0c": "07a0f02c1339aa96963234239f8df1f9",
".git/objects/ea/c0984c07d7ed5857d595ac1d5e594e9e0f5c5f": "a0268f31032cecf45cc2940251b80922",
".git/objects/ea/d4f1a7c55f76b444ac43e529bf7284c585082f": "ef1e1f1b1103a196033279b0dac65294",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/51d090710327a95963657011615361ed8549c8": "5fc54b64892f168d3a755dc4b5fc2e70",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f7/cc63b93268e3d974603e3f2b996d10398d8750": "4e8695ca3890ed92f6e340b4716e9e38",
".git/objects/fa/2d581351ade75a47a8d37b7e3af1ef28e54043": "8e3ec36ef0c90c1ccf54ac670f43d8dd",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/551d8bb13a29114f8bf39b23c77ee19e5aef88": "ba0dc9f2c8df55cf39c29c178c1c193f",
".git/objects/ff/b7241f6e4a615580fa9663a6cbda9a2c474919": "594ce2f52120e8a86f4a10945733fd68",
".git/refs/heads/master": "983150d8d33a4d50970170d352780b42",
".git/refs/remotes/origin/master": "983150d8d33a4d50970170d352780b42",
"assets/asset/gifs/handshake.gif": "1ab342dbd1a35f88a3def191fc94c095",
"assets/asset/gifs/helper.gif": "50a857a7bbe36010c73c07792f1004f4",
"assets/asset/gifs/keyintolock.gif": "4da656a28c3355c3421714cfac62f104",
"assets/asset/gifs/mca_logo_black.jpg": "ba1529f686d66c7c93a6ba2a2a37daa4",
"assets/asset/gifs/newguy.gif": "f8eb5ade551a44e878700afc13d5c5b2",
"assets/asset/gifs/uidev.gif": "3f83ff76d2a4e678627b15efd4793d79",
"assets/asset/gifs/wallofpapers.gif": "8169ff8c24a10f093195330a062f1d9c",
"assets/asset/images/ImageProvider/BlueBlackBG.png": "51fff8adf660bd00e163c63affae6704",
"assets/asset/images/ImageProvider/BlueGreenPurpleBG.png": "124df14c067ec2b6c80e0fde91edb560",
"assets/asset/images/ImageProvider/BluePurplePinkBG.png": "bfd46f9f8f0a9f30f9cb739651df1ec5",
"assets/asset/images/ImageProvider/BlueYellowWhiteBG.png": "5f307f47369b05258544a096dba32a54",
"assets/asset/images/ImageProvider/GreenBlueBlackBG.png": "d27d55b16500836e91308cc3e025945b",
"assets/asset/images/ImageProvider/GreenBlueWhiteBG.png": "8fc74d3feb0e4a8d98f24a43e0dba544",
"assets/asset/images/ImageProvider/PurplePinkDeepPurpleBG.png": "a020a2af54a0c8e09f955525c40c4ac8",
"assets/asset/images/ImageProvider/RedWhiteBG.png": "9f13d8979a91e0964bfcc582c30162f1",
"assets/asset/images/ImageProvider/WhiteGreenBG.png": "232ad61ab95ee659d3012f62702a24e0",
"assets/asset/images/mca_logo_black.jpg": "ba1529f686d66c7c93a6ba2a2a37daa4",
"assets/asset/images/MCA_logo_black_notext.jpg": "83e05df19262e0369039ee4be9001898",
"assets/asset/images/MCA_logo_black_notext.png": "0aad5bf7546052fe33572c32209140ee",
"assets/AssetManifest.bin": "3f6556014e6a514e6c527e92851931b6",
"assets/AssetManifest.json": "f250f2ad59546b78a09568270309da1b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "80d3a155808d14041855d40eb140e4df",
"assets/NOTICES": "1694458d4f1740c45a33d5c1f2b0489a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
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
"index.html": "c2c26015e3f5530ea65d323fabe21730",
"/": "c2c26015e3f5530ea65d323fabe21730",
"main.dart.js": "cc09af0b21676c0e980386e123ee5ba7",
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
