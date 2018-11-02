var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @desc renders a pulse effect component
 */
export class NvPulse {
    constructor() {
        /** @desc whether or not the color be the highlight color or gray */
        this.highlight = false;
    }
    /** @desc starts the pulse animation */
    startPulse() {
        return __awaiter(this, void 0, void 0, function* () {
            clearInterval(this.pulseTimer);
            if (!this.pulseBox) {
                return;
            }
            const dimension = Math.min(this.element.offsetWidth, this.element.offsetHeight);
            this.pulseBox.style.width = `${dimension}px`;
            this.pulseBox.style.height = `${dimension}px`;
            this.pulseBox.style.top = `${(this.element.offsetHeight / 2) - (dimension / 2)}px`;
            this.pulseBox.style.left = `${(this.element.offsetWidth / 2) - (dimension / 2)}px`;
            if (this.highlight) {
                this.pulseBox.classList.add(`highlighted`);
            }
            else {
                this.pulseBox.classList.remove(`highlighted`);
            }
            this.pulseBox.classList.add(`pulseIn`);
            this.pulseBox.classList.add(`pulseOut`);
            this.pulseTimer = setInterval(() => {
                if (!this.pulseBox) {
                    return;
                }
                this.pulseBox.classList.toggle(`pulseOut`);
            }, 1200);
        });
    }
    /** @desc stops the pulse animation */
    stopPulse() {
        return __awaiter(this, void 0, void 0, function* () {
            clearInterval(this.pulseTimer);
            if (!this.pulseBox) {
                return;
            }
            const dimension = Math.min(this.element.offsetWidth, this.element.offsetHeight);
            this.pulseBox.style.width = `${dimension}px`;
            this.pulseBox.style.height = `${dimension}px`;
            this.pulseBox.style.top = `${(this.element.offsetHeight / 2) - (dimension / 2)}px`;
            this.pulseBox.style.left = `${(this.element.offsetWidth / 2) - (dimension / 2)}px`;
            if (this.highlight) {
                this.pulseBox.classList.add(`highlighted`);
            }
            else {
                this.pulseBox.classList.remove(`highlighted`);
            }
            this.pulseBox.classList.remove(`pulseIn`);
            this.pulseBox.classList.remove(`pulseOut`);
        });
    }
    /** @desc lifecycle hook, renders the element */
    render() {
        return (h("div", { class: "nv-pulse", ref: (el) => this.pulseBox = el }));
    }
    static get is() { return "nv-pulse"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "startPulse": {
            "method": true
        },
        "stopPulse": {
            "method": true
        }
    }; }
    static get style() { return "/**style-placeholder:nv-pulse:**/"; }
}
