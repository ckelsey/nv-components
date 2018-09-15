/*! Built with http://stenciljs.com */
const{h:e}=window.nvcomponents;class t{constructor(){this.type=void 0}doMouseEnter(){this.button&&(this.button.classList.add("hover"),this.whenmouseenter.emit({element:this}))}doMouseLeave(){this.button&&(this.doBlur(),this.whenmouseleave.emit({element:this}))}doClick(){this.button&&(this.button.classList.add("pressed"),this.whenclick.emit({element:this}),this.doBlur())}doFocus(){this.button&&(this.button.classList.add("focus"),this.whenfocus.emit({element:this}))}doBlur(){this.button&&(this.button.classList.remove("focus"),this.button.classList.remove("pressed"),this.button.classList.remove("hover"),this.whenblur.emit({element:this}))}doMouseDown(){this.button&&(this.button.classList.add("pressed"),this.whenmousedown.emit({element:this}))}doMouseUp(){this.button&&(this.doBlur(),this.whenmouseup.emit({element:this}))}componentDidUpdate(){this.button.classList.add(this.type||"btn")}componentDidLoad(){this.button.classList.add(this.type||"btn")}render(){return e("button",{tabIndex:0,onClick:()=>this.doClick(),onMouseEnter:()=>this.doMouseEnter(),onMouseLeave:()=>this.doMouseLeave(),onMouseDown:()=>this.doMouseDown(),onMouseUp:()=>this.doMouseUp(),onFocus:()=>this.doFocus(),onBlur:()=>this.doBlur(),ref:e=>this.button=e},e("slot",null),e("span",{class:"overlay"}))}static get is(){return"nv-button"}static get encapsulation(){return"shadow"}static get properties(){return{doBlur:{method:!0},doClick:{method:!0},doFocus:{method:!0},doMouseDown:{method:!0},doMouseEnter:{method:!0},doMouseLeave:{method:!0},doMouseUp:{method:!0},type:{type:String,attr:"type"}}}static get events(){return[{name:"whenfocus",method:"whenfocus",bubbles:!0,cancelable:!0,composed:!0},{name:"whenblur",method:"whenblur",bubbles:!0,cancelable:!0,composed:!0},{name:"whenclick",method:"whenclick",bubbles:!0,cancelable:!0,composed:!0},{name:"whenmousedown",method:"whenmousedown",bubbles:!0,cancelable:!0,composed:!0},{name:"whenmouseup",method:"whenmouseup",bubbles:!0,cancelable:!0,composed:!0},{name:"whenmouseenter",method:"whenmouseenter",bubbles:!0,cancelable:!0,composed:!0},{name:"whenmouseleave",method:"whenmouseleave",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-button/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-button/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-button/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-button/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-button/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-button/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{display:inline-block;position:relative}button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:64px;font-size:14px;line-height:36px;font-family:Roboto,sans-serif;font-weight:400;color:rgba(255,255,255,.75);background:#575757;padding:0 16px;border:none;outline:0!important;cursor:pointer;position:relative}button .overlay{position:absolute;width:100%;height:100%;pointer-events:none;top:0;left:0;opacity:0;background:#fff;-webkit-transition:opacity .2s;transition:opacity .2s}button.text{background-color:transparent;padding:0 8px}button.primary{background:#76b900;color:#fff}button.disabled{background:#575757;opacity:.38}button.disabled.text{background:0 0}button.hover .overlay{opacity:.08}button.hover.text .overlay{opacity:.04}button.focus .overlay{opacity:.24}button.focus.text .overlay{opacity:.12}button.pressed .overlay{opacity:.32}button.pressed.text .overlay{opacity:.16}"}}export{t as NvButton};