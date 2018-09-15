/*! Built with http://stenciljs.com */
import{h}from"./nvcomponents.core.js";var NvInput=function(){function t(){this.helpText="",this.selfUpdate=!1,this.value=null,this.type="text",this.classes="",this.label="",this.icon="",this.clear=!1,this.error=!1,this.assistiveText="",this.characterCount=!1,this.multiline=!1,this.filterOptions=!1,this.options=void 0,this.max=void 0,this.min=void 0,this.step=void 0,this.required=!1,this.whenUpdate=void 0,this.whenFocus=void 0,this.whenBlur=void 0,this.whenError=void 0}return Object.defineProperty(t.prototype,"characterCountText",{get:function(){return void 0!==this.max?this.inputElement.value.length+(this.max?"/"+this.max:""):this.inputElement.value.length.toString()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updatedData",{get:function(){var t=this.inputElement.value;return"number"===this.type&&(t=parseFloat(t)),{oldValue:this.value,newValue:t,element:this}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_options",{get:function(){var t=this.options;if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}if(!Array.isArray(t))return[];if(this.filterOptions){var e=[],i=(this.value?this.value.toString():"").toLowerCase();t.forEach(function(t){t.toString().toLowerCase().indexOf(i)>-1&&e.push(t)}),t=e}return t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isFocused",{get:function(){return this.container.classList.contains("active")},enumerable:!0,configurable:!0}),t.prototype.doClick=function(){this.whenclick.emit(this.updatedData),this.inputElement.focus(),this.doFocus()},t.prototype.doInput=function(t){var e=!1,i="";if(this.type&&"text"!==this.type||this.max&&this.inputElement.value.length>this.max&&(e=!0,i=this.max+" characters allowed"),"number"===this.type&&(isNaN(parseFloat(this.inputElement.value))&&(e=!0,i="only numbers are allowed"),this.max&&parseFloat(this.inputElement.value)>this.max&&(e=!0,i=this.max+" is the maximum"),void 0!==this.min&&parseFloat(this.inputElement.value)<this.min&&(e=!0,i=this.max+" is the maximum")),this.validator&&"function"==typeof this.validator&&(this.validator(this.inputElement.value)||(e=!0)),e)return i&&""!==i&&this.doError(i),this.whenerror.emit(this.updatedData),this.whenError&&"function"==typeof this.whenError&&this.whenError(this.updatedData),this.inputElement.value=this.value.toString(),t&&t.preventDefault(),!1;this.inputElement.focus(),this.whenupdate.emit(this.updatedData),this.wheninput.emit(this.updatedData),this.whenUpdate&&"function"==typeof this.whenUpdate&&this.whenUpdate(this.updatedData),this.selfUpdate&&(this.characterCountElement.textContent=this.characterCountText,this.value=this.updatedData.newValue,this.setClasses(),this.setHeight())},t.prototype.doFocus=function(){this.container.classList.add("active"),this.whenfocus.emit(this.updatedData),this.whenFocus&&"function"==typeof this.whenFocus&&this.whenFocus(this.updatedData),this._options.length&&this.menu.setAttribute("active","true")},t.prototype.doBlur=function(){this.container.classList.remove("active"),this.whenblur.emit(this.updatedData),this.whenBlur&&"function"==typeof this.whenBlur&&this.whenBlur(this.updatedData),this.menu.setAttribute("active","false")},t.prototype.doError=function(t){var e=this;this.container.classList.add("showHelp"),this.container.classList.add("error"),this.helpText=t,setTimeout(function(){e.container.classList.remove("showHelp"),e.error||e.container.classList.remove("error")},1500)},t.prototype.shrink=function(){this.classes.indexOf("shrink")>-1&&(this.inputElement.style.width=16*this.value.toString().length+"px")},t.prototype.clearValue=function(){this.inputElement.value="",this.doInput()},t.prototype.setClasses=function(){var t=this,e=void 0!==this.inputElement.value&&null!==this.inputElement.value&&""!==this.inputElement.value,i=void 0!==this.icon&&null!==this.icon&&""!==this.icon;this.classes&&(this.classes.split(",").forEach(function(e){e&&""!==e.trim()&&t.container.classList.add(e.trim())}),this.shrink()),e?this.container.classList.add("hasValue"):this.container.classList.remove("hasValue"),i?this.container.classList.add("hasIcon"):this.container.classList.remove("hasIcon"),this.clear?this.container.classList.add("hasClear"):this.container.classList.remove("hasClear"),this.characterCount&&"text"===this.type?this.container.classList.add("showCharacterCount"):this.container.classList.remove("showCharacterCount"),this.error?this.container.classList.add("error"):this.container.classList.remove("error")},t.prototype.optionClicked=function(t){var e=this._options;e[t]&&(this.inputElement.value=e[t].toString()),this.doInput(),this.inputElement.blur()},t.prototype.setHeight=function(){this.multiline&&(this.inputElement.style.height="0px",this.inputElement.style.height=this.inputElement.scrollHeight+"px")},t.prototype.update=function(){this.setClasses(),this.characterCountElement.textContent=this.characterCountText,this.setHeight()},t.prototype.componentDidUpdate=function(){this.update()},t.prototype.componentDidLoad=function(){var t=this;this.update(),this.doClick=this.doClick.bind(this),this.element.addEventListener("keydown",function(e){t.whenkeydown.emit(t.updatedData),t.container.classList.contains("active")&&t._options.length&&("ArrowDown"===e.key&&(e.preventDefault(),t.menu.focusNextOption()),"ArrowUp"===e.key&&(e.preventDefault(),t.menu.focusPreviousOption()),"Enter"===e.key&&void 0!==t.menu.focusedOption&&t.menu.selectOption(t.menu.focusedOption)),"Enter"===e.key&&t.whensubmit.emit(t.updatedData)})},t.prototype.render=function(){var t=this;return h("div",{class:"nv-input-container",ref:function(e){return t.container=e},onClick:function(){t.doClick()}},h("div",{class:"shape",ref:function(e){return t.shape=e}}),this.multiline?h("textarea",{value:this.value,onInput:function(e){return t.doInput(e)},onBlur:function(){return t.doBlur()},onFocus:function(){return t.doFocus()},onKeyPress:function(){return t.whenkeypress.emit(t.updatedData)},onKeyUp:function(){return t.whenkeyup.emit(t.updatedData)},ref:function(e){return t.inputElement=e},required:this.required}):h("input",{type:this.type,value:this.value,onInput:function(e){return t.doInput(e)},onBlur:function(){return t.doBlur()},onFocus:function(){return t.doFocus()},onKeyPress:function(){return t.whenkeypress.emit(t.updatedData)},onKeyUp:function(){return t.whenkeyup.emit(t.updatedData)},ref:function(e){return t.inputElement=e},required:this.required,step:this.step}),h("span",{class:"help-text",innerHTML:this.helpText}),h("span",{class:"assistive-text",innerHTML:this.assistiveText}),h("span",{class:"character-count-text",ref:function(e){return t.characterCountElement=e}}),this.label?h("label",{innerHTML:this.label}):"",this.icon?h("material-icon",{class:"input-icon",type:this.icon,size:"24px",color:"inherit"}):"",this.clear?h("material-icon",{class:"input-clear",type:"close",size:"24px",color:"inherit",onClick:function(){return t.clearValue()}}):"",h("nv-menu",{optionHoverStyles:{background:"#676767"},optionStyles:{background:"#575757",padding:"0px 16px",lineHeight:"24px",fontSize:"12px"},options:this._options.map(function(t){return t.toString()}),active:!1,position:"bottom",anchor:this.element,width:"100%",whenClicked:function(e){return t.optionClicked(e)},ref:function(e){return t.menu=e}}))},Object.defineProperty(t,"is",{get:function(){return"nv-input"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{assistiveText:{type:String,attr:"assistive-text"},characterCount:{type:Boolean,attr:"character-count"},classes:{type:String,attr:"classes"},clear:{type:Boolean,attr:"clear"},doBlur:{method:!0},doClick:{method:!0},doError:{method:!0},doFocus:{method:!0},doInput:{method:!0},element:{elementRef:!0},error:{type:Boolean,attr:"error"},filterOptions:{type:Boolean,attr:"filter-options"},helpText:{type:String,attr:"help-text",mutable:!0},icon:{type:String,attr:"icon"},label:{type:String,attr:"label"},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},multiline:{type:Boolean,attr:"multiline"},optionClicked:{method:!0},options:{type:String,attr:"options"},required:{type:Boolean,attr:"required"},selfUpdate:{type:Boolean,attr:"self-update"},step:{type:Number,attr:"step"},type:{type:String,attr:"type"},validator:{type:"Any",attr:"validator"},value:{type:"Any",attr:"value",reflectToAttr:!0,mutable:!0},whenBlur:{type:"Any",attr:"when-blur"},whenError:{type:"Any",attr:"when-error"},whenFocus:{type:"Any",attr:"when-focus"},whenUpdate:{type:"Any",attr:"when-update"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"whenupdate",method:"whenupdate",bubbles:!0,cancelable:!0,composed:!0},{name:"wheninput",method:"wheninput",bubbles:!0,cancelable:!0,composed:!0},{name:"whenfocus",method:"whenfocus",bubbles:!0,cancelable:!0,composed:!0},{name:"whenblur",method:"whenblur",bubbles:!0,cancelable:!0,composed:!0},{name:"whenclick",method:"whenclick",bubbles:!0,cancelable:!0,composed:!0},{name:"whenkeypress",method:"whenkeypress",bubbles:!0,cancelable:!0,composed:!0},{name:"whenkeydown",method:"whenkeydown",bubbles:!0,cancelable:!0,composed:!0},{name:"whenkeyup",method:"whenkeyup",bubbles:!0,cancelable:!0,composed:!0},{name:"whensubmit",method:"whensubmit",bubbles:!0,cancelable:!0,composed:!0},{name:"whenerror",method:"whenerror",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-input/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-input/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-input/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-input/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-input/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-input/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:auto;height:auto;display:inline-block;margin:7px 0}.nv-input-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);cursor:pointer;-webkit-box-shadow:inset 0 -1px 0 0 rgba(255,255,255,.3);box-shadow:inset 0 -1px 0 0 rgba(255,255,255,.3);background:rgba(255,255,255,.12);-webkit-transition:all .3s;transition:all .3s;position:relative;margin:0}.nv-input-container .shape{position:absolute;width:100%;height:100%;left:0;top:0;pointer-events:none}.nv-input-container label{top:16px;position:absolute;color:rgba(255,255,255,.3);left:12px;pointer-events:none;-webkit-transition:all .3s;transition:all .3s}.nv-input-container input,.nv-input-container textarea{outline:0!important;border:none;-webkit-box-shadow:none;box-shadow:none;background:0 0;color:inherit;font:inherit;padding:0 12px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;max-width:100%;caret-color:#76b900;margin:17px 0 15px;resize:none;-webkit-transition:background .2s,color .2,font .2s,-webkit-box-shadow .2s;transition:background .2s,color .2,font .2s,-webkit-box-shadow .2s;transition:background .2s,box-shadow .2s,color .2,font .2s;transition:background .2s,box-shadow .2s,color .2,font .2s,-webkit-box-shadow .2s}.nv-input-container input[type=number]::-webkit-inner-spin-button,.nv-input-container input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.nv-input-container input[type=number]{-moz-appearance:textfield}.nv-input-container .character-count-text{pointer-events:none;opacity:0;position:absolute;top:100%;right:12px;font-size:12px;-webkit-transition:all .2s;transition:all .2s}.nv-input-container .assistive-text,.nv-input-container .help-text{position:absolute;top:100%;left:12px;font-size:12px;-webkit-transition:all .3s;transition:all .3s}.nv-input-container .help-text{opacity:0}.nv-input-container .input-icon{position:absolute;left:12px;top:16px;pointer-events:none;-webkit-transition:all .3s;transition:all .3s}.nv-input-container .input-clear{opacity:0;pointer-events:none;position:absolute;right:12px;top:16px;cursor:pointer;-webkit-transition:all .2s;transition:all .2s}.nv-input-container.showHelp .assistive-text{opacity:0}.nv-input-container.showHelp .help-text{opacity:1}.nv-input-container.transparent{background:0 0!important}.nv-input-container.center input,.nv-input-container.shrink input{text-align:center}.nv-input-container.small input,.nv-input-container.small textarea{padding:0 4px;margin:0}.nv-input-container.small label{display:none}.nv-input-container.hasValue label{top:0;font-size:12px}.nv-input-container.hasValue.showCharacterCount .character-count-text{opacity:1}.nv-input-container.hasValue .input-clear{opacity:1;pointer-events:all}.nv-input-container.hasIcon input,.nv-input-container.hasIcon textarea{padding-left:48px}.nv-input-container.hasIcon .assistive-text,.nv-input-container.hasIcon label{left:48px}.nv-input-container.hasClear input,.nv-input-container.hasClear textarea{padding-right:48px}.nv-input-container:hover{background:rgba(255,255,255,.16)}.nv-input-container.active{-webkit-box-shadow:inset 0 -2px 0 0 #76b900;box-shadow:inset 0 -2px 0 0 #76b900;background:rgba(255,255,255,.24)}.nv-input-container.active label{top:0;font-size:12px;color:#76b900}.nv-input-container.error,.nv-input-container.error.activated{-webkit-box-shadow:inset 0 -2px 0 0 #ff291c;box-shadow:inset 0 -2px 0 0 #ff291c}.nv-input-container.error input,.nv-input-container.error textarea,.nv-input-container.error.activated input,.nv-input-container.error.activated textarea{caret-color:#ff291c}.nv-input-container.error .assistive-text,.nv-input-container.error label,.nv-input-container.error.activated .assistive-text,.nv-input-container.error.activated label{color:#ff291c}"},enumerable:!0,configurable:!0}),t}(),NvSlider=function(){function t(){this.mouseDownIndex=1,this.selfUpdate=!1,this.value=void 0,this.values=void 0,this.showInput=!1,this.step=void 0,this.max=1,this.min=0,this.label="",this.disabled=!1}return Object.defineProperty(t.prototype,"_value",{get:function(){return isNaN(this.value)?this.min||0:(this.value-(this.min||0))/(this.max-(this.min||0))*100},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_values",{get:function(){if(this.values){var t=this.values;if("string"==typeof t)try{t=JSON.parse(t)}catch(t){return}if(Array.isArray(t))return isNaN(t[0])&&(t[0]=0),isNaN(t[1])&&(t[1]=0),this.input1&&(this.input1.value=t[0]),this.input2&&(this.input2.value=t[1]),t}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tabIndex",{get:function(){return this.disabled?-1:0},enumerable:!0,configurable:!0}),t.prototype.mouseOverBox=function(){this.pulseBox2.startPulse(),this.pulseBox1&&this.pulseBox1.startPulse()},t.prototype.mouseLeaveBox=function(){this.pulseBox2.stopPulse(),this.pulseBox1&&this.pulseBox1.stopPulse()},t.prototype.updateValue=function(t,e){var i=this,n=void 0!==this.min?this.min:0,s=this.step?this.step:(this.max-n)/100,o=function(t){if(i.step){t=Math.round(t/i.step)*i.step;var e=i.step.toString().split(".")[1];e&&(t=parseFloat(t.toFixed(e.length)))}return t};if(this._values){var r=this._values;e?(t>this.max&&(t=this.max),t<=this._values[0]+s&&(t=this._values[0]+s)):(t>r[1]-s&&(t=r[1]-s),t<n&&(t=n)),t=o(t),r[e]=t;var a={oldValue:this.values,newValue:r,element:this};"function"==typeof this.whenUpdate&&this.whenUpdate(a),this.change.emit(a),this.selfUpdate&&(this.values=r,this.update()),this.setSteps()}else t>this.max&&(t=this.max),t<n&&(t=n),t=o(t),a={oldValue:this.value,newValue:t,element:this},"function"==typeof this.whenUpdate&&this.whenUpdate(a),this.change.emit(a),this.selfUpdate&&(this.value=t),this.setSteps()},t.prototype.mouseMove=function(t){var e=(t.pageX-this.trackContainer.getBoundingClientRect().left)/this.trackContainer.getBoundingClientRect().width*(this.max-(this.min||0))+(this.min||0);this.updateValue(e,this.mouseDownIndex)},t.prototype.mouseDown=function(t){if(document.body.style.userSelect="none",this._values){var e=this.ball1.getBoundingClientRect(),i=Math.abs(t.pageX-(e.left+e.width/2)),n=this.ball2.getBoundingClientRect();i<Math.abs(t.pageX-(n.left+n.width/2))?(this.mouseDownIndex=0,this.rippleBox1.startRipple()):(this.mouseDownIndex=1,this.rippleBox2.startRipple())}else this.rippleBox2.startRipple(),this.rippleBox1&&this.rippleBox1.startRipple();this.mouseMove(t),this.pulseBox2.stopPulse(),this.pulseBox1&&this.pulseBox1.stopPulse(),window.document.addEventListener("mousemove",this.mouseMove),window.document.addEventListener("mouseup",this.mouseUp),window.document.addEventListener("mouseleave",this.mouseUp)},t.prototype.mouseUp=function(){document.body.style.removeProperty("user-select"),window.document.removeEventListener("mousemove",this.mouseMove),window.document.removeEventListener("mouseup",this.mouseUp),window.document.removeEventListener("mouseleave",this.mouseUp),this.pulseBox2.stopPulse(),this.pulseBox1&&this.pulseBox1.stopPulse(),this.rippleBox2.stopRipple(),this.rippleBox1&&this.rippleBox1.stopRipple()},t.prototype.inputUpdate=function(t,e){if(this._values){var i=parseFloat(t.newValue);return this.updateValue(i,e)}return this.updateValue(parseFloat(t.newValue),e)},t.prototype.setSteps=function(){if(void 0!==this.step){for(var t=Math.round((this.max-(this.min||0))/this.step),e=Math.round((this.value+(this.min||0))/this.step),i=this.stepsElement.children,n=0;i.length>t;)this.stepsElement.removeChild(i[i.length-1]);for(;i.length<t;){var s=document.createElement("div");s.className="track-tick",this.stepsElement.appendChild(s),i=this.stepsElement.children}for(;n<t;)n<e?i[n].classList.add("active"):i[n].classList.remove("active"),n+=1}},t.prototype.update=function(){this._values?(this.ball1.style.left=this._values[0]/this.max*100+"%",this.ball2.style.left=this._values[1]/this.max*100+"%",this.track&&(this.track.style.width=(this._values[1]-this._values[0])/this.max*100+"%",this.track.style.left=this._values[0]/this.max*100+"%")):this.track?(this.track.style.width=this._value+"%",this.ball2.style.left=this._value+"%"):this.ball2.style.left=this._value+"%",this.setSteps()},t.prototype.componentDidUpdate=function(){this.update()},t.prototype.componentDidLoad=function(){this.mouseUp=this.mouseUp.bind(this),this.mouseMove=this.mouseMove.bind(this),this.update()},t.prototype.render=function(){var t=this;return h("div",{ref:function(e){return t.container=e},class:{"nv-slider-container":!0,"nv-component-disabled":this.disabled},onMouseEnter:function(){return t.mouseOverBox()},onMouseLeave:function(){return t.mouseLeaveBox()}},this.label?h("label",{innerHTML:this.label}):"",this.showInput&&this._values?h("nv-input",{type:"number",classes:"small, transparent, center",style:{width:"48px"},value:this._values[0],whenUpdate:function(e){return t.inputUpdate(e,0)},whenFocus:function(){return t.rippleBox1.startRipple()},whenBlur:function(){return t.rippleBox1.stopRipple()},step:this.step?this.step:this.max?this.max/100:.1,max:this.max,min:this.min||0,ref:function(e){return t.input1=e}}):"",h("div",{class:"nv-slider-box",ref:function(e){return t.trackContainer=e},onMouseDown:function(e){return t.mouseDown(e)}},void 0===this.step?h("div",{class:"nv-slider-track"},h("div",{class:"nv-slider-track-inner",ref:function(e){return t.track=e}})):h("div",{class:"nv-slider-track-steps",ref:function(e){return t.stepsElement=e}}),this._values?h("div",{class:"nv-slider-ball",ref:function(e){return t.ball1=e}},h("nv-pulse",{highlight:!0,ref:function(e){return t.pulseBox1=e}}),h("nv-ripple",{highlight:!0,ref:function(e){return t.rippleBox1=e}})):"",h("div",{class:"nv-slider-ball",ref:function(e){return t.ball2=e}},h("nv-pulse",{highlight:!0,ref:function(e){return t.pulseBox2=e}}),h("nv-ripple",{highlight:!0,ref:function(e){return t.rippleBox2=e}}))),this.showInput?h("nv-input",{type:"number",classes:"small, transparent, center",style:{width:"48px"},value:this._values?this._values[1]:this.value,whenUpdate:function(e){return t.inputUpdate(e,1)},whenFocus:function(){return t.rippleBox2.startRipple()},whenBlur:function(){return t.rippleBox2.stopRipple()},step:this.step?this.step:this.max?this.max/100:.1,max:this.max,min:this.min||0,ref:function(e){return t.input2=e}}):"")},Object.defineProperty(t,"is",{get:function(){return"nv-slider"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},element:{elementRef:!0},label:{type:String,attr:"label"},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},selfUpdate:{type:Boolean,attr:"self-update"},showInput:{type:Boolean,attr:"show-input"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0},values:{type:String,attr:"values",mutable:!0},whenUpdate:{type:"Any",attr:"when-update"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-slider/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-slider/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-slider/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-slider/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-slider/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-slider/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:auto;height:auto;display:inline-block}.nv-slider-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:7px 0;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);cursor:pointer}.nv-slider-container .nv-slider-box{width:286px;height:2px;padding:6px 0;margin:6px 8px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.nv-slider-container .nv-slider-box .nv-slider-track-steps{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-preferred-size:auto;flex-basis:auto}.nv-slider-container .nv-slider-box .nv-slider-track-steps .track-tick{height:2px;background:rgba(255,255,255,.75);width:100%;margin:0 1px;-webkit-transition:all .2s;transition:all .2s}.nv-slider-container .nv-slider-box .nv-slider-track-steps .track-tick.active{background:#76b900}.nv-slider-container .nv-slider-box .nv-slider-track{position:absolute;width:100%;height:2px;left:0;background:rgba(255,255,255,.75)}.nv-slider-container .nv-slider-box .nv-slider-track .nv-slider-track-inner{background:#76b900;height:100%;width:0%;position:relative}.nv-slider-container .nv-slider-box .nv-slider-ball{width:12px;height:12px;background:#76b900;position:relative;border-radius:50%;margin-left:-12px}.nv-slider-container .nv-slider-box .nv-slider-ball:nth-child(even){margin-left:-6px}.nv-slider-container label{padding:0 32px 0 0;cursor:pointer}.nv-slider-container .nv-slider-slider-native{opacity:0;pointer-events:none;position:absolute;width:0;height:0;margin:0}"},enumerable:!0,configurable:!0}),t}();export{NvInput,NvSlider};