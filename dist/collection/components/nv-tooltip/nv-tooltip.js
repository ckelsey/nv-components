// fix bottom position if too big
/**
 * @desc renders a tooltip
 * @yield slot
 * */
export class NvTootltip {
    constructor() {
        /** @desc proxy reference to the active property */
        this._active = false;
        this.scrollPosition = 0;
        /** @desc available position keywords */
        this.positions = [
            'bottom',
            'top',
            'left',
            'right'
        ];
        /**
         * @desc padding to give the tooltip
         * @example ''
         */
        this.padding = 8;
        this.width = ``;
        /** @desc position of the tooltip */
        this.position = ``;
        /** @desc whether or not the tooltip is shown */
        this.active = false;
        /**
         * @desc what event to trigger the tooltip on, when 'never' the tooltip relies on the active property to be updated
         * @example ''
        */
        this.triggerOn = `mouseenter`;
        /** @desc element to anchor the tooltip as well as what to set the tigger events to */
        this.triggerElement = '';
        /**
         * @desc duration to hide the tooltip after
         * @example undefined
        */
        this.offset = 10;
        /**
         * @example undefined
        */
        this.hideAfter = 0;
        /**
         * @desc duration to delay showing the tooltip
         * @example undefined
         */
        this.delay = 0;
        /** @desc whether or not to show a css box-shadow */
        this.boxShadow = false;
    }
    /** @desc sets the dimensions of the tooltip */
    setDimensions() {
        if (!this.container) {
            return;
        }
        const parentBox = this._triggerElement.getBoundingClientRect();
        this.container.style.width = `${this._triggerElement.offsetWidth}px`;
        this.container.style.height = `${this._triggerElement.offsetHeight}px`;
        this.container.style.top = `${parentBox.top}px`;
        this.container.style.left = `${parentBox.left}px`;
        if (window.innerWidth <= 768) {
            this.container.setAttribute('device', `mobile`);
        }
        else {
            this.container.setAttribute('device', `browser`);
        }
    }
    /** @desc sets the position of the tooltip */
    setPositions() {
        if (!this.container) {
            return;
        }
        this.scrollPosition = this.contentInner.scrollTop;
        let position = `bottom`;
        if (this.position && this.positions.indexOf(this.position) > -1) {
            position = this.position;
        }
        if (this.width && this.width !== ``) {
            this.contentInner.style.width = this.width;
            this.contentInnerInner.style.width = this.width;
            this.content.style.width = this.width;
        }
        this.container.setAttribute(`position`, position);
        const containerBox = this.container.getBoundingClientRect();
        let width = this.contentInner.offsetWidth;
        let height = this.contentInner.offsetHeight;
        let x = 0;
        let y = 0;
        if (height !== this.contentInnerInner.offsetHeight) {
            this.contentInner.style.height = `${this.contentInnerInner.offsetHeight}px`;
            height = this.contentInner.offsetHeight;
        }
        if (width > window.innerWidth) {
            this.contentInner.style.width = `${window.innerWidth - (this.offset * 2)}px`;
            width = this.contentInner.offsetWidth;
        }
        if (height > window.innerHeight) {
            this.contentInner.style.height = `${(window.innerHeight - (this.offset * 2)) * 0.8}px`;
            height = this.contentInner.offsetHeight;
        }
        const setY = () => {
            if (containerBox.top > window.innerHeight - containerBox.bottom) {
                return -((height / 2) + (containerBox.height / 2) + this.offset);
            }
            else {
                return (height / 2) + (containerBox.height / 2) + this.offset;
            }
        };
        const adjustTopBottom = () => {
            const needsTopAdjustment = containerBox.top - (height / 2) < 0;
            const needsBottomAdjustment = containerBox.bottom + (height / 2) > window.innerHeight;
            const amountToShiftDown = ((height / 2) - containerBox.top) + this.offset;
            const amountToShiftUp = window.innerHeight - ((height / 2) + containerBox.bottom + this.offset);
            if (needsTopAdjustment) {
                y = amountToShiftDown;
            }
            else if (needsBottomAdjustment) {
                y = amountToShiftUp;
            }
        };
        switch (position) {
            case `left`:
                if (containerBox.left - (width + this.offset) < 0) {
                    if (containerBox.right + (width + this.offset) < window.innerWidth) {
                        x = width + (this.offset * 2) + containerBox.width;
                        adjustTopBottom();
                    }
                    else {
                        y = setY();
                        x = (width + this.offset) + ((containerBox.width / 2) - (width / 2));
                    }
                }
                else {
                    adjustTopBottom();
                }
                break;
            case `right`:
                if (containerBox.right + (width + this.offset) > window.innerWidth) {
                    if (containerBox.left - (width + this.offset) > 0) {
                        x = -(width + (this.offset * 2) + containerBox.width);
                        adjustTopBottom();
                    }
                    else {
                        y = setY();
                        x = -((width + this.offset) + ((containerBox.width / 2) - (width / 2)));
                    }
                }
                else {
                    adjustTopBottom();
                }
                break;
            case `top`:
                if (containerBox.top - height - this.offset + window.pageYOffset < 0) {
                    y = height + (this.offset * 2) + containerBox.height;
                }
                break;
            default:
                y = height + this.offset;
                if (containerBox.bottom + height + this.offset > window.innerHeight) {
                    if ((containerBox.top + window.pageYOffset) - (height - (this.offset * 2)) > 0) {
                        y = -(containerBox.height + this.offset);
                    }
                    else {
                        this.contentInner.style.height = `${(window.innerHeight - (this.offset * 2)) * 0.8}px`;
                        height = this.contentInner.offsetHeight;
                        if (containerBox.top > window.innerHeight - containerBox.bottom) {
                            this.contentInner.style.height = `${containerBox.top - (this.offset * 2)}px`;
                            height = this.contentInner.offsetHeight;
                            y = -(height + this.offset);
                        }
                        else {
                            this.contentInner.style.height = `${(window.innerHeight - containerBox.bottom) - this.offset - 10}px`;
                            height = this.contentInner.offsetHeight;
                            y = height + this.offset;
                        }
                    }
                }
                break;
        }
        this.content.style.transform = `scale(1,1) translate(${x}px, ${y}px)`;
        const box = this.content.getBoundingClientRect();
        if (box.left < 0) {
            x = -(box.left) + this.offset;
            this.content.style.transform = `scale(1,1) translate(${x}px, ${y}px)`;
        }
        else if (box.right > window.innerWidth) {
            x = window.innerWidth - box.right - this.offset;
            this.content.style.transform = `scale(1,1) translate(${x}px, ${y}px)`;
        }
        this.contentInner.scrollTop = this.scrollPosition;
    }
    /** @desc timer function that checks the dimensions/positions of the tooltip when active */
    checkDimensions() {
        clearTimeout(this.checkDimensionsTimer);
        if (!this.active) {
            return;
        }
        if (!this.container) {
            return;
        }
        this.setDimensions();
        this.setPositions();
        this.checkDimensionsTimer = setTimeout(() => {
            this.checkDimensions();
        }, 16);
    }
    /** @desc opens the tooltip */
    open() {
        if (!this.container) {
            return;
        }
        clearTimeout(this.openTimer);
        this.container.style.removeProperty(`transform-origin`);
        this.contentInner.style.width = this.contentInner.style.height = `auto`;
        this.openTimer = setTimeout(() => {
            if (!this.container) {
                return;
            }
            if (this.triggerOn === `never`) {
                if (!this.active) {
                    return;
                }
            }
            else {
                this.active = true;
            }
            if (this.active) {
                this.container.classList.add(`open`);
                this.checkDimensions();
                this.whenOpened.emit();
                if (this.hideAfter) {
                    setTimeout(() => {
                        if (!this.container) {
                            return;
                        }
                        this.close();
                    }, this.hideAfter);
                }
            }
        }, this.delay || 0);
    }
    /** @desc closes the tooltip */
    close() {
        if (!this.container) {
            return;
        }
        if (this.triggerOn === `never`) {
            if (this.active) {
                this.whenClosed.emit();
                return;
            }
        }
        else {
            this.whenClosed.emit();
            this.active = false;
        }
        clearTimeout(this.openTimer);
        try {
            if (this.container.classList.contains(`open`)) {
                this.container.classList.remove(`open`);
                this.content.removeAttribute(`style`);
                setTimeout(() => {
                    if (!this.container) {
                        return;
                    }
                    this.container.style.removeProperty(`transform-origin`);
                }, 300);
            }
        }
        catch (error) { }
    }
    /** @desc closes the tooltip if scrolled out of view */
    handleIntersect(entries) {
        if (!this.container) {
            return;
        }
        if (this.active && !entries[0].isIntersecting) {
            this.close();
        }
    }
    /** @desc triggers open */
    doOpen() {
        if (!this.container) {
            return;
        }
        if (this.active) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /** @desc triggers close */
    doClose() {
        if (!this.container) {
            return;
        }
        if (!this.active) {
            this.close();
        }
    }
    /** @desc handles click outside of tooltip */
    doBodyClick(e) {
        if (!this.container || !this._triggerElement || !this.element) {
            window.document.body.removeEventListener(`click`, this.doBodyClick);
            return;
        }
        const wasOnParent = e.target === this._triggerElement || this._triggerElement.contains(e.target);
        const wasOnSelf = e.target === this.container || e.target === this.element || this.container.contains(e.target) || this.element.contains(e.target);
        if (this.active && !wasOnParent && !wasOnSelf) {
            this.close();
        }
    }
    /** @desc sets tooltip events */
    setEvents() {
        if (this.triggerOn !== `never`) {
            this._triggerElement.addEventListener(this.triggerOn || `mouseenter`, this.doOpen);
            if (!this.triggerOn || this.triggerOn === `mouseenter`) {
                this._triggerElement.addEventListener(`mouseleave`, this.doClose);
            }
        }
    }
    /** @desc removes tooltip events */
    removeEvents() {
        if (this._triggerElement) {
            this._triggerElement.removeEventListener(this.triggerOn || `mouseenter`, this.doOpen);
            if (!this.triggerOn || this.triggerOn === `mouseenter`) {
                this._triggerElement.removeEventListener(`mouseleave`, this.doClose);
            }
        }
    }
    /** @desc updates the tooltip */
    update() {
        this.removeEvents();
        this.parent = this.element.parentElement;
        this._triggerElement = (this.triggerElement ? typeof this.triggerElement === `string` ? document.querySelector(this.triggerElement) : this.triggerElement : null) || this.parent;
        this.setEvents();
        if (this.boxShadow) {
            this.content.classList.add(`boxShadow`);
        }
        else {
            this.content.classList.remove(`boxShadow`);
        }
        clearTimeout(this.checkDimensionsTimer);
        this.checkDimensions();
        if (this.active === this._active) {
            return;
        }
        this._active = this.active;
        if (this.active) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.update();
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.doBodyClick = this.doBodyClick.bind(this);
        this.doClose = this.doClose.bind(this);
        this.doOpen = this.doOpen.bind(this);
        this.handleIntersect = this.handleIntersect.bind(this);
        this.setPositions = this.setPositions.bind(this);
        const observer = new IntersectionObserver(this.handleIntersect, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.01, 0.99, 1]
        });
        observer.observe(this.contentInnerInner);
        this.update();
        window.document.body.addEventListener(`click`, this.doBodyClick);
        const mutationObserver = new MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++) {
                if (mutations[i].type === `childList`) {
                    this.update();
                    break;
                }
            }
        });
        mutationObserver.observe(this.element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    componentDidUnload() {
        window.document.body.removeEventListener(`click`, this.doBodyClick);
    }
    /**
    * @desc replaces current html with the provided
    * @param html html to replace existing
    */
    updateInnerHTML(html) {
        this.container.innerHTML = html;
        this.update();
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (h("div", { class: "tooltip-container", ref: (el) => this.container = el },
            h("div", { class: "tooltip-content", ref: (el) => this.content = el },
                h("div", { class: "tooltip-content-inner", style: { padding: `0px ${this.padding}px` }, ref: (el) => this.contentInner = el },
                    h("div", { class: "tooltip-content-inner-inner", ref: (el) => this.contentInnerInner = el },
                        h("slot", null))))));
    }
    static get is() { return "nv-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "reflectToAttr": true,
            "mutable": true
        },
        "boxShadow": {
            "type": Boolean,
            "attr": "box-shadow"
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
        "offset": {
            "type": Number,
            "attr": "offset"
        },
        "padding": {
            "type": Number,
            "attr": "padding"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "triggerElement": {
            "type": String,
            "attr": "trigger-element"
        },
        "triggerOn": {
            "type": String,
            "attr": "trigger-on"
        },
        "updateInnerHTML": {
            "method": true
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
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
    static get style() { return "/**style-placeholder:nv-tooltip:**/"; }
}
