(()=>{"use strict";var e,t,r,a,o,n={},d={};function b(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,b),r.loaded=!0,r.exports}b.m=n,b.c=d,e=[],b.O=(t,r,a,o)=>{if(!r){var n=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var d=!0,f=0;f<r.length;f++)(!1&o||n>=o)&&Object.keys(b.O).every((e=>b.O[e](r[f])))?r.splice(f--,1):(d=!1,o<n&&(n=o));if(d){e.splice(i--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);b.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,b.d(o,n),o},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",76:"9e7c5faa",176:"6baa4d57",186:"3bb1f129",195:"c4f5d8e4",276:"b1c50160",331:"df7db1c9",349:"d72a1aad",514:"1be78505",601:"f2efc3a8",643:"91b2eb33",651:"8070e160",675:"e31dbd06",789:"834bb009",817:"14eb3368",840:"3073fdde",854:"c299e2c5",877:"56ff659c",918:"17896441",927:"76aa589b",946:"d847540b"}[e]||e)+"."+{53:"1ffe3a86",76:"21311767",176:"57cbb4c0",186:"afe9ef45",195:"cc755e9d",276:"7f5f0905",331:"b6ddc161",349:"bfd06b52",514:"b0d79b17",601:"77382ba4",643:"c2cca07c",651:"e6e805ce",675:"f2d07fe8",789:"6eaf8f42",814:"c1a5619c",817:"190c33f5",840:"ca2f90d5",854:"b79db1fe",877:"304af3d4",918:"8379b576",927:"17c0c0d9",946:"0ae9f60b",972:"0bf75486"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="website:",b.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var d,f;if(void 0!==r)for(var c=document.getElementsByTagName("script"),i=0;i<c.length;i++){var u=c[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){d=u;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var l=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),f&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/stopes/",b.gca=function(e){return e={17896441:"918","935f2afb":"53","9e7c5faa":"76","6baa4d57":"176","3bb1f129":"186",c4f5d8e4:"195",b1c50160:"276",df7db1c9:"331",d72a1aad:"349","1be78505":"514",f2efc3a8:"601","91b2eb33":"643","8070e160":"651",e31dbd06:"675","834bb009":"789","14eb3368":"817","3073fdde":"840",c299e2c5:"854","56ff659c":"877","76aa589b":"927",d847540b:"946"}[e]||e,b.p+b.u(e)},(()=>{var e={303:0,532:0};b.f.j=(t,r)=>{var a=b.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=b.p+b.u(t),d=new Error;b.l(n,(r=>{if(b.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+t,t)}},b.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],d=r[1],f=r[2],c=0;if(n.some((t=>0!==e[t]))){for(a in d)b.o(d,a)&&(b.m[a]=d[a]);if(f)var i=f(b)}for(t&&t(r);c<n.length;c++)o=n[c],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return b.O(i)},r=self.webpackChunkwebsite=self.webpackChunkwebsite||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();