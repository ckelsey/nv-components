/*! Built with http://stenciljs.com */
const{h:e}=window.nvcomponents;class t{constructor(){this.highlight=!1}startPulse(){if(clearInterval(this.pulseTimer),!this.pulseBox)return;const e=Math.min(this.element.offsetWidth,this.element.offsetHeight);this.pulseBox.style.width=`${e}px`,this.pulseBox.style.height=`${e}px`,this.pulseBox.style.top=`${this.element.offsetHeight/2-e/2}px`,this.pulseBox.style.left=`${this.element.offsetWidth/2-e/2}px`,this.highlight?this.pulseBox.classList.add("highlighted"):this.pulseBox.classList.remove("highlighted"),this.pulseBox.classList.add("pulseIn"),this.pulseBox.classList.add("pulseOut"),this.pulseTimer=setInterval(()=>{this.pulseBox&&this.pulseBox.classList.toggle("pulseOut")},1200)}stopPulse(){if(clearInterval(this.pulseTimer),!this.pulseBox)return;const e=Math.min(this.element.offsetWidth,this.element.offsetHeight);this.pulseBox.style.width=`${e}px`,this.pulseBox.style.height=`${e}px`,this.pulseBox.style.top=`${this.element.offsetHeight/2-e/2}px`,this.pulseBox.style.left=`${this.element.offsetWidth/2-e/2}px`,this.highlight?this.pulseBox.classList.add("highlighted"):this.pulseBox.classList.remove("highlighted"),this.pulseBox.classList.remove("pulseIn"),this.pulseBox.classList.remove("pulseOut")}render(){return e("div",{class:"nv-pulse",ref:e=>this.pulseBox=e})}static get is(){return"nv-pulse"}static get encapsulation(){return"shadow"}static get properties(){return{element:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},startPulse:{method:!0},stopPulse:{method:!0}}}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-pulse/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-pulse{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-pulse{opacity:1}nv-tabs[center=true].sc-nv-pulse{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-pulse > *.sc-nv-pulse{opacity:0}nv-tabs.sc-nv-pulse > [nv-tab].sc-nv-pulse{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-pulse   nv-wave.sc-nv-pulse, nv-tabs.sc-nv-pulse > [nv-tab][nv-tab-active=activating].sc-nv-pulse, nv-tabs.sc-nv-pulse > [nv-tab][nv-tab-active=true].sc-nv-pulse{opacity:1}nv-tabs.sc-nv-pulse > [nv-tab][nv-tab-active=true].sc-nv-pulse:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-pulse   .active-indicator.sc-nv-pulse{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-pulse   .active-indicator.nv-tabs-activating.sc-nv-pulse{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-pulse{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-pulse   *.sc-nv-pulse{pointer-events:none}.sc-nv-pulse-h{position:absolute;width:100%;height:100%;pointer-events:none;top:0;left:0}.nv-pulse.sc-nv-pulse{position:absolute;width:100%;height:100%;top:0;left:0;border-radius:50%;-webkit-box-shadow:0 0 0 6px rgba(255,255,255,.45);box-shadow:0 0 0 6px rgba(255,255,255,.45);background-color:rgba(255,255,255,.45);opacity:0;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:background-color .4s ease-out,opacity .4s ease-out,-webkit-box-shadow .4s ease-out,-webkit-transform .4s ease-out;transition:background-color .4s ease-out,opacity .4s ease-out,-webkit-box-shadow .4s ease-out,-webkit-transform .4s ease-out;transition:background-color .4s ease-out,box-shadow .4s ease-out,opacity .4s ease-out,transform .4s ease-out;transition:background-color .4s ease-out,box-shadow .4s ease-out,opacity .4s ease-out,transform .4s ease-out,-webkit-box-shadow .4s ease-out,-webkit-transform .4s ease-out;pointer-events:none}.nv-pulse.highlighted.sc-nv-pulse{-webkit-box-shadow:0 0 0 6px #76b900;box-shadow:0 0 0 6px #76b900;background-color:#76b900}.nv-pulse.pulseIn.sc-nv-pulse{opacity:.16;-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9);-webkit-transition:background-color 1s ease-out,opacity 1s ease-out,-webkit-box-shadow 1s ease-out,-webkit-transform 1s ease-out;transition:background-color 1s ease-out,opacity 1s ease-out,-webkit-box-shadow 1s ease-out,-webkit-transform 1s ease-out;transition:background-color 1s ease-out,box-shadow 1s ease-out,opacity 1s ease-out,transform 1s ease-out;transition:background-color 1s ease-out,box-shadow 1s ease-out,opacity 1s ease-out,transform 1s ease-out,-webkit-box-shadow 1s ease-out,-webkit-transform 1s ease-out}.nv-pulse.pulseOut.sc-nv-pulse{opacity:.08;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}"}}class s{constructor(){this.highlight=!1}doRipple(){if(this.rippleBox)return this.startRipple().then(()=>this.stopRipple())}startRipple(){if(this.rippleBox)return clearTimeout(this.rippleTimer),new Promise(e=>{const t=Math.min(this.element.offsetWidth,this.element.offsetHeight);this.rippleBox.style.width=`${t}px`,this.rippleBox.style.height=`${t}px`,this.rippleBox.style.top=`${this.element.offsetHeight/2-t/2}px`,this.rippleBox.style.left=`${this.element.offsetWidth/2-t/2}px`,this.highlight?this.rippleBox.classList.add("highlighted"):this.rippleBox.classList.remove("highlighted"),this.rippleBox.classList.add("rippling"),this.rippleBox.classList.add("rippleIn"),this.rippleTimer=setTimeout(()=>{this.rippleBox.classList.add("rippleGrow"),this.rippleBox.classList.add("rippleMiddle"),this.rippleBox.classList.remove("rippleIn"),setTimeout(()=>e(),200)},10)})}stopRipple(){if(this.rippleBox)return clearTimeout(this.rippleTimer),new Promise(e=>{const t=Math.min(this.element.offsetWidth,this.element.offsetHeight);this.rippleBox.style.width=`${t}px`,this.rippleBox.style.height=`${t}px`,this.rippleBox.style.top=`${this.element.offsetHeight/2-t/2}px`,this.rippleBox.style.left=`${this.element.offsetWidth/2-t/2}px`,this.highlight?this.rippleBox.classList.add("highlighted"):this.rippleBox.classList.remove("highlighted");const s=()=>(clearTimeout(this.rippleTimer),this.rippleBox.classList.remove("rippling"),this.rippleBox.classList.remove("rippleIn"),this.rippleBox.classList.remove("rippleMiddle"),this.rippleBox.classList.remove("rippleOut"),this.rippleBox.classList.remove("rippleGrow"),e());this.rippleBox.classList.add("rippling"),this.rippleBox.classList.remove("rippleIn"),this.rippleBox.classList.remove("rippleMiddle"),this.rippleTimer=setTimeout(()=>{s()},300)})}render(){return e("div",{class:"nv-ripple",ref:e=>this.rippleBox=e})}static get is(){return"nv-ripple"}static get encapsulation(){return"shadow"}static get properties(){return{doRipple:{method:!0},element:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},startRipple:{method:!0},stopRipple:{method:!0}}}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/nv-ripple/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-nv-ripple{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-nv-ripple{opacity:1}nv-tabs[center=true].sc-nv-ripple{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-nv-ripple > *.sc-nv-ripple{opacity:0}nv-tabs.sc-nv-ripple > [nv-tab].sc-nv-ripple{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-nv-ripple   nv-wave.sc-nv-ripple, nv-tabs.sc-nv-ripple > [nv-tab][nv-tab-active=activating].sc-nv-ripple, nv-tabs.sc-nv-ripple > [nv-tab][nv-tab-active=true].sc-nv-ripple{opacity:1}nv-tabs.sc-nv-ripple > [nv-tab][nv-tab-active=true].sc-nv-ripple:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-nv-ripple   .active-indicator.sc-nv-ripple{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-nv-ripple   .active-indicator.nv-tabs-activating.sc-nv-ripple{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-nv-ripple{opacity:.3;pointer-events:none}.nv-component-disabled.sc-nv-ripple   *.sc-nv-ripple{pointer-events:none}.sc-nv-ripple-h{position:absolute;width:100%;height:100%;pointer-events:none;top:0;left:0}.nv-ripple.sc-nv-ripple{position:absolute;width:100%;height:100%;top:0;left:0;border-radius:50%;-webkit-box-shadow:0 0 0 6px rgba(255,255,255,.45);box-shadow:0 0 0 6px rgba(255,255,255,.45);background:rgba(255,255,255,.45);opacity:0;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:all .2s ease-out;transition:all .2s ease-out;pointer-events:none}.nv-ripple.highlighted.sc-nv-ripple{-webkit-box-shadow:0 0 0 6px #76b900;box-shadow:0 0 0 6px #76b900;background:#76b900}.nv-ripple.rippling.sc-nv-ripple{-webkit-transition:opacity .15s ease-out,-webkit-transform .4s ease-out;transition:opacity .15s ease-out,-webkit-transform .4s ease-out;transition:opacity .15s ease-out,transform .4s ease-out;transition:opacity .15s ease-out,transform .4s ease-out,-webkit-transform .4s ease-out}.nv-ripple.rippling.rippleIn.sc-nv-ripple{opacity:0;-webkit-transform:scale3d(.6,.6,.6);transform:scale3d(.6,.6,.6)}.nv-ripple.rippling.rippleMiddle.sc-nv-ripple{opacity:.32}.nv-ripple.rippling.rippleOut.sc-nv-ripple{opacity:.04}.nv-ripple.rippling.rippleGrow.sc-nv-ripple{-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}"}}export{t as NvPulse,s as NvRipple};