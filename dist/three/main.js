!function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([36,1]),n()}({29:function(e,t,n){var r=n(16),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},30:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!1);o.push([e.i,"header{position:fixed;z-index:10;top:0;left:0;width:100%;height:60px;background:#24292e}header h1{color:#fff;opacity:.8;line-height:60px;margin:0 0 0 20px;font-weight:500;font-size:24px;font-family:PingFang SC,Verdana,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif}header button{position:absolute;right:50px;top:50%;transform:translateY(-50%);background:none;border:0;color:#fff;opacity:.6;outline:none;display:none}header button:active{opacity:.8}header a{display:inline-block;position:absolute;right:20px;top:50%;margin-top:-12px;font-size:0;opacity:.6}header a:hover{opacity:.8}header svg{fill:currentColor;color:#fff}",""]),t.default=o},34:function(e,t,n){var r=n(16),o=n(35);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},35:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r)()(!1);o.push([e.i,'html,body{margin:0;padding:0;font-size:16px}body{overflow:hidden;padding-top:60px}.aside-wrapper{position:fixed;z-index:10;top:60px;left:0;bottom:0;width:210px}.aside-wrapper ul,.aside-wrapper li{list-style:none;margin:0;padding:0}.aside-wrapper li{height:40px;line-height:40px}.aside-wrapper li a{display:block;padding:0 20px;opacity:.8;color:#24292e;text-decoration:none}.aside-wrapper li a:hover{opacity:1}.aside-wrapper li.is-current a{font-weight:bold;text-decoration:underline}main{position:fixed;top:60px;right:0;left:210px;bottom:0;overflow-y:auto;outline:none}.font-size-zero{font-size:0}@media screen and (max-width: 640px){header h1{font-size:16px}header button{display:block}.aside-wrapper{bottom:auto;width:100%;background:rgba(255,255,255,.8);transition:all .3s ease-in-out;transform:scaleY(1);opacity:1;transform-origin:center top}.aside-wrapper:before{content:"";position:absolute;top:-7px;right:64px;border-bottom:7px solid rgba(255,255,255,.6);border-left:7px solid transparent;border-right:7px solid transparent}.aside-wrapper.hide{transform:scaleY(0);opacity:0}main{left:0}}',""]),t.default=o},36:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(18),i=n.n(a),l=n(12),c=n(2),u=[{text:"Home",path:"/"},{text:"First 3D Scene",path:"/First3DScene"},{text:"Multiple Geometry",path:"/MultipleGeometry"},{text:"Materials",path:"/Materials"},{text:"Draw Lines",path:"/DrawLines"},{text:"Earth",path:"/Earth"},{text:"Canvas Demo",path:"/CanvasDemo"},{text:"Current Time(balls)",path:"/CanvasCurrentTime"},{text:"Clock(C4D .STL file)",path:"/ClockSTL"},{text:"Clock(C4D .Obj file)",path:"/ClockObj"}],s=n(8),f=n.n(s);n(29);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,a=v(i);function i(){return p(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this;return o.a.createElement("header",null,o.a.createElement("h1",null,"Three.js demo"),o.a.createElement("button",{onClick:function(t){return e.props.clickMenu(t)}},"Menu"),o.a.createElement("a",{href:"https://github.com/capricorncd/blog",target:"_blank",rel:"noreferrer"},o.a.createElement("svg",{height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true"},o.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))))}}])&&h(t.prototype,n),r&&h(t,r),i}(r.Component);b.propTypes={clickMenu:f.a.func};var g,E,x,S,k,z,O=b,j=n(0),M=n.p+"static/img/earth.jpg",C=n.p+"static/img/moon.jpg",P=n(7),T=16763136,A=16736e3,D=340589,L=0,_=16777215;function H(e){new Promise((function(e,t){var n=0,r=[],o={},a=new j.R;function i(){2==++n&&(r.length>0?t(r):e(o))}a.load(M,(function(e){o.earthTexture=e,i()}),void 0,(function(e){r.push(e),i()})),a.load(C,(function(e){o.moonTexture=e,i()}),void 0,(function(e){r.push(e),i()}))})).then((function(t){!function(e,t){var n=t.earthTexture,r=t.moonTexture;S=new j.f,g=new j.M;var o=new j.N(100,50,50),a=new j.z(o,new j.D({map:n}));g.add(a);var i=new j.N(27,50,50),l=new j.z(i,new j.D({map:r}));l.position.x=200,g.add(l);var c=e.offsetWidth,u=e.offsetHeight,s=new j.G(45,c/u,1,2e4);s.position.set(1500,700,-100);var f=new j.a(10066329);f.position.set(100,100,200),g.add(f);var d=new j.j(_,1);d.position.set(20,1,1),g.add(d),(E=new j.U({antialias:!0})).setSize(c,u),E.setClearColor(L,1),e.appendChild(E.domElement),new P.a(s,e),z=function(t){c=e.offsetWidth,u=e.offsetHeight,s.aspect=c/u,s.updateProjectionMatrix(),E.setSize(c,u)},window.addEventListener("resize",z),function e(){x=requestAnimationFrame(e),a.rotation.y+=.025,l.rotation.y+=.0025/28*10,k=S.getElapsedTime(),l.position.set(580*Math.sin(k),0,580*Math.cos(k)),E.render(g,s)}()}(e,t)})).catch((function(e){console.error.apply(null,e)}))}function q(){g.remove(),E.dispose(),g=null,E=null,cancelAnimationFrame(x),window.removeEventListener("resize",z)}var N,W,I=function(){var e=null;return Object(r.useEffect)((function(){return e||H(e=document.querySelector(".home-el-hook")),function(){q()}}),[]),o.a.createElement("main",{className:"home-el-hook font-size-zero"})};function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16777215,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D,r=new j.H(t);r.position.set(400,200,300),e.add(r);var o=new j.a(n);return e.add(o),{pointLight:r,ambientLight:o}}function Y(e,t,n){var r=t.offsetWidth,o=t.offsetHeight;n=n||function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200,o=t/n,a=new j.F(-r*o,r*o,r,-r,1,1e3);return a.position.set(200,300,200),a.lookAt(e.position),a}(e,r,o);var a=new j.U({antialias:!0});function i(){a.render(e,n)}return a.setSize(r,o),a.setClearColor(L,1),t.appendChild(a.domElement),new P.a(n,t).addEventListener("change",i),i(),a}var R,F,X=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){N=new j.M;var t=new j.O(100,100,100),n=new j.B({color:A}),r=new j.z(t,n);N.add(r),B(N,14522777,14509670),W=Y(N,e)}(e=document.querySelector(".first-3d-scene-el-hook")),function(){N.remove(),W.dispose(),N=null,W=null}}),[]),o.a.createElement("main",{className:"first-3d-scene-el-hook font-size-zero"})};var G,U,J=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){R=new j.M;var t=new j.c(100,100,100),n=new j.z(t,new j.B({color:T}));R.add(n);var r=new j.O(50,40,40),o=new j.z(r,new j.B({color:A}));o.translateX(100),R.add(o);var a=new j.h(0,30,100,30),i=new j.z(a,new j.B({color:A}));i.translateY(100),R.add(i);var l=new j.E(50),c=new j.z(l,new j.B({color:A}));c.translateX(-100),R.add(c);var u=new j.k(50),s=new j.z(u,new j.B({color:A}));s.position.set(0,0,100),R.add(s);var f=new j.r(50),d=new j.z(f,new j.B({color:A}));d.translateY(93),d.translateX(100),R.add(d);var p=new j.b(2e3);R.add(p),B(R);var h=new j.H(3355443);h.position.set(-200,-200,-200),R.add(h),F=Y(R,e)}(e=document.querySelector(".multiple-geometry-el-hook")),function(){R.remove(),F.dispose(),R=null,F=null}}),[]),o.a.createElement("main",{className:"multiple-geometry-el-hook font-size-zero"})};var $,Q,V=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){G=new j.M;var t=new j.O(50,40,40),n=new j.z(t,new j.A({color:D}));n.translateX(0),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.A({color:D,wireframe:!0}))).translateX(105),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.B({color:A,opacity:.8,transparent:!0}))).translateY(105),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.B({color:A,wireframe:!0}))).translateX(105),n.translateY(105),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.D({color:T,specular:3355443}))).translateY(-105),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.D({color:T,wireframe:!0}))).translateX(105),n.translateY(-105),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.C({bumpMap:(new j.R).load(M,(function(){}),console.warn,console.error)}))).translateX(-105),G.add(n),t=new j.O(50,40,40),(n=new j.z(t,new j.C({wireframe:!0}))).translateX(-210),G.add(n);var r=new j.b(2e3);G.add(r),B(G),U=Y(G,e)}(e=document.querySelector(".materials-el-hook")),function(){G.remove(),U.dispose(),G=null,U=null}}),[]),o.a.createElement("main",{className:"materials-el-hook font-size-zero"})};var K=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){$=new j.M;var t=new j.p,n=new j.A({vertexColors:!0});t.colors.push(new j.g(T),new j.g(A));var r=new j.T(-100,0,100),o=new j.T(100,0,-100);t.vertices.push(r,o);var a=new j.s(t,n,j.u);$.add(a);var i=new j.G(50,e.offsetWidth/e.offsetHeight,.1,1e3);i.position.y=500,Q=Y($,e,i)}(e=document.querySelector(".draw-lines-el-hook")),function(){$.remove(),Q.dispose(),$=null,Q=null}})),o.a.createElement("main",{className:"draw-lines-el-hook font-size-zero"})};var Z=function(){var e=null;return Object(r.useEffect)((function(){return e||H(e=document.querySelector(".multiple-geometry-el-hook")),function(){q()}}),[]),o.a.createElement("main",{className:"multiple-geometry-el-hook font-size-zero"})};function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ne(e,t,n){e.beginPath(),e.moveTo(47.5,n-5),e.lineTo(95,n-5),e.lineTo(5,n-100),e.lineTo(5,n-5),e.lineTo(47.5,n-5),e.lineWidth=10,e.strokeStyle="#330000",e.stroke(),e.fillStyle="rgb(10, 200, 10)",e.fill(),e.closePath(),e.beginPath(),e.moveTo(45,5),e.lineTo(90,5),e.lineTo(5,n-430),e.lineTo(5,5),e.lineTo(45,5),e.lineWidth=10,e.strokeStyle="#33ccff",e.stroke(),e.fillStyle="rgb(255, 200, 10)",e.fill(),e.closePath()}function re(e,t,n){var r=t-320;[{p:[[0,0],[8,0],[4,4]],color:"#caff67"},{p:[[0,0],[4,4],[0,8]],color:"#67becf"},{p:[[8,0],[8,4],[6,6],[6,2]],color:"#ef3d61"},{p:[[6,2],[6,6],[4,4]],color:"#f9f51a"},{p:[[4,4],[6,6],[4,8],[2,6]],color:"#a594c0"},{p:[[2,6],[4,8],[0,8]],color:"#fa8ecc"},{p:[[8,4],[8,8],[4,8]],color:"#f6ca29"}].forEach((function(t){!function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;t.beginPath(),e.p.forEach((function(e,a){var i=ee(e,2),l=i[0],c=i[1];l=l*n+r,c=c*n+o,0===a?t.moveTo(l,c):t.lineTo(l,c)})),t.closePath(),t.fillStyle=e.color,t.fill()}(t,e,40,r,0)}))}var oe=new Array(9).fill(1);var ae={0:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],1:[[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0]],2:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],3:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],4:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1]],5:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],6:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],7:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1]],8:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],9:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],":":[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]},ie=2*Math.PI;function le(e,t,n,r){ae[n].forEach((function(n,o){n.forEach((function(n,a){1===n&&(r.beginPath(),r.arc(e+12*a,t+12*o,5,0,ie),r.closePath(),r.fill())}))}))}var ce=function(){var e,t,n,a,i;function l(){a=e.offsetWidth,i=e.offsetHeight,t.width=a,t.height=i,ne(n,0,i),re(n,a)}return Object(r.useEffect)((function(){return e||(e=document.querySelector(".canvas-hook"),a=e.offsetWidth,i=e.offsetHeight,(t=e.querySelector("canvas")).width=a,t.height=i,n=t.getContext("2d"),window.addEventListener("resize",l),ne(n,0,i),re(n,a),function(e){e.lineWidth=3,e.strokeStyle="#ef3d61",oe.forEach((function(t,n){e.beginPath(),e.arc(115*n,55,50,0,.25*n*Math.PI,!0),e.stroke()})),oe.forEach((function(t,n){e.beginPath(),e.arc(115*n,160,50,0,.25*n*Math.PI,!0),e.closePath(),e.stroke()})),oe.forEach((function(t,n){e.beginPath(),e.arc(115*n,265,50,0,.25*n*Math.PI,!1),e.stroke()})),oe.forEach((function(t,n){e.beginPath(),e.arc(115*n,370,50,0,.25*n*Math.PI,!1),e.closePath(),e.stroke()})),e.fillStyle="#ef3d61",oe.forEach((function(t,n){e.beginPath(),e.arc(115*n,475,50,0,.25*n*Math.PI,!1),e.fill()}))}(n),function(e){e.fillStyle="#67becf",new Array(10).fill(1).forEach((function(t,n){le(5+12*n*8,600,n,e)})),le(965,600,":",e)}(n)),function(){console.log("destroy"),window.removeEventListener("resize",l)}}),[]),o.a.createElement("main",{className:"canvas-hook font-size-zero"},o.a.createElement("canvas",null,"Canvas is not supported by current browser"))};function ue(e){return(e+="")[1]?e:"0"+e}var se,fe,de=2*Math.PI,pe=[];function he(e,t,n){fe=n/4;var r=(t-696)/2;e.fillStyle="#24292e";var o="";e.clearRect(0,0,t,n);var a=0;o=function(e){var t=[];return t.push(ue(e.getHours())),t.push(ue(e.getMinutes())),t.push(ue(e.getSeconds())),t.join(":")}(new Date),se||(se=o.split("")),o.split("").forEach((function(t,n){var o,i;le(r+6*a*2,fe,t,e),se[n]!==t&&(o=r+6*a*2,i=fe,ae[t].forEach((function(e,t){e.forEach((function(e,n){0===e&&pe.push({x:o+12*n,y:i+12*t,g:.2+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random()))*Math.random(),vy:-5,color:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")})}))}))),a+=":"===t?5:8})),se=o.split(""),pe.forEach((function(t){!function(e,t,n,r){e.x+=e.vx,e.y+=e.vy,e.vy+=e.g,e.y>=r-5&&(e.y=r-5,e.vy=.6*-e.vy);t.fillStyle=e.color,t.beginPath(),t.arc(e.x,e.y,5,0,de),t.closePath(),t.fill()}(t,e,0,n)})),pe=pe.filter((function(e){return e.x+5>0&&e.x-5<t}))}var me,ve,we=function(){var e,t,n,a,i,l;function c(){a=e.offsetWidth,i=e.offsetHeight,t.width=a,t.height=i}function u(){l=requestAnimationFrame(u),he(n,a,i)}return Object(r.useEffect)((function(){return e||(e=document.querySelector(".canvas-hook"),a=e.offsetWidth,i=e.offsetHeight,(t=e.querySelector("canvas")).width=a,t.height=i,n=t.getContext("2d"),window.addEventListener("resize",c),u()),function(){window.removeEventListener("resize",c),cancelAnimationFrame(l)}}),[]),o.a.createElement("main",{className:"canvas-hook font-size-zero"},o.a.createElement("canvas",null,"Canvas is not supported by current browser"))},ye=n(19);function be(e){new Promise((function(e,t){(new ye.a).load("static/clock.stl",e,void 0,t)})).then((function(t){!function(e,t){me=new j.M;var n=new j.z(t,new j.D({color:10066329}));me.add(n);var r=e.offsetWidth,o=e.offsetHeight,a=new j.G(45,r/o,1,8e4);a.position.set(0,-300,100);var i=new j.a(6710886);i.position.set(100,1e3,200),me.add(i);var l=new j.j(_,.9);function c(){ve.render(me,a)}l.position.set(-100,-800,500),me.add(l),(ve=new j.U({antialias:!0})).setSize(r,o),ve.setClearColor(L,1),e.appendChild(ve.domElement),new P.a(a,e).addEventListener("change",c),c()}(e,t)})).catch(console.error)}var ge,Ee,xe=function(){return Object(r.useEffect)((function(){return be(document.querySelector(".clock-stl-demo-el-hook")),function(){me&&me.remove(),ve&&ve.dispose(),me=null,ve=null}}),[]),o.a.createElement("main",{className:"clock-stl-demo-el-hook font-size-zero"})},Se=n(20),ke=n(21);function ze(e){new Promise((function(e,t){var n=new Se.a;(new ke.a).load("static/clock.mtl",(function(r){n.setMaterials(r),n.load("static/clock.obj",(function(t){e(t)}),void 0,t)}),void 0,t)})).then((function(t){!function(e,t){var n=e.offsetWidth,r=e.offsetHeight;(ge=new j.M).add(t);var o=new j.a(6710886);o.position.set(100,-100,-200),ge.add(o);var a=new j.j(13421772,1);a.position.set(2e3,1e3,1e3),ge.add(a);var i=new j.G(45,n/r,1,8e4);function l(){Ee.render(ge,i)}i.position.set(-150,-50,300),(Ee=new j.U({antialias:!0})).setSize(n,r),Ee.setClearColor(L,1),e.appendChild(Ee.domElement),new P.a(i,e).addEventListener("change",l),l()}(e,t)})).catch(console.error)}var Oe=function(){return Object(r.useEffect)((function(){return ze(document.querySelector(".clock-demo-el-hook")),function(){ge&&Ee&&(ge.remove(),Ee.dispose(),ge=null,Ee=null)}}),[]),o.a.createElement("main",{className:"clock-demo-el-hook font-size-zero"})};function je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Me(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ce=function(){var e=je(Object(r.useState)(!1),2),t=e[0],n=e[1],a=je(Object(r.useState)(location.hash.split("#").pop()),2),i=a[0],s=a[1],f=["aside-wrapper"];function d(){t&&n(!1)}t||f.push("hide"),Object(r.useEffect)((function(){return document.addEventListener("click",d),function(){document.removeEventListener("click",d)}}),[t]);var p=u.map((function(e,t){return o.a.createElement("li",{key:t,onClick:function(){return function(e){s(e.path)}(e)},className:i===e.path?"is-current":""},o.a.createElement(l.b,{to:e.path},e.text))}));return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(O,{clickMenu:function(e){n(!t)}}),o.a.createElement("nav",{className:f.join(" ")},o.a.createElement("ul",null,p)),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/ClockObj"},o.a.createElement(Oe,null)),o.a.createElement(c.a,{path:"/ClockSTL"},o.a.createElement(xe,null)),o.a.createElement(c.a,{path:"/CanvasCurrentTime"},o.a.createElement(we,null)),o.a.createElement(c.a,{path:"/CanvasDemo"},o.a.createElement(ce,null)),o.a.createElement(c.a,{path:"/Earth"},o.a.createElement(Z,null)),o.a.createElement(c.a,{path:"/DrawLines"},o.a.createElement(K,null)),o.a.createElement(c.a,{path:"/Materials"},o.a.createElement(V,null)),o.a.createElement(c.a,{path:"/MultipleGeometry"},o.a.createElement(J,null)),o.a.createElement(c.a,{path:"/First3DScene"},o.a.createElement(X,null)),o.a.createElement(c.a,{path:"/"},o.a.createElement(I,null)))))};n(34);i.a.render(o.a.createElement(Ce,null),document.querySelector("#app"))}});