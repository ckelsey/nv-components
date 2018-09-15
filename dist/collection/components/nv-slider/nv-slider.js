/*
- nested
- keyboard
*/
/** @desc renders a styled slider component */
export class NvSlider {
    constructor() {
        this.mouseDownIndex = 1;
        /**
         * @desc Whether or not component can update active states. default is false as this should be handled by controller
         * @example true
         */
        this.selfUpdate = false;
        /** @desc value for the slider */
        this.value = undefined;
        /** @desc values for the slider, indicates a range slider */
        this.values = undefined;
        this.showInput = false;
        this.step = undefined;
        /** @desc max value for the slider */
        this.max = 1;
        /** @desc min value for the slider */
        this.min = 0;
        /** @desc text for the label */
        this.label = '';
        /** @desc whether or not the slider is disabled */
        this.disabled = false;
    }
    get _value() {
        if (isNaN(this.value)) {
            return this.min || 0;
        }
        return ((this.value - (this.min || 0)) / (this.max - (this.min || 0))) * 100;
    }
    get _values() {
        if (!this.values) {
            return undefined;
        }
        let values = this.values;
        if (typeof values === `string`) {
            try {
                values = JSON.parse(values);
            }
            catch (error) {
                return undefined;
            }
        }
        if (!Array.isArray(values)) {
            return undefined;
        }
        if (isNaN(values[0])) {
            values[0] = 0;
        }
        if (isNaN(values[1])) {
            values[1] = 0;
        }
        if (this.input1) {
            this.input1.value = values[0];
        }
        if (this.input2) {
            this.input2.value = values[1];
        }
        return values;
    }
    /** @desc determines the slider's tabIndex */
    get tabIndex() {
        if (this.disabled) {
            return -1;
        }
        return 0;
    }
    /** @desc handles hover state */
    mouseOverBox() {
        this.pulseBox2.startPulse();
        if (this.pulseBox1) {
            this.pulseBox1.startPulse();
        }
    }
    /** @desc handles hover leave state */
    mouseLeaveBox() {
        this.pulseBox2.stopPulse();
        if (this.pulseBox1) {
            this.pulseBox1.stopPulse();
        }
    }
    updateValue(value, index) {
        const min = this.min !== undefined ? this.min : 0;
        const step = this.step ? this.step : (this.max - min) / 100;
        const roundStep = (val) => {
            if (this.step) {
                val = Math.round(val / this.step) * this.step;
                const decimal = this.step.toString().split('.')[1];
                if (decimal) {
                    val = parseFloat(val.toFixed(decimal.length));
                }
            }
            return val;
        };
        if (this._values) {
            const values = this._values;
            if (!index) {
                if (value > values[1] - step) {
                    value = values[1] - step;
                }
                if (value < min) {
                    value = min;
                }
            }
            else {
                if (value > this.max) {
                    value = this.max;
                }
                if (value <= this._values[0] + step) {
                    value = this._values[0] + step;
                }
            }
            value = roundStep(value);
            values[index] = value;
            const updateData = {
                oldValue: this.values,
                newValue: values,
                element: this
            };
            if (typeof this.whenUpdate === `function`) {
                this.whenUpdate(updateData);
            }
            this.change.emit(updateData);
            if (this.selfUpdate) {
                this.values = values;
                this.update();
            }
            this.setSteps();
        }
        else {
            if (value > this.max) {
                value = this.max;
            }
            if (value < min) {
                value = min;
            }
            value = roundStep(value);
            const updateData = {
                oldValue: this.value,
                newValue: value,
                element: this
            };
            if (typeof this.whenUpdate === `function`) {
                this.whenUpdate(updateData);
            }
            this.change.emit(updateData);
            if (this.selfUpdate) {
                this.value = value;
            }
            this.setSteps();
        }
    }
    mouseMove(e) {
        const x = e.pageX - this.trackContainer.getBoundingClientRect().left;
        const percent = (x / this.trackContainer.getBoundingClientRect().width);
        const value = (percent * (this.max - (this.min || 0))) + (this.min || 0);
        this.updateValue(value, this.mouseDownIndex);
    }
    mouseDown(e) {
        document.body.style.userSelect = 'none';
        if (this._values) {
            const ballBox1 = this.ball1.getBoundingClientRect();
            const dist1 = Math.abs(e.pageX - (ballBox1.left + (ballBox1.width / 2)));
            const ballBox2 = this.ball2.getBoundingClientRect();
            const dist2 = Math.abs(e.pageX - (ballBox2.left + (ballBox2.width / 2)));
            if (dist1 < dist2) {
                this.mouseDownIndex = 0;
                this.rippleBox1.startRipple();
            }
            else {
                this.mouseDownIndex = 1;
                this.rippleBox2.startRipple();
            }
        }
        else {
            this.rippleBox2.startRipple();
            if (this.rippleBox1) {
                this.rippleBox1.startRipple();
            }
        }
        this.mouseMove(e);
        this.pulseBox2.stopPulse();
        if (this.pulseBox1) {
            this.pulseBox1.stopPulse();
        }
        window.document.addEventListener(`mousemove`, this.mouseMove);
        window.document.addEventListener(`mouseup`, this.mouseUp);
        window.document.addEventListener(`mouseleave`, this.mouseUp);
    }
    mouseUp() {
        document.body.style.removeProperty('user-select');
        window.document.removeEventListener(`mousemove`, this.mouseMove);
        window.document.removeEventListener(`mouseup`, this.mouseUp);
        window.document.removeEventListener(`mouseleave`, this.mouseUp);
        this.pulseBox2.stopPulse();
        if (this.pulseBox1) {
            this.pulseBox1.stopPulse();
        }
        this.rippleBox2.stopRipple();
        if (this.rippleBox1) {
            this.rippleBox1.stopRipple();
        }
    }
    inputUpdate(data, index) {
        if (this._values) {
            const value = parseFloat(data.newValue);
            return this.updateValue(value, index);
        }
        return this.updateValue(parseFloat(data.newValue), index);
    }
    setSteps() {
        if (this.step !== undefined) {
            const count = Math.round((this.max - (this.min || 0)) / this.step);
            const position = Math.round((this.value + (this.min || 0)) / this.step);
            let children = this.stepsElement.children;
            let c = 0;
            while (children.length > count) {
                this.stepsElement.removeChild(children[children.length - 1]);
            }
            while (children.length < count) {
                const tick = document.createElement(`div`);
                tick.className = `track-tick`;
                this.stepsElement.appendChild(tick);
                children = this.stepsElement.children;
            }
            while (c < count) {
                if (c < position) {
                    children[c].classList.add(`active`);
                }
                else {
                    children[c].classList.remove(`active`);
                }
                c = c + 1;
            }
        }
    }
    update() {
        if (this._values) {
            this.ball1.style.left = `${(this._values[0] / this.max) * 100}%`;
            this.ball2.style.left = `${(this._values[1] / this.max) * 100}%`;
            if (this.track) {
                this.track.style.width = `${((this._values[1] - this._values[0]) / this.max) * 100}%`;
                this.track.style.left = `${(this._values[0] / this.max) * 100}%`;
            }
        }
        else if (this.track) {
            this.track.style.width = `${this._value}%`;
            this.ball2.style.left = `${this._value}%`;
        }
        else {
            this.ball2.style.left = `${this._value}%`;
        }
        this.setSteps();
    }
    componentDidUpdate() {
        this.update();
    }
    componentDidLoad() {
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.update();
    }
    /** @desc renders the element */
    render() {
        return (h("div", { ref: (el) => this.container = el, class: { 'nv-slider-container': true, 'nv-component-disabled': this.disabled }, onMouseEnter: () => this.mouseOverBox(), onMouseLeave: () => this.mouseLeaveBox() },
            this.label ? h("label", { innerHTML: this.label }) : ``,
            this.showInput && this._values ?
                h("nv-input", { type: "number", classes: "small, transparent, center", style: { width: `48px` }, value: this._values[0], whenUpdate: (data) => this.inputUpdate(data, 0), whenFocus: () => this.rippleBox1.startRipple(), whenBlur: () => this.rippleBox1.stopRipple(), step: this.step ? this.step : this.max ? this.max / 100 : 0.1, max: this.max, min: this.min || 0, ref: (el) => this.input1 = el })
                :
                    ``,
            h("div", { class: "nv-slider-box", ref: (el) => this.trackContainer = el, onMouseDown: (e) => this.mouseDown(e) },
                this.step === undefined ?
                    h("div", { class: "nv-slider-track" },
                        h("div", { class: "nv-slider-track-inner", ref: (el) => this.track = el }))
                    :
                        h("div", { class: "nv-slider-track-steps", ref: (el) => this.stepsElement = el }),
                this._values ?
                    h("div", { class: "nv-slider-ball", ref: (el) => this.ball1 = el },
                        h("nv-pulse", { highlight: true, ref: (el) => this.pulseBox1 = el }),
                        h("nv-ripple", { highlight: true, ref: (el) => this.rippleBox1 = el }))
                    :
                        ``,
                h("div", { class: "nv-slider-ball", ref: (el) => this.ball2 = el },
                    h("nv-pulse", { highlight: true, ref: (el) => this.pulseBox2 = el }),
                    h("nv-ripple", { highlight: true, ref: (el) => this.rippleBox2 = el }))),
            this.showInput ?
                h("nv-input", { type: "number", classes: "small, transparent, center", style: { width: `48px` }, value: this._values ? this._values[1] : this.value, whenUpdate: (data) => this.inputUpdate(data, 1), whenFocus: () => this.rippleBox2.startRipple(), whenBlur: () => this.rippleBox2.stopRipple(), step: this.step ? this.step : this.max ? this.max / 100 : 0.1, max: this.max, min: this.min || 0, ref: (el) => this.input2 = el })
                :
                    ``));
    }
    static get is() { return "nv-slider"; }
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
        "max": {
            "type": Number,
            "attr": "max"
        },
        "min": {
            "type": Number,
            "attr": "min"
        },
        "selfUpdate": {
            "type": Boolean,
            "attr": "self-update"
        },
        "showInput": {
            "type": Boolean,
            "attr": "show-input"
        },
        "step": {
            "type": Number,
            "attr": "step"
        },
        "value": {
            "type": Number,
            "attr": "value",
            "mutable": true
        },
        "values": {
            "type": String,
            "attr": "values",
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
    static get style() { return "/**style-placeholder:nv-slider:**/"; }
}
