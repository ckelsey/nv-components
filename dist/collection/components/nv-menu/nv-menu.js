/** @desc renders a popup menu component */
export class NvMenu {
    constructor() {
        /** @desc component options proxy */
        this._options = [];
        /** @desc component position proxy */
        this._position = `bottom`;
        /** @desc menu options, can be html */
        this.options = [];
        /** @desc position of the menu, bottom, top, left, right */
        this.position = `bottom`;
        /** @desc whether or not the menu is open */
        this.active = false;
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
        this.whenOptionClicked.emit(index);
        if (this.whenClicked && typeof this.whenClicked === `function`) {
            this.whenClicked(index);
        }
        this.whenClosed.emit();
    }
    /** @desc updates the element properties and proxies */
    update() {
        this._position = this.position || this._position;
        this._anchor = (this.anchor ? typeof this.anchor === `string` ? document.querySelector(this.anchor) : this.anchor : null) || this.element;
        this.tooltip.triggerElement = this._anchor;
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
        return (h("div", { class: "menu-container", ref: (el) => this.container = el },
            h("nv-tooltip", { ref: (el) => this.tooltip = el, padding: 0, active: this.active, triggerOn: "never", triggerElement: this._anchor, position: this._position, boxShadow: true }, this._options.map((option) => option !== `` ? h("div", { class: "menu-option", onClick: this.optionClick, innerHTML: option }) : h("div", { class: "menu-option-divider" })))));
    }
    static get is() { return "nv-menu"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active"
        },
        "anchor": {
            "type": String,
            "attr": "anchor"
        },
        "element": {
            "elementRef": true
        },
        "options": {
            "type": String,
            "attr": "options"
        },
        "position": {
            "type": String,
            "attr": "position"
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
