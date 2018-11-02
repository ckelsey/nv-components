/*! Built with http://stenciljs.com */
const{h:t}=window.nvcomponents;var s=function(t,s,e,i){return new(e||(e=Promise))(function(n,r){function c(t){try{a(i.next(t))}catch(t){r(t)}}function o(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){t.done?n(t.value):new e(function(s){s(t.value)}).then(c,o)}a((i=i.apply(t,s||[])).next())})};class e{constructor(){this.type="close",this.color="inherit",this.size="24px"}get svgIcon(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">${this.getIcon(this.type)||""}</svg>`}get styles(){return{color:this.color||"inherit",height:this.size||"24px",width:this.size||"24px"}}render(){return t("span",{class:"material-icon",innerHTML:this.svgIcon,style:this.styles})}getIcon(t){return s(this,void 0,void 0,function*(){switch(t){case"schedule":case"query_builder":return this.icons().access_time;case"queue":case"library_add":return this.icons().add_to_photos;case"flight":case"local_airport":return this.icons().airplanemode_active;case"insert_chart":return this.icons().assessment;case"flag":return this.icons().assistant_photo;case"music_note":return this.icons().audiotrack;case"cloud_upload":return this.icons().backup;case"stay_current_landscape":return this.icons().stay_primary_landscape;case"warning":return this.icons().report_problem;case"create":return this.icons().edit;case"phonelink":return this.icons().devices;case"settings_input_composite":return this.icons().settings_input_component;case"local_hotel":return this.icons().hotel;case"local_dining":return this.icons().restaurant_menu;case"mood":return this.icons().insert_emoticon;case"directions_subway":return this.icons().directions_transit;case"place":case"room":return this.icons().location_on;case"landscape":case"terrain":return this.icons().filter_hdr;case"palette":return this.icons().color_lens;case"sync":return this.icons().loop;case"my_location":return this.icons().gps_fixed;case"star":return this.icons().grade;case"bluetooth_searching":return this.icons().bluetooth_audio;case"people":return this.icons().group;case"battery_std":return this.icons().battery_full;case"merge_type":return this.icons().call_merge;case"theaters":return this.icons().local_movies;case"movie_creation":return this.icons().movie;case"turned_in":return this.icons().bookmark;case"close":return this.icons().clear;case"open_in_new":return this.icons().launch;case"class":return this.icons().book;case"sd_storage":return this.icons().sd_card;case"store":return this.icons().store_mall_directory;case"brightness_high":return this.icons().brightness_7;case"lock":return this.icons().https;case"local_play":return this.icons().local_activity;case"brightness_medium":return this.icons().brightness_6;case"brightness_low":return this.icons().brightness_5;case"laptop":return this.icons().computer;case"location_searching":return this.icons().gps_not_fixed;case"crop_landscape":return this.icons().crop_5_4;case"local_phone":case"phone":return this.icons().call;case"insert_photo":case"photo":return this.icons().image;case"mail":case"markunread":return this.icons().email;case"question_answer":return this.icons().forum;case"photo_library":return this.icons().collections;case"tv":return this.icons().personal_video;case"signal_cellular_3_bar":return this.icons().network_cell;case"thumb_up_alt":return this.icons().thumbs_up;default:return this.icons()[t]}})}icons(){return s(this,void 0,void 0,function*(){return this.iconJSON})}static get is(){return"material-icon"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},getIcon:{method:!0},iconJSON:{context:"iconJSON"},icons:{method:!0},size:{type:String,attr:"size"},type:{type:String,attr:"type"}}}static get style(){return"\@font-face{font-family:Roboto;src:url(src/components/material-icon/assets/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:100;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/material-icon/assets/fonts/Roboto-LightItalic.ttf) format(\"truetype\");font-weight:100;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/material-icon/assets/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/material-icon/assets/fonts/Roboto-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}\@font-face{font-family:Roboto;src:url(src/components/material-icon/assets/fonts/Roboto-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Roboto;src:url(src/components/material-icon/assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}nv-tabs.sc-material-icon{position:relative;width:100%;height:auto;outline:0!important;font-size:14px;font-family:Roboto,sans-serif;font-weight:400;line-height:24px;color:rgba(255,255,255,.75);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}nv-tabs.ready.sc-material-icon{opacity:1}nv-tabs[center=true].sc-material-icon{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nv-tabs.sc-material-icon > *.sc-material-icon{opacity:0}nv-tabs.sc-material-icon > [nv-tab].sc-material-icon{position:relative;cursor:pointer;padding:12px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.625;outline:0!important;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;line-height:2em;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}nv-tabs.sc-material-icon   nv-wave.sc-material-icon, nv-tabs.sc-material-icon > [nv-tab][nv-tab-active=activating].sc-material-icon, nv-tabs.sc-material-icon > [nv-tab][nv-tab-active=true].sc-material-icon{opacity:1}nv-tabs.sc-material-icon > [nv-tab][nv-tab-active=true].sc-material-icon:after{content:\"\";position:absolute;height:2px;background:#76b900;width:100%;pointer-events:none;bottom:0}nv-tabs.sc-material-icon   .active-indicator.sc-material-icon{position:absolute;height:2px;background:#76b900;width:0%;pointer-events:none;bottom:0;-webkit-transition:left .2s ease-in-out,width .3s ease-in-out;transition:left .2s ease-in-out,width .3s ease-in-out;opacity:0}nv-tabs.sc-material-icon   .active-indicator.nv-tabs-activating.sc-material-icon{opacity:1}\@-webkit-keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@keyframes fadeInOut{0%,100%{opacity:0}40%{opacity:.5}60%{opacity:.8}}\@-webkit-keyframes fade{from{opacity:.24}}\@keyframes fade{from{opacity:.24}}\@-webkit-keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@keyframes pulsing{from{opacity:.05;-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}}\@-webkit-keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@keyframes pulsingLight{to{opacity:.2;-webkit-transform:scale3d(1.2,1.2,1.2);transform:scale3d(1.2,1.2,1.2)}}\@-webkit-keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}\@keyframes pulsingLighter{from{opacity:.1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.nv-component-disabled.sc-material-icon{opacity:.3;pointer-events:none}.nv-component-disabled.sc-material-icon   *.sc-material-icon{pointer-events:none}.sc-material-icon-h{line-height:0;display:inline-block}.material-icon.sc-material-icon{display:inline-block}.material-icon.sc-material-icon   svg.sc-material-icon{width:100%;height:100%;fill:currentColor}"}}export{e as MaterialIcon};