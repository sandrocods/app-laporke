if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"static/assets/index-C_2sSdT9.css",revision:null},{url:"static/assets/index-CK1jB-W2.js",revision:null},{url:"index.html",revision:"65349dfff8224343b4b8f5083c30d74d"},{url:"registerSW.js",revision:"d15afb80194c42ab7162d4e169db5e06"},{url:"icons/icon-192x192.png",revision:"1310c7ca3e2db3a18cb941bcfb9f4c56"},{url:"icons/icon-512x512.png",revision:"72771063cba902466be2dc986a400685"},{url:"manifest.webmanifest",revision:"1b3f42c44f781696e3ce0736e8edb33d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
