/*! Built with http://stenciljs.com */
const{h:e}=window.nvcomponents;class t{constructor(){this.selfUpdate=!1,this.value=!0,this.label="",this.disabled=!1}get tabIndex(){return this.disabled?-1:0}toggle(){if(this.disabled)return!1;const e=this.value,t="mixed"===this.value||"false"===this.value||"true"!==this.value&&!this.value,s={oldValue:e,newValue:t,element:this};this.whenUpdate&&"function"==typeof this.whenUpdate&&this.whenUpdate(s),this.change.emit(s),this.onClick(),this.selfUpdate&&(this.value=t)}keyPress(e){"Enter"===e.key&&(e.preventDefault(),this.toggle())}mouseOverBox(){this.pulseBox.startPulse()}mouseLeaveBox(){this.pulseBox.stopPulse()}onClick(){this.container.querySelector("input:focus")||this.pulseBox.stopPulse(),this.rippleBox.doRipple()}render(){return e("div",{ref:e=>this.container=e,class:{"nv-switch-container":!0,selected:!!this.value&&"false"!==this.value,"nv-component-disabled":this.disabled},onClick:()=>this.toggle(),onKeyPress:e=>this.keyPress(e)},this.label?e("label",{innerHTML:this.label}):"",e("div",{class:"nv-switch-box",onMouseEnter:()=>this.mouseOverBox(),onMouseLeave:()=>this.mouseLeaveBox()},e("div",{class:"nv-switch-track"}),e("div",{class:"nv-switch-ball"},e("nv-pulse",{highlight:!0===this.value||"true"===this.value,ref:e=>this.pulseBox=e}),e("nv-ripple",{highlight:!1===this.value||"false"===this.value,ref:e=>this.rippleBox=e}))),e("input",{class:"nv-switch-switch-native",ref:e=>this.nativeswitch=e,tabindex:this.tabIndex,type:"checkbox",name:this.label,value:this.label,onFocus:()=>this.mouseOverBox(),onBlur:()=>this.mouseLeaveBox()}))}static get is(){return"nv-switch"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},element:{elementRef:!0},label:{type:String,attr:"label"},selfUpdate:{type:Boolean,attr:"self-update"},toggle:{method:!0},value:{type:"Any",attr:"value",mutable:!0},whenUpdate:{type:"Any",attr:"when-update"}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-switch/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-switch/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-switch/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-switch/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-switch/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-switch/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-switch{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-switch{opacity:1}nv-tabs[center=true].sc-nv-switch{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-switch > *.sc-nv-switch{opacity:0}nv-tabs.sc-nv-switch > [nv-tab].sc-nv-switch{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-switch   nv-wave.sc-nv-switch, nv-tabs.sc-nv-switch > [nv-tab][nv-tab-active=activating].sc-nv-switch, nv-tabs.sc-nv-switch > [nv-tab][nv-tab-active=true].sc-nv-switch{opacity:1}nv-tabs.sc-nv-switch > [nv-tab][nv-tab-active=true].sc-nv-switch:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-switch   .active-indicator.sc-nv-switch{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-switch   .active-indicator.nv-tabs-activating.sc-nv-switch{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-switch{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-switch   *.sc-nv-switch{pointer-events:none}.sc-nv-switch-h{width:auto;height:auto;display:inline-block}.nv-switch-container.sc-nv-switch{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:7px 0;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);cursor:pointer}.nv-switch-container.sc-nv-switch   .nv-switch-box.sc-nv-switch{width:32px;height:20px;border-radius:50%;position:relative}.nv-switch-container.sc-nv-switch   .nv-switch-box.sc-nv-switch   .nv-switch-track.sc-nv-switch{width:100%;height:66%;border-radius:10px;position:absolute;background-color:#6b6b6b;top:17%;-webkit-transition:background-color .5s;transition:background-color .5s}.nv-switch-container.sc-nv-switch   .nv-switch-box.sc-nv-switch   .nv-switch-ball.sc-nv-switch{width:0;height:0;padding:31.25%;border-radius:50%;position:relative;left:-6%;background-color:#d7d7d7;-webkit-transition:background-color .4s,left .3s;transition:background-color .4s,left .3s}.nv-switch-container.selected.sc-nv-switch   .nv-switch-track.sc-nv-switch{background-color:#127000}.nv-switch-container.selected.sc-nv-switch   .nv-switch-ball.sc-nv-switch{left:45.5%;background-color:#76b900}.nv-switch-container.sc-nv-switch   label.sc-nv-switch{padding:0 32px 0 0;cursor:pointer}.nv-switch-container.sc-nv-switch   .nv-switch-switch-native.sc-nv-switch{opacity:0;pointer-events:none;position:absolute;width:0;height:0;margin:0}"}}export{t as NvSwitch};