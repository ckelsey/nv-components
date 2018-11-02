/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(e,t){var i,r,n,l,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{i=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};import{h}from"./nvcomponents.core.js";var __awaiter=function(e,t,i,r){return new(i||(i=Promise))(function(n,l){function o(e){try{p(r.next(e))}catch(e){l(e)}}function s(e){try{p(r.throw(e))}catch(e){l(e)}}function p(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,s)}p((r=r.apply(e,t||[])).next())})},NvPulse=function(){function e(){this.highlight=!1}return e.prototype.startPulse=function(){return __awaiter(this,void 0,void 0,function(){var e,t=this;return __generator(this,function(i){return clearInterval(this.pulseTimer),this.pulseBox?(e=Math.min(this.element.offsetWidth,this.element.offsetHeight),this.pulseBox.style.width=e+"px",this.pulseBox.style.height=e+"px",this.pulseBox.style.top=this.element.offsetHeight/2-e/2+"px",this.pulseBox.style.left=this.element.offsetWidth/2-e/2+"px",this.highlight?this.pulseBox.classList.add("highlighted"):this.pulseBox.classList.remove("highlighted"),this.pulseBox.classList.add("pulseIn"),this.pulseBox.classList.add("pulseOut"),this.pulseTimer=setInterval(function(){t.pulseBox&&t.pulseBox.classList.toggle("pulseOut")},1200),[2]):[2]})})},e.prototype.stopPulse=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return clearInterval(this.pulseTimer),this.pulseBox?(e=Math.min(this.element.offsetWidth,this.element.offsetHeight),this.pulseBox.style.width=e+"px",this.pulseBox.style.height=e+"px",this.pulseBox.style.top=this.element.offsetHeight/2-e/2+"px",this.pulseBox.style.left=this.element.offsetWidth/2-e/2+"px",this.highlight?this.pulseBox.classList.add("highlighted"):this.pulseBox.classList.remove("highlighted"),this.pulseBox.classList.remove("pulseIn"),this.pulseBox.classList.remove("pulseOut"),[2]):[2]})})},e.prototype.render=function(){var e=this;return h("div",{class:"nv-pulse",ref:function(t){return e.pulseBox=t}})},Object.defineProperty(e,"is",{get:function(){return"nv-pulse"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},startPulse:{method:!0},stopPulse:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{position:absolute;width:100%;height:100%;pointer-events:none;top:0;left:0}.nv-pulse{position:absolute;width:100%;height:100%;top:0;left:0;border-radius:50%;-webkit-box-shadow:0 0 0 6px rgba(255,255,255,.45);box-shadow:0 0 0 6px rgba(255,255,255,.45);background-color:rgba(255,255,255,.45);opacity:0;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:background-color .4s ease-out,opacity .4s ease-out,-webkit-box-shadow .4s ease-out,-webkit-transform .4s ease-out;transition:background-color .4s ease-out,opacity .4s ease-out,-webkit-box-shadow .4s ease-out,-webkit-transform .4s ease-out;transition:background-color .4s ease-out,box-shadow .4s ease-out,opacity .4s ease-out,transform .4s ease-out;transition:background-color .4s ease-out,box-shadow .4s ease-out,opacity .4s ease-out,transform .4s ease-out,-webkit-box-shadow .4s ease-out,-webkit-transform .4s ease-out;pointer-events:none}.nv-pulse.highlighted{-webkit-box-shadow:0 0 0 6px #76b900;box-shadow:0 0 0 6px #76b900;background-color:#76b900}.nv-pulse.pulseIn{opacity:.16;-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9);-webkit-transition:background-color 1s ease-out,opacity 1s ease-out,-webkit-box-shadow 1s ease-out,-webkit-transform 1s ease-out;transition:background-color 1s ease-out,opacity 1s ease-out,-webkit-box-shadow 1s ease-out,-webkit-transform 1s ease-out;transition:background-color 1s ease-out,box-shadow 1s ease-out,opacity 1s ease-out,transform 1s ease-out;transition:background-color 1s ease-out,box-shadow 1s ease-out,opacity 1s ease-out,transform 1s ease-out,-webkit-box-shadow 1s ease-out,-webkit-transform 1s ease-out}.nv-pulse.pulseOut{opacity:.08;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}"},enumerable:!0,configurable:!0}),e}(),__awaiter$1=function(e,t,i,r){return new(i||(i=Promise))(function(n,l){function o(e){try{p(r.next(e))}catch(e){l(e)}}function s(e){try{p(r.throw(e))}catch(e){l(e)}}function p(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,s)}p((r=r.apply(e,t||[])).next())})},NvRipple=function(){function e(){this.highlight=!1}return e.prototype.doRipple=function(){return __awaiter$1(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return this.rippleBox?[2,this.startRipple().then(function(){return e.stopRipple()})]:[2]})})},e.prototype.startRipple=function(){return __awaiter$1(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return this.rippleBox?(clearTimeout(this.rippleTimer),[2,new Promise(function(t){var i=Math.min(e.element.offsetWidth,e.element.offsetHeight);e.rippleBox.style.width=i+"px",e.rippleBox.style.height=i+"px",e.rippleBox.style.top=e.element.offsetHeight/2-i/2+"px",e.rippleBox.style.left=e.element.offsetWidth/2-i/2+"px",e.highlight?e.rippleBox.classList.add("highlighted"):e.rippleBox.classList.remove("highlighted"),e.rippleBox.classList.add("rippling"),e.rippleBox.classList.add("rippleIn"),e.rippleTimer=setTimeout(function(){e.rippleBox.classList.add("rippleGrow"),e.rippleBox.classList.add("rippleMiddle"),e.rippleBox.classList.remove("rippleIn"),setTimeout(function(){return t()},200)},10)})]):[2]})})},e.prototype.stopRipple=function(){return __awaiter$1(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return this.rippleBox?(clearTimeout(this.rippleTimer),[2,new Promise(function(t){var i=Math.min(e.element.offsetWidth,e.element.offsetHeight);e.rippleBox.style.width=i+"px",e.rippleBox.style.height=i+"px",e.rippleBox.style.top=e.element.offsetHeight/2-i/2+"px",e.rippleBox.style.left=e.element.offsetWidth/2-i/2+"px",e.highlight?e.rippleBox.classList.add("highlighted"):e.rippleBox.classList.remove("highlighted"),e.rippleBox.classList.add("rippling"),e.rippleBox.classList.remove("rippleIn"),e.rippleBox.classList.remove("rippleMiddle"),e.rippleTimer=setTimeout(function(){clearTimeout(e.rippleTimer),e.rippleBox.classList.remove("rippling"),e.rippleBox.classList.remove("rippleIn"),e.rippleBox.classList.remove("rippleMiddle"),e.rippleBox.classList.remove("rippleOut"),e.rippleBox.classList.remove("rippleGrow"),t()},300)})]):[2]})})},e.prototype.render=function(){var e=this;return h("div",{class:"nv-ripple",ref:function(t){return e.rippleBox=t}})},Object.defineProperty(e,"is",{get:function(){return"nv-ripple"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{doRipple:{method:!0},element:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},startRipple:{method:!0},stopRipple:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{position:absolute;width:100%;height:100%;pointer-events:none;top:0;left:0}.nv-ripple{position:absolute;width:100%;height:100%;top:0;left:0;border-radius:50%;-webkit-box-shadow:0 0 0 6px rgba(255,255,255,.45);box-shadow:0 0 0 6px rgba(255,255,255,.45);background:rgba(255,255,255,.45);opacity:0;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:all .2s ease-out;transition:all .2s ease-out;pointer-events:none}.nv-ripple.highlighted{-webkit-box-shadow:0 0 0 6px #76b900;box-shadow:0 0 0 6px #76b900;background:#76b900}.nv-ripple.rippling{-webkit-transition:opacity .15s ease-out,-webkit-transform .4s ease-out;transition:opacity .15s ease-out,-webkit-transform .4s ease-out;transition:opacity .15s ease-out,transform .4s ease-out;transition:opacity .15s ease-out,transform .4s ease-out,-webkit-transform .4s ease-out}.nv-ripple.rippling.rippleIn{opacity:0;-webkit-transform:scale3d(.6,.6,.6);transform:scale3d(.6,.6,.6)}.nv-ripple.rippling.rippleMiddle{opacity:.32}.nv-ripple.rippling.rippleOut{opacity:.04}.nv-ripple.rippling.rippleGrow{-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}"},enumerable:!0,configurable:!0}),e}();export{NvPulse,NvRipple};