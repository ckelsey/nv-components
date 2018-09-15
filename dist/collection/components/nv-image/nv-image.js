/** @desc gracefully renders an image with an optional placeholder */
export class NvImage {
    constructor() {
        /** @desc whether or not the image should act like css background size cover */
        this.cover = false;
        /** @desc url to the image */
        this.url = '';
        /** @desc url to the placeholder image */
        this.placeholder = '';
    }
    /** @desc handles image error */
    imageError() {
        cancelAnimationFrame(this.timer);
        this.imageContainer.removeChild(this.img);
        this.img = null;
        this.whenerror.emit({ element: this });
        if (this.whenError && typeof this.whenError === `function`) {
            this.whenError({ element: this });
        }
    }
    /** @desc handles image loaded */
    imageLoaded() {
        if (this.imageContainer) {
            this.imageContainer.classList.add(`loaded`);
        }
        this.whenload.emit({ element: this });
        if (this.whenLoad && typeof this.whenLoad === `function`) {
            this.whenLoad({ element: this });
        }
    }
    /** @desc checks to see if image dimensions are available and if so set them */
    setDimensions() {
        return new Promise((resolve) => {
            const getDimensions = () => {
                cancelAnimationFrame(this.timer);
                if (!!this.img.width && !!this.img.height) {
                    const aspect = this.img.height / this.img.width;
                    this.imageContainer.style.padding = `${aspect * 100}% 0px 0px`;
                    if (this.cover) {
                        if (this.imageContainer.offsetHeight / this.imageContainer.offsetWidth > aspect) {
                            this.img.classList.add('scaleHeight');
                        }
                        else {
                            this.img.classList.remove('scaleHeight');
                        }
                    }
                    this.whenmeta.emit({ element: this });
                    if (this.whenMeta && typeof this.whenMeta === `function`) {
                        this.whenMeta({ element: this });
                    }
                    return resolve({
                        width: this.img.width,
                        height: this.img.height
                    });
                }
                else {
                    this.timer = requestAnimationFrame(() => {
                        getDimensions();
                    });
                }
            };
            getDimensions();
        });
    }
    /** @desc loads the image */
    loadImage() {
        if (!this.url || this.url === '') {
            return;
        }
        this.imageLoaded = this.imageLoaded.bind(this);
        this.imageError = this.imageError.bind(this);
        if (!this.img) {
            this.img = new Image();
            this.imageContainer.appendChild(this.img);
        }
        this.img.onload = this.imageLoaded;
        this.img.onerror = this.imageError;
        if (this.url && this.url !== this._src) {
            this.img.src = this._src = this.url;
            this.setDimensions();
        }
    }
    /** @desc sets the cover class */
    setFit() {
        if (this.cover) {
            this.imageContainer.classList.add(`cover`);
        }
        else {
            this.imageContainer.classList.remove(`cover`);
        }
    }
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        if (this.placeholder && this.placeholder !== '') {
            this.imageContainer.style.backgroundImage = `url('${this.placeholder}')`;
        }
        if (this.url && this.url !== this._src) {
            this.loadImage();
        }
        this.setFit();
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        if (this.placeholder && this.placeholder !== '') {
            this.imageContainer.style.backgroundImage = `url('${this.placeholder}')`;
        }
        this.loadImage();
        this.setFit();
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (h("div", { class: "outer" },
            h("div", { id: "nv-image", ref: (el) => this.imageContainer = el })));
    }
    static get is() { return "nv-image"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cover": {
            "type": Boolean,
            "attr": "cover"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "url": {
            "type": String,
            "attr": "url"
        },
        "whenError": {
            "type": "Any",
            "attr": "when-error"
        },
        "whenLoad": {
            "type": "Any",
            "attr": "when-load"
        },
        "whenMeta": {
            "type": "Any",
            "attr": "when-meta"
        }
    }; }
    static get events() { return [{
            "name": "whenload",
            "method": "whenload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "whenmeta",
            "method": "whenmeta",
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
    static get style() { return "/**style-placeholder:nv-image:**/"; }
}
