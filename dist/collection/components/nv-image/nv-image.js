export class NvImage {
    imageError() {
        cancelAnimationFrame(this.timer);
        this.imageContainer.removeChild(this.img);
        this.img = null;
    }
    imageLoaded() {
        if (this.imageContainer) {
            this.imageContainer.classList.add(`loaded`);
        }
    }
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
    loadImage() {
        this.imageLoaded = this.imageLoaded.bind(this);
        this.imageError = this.imageError.bind(this);
        if (this.img) {
            this.imageContainer.removeChild(this.img);
            this.img = null;
        }
        this.img = new Image();
        this.imageContainer.appendChild(this.img);
        this.img.onload = this.imageLoaded;
        this.img.onerror = this.imageError;
        if (this.url) {
            this.img.src = this._src = this.url;
            this.setDimensions();
        }
    }
    setFit() {
        if (this.cover) {
            this.imageContainer.classList.add(`cover`);
        }
        else {
            this.imageContainer.classList.remove(`cover`);
        }
    }
    componentDidUpdate() {
        if (this.url && this.url !== this._src) {
            this.loadImage();
        }
        this.setFit();
    }
    componentDidLoad() {
        this.loadImage();
        this.setFit();
    }
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
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "/**style-placeholder:nv-image:**/"; }
}
