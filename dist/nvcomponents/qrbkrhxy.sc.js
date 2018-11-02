/*! Built with http://stenciljs.com */
const{h:t}=window.nvcomponents;var e=function(t,e,i,n){return new(i||(i=Promise))(function(s,o){function h(t){try{c(n.next(t))}catch(t){o(t)}}function r(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(h,r)}c((n=n.apply(t,e||[])).next())})};class i{constructor(){this.optionElements=[],this._options=[],this._position="bottom",this.focusedOption=void 0,this.width="",this.options=[],this.position="bottom",this.isActive=!1,this.anchor="",this.optionStyles={},this.optionHoverStyles={}}optionClick(t){t.preventDefault(),t.stopPropagation();let e=0;const i=this.container.querySelectorAll(".menu-option");for(;e<i.length&&i[e]!==t.target&&!i[e].contains(t.target);)e+=1;this.selectOption(e)}update(){this._position=this.position||this._position,this._anchor=(this.anchor?"string"==typeof this.anchor?document.querySelector(this.anchor):this.anchor:null)||this.element,this.tooltip.triggerElement=this._anchor,this.isActive?this.container.classList.add("active"):this.container.classList.remove("active")}mouseEnter(t){if(t.classList.add("focused"),this.focusedOption=this.optionElements.indexOf(t),!this.optionHoverStyles)return;let e={};if("string"==typeof this.optionHoverStyles)try{e=JSON.parse(this.optionHoverStyles)}catch(t){}else e=this.optionHoverStyles;for(let i in e)t.style[i]=e[i]}mouseLeave(t){if(t.classList.remove("focused"),this.focusedOption===this.optionElements.indexOf(t)&&(this.focusedOption=void 0),!this.optionHoverStyles)return;let e={};if("string"==typeof this.optionStyles)try{e=JSON.parse(this.optionStyles)}catch(t){}else e=this.optionStyles;for(let i in e)e[i]?t.style[i]=e[i]:t.style.removeProperty(i)}focusOption(t){return e(this,void 0,void 0,function*(){"string"==typeof t&&(t=parseInt(t)),console.log(t),this.optionElements[t]&&(this.mouseEnter(this.optionElements[t]),this.optionElements.forEach((e,i)=>{i!==t&&this.mouseLeave(e)}))})}focusNextOption(){return e(this,void 0,void 0,function*(){this.focusOption(void 0===this.focusedOption?0:this.focusedOption+1)})}focusPreviousOption(){return e(this,void 0,void 0,function*(){this.focusOption(void 0===this.focusedOption?0:this.focusedOption-1)})}selectOption(t){return e(this,void 0,void 0,function*(){"string"==typeof t&&(t=parseInt(t)),this.optionElements[t]&&(this.whenOptionClicked.emit(t),this.whenClicked&&"function"==typeof this.whenClicked&&this.whenClicked(t),this.whenClosed.emit())})}componentDidUpdate(){this.update()}componentDidLoad(){this.update(),this.tooltip.addEventListener("whenOpened",()=>{this.whenActivated&&"function"==typeof this.whenActivated&&this.whenActivated()}),this.tooltip.addEventListener("whenClosed",()=>{this.whenDeactivated&&"function"==typeof this.whenDeactivated&&this.whenDeactivated()})}render(){if(this.optionClick=this.optionClick.bind(this),this.options)if("string"==typeof this.options)try{this._options=JSON.parse(this.options)}catch(t){this._options=this.options.split(",").map(t=>t.trim())}else Array.isArray(this.options)?this._options=this.options:this._options=[];else this._options=[];let e={};if(this.optionStyles)if("string"==typeof this.optionStyles)try{e=JSON.parse(this.optionStyles)}catch(t){}else e=this.optionStyles;return t("div",{class:"menu-container",ref:t=>this.container=t},t("nv-tooltip",{ref:t=>this.tooltip=t,offset:0,paddingAmount:0,isActive:this.isActive,triggerOn:"never",triggerElement:this._anchor,position:this._position,showBoxShadow:!0,width:this.width},this._options.map((i,n)=>""!==i.trim()?t("div",{class:"menu-option",ref:t=>this.optionElements[n]=t,style:e,onMouseDown:this.optionClick,innerHTML:i,onMouseEnter:()=>this.mouseEnter(this.optionElements[n]),onMouseLeave:()=>this.mouseLeave(this.optionElements[n])}):t("div",{class:"menu-option-divider"}))))}static get is(){return"nv-menu"}static get encapsulation(){return"shadow"}static get properties(){return{anchor:{type:String,attr:"anchor"},element:{elementRef:!0},focusedOption:{type:Number,attr:"focused-option",mutable:!0},focusNextOption:{method:!0},focusOption:{method:!0},focusPreviousOption:{method:!0},isActive:{type:Boolean,attr:"is-active"},optionHoverStyles:{type:String,attr:"option-hover-styles"},options:{type:String,attr:"options"},optionStyles:{type:String,attr:"option-styles"},position:{type:String,attr:"position"},selectOption:{method:!0},whenActivated:{type:"Any",attr:"when-activated"},whenClicked:{type:"Any",attr:"when-clicked"},whenDeactivated:{type:"Any",attr:"when-deactivated"},width:{type:String,attr:"width"}}}static get events(){return[{name:"whenOptionClicked",method:"whenOptionClicked",bubbles:!0,cancelable:!0,composed:!0},{name:"whenOpened",method:"whenOpened",bubbles:!0,cancelable:!0,composed:!0},{name:"whenClosed",method:"whenClosed",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-menu{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-menu{opacity:1}nv-tabs[center=true].sc-nv-menu{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-menu > *.sc-nv-menu{opacity:0}nv-tabs.sc-nv-menu > [nv-tab].sc-nv-menu{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-menu   nv-wave.sc-nv-menu, nv-tabs.sc-nv-menu > [nv-tab][nv-tab-active=activating].sc-nv-menu, nv-tabs.sc-nv-menu > [nv-tab][nv-tab-active=true].sc-nv-menu{opacity:1}nv-tabs.sc-nv-menu > [nv-tab][nv-tab-active=true].sc-nv-menu:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-menu   .active-indicator.sc-nv-menu{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-menu   .active-indicator.nv-tabs-activating.sc-nv-menu{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-menu{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-menu   *.sc-nv-menu{pointer-events:none}.sc-nv-menu-h{display:inline-block}nv-tooltip.sc-nv-menu{pointer-events:all}.menu-option.sc-nv-menu{font-size:14px;line-height:24px;font-family:Roboto,sans-serif;font-weight:400;color:rgba(255,255,255,.75);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:14px 16px;overflow:hidden;pointer-events:all;cursor:pointer;text-align:left;background-color:transparent;-webkit-transition:background-color .2s;transition:background-color .2s;pointer-events:none}.menu-option.sc-nv-menu   .focused.sc-nv-menu, .menu-option.sc-nv-menu:hover{background-color:#282e32}.menu-option-divider.sc-nv-menu{border-top:1px solid #21262a;padding:0}.active.menu-container.sc-nv-menu   .menu-option.sc-nv-menu{pointer-events:all}"}}class n{constructor(){this._isActive=!1,this.scrollPosition=0,this.positions=["bottom","top","left","right"],this.paddingAmount=8,this.width="",this.position="",this.isActive=!1,this.triggerOn="mouseenter",this.triggerElement="",this.offset=10,this.hideAfter=0,this.delay=0,this.showBoxShadow=!1}setDimensions(){if(!this.container)return;const t=this._triggerElement.getBoundingClientRect();this.container.style.width=`${this._triggerElement.offsetWidth}px`,this.container.style.height=`${this._triggerElement.offsetHeight}px`,this.container.style.top=`${t.top}px`,this.container.style.left=`${t.left}px`,window.innerWidth<=768?this.container.setAttribute("device","mobile"):this.container.setAttribute("device","browser")}setPositions(){if(!this.container)return;this.scrollPosition=this.contentInner.scrollTop;let t="bottom";this.position&&this.positions.indexOf(this.position)>-1&&(t=this.position),this.width&&""!==this.width&&(this.contentInner.style.width=this.width,this.contentInnerInner.style.width=this.width,this.content.style.width=this.width),this.container.setAttribute("position",t);const e=this.container.getBoundingClientRect();let i=this.contentInner.offsetWidth,n=this.contentInner.offsetHeight,s=0,o=0;n!==this.contentInnerInner.offsetHeight&&(this.contentInner.style.height=`${this.contentInnerInner.offsetHeight}px`,n=this.contentInner.offsetHeight),i>window.innerWidth&&(this.contentInner.style.width=`${window.innerWidth-2*this.offset}px`,i=this.contentInner.offsetWidth),n>window.innerHeight&&(this.contentInner.style.height=`${.8*(window.innerHeight-2*this.offset)}px`,n=this.contentInner.offsetHeight);const h=()=>e.top>window.innerHeight-e.bottom?-(n/2+e.height/2+this.offset):n/2+e.height/2+this.offset,r=()=>{const t=e.top-n/2<0,i=e.bottom+n/2>window.innerHeight,s=n/2-e.top+this.offset,h=window.innerHeight-(n/2+e.bottom+this.offset);t?o=s:i&&(o=h)};switch(t){case"left":e.left-(i+this.offset)<0?e.right+(i+this.offset)<window.innerWidth?(s=i+2*this.offset+e.width,r()):(o=h(),s=i+this.offset+(e.width/2-i/2)):r();break;case"right":e.right+(i+this.offset)>window.innerWidth?e.left-(i+this.offset)>0?(s=-(i+2*this.offset+e.width),r()):(o=h(),s=-(i+this.offset+(e.width/2-i/2))):r();break;case"top":e.top-n-this.offset+window.pageYOffset<0&&(o=n+2*this.offset+e.height);break;default:o=n+this.offset,e.bottom+n+this.offset>window.innerHeight&&(e.top+window.pageYOffset-(n-2*this.offset)>0?o=-(e.height+this.offset):(this.contentInner.style.height=`${.8*(window.innerHeight-2*this.offset)}px`,n=this.contentInner.offsetHeight,e.top>window.innerHeight-e.bottom?(this.contentInner.style.height=`${e.top-2*this.offset}px`,n=this.contentInner.offsetHeight,o=-(n+this.offset)):(this.contentInner.style.height=`${window.innerHeight-e.bottom-this.offset-10}px`,n=this.contentInner.offsetHeight,o=n+this.offset)))}this.content.style.transform=`scale(1,1) translate(${s}px, ${o}px)`;const c=this.content.getBoundingClientRect();c.left<0?(s=-c.left+this.offset,this.content.style.transform=`scale(1,1) translate(${s}px, ${o}px)`):c.right>window.innerWidth&&(s=window.innerWidth-c.right-this.offset,this.content.style.transform=`scale(1,1) translate(${s}px, ${o}px)`),this.contentInner.scrollTop=this.scrollPosition}checkDimensions(){clearTimeout(this.checkDimensionsTimer),this.isActive&&this.container&&(this.setDimensions(),this.setPositions(),this.checkDimensionsTimer=setTimeout(()=>{this.checkDimensions()},16))}open(){this.container&&(clearTimeout(this.openTimer),this.container.style.removeProperty("transform-origin"),this.contentInner.style.width=this.contentInner.style.height="auto",this.openTimer=setTimeout(()=>{if(this.container){if("never"===this.triggerOn){if(!this.isActive)return}else this.isActive=!0;this.isActive&&(this.container.classList.add("open"),this.checkDimensions(),this.whenOpened.emit(),this.hideAfter&&setTimeout(()=>{this.container&&this.close()},this.hideAfter))}},this.delay||0))}close(){if(this.container){if("never"===this.triggerOn){if(this.isActive)return void this.whenClosed.emit()}else this.whenClosed.emit(),this.isActive=!1;clearTimeout(this.openTimer);try{this.container.classList.contains("open")&&(this.container.classList.remove("open"),this.content.removeAttribute("style"),setTimeout(()=>{this.container&&this.container.style.removeProperty("transform-origin")},300))}catch(t){}}}handleIntersect(t){this.container&&this.isActive&&!t[0].isIntersecting&&this.close()}doOpen(){this.container&&(this.isActive?this.close():this.open())}doClose(){this.container&&(this.isActive||this.close())}doBodyClick(t){if(!this.container||!this._triggerElement||!this.element)return void window.document.body.removeEventListener("click",this.doBodyClick);const e=t.target===this._triggerElement||this._triggerElement.contains(t.target),i=t.target===this.container||t.target===this.element||this.container.contains(t.target)||this.element.contains(t.target);!this.isActive||e||i||this.close()}setEvents(){"never"!==this.triggerOn&&(this._triggerElement.addEventListener(this.triggerOn||"mouseenter",this.doOpen),this.triggerOn&&"mouseenter"!==this.triggerOn||this._triggerElement.addEventListener("mouseleave",this.doClose))}removeEvents(){this._triggerElement&&(this._triggerElement.removeEventListener(this.triggerOn||"mouseenter",this.doOpen),this.triggerOn&&"mouseenter"!==this.triggerOn||this._triggerElement.removeEventListener("mouseleave",this.doClose))}update(){this.removeEvents(),this.parent=this.element.parentElement,this._triggerElement=(this.triggerElement?"string"==typeof this.triggerElement?document.querySelector(this.triggerElement):this.triggerElement:null)||this.parent,this.setEvents(),this.showBoxShadow?this.content.classList.add("boxShadow"):this.content.classList.remove("boxShadow"),clearTimeout(this.checkDimensionsTimer),this.checkDimensions(),this.isActive!==this._isActive&&(this._isActive=this.isActive,this.isActive?this.open():this.close())}componentDidUpdate(){this.update()}componentDidLoad(){this.doBodyClick=this.doBodyClick.bind(this),this.doClose=this.doClose.bind(this),this.doOpen=this.doOpen.bind(this),this.handleIntersect=this.handleIntersect.bind(this),this.setPositions=this.setPositions.bind(this),new IntersectionObserver(this.handleIntersect,{root:null,rootMargin:"0px",threshold:[0,.01,.99,1]}).observe(this.contentInnerInner),this.update(),window.document.body.addEventListener("click",this.doBodyClick),new MutationObserver(t=>{for(let e=0;e<t.length;e++)if("childList"===t[e].type){this.update();break}}).observe(this.element,{attributes:!0,childList:!0,characterData:!0})}componentDidUnload(){window.document.body.removeEventListener("click",this.doBodyClick)}updateInnerHTML(t){this.container.innerHTML=t,this.update()}render(){return t("div",{class:"tooltip-container",ref:t=>this.container=t},t("div",{class:"tooltip-content",ref:t=>this.content=t},t("div",{class:"tooltip-content-inner",style:{padding:`0px ${this.paddingAmount}px`},ref:t=>this.contentInner=t},t("div",{class:"tooltip-content-inner-inner",ref:t=>this.contentInnerInner=t},t("slot",null)))))}static get is(){return"nv-tooltip"}static get encapsulation(){return"shadow"}static get properties(){return{delay:{type:Number,attr:"delay"},element:{elementRef:!0},hideAfter:{type:Number,attr:"hide-after"},isActive:{type:Boolean,attr:"is-active",reflectToAttr:!0,mutable:!0},offset:{type:Number,attr:"offset"},paddingAmount:{type:Number,attr:"padding-amount"},position:{type:String,attr:"position"},showBoxShadow:{type:Boolean,attr:"show-box-shadow"},triggerElement:{type:String,attr:"trigger-element"},triggerOn:{type:String,attr:"trigger-on"},updateInnerHTML:{method:!0},width:{type:String,attr:"width"}}}static get events(){return[{name:"whenOpened",method:"whenOpened",bubbles:!0,cancelable:!0,composed:!0},{name:"whenClosed",method:"whenClosed",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-tooltip{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-tooltip{opacity:1}nv-tabs[center=true].sc-nv-tooltip{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-tooltip > *.sc-nv-tooltip{opacity:0}nv-tabs.sc-nv-tooltip > [nv-tab].sc-nv-tooltip{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-tooltip   nv-wave.sc-nv-tooltip, nv-tabs.sc-nv-tooltip > [nv-tab][nv-tab-active=activating].sc-nv-tooltip, nv-tabs.sc-nv-tooltip > [nv-tab][nv-tab-active=true].sc-nv-tooltip{opacity:1}nv-tabs.sc-nv-tooltip > [nv-tab][nv-tab-active=true].sc-nv-tooltip:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-tooltip   .active-indicator.sc-nv-tooltip{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-tooltip   .active-indicator.nv-tabs-activating.sc-nv-tooltip{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-tooltip{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-tooltip   *.sc-nv-tooltip{pointer-events:none}.sc-nv-tooltip-h{width:0;height:0;position:relative;pointer-events:none;z-index:1}.tooltip-container.sc-nv-tooltip{position:fixed;top:0;height:0;-webkit-transition:opacity .2s ease-in-out .1s;transition:opacity .2s ease-in-out .1s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.open.sc-nv-tooltip{opacity:1}.tooltip-container.open.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{-webkit-transform:scale(1,1);transform:scale(1,1)}.tooltip-container.open.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip   .tooltip-content-inner.sc-nv-tooltip{pointer-events:all}.tooltip-container.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{-webkit-transform:scale(0,0);transform:scale(0,0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-size:10px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.sc-nv-tooltip   .tooltip-content.boxShadow.sc-nv-tooltip{-webkit-box-shadow:1px 2px 1px -2px rgba(0,0,0,.1),1px 3px 5px 0 rgba(0,0,0,.1),1px 3px 15px 0 rgba(0,0,0,.2);box-shadow:1px 2px 1px -2px rgba(0,0,0,.1),1px 3px 5px 0 rgba(0,0,0,.1),1px 3px 15px 0 rgba(0,0,0,.2)}.tooltip-container.sc-nv-tooltip   .tooltip-content-inner.sc-nv-tooltip{display:inline-block;overflow:auto;background:#2c3338;padding:0 8px;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.sc-nv-tooltip   .tooltip-content-inner-inner.sc-nv-tooltip{display:inline-block}.tooltip-container[device=mobile].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{font-size:14px;line-height:32px}.tooltip-container[position=bottom].sc-nv-tooltip{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.tooltip-container[position=right].sc-nv-tooltip{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tooltip-container[position=right].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{top:0;right:calc(-100% - 10px)}.tooltip-container[position=left].sc-nv-tooltip{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tooltip-container[position=left].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{top:0;left:calc(-100% - 10px)}.tooltip-container[position=top].sc-nv-tooltip{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tooltip-container[position=top].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip{top:calc(-100% - 10px)}"}}export{i as NvMenu,n as NvTooltip};