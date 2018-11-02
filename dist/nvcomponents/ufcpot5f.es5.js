/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,e){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};nvcomponents.loadBundle("ufcpot5f",["exports"],function(t){var e=window.nvcomponents.h,n=function(){function t(){this.initial=0}return t.prototype.doOpen=function(t,e){return n=this,i=void 0,a=function(){var n,i,r,a,o,c,s,l,u=this;return __generator(this,function(v){if(this.checkActiveIndicator(),this.checkWave(),this.wave.stopWave(),n=this.element.getAttribute("tab-id"),i=this.element.querySelectorAll("[nv-tab]"),!(r=document.body.querySelector('nv-tab-content[tab-id="'+n+'"]')))return[2,!1];if(!(o=r.children[t]))return[2];for(c=0;c<r.children.length;c++)r.children[c]&&(o&&o===r.children[c]?r.children[c].setAttribute("nv-tab-active","true"):r.children[c].setAttribute("nv-tab-active","false"));for(c=0;c<i.length;c++)i[c]&&(c===t?(a=i[c],i[c].setAttribute("nv-tab-active","activating")):i[c].setAttribute("nv-tab-active","false"));return a?(s=a.getBoundingClientRect(),l=this.element.getBoundingClientRect(),this.activeIndicator.classList.add("nv-tabs-activating"),this.activeIndicator.style.width=s.width+"px",this.activeIndicator.style.left=s.left-l.left+"px",e&&(this.setWave(a),this.wave.highlight=!0,this.wave.doWave(e)),this.activeTimer=setTimeout(function(){clearTimeout(u.activeTimer),o&&a&&u.activeIndicator&&(a.setAttribute("nv-tab-active","true"),u.activeIndicator.classList.remove("nv-tabs-activating"))},310),[2]):[2]})},new((r=void 0)||(r=Promise))(function(t,e){function o(t){try{s(a.next(t))}catch(t){e(t)}}function c(t){try{s(a.throw(t))}catch(t){e(t)}}function s(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(o,c)}s((a=a.apply(n,i||[])).next())});var n,i,r,a},t.prototype.checkWave=function(){this.wave=this.element.querySelector("nv-wave"),this.wave||(this.wave=document.createElement("nv-wave"),this.element.appendChild(this.wave))},t.prototype.setWave=function(t){var e=t.getBoundingClientRect(),n=this.element.getBoundingClientRect();this.wave.style.position="absolute",this.wave.style.width=e.width+"px",this.wave.style.height=e.height+"px",this.wave.style.pointerEvents="none",this.wave.style.left=e.left-n.left+"px"},t.prototype.checkActiveIndicator=function(){this.activeIndicator=this.element.querySelector(".active-indicator"),this.activeIndicator||(this.activeIndicator=document.createElement("div"),this.activeIndicator.className="active-indicator",this.element.appendChild(this.activeIndicator))},t.prototype.openTab=function(t,e){if(!t||!t.parentElement)return!1;for(var n=this.element.children,i=0,r=0;r<n.length;r++)if(n[r]!==this.wave&&n[r]!==this.activeIndicator){if(n[r]===t)break;i++}this.doOpen(i,e)},t.prototype.setTabs=function(){var t=this,e=this.element.querySelector('[nv-tab-active="true"]'),n=this.element.children;this.checkActiveIndicator(),this.checkWave();for(var i=function(e){var i=n[e];i.getAttribute("nv-tab")||i===r.activeIndicator||i===r.wave||(i.setAttribute("nv-tab",e.toString()),i.setAttribute("tabindex","0"),i.classList.add("nv-tab"),i.addEventListener("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t.openTab(i,e)}),i.addEventListener("focus",function(){t.wave.reset(),requestAnimationFrame(function(){t.setWave(i),t.wave.startWave(),t.wave.highlight=!1;var e=function(e){"Enter"===e.key&&t.openTab(i)},n=function(){t.wave.stopWave(),i.removeEventListener("keypress",e),i.removeEventListener("blur",n),window.removeEventListener("click",n)};e.bind(t),n.bind(t),window.addEventListener("click",n),i.addEventListener("keypress",e),i.addEventListener("blur",n)})}))},r=this,a=0;a<n.length;a++)i(a);e||(n=this.element.children,this.doOpen(this.initial||0)),this.element.classList.add("ready")},t.prototype.componentDidUpdate=function(){this.setTabs()},t.prototype.componentDidLoad=function(){var t=this;this.setTabs(),new MutationObserver(function(e){for(var n=0;n<e.length;n++)if("childList"===e[n].type){t.setTabs();break}}).observe(this.element,{attributes:!0,childList:!0,characterData:!0})},t.prototype.render=function(){return e("slot",null)},Object.defineProperty(t,"is",{get:function(){return"nv-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{doOpen:{method:!0},element:{elementRef:!0},initial:{type:Number,attr:"initial"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-tabs/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tabs/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tabs/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tabs/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tabs/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tabs/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}:host.ready{opacity:1}:host[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"},enumerable:!0,configurable:!0}),t}();t.NvTabs=n,Object.defineProperty(t,"__esModule",{value:!0})});