/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,e){var i,n,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:h(0),throw:h(1),return:h(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function h(s){return function(h){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t],n=0}finally{i=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,h])}}};nvcomponents.loadBundle("qrbkrhxy",["exports"],function(t){var e=window.nvcomponents.h,i=function(t,e,i,n){return new(i||(i=Promise))(function(o,s){function r(t){try{c(n.next(t))}catch(t){s(t)}}function h(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(r,h)}c((n=n.apply(t,e||[])).next())})},n=function(){function t(){this.optionElements=[],this._options=[],this._position="bottom",this.focusedOption=void 0,this.width="",this.options=[],this.position="bottom",this.isActive=!1,this.anchor="",this.optionStyles={},this.optionHoverStyles={}}return t.prototype.optionClick=function(t){t.preventDefault(),t.stopPropagation();for(var e=0,i=this.container.querySelectorAll(".menu-option");e<i.length&&i[e]!==t.target&&!i[e].contains(t.target);)e+=1;this.selectOption(e)},t.prototype.update=function(){this._position=this.position||this._position,this._anchor=(this.anchor?"string"==typeof this.anchor?document.querySelector(this.anchor):this.anchor:null)||this.element,this.tooltip.triggerElement=this._anchor,this.isActive?this.container.classList.add("active"):this.container.classList.remove("active")},t.prototype.mouseEnter=function(t){if(t.classList.add("focused"),this.focusedOption=this.optionElements.indexOf(t),this.optionHoverStyles){var e={};if("string"==typeof this.optionHoverStyles)try{e=JSON.parse(this.optionHoverStyles)}catch(t){}else e=this.optionHoverStyles;for(var i in e)t.style[i]=e[i]}},t.prototype.mouseLeave=function(t){if(t.classList.remove("focused"),this.focusedOption===this.optionElements.indexOf(t)&&(this.focusedOption=void 0),this.optionHoverStyles){var e={};if("string"==typeof this.optionStyles)try{e=JSON.parse(this.optionStyles)}catch(t){}else e=this.optionStyles;for(var i in e)e[i]?t.style[i]=e[i]:t.style.removeProperty(i)}},t.prototype.focusOption=function(t){return i(this,void 0,void 0,function(){var e=this;return __generator(this,function(i){return"string"==typeof t&&(t=parseInt(t)),console.log(t),this.optionElements[t]&&(this.mouseEnter(this.optionElements[t]),this.optionElements.forEach(function(i,n){n!==t&&e.mouseLeave(i)})),[2]})})},t.prototype.focusNextOption=function(){return i(this,void 0,void 0,function(){return __generator(this,function(t){return this.focusOption(void 0===this.focusedOption?0:this.focusedOption+1),[2]})})},t.prototype.focusPreviousOption=function(){return i(this,void 0,void 0,function(){return __generator(this,function(t){return this.focusOption(void 0===this.focusedOption?0:this.focusedOption-1),[2]})})},t.prototype.selectOption=function(t){return i(this,void 0,void 0,function(){return __generator(this,function(e){return"string"==typeof t&&(t=parseInt(t)),this.optionElements[t]?(this.whenOptionClicked.emit(t),this.whenClicked&&"function"==typeof this.whenClicked&&this.whenClicked(t),this.whenClosed.emit(),[2]):[2]})})},t.prototype.componentDidUpdate=function(){this.update()},t.prototype.componentDidLoad=function(){var t=this;this.update(),this.tooltip.addEventListener("whenOpened",function(){t.whenActivated&&"function"==typeof t.whenActivated&&t.whenActivated()}),this.tooltip.addEventListener("whenClosed",function(){t.whenDeactivated&&"function"==typeof t.whenDeactivated&&t.whenDeactivated()})},t.prototype.render=function(){var t=this;if(this.optionClick=this.optionClick.bind(this),this.options)if("string"==typeof this.options)try{this._options=JSON.parse(this.options)}catch(t){this._options=this.options.split(",").map(function(t){return t.trim()})}else Array.isArray(this.options)?this._options=this.options:this._options=[];else this._options=[];var i={};if(this.optionStyles)if("string"==typeof this.optionStyles)try{i=JSON.parse(this.optionStyles)}catch(t){}else i=this.optionStyles;return e("div",{class:"menu-container",ref:function(e){return t.container=e}},e("nv-tooltip",{ref:function(e){return t.tooltip=e},offset:0,paddingAmount:0,isActive:this.isActive,triggerOn:"never",triggerElement:this._anchor,position:this._position,showBoxShadow:!0,width:this.width},this._options.map(function(n,o){return""!==n.trim()?e("div",{class:"menu-option",ref:function(e){return t.optionElements[o]=e},style:i,onMouseDown:t.optionClick,innerHTML:n,onMouseEnter:function(){return t.mouseEnter(t.optionElements[o])},onMouseLeave:function(){return t.mouseLeave(t.optionElements[o])}}):e("div",{class:"menu-option-divider"})})))},Object.defineProperty(t,"is",{get:function(){return"nv-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{anchor:{type:String,attr:"anchor"},element:{elementRef:!0},focusedOption:{type:Number,attr:"focused-option",mutable:!0},focusNextOption:{method:!0},focusOption:{method:!0},focusPreviousOption:{method:!0},isActive:{type:Boolean,attr:"is-active"},optionHoverStyles:{type:String,attr:"option-hover-styles"},options:{type:String,attr:"options"},optionStyles:{type:String,attr:"option-styles"},position:{type:String,attr:"position"},selectOption:{method:!0},whenActivated:{type:"Any",attr:"when-activated"},whenClicked:{type:"Any",attr:"when-clicked"},whenDeactivated:{type:"Any",attr:"when-deactivated"},width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"whenOptionClicked",method:"whenOptionClicked",bubbles:!0,cancelable:!0,composed:!0},{name:"whenOpened",method:"whenOpened",bubbles:!0,cancelable:!0,composed:!0},{name:"whenClosed",method:"whenClosed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-menu{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-menu{opacity:1}nv-tabs[center=true].sc-nv-menu{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-menu > *.sc-nv-menu{opacity:0}nv-tabs.sc-nv-menu > [nv-tab].sc-nv-menu{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-menu   nv-wave.sc-nv-menu, nv-tabs.sc-nv-menu > [nv-tab][nv-tab-active=activating].sc-nv-menu, nv-tabs.sc-nv-menu > [nv-tab][nv-tab-active=true].sc-nv-menu{opacity:1}nv-tabs.sc-nv-menu > [nv-tab][nv-tab-active=true].sc-nv-menu:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-menu   .active-indicator.sc-nv-menu{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-menu   .active-indicator.nv-tabs-activating.sc-nv-menu{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-menu{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-menu   *.sc-nv-menu{pointer-events:none}.sc-nv-menu-h{display:inline-block}nv-tooltip.sc-nv-menu{pointer-events:all}.menu-option.sc-nv-menu{font-size:14px;line-height:24px;font-family:Roboto,sans-serif;font-weight:400;color:rgba(255,255,255,.75);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:14px 16px;overflow:hidden;pointer-events:all;cursor:pointer;text-align:left;background-color:transparent;-webkit-transition:background-color .2s;transition:background-color .2s;pointer-events:none}.menu-option.sc-nv-menu   .focused.sc-nv-menu, .menu-option.sc-nv-menu:hover{background-color:#282e32}.menu-option-divider.sc-nv-menu{border-top:1px solid #21262a;padding:0}.active.menu-container.sc-nv-menu   .menu-option.sc-nv-menu{pointer-events:all}"},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){this._isActive=!1,this.scrollPosition=0,this.positions=["bottom","top","left","right"],this.paddingAmount=8,this.width="",this.position="",this.isActive=!1,this.triggerOn="mouseenter",this.triggerElement="",this.offset=10,this.hideAfter=0,this.delay=0,this.showBoxShadow=!1}return t.prototype.setDimensions=function(){if(this.container){var t=this._triggerElement.getBoundingClientRect();this.container.style.width=this._triggerElement.offsetWidth+"px",this.container.style.height=this._triggerElement.offsetHeight+"px",this.container.style.top=t.top+"px",this.container.style.left=t.left+"px",window.innerWidth<=768?this.container.setAttribute("device","mobile"):this.container.setAttribute("device","browser")}},t.prototype.setPositions=function(){var t=this;if(this.container){this.scrollPosition=this.contentInner.scrollTop;var e="bottom";this.position&&this.positions.indexOf(this.position)>-1&&(e=this.position),this.width&&""!==this.width&&(this.contentInner.style.width=this.width,this.contentInnerInner.style.width=this.width,this.content.style.width=this.width),this.container.setAttribute("position",e);var i=this.container.getBoundingClientRect(),n=this.contentInner.offsetWidth,o=this.contentInner.offsetHeight,s=0,r=0;o!==this.contentInnerInner.offsetHeight&&(this.contentInner.style.height=this.contentInnerInner.offsetHeight+"px",o=this.contentInner.offsetHeight),n>window.innerWidth&&(this.contentInner.style.width=window.innerWidth-2*this.offset+"px",n=this.contentInner.offsetWidth),o>window.innerHeight&&(this.contentInner.style.height=.8*(window.innerHeight-2*this.offset)+"px",o=this.contentInner.offsetHeight);var h=function(){return i.top>window.innerHeight-i.bottom?-(o/2+i.height/2+t.offset):o/2+i.height/2+t.offset},c=function(){var e=i.top-o/2<0,n=i.bottom+o/2>window.innerHeight,s=o/2-i.top+t.offset,h=window.innerHeight-(o/2+i.bottom+t.offset);e?r=s:n&&(r=h)};switch(e){case"left":i.left-(n+this.offset)<0?i.right+(n+this.offset)<window.innerWidth?(s=n+2*this.offset+i.width,c()):(r=h(),s=n+this.offset+(i.width/2-n/2)):c();break;case"right":i.right+(n+this.offset)>window.innerWidth?i.left-(n+this.offset)>0?(s=-(n+2*this.offset+i.width),c()):(r=h(),s=-(n+this.offset+(i.width/2-n/2))):c();break;case"top":i.top-o-this.offset+window.pageYOffset<0&&(r=o+2*this.offset+i.height);break;default:r=o+this.offset,i.bottom+o+this.offset>window.innerHeight&&(i.top+window.pageYOffset-(o-2*this.offset)>0?r=-(i.height+this.offset):(this.contentInner.style.height=.8*(window.innerHeight-2*this.offset)+"px",o=this.contentInner.offsetHeight,i.top>window.innerHeight-i.bottom?(this.contentInner.style.height=i.top-2*this.offset+"px",o=this.contentInner.offsetHeight,r=-(o+this.offset)):(this.contentInner.style.height=window.innerHeight-i.bottom-this.offset-10+"px",o=this.contentInner.offsetHeight,r=o+this.offset)))}this.content.style.transform="scale(1,1) translate("+s+"px, "+r+"px)";var a=this.content.getBoundingClientRect();a.left<0?(s=-a.left+this.offset,this.content.style.transform="scale(1,1) translate("+s+"px, "+r+"px)"):a.right>window.innerWidth&&(s=window.innerWidth-a.right-this.offset,this.content.style.transform="scale(1,1) translate("+s+"px, "+r+"px)"),this.contentInner.scrollTop=this.scrollPosition}},t.prototype.checkDimensions=function(){var t=this;clearTimeout(this.checkDimensionsTimer),this.isActive&&this.container&&(this.setDimensions(),this.setPositions(),this.checkDimensionsTimer=setTimeout(function(){t.checkDimensions()},16))},t.prototype.open=function(){var t=this;this.container&&(clearTimeout(this.openTimer),this.container.style.removeProperty("transform-origin"),this.contentInner.style.width=this.contentInner.style.height="auto",this.openTimer=setTimeout(function(){if(t.container){if("never"===t.triggerOn){if(!t.isActive)return}else t.isActive=!0;t.isActive&&(t.container.classList.add("open"),t.checkDimensions(),t.whenOpened.emit(),t.hideAfter&&setTimeout(function(){t.container&&t.close()},t.hideAfter))}},this.delay||0))},t.prototype.close=function(){var t=this;if(this.container){if("never"===this.triggerOn){if(this.isActive)return void this.whenClosed.emit()}else this.whenClosed.emit(),this.isActive=!1;clearTimeout(this.openTimer);try{this.container.classList.contains("open")&&(this.container.classList.remove("open"),this.content.removeAttribute("style"),setTimeout(function(){t.container&&t.container.style.removeProperty("transform-origin")},300))}catch(t){}}},t.prototype.handleIntersect=function(t){this.container&&this.isActive&&!t[0].isIntersecting&&this.close()},t.prototype.doOpen=function(){this.container&&(this.isActive?this.close():this.open())},t.prototype.doClose=function(){this.container&&(this.isActive||this.close())},t.prototype.doBodyClick=function(t){if(this.container&&this._triggerElement&&this.element){var e=t.target===this._triggerElement||this._triggerElement.contains(t.target),i=t.target===this.container||t.target===this.element||this.container.contains(t.target)||this.element.contains(t.target);!this.isActive||e||i||this.close()}else window.document.body.removeEventListener("click",this.doBodyClick)},t.prototype.setEvents=function(){"never"!==this.triggerOn&&(this._triggerElement.addEventListener(this.triggerOn||"mouseenter",this.doOpen),this.triggerOn&&"mouseenter"!==this.triggerOn||this._triggerElement.addEventListener("mouseleave",this.doClose))},t.prototype.removeEvents=function(){this._triggerElement&&(this._triggerElement.removeEventListener(this.triggerOn||"mouseenter",this.doOpen),this.triggerOn&&"mouseenter"!==this.triggerOn||this._triggerElement.removeEventListener("mouseleave",this.doClose))},t.prototype.update=function(){this.removeEvents(),this.parent=this.element.parentElement,this._triggerElement=(this.triggerElement?"string"==typeof this.triggerElement?document.querySelector(this.triggerElement):this.triggerElement:null)||this.parent,this.setEvents(),this.showBoxShadow?this.content.classList.add("boxShadow"):this.content.classList.remove("boxShadow"),clearTimeout(this.checkDimensionsTimer),this.checkDimensions(),this.isActive!==this._isActive&&(this._isActive=this.isActive,this.isActive?this.open():this.close())},t.prototype.componentDidUpdate=function(){this.update()},t.prototype.componentDidLoad=function(){var t=this;this.doBodyClick=this.doBodyClick.bind(this),this.doClose=this.doClose.bind(this),this.doOpen=this.doOpen.bind(this),this.handleIntersect=this.handleIntersect.bind(this),this.setPositions=this.setPositions.bind(this),new IntersectionObserver(this.handleIntersect,{root:null,rootMargin:"0px",threshold:[0,.01,.99,1]}).observe(this.contentInnerInner),this.update(),window.document.body.addEventListener("click",this.doBodyClick),new MutationObserver(function(e){for(var i=0;i<e.length;i++)if("childList"===e[i].type){t.update();break}}).observe(this.element,{attributes:!0,childList:!0,characterData:!0})},t.prototype.componentDidUnload=function(){window.document.body.removeEventListener("click",this.doBodyClick)},t.prototype.updateInnerHTML=function(t){this.container.innerHTML=t,this.update()},t.prototype.render=function(){var t=this;return e("div",{class:"tooltip-container",ref:function(e){return t.container=e}},e("div",{class:"tooltip-content",ref:function(e){return t.content=e}},e("div",{class:"tooltip-content-inner",style:{padding:"0px "+this.paddingAmount+"px"},ref:function(e){return t.contentInner=e}},e("div",{class:"tooltip-content-inner-inner",ref:function(e){return t.contentInnerInner=e}},e("slot",null)))))},Object.defineProperty(t,"is",{get:function(){return"nv-tooltip"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{delay:{type:Number,attr:"delay"},element:{elementRef:!0},hideAfter:{type:Number,attr:"hide-after"},isActive:{type:Boolean,attr:"is-active",reflectToAttr:!0,mutable:!0},offset:{type:Number,attr:"offset"},paddingAmount:{type:Number,attr:"padding-amount"},position:{type:String,attr:"position"},showBoxShadow:{type:Boolean,attr:"show-box-shadow"},triggerElement:{type:String,attr:"trigger-element"},triggerOn:{type:String,attr:"trigger-on"},updateInnerHTML:{method:!0},width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"whenOpened",method:"whenOpened",bubbles:!0,cancelable:!0,composed:!0},{name:"whenClosed",method:"whenClosed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-tooltip{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-tooltip{opacity:1}nv-tabs[center=true].sc-nv-tooltip{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-tooltip > *.sc-nv-tooltip{opacity:0}nv-tabs.sc-nv-tooltip > [nv-tab].sc-nv-tooltip{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-tooltip   nv-wave.sc-nv-tooltip, nv-tabs.sc-nv-tooltip > [nv-tab][nv-tab-active=activating].sc-nv-tooltip, nv-tabs.sc-nv-tooltip > [nv-tab][nv-tab-active=true].sc-nv-tooltip{opacity:1}nv-tabs.sc-nv-tooltip > [nv-tab][nv-tab-active=true].sc-nv-tooltip:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-tooltip   .active-indicator.sc-nv-tooltip{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-tooltip   .active-indicator.nv-tabs-activating.sc-nv-tooltip{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-tooltip{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-tooltip   *.sc-nv-tooltip{pointer-events:none}.sc-nv-tooltip-h{width:0;height:0;position:relative;pointer-events:none;z-index:1}.tooltip-container.sc-nv-tooltip{position:fixed;top:0;height:0;-webkit-transition:opacity .2s ease-in-out .1s;transition:opacity .2s ease-in-out .1s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.open.sc-nv-tooltip{opacity:1}.tooltip-container.open.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{-webkit-transform:scale(1,1);transform:scale(1,1)}.tooltip-container.open.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip   .tooltip-content-inner.sc-nv-tooltip{pointer-events:all}.tooltip-container.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{-webkit-transform:scale(0,0);transform:scale(0,0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-size:10px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.sc-nv-tooltip   .tooltip-content.boxShadow.sc-nv-tooltip{-webkit-box-shadow:1px 2px 1px -2px rgba(0,0,0,.1),1px 3px 5px 0 rgba(0,0,0,.1),1px 3px 15px 0 rgba(0,0,0,.2);box-shadow:1px 2px 1px -2px rgba(0,0,0,.1),1px 3px 5px 0 rgba(0,0,0,.1),1px 3px 15px 0 rgba(0,0,0,.2)}.tooltip-container.sc-nv-tooltip   .tooltip-content-inner.sc-nv-tooltip{display:inline-block;overflow:auto;background:#2c3338;padding:0 8px;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.sc-nv-tooltip   .tooltip-content-inner-inner.sc-nv-tooltip{display:inline-block}.tooltip-container[device=mobile].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{font-size:14px;line-height:32px}.tooltip-container[position=bottom].sc-nv-tooltip{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.tooltip-container[position=right].sc-nv-tooltip{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tooltip-container[position=right].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{top:0;right:calc(-100% - 10px)}.tooltip-container[position=left].sc-nv-tooltip{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tooltip-container[position=left].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{top:0;left:calc(-100% - 10px)}.tooltip-container[position=top].sc-nv-tooltip{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tooltip-container[position=top].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{top:calc(-100% - 10px)}"},enumerable:!0,configurable:!0}),t}();t.NvMenu=n,t.NvTooltip=o,Object.defineProperty(t,"__esModule",{value:!0})});