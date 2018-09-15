/** @desc renders a wave effect component */
export class NvWave {
    constructor() {
        this.highlight = false;
    }
    reset() {
        clearTimeout(this.waveTimer);
        this.waveBox.classList.add(`reset`);
        this.waveBox.classList.remove(`highlighted`);
        this.waveBox.classList.remove(`waving`);
        this.waveBox.classList.remove(`waveIn`);
        this.waveBox.classList.remove(`waveMiddle`);
        this.waveBox.classList.remove(`waveOut`);
        this.waveBox.classList.remove(`waveGrow`);
        this.waveBox.classList.remove(`wavePulseIn`);
        this.waveBox.classList.remove(`wavePulseOut`);
        requestAnimationFrame(() => {
            this.waveBox.classList.remove(`reset`);
        });
    }
    doWave(e) {
        clearTimeout(this.waveTimer);
        if (!this.waveBox) {
            return;
        }
        return this.startWave(e)
            .then(() => {
            return this.stopWave(e);
        });
    }
    doPulse() {
        clearTimeout(this.waveTimer);
        this.waveBox.classList.add(`waving`);
        this.waveBox.classList.add(`waveGrow`);
        this.waveBox.classList.remove(`waveMiddle`);
        this.waveBox.classList.add(`wavePulseOut`);
        this.waveTimer = setTimeout(() => {
            if (!this.waveBox) {
                return;
            }
            this.waveBox.classList.remove(`wavePulseOut`);
            this.waveBox.classList.add(`wavePulseIn`);
            this.waveTimer = setTimeout(() => {
                if (!this.waveBox) {
                    return;
                }
                this.waveBox.classList.remove(`wavePulseIn`);
                this.doPulse();
            }, 1200);
        }, 1200);
    }
    startWave(e) {
        if (!this.waveBox) {
            return;
        }
        clearTimeout(this.waveTimer);
        return new Promise((resolve) => {
            const dimension = Math.max(this.element.offsetWidth, this.element.offsetHeight);
            const centerX = (this.element.offsetWidth / 2) - (dimension / 2);
            const centerY = (this.element.offsetHeight / 2) - (dimension / 2);
            this.waveBox.style.width = `${dimension}px`;
            this.waveBox.style.height = `${dimension}px`;
            this.waveBox.style.top = `${e ? (e.pageY - this.element.getBoundingClientRect().top) - (dimension / 2) : centerY}px`;
            this.waveBox.style.left = `${e ? (e.pageX - this.element.getBoundingClientRect().left) - (dimension / 2) : centerX}px`;
            if (this.highlight) {
                this.waveBox.classList.add(`highlighted`);
            }
            else {
                this.waveBox.classList.remove(`highlighted`);
            }
            this.waveBox.classList.add(`waving`);
            this.waveBox.classList.add(`waveIn`);
            this.waveTimer = setTimeout(() => {
                this.waveBox.classList.add(`waveGrow`);
                this.waveBox.classList.add(`waveMiddle`);
                this.waveBox.classList.remove(`waveIn`);
                this.waveTimer = setTimeout(() => {
                    this.doPulse();
                    return resolve();
                }, 200);
            }, 10);
        });
    }
    stopWave(e) {
        if (!this.waveBox) {
            return;
        }
        clearTimeout(this.waveTimer);
        return new Promise((resolve) => {
            const dimension = Math.max(this.element.offsetWidth, this.element.offsetHeight);
            const centerX = (this.element.offsetWidth / 2) - (dimension / 2);
            const centerY = (this.element.offsetHeight / 2) - (dimension / 2);
            this.waveBox.style.width = `${dimension}px`;
            this.waveBox.style.height = `${dimension}px`;
            this.waveBox.style.top = `${e ? (e.pageY - this.element.getBoundingClientRect().top) - (dimension / 2) : centerY}px`;
            this.waveBox.style.left = `${e ? (e.pageX - this.element.getBoundingClientRect().left) - (dimension / 2) : centerX}px`;
            if (this.highlight) {
                this.waveBox.classList.add(`highlighted`);
            }
            else {
                this.waveBox.classList.remove(`highlighted`);
            }
            const cleanUp = () => {
                clearTimeout(this.waveTimer);
                this.waveBox.classList.remove(`waving`);
                this.waveBox.classList.remove(`waveIn`);
                this.waveBox.classList.remove(`waveMiddle`);
                this.waveBox.classList.remove(`waveOut`);
                this.waveBox.classList.remove(`waveGrow`);
                return resolve();
            };
            this.waveBox.classList.remove(`wavePulseOut`);
            this.waveBox.classList.remove(`wavePulseIn`);
            this.waveBox.classList.add(`waving`);
            this.waveBox.classList.remove(`waveIn`);
            this.waveBox.classList.remove(`waveMiddle`);
            this.waveTimer = setTimeout(() => {
                cleanUp();
            }, 300);
        });
    }
    /** @desc renders the element */
    render() {
        return (h("div", { class: "nv-wave", ref: (el) => this.waveBox = el }));
    }
    static get is() { return "nv-wave"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "doPulse": {
            "method": true
        },
        "doWave": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "reset": {
            "method": true
        },
        "startWave": {
            "method": true
        },
        "stopWave": {
            "method": true
        }
    }; }
    static get style() { return "/**style-placeholder:nv-wave:**/"; }
}
