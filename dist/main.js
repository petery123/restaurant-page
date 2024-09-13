(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,':root{\n    --main-padding-size: clamp(50px, 10% ,300px);\n    --red-color: rgb(211, 117, 117);\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\nheader{\n    background-color: black;\n    height: 55px;\n    display: flex;\n    align-items: center;\n    gap: 100px;\n    padding: 0 var(--main-padding-size);\n}\n\nheader > span{\n    color: gray;\n    font-size: 1.8em;\n    flex-shrink: 0;\n}\n\nnav{\n    display: flex;\n    max-width: 200px;\n    width: 100%;\n    gap: 10px;\n    justify-content: space-between;\n}\n\nbutton{\n    padding: 0;\n    font-family: inherit;\n    color: white;\n    background: none;\n    font-size: 1.1em;\n    border: none;\n    cursor: pointer;\n}\n\nbutton:hover{\n    color: rgb(175, 174, 174);\n}\n\nbutton:active{\n    color: rgb(73, 73, 73);\n}\n\n#content{\n    background-color: rgb(12, 12, 12);\n    display: flex;\n    justify-content: center;\n}\n\n#content > *{\n    margin: var(--main-padding-size);\n    color: white;\n}\n\n.welcome{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 80px;\n    height: min-content;\n    max-width: 1000px;\n}\n\nimg{\n    opacity: 40%;\n    width: 100%;\n}\n\nimg:hover{\n    opacity: 60%;\n}\n\n.rightSide{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 35px;\n}\n\n.rightSide h2{\n    font-size: 4em;\n    margin-block: 0;\n    color: rgb(216, 216, 216);\n}\n\n.rightSide p{\n    padding: 0;\n    margin: 0;\n    color: rgb(83, 90, 97);\n    position: relative;\n}\n\n.rightSide p::before{\n    position: absolute;\n    content: "";\n    background-color: var(--red-color);\n    height: 2px;\n    width: 100%;\n    top: -30px\n}\n\n.catalogue{\n    display: grid;\n    grid-template-columns: auto auto;\n    column-gap: 100px;\n    row-gap: 25px;\n}\n\n.menuItem{\n    display: grid;\n    grid-template-columns: subgrid;\n    grid-column: 1 / -1;\n    position: relative;\n}\n\n.menuItem > div > p{\n    margin: 0;\n}\n\n.menuItem::after{\n    position: absolute;\n    content: "";\n    height: 1px;\n    width: 400px;\n    background-color: var(--red-color);\n    top: 80px;\n}\n\n.menuItem > div > h2{\n    margin-bottom: 5px;\n}\n\nli{\n    list-style: none;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu > h1{\n    color: rgb(240, 143, 143);\n}',""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),p=t.n(d),u=t(540),l=t.n(u),m=t(113),h=t.n(m),f=t(208),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),o()(f.A,g),f.A&&f.A.locals&&f.A.locals;const v=t.p+"ac0efafe8cfa41846188.jpg",y=function(){const e=document.createElement("div");e.className="welcome";const n=document.createElement("img");n.src=v;const t=function(){const e=document.createElement("h2");e.textContent="IF IT IS NOT SPECTACULAR IT IS NOT SPAURTACUS";const n=document.createElement("p");n.textContent="Get some mouth watering fast food at Spaurtacus Restaurant. For those who love the taste of Nigerian Culture!";const t=document.createElement("div");return t.className="rightSide",t.append(e,n),t}();return e.append(t,n),e}(),b=function(){const e=document.createElement("div"),n=document.createElement("h1");function t(e,n,t){const r=document.createElement("li");r.className="menuItem";const o=document.createElement("div"),a=document.createElement("h2");a.textContent=e;const i=document.createElement("p");i.textContent=n,o.append(a,i);const c=document.createElement("p");return c.textContent=`$${parseFloat(t).toFixed(2)}`,r.append(o,c),r}n.textContent="SPAURTACULAR MENU";const r=document.createElement("div");return r.className="catalogue",r.appendChild(t("Jollof Rice","Spicy rice cooked with tomatoes and peppers",1500)),r.appendChild(t("Pounded Yam with Egusi Soup","Smooth yam paired with rich melon seed soup",2e3)),r.appendChild(t("Suya","Grilled spicy beef skewers",1200)),r.appendChild(t("Akara","Fried bean cakes, crispy on the outside",500)),r.appendChild(t("Moi Moi","Steamed bean pudding with pepper and spices",800)),e.className="menu",e.append(n,r),e}(),x=function(){const e=document.createElement("div"),n=document.createElement("h1");function t(e){const n=document.createElement("p");return n.textContent=e,n}n.textContent="What is Spaurtacus Restaurant about?";const r=document.createElement("div");return r.appendChild(t("Welcome to Spartacus Restaurant, where tradition meets flavor in the heart of Nigerian cuisine! At Spartacus, we pride ourselves on serving up the finest, authentic Nigerian dishes, prepared with love and respect for the rich culinary heritage of our homeland.")),r.appendChild(t("Our menu is crafted to bring the bold, vibrant tastes of Nigeria straight to your plate. From the beloved Jollof Rice to the hearty Pounded Yam with Egusi Soup, and the sizzling Suya, each dish is a tribute to our roots, prepared with the freshest local ingredients and authentic spices.")),r.appendChild(t("Whether you're enjoying a casual meal with friends, or a festive gathering with family, we aim to create an atmosphere that's warm, welcoming, and full of joy—just like home. At Spartacus, every meal is a celebration, and we’re committed to making sure you savor every moment.")),r.appendChild(t("Join us for an unforgettable dining experience that combines great food, warm hospitality, and the true spirit of Nigeria!")),e.append(n,r),e}();!function(){const e=document.querySelector("#content");e.appendChild(y),document.querySelector("nav").addEventListener("click",(function(n){if("NAV"!==n.target.tagName)switch(e.removeChild(e.firstElementChild),n.target.id){case"home":e.appendChild(y);break;case"menu":e.appendChild(b);break;case"about":e.appendChild(x)}}))}()})();