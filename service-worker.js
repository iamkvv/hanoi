"use strict";var precacheConfig=[["/hanoi/index.html","8688d041352e3d9aa20b269c14cabaab"],["/hanoi/static/css/main.3b6ffb77.css","928dcadca34fa2aaacee0564ac791fcc"],["/hanoi/static/js/0.58fdfeb6.chunk.js","0e2b70a8b3a67fc09809be226a4fd2ab"],["/hanoi/static/js/1.d41180ea.chunk.js","694b56637a0b3cb67582d7fcb318de48"],["/hanoi/static/js/2.080a389b.chunk.js","80e5c950ca9ebd1effc321f4e528eab3"],["/hanoi/static/js/3.0cb5a7bc.chunk.js","d8d3c8bb366a5e31dc96d540b038ba1c"],["/hanoi/static/js/4.c7620d54.chunk.js","c418b6682a36eeb9c19149da6a908cdc"],["/hanoi/static/js/5.919e7ea8.chunk.js","e8cb30ccdf3197afaa950d714f19f645"],["/hanoi/static/js/6.0bdd08c5.chunk.js","728ba13c9fcd5cabd76201676b3a6ebe"],["/hanoi/static/js/7.b5b66a6b.chunk.js","4e24427f3805bf17fa1547dbb85a5830"],["/hanoi/static/js/8.3fb1d3ba.chunk.js","6f9a2950196d8b8213749ffcbc32a1d4"],["/hanoi/static/js/9.bda3d025.chunk.js","10fe2f213edc2d24b049d9c1d17df5de"],["/hanoi/static/js/main.28da483a.js","d52eb3805e2c8bcd27870ac4f4c767e7"],["/hanoi/static/media/1.a6194423.md","a6194423529e259c5f956b66ea6598c5"],["/hanoi/static/media/2.dba8f22c.md","dba8f22c2b4d62711f7ea56e35100d3b"],["/hanoi/static/media/3.4aac5b4b.md","4aac5b4b2e40406f3a71cec0e05038d3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/hanoi/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});