(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),l=n(2265);t.default=function({html:e,height:t=null,width:n=null,children:i,dataNtpc:o=""}){return(0,l.useEffect)(()=>{o&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${o}`}})},[o]),(0,r.jsxs)(r.Fragment,{children:[i,e?(0,r.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=n?`${n}px`:"auto"},"data-ntpc":o,dangerouslySetInnerHTML:{__html:e}}):null]})}},8325:function(e,t,n){"use strict";let r;var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let i=n(7437),o=n(2265),s=l(n(8475));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===r&&(r=n),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,i.jsx)(s.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=(...e)=>{if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(...e):console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)}},6927:function(e,t,n){"use strict";let r;var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let i=n(7437),o=n(2265),s=l(n(8475));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:l,preview:a,dataLayer:d}=e;void 0===r&&(r=n);let c="dataLayer"!==n?`$l=${n}`:"",u=l?`&gtm_auth=${l}`:"",f=a?`&gtm_preview=${a}&gtm_cookies_win=x`:"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${d?`w[l].push(${JSON.stringify(d)})`:""}
      })(window,'${n}');`}}),(0,i.jsx)(s.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${c}${u}${f}`})]})},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)}},3233:function(e,t,n){Promise.resolve().then(n.bind(n,2226)),Promise.resolve().then(n.t.bind(n,2445,23)),Promise.resolve().then(n.t.bind(n,8325,23)),Promise.resolve().then(n.t.bind(n,6927,23)),Promise.resolve().then(n.bind(n,1770)),Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,3445,23))},2226:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),l=n(2265),i=n(1396),o=n.n(i),s=n(4033),a=()=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"none",viewBox:"0 0 26 26",id:"reivoe",children:[(0,r.jsx)("path",{fill:"currentcolor",d:"M3.488 18.67c.965 0 1.793.34 2.483 1.02.7.68 1.049 1.488 1.049 2.425 0 .938-.345 1.737-1.035 2.397-.69.65-1.522.976-2.497.976-1.015 0-1.852-.316-2.513-.947C.325 23.9 0 23.087 0 22.1c0-.957.34-1.765 1.02-2.426.68-.67 1.502-1.004 2.468-1.004z"}),(0,r.jsx)("path",{fill:"currentcolor",d:"M25.85 23.886c.1.134.15.267.15.4a.41.41 0 01-.169.346c-.112.085-.268.128-.468.128h-5.324c-.188 0-.35-.037-.488-.11a1.388 1.388 0 01-.412-.363l-6.599-9.103h-.262v2.694c0 1.48-.238 2.773-.713 3.878-.474 1.104-1.137 1.972-1.987 2.603-.85.631-1.824 1.008-2.924 1.13V.728c0-.486.25-.729.75-.729h4.124c.087 0 .15.006.187.018V0h3.412c3.2 0 5.53.674 6.992 2.02 1.463 1.336 2.194 3.248 2.194 5.736 0 4.721-2.78 7.191-8.342 7.41 2.824.68 5.23 2.372 7.217 5.079l2.662 3.641zM18.689 7.938c0-.983-.238-1.712-.712-2.185-.475-.473-.994-.759-1.556-.856a9.754 9.754 0 00-1.856-.163h-2.287v6.517h2.287c.637 0 1.243-.06 1.818-.182.575-.121 1.1-.425 1.575-.91.487-.486.731-1.226.731-2.221z"})]}),d=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"15",fill:"none",viewBox:"0 0 17 15",id:"burger",children:(0,r.jsx)("path",{fill:"currentcolor",fillOpacity:"0.9",fillRule:"evenodd",d:"M.895 0a.836.836 0 00-.633.305C.094.5 0 .765 0 1.042c0 .276.094.54.262.736a.836.836 0 00.633.305h15.21c.238 0 .465-.11.633-.305.168-.195.262-.46.262-.736 0-.277-.094-.542-.262-.737A.836.836 0 0016.105 0H.895zM0 7.292c0-.277.094-.542.262-.737a.836.836 0 01.633-.305h15.21c.238 0 .465.11.633.305.168.195.262.46.262.737 0 .276-.094.54-.262.736a.836.836 0 01-.633.305H.895a.836.836 0 01-.633-.305A1.134 1.134 0 010 7.292zm0 6.25c0-.276.094-.54.262-.736a.836.836 0 01.633-.305h15.21c.238 0 .465.11.633.305.168.196.262.46.262.737 0 .276-.094.54-.262.736a.836.836 0 01-.633.305H.895a.836.836 0 01-.633-.305A1.134 1.134 0 010 13.543z",clipRule:"evenodd"})})},c=()=>{let e=(0,s.usePathname)();return(0,l.useEffect)(()=>{let e=document.getElementById("loader"),t=document.getElementById("menu"),n=document.getElementById("hero"),r=document.getElementById("model"),l=e=>{e.matches?(n&&(n.src="/pay_drk.png"),r&&(r.src="/model_drk.png")):(n&&(n.src="/pay.png"),r&&(r.src="/model.png"))},i=window.matchMedia("(prefers-color-scheme: dark)");i.addEventListener("change",l),i.matches?(n&&(n.src="/pay_drk.png"),r&&(r.src="/model_drk.png")):(n&&(n.src="/pay.png"),r&&(r.src="/model.png")),e&&setTimeout(()=>{e.style.display="none"},1e3);let o=()=>{t&&t.classList.toggle("menuToggle")},s=document.getElementById("burger");return null==s||s.addEventListener("click",o,!1),t&&t.classList.contains("menuToggle")&&t.classList.toggle("menuToggle"),()=>{window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",l),e&&(e.style.display="block"),null==s||s.removeEventListener("click",o)}},[e]),(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)(a,{})}),(0,r.jsxs)("div",{className:"menu",id:"menu",children:[(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsxs)("span",{children:["Products ",(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fill:"currentColor",d:"m17.5 4.75l-7.5 7.5l-7.5-7.5L1 6.25l9 9l9-9z"})})]}),(0,r.jsx)("div",{className:"submenu",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/business",children:"Business"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/personal",children:"Personal"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/developer",children:"Developers"})})]})})]}),(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsxs)("span",{children:["Company ",(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fill:"currentColor",d:"m17.5 4.75l-7.5 7.5l-7.5-7.5L1 6.25l9 9l9-9z"})})]}),(0,r.jsx)("div",{className:"submenu",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/about",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/careers",children:"Careers"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/blog",children:"Blog"})})]})})]}),(0,r.jsx)(o(),{href:"/faq",children:"FAQ"}),(0,r.jsx)(o(),{href:"/support",children:"Support"})]}),(0,r.jsx)(d,{}),(0,r.jsx)(o(),{href:"/onboard",children:"Get Started"})]})})}},1418:function(e,t,n){"use strict";function r(e){let{src:t,width:n,quality:r}=e;return"".concat(t)}n.r(t),n.d(t,{default:function(){return r}})},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?l[i]=!!n[e]:l.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:o}=n;return o?l.innerHTML=o.__html||"":i&&(l.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),l}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),s=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var a;(null==n?void 0:null==(a=n.tagName)?void 0:a.toLowerCase())===e&&s.push(n)}let d=t.map(l).filter(e=>{for(let t=0,n=s.length;t<n;t++)if(i(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),d.forEach(e=>n.insertBefore(e,r)),r.content=(o-s.length+d.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g},default:function(){return y}});let r=n(1024),l=n(8533),i=r._(n(4887)),o=l._(n(2265)),s=n(3634),a=n(3313),d=n(2185),c=new Map,u=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:i,children:o="",strategy:s="afterInteractive",onError:d,stylesheets:p}=e,m=n||t;if(m&&u.has(m))return;if(c.has(t)){u.add(m),c.get(t).then(r,d);return}let g=()=>{l&&l(),u.add(m)},_=document.createElement("script"),y=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){d&&d(e)});for(let[n,r]of(i?(_.innerHTML=i.__html||"",g()):o?(_.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",g()):t&&(_.src=t,c.set(t,y)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=a.DOMAttributeNames[n]||n.toLowerCase();_.setAttribute(e,r)}"worker"===s&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",s),p&&h(p),document.body.appendChild(_)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>p(e))}):p(e)}function g(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");u.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:a="afterInteractive",onError:c,stylesheets:f,...h}=e,{updateScripts:m,scripts:g,getIsSsr:_,appDir:y,nonce:v}=(0,o.useContext)(s.HeadManagerContext),x=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;x.current||(l&&e&&u.has(e)&&l(),x.current=!0)},[l,t,n]);let w=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!w.current&&("afterInteractive"===a?p(e):"lazyOnload"===a&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>p(e))})),w.current=!0)},[e,a]),("beforeInteractive"===a||"worker"===a)&&(m?(g[a]=(g[a]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...h}]),m(g)):_&&_()?u.add(t||n):_&&!_()&&p(e)),y){if(f&&f.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===a)return n?(i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),o.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),o.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h}])+")"}}));"afterInteractive"===a&&n&&i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let y=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2445:function(){},3445:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(e,t,n){"use strict";var r=n(2265),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)},4033:function(e,t,n){e.exports=n(5313)},8475:function(e,t,n){e.exports=n(5935)}},function(e){e.O(0,[250,749,971,938,744],function(){return e(e.s=3233)}),_N_E=e.O()}]);