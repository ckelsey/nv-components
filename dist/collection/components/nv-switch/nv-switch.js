var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @desc renders a styled switch component */
export class NvSwitch {
    constructor() {
        /**
         * @desc Whether or not component can update active states. default is false as this should be handled by controller
         * @example true
         */
        this.selfUpdate = false;
        /** @desc value for the switch */
        this.value = true;
        /** @desc text for the label */
        this.label = '';
        /** @desc whether or not the switch is disabled */
        this.disabled = false;
    }
    /** @desc determines the switch's tabIndex */
    get tabIndex() {
        if (this.disabled) {
            return -1;
        }
        return 0;
    }
    /** @desc toggles the switch's state */
    toggle() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.disabled) {
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
            if (this.selfUpdate) {
                this.value = newValue;
            }
        });
    }
    /**
     * @desc handles the enter key press
     * @param e keyboard event
     */
    keyPress(e) {
        if (e.key === `Enter`) {
            e.preventDefault();
            this.toggle();
        }
    }
    /** @desc handles hover state */
    mouseOverBox() {
        this.pulseBox.startPulse();
    }
    /** @desc handles hover leave state */
    mouseLeaveBox() {
        this.pulseBox.stopPulse();
    }
    /** @desc handles click and updates state */
    onClick() {
        if (!this.container.querySelector(`input:focus`)) {
            this.pulseBox.stopPulse();
        }
        this.rippleBox.doRipple();
    }
    /** @desc renders the element */
    render() {
        return (h("div", { ref: (el) => this.container = el, class: { 'nv-switch-container': true, selected: !!this.value && this.value !== `false`, 'nv-component-disabled': this.disabled }, onClick: () => this.toggle(), onKeyPress: ev => this.keyPress(ev) },
            this.label ? h("label", { innerHTML: this.label }) : ``,
            h("div", { class: "nv-switch-box", onMouseEnter: () => this.mouseOverBox(), onMouseLeave: () => this.mouseLeaveBox() },
                h("div", { class: "nv-switch-track" }),
                h("div", { class: "nv-switch-ball" },
                    h("nv-pulse", { highlight: this.value === true || this.value === `true`, ref: (el) => this.pulseBox = el }),
                    h("nv-ripple", { highlight: this.value === false || this.value === `false`, ref: (el) => this.rippleBox = el }))),
            h("input", { class: "nv-switch-switch-native", ref: (el) => this.nativeswitch = el, tabindex: this.tabIndex, type: "checkbox", name: this.label, value: this.label, onFocus: () => this.mouseOverBox(), onBlur: () => this.mouseLeaveBox() })));
    }
    static get is() { return "nv-switch"; }
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
        "selfUpdate": {
            "type": Boolean,
            "attr": "self-update"
        },
        "toggle": {
            "method": true
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "mutable": true
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
    static get style() { return "/**style-placeholder:nv-switch:**/"; }
}
