/** @desc renders a styled checkbox component */
export class NvCheckbox {
    constructor() {
        /**
         * @desc Whether or not component can update active states. default is false as this should be handled by controller
         * @example true
         */
        this.selfUpdate = false;
        /** @desc value for the checkbox */
        this.value = true;
        /** @desc text for the label */
        this.label = '';
        /** @desc whether or not the checkbox is disabled */
        this.disabled = false;
        /** @desc if part of a checkbox array, whether or not the parent checkbox is disabled */
        this.parentDisabled = false;
    }
    /** @desc determines the checkbox's state */
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
    /** @desc determines the checkbox's tabIndex */
    get tabIndex() {
        if (this.disabled || this.parentDisabled) {
            return -1;
        }
        return 0;
    }
    /** @desc toggles the checkbox's state */
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
        this.whenupdate.emit(updateData);
        this.onClick();
        if (this.selfUpdate) {
            this.value = newValue;
        }
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
        return (h("div", { ref: (el) => this.container = el, class: { 'nv-checkbox-container': true, selected: !!this.value && this.value !== `false`, 'nv-component-disabled': this.disabled || this.parentDisabled }, onClick: () => this.toggle(), onKeyPress: ev => this.keyPress(ev) },
            h("div", { class: "nv-checkbox-box", onMouseEnter: () => this.mouseOverBox(), onMouseLeave: () => this.mouseLeaveBox() },
                h("nv-pulse", { highlight: this.value === true || this.value === `true`, ref: (el) => this.pulseBox = el }),
                h("nv-ripple", { highlight: this.value === true || this.value === `true`, ref: (el) => this.rippleBox = el }),
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
            "name": "whenupdate",
            "method": "whenupdate",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nv-checkbox:**/"; }
}
