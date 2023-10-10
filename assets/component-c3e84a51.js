import{r as h}from"./index-e03f90b5.js";import{_ as M,a as N}from"./tslib.es6-182fcfb5.js";import{_ as T}from"./setPrototypeOf-0bb37fbe.js";function z(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function B(e,n){var t=h.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=n,t.facade}function ne(e,n){return B(n||null,function(t){return e.forEach(function(r){return z(r,t)})})}function C(e){return e}function W(e,n){n===void 0&&(n=C);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(c){var u=n(c,r);return t.push(u),function(){t=t.filter(function(i){return i!==u})}},assignSyncMedium:function(c){for(r=!0;t.length;){var u=t;t=[],u.forEach(c)}t={push:function(i){return c(i)},filter:function(){return t}}},assignMedium:function(c){r=!0;var u=[];if(t.length){var i=t;t=[],i.forEach(c),u=t}var m=function(){var s=u;u=[],s.forEach(c)},l=function(){return Promise.resolve().then(m)};l(),t={push:function(s){u.push(s),l()},filter:function(s){return u=u.filter(s),t}}}};return a}function te(e,n){return n===void 0&&(n=C),W(e,n)}function re(e){e===void 0&&(e={});var n=W(null);return n.options=M({async:!0,ssr:!1},e),n}var k=function(e){var n=e.sideCar,t=N(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return h.createElement(r,M({},t))};k.isSideCarExport=!0;function ae(e,n){return e.useMedium(n),k}function ie(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,T(e,n)}var I=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},d=new WeakMap,p=new WeakMap,g={},y=0,R=function(e){return e&&(e.host||R(e.parentNode))},O=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=R(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},P=function(e,n,t,r){var a=O(n,Array.isArray(e)?e:[e]);g[t]||(g[t]=new WeakMap);var c=g[t],u=[],i=new Set,m=new Set(a),l=function(o){!o||i.has(o)||(i.add(o),l(o.parentNode))};a.forEach(l);var s=function(o){!o||m.has(o)||Array.prototype.forEach.call(o.children,function(f){if(i.has(f))s(f);else{var v=f.getAttribute(r),x=v!==null&&v!=="false",E=(d.get(f)||0)+1,A=(c.get(f)||0)+1;d.set(f,E),c.set(f,A),u.push(f),E===1&&x&&p.set(f,!0),A===1&&f.setAttribute(t,"true"),x||f.setAttribute(r,"true")}})};return s(n),i.clear(),y++,function(){u.forEach(function(o){var f=d.get(o)-1,v=c.get(o)-1;d.set(o,f),c.set(o,v),f||(p.has(o)||o.removeAttribute(r),p.delete(o)),v||o.removeAttribute(t)}),y--,y||(d=new WeakMap,d=new WeakMap,p=new WeakMap,g={})}},oe=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=n||I(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),P(r,a,t,"aria-hidden")):function(){return null}},S="right-scroll-bar-position",w="width-before-scroll-bar",j="with-scroll-bars-hidden",D="--removed-body-scroll-bar-size",_,L=function(){if(_)return _;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function G(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=L();return n&&e.setAttribute("nonce",n),e}function Q(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function q(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var H=function(){var e=0,n=null;return{add:function(t){e==0&&(n=G())&&(Q(n,t),q(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},K=function(){var e=H();return function(n,t){h.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},V=function(){var e=K(),n=function(t){var r=t.styles,a=t.dynamic;return e(r,a),null};return n},F={left:0,top:0,right:0,gap:0},b=function(e){return parseInt(e||"",10)||0},J=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[b(t),b(r),b(a)]},U=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return F;var n=J(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},X=V(),Y=function(e,n,t,r){var a=e.left,c=e.top,u=e.right,i=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(j,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(S,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(w,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(S," .").concat(S,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(w," .").concat(w,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(D,": ").concat(i,`px;
  }
`)},ce=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,c=h.useMemo(function(){return U(a)},[a]);return h.createElement(X,{styles:Y(c,!n,a,t?"":"!important")})};export{ce as R,ie as _,re as a,te as c,ae as e,w as f,oe as h,V as s,ne as u,S as z};
//# sourceMappingURL=component-c3e84a51.js.map
