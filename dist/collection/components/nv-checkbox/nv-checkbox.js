export class NvCheckbox {
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
    static get style() { return "/**style-placeholder:nv-checkbox:**/"; }
}
