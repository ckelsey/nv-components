/*! Built with http://stenciljs.com */
import{h}from"./nvcomponents.core.js";var NvTabContent=function(){function t(){}return t.prototype.initTabs=function(){for(var t=this.element.children,e=0;e<t.length;e++){var n=t[e];n.getAttribute("nv-tab-content")||(n.setAttribute("nv-tab-content",e.toString()),n.classList.add("nv-tab-content"))}this.element.classList.add("nv-tabs-ready")},t.prototype.componentDidUpdate=function(){this.initTabs()},t.prototype.componentDidLoad=function(){var t=this;this.initTabs(),new MutationObserver(function(e){for(var n=0;n<e.length;n++)if("childList"===e[n].type){t.initTabs();break}}).observe(this.element,{attributes:!0,childList:!0,characterData:!0})},t.prototype.render=function(){return h("slot",null)},Object.defineProperty(t,"is",{get:function(){return"nv-tab-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-tab-content/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tab-content/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tab-content/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tab-content/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tab-content/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tab-content/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:100%;height:auto;display:block}.nv-tab-content{height:0;max-height:0;width:100%;padding:0;opacity:0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75)}.nv-tab-content[nv-tab-active=true]{height:auto;max-height:100vh;padding:32px 0;opacity:1;pointer-events:all;max-height:10000000000px}"},enumerable:!0,configurable:!0}),t}();export{NvTabContent};