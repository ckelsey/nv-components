/*! Built with http://stenciljs.com */
nvcomponents.loadBundle("itiko61o",["exports"],function(t){var e=window.nvcomponents.h,i=function(){function t(){this.animate=!0,this.barPositions={scale:0,left:0},this.timer="requestAnimationFrame",this.state="determinate",this.type="bar",this.message="",this.showCount=!1,this.value=0,this.start=0,this.speed=1}return t.prototype.reset=function(){this.animate=!1,cancelAnimationFrame(this.animator),clearTimeout(this.animator),this.animateScale()},Object.defineProperty(t.prototype,"_start",{get:function(){return isNaN(this.start)?0:this.start/100},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_value",{get:function(){var t=(isNaN(this.value)?0:this.value/100)*(1-this._start/1)+this._start;return t>1?1:t<0?0:t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_speed",{get:function(){return this.speed||1},enumerable:!0,configurable:!0}),t.prototype.easeArray=function(t,e,i){if(t===e)return[];var s=(e-t)/i,a=Math.PI/i,n=t,r=0,o=[];return function t(){return r+=a,n+=s*Math.pow(Math.sin(r),2)*2,r<Math.PI?(o.push(Math.round(1e4*n)/1e4),t()):o}()},t.prototype.updateBarPositions=function(){var t=this;if(cancelAnimationFrame(this.animator),clearTimeout(this.animator),this.animate&&(!this.previousState||this.previousState===this.state)){this.previousState,this.state;var e=0,i=0;"indeterminate"===this.state?(e=this.barPositions.scale+.005*this._speed,(i=this.barPositions.left+this._speed)>110&&(i=-10,e=.05),i>60&&(e=this.barPositions.scale-.007*this._speed)):(e=this.barPositions.scale+(this._value-this.barPositions.scale)/20,(i=this.barPositions.left-1.38*this._speed)<0&&(i=0),e<0&&(e=0),e>1&&(e=1),e<this.barPositions.scale&&(e=this.barPositions.scale)),this.update(e,i),this.timer&&"requestAnimationFrame"!==this.timer?this.animator=setTimeout(function(){t.updateBarPositions()},16):this.animator=requestAnimationFrame(function(){t.updateBarPositions()})}},t.prototype.update=function(t,e){this.barElement&&(this.countElement&&(this.previousState&&"determinate"!==this.previousState||this.state&&"determinate"!==this.state?this.countElement.textContent="":this.countElement.textContent=Math.round(100*Math.max(t,this._value))+"%"),this.barElement.style.transformOrigin=e+"% 50%",this.barElement.style.transform="scale3d("+t+",1,1)",this.barPositions={scale:t,left:e})},t.prototype.animateScale=function(){var t=this,e=this.easeArray(this.barPositions.scale,this._value,30*this._speed),i=function(){if(!e.length)return t.previousState=t.state,t.animate=!0,t.updateBarPositions();t.barElement&&(t.update(e.shift(),0),t.timer&&"requestAnimationFrame"!==t.timer?setTimeout(function(){i()},16):requestAnimationFrame(function(){i()}))};i()},t.prototype.animateToDeterminate=function(){var t=this,e=this.easeArray(this.barPositions.left,0,30*this._speed),i=this.easeArray(this.barPositions.scale,this._value,30*this._speed),s=function(){if(!i.length||!e.length)return t.previousState=t.state,t.animate=!0,t.updateBarPositions();t.update(i.shift(),e.shift()),t.timer&&"requestAnimationFrame"!==t.timer?setTimeout(function(){s()},16):requestAnimationFrame(function(){s()})};s()},t.prototype.componentDidUpdate=function(){if(this.previousState===this.state)this.animate=!0,this.previousState=this.state,this.updateBarPositions();else if(this.animate){if(this.animate=!1,cancelAnimationFrame(this.animator),clearTimeout(this.animator),"indeterminate"===this.previousState)return this.animateToDeterminate();if("indeterminate"===this.state)return this.animate=!0,this.previousState=this.state,void this.updateBarPositions()}},t.prototype.componentDidLoad=function(){this.animate=!0,this.previousState=this.state,this.updateBarPositions()},t.prototype.render=function(){var t=this;return e("div",{class:"nv-progress"},this.message&&""!==this.message.trim()||this.showCount?e("div",{class:"nv-progress-text"},this.message&&""!==this.message.trim()?e("div",{class:"nv-progress-message",innerHTML:this.message}):"",this.showCount?e("div",{class:"nv-progress-count",ref:function(e){return t.countElement=e}}):""):"",e("div",{class:"nv-progress-bar"},e("div",{class:"nv-progress-bar-inner",ref:function(e){return t.barElement=e}})))},Object.defineProperty(t,"is",{get:function(){return"nv-progress"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},message:{type:String,attr:"message"},reset:{method:!0},showCount:{type:Boolean,attr:"show-count"},speed:{type:Number,attr:"speed"},start:{type:Number,attr:"start"},state:{type:String,attr:"state"},timer:{type:String,attr:"timer"},type:{type:String,attr:"type"},value:{type:Number,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-progress/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-progress/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-progress/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-progress/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-progress/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-progress/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready{opacity:1}nv-tabs[center=true]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs>*{opacity:0}nv-tabs>[nv-tab]{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs nv-wave,nv-tabs>[nv-tab][nv-tab-active=activating],nv-tabs>[nv-tab][nv-tab-active=true]{opacity:1}nv-tabs>[nv-tab][nv-tab-active=true]:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs .active-indicator{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs .active-indicator.nv-tabs-activating{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled{opacity:.3;pointer-events:none}.nv-component-disabled *{pointer-events:none}:host{width:100%;height:auto;display:block}.nv-progress{width:100%;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75)}.nv-progress .nv-progress-text{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px}.nv-progress .nv-progress-text .nv-progress-message{margin-right:10px}.nv-progress .nv-progress-bar{height:5px;background:rgba(255,255,255,.05);position:relative;width:100%;overflow:hidden;-webkit-transition:all .2s;transition:all .2s}.nv-progress .nv-progress-bar .nv-progress-bar-inner{width:100%;height:100%;position:absolute;top:0;left:0;background:#76b900;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transition:left 1s;transition:left 1s}"},enumerable:!0,configurable:!0}),t}();t.NvProgress=i,Object.defineProperty(t,"__esModule",{value:!0})});