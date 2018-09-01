/*! Built with http://stenciljs.com */
const { h } = window.nvcomponents;

class NvTootltip {
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
    static get style() { return "\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled.sc-nv-tooltip {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled.sc-nv-tooltip   *.sc-nv-tooltip {\n    pointer-events: none; }\n\n.sc-nv-tooltip-h {\n  width: 0px;\n  height: 0px;\n  position: relative;\n  pointer-events: none; }\n\n.tooltip-container.sc-nv-tooltip {\n  position: fixed;\n  top: 0px;\n  height: 0px;\n  -webkit-transition: left 0.2s, right 0.2s, top 0.2s, bottom 0.2s, opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.3s ease-in-out;\n  transition: left 0.2s, right 0.2s, top 0.2s, bottom 0.2s, opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.3s ease-in-out;\n  transition: left 0.2s, right 0.2s, top 0.2s, bottom 0.2s, transform 0.3s ease-in-out, opacity 0.2s ease-in-out 0.1s;\n  transition: left 0.2s, right 0.2s, top 0.2s, bottom 0.2s, transform 0.3s ease-in-out, opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.3s ease-in-out;\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  opacity: 0; }\n  .tooltip-container.open.sc-nv-tooltip {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n    opacity: 1; }\n  .tooltip-container.sc-nv-tooltip   .tooltip-content.sc-nv-tooltip {\n    display: inline-block;\n    background: #2c3338;\n    padding: 0px 8px;\n    line-height: 32px;\n    position: relative;\n    top: calc(100% + 10px);\n    font-size: 10px;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: normal;\n    line-height: 24px;\n    color: rgba(255, 255, 255, 0.75); }\n  .tooltip-container[device=\"mobile\"].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip {\n    font-size: 14px;\n    line-height: 32px;\n    padding: 0px 16px; }\n  .tooltip-container[position=\"right\"].sc-nv-tooltip {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%; }\n    .tooltip-container[position=\"right\"].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip {\n      top: 0px;\n      right: calc(-100% - 10px); }\n  .tooltip-container[position=\"left\"].sc-nv-tooltip {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%; }\n    .tooltip-container[position=\"left\"].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip {\n      top: 0px;\n      left: calc(-100% - 10px); }\n  .tooltip-container[position=\"top\"].sc-nv-tooltip {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%; }\n    .tooltip-container[position=\"top\"].sc-nv-tooltip   .tooltip-content.sc-nv-tooltip {\n      top: calc(-100% - 10px); }\n"; }
}

export { NvTootltip as NvTooltip };
