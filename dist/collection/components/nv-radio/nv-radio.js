/** @desc renders a styled radio button component */
export class NvRadio {
    constructor() {
        this._options = [];
        /**
         * @desc Whether or not component can update active states. default is false as this should be handled by controller
         * @example true
         */
        this.selfUpdate = false;
        /**
         * @example [{"value":1, "label": "option 1", "selected":false}, {"value":2, "label": "option 2", "selected":true}, {"value":3, "label": "option 3", "selected":false}]
         */
        this.options = [];
        /** @desc whether or not the component is disabled */
        this.disabled = false;
    }
    /** @desc determines the component's tabIndex */
    get tabIndex() {
        if (this.disabled) {
            return -1;
        }
        return 0;
    }
    createOption(option) {
        const optionContainer = document.createElement(`div`);
        optionContainer.className = `nv-radio-option`;
        if (option.disabled || this.disabled) {
            optionContainer.classList.add(`nv-component-disabled`);
        }
        if (option.selected) {
            optionContainer.classList.add(`selected`);
        }
        option.input = document.createElement(`input`);
        option.input.type = `radio`;
        option.input.tabIndex = this.tabIndex;
        optionContainer.appendChild(option.input);
        const effects = document.createElement(`div`);
        effects.className = 'effects-container';
        optionContainer.appendChild(effects);
        option.pulse = document.createElement(`nv-pulse`);
        option.pulse.highlight = !!option.selected;
        effects.appendChild(option.pulse);
        option.ripple = document.createElement(`nv-ripple`);
        option.ripple.highlight = !!option.selected;
        effects.appendChild(option.ripple);
        option.icon = document.createElement(`material-icon`);
        option.icon.type = option.selected ? `radio_button_checked` : `radio_button_unchecked`;
        option.icon.size = `20px`;
        option.icon.color = `inherit`;
        effects.appendChild(option.icon);
        option.labelElement = document.createElement(`label`);
        option.labelElement.innerHTML = option.label;
        optionContainer.appendChild(option.labelElement);
        option.input.addEventListener(`focus`, () => {
            option.pulse.startPulse();
        });
        option.input.addEventListener(`keypress`, (e) => {
            if (e.key === `Enter`) {
                e.preventDefault();
                this.onClick(option);
            }
        });
        option.input.addEventListener(`blur`, () => {
            option.pulse.stopPulse();
        });
        optionContainer.addEventListener(`mouseenter`, () => {
            option.pulse.startPulse();
        });
        optionContainer.addEventListener(`mouseleave`, () => {
            option.pulse.stopPulse();
        });
        optionContainer.addEventListener(`click`, () => {
            this.onClick(option);
        });
        this.container.appendChild(optionContainer);
        return option;
    }
    createOptions() {
        let _options = this.options;
        let optionElements = this.container.children;
        if (typeof _options === `string`) {
            try {
                _options = JSON.parse(_options);
            }
            catch (error) {
                return;
            }
        }
        if (!Array.isArray(_options)) {
            return;
        }
        while (optionElements.length > _options.length) {
            this.container.removeChild(optionElements[optionElements.length - 1]);
        }
        while (this._options.length > _options.length) {
            this._options.pop();
        }
        _options.forEach((option, index) => {
            if (!this._options[index]) {
                this._options[index] = option;
            }
            else {
                this._options[index].value = option.value;
                this._options[index].label = option.label;
                this._options[index].selected = option.selected === true;
            }
            if (optionElements[index]) {
                if (this._options[index].disabled || this.disabled) {
                    optionElements[index].classList.add(`nv-component-disabled`);
                }
                else {
                    optionElements[index].classList.remove(`nv-component-disabled`);
                }
                if (this._options[index].selected) {
                    optionElements[index].classList.add(`selected`);
                }
                else {
                    optionElements[index].classList.remove(`selected`);
                }
                this._options[index].icon.type = this._options[index].selected ? `radio_button_checked` : `radio_button_unchecked`;
                this._options[index].input.tabIndex = this.tabIndex;
                this._options[index].pulse.highlight = !!option.selected;
                this._options[index].ripple.highlight = option.selected;
                this._options[index].labelElement.innerHTML = this._options[index].label;
            }
            else {
                const o = this.createOption(this._options[index]);
                this._options[index].input = o.input;
                this._options[index].labelElement = o.labelElement;
                this._options[index].pulse = o.pulse;
                this._options[index].ripple = o.ripple;
                this._options[index].icon = o.icon;
                optionElements = this.container.children;
            }
        });
    }
    /** @desc handles click and updates state */
    onClick(option) {
        if (!this.container.querySelector(`input:focus`)) {
            option.pulse.stopPulse();
        }
        option.ripple.doRipple();
        if (!option.selected) {
            let options = JSON.parse(JSON.stringify(this._options)).map((o) => {
                if (o.value === option.value) {
                    o.selected = true;
                }
                else {
                    o.selected = false;
                }
                return o;
            });
            const updateData = { oldValue: this.options, newValue: options, element: this };
            if (this.whenUpdate && typeof this.whenUpdate === `function`) {
                this.whenUpdate(updateData);
            }
            this.change.emit(updateData);
            if (this.selfUpdate) {
                this.options = options;
                this.createOptions();
            }
        }
    }
    componentDidUpdate() {
        this.createOptions();
    }
    componentDidLoad() {
        this.createOptions();
    }
    /** @desc renders the element */
    render() {
        return (h("div", { ref: (el) => this.container = el, class: "nv-radio-container" }));
    }
    static get is() { return "nv-radio"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "options": {
            "type": String,
            "attr": "options",
            "mutable": true
        },
        "selfUpdate": {
            "type": Boolean,
            "attr": "self-update"
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
    static get style() { return "/**style-placeholder:nv-radio:**/"; }
}
