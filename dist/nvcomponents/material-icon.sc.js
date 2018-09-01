/*! Built with http://stenciljs.com */
const { h } = window.nvcomponents;

class MaterialIcon {
    get svgIcon() {
        return this.getIcon(this.type) || ``;
    }
    get styles() {
        return {
            color: this.color || `inherit`,
            height: this.size || `24px`,
            width: this.size || `24px`
        };
    }
    render() {
        return (h("span", { class: "material-icon", innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">${this.svgIcon}</svg>`, style: this.styles }));
    }
    iconsToJson() {
        console.log(JSON.stringify(this.icons()));
    }
    findDupes() {
        var keys = Object.keys(this.icons());
        var vals = {};
        var dupes = {};
        keys.forEach(key => {
            if (vals[this.icons()[key]]) {
                if (!dupes[this.icons()[key]]) {
                    dupes[this.icons()[key]] = [];
                }
                dupes[this.icons()[key]].push(key);
            }
            vals[this.icons()[key]] = true;
        });
        console.log(dupes);
    }
    getIcon(key) {
        switch (key) {
            case 'schedule':
            case 'query_builder':
                return this.icons()['access_time'];
            case 'queue':
            case 'library_add':
                return this.icons()['add_to_photos'];
            case 'flight':
            case 'local_airport':
                return this.icons()['airplanemode_active'];
            case 'insert_chart':
                return this.icons()['assessment'];
            case 'flag':
                return this.icons()['assistant_photo'];
            case 'music_note':
                return this.icons()['audiotrack'];
            case 'cloud_upload':
                return this.icons()['backup'];
            case 'stay_current_landscape':
                return this.icons()['stay_primary_landscape'];
            case 'warning':
                return this.icons()['report_problem'];
            case 'create':
                return this.icons()['edit'];
            case 'phonelink':
                return this.icons()['devices'];
            case 'settings_input_composite':
                return this.icons()['settings_input_component'];
            case 'local_hotel':
                return this.icons()['hotel'];
            case 'local_dining':
                return this.icons()['restaurant_menu'];
            case 'mood':
                return this.icons()['insert_emoticon'];
            case 'directions_subway':
                return this.icons()['directions_transit'];
            case 'place':
            case 'room':
                return this.icons()['location_on'];
            case 'landscape':
            case 'terrain':
                return this.icons()['filter_hdr'];
            case 'palette':
                return this.icons()['color_lens'];
            case 'sync':
                return this.icons()['loop'];
            case 'my_location':
                return this.icons()['gps_fixed'];
            case 'star':
                return this.icons()['grade'];
            case 'bluetooth_searching':
                return this.icons()['bluetooth_audio'];
            case 'people':
                return this.icons()['group'];
            case 'battery_std':
                return this.icons()['battery_full'];
            case 'merge_type':
                return this.icons()['call_merge'];
            case 'theaters':
                return this.icons()['local_movies'];
            case 'movie_creation':
                return this.icons()['movie'];
            case 'turned_in':
                return this.icons()['bookmark'];
            case 'close':
                return this.icons()['clear'];
            case 'open_in_new':
                return this.icons()['launch'];
            case 'class':
                return this.icons()['book'];
            case 'sd_storage':
                return this.icons()['sd_card'];
            case 'store':
                return this.icons()['store_mall_directory'];
            case 'brightness_high':
                return this.icons()['brightness_7'];
            case 'lock':
                return this.icons()['https'];
            case 'local_play':
                return this.icons()['local_activity'];
            case 'brightness_medium':
                return this.icons()['brightness_6'];
            case 'brightness_low':
                return this.icons()['brightness_5'];
            case 'laptop':
                return this.icons()['computer'];
            case 'location_searching':
                return this.icons()['gps_not_fixed'];
            case 'crop_landscape':
                return this.icons()['crop_5_4'];
            case 'local_phone':
            case 'phone':
                return this.icons()['call'];
            case 'insert_photo':
            case 'photo':
                return this.icons()['image'];
            case 'mail':
            case 'markunread':
                return this.icons()['email'];
            case 'question_answer':
                return this.icons()['forum'];
            case 'photo_library':
                return this.icons()['collections'];
            case 'tv':
                return this.icons()['personal_video'];
            case 'signal_cellular_3_bar':
                return this.icons()['network_cell'];
            case 'thumb_up_alt':
                return this.icons()['thumbs_up'];
            default:
                return this.icons()[key];
        }
    }
    icons() {
        return this.iconJSON;
    }
    static get is() { return "material-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "findDupes": {
            "method": true
        },
        "getIcon": {
            "method": true
        },
        "iconJSON": {
            "context": "iconJSON"
        },
        "icons": {
            "method": true
        },
        "iconsToJson": {
            "method": true
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled.sc-material-icon {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled.sc-material-icon   *.sc-material-icon {\n    pointer-events: none; }\n\n.sc-material-icon-h {\n  line-height: 0px;\n  display: inline-block; }\n\n.material-icon.sc-material-icon {\n  display: inline-block; }\n  .material-icon.sc-material-icon   svg.sc-material-icon {\n    width: 100%;\n    height: 100%;\n    fill: currentColor; }\n"; }
}

class NvCheckbox {
    get state() {
        switch (this.value) {
            case `mixed`:
                return `indeterminate_check_box`;
            case true:
            case `true`:
                return `check_box`;
            case false:
            case `false`:
                return `check_box_outline_blank`;
        }
    }
    get tabIndex() {
        if (this.disabled || this.parentDisabled) {
            return -1;
        }
        return 0;
    }
    toggle() {
        if (this.disabled || this.parentDisabled) {
            return false;
        }
        const oldValue = this.value;
        const newValue = this.value === `mixed` ? true : this.value === `false` ? true : this.value === `true` ? false : !this.value;
        const updateData = { oldValue, newValue, element: this };
        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData);
        }
        this.change.emit(updateData);
        this.onClick();
    }
    keyPress(e) {
        if (e.key === `Enter`) {
            e.preventDefault();
            this.toggle();
        }
    }
    mouseOverBox() {
        this.hoverBox.classList.add(`pulseIn`);
        this.hoverBox.classList.add(`pulseOut`);
        this.pulseTimer = setInterval(() => {
            this.hoverBox.classList.toggle(`pulseOut`);
        }, 1200);
    }
    onClick() {
        const cleanUp = () => {
            clearTimeout(this.rippleTimer);
            this.rippleBox.classList.remove(`rippling`);
            this.rippleBox.classList.remove(`rippleIn`);
            this.rippleBox.classList.remove(`rippleMiddle`);
            this.rippleBox.classList.remove(`rippleOut`);
            this.rippleBox.classList.remove(`rippleGrow`);
        };
        if (!this.container.querySelector(`input:focus`)) {
            clearInterval(this.pulseTimer);
            this.hoverBox.classList.remove(`pulseIn`);
            this.hoverBox.classList.remove(`pulseOut`);
        }
        this.rippleBox.classList.add(`rippling`);
        this.rippleBox.classList.add(`rippleIn`);
        this.rippleTimer = setTimeout(() => {
            this.rippleBox.classList.add(`rippleGrow`);
            this.rippleBox.classList.add(`rippleMiddle`);
            this.rippleBox.classList.remove(`rippleIn`);
            this.rippleTimer = setTimeout(() => {
                this.rippleBox.classList.add(`rippleOut`);
                this.rippleBox.classList.remove(`rippleMiddle`);
                this.rippleTimer = setTimeout(() => {
                    this.rippleBox.classList.remove(`rippling`);
                    this.rippleBox.classList.remove(`rippleOut`);
                    cleanUp();
                }, 300);
            }, 200);
        }, 10);
    }
    mouseLeaveBox() {
        clearInterval(this.pulseTimer);
        this.hoverBox.classList.remove(`pulseIn`);
        this.hoverBox.classList.remove(`pulseOut`);
    }
    render() {
        return (h("div", { ref: (el) => this.container = el, class: { 'nv-checkbox-container': true, selected: !!this.value && this.value !== `false`, 'nv-component-disabled': this.disabled || this.parentDisabled }, onClick: () => this.toggle(), onKeyPress: ev => this.keyPress(ev) },
            h("div", { class: "nv-checkbox-box", onMouseEnter: () => this.mouseOverBox(), onMouseLeave: () => this.mouseLeaveBox() },
                h("div", { class: "nv-checkbox-box-hover", ref: (el) => this.hoverBox = el }),
                h("div", { class: "nv-checkbox-box-ripple", ref: (el) => this.rippleBox = el }),
                h("material-icon", { type: this.state })),
            h("label", { innerHTML: this.label }),
            h("input", { class: "nv-checkbox-checkbox-native", ref: (el) => this.nativeCheckbox = el, tabindex: this.tabIndex, type: "checkbox", name: this.label, value: this.label, onFocus: () => this.mouseOverBox(), onBlur: () => this.mouseLeaveBox() })));
    }
    static get is() { return "nv-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "parentDisabled": {
            "type": Boolean,
            "attr": "parent-disabled"
        },
        "toggle": {
            "method": true
        },
        "value": {
            "type": "Any",
            "attr": "value"
        },
        "whenUpdate": {
            "type": "Any",
            "attr": "when-update"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled.sc-nv-checkbox {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled.sc-nv-checkbox   *.sc-nv-checkbox {\n    pointer-events: none; }\n\n.sc-nv-checkbox-h {\n  width: auto;\n  height: auto;\n  display: inline-block; }\n\n.nv-checkbox-container.sc-nv-checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 7px 0px;\n  outline: none !important;\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  line-height: 1.4em;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer; }\n  .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    position: relative;\n    color: rgba(255, 255, 255, 0.75); }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-hover.sc-nv-checkbox, .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-ripple.sc-nv-checkbox {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0px;\n      left: 0px;\n      border-radius: 50%;\n      -webkit-box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.45);\n      box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.45);\n      background: rgba(255, 255, 255, 0.45);\n      opacity: 0;\n      -webkit-transform: scale3d(0, 0, 0);\n      transform: scale3d(0, 0, 0);\n      -webkit-transition: all 0.2s ease-out;\n      transition: all 0.2s ease-out;\n      pointer-events: none; }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-hover.pulseIn.sc-nv-checkbox {\n      opacity: 0.16;\n      -webkit-transform: scale3d(0.9, 0.9, 0.9);\n      transform: scale3d(0.9, 0.9, 0.9);\n      -webkit-transition: all 1s ease-out;\n      transition: all 1s ease-out; }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-hover.pulseOut.sc-nv-checkbox {\n      opacity: 0.08;\n      -webkit-transform: scale3d(1.1, 1.1, 1.1);\n      transform: scale3d(1.1, 1.1, 1.1); }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-ripple.rippling.sc-nv-checkbox {\n      -webkit-transition: opacity 0.15s ease-out, -webkit-transform 0.4s ease-out;\n      transition: opacity 0.15s ease-out, -webkit-transform 0.4s ease-out;\n      transition: opacity 0.15s ease-out, transform 0.4s ease-out;\n      transition: opacity 0.15s ease-out, transform 0.4s ease-out, -webkit-transform 0.4s ease-out; }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-ripple.rippling.rippleIn.sc-nv-checkbox {\n      opacity: 0;\n      -webkit-transform: scale3d(0.6, 0.6, 0.6);\n      transform: scale3d(0.6, 0.6, 0.6); }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-ripple.rippling.rippleMiddle.sc-nv-checkbox {\n      opacity: 0.32; }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-ripple.rippling.rippleOut.sc-nv-checkbox {\n      opacity: 0.04; }\n    .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-ripple.rippling.rippleGrow.sc-nv-checkbox {\n      -webkit-transform: scale3d(1.2, 1.2, 1.2);\n      transform: scale3d(1.2, 1.2, 1.2); }\n  .nv-checkbox-container.selected.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox {\n    color: #76b900; }\n    .nv-checkbox-container.selected.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox   .nv-checkbox-box-hover.sc-nv-checkbox {\n      -webkit-box-shadow: 0px 0px 0px 6px #76b900;\n      box-shadow: 0px 0px 0px 6px #76b900;\n      background: #76b900; }\n  .nv-checkbox-container.selected.nv-component-disabled.sc-nv-checkbox   .nv-checkbox-box.sc-nv-checkbox {\n    color: rgba(255, 255, 255, 0.75); }\n  .nv-checkbox-container.sc-nv-checkbox   label.sc-nv-checkbox {\n    padding: 0px 32px;\n    cursor: pointer; }\n  .nv-checkbox-container.sc-nv-checkbox   .nv-checkbox-checkbox-native.sc-nv-checkbox {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    margin: 0px; }\n"; }
}

class NvCheckboxArray {
    constructor() {
        this.lastToggleState = false;
    }
    get isDisabled() {
        return this.parentDisabled || this.disabled;
    }
    get groupState() {
        const getValues = (arr) => {
            let _isTrue = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].values) {
                    _isTrue.push(getValues(arr[i].values));
                }
                else {
                    _isTrue.push(arr[i].value);
                }
            }
            const hasFalse = _isTrue.indexOf(false) > -1;
            const hasTrue = _isTrue.indexOf(true) > -1;
            const hasMixed = _isTrue.indexOf(`mixed`) > -1;
            if (hasMixed) {
                return `mixed`;
            }
            return hasTrue && !hasFalse ? true : !hasTrue && hasFalse ? false : `mixed`;
        };
        if (!Array.isArray(this.values)) {
            return false;
        }
        return getValues(this.values);
    }
    setGroupState(val, arr) {
        return arr.map(element => {
            if (element.disabled || element.parentDisabled) {
                return element;
            }
            if (element.values) {
                element.values = this.setGroupState(val, element.values);
            }
            else {
                element.value = val;
            }
            return element;
        });
    }
    updateParent() {
        const state = this.groupState;
        const oldValue = this.values;
        let newValue;
        this.lastToggleState = !this.lastToggleState;
        if (state === true) {
            newValue = this.setGroupState(false, this.values);
        }
        else if (state === `mixed`) {
            newValue = this.setGroupState(this.lastToggleState, this.values);
        }
        else {
            newValue = this.setGroupState(true, this.values);
        }
        const updateData = { oldValue, newValue, element: this };
        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData);
        }
        this.change.emit(updateData);
    }
    updateChild(data) {
        const el = data.element.element;
        const oldValue = this.values;
        let newValue = JSON.parse(JSON.stringify(this.values));
        var parent = el.parentNode.parentNode;
        var index = Array.prototype.indexOf.call(parent.children, el.parentNode);
        if (newValue[index].values) {
            newValue[index].values = data.newValue;
        }
        else {
            newValue[index].value = data.newValue;
        }
        const updateData = { oldValue, newValue, element: this };
        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData);
        }
        this.change.emit(updateData);
    }
    componentDidLoad() {
        this.lastToggleState = !!this.groupState;
    }
    render() {
        if (!this.values) {
            return (h("div", null));
        }
        return (h("div", { class: "nv-checkbox-array" },
            h("div", { class: "nv-checkbox-array-container" },
                h("div", { class: "nv-checkbox-array-parent" },
                    h("nv-checkbox", { class: "nv-checkbox-array-parent-checkbox", label: this.label, value: this.groupState, disabled: this.isDisabled, whenUpdate: this.updateParent.bind(this) })),
                h("div", { class: "nv-checkbox-array-children" }, this.values.map((checkbox) => h("div", null, !checkbox.values ?
                    h("nv-checkbox", { label: checkbox.label, value: checkbox.value, disabled: this.isDisabled || checkbox.disabled, whenUpdate: this.updateChild.bind(this) })
                    :
                        h("nv-checkbox-array", { label: checkbox.label, values: checkbox.values, disabled: this.isDisabled || checkbox.disabled, whenUpdate: this.updateChild.bind(this) })))))));
    }
    static get is() { return "nv-checkbox-array"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "parentDisabled": {
            "type": Boolean,
            "attr": "parent-disabled"
        },
        "values": {
            "type": "Any",
            "attr": "values"
        },
        "whenUpdate": {
            "type": "Any",
            "attr": "when-update"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled.sc-nv-checkbox-array {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled.sc-nv-checkbox-array   *.sc-nv-checkbox-array {\n    pointer-events: none; }\n\n.sc-nv-checkbox-array-h {\n  width: auto;\n  height: auto;\n  display: inline-block; }\n\n.nv-checkbox-array.sc-nv-checkbox-array   .nv-checkbox-array-children.sc-nv-checkbox-array {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 53px; }\n"; }
}

export { MaterialIcon, NvCheckbox, NvCheckboxArray };
