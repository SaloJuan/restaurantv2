(()=>{"use strict";var e={28:(e,n,r)=>{r.d(n,{Z:()=>s});var a=r(81),t=r.n(a),i=r(645),o=r.n(i)()(t());o.push([e.id,"body{\r\n    \r\n    background: rgb(223,72,55);\r\n    background: linear-gradient(90deg, rgba(223,72,55,1) 23%, rgba(189,142,61,1) 70%);\r\n\r\n}\r\n\r\n.content,\r\n.dishes-view,\r\n.contactus-page{\r\n\r\n    display:grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.toolbar{\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n    \r\n    \r\n}\r\n\r\n.toolbar > button{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background: #7878f7;\r\n    border-radius:10px;\r\n    border: solid white 2px;\r\n}\r\n\r\n\r\np{\r\n    margin:0;\r\n    width:auto;\r\n}\r\n\r\n/*menu dishes */\r\n\r\n.dishes-view > div{\r\n\r\n    border: black dotted 2px;\r\n    border-radius:10px;\r\n    background: rgb(223,165,55);\r\n    background: linear-gradient(354deg, rgba(223,165,55,1) 29%, rgba(195,180,31,1) 70%);\r\n    padding:15px;\r\n    display:grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n/*menu dishes */\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*information */\r\n\r\n.information{\r\n\r\n    max-width: 600px;\r\n    border:red 1px solid;\r\n    background-color: #f78080;\r\n    padding:15px;\r\n}\r\n\r\n/*information */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*contact us page */\r\n\r\n.contactus-page > div > p{\r\n    max-width: 350px;\r\n    font-size: 20px;\r\n}\r\n\r\n.contactus-page > div {\r\n    \r\n    border: black dotted 2px;\r\n    border-radius:10px;\r\n    background: rgb(223,165,55);\r\n    background: linear-gradient(354deg, rgba(223,165,55,1) 29%, rgba(195,180,31,1) 70%);\r\n    padding: 15px;\r\n    display:grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.contactus-page > div > img{\r\n       \r\n    border-radius:10px;\r\n    max-width: 400px;\r\n    max-height: 400px;\r\n}\r\n\r\n/*contact us page */\r\n\r\n\r\n",""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",a=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),a&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),a&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,a,t,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);a&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,a=0;a<n.length;a++)if(n[a].identifier===e){r=a;break}return r}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=r(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var g=t(m,a);a.byIndex=s,n.splice(s,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function t(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,t){var i=a(e=e||[],t=t||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);n[s].references--}for(var c=a(e,t),d=0;d<i.length;d++){var u=r(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:e=>{var n={};e.exports=function(e,r){var a=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,t&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(a){var t=n[a];if(void 0!==t)return t.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var a in n)r.o(n,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var t=a.length-1;t>-1&&!e;)e=a[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{const e=r.p+"3463825e94c6ca6637d5.png",n=r.p+"29d62dcbac366e898056.jpg",a=r.p+"7cb2e075d550fce22d06.png",t=r.p+"9facbc01323426324a0e.jpeg";let i=document.querySelector(".content-view"),o=(i.querySelectorAll(".content-view > *"),document.createElement("div"));function s(){i.querySelectorAll(".content-view > *").forEach((e=>{e.remove()})),i.appendChild(o),console.log(e.toString())}o.classList.add("dishes-view"),o.innerHTML=`\n            <div class="dishes" id="1">\n                <p>Delicious mix of veggies with shrip on top </p>\n                <img src="${e}">                \n            </div>\n\n            <div class="dishes" id="2">\n                <p>Some kind of fish-sea-thingy mix. At least I see a shell so it must be fish</p>\n                <img src="${n}"> \n            </div>\n\n            <div class="dishes" id="3">\n                <p>Potato tortilla. It contains the 3 C: Cheap, Cdelicious and CArgentina </p>\n                <img src="${a}"> \n            </div>\n\n            <div class="dishes" id="4">\n                <p>Our finnest dessert. Vanilla ice cream bar with a chocolate shower on top.</p>\n                <img src="${t}"> \n            </div>            \n\n        `;let c=document.querySelector(".content-view"),d=document.createElement("div");d.classList.add("information"),d.innerHTML='\n        <div class="information-view">\n\n            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti, minima fugiat eius, illum dolor accusamus itaque nulla nemo magni amet sed hic? Ea, minus magni nihil magnam omnis deleniti sequi saepe minima amet delectus asperiores <strong>quis molestias repudiandae</strong> laborum ducimus sint consequatur natus harum reprehenderit ipsam ab unde, aliquam doloremque sed? Perferendis fugit eaque omnis aut unde quis dolores ex veritatis. Itaque quisquam praesentium sint qui, enim commodi molestias expedita ab quidem a facere excepturi minus recusandae assumenda illo, nobis dolores? Porro eum aliquam, perspiciatis id perferendis, minus deleniti repellat hic maxime recusandae, nulla excepturi in ad quos maiores dolores iusto molestiae laborum illo? Temporibus sapiente soluta dolores eveniet <strong>quidem magni at blanditiis officiis</strong>, id quisquam, ipsa placeat iusto exercitationem molestias vitae harum voluptate, fugit impedit ab. Beatae aut facilis atque quaerat itaque sint ratione alias! Id accusantium in laudantium, ea voluptas eveniet nobis autem dicta debitis, distinctio aspernatur velit perspiciatis asperiores dolorem qui. Blanditiis vel nisi quae! Exercitationem, praesentium consectetur, expedita, illo aliquid delectus mollitia iusto architecto voluptatibus laborum numquam illum maxime consequatur possimus repudiandae provident cumque. Iure debitis corrupti accusantium velit harum nihil, dolorum delectus magni, sunt asperiores laborum saepe quod facilis laudantium rem, inventore id voluptatum.</p>\n\n        </div>\n        \n    \n    ';const u=r.p+"8dba52fcceda0583e17f.png",l=r.p+"87c6d6967c3cd0eeb135.jpg",p=r.p+"5b2ccf39521c9a3691f1.png",m=r.p+"258c6f300a99441f0f60.jpg";let g=document.querySelector(".content-view"),f=document.createElement("div");f.classList.add("contactus-page"),f.innerHTML=`\n    <div class="contact" id="1">\n        <img src="${l}" class="contact1-portrait">\n        <p class="contact1-info">\n            Charles Milei es un gerente de restaurante enfocado en la calidad y la satisfacción del cliente. Tiene excelentes habilidades de liderazgo y gestión, y se asegura de que su equipo esté capacitado y motivado para brindar un servicio excepcional. Además, es conocido por su capacidad para convertirse en un demonio económico.\n        </p>\n    </div>\n\n    <div class="contact" id="2">\n    <img src="${u}" class="contact2-portrait">\n    <p class="contact2-info">\n\n        George Larreta es el otro gerente, que en el pasado fue un gerente de un restaurante de la competencia. Se enfoca en brindar una experiencia excepcional al cliente y está comprometido con la calidad y el servicio. Con su experiencia previa, tiene una comprensión profunda del mercado y es capaz de tomar decisiones informadas para mejorar el rendimiento del restaurante. Además, tiene habilidades de liderazgo y gestión excepcionales y trabaja duro para asegurarse de que su equipo esté motivado y capacitado para ofrecer el mejor servicio posible.\n\n    </p>\n    </div>\n\n    <div class="contact" id="3">\n        <img src="${p}" class="contact3-portrait">\n        <p class="contact3-info">\n\n            C es un jefe de meseros comprometido con la calidad del servicio en el restaurante. Tiene una excelente capacidad para liderar y motivar a su equipo de meseros, y trabaja en estrecha colaboración con el gerente del restaurante para garantizar que se brinde una experiencia excepcional al cliente. Además, tiene un gran conocimiento de los productos y servicios del restaurante, lo que le permite ser un recurso valioso para el personal y los clientes por igual. C también tiene habilidades excepcionales para resolver problemas y tomar decisiones rápidas para garantizar que el servicio se preste de manera eficiente y efectiva.\n\n        </p>\n    </div>\n\n    <div class="contact" id="4">\n        <img style="width:250; height:250;" src="${m}" class="contact4-portrait">\n        <p class="contact4-info">\n\n            D es una cliente muy asidua del restaurante, que siempre vuelve por la calidad de los productos y el servicio excepcional que recibe. Es una persona amable y sociable que disfruta de la atmósfera del lugar y de la interacción con el personal. Además, está dispuesta a probar nuevos platos y a compartir sus comentarios para ayudar a mejorar la experiencia del restaurante. Su lealtad y satisfacción son muy valoradas por el equipo del lugar.\n\n        </p>\n    </div>;   \n`;var v=r(379),b=r.n(v),h=r(795),y=r.n(h),x=r(569),q=r.n(x),w=r(565),T=r.n(w),S=r(216),C=r.n(S),j=r(589),E=r.n(j),A=r(28),M={};M.styleTagTransform=E(),M.setAttributes=T(),M.insert=q().bind(null,"head"),M.domAPI=y(),M.insertStyleElement=C(),b()(A.Z,M),A.Z&&A.Z.locals&&A.Z.locals,document.body.onload=s(),document.querySelectorAll(".control-btns").forEach((e=>{e.addEventListener("click",(e=>{"Menu"==e.currentTarget.innerHTML?(console.log("listener menu funciona"),s()):"Information"==e.currentTarget.innerHTML?(console.log("listener information funciona"),console.log("otra accion"),c.querySelectorAll(".content-view > *").forEach((e=>{e.remove()})),c.appendChild(d)):"Contact"==e.currentTarget.innerHTML?(console.log("listener contact funciona"),document.querySelectorAll(".content-view > *").forEach((e=>{e.remove()})),g.appendChild(f)):console.log("ningun boton anda")}))})),console.log("luego del 404")})()})();