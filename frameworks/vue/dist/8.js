(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{13:function(n,t,e){"use strict";e.r(t),e.d(t,"NvTabContent",function(){return a});var o=e(1),a=function(){function n(){}return n.prototype.initTabs=function(){for(var n=this.container.children,t=0;t<n.length;t++){n[t].classList.add("nv-tab-content")}this.container.classList.add("nv-tabs-ready")},n.prototype.componentDidUpdate=function(){this.initTabs()},n.prototype.componentDidLoad=function(){this.initTabs()},n.prototype.render=function(){var n=this;return Object(o.b)("div",{class:"nv-tabs-wrapper"},Object(o.b)("div",{class:"nv-tabs-content",ref:function(t){return n.container=t}},Object(o.b)("slot",null)))},Object.defineProperty(n,"is",{get:function(){return"nv-tab-content"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{element:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return'@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Regular.ttf) format("truetype");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Italic.ttf) format("truetype");\n  font-weight: 400;\n  font-style: italic; }\n\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Bold.ttf) format("truetype");\n  font-weight: 700;\n  font-style: normal; }\n\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format("truetype");\n  font-weight: 700;\n  font-style: italic; }\n\n@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled * {\n    pointer-events: none; }\n\n:host {\n  width: 100%;\n  height: auto;\n  display: block; }\n\n.nv-tab-content {\n  height: 0px;\n  max-height: 0px;\n  width: 100%;\n  padding: 0px;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 1em;\n  font-family: "Roboto", sans-serif;\n  font-weight: normal;\n  line-height: 1.4em;\n  color: rgba(255, 255, 255, 0.75); }\n  .nv-tab-content.nv-tab-active, .nv-tab-content.nv-tab-activating {\n    height: auto;\n    max-height: 100vh;\n    padding: 32px;\n    opacity: 1;\n    pointer-events: all; }\n  .nv-tab-content.nv-tab-active {\n    max-height: 10000000000px; }'},enumerable:!0,configurable:!0}),n}();
/*! Built with http://stenciljs.com */}}]);