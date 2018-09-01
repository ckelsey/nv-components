/*! Built with http://stenciljs.com */
import { h } from './nvcomponents.core.js';
var NvImage = /** @class */ (function () {
    function NvImage() {
    }
    NvImage.prototype.imageError = function () {
        cancelAnimationFrame(this.timer);
        this.imageContainer.removeChild(this.img);
        this.img = null;
    };
    NvImage.prototype.imageLoaded = function () {
        if (this.imageContainer) {
            this.imageContainer.classList.add("loaded");
        }
    };
    NvImage.prototype.setDimensions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var getDimensions = function () {
                cancelAnimationFrame(_this.timer);
                if (!!_this.img.width && !!_this.img.height) {
                    var aspect = _this.img.height / _this.img.width;
                    _this.imageContainer.style.padding = aspect * 100 + "% 0px 0px";
                    if (_this.cover) {
                        if (_this.imageContainer.offsetHeight / _this.imageContainer.offsetWidth > aspect) {
                            _this.img.classList.add('scaleHeight');
                        }
                        else {
                            _this.img.classList.remove('scaleHeight');
                        }
                    }
                    return resolve({
                        width: _this.img.width,
                        height: _this.img.height
                    });
                }
                else {
                    _this.timer = requestAnimationFrame(function () {
                        getDimensions();
                    });
                }
            };
            getDimensions();
        });
    };
    NvImage.prototype.loadImage = function () {
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
    };
    NvImage.prototype.setFit = function () {
        if (this.cover) {
            this.imageContainer.classList.add("cover");
        }
        else {
            this.imageContainer.classList.remove("cover");
        }
    };
    NvImage.prototype.componentDidUpdate = function () {
        if (this.url && this.url !== this._src) {
            this.loadImage();
        }
        this.setFit();
    };
    NvImage.prototype.componentDidLoad = function () {
        this.loadImage();
        this.setFit();
    };
    NvImage.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "outer" }, h("div", { id: "nv-image", ref: function (el) { return _this.imageContainer = el; } })));
    };
    Object.defineProperty(NvImage, "is", {
        get: function () { return "nv-image"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvImage, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvImage, "properties", {
        get: function () {
            return {
                "cover": {
                    "type": Boolean,
                    "attr": "cover"
                },
                "url": {
                    "type": String,
                    "attr": "url"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvImage, "style", {
        get: function () { return "\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled.sc-nv-image {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled.sc-nv-image   *.sc-nv-image {\n    pointer-events: none; }\n\n.sc-nv-image-h {\n  width: 100%;\n  height: 100%;\n  display: inline-block; }\n\n.outer.sc-nv-image {\n  height: 100%;\n  width: 100%; }\n\n#nv-image.sc-nv-image {\n  display: inline-block;\n  width: 100%;\n  height: 0%;\n  background-image: url(\"../../assets/img/default.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 50% 0px 0px;\n  position: relative; }\n  #nv-image.cover.sc-nv-image {\n    padding: 0px !important;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    overflow: hidden; }\n    #nv-image.cover.sc-nv-image   img.sc-nv-image {\n      position: relative; }\n      #nv-image.cover.sc-nv-image   img.scaleHeight.sc-nv-image {\n        width: auto;\n        height: 100%; }\n  #nv-image.sc-nv-image   img.sc-nv-image {\n    position: absolute;\n    top: 0px;\n    height: auto;\n    width: 100%;\n    display: block; }\n"; },
        enumerable: true,
        configurable: true
    });
    return NvImage;
}());
export { NvImage };
