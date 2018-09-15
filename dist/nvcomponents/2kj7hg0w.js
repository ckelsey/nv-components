/*! Built with http://stenciljs.com */
const{h:e}=window.nvcomponents;class t{constructor(){this.selfUpdate=!1,this.value=!0,this.label="",this.disabled=!1,this.parentDisabled=!1}get state(){switch(this.value){case"mixed":return"indeterminate_check_box";case!0:case"true":return"check_box";case!1:case"false":return"check_box_outline_blank"}}get tabIndex(){return this.disabled||this.parentDisabled?-1:0}toggle(){if(this.disabled||this.parentDisabled)return!1;const e=this.value,t="mixed"===this.value||"false"===this.value||"true"!==this.value&&!this.value,s={oldValue:e,newValue:t,element:this};this.whenUpdate&&"function"==typeof this.whenUpdate&&this.whenUpdate(s),this.whenupdate.emit(s),this.onClick(),this.selfUpdate&&(this.value=t)}keyPress(e){"Enter"===e.key&&(e.preventDefault(),this.toggle())}mouseOverBox(){this.pulseBox.startPulse()}mouseLeaveBox(){this.pulseBox.stopPulse()}onClick(){this.container.querySelector("input:focus")||this.pulseBox.stopPulse(),this.rippleBox.doRipple()}render(){return e("div",{ref:e=>this.container=e,class:{"nv-checkbox-container":!0,selected:!!this.value&&"false"!==this.value,"nv-component-disabled":this.disabled||this.parentDisabled},onClick:()=>this.toggle(),onKeyPress:e=>this.keyPress(e)},e("div",{class:"nv-checkbox-box",onMouseEnter:()=>this.mouseOverBox(),onMouseLeave:()=>this.mouseLeaveBox()},e("nv-pulse",{highlight:!0===this.value||"true"===this.value,ref:e=>this.pulseBox=e}),e("nv-ripple",{highlight:!0===this.value||"true"===this.value,ref:e=>this.rippleBox=e}),e("material-icon",{type:this.state})),e("label",{innerHTML:this.label}),e("input",{class:"nv-checkbox-checkbox-native",ref:e=>this.nativeCheckbox=e,tabindex:this.tabIndex,type:"checkbox",name:this.label,value:this.label,onFocus:()=>this.mouseOverBox(),onBlur:()=>this.mouseLeaveBox()}))}static get is(){return"nv-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},element:{elementRef:!0},label:{type:String,attr:"label"},parentDisabled:{type:Boolean,attr:"parent-disabled"},selfUpdate:{type:Boolean,attr:"self-update"},toggle:{method:!0},value:{type:"Any",attr:"value",mutable:!0},whenUpdate:{type:"Any",attr:"when-update"}}}static get events(){return[{name:"whenupdate",method:"whenupdate",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:auto;height:auto;display:inline-block}.nv-checkbox-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:7px 0;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);cursor:pointer}.nv-checkbox-container .nv-checkbox-box{width:24px;height:24px;border-radius:50%;position:relative;color:rgba(255,255,255,.75)}.nv-checkbox-container.selected .nv-checkbox-box{color:#76b900}.nv-checkbox-container.selected.nv-component-disabled .nv-checkbox-box{color:rgba(255,255,255,.75)}.nv-checkbox-container label{padding:0 0 0 32px;cursor:pointer}.nv-checkbox-container .nv-checkbox-checkbox-native{opacity:0;pointer-events:none;position:absolute;width:0;height:0;margin:0}"}}class s{constructor(){this.lastToggleState=!1,this.values=[],this.selfUpdate=!1,this.label="",this.disabled=!1,this.parentDisabled=!1}get _values(){let e=this.values;try{e=JSON.parse(this.values)}catch(e){}return Array.isArray(e)?e:[]}get isDisabled(){return this.parentDisabled||this.disabled}get groupState(){const e=t=>{let s=[];for(let a=0;a<t.length;a++)t[a].values?s.push(e(t[a].values)):s.push(t[a].value);const a=s.indexOf(!1)>-1,l=s.indexOf(!0)>-1;return s.indexOf("mixed")>-1?"mixed":!(!l||a)||!(!l&&a)&&"mixed"};return!!Array.isArray(this._values)&&e(this._values)}setGroupState(e,t){return t.map(t=>t.disabled||t.parentDisabled?t:(t.values?t.values=this.setGroupState(e,t.values):t.value=e,t))}updateParent(){const e=this.groupState,t=this.values;let s;this.lastToggleState=!this.lastToggleState;const a={oldValue:t,newValue:s=!0===e?this.setGroupState(!1,this._values):"mixed"===e?this.setGroupState(this.lastToggleState,this._values):this.setGroupState(!0,this._values),element:this};this.whenUpdate&&"function"==typeof this.whenUpdate&&this.whenUpdate(a),this.whenupdate.emit(a),this.selfUpdate&&(this.values=s)}updateChild(e){const t=e.element.element,s=this.values;let a=JSON.parse(JSON.stringify(this._values));var l=t.parentNode.parentNode,i=Array.prototype.indexOf.call(l.children,t.parentNode);a[i].values?a[i].values=e.newValue:a[i].value=e.newValue;const n={oldValue:s,newValue:a,element:this};this.whenUpdate&&"function"==typeof this.whenUpdate&&this.whenUpdate(n),this.whenupdate.emit(n),this.selfUpdate&&(this.values=a)}componentDidLoad(){this.lastToggleState=!!this.groupState}render(){return this.values?e("div",{class:"nv-checkbox-array"},e("div",{class:"nv-checkbox-array-container"},e("div",{class:"nv-checkbox-array-parent"},e("nv-checkbox",{class:"nv-checkbox-array-parent-checkbox",label:this.label,value:this.groupState,disabled:this.isDisabled,whenUpdate:this.updateParent.bind(this)})),e("div",{class:"nv-checkbox-array-children"},this._values.map(t=>e("div",null,t.values?e("nv-checkbox-array",{label:t.label,values:t.values,disabled:this.isDisabled||t.disabled,whenUpdate:this.updateChild.bind(this)}):e("nv-checkbox",{label:t.label,value:t.value,disabled:this.isDisabled||t.disabled,whenUpdate:this.updateChild.bind(this)})))))):e("div",null)}static get is(){return"nv-checkbox-array"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},element:{elementRef:!0},label:{type:String,attr:"label"},parentDisabled:{type:Boolean,attr:"parent-disabled"},selfUpdate:{type:Boolean,attr:"self-update"},values:{type:String,attr:"values",mutable:!0},whenUpdate:{type:"Any",attr:"when-update"}}}static get events(){return[{name:"whenupdate",method:"whenupdate",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox-array/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox-array/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox-array/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox-array/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox-array/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-checkbox-array/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:auto;height:auto;display:inline-block}.nv-checkbox-array .nv-checkbox-array-children{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:53px}"}}export{t as NvCheckbox,s as NvCheckboxArray};