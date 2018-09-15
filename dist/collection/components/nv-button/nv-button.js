/**
 * @desc renders a styled button
 * @yield slot
 */
export class NvButton {
    constructor() {
        /** @desc The type of button, can be text, primary or undefined */
        this.type = undefined;
    }
    /** @desc triggers hover */
    doMouseEnter() {
        if (!this.button) {
            return;
        }
        this.button.classList.add('hover');
        this.whenmouseenter.emit({ element: this });
    }
    /** @desc triggers the loss of hover */
    doMouseLeave() {
        if (!this.button) {
            return;
        }
        this.doBlur();
        this.whenmouseleave.emit({ element: this });
    }
    /** @desc triggers click */
    doClick() {
        if (!this.button) {
            return;
        }
        this.button.classList.add('pressed');
        this.whenclick.emit({ element: this });
        this.doBlur();
    }
    /** @desc triggers focus */
    doFocus() {
        if (!this.button) {
            return;
        }
        this.button.classList.add('focus');
        this.whenfocus.emit({ element: this });
    }
    /** @desc triggers the loss of focus */
    doBlur() {
        if (!this.button) {
            return;
        }
        this.button.classList.remove('focus');
        this.button.classList.remove('pressed');
        this.button.classList.remove('hover');
        this.whenblur.emit({ element: this });
    }
    /** @desc triggers mousedown */
    doMouseDown() {
        if (!this.button) {
            return;
        }
        this.button.classList.add('pressed');
        this.whenmousedown.emit({ element: this });
    }
    /** @desc triggers mouseup */
    doMouseUp() {
        if (!this.button) {
            return;
        }
        this.doBlur();
        this.whenmouseup.emit({ element: this });
    }
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.button.classList.add(this.type || `btn`);
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.button.classList.add(this.type || `btn`);
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (h("button", { tabIndex: 0, onClick: () => this.doClick(), onMouseEnter: () => this.doMouseEnter(), onMouseLeave: () => this.doMouseLeave(), onMouseDown: () => this.doMouseDown(), onMouseUp: () => this.doMouseUp(), onFocus: () => this.doFocus(), onBlur: () => this.doBlur(), ref: (el) => this.button = el },
            h("slot", null),
            h("span", { class: "overlay" })));
    }
    static get is() { return "nv-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "doBlur": {
            "method": true
        },
        "doClick": {
            "method": true
        },
        "doFocus": {
            "method": true
        },
        "doMouseDown": {
            "method": true
        },
        "doMouseEnter": {
            "method": true
        },
        "doMouseLeave": {
            "method": true
        },
        "doMouseUp": {
            "method": true
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get events() { return [{
            "name": "whenfocus",
            "method": "whenfocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenblur",
            "method": "whenblur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenclick",
            "method": "whenclick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenmousedown",
            "method": "whenmousedown",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenmouseup",
            "method": "whenmouseup",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenmouseenter",
            "method": "whenmouseenter",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenmouseleave",
            "method": "whenmouseleave",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nv-button:**/"; }
}
