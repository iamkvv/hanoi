"use strict";var precacheConfig=[["/hanoi/index.html","b7085ca452103dad13777497c55efdec"],["/hanoi/static/css/main.af33bfef.css","fb55e4fb06ed0c7ba8594ea0e6c586e7"],["/hanoi/static/js/0.afdf701c.chunk.js","a6fb05e235b9182c498e641d96e1ecb5"],["/hanoi/static/js/1.450ef878.chunk.js","422092162743be2eddf25b423a35ff00"],["/hanoi/static/js/2.b6d910d7.chunk.js","ecb00fdba19d49924ae5e02ef89de15f"],["/hanoi/static/js/3.9892cc5c.chunk.js","d33583e7adc26d0757363d65078cfde1"],["/hanoi/static/js/4.79633066.chunk.js","77f035618a63b1708d43b5f21283a6e3"],["/hanoi/static/js/5.05ab47d9.chunk.js","6ce8ad6808149681e84cf866bceec7ac"],["/hanoi/static/js/6.fe0e4747.chunk.js","746211d98c606dd7301ea419f1ecd403"],["/hanoi/static/js/7.f9ebfe87.chunk.js","082b963362a3fd8b05e84a66ae89369c"],["/hanoi/static/js/8.1d22bf80.chunk.js","307c8661f0ad9a207e875c51ec753221"],["/hanoi/static/js/9.bb922cd5.chunk.js","abc7408bad61b37596dd47c9fd9e3f86"],["/hanoi/static/js/main.bc73ad4c.js","89171f98fd1a57458f2d05c5046b4f08"],["/hanoi/static/media/1.a6194423.md","a6194423529e259c5f956b66ea6598c5"],["/hanoi/static/media/2.dba8f22c.md","dba8f22c2b4d62711f7ea56e35100d3b"],["/hanoi/static/media/3.4aac5b4b.md","4aac5b4b2e40406f3a71cec0e05038d3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/hanoi/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});