if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let c={};const r=e=>s(e,o),t={module:{uri:o},exports:c,require:r};a[o]=Promise.all(n.map((e=>t[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"81321ee78f9d1f41193b12cc16bbf25a"},{url:"/_next/build-manifest.json",revision:"539469244c461df3aca1df1d3156d7b1"},{url:"/_next/react-loadable-manifest.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/_next/server/client-reference-manifest.js",revision:"68128e57b22a402cbb1422af32c58a43"},{url:"/_next/server/client-reference-manifest.json",revision:"5ecd849dbcf0d1767ef5b14eb465e720"},{url:"/_next/server/middleware-build-manifest.js",revision:"2844aff9189a32642216ed6cd01764a0"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"49318b1fadb2d705059a2e0d8df88bb6"},{url:"/_next/server/next-font-manifest.js",revision:"d2e9c618c1481829a9f13c21e7a6a25b"},{url:"/_next/server/next-font-manifest.json",revision:"1417dcf11f2a36589f1482ae1d988154"},{url:"/_next/static/chunks/223.83da5a2a380bbcd4.js",revision:"83da5a2a380bbcd4"},{url:"/_next/static/chunks/231.dfeea0e3c41f41e2.js",revision:"dfeea0e3c41f41e2"},{url:"/_next/static/chunks/24632825-e78ef37f497ba5cb.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/3.efbba4c752c1b665.js",revision:"efbba4c752c1b665"},{url:"/_next/static/chunks/317.6ae7d2f19ea38e8d.js",revision:"6ae7d2f19ea38e8d"},{url:"/_next/static/chunks/391.9b34d79d7ecf8eb0.js",revision:"9b34d79d7ecf8eb0"},{url:"/_next/static/chunks/528.3322588a8a937cdb.js",revision:"3322588a8a937cdb"},{url:"/_next/static/chunks/542-070a69591f8e0a83.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/568.930cf5d94cf1fed9.js",revision:"930cf5d94cf1fed9"},{url:"/_next/static/chunks/660-27d2fb0ffa05f2cf.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/724.949941bfe77bb4ac.js",revision:"949941bfe77bb4ac"},{url:"/_next/static/chunks/753.2913e997b1aa6332.js",revision:"2913e997b1aa6332"},{url:"/_next/static/chunks/767.b1859592927ac503.js",revision:"b1859592927ac503"},{url:"/_next/static/chunks/769-99dbfb45bf1fe1f5.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/824-8e9273869f99ce88.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/846-39199c59b90b805a.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/891-36e40e115144f03c.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/981.990b15d41046afac.js",revision:"990b15d41046afac"},{url:"/_next/static/chunks/991.17a8c34bb703221e.js",revision:"17a8c34bb703221e"},{url:"/_next/static/chunks/app/%5B...not_found%5D/page-748ed0cbebcbdcc5.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/food/central/page-820e300a51f41eab.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/food/north/page-d0ae952bdc9b7790.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/food/page-2b2a1d5a8ad7629f.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/food/south/page-5970ee9f7bdbcc7b.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/page-64f8b9dc0c0c7182.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/places/north/page-b71d8034b92c00fd.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/%5Blang%5D/places/page-77658a354d3bec4b.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/food/central/page-fbec5605ffe5f9ef.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/food/north/page-fa99a629a5c2d01b.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/food/page-05be5e5b6a6c5ac2.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/food/south/page-7b26f9b72475f33c.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/layout-479dbe7ebf2a0be1.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/not-found-f4e7154aa02e7268.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/page-853fd534646a1b23.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/places/north/page-58fa0e7d10a18f3a.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/app/places/page-0827fafbbc6cd6e6.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/bce60fc1-df127c882c39eff8.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/main-3a6a7d79c4cea81b.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/main-app-963105b640f8cb70.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-30ad99771e97173e.js",revision:"lozStmr_0UhnTLaOK4nNR"},{url:"/_next/static/css/ba64e9f2ae25cc61.css",revision:"ba64e9f2ae25cc61"},{url:"/_next/static/lozStmr_0UhnTLaOK4nNR/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/lozStmr_0UhnTLaOK4nNR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/icon-192x192.png",revision:"f29606382940cf383e5cc416e19929fb"},{url:"/icon-256x256.png",revision:"f50c729aa9784c5c57c14edc2c2725f7"},{url:"/icon-384x384.png",revision:"d25879a2214d0132eb561731a9cb3293"},{url:"/icon-512x512.png",revision:"509cbabd793074f8a19207de2fd9232a"},{url:"/images/down.png",revision:"7a58c2796628412f3157cf39fc2aafd5"},{url:"/images/food.jpeg",revision:"b43ca70ed6b4f8e581271ec07b7b5d3f"},{url:"/images/food/SouthFood4.jpeg",revision:"1ff53de45b02ad6a05ecc261ab69233c"},{url:"/images/food/beverage1.jpeg",revision:"4600612b4307e8fa037446b5c2de73b8"},{url:"/images/food/beverage2.jpeg",revision:"bf5c7b9274d569d542d59a74cf290545"},{url:"/images/food/beverage3.jpeg",revision:"74af87a71dc6952a0a38bfa151141bad"},{url:"/images/food/beverage4.jpeg",revision:"9962890a000ce0fb4f8f7aa81f21d56b"},{url:"/images/food/centralFood1.jpeg",revision:"17bd3dbfb9211cc2af6d267426977d32"},{url:"/images/food/centralFood10.jpeg",revision:"76b716a1f3c4c1a2b164162b724583cb"},{url:"/images/food/centralFood2.jpeg",revision:"43490e0c12a77487c6f08f7ee124736b"},{url:"/images/food/centralFood3.jpeg",revision:"6d10795258ceaddd5c29ca337428019e"},{url:"/images/food/centralFood4.jpeg",revision:"412db97c8380fcc8be788b6b83ec896e"},{url:"/images/food/centralFood5.jpeg",revision:"903b655bd85c5bd0016977564a49560a"},{url:"/images/food/centralFood6.jpeg",revision:"d9f672e305715be5fd8e49aae413addb"},{url:"/images/food/centralFood7.jpeg",revision:"b0295fb296a9c5574c6e1bc76b692371"},{url:"/images/food/centralFood8.jpeg",revision:"09d7834aa461db8510878b772ce7664c"},{url:"/images/food/centralFood9.jpeg",revision:"d57009f51ee1dedb7222be4fc1dc06de"},{url:"/images/food/food1.jpeg",revision:"ae931c38415db2a8449125ea951edadb"},{url:"/images/food/food2.jpeg",revision:"2a0f284721d28f70d47b320dc68e31c8"},{url:"/images/food/food3.jpeg",revision:"1cb15d21ef6fe2f29275868dce946ded"},{url:"/images/food/food4.jpeg",revision:"9192c8f4932945018fd958d5ca2e9c49"},{url:"/images/food/northFood1.jpeg",revision:"5ca1af6f5830c0a6e2df36139d2fc372"},{url:"/images/food/northFood10.jpeg",revision:"9a7778a4135ec8a7e750a951e16bbc23"},{url:"/images/food/northFood2.jpeg",revision:"fd3595ceecf153683d9b9bbdf88cadff"},{url:"/images/food/northFood3.jpeg",revision:"ef3814f7c24ffd9ff51a6e55d12ad8fd"},{url:"/images/food/northFood4.jpeg",revision:"b8377b974c547c3b3490fff451196b60"},{url:"/images/food/northFood5.jpeg",revision:"aa6d8f6841a3024b75c253881d07e8f2"},{url:"/images/food/northFood6.jpeg",revision:"58d541c17bf08fd9e106af9a900826b3"},{url:"/images/food/northFood7.jpeg",revision:"3feaff7a1854b6bcf7b71ed7e49574b8"},{url:"/images/food/northFood8.jpeg",revision:"ba8e295fdc0fcd6894011029589615d4"},{url:"/images/food/northFood9.jpeg",revision:"511b71f29a7b2e627d67a81e2853f8c1"},{url:"/images/food/southFood1.jpeg",revision:"5dbe94a5a5c191675e20ffa80e6040c7"},{url:"/images/food/southFood10.jpeg",revision:"fc2b41f6cae03a338a6d3e1b01a6f33c"},{url:"/images/food/southFood2.jpeg",revision:"d13d3af795847473080befabd102493b"},{url:"/images/food/southFood3.jpeg",revision:"9724df67b8b0a97028a1524563870561"},{url:"/images/food/southFood5.jpeg",revision:"16ebadca6142239d6ae3fd0747e1b2b7"},{url:"/images/food/southFood6.jpeg",revision:"f95b4a06dfc44722a366406766f8cac4"},{url:"/images/food/southFood7.jpeg",revision:"1502dc262ae3f3c887fdb5d30c5c44f2"},{url:"/images/food/southFood8.jpeg",revision:"a9f5d41a3acaece357092a12d0b7592e"},{url:"/images/food/southFood9.jpeg",revision:"f29cdf19cb1a3b8874b91561b7702bf8"},{url:"/images/location.avif",revision:"acf7b932750c593eda8ef2cd8f9c4e30"},{url:"/images/places/northPlace1.jpeg",revision:"d297b18b149110cdcc5be732c0dc0e9a"},{url:"/images/places/northPlace2.jpeg",revision:"78d9d81c7cc89f511376309b3cda2468"},{url:"/images/places/northPlace3.jpeg",revision:"336f5f752b657fa0248cb92da1cd2c14"},{url:"/images/places/northPlace4.jpeg",revision:"38463c57f5cfba91b5e699ed7571a382"},{url:"/images/vietnam-map.jpg",revision:"52210bf84f9cfb94906564a48f0ff9d6"},{url:"/lotties/dog.json",revision:"3d157735b26a4a110aaea2f6f9b24647"},{url:"/lotties/error-404.json",revision:"0ce31d60757dd65cb346828340301a4b"},{url:"/manifest.json",revision:"818a3a6fc49f378bfa7f7f502851f405"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
