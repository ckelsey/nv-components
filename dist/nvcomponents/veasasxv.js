/*! Built with http://stenciljs.com */
const{h:t}=window.nvcomponents;class e{constructor(){this._options=[],this._position="bottom",this.options=[],this.position="bottom",this.active=!1}optionClick(t){t.preventDefault(),t.stopPropagation();let e=0;const i=this.container.querySelectorAll(".menu-option");for(;e<i.length&&i[e]!==t.target&&!i[e].contains(t.target);)e+=1;this.whenOptionClicked.emit(e),this.whenClicked&&"function"==typeof this.whenClicked&&this.whenClicked(e),this.whenClosed.emit()}update(){this._position=this.position||this._position,this._anchor=(this.anchor?"string"==typeof this.anchor?document.querySelector(this.anchor):this.anchor:null)||this.element,this.tooltip.triggerElement=this._anchor}componentDidUpdate(){this.update()}componentDidLoad(){this.update(),this.tooltip.addEventListener("whenOpened",()=>{this.whenActivated&&"function"==typeof this.whenActivated&&this.whenActivated()}),this.tooltip.addEventListener("whenClosed",()=>{this.whenDeactivated&&"function"==typeof this.whenDeactivated&&this.whenDeactivated()})}render(){if(this.optionClick=this.optionClick.bind(this),this.options)if("string"==typeof this.options)try{this._options=JSON.parse(this.options)}catch(t){this._options=this.options.split(",").map(t=>t.trim())}else Array.isArray(this.options)?this._options=this.options:this._options=[];else this._options=[];return t("div",{class:"menu-container",ref:t=>this.container=t},t("nv-tooltip",{ref:t=>this.tooltip=t,padding:0,active:this.active,triggerOn:"never",triggerElement:this._anchor,position:this._position,boxShadow:!0},this._options.map(e=>t("div",""!==e?{class:"menu-option",onClick:this.optionClick,innerHTML:e}:{class:"menu-option-divider"}))))}static get is(){return"nv-menu"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active"},anchor:{type:String,attr:"anchor"},element:{elementRef:!0},options:{type:String,attr:"options"},position:{type:String,attr:"position"},whenActivated:{type:"Any",attr:"when-activated"},whenClicked:{type:"Any",attr:"when-clicked"},whenDeactivated:{type:"Any",attr:"when-deactivated"}}}static get events(){return[{name:"whenOptionClicked",method:"whenOptionClicked",bubbles:!0,cancelable:!0,composed:!0},{name:"whenOpened",method:"whenOpened",bubbles:!0,cancelable:!0,composed:!0},{name:"whenClosed",method:"whenClosed",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-menu/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{display:inline-block}nv-tooltip{pointer-events:all}.menu-option{font-size:14px;line-height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:14px 16px;overflow:hidden;pointer-events:all;cursor:pointer;text-align:left;background-color:transparent;-webkit-transition:background-color .2s;transition:background-color .2s}.menu-option:hover{background-color:#282e32}.menu-option-divider{border-top:1px solid #21262a;padding:0}"}}class i{constructor(){this._active=!1,this.positions=["bottom","top","left","right"],this.padding=8,this.position="",this.active=!1,this.triggerOn="mouseenter",this.triggerElement="",this.hideAfter=0,this.delay=0,this.boxShadow=!1}setDimensions(){const t=this._triggerElement.getBoundingClientRect();this.container.style.width=`${this._triggerElement.offsetWidth}px`,this.container.style.height=`${this._triggerElement.offsetHeight}px`,this.container.style.top=`${t.top}px`,this.container.style.left=`${t.left}px`,window.innerWidth<=768?this.container.setAttribute("device","mobile"):this.container.setAttribute("device","browser")}setPositions(){let t="bottom";this.position&&this.positions.indexOf(this.position)>-1&&(t=this.position),this.container.setAttribute("position",t);const e=this.container.getBoundingClientRect();let i=this.contentInner.offsetWidth,n=this.contentInner.offsetHeight,s=0,o=0;i>window.innerWidth&&(this.contentInner.style.width=`${window.innerWidth-20}px`,i=this.contentInner.offsetWidth),n>window.innerHeight&&(this.contentInner.style.height=`${.8*(window.innerHeight-20)}px`,n=this.contentInner.offsetHeight);const h=()=>e.top>window.innerHeight-e.bottom?-(n/2+e.height/2+10):n/2+e.height/2+10,r=()=>{const t=e.top-n/2<0,i=e.bottom+n/2>window.innerHeight,s=n/2-e.top+10,h=window.innerHeight-(n/2+e.bottom+10);t?o=s:i&&(o=h)};switch(t){case"left":e.left-(i+10)<0?e.right+(i+10)<window.innerWidth?(s=i+20+e.width,r()):(o=h(),s=i+10+(e.width/2-i/2)):r();break;case"right":e.right+(i+10)>window.innerWidth?e.left-(i+10)>0?(s=-(i+20+e.width),r()):(o=h(),s=-(i+10+(e.width/2-i/2))):r();break;case"top":e.top-n-10+window.pageYOffset<0&&(o=n+20+e.height);break;default:o=n+10,e.bottom+n+10>window.innerHeight&&(e.top+window.pageYOffset-(n-20)>0?o=-(e.height+10):(this.contentInner.style.height=`${.8*(window.innerHeight-20)}px`,n=this.contentInner.offsetHeight,e.top>window.innerHeight-e.bottom?(this.contentInner.style.height=`${e.top-20}px`,n=this.contentInner.offsetHeight,o=-(n/2+e.height/2+10)):(this.contentInner.style.height=`${window.innerHeight-e.bottom-20}px`,n=this.contentInner.offsetHeight,o=n/2+e.height/2+10)))}this.content.style.transform=`scale(1,1) translate(${s}px, ${o}px)`;const a=this.content.getBoundingClientRect();a.left<0?(s=10-a.left,this.content.style.transform=`scale(1,1) translate(${s}px, ${o}px)`):a.right>window.innerWidth&&(s=window.innerWidth-a.right-10,this.content.style.transform=`scale(1,1) translate(${s}px, ${o}px)`)}checkDimensions(){clearTimeout(this.checkDimensionsTimer),this.active&&(this.setDimensions(),setTimeout(()=>{this.setPositions()},1),this.checkDimensionsTimer=setTimeout(()=>{this.checkDimensions()},16))}open(){clearTimeout(this.openTimer),this.container.style.removeProperty("transform-origin"),this.contentInner.style.width=this.contentInner.style.height="auto",this.openTimer=setTimeout(()=>{if("never"===this.triggerOn){if(!this.active)return}else this.active=!0;this.active&&(this.container.classList.add("open"),this.checkDimensions(),this.whenOpened.emit(),this.hideAfter&&setTimeout(()=>{this.close()},this.hideAfter))},this.delay||0)}close(){if("never"===this.triggerOn){if(this.active)return void this.whenClosed.emit()}else this.whenClosed.emit(),this.active=!1;clearTimeout(this.openTimer),this.container.classList.contains("open")&&(this.container.classList.remove("open"),this.content.removeAttribute("style"),setTimeout(()=>{this.container.style.removeProperty("transform-origin")},300))}handleIntersect(t){this.active&&!t[0].isIntersecting&&this.close()}doOpen(){this.active?this.close():this.open()}doClose(){this.active||this.close()}doBodyClick(t){const e=t.target===this._triggerElement||this._triggerElement.contains(t.target),i=t.target===this.container||t.target===this.element||this.container.contains(t.target)||this.element.contains(t.target);!this.active||e||i||this.close()}setEvents(){"never"!==this.triggerOn&&(this._triggerElement.addEventListener(this.triggerOn||"mouseenter",this.doOpen),this.triggerOn&&"mouseenter"!==this.triggerOn||this._triggerElement.addEventListener("mouseleave",this.doClose))}removeEvents(){this._triggerElement&&(this._triggerElement.removeEventListener(this.triggerOn||"mouseenter",this.doOpen),this.triggerOn&&"mouseenter"!==this.triggerOn||this._triggerElement.removeEventListener("mouseleave",this.doClose))}update(){this.removeEvents(),this.parent=this.element.parentElement,this._triggerElement=(this.triggerElement?"string"==typeof this.triggerElement?document.querySelector(this.triggerElement):this.triggerElement:null)||this.parent,this.setEvents(),this.boxShadow?this.content.classList.add("boxShadow"):this.content.classList.remove("boxShadow"),this.active!==this._active&&(this._active=this.active,this.active?this.open():this.close())}componentDidUpdate(){this.update()}componentDidLoad(){this.doBodyClick=this.doBodyClick.bind(this),this.doClose=this.doClose.bind(this),this.doOpen=this.doOpen.bind(this),this.handleIntersect=this.handleIntersect.bind(this),this.setPositions=this.setPositions.bind(this),new IntersectionObserver(this.handleIntersect,{root:null,rootMargin:"0px",threshold:[0,.01,.99,1]}).observe(this.contentInnerInner),this.update(),window.document.body.addEventListener("click",this.doBodyClick)}render(){return t("div",{class:"tooltip-container",ref:t=>this.container=t},t("div",{class:"tooltip-content",ref:t=>this.content=t},t("div",{class:"tooltip-content-inner",style:{padding:`0px ${this.padding}px`},ref:t=>this.contentInner=t},t("div",{class:"tooltip-content-inner-inner",ref:t=>this.contentInnerInner=t},t("slot",null)))))}static get is(){return"nv-tooltip"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},boxShadow:{type:Boolean,attr:"box-shadow"},delay:{type:Number,attr:"delay"},element:{elementRef:!0},hideAfter:{type:Number,attr:"hide-after"},padding:{type:Number,attr:"padding"},position:{type:String,attr:"position"},triggerElement:{type:String,attr:"trigger-element"},triggerOn:{type:String,attr:"trigger-on"}}}static get events(){return[{name:"whenOpened",method:"whenOpened",bubbles:!0,cancelable:!0,composed:!0},{name:"whenClosed",method:"whenClosed",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-tooltip/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:0;height:0;position:relative;pointer-events:none;z-index:1}.tooltip-container{position:fixed;top:0;height:0;-webkit-transition:opacity .2s ease-in-out .1s;transition:opacity .2s ease-in-out .1s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.open{opacity:1}.tooltip-container.open .tooltip-content{-webkit-transform:scale(1,1);transform:scale(1,1)}.tooltip-container .tooltip-content{-webkit-transform:scale(0,0);transform:scale(0,0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-size:10px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container .tooltip-content.boxShadow{-webkit-box-shadow:1px 2px 1px -2px rgba(0,0,0,.1),1px 3px 5px 0 rgba(0,0,0,.1),1px 3px 15px 0 rgba(0,0,0,.2);box-shadow:1px 2px 1px -2px rgba(0,0,0,.1),1px 3px 5px 0 rgba(0,0,0,.1),1px 3px 15px 0 rgba(0,0,0,.2)}.tooltip-container .tooltip-content-inner{display:inline-block;overflow:auto;background:#2c3338;padding:0 8px;pointer-events:all;-webkit-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container .tooltip-content-inner-inner{display:inline-block}.tooltip-container[device=mobile] .tooltip-content{font-size:14px;line-height:32px}.tooltip-container[position=bottom]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.tooltip-container[position=right]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tooltip-container[position=right] .tooltip-content{top:0;right:calc(-100% - 10px)}.tooltip-container[position=left]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tooltip-container[position=left] .tooltip-content{top:0;left:calc(-100% - 10px)}.tooltip-container[position=top]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tooltip-container[position=top] .tooltip-content{top:calc(-100% - 10px)}"}}export{e as NvMenu,i as NvTooltip};