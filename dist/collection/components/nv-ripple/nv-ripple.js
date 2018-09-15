/** @desc renders a ripple effect component */
export class NvRipple {
    constructor() {
        this.highlight = false;
    }
    doRipple() {
        if (!this.rippleBox) {
            return;
        }
        return this.startRipple()
            .then(() => {
            return this.stopRipple();
        });
    }
    startRipple() {
        if (!this.rippleBox) {
            return;
        }
        clearTimeout(this.rippleTimer);
        return new Promise((resolve) => {
            const dimension = Math.min(this.element.offsetWidth, this.element.offsetHeight);
            this.rippleBox.style.width = `${dimension}px`;
            this.rippleBox.style.height = `${dimension}px`;
            this.rippleBox.style.top = `${(this.element.offsetHeight / 2) - (dimension / 2)}px`;
            this.rippleBox.style.left = `${(this.element.offsetWidth / 2) - (dimension / 2)}px`;
            if (this.highlight) {
                this.rippleBox.classList.add(`highlighted`);
            }
            else {
                this.rippleBox.classList.remove(`highlighted`);
            }
            this.rippleBox.classList.add(`rippling`);
            this.rippleBox.classList.add(`rippleIn`);
            this.rippleTimer = setTimeout(() => {
                this.rippleBox.classList.add(`rippleGrow`);
                this.rippleBox.classList.add(`rippleMiddle`);
                this.rippleBox.classList.remove(`rippleIn`);
                setTimeout(() => {
                    return resolve();
                }, 200);
            }, 10);
        });
    }
    stopRipple() {
        if (!this.rippleBox) {
            return;
        }
        clearTimeout(this.rippleTimer);
        return new Promise((resolve) => {
            const dimension = Math.min(this.element.offsetWidth, this.element.offsetHeight);
            this.rippleBox.style.width = `${dimension}px`;
            this.rippleBox.style.height = `${dimension}px`;
            this.rippleBox.style.top = `${(this.element.offsetHeight / 2) - (dimension / 2)}px`;
            this.rippleBox.style.left = `${(this.element.offsetWidth / 2) - (dimension / 2)}px`;
            if (this.highlight) {
                this.rippleBox.classList.add(`highlighted`);
            }
            else {
                this.rippleBox.classList.remove(`highlighted`);
            }
            const cleanUp = () => {
                clearTimeout(this.rippleTimer);
                this.rippleBox.classList.remove(`rippling`);
                this.rippleBox.classList.remove(`rippleIn`);
                this.rippleBox.classList.remove(`rippleMiddle`);
                this.rippleBox.classList.remove(`rippleOut`);
                this.rippleBox.classList.remove(`rippleGrow`);
                return resolve();
            };
            this.rippleBox.classList.add(`rippling`);
            this.rippleBox.classList.remove(`rippleIn`);
            this.rippleBox.classList.remove(`rippleMiddle`);
            this.rippleTimer = setTimeout(() => {
                cleanUp();
            }, 300);
        });
    }
    /** @desc renders the element */
    render() {
        return (h("div", { class: "nv-ripple", ref: (el) => this.rippleBox = el }));
    }
    static get is() { return "nv-ripple"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "doRipple": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "startRipple": {
            "method": true
        },
        "stopRipple": {
            "method": true
        }
    }; }
    static get style() { return "/**style-placeholder:nv-ripple:**/"; }
}
