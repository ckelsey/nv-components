export class NvTootltip {
    constructor() {
        this.isOpen = false;
        this._active = false;
        this.position = ``;
        this.triggerOn = `mouseenter`;
    }
    setDimensions() {
        const parentBox = this.parent.getBoundingClientRect();
        this.container.style.width = `${this.parent.offsetWidth}px`;
        this.container.style.height = `${this.parent.offsetHeight}px`;
        this.container.style.top = `${parentBox.top}px`;
        this.container.style.left = `${parentBox.left}px`;
        if (window.innerWidth <= 768) {
            this.container.setAttribute('device', `mobile`);
        }
        else {
            this.container.setAttribute('device', `browser`);
        }
    }
    checkDimensions() {
        clearTimeout(this.checkDimensionsTimer);
        if (!this.isOpen) {
            return;
        }
        this.setDimensions();
        this.setPositions();
        this.checkDimensionsTimer = setTimeout(() => {
            this.checkDimensions();
        }, 16);
    }
    open() {
        clearTimeout(this.openTimer);
        this.openTimer = setTimeout(() => {
            this.container.classList.add(`open`);
            this.isOpen = true;
            this.checkDimensions();
            if (this.hideAfter) {
                setTimeout(() => {
                    this.close();
                }, this.hideAfter);
            }
        }, this.delay || 0);
    }
    close() {
        clearTimeout(this.openTimer);
        this.isOpen = false;
        this.container.classList.remove(`open`);
    }
    setPositions() {
        this.container.setAttribute(`position`, this.position || `bottom`);
        let contentBox = this.content.getBoundingClientRect();
        if (contentBox.left < 0) {
            if (contentBox.right > window.innerWidth) {
                this.container.removeAttribute(`position`);
            }
            this.container.setAttribute(`position`, `right`);
            contentBox = this.content.getBoundingClientRect();
            if (contentBox.right > window.innerWidth) {
                this.container.removeAttribute(`position`);
            }
        }
        else if (contentBox.right > window.innerWidth) {
            if (contentBox.left < 0) {
                this.container.removeAttribute(`position`);
            }
            this.content.setAttribute(`position`, `left`);
            contentBox = this.content.getBoundingClientRect();
            if (contentBox.left < 0) {
                this.container.removeAttribute(`position`);
            }
        }
        contentBox = this.content.getBoundingClientRect();
        if (contentBox.top < 0) {
            this.container.removeAttribute(`position`);
        }
        else if (contentBox.bottom > window.innerHeight) {
            this.container.setAttribute(`position`, `top`);
        }
    }
    handleIntersect(entries) {
        if (this.isOpen && !entries[0].isIntersecting) {
            this.close();
        }
    }
    componentDidUpdate() {
        this.container.setAttribute(`position`, this.position || `bottom`);
        if (this.active !== this._active) {
            this._active = this.active;
            if (this._active) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    componentDidLoad() {
        this.container.setAttribute(`position`, this.position || `bottom`);
        this.parent = this.element.parentElement;
        this.handleIntersect = this.handleIntersect.bind(this);
        const observer = new IntersectionObserver(this.handleIntersect, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.01, 0.99, 1]
        });
        observer.observe(this.element);
        this.parent.addEventListener(this.triggerOn || `mouseenter`, () => {
            if (this.isOpen) {
                this.close();
            }
            else {
                this.open();
            }
        });
        if (!this.triggerOn || this.triggerOn === `mouseenter`) {
            this.parent.addEventListener(`mouseleave`, () => {
                if (!this.active) {
                    this.close();
                }
            });
        }
        this.setDimensions();
        if (this.active !== this._active) {
            this._active = this.active;
            if (this._active) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    render() {
        return (h("div", { class: "tooltip-container", ref: (el) => this.container = el },
            h("div", { class: "tooltip-content", ref: (el) => this.content = el },
                h("slot", null))));
    }
    static get is() { return "nv-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active"
        },
        "delay": {
            "type": Number,
            "attr": "delay"
        },
        "element": {
            "elementRef": true
        },
        "hideAfter": {
            "type": Number,
            "attr": "hide-after"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "triggerOn": {
            "type": String,
            "attr": "trigger-on"
        }
    }; }
    static get style() { return "/**style-placeholder:nv-tooltip:**/"; }
}
