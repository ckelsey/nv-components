/*
- required
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @desc renders an input component */
export class NvInput {
    constructor() {
        /** @desc Help text that briefly appears in the assistive text element */
        this.helpText = ``;
        /**
         * @desc Whether or not component can update value. default is false as this should be handled by controller
         * @example true
         */
        this.selfUpdate = false;
        /** @desc value of the input */
        this.value = null;
        /** @desc type of input, either text or number */
        this.type = `text`;
        /** @desc classes to apply, currently supports small, transparent, center */
        this.classes = ``;
        /** @desc label of the input */
        this.label = ``;
        /** @desc icon to add to the left of the input */
        this.icon = ``;
        /** @desc adds a clear button to the left of the input, used to clear the value */
        this.clear = false;
        /** @desc if there is an error in the value */
        this.error = false;
        /** @desc text to add to the bottom of the input */
        this.assistiveText = '';
        /** @desc whether or not to show character count text */
        this.characterCount = false;
        /** @desc whether or not the input should wrap and increase in height like a textarea element */
        this.multiline = false;
        /** @desc whether or not to filter the options list based on value */
        this.filterOptions = false;
        /** @desc an array of options to show, such as suggestions */
        this.options = undefined;
        /** @desc maximum of characters for text type or maximum value for number type */
        this.max = undefined;
        /** @desc minimum of characters for text type or minimum value for number type */
        this.min = undefined;
        /** @desc for number type, amount to increment value */
        this.step = undefined;
        /** @desc whether the input is required, set as a todo item */
        this.required = false;
        /** @desc called when the value is updated */
        this.whenUpdate = undefined;
        /** @desc called when the input is focused */
        this.whenFocus = undefined;
        /** @desc called when the input loses focus */
        this.whenBlur = undefined;
        /** @desc called when the input has an error */
        this.whenError = undefined;
    }
    /** @desc returns the character count of the input */
    get characterCountText() {
        if (this.max !== undefined) {
            return `${this.inputElement.value.length}${this.max ? `/${this.max}` : ``}`;
        }
        return (this.inputElement.value.length).toString();
    }
    /** @desc returns the old and new value as well as the component data */
    get updatedData() {
        let value = this.inputElement.value;
        if (this.type === `number`) {
            value = parseFloat(value);
        }
        return {
            oldValue: this.value,
            newValue: value,
            element: this
        };
    }
    /** @desc returns the parsed options */
    get _options() {
        let options = this.options;
        if (typeof options === `string`) {
            try {
                options = JSON.parse(options);
            }
            catch (error) { }
        }
        if (!Array.isArray(options)) {
            return [];
        }
        if (this.filterOptions) {
            let _options = [];
            let value = (this.value ? this.value.toString() : ``).toLowerCase();
            options.forEach(o => {
                if (o.toString().toLowerCase().indexOf(value) > -1) {
                    _options.push(o);
                }
            });
            options = _options;
        }
        return options;
    }
    /** @desc returns the focused state */
    get isFocused() {
        return this.container.classList.contains(`active`);
    }
    /** @desc focuses the input */
    doClick() {
        return __awaiter(this, void 0, void 0, function* () {
            this.whenclick.emit(this.updatedData);
            this.inputElement.focus();
            this.doFocus();
        });
    }
    /** @desc handles the input event */
    doInput(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let cancel = false;
            let errorMessage = ``;
            if (!this.type || this.type === `text`) {
                if (this.max && this.inputElement.value.length > this.max) {
                    cancel = true;
                    errorMessage = `${this.max} characters allowed`;
                }
            }
            if (this.type === `number`) {
                if (isNaN(parseFloat(this.inputElement.value))) {
                    cancel = true;
                    errorMessage = `only numbers are allowed`;
                }
                if (this.max && parseFloat(this.inputElement.value) > this.max) {
                    cancel = true;
                    errorMessage = `${this.max} is the maximum`;
                }
                if (this.min !== undefined && parseFloat(this.inputElement.value) < this.min) {
                    cancel = true;
                    errorMessage = `${this.max} is the maximum`;
                }
            }
            if (this.validator && typeof this.validator === `function`) {
                let valid = this.validator(this.inputElement.value);
                if (!valid) {
                    cancel = true;
                }
            }
            if (cancel) {
                if (errorMessage && errorMessage !== ``) {
                    this.doError(errorMessage);
                }
                this.whenerror.emit(this.updatedData);
                if (this.whenError && typeof this.whenError === `function`) {
                    this.whenError(this.updatedData);
                }
                this.inputElement.value = this.value.toString();
                if (e) {
                    e.preventDefault();
                }
                return false;
            }
            this.inputElement.focus();
            this.whenupdate.emit(this.updatedData);
            this.wheninput.emit(this.updatedData);
            if (this.whenUpdate && typeof this.whenUpdate === `function`) {
                this.whenUpdate(this.updatedData);
            }
            if (this.selfUpdate) {
                this.characterCountElement.textContent = this.characterCountText;
                this.value = this.updatedData.newValue;
                this.setClasses();
                this.setHeight();
            }
        });
    }
    /** @desc focuses the input */
    doFocus() {
        return __awaiter(this, void 0, void 0, function* () {
            this.container.classList.add(`active`);
            this.whenfocus.emit(this.updatedData);
            if (this.whenFocus && typeof this.whenFocus === `function`) {
                this.whenFocus(this.updatedData);
            }
            if (this._options.length) {
                this.menu.setAttribute(`active`, `true`);
            }
        });
    }
    /** @desc blurs the input */
    doBlur() {
        return __awaiter(this, void 0, void 0, function* () {
            this.container.classList.remove(`active`);
            this.whenblur.emit(this.updatedData);
            if (this.whenBlur && typeof this.whenBlur === `function`) {
                this.whenBlur(this.updatedData);
            }
            this.menu.setAttribute(`active`, `false`);
        });
    }
    /** @desc errors the input */
    doError(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.container.classList.add(`showHelp`);
            this.container.classList.add(`error`);
            this.helpText = message;
            setTimeout(() => {
                this.container.classList.remove(`showHelp`);
                if (!this.error) {
                    this.container.classList.remove(`error`);
                }
            }, 1500);
        });
    }
    /** @desc shrinks the input to the space the text takes up */
    shrink() {
        if (this.classes.indexOf(`shrink`) > -1) {
            this.inputElement.style.width = `${this.value.toString().length * 16}px`;
        }
    }
    /** @desc clears the input value */
    clearValue() {
        this.inputElement.value = ``;
        this.doInput();
    }
    /** @desc sets the state classes */
    setClasses() {
        let hasValue = this.inputElement.value !== undefined && this.inputElement.value !== null && this.inputElement.value !== ``;
        let hasIcon = this.icon !== undefined && this.icon !== null && this.icon !== ``;
        if (this.classes) {
            this.classes.split(`,`).forEach(s => {
                if (s && s.trim() !== ``) {
                    this.container.classList.add(s.trim());
                }
            });
            this.shrink();
        }
        if (hasValue) {
            this.container.classList.add(`hasValue`);
        }
        else {
            this.container.classList.remove(`hasValue`);
        }
        if (hasIcon) {
            this.container.classList.add(`hasIcon`);
        }
        else {
            this.container.classList.remove(`hasIcon`);
        }
        if (this.clear) {
            this.container.classList.add(`hasClear`);
        }
        else {
            this.container.classList.remove(`hasClear`);
        }
        if (this.characterCount && this.type === `text`) {
            this.container.classList.add(`showCharacterCount`);
        }
        else {
            this.container.classList.remove(`showCharacterCount`);
        }
        if (this.error) {
            this.container.classList.add(`error`);
        }
        else {
            this.container.classList.remove(`error`);
        }
    }
    /** @desc handles the click of an option  */
    optionClicked(index) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = this._options;
            if (options[index]) {
                this.inputElement.value = options[index].toString();
            }
            this.doInput();
            this.inputElement.blur();
        });
    }
    /** @desc sets the height of a multiline input */
    setHeight() {
        if (this.multiline) {
            this.inputElement.style.height = `0px`;
            this.inputElement.style.height = `${this.inputElement.scrollHeight}px`;
        }
    }
    /** @desc updates the input */
    update() {
        this.setClasses();
        this.characterCountElement.textContent = this.characterCountText;
        this.setHeight();
    }
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.update();
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.update();
        this.doClick = this.doClick.bind(this);
        this.element.addEventListener(`keydown`, (e) => {
            this.whenkeydown.emit(this.updatedData);
            if (this.container.classList.contains(`active`)) {
                let options = this._options;
                if (options.length) {
                    if (e.key === `ArrowDown`) {
                        e.preventDefault();
                        this.menu.focusNextOption();
                    }
                    if (e.key === `ArrowUp`) {
                        e.preventDefault();
                        this.menu.focusPreviousOption();
                    }
                    if (e.key === `Enter` && this.menu.focusedOption !== undefined) {
                        this.menu.selectOption(this.menu.focusedOption);
                    }
                }
            }
            if (e.key === `Enter`) {
                this.whensubmit.emit(this.updatedData);
            }
        });
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (h("div", { class: "nv-input-container", ref: (el) => this.container = el, onClick: () => {
                this.doClick();
            } },
            h("div", { class: "shape", ref: (el) => this.shape = el }),
            this.multiline ?
                h("textarea", { value: this.value, onInput: (e) => this.doInput(e), onBlur: () => this.doBlur(), onFocus: () => this.doFocus(), onKeyPress: () => this.whenkeypress.emit(this.updatedData), onKeyUp: () => this.whenkeyup.emit(this.updatedData), ref: (el) => this.inputElement = el, required: this.required })
                :
                    h("input", { type: this.type, value: this.value, onInput: (e) => this.doInput(e), onBlur: () => this.doBlur(), onFocus: () => this.doFocus(), onKeyPress: () => this.whenkeypress.emit(this.updatedData), onKeyUp: () => this.whenkeyup.emit(this.updatedData), ref: (el) => this.inputElement = el, required: this.required, step: this.step }),
            h("span", { class: "help-text", innerHTML: this.helpText }),
            h("span", { class: "assistive-text", innerHTML: this.assistiveText }),
            h("span", { class: "character-count-text", ref: (el) => this.characterCountElement = el }),
            this.label ? h("label", { innerHTML: this.label }) : ``,
            this.icon ? h("material-icon", { class: "input-icon", type: this.icon, size: "24px", color: "inherit" }) : ``,
            this.clear ? h("material-icon", { class: "input-clear", type: "close", size: "24px", color: "inherit", onClick: () => this.clearValue() }) : ``,
            h("nv-menu", { optionHoverStyles: { background: '#676767' }, optionStyles: { background: '#575757', padding: `0px 16px`, lineHeight: `24px`, fontSize: `12px` }, options: this._options.map(s => s.toString()), isActive: false, position: "bottom", anchor: this.element, width: `100%`, whenClicked: (index) => this.optionClicked(index), ref: (el) => this.menu = el })));
    }
    static get is() { return "nv-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "assistiveText": {
            "type": String,
            "attr": "assistive-text"
        },
        "characterCount": {
            "type": Boolean,
            "attr": "character-count"
        },
        "classes": {
            "type": String,
            "attr": "classes"
        },
        "clear": {
            "type": Boolean,
            "attr": "clear"
        },
        "doBlur": {
            "method": true
        },
        "doClick": {
            "method": true
        },
        "doError": {
            "method": true
        },
        "doFocus": {
            "method": true
        },
        "doInput": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "error": {
            "type": Boolean,
            "attr": "error"
        },
        "filterOptions": {
            "type": Boolean,
            "attr": "filter-options"
        },
        "helpText": {
            "type": String,
            "attr": "help-text",
            "mutable": true
        },
        "icon": {
            "type": String,
            "attr": "icon"
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
        "multiline": {
            "type": Boolean,
            "attr": "multiline"
        },
        "optionClicked": {
            "method": true
        },
        "options": {
            "type": String,
            "attr": "options"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "selfUpdate": {
            "type": Boolean,
            "attr": "self-update"
        },
        "step": {
            "type": Number,
            "attr": "step"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "validator": {
            "type": "Any",
            "attr": "validator"
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true
        },
        "whenBlur": {
            "type": "Any",
            "attr": "when-blur"
        },
        "whenError": {
            "type": "Any",
            "attr": "when-error"
        },
        "whenFocus": {
            "type": "Any",
            "attr": "when-focus"
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
        }, {
            "name": "wheninput",
            "method": "wheninput",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
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
            "name": "whenkeypress",
            "method": "whenkeypress",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenkeydown",
            "method": "whenkeydown",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenkeyup",
            "method": "whenkeyup",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whensubmit",
            "method": "whensubmit",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenerror",
            "method": "whenerror",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nv-input:**/"; }
}
