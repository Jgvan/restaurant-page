(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(81),a=n.n(i),s=n(645),r=n.n(s),u=n(667),o=n.n(u),c=new URL(n(534),n.b),l=r()(a()),d=o()(c);l.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url("+d+");\n    background-attachment: fixed;\n    overflow-y: scroll;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    text-align: center;\n    color: #ffffff;\n}\n\n#content,\n#header {\n    width: 75vw;\n    margin: 0 auto 0 auto;\n    background-color: rgba(42, 39, 43, 0.8);\n}\n\n#content {\n    padding-bottom: 25px;\n    padding-top: 25px;\n    margin-bottom: 0;\n}\n\n#header {\n    margin-bottom: 70px;\n}\n\n#footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgb(145, 47, 47);\n    padding: 10px;\n    font-size: 1.1rem;\n}\n\n.header-links {\n    display: flex;\n    justify-content: space-evenly;\n    margin-left: 30px;\n    list-style-type: none;\n}\n\n.header-links li {\n    margin: 25px 0 25px 0;\n    font-size: 2rem;\n    cursor: pointer;\n    padding: 10px 30px 10px 30px;\n    color: #ffffff;\n    border: 1px solid #ffffff;\n    transition: 0.2s;\n\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n}\n\n.header-links li:hover,\n.header-links .selected {\n    transform: scale(1.2);\n    background-color: #ffffff;\n    color: #000000;\n}\n\n.home-text *,\n.menu-header *,\n.about-text {\n    margin: 10px 100px 10px 100px;\n}\n\n.about-text p {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.home-text p,\n.about-text p {\n    line-height: 1.6;\n}\n\n.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: auto 50px auto 50px;\n    gap: 10px;\n}\n\n.menu-item {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 20px;\n    border: 2px solid #ffb70355;\n}\n\n.menu-item img {\n    height: 400px;\n    padding: 25px;\n}\n\n.map iframe {\n    display: block;\n    margin: 25px auto 25px auto;\n}\n\na {\n    color: #ffffff;\n}",""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var u=0;u<this.length;u++){var o=this[u][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&r[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},r=[],u=0;u<e.length;u++){var o=e[u],c=i.base?o[0]+i.base:o[0],l=s[c]||0,d="".concat(c," ").concat(l);s[c]=l+1;var m=n(d),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=a(p,i);i.byIndex=u,t.splice(u,0,{identifier:d,updater:f,references:1})}r.push(d)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var u=n(s[r]);t[u].references--}for(var o=i(e,a),c=0;c<s.length;c++){var l=n(s[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=o}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},534:(e,t,n)=>{e.exports=n.p+"assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),s=n(569),r=n.n(s),u=n(565),o=n.n(u),c=n(216),l=n.n(c),d=n(589),m=n.n(d),p=n(28),f={};function h(e,t){const n=document.createElement("li");return n.appendChild(document.createTextNode(e)),n.id=t,n}function v(e){const t=document.querySelector(".selected");t&&t.classList.remove("selected"),document.getElementById(e).classList.add("selected")}function g(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("h3"),i=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),r=document.createElement("p"),u=document.createElement("p");return t.innerText="Welcome to our great restaurant!",n.innerText="Below is some text to tell you about our delicious food",i.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros erat, tempor consequat consequat et, dignissim ut quam. Nunc at erat quis leo tristique tristique quis vitae lacus. Donec in ipsum congue ligula ultricies semper. Donec condimentum dignissim dictum. Phasellus sed dui sed augue sodales auctor in a enim. Sed at libero elit. Aenean consequat nibh velit, eget tincidunt turpis aliquam ut. Maecenas non ornare leo. Suspendisse potenti. Fusce vel ante non justo tempor molestie.",a.innerText="Sed tempor, ex pretium venenatis tempus, nibh mi luctus arcu, in ornare felis augue ut neque. Suspendisse dictum vulputate libero, convallis molestie odio ultricies vel. Suspendisse varius sem fermentum diam vulputate, a viverra lacus posuere. Vestibulum et leo sed enim congue varius. Nulla convallis sapien vel dui elementum, vel faucibus odio egestas. Donec ornare sem mi, ac facilisis magna laoreet non. Donec neque nunc, consectetur vitae consectetur id, sodales in massa. Sed faucibus dui vel quam vestibulum, at ultricies lacus semper. Etiam id consectetur velit. Curabitur nec sapien vitae est sodales placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In risus lorem, tincidunt sit amet leo non, finibus consectetur massa. Curabitur convallis condimentum ultrices. Suspendisse porta, nisi at lacinia mollis, est mi rutrum diam, vel malesuada metus metus a ligula. Donec nec libero in orci vestibulum mattis tincidunt rhoncus ligula.",s.innerText="Curabitur placerat est eu nulla congue maximus. Nullam suscipit nisl sit amet justo aliquet consequat in sed neque. Cras placerat consequat nibh, a volutpat nisi iaculis vitae. Pellentesque in molestie ligula. Fusce molestie consequat dui eget dapibus. Aenean non nulla a ligula finibus ultrices. Aliquam tempor augue facilisis, mattis mi vitae, lobortis nulla. Fusce hendrerit porta est vel porttitor.",r.innerText="Aliquam ex eros, molestie non suscipit nec, lacinia in odio. Suspendisse eu dui nec ipsum mattis fringilla. Nam nisi velit, consectetur et urna a, gravida placerat dui. Etiam fermentum magna in ipsum sollicitudin semper. Proin tempus faucibus erat, sit amet imperdiet turpis hendrerit eu. Nulla malesuada viverra condimentum. Donec vitae velit dictum, gravida lacus sed, malesuada magna. Nam auctor nisi urna, ut gravida lorem fermentum id. Sed volutpat mattis est, in fringilla urna. Nam ac blandit libero. Aliquam aliquam lectus pretium, semper justo at, malesuada risus. Sed eu libero vitae lectus maximus placerat.",u.innerText="Maecenas finibus nibh dignissim, rhoncus magna id, volutpat neque. Etiam et lacus eu quam consequat aliquet vel sed nunc. Pellentesque sit amet finibus nunc, at varius nunc. Donec et mattis nulla, et venenatis nulla. Mauris dictum erat placerat luctus aliquet. Aenean elementum urna ex, ut convallis ipsum porttitor vitae. Duis consectetur rhoncus sem in rhoncus. Sed pulvinar dignissim felis a molestie.",e.append(t,n,i,a,s,r,u),e.classList.add("home-text"),e}()),v("home")}f.styleTagTransform=m(),f.setAttributes=o(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const b=n.p+"assets/chumil-photo-TK5VlaGqkZc-unsplash.jpg",x=n.p+"assets/eiliv-sonas-aceron-pu6b4yIlQF4-unsplash.jpg",y=n.p+"assets/jason-leung-WJphLztU4eY-unsplash.jpg",E=n.p+"assets/ivana-cajina-qvQdLikf7wk-unsplash.jpg";function C(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu"),e.innerHTML="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("h3");return t.textContent="This is our menu for the 2022 spring season",n.textContent="If you have any questions about the menu our friendly staff is happy to help you!",e.appendChild(t),e.appendChild(n),e.classList.add("menu-header"),e}()),t.appendChild(q("Steak","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut feugiat nisi. Donec euismod elementum iaculis. Nunc aliquet, nunc ac accumsan fringilla, odio arcu viverra sapien, id consectetur mi ligula sit amet sapien. Praesent rhoncus lorem sed lectus.",b)),t.appendChild(q("Hamburger","Proin ac nisl finibus, feugiat orci vitae, scelerisque tellus. Donec molestie leo at vestibulum lacinia. Cras consectetur in lectus a interdum. Suspendisse gravida faucibus lorem id malesuada. Curabitur consequat vel sem pellentesque rhoncus. Donec interdum mattis dolor, in fermentum ipsum commodo at.",x)),t.appendChild(q("Ribs","Suspendisse potenti. Nullam purus nulla, viverra eu erat vel, convallis ornare tortor. Sed imperdiet orci et neque fringilla lacinia. Praesent et sagittis massa. Nam.",y)),t.appendChild(q("Chicken wings","Vestibulum metus nunc, eleifend ut auctor in, ornare vel erat. Ut sagittis lacus in ante aliquam, eu convallis dolor tincidunt. Duis non dolor convallis ante rhoncus suscipit.",E)),e.appendChild(t),v("menu")}function q(e,t,n){const i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("h1"),r=document.createElement("p"),u=document.createElement("img");return s.textContent=e,r.textContent=t,u.src=n,a.appendChild(s),a.appendChild(r),i.appendChild(a),i.appendChild(u),i.classList.add("menu-item"),a.classList.add("item-description"),i}function w(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),i=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p");t.textContent="About Us",n.textContent="This is a website for a fictional restaurant. You can reach us at 123-4567890 or ";const r=document.createElement("span");r.textContent="email us",r.style="cursor: pointer; text-decoration: underline;",n.appendChild(r),i.textContent="Sample images used on this website are from users at ";const u=document.createElement("a");return u.href="https://unsplash.com/",u.textContent="Unsplash",u.target="_blank",i.appendChild(u),a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nulla vestibulum eros maximus, vel imperdiet ante tristique. Suspendisse et sapien nec risus venenatis auctor non sed purus. Integer et iaculis nulla. Quisque efficitur laoreet pretium. Quisque at aliquam elit. In bibendum finibus est, at vehicula augue pharetra et. Nam efficitur efficitur massa. Vivamus mattis ultricies.",s.textContent="Aliquam et eleifend nisi. Integer id nisi metus. Mauris vehicula egestas enim, ut vestibulum magna feugiat in. Pellentesque pellentesque ante leo, vitae pretium magna auctor quis. Etiam mattis lacinia varius. Quisque tristique, tortor ut luctus pretium, nisi lectus dignissim eros, sit amet interdum ligula odio a turpis. Etiam rhoncus odio at neque mattis scelerisque. Suspendisse vitae diam hendrerit, tincidunt risus nec, tempor ante. Sed lobortis imperdiet lectus a tincidunt. Donec id commodo.",e.append(t,n,i,a,s),e.classList.add("about-text"),e}()),e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("iframe"),n=document.createElement("h1");return e.classList.add("map"),n.textContent="Where to find us",t.width=600,t.height=450,t.style="border:0;",t.loading="lazy",t.allowFullscreen="",t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.154471819087!2d-6.769380662179066!3d62.01673473541503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48bc2e04ac9b3347%3A0x30cf6bf87c4255f7!2zU01TLCBUw7Nyc2hhdm4!5e0!3m2!1sen!2s!4v1650212997674!5m2!1sen!2s",e.append(n,t),e}()),v("about")}const S=document.getElementById("content");document.body.insertBefore(function(){const e=document.createElement("div");e.id="header";const t=document.createElement("ul");return t.classList.add("header-links"),t.appendChild(h("Home","home")),t.appendChild(h("Menu","menu")),t.appendChild(h("About","about")),e.appendChild(t),e}(),S),g(),document.body.appendChild(function(){const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("a");return t.textContent="Website created by ",n.href="https://github.com/Jgvan",n.textContent="Jógvan",t.appendChild(n),e.appendChild(t),e.id="footer",e}()),function(){const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("about");e.addEventListener("click",g),t.addEventListener("click",C),n.addEventListener("click",w)}()})()})();