var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @desc renders a popup menu component */
export class NvMenu {
    constructor() {
        this.optionElements = [];
        /** @desc component options proxy */
        this._options = [];
        /** @desc component position proxy */
        this._position = `bottom`;
        /** @desc component element */
        this.focusedOption = undefined;
        /** @desc set width of menu */
        this.width = ``;
        /**
         * @desc menu options, can be html
         * @example ''
         */
        this.options = [];
        /**
         * @desc position of the menu, bottom, top, left, right
         * @example ''
         */
        this.position = `bottom`;
        /** @desc whether or not the menu is open */
        this.isActive = false;
        /** @desc element or css selector string to element to anchor the menu to, defaults to self */
        this.anchor = ``;
        /** @desc object of styles to apply to each option */
        this.optionStyles = {};
        /** @desc object of styles to apply to each option on hover */
        this.optionHoverStyles = {};
    }
    /**
     * @desc handles menu option click event
     * @param e event
     */
    optionClick(e) {
        e.preventDefault();
        e.stopPropagation();
        let index = 0;
        const options = this.container.querySelectorAll(`.menu-option`);
        while (index < options.length) {
            if (options[index] === e.target || options[index].contains(e.target)) {
                break;
            }
            index = index + 1;
        }
        this.selectOption(index);
    }
    /** @desc updates the element properties and proxies */
    update() {
        this._position = this.position || this._position;
        this._anchor = (this.anchor ? typeof this.anchor === `string` ? document.querySelector(this.anchor) : this.anchor : null) || this.element;
        this.tooltip.triggerElement = this._anchor;
        if (this.isActive) {
            this.container.classList.add(`active`);
        }
        else {
            this.container.classList.remove(`active`);
        }
    }
    /**
     * @desc handles mouseenter event of an option
     * @param el option element
     */
    mouseEnter(el) {
        el.classList.add(`focused`);
        this.focusedOption = this.optionElements.indexOf(el);
        if (!this.optionHoverStyles) {
            return;
        }
        let optionstyles = {};
        if (typeof this.optionHoverStyles === `string`) {
            try {
                optionstyles = JSON.parse(this.optionHoverStyles);
            }
            catch (error) { }
        }
        else {
            optionstyles = this.optionHoverStyles;
        }
        for (let i in optionstyles) {
            el.style[i] = optionstyles[i];
        }
    }
    /**
     * @desc handles mouseleave event of an option
     * @param el option element
     */
    mouseLeave(el) {
        el.classList.remove(`focused`);
        if (this.focusedOption === this.optionElements.indexOf(el)) {
            this.focusedOption = undefined;
        }
        if (!this.optionHoverStyles) {
            return;
        }
        let optionstyles = {};
        if (typeof this.optionStyles === `string`) {
            try {
                optionstyles = JSON.parse(this.optionStyles);
            }
            catch (error) { }
        }
        else {
            optionstyles = this.optionStyles;
        }
        for (let i in optionstyles) {
            if (optionstyles[i]) {
                el.style[i] = optionstyles[i];
            }
            else {
                el.style.removeProperty(i);
            }
        }
    }
    /**
     * @desc focuses the option at the supplied index
     * @param index index of option
     */
    focusOption(index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof index === `string`) {
                index = parseInt(index);
            }
            console.log(index);
            if (this.optionElements[index]) {
                this.mouseEnter(this.optionElements[index]);
                this.optionElements.forEach((el, i) => {
                    if (i !== index) {
                        this.mouseLeave(el);
                    }
                });
            }
        });
    }
    /** @desc focuses the next option */
    focusNextOption() {
        return __awaiter(this, void 0, void 0, function* () {
            this.focusOption(this.focusedOption === undefined ? 0 : this.focusedOption + 1);
        });
    }
    /** @desc focuses the previous option */
    focusPreviousOption() {
        return __awaiter(this, void 0, void 0, function* () {
            this.focusOption(this.focusedOption === undefined ? 0 : this.focusedOption - 1);
        });
    }
    /** @desc clicks the option at the supplied index */
    selectOption(index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof index === `string`) {
                index = parseInt(index);
            }
            if (!this.optionElements[index]) {
                return;
            }
            this.whenOptionClicked.emit(index);
            if (this.whenClicked && typeof this.whenClicked === `function`) {
                this.whenClicked(index);
            }
            this.whenClosed.emit();
        });
    }
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.update();
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.update();
        this.tooltip.addEventListener(`whenOpened`, () => {
            if (this.whenActivated && typeof this.whenActivated === `function`) {
                this.whenActivated();
            }
        });
        this.tooltip.addEventListener(`whenClosed`, () => {
            if (this.whenDeactivated && typeof this.whenDeactivated === `function`) {
                this.whenDeactivated();
            }
        });
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        this.optionClick = this.optionClick.bind(this);
        if (this.options) {
            if (typeof this.options === `string`) {
                try {
                    this._options = JSON.parse(this.options);
                }
                catch (error) {
                    this._options = this.options.split(',').map(option => option.trim());
                }
            }
            else if (Array.isArray(this.options)) {
                this._options = this.options;
            }
            else {
                this._options = [];
            }
        }
        else {
            this._options = [];
        }
        let optionstyles = {};
        if (this.optionStyles) {
            if (typeof this.optionStyles === `string`) {
                try {
                    optionstyles = JSON.parse(this.optionStyles);
                }
                catch (error) { }
            }
            else {
                optionstyles = this.optionStyles;
            }
        }
        return (h("div", { class: "menu-container", ref: (el) => this.container = el },
            h("nv-tooltip", { ref: (el) => this.tooltip = el, offset: 0, paddingAmount: 0, isActive: this.isActive, triggerOn: "never", triggerElement: this._anchor, position: this._position, showBoxShadow: true, width: this.width }, this._options.map((option, index) => option.trim() !== `` ?
                h("div", { class: "menu-option", ref: (el) => this.optionElements[index] = el, style: optionstyles, onMouseDown: this.optionClick, innerHTML: option, onMouseEnter: () => this.mouseEnter(this.optionElements[index]), onMouseLeave: () => this.mouseLeave(this.optionElements[index]) }) : h("div", { class: "menu-option-divider" })))));
    }
    static get is() { return "nv-menu"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "anchor": {
            "type": String,
            "attr": "anchor"
        },
        "element": {
            "elementRef": true
        },
        "focusedOption": {
            "type": Number,
            "attr": "focused-option",
            "mutable": true
        },
        "focusNextOption": {
            "method": true
        },
        "focusOption": {
            "method": true
        },
        "focusPreviousOption": {
            "method": true
        },
        "isActive": {
            "type": Boolean,
            "attr": "is-active"
        },
        "optionHoverStyles": {
            "type": String,
            "attr": "option-hover-styles"
        },
        "options": {
            "type": String,
            "attr": "options"
        },
        "optionStyles": {
            "type": String,
            "attr": "option-styles"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "selectOption": {
            "method": true
        },
        "whenActivated": {
            "type": "Any",
            "attr": "when-activated"
        },
        "whenClicked": {
            "type": "Any",
            "attr": "when-clicked"
        },
        "whenDeactivated": {
            "type": "Any",
            "attr": "when-deactivated"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "whenOptionClicked",
            "method": "whenOptionClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenOpened",
            "method": "whenOpened",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenClosed",
            "method": "whenClosed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nv-menu:**/"; }
}
