(function(t){function e(e){for(var r,a,i=e[0],l=e[1],c=e[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o={app:0},u=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2fe84cc2"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"7999b768"}[t]+".css",o=l.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],s=c.getAttribute("data-href");if(s===r||s===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],p.parentNode.removeChild(p),n(u)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(t);var f=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],u={name:"App",data:()=>({})},i=u,l=n("2877"),c=n("6544"),s=n.n(c),f=n("7496"),p=n("f6c4"),h=Object(l["a"])(i,a,o,!1,null,null,null),d=h.exports;s()(h,{VApp:f["a"],VMain:p["a"]});var m=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-center align-center flex-wrap bg",staticStyle:{"min-height":"100vh"}},[n("div",{staticClass:"text text-h5 neon-effect",on:{click:function(e){return t.push()}}},[t._v(t._s(t.startText))])])},b=[],g={data(){return{startText:"點按開始進行冒險"}},methods:{test(){alert("alert hello")},push(){this.$router.push({path:"/intro"})}}},y=g,w=(n("8263"),Object(l["a"])(y,v,b,!1,null,"43f06bf2",null)),x=w.exports;r["a"].use(m["a"]);const _=[{path:"/",name:"Home",component:x,title:"Start",meta:{title:"Start"}},{path:"/intro",name:"Intro",title:"Intro",component:function(){return n.e("about").then(n.bind(null,"9d47"))},meta:{title:"Intro"}},{path:"/fight",name:"Fight",title:"Battle",component:function(){return n.e("about").then(n.bind(null,"14f9"))},meta:{title:"Battle"}},{path:"/catch",name:"Catch",title:"Catch",component:function(){return n.e("about").then(n.bind(null,"1fd3"))},meta:{title:"Catch"}}],j=new m["a"]({base:"",routes:_});j.beforeEach((t,e,n)=>{t.meta.title&&(document.title=t.meta.title),n()});var O=j,C=n("f309");r["a"].use(C["a"]);var E=new C["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:O,vuetify:E,render:function(t){return t(d)}}).$mount("#app")},8263:function(t,e,n){"use strict";n("a5e4")},a5e4:function(t,e,n){}});
//# sourceMappingURL=app.52aaf028.js.map