/*! Built with http://stenciljs.com */
import { h } from './nvcomponents.core.js';
/**
 * round
 * center
 * spinner
 */
var NvProgress = /** @class */ (function () {
    function NvProgress() {
        this.animate = true;
        this.barPositions = {
            scale: 0,
            left: 0
        };
        this.timer = "requestAnimationFrame";
        this.state = "determinate";
        this.type = "bar";
        this.message = "";
        this.showCount = false;
        this.value = 0;
        this.start = 0;
        this.speed = 1;
    }
    NvProgress.prototype.reset = function () {
        this.animate = false;
        cancelAnimationFrame(this.animator);
        clearTimeout(this.animator);
        this.animateScale();
    };
    Object.defineProperty(NvProgress.prototype, "_start", {
        get: function () {
            return isNaN(this.start) ? 0 : this.start / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvProgress.prototype, "_value", {
        get: function () {
            var value = ((isNaN(this.value) ? 0 : this.value / 100) * (1 - (this._start / 1))) + this._start;
            value = value > 1 ? 1 : value < 0 ? 0 : value;
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvProgress.prototype, "_speed", {
        get: function () {
            return this.speed || 1;
        },
        enumerable: true,
        configurable: true
    });
    NvProgress.prototype.easeArray = function (startValue, endValue, frames) {
        if (startValue === endValue) {
            return [];
        }
        var valueIncrement = (endValue - startValue) / frames;
        var sinValueIncrement = Math.PI / frames;
        var currentValue = startValue;
        var currentSinValue = 0;
        var results = [];
        function step() {
            currentSinValue += sinValueIncrement;
            currentValue += valueIncrement * (Math.pow(Math.sin(currentSinValue), 2)) * 2;
            if (currentSinValue < Math.PI) {
                results.push(Math.round(currentValue * 10000) / 10000);
                return step();
            }
            else {
                return results;
            }
        }
        return step();
    };
    NvProgress.prototype.updateBarPositions = function () {
        var _this = this;
        cancelAnimationFrame(this.animator);
        clearTimeout(this.animator);
        if (!this.animate || (this.previousState && this.previousState !== this.state)) {
            return;
        }
        this.previousState === this.state;
        var scale = 0;
        var left = 0;
        if (this.state === "indeterminate") {
            scale = this.barPositions.scale + (0.005 * this._speed);
            left = this.barPositions.left + this._speed;
            if (left > 110) {
                left = -10;
                scale = 0.05;
            }
            if (left > 60) {
                scale = this.barPositions.scale - (0.007 * this._speed);
            }
        }
        else {
            scale = this.barPositions.scale + ((this._value - this.barPositions.scale) / 20);
            left = this.barPositions.left - (this._speed * 1.38);
            if (left < 0) {
                left = 0;
            }
            if (scale < 0) {
                scale = 0;
            }
            if (scale > 1) {
                scale = 1;
            }
            if (scale < this.barPositions.scale) {
                scale = this.barPositions.scale;
            }
        }
        this.update(scale, left);
        if (!this.timer || this.timer === "requestAnimationFrame") {
            this.animator = requestAnimationFrame(function () {
                _this.updateBarPositions();
            });
        }
        else {
            this.animator = setTimeout(function () {
                _this.updateBarPositions();
            }, 16);
        }
    };
    NvProgress.prototype.update = function (scale, left) {
        if (this.countElement) {
            if ((!this.previousState || this.previousState === "determinate") && (!this.state || this.state === "determinate")) {
                this.countElement.textContent = Math.round(Math.max(scale, this._value) * 100) + "%";
            }
            else {
                this.countElement.textContent = "";
            }
        }
        this.barElement.style.transformOrigin = left + "% 50%";
        this.barElement.style.transform = "scale3d(" + scale + ",1,1)";
        this.barPositions = { scale: scale, left: left };
    };
    NvProgress.prototype.animateScale = function () {
        var _this = this;
        var scaleEasingArray = this.easeArray(this.barPositions.scale, this._value, 30 * this._speed);
        var animate = function () {
            if (!scaleEasingArray.length) {
                _this.previousState = _this.state;
                _this.animate = true;
                return _this.updateBarPositions();
            }
            _this.update(scaleEasingArray.shift(), 0);
            if (!_this.timer || _this.timer === "requestAnimationFrame") {
                requestAnimationFrame(function () {
                    animate();
                });
            }
            else {
                setTimeout(function () {
                    animate();
                }, 16);
            }
        };
        animate();
    };
    NvProgress.prototype.animateToDeterminate = function () {
        var _this = this;
        var leftEasingArray = this.easeArray(this.barPositions.left, 0, 30 * this._speed);
        var scaleEasingArray = this.easeArray(this.barPositions.scale, this._value, 30 * this._speed);
        var animate = function () {
            if (!scaleEasingArray.length || !leftEasingArray.length) {
                _this.previousState = _this.state;
                _this.animate = true;
                return _this.updateBarPositions();
            }
            _this.update(scaleEasingArray.shift(), leftEasingArray.shift());
            if (!_this.timer || _this.timer === "requestAnimationFrame") {
                requestAnimationFrame(function () {
                    animate();
                });
            }
            else {
                setTimeout(function () {
                    animate();
                }, 16);
            }
        };
        animate();
    };
    NvProgress.prototype.componentDidUpdate = function () {
        if (this.previousState !== this.state) {
            if (this.animate) {
                this.animate = false;
                cancelAnimationFrame(this.animator);
                clearTimeout(this.animator);
                if (this.previousState === "indeterminate") {
                    return this.animateToDeterminate();
                }
                if (this.state === "indeterminate") {
                    this.animate = true;
                    this.previousState = this.state;
                    this.updateBarPositions();
                    return;
                }
            }
            return;
        }
        this.animate = true;
        this.previousState = this.state;
        this.updateBarPositions();
    };
    NvProgress.prototype.componentDidLoad = function () {
        this.animate = true;
        this.previousState = this.state;
        this.updateBarPositions();
    };
    NvProgress.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "nv-progress" }, (this.message && this.message.trim() !== "") || this.showCount ?
            h("div", { class: "nv-progress-text" }, this.message && this.message.trim() !== "" ? h("div", { class: "nv-progress-message", innerHTML: this.message }) : "", this.showCount ? h("div", { class: "nv-progress-count", ref: function (el) { return _this.countElement = el; } }) : "")
            :
                "", h("div", { class: "nv-progress-bar" }, h("div", { class: "nv-progress-bar-inner", ref: function (el) { return _this.barElement = el; } }))));
    };
    Object.defineProperty(NvProgress, "is", {
        get: function () { return "nv-progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvProgress, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvProgress, "properties", {
        get: function () {
            return {
                "element": {
                    "elementRef": true
                },
                "message": {
                    "type": String,
                    "attr": "message"
                },
                "reset": {
                    "method": true
                },
                "showCount": {
                    "type": Boolean,
                    "attr": "show-count"
                },
                "speed": {
                    "type": Number,
                    "attr": "speed"
                },
                "start": {
                    "type": Number,
                    "attr": "start"
                },
                "state": {
                    "type": String,
                    "attr": "state"
                },
                "timer": {
                    "type": String,
                    "attr": "timer"
                },
                "type": {
                    "type": String,
                    "attr": "type"
                },
                "value": {
                    "type": Number,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvProgress, "style", {
        get: function () { return "\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled.sc-nv-progress {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled.sc-nv-progress   *.sc-nv-progress {\n    pointer-events: none; }\n\n.sc-nv-progress-h {\n  width: 100%;\n  height: auto;\n  display: block; }\n\n.nv-progress.sc-nv-progress {\n  width: 100%;\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  line-height: 1.4em;\n  color: rgba(255, 255, 255, 0.75); }\n  .nv-progress.sc-nv-progress   .nv-progress-text.sc-nv-progress {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 10px; }\n    .nv-progress.sc-nv-progress   .nv-progress-text.sc-nv-progress   .nv-progress-message.sc-nv-progress {\n      margin-right: 10px; }\n  .nv-progress.sc-nv-progress   .nv-progress-bar.sc-nv-progress {\n    width: 0%;\n    height: 5px;\n    background: transparent;\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    background: rgba(255, 255, 255, 0.05);\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .nv-progress.sc-nv-progress   .nv-progress-bar.sc-nv-progress   .nv-progress-bar-inner.sc-nv-progress {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      background: #76b900;\n      -webkit-transform-origin: 0% 100%;\n      transform-origin: 0% 100%;\n      -webkit-transform: scale3d(0, 1, 1);\n      transform: scale3d(0, 1, 1);\n      -webkit-transition: left 1s;\n      transition: left 1s; }\n"; },
        enumerable: true,
        configurable: true
    });
    return NvProgress;
}());
export { NvProgress };
