"use strict";var precacheConfig=[["/hanoi/index.html","10650c717de7093a7ae7648ee40072dc"],["/hanoi/static/css/main.09152b8e.css","33f3570c314ef4a3c52f6444197e11fe"],["/hanoi/static/js/0.38f5b2f9.chunk.js","014678606d2862efaccf587535405fb1"],["/hanoi/static/js/1.437a1c26.chunk.js","abbfff98e3769887de62d7a2ea6e1680"],["/hanoi/static/js/10.c85723b6.chunk.js","f9c512927ba3ba0ae33b5e4d265270f3"],["/hanoi/static/js/11.7395307f.chunk.js","1b46a104b0c655b8a7b761f923cfca46"],["/hanoi/static/js/12.9fdd78c2.chunk.js","37935c08358223092b1eccbca041c55e"],["/hanoi/static/js/13.7e2b998b.chunk.js","46ea2a0260c1a4a1cff5a0a6ea74f6c9"],["/hanoi/static/js/14.681cc233.chunk.js","801176366e9e40cdceb49d37bb876fa9"],["/hanoi/static/js/15.3bea1514.chunk.js","6c9b0e1059f7644dd1c0dbb5e33f63ac"],["/hanoi/static/js/16.e096d264.chunk.js","7cad7f28b6bcd0d069715fbfeb701da0"],["/hanoi/static/js/17.546168c4.chunk.js","131948ff06d50e967a36b11bed60102c"],["/hanoi/static/js/2.3dcf824f.chunk.js","42fb0d7b8f269f1b67730f629823278f"],["/hanoi/static/js/3.3dcd9c8c.chunk.js","bad6b32be7a260e71183e6bb661ce632"],["/hanoi/static/js/4.8d977e9c.chunk.js","b3ac4a4c8f3cdfbe1ab131a3c32c90ba"],["/hanoi/static/js/5.5334e5aa.chunk.js","a48014bc0fb934a4118cc96d74b02dcb"],["/hanoi/static/js/6.a80f4d14.chunk.js","292822058dad32c32c88c24954af9520"],["/hanoi/static/js/7.0f738e41.chunk.js","dadf0980f25c1ee617a4ee86d3f296ac"],["/hanoi/static/js/8.9953fc34.chunk.js","e43dcaf19b0828d3ea098620fa4939a9"],["/hanoi/static/js/9.8cea8200.chunk.js","c5a388177a9fed9e0ca44736057295b5"],["/hanoi/static/js/main.5ab7ceba.js","3aa0f13ad5abed76a8b1b6720a0494d8"],["/hanoi/static/media/1.a43ecec3.md","a43ecec3b13f9537b4880c34309a9664"],["/hanoi/static/media/2.6cf7a23b.md","6cf7a23b787910de76854037f07a9e89"],["/hanoi/static/media/3.48100cd2.md","48100cd24a0e79b4683d21924d17284e"],["/hanoi/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/hanoi/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});