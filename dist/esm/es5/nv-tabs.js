/*! Built with http://stenciljs.com */
import { h } from './nvcomponents.core.js';
var NvTabs = /** @class */ (function () {
    function NvTabs() {
    }
    NvTabs.prototype.doActivating = function (tab, index) {
        var _this = this;
        if (!tab || !tab.parentElement) {
            return false;
        }
        clearTimeout(this.activeTimer);
        this.stopPulsing();
        var id = this.element.getAttribute("tab-id");
        var tabs = tab.parentElement.children;
        var tabContent = document.body.querySelector("nv-tab-content[tab-id=\"" + id + "\"] .nv-tabs-content");
        if (!tabContent) {
            return false;
        }
        var activeContent = tabContent.children[index];
        var box = tab.getBoundingClientRect();
        var parentBox = this.element.getBoundingClientRect();
        if (!activeContent) {
            return;
        }
        for (var i = 0; i < tabContent.children.length; i++) {
            if (activeContent && activeContent === tabContent.children[i]) {
                tabContent.children[i].classList.add("nv-tab-activating");
            }
            else {
                tabContent.children[i].classList.remove("nv-tab-activating");
                tabContent.children[i].classList.remove("nv-tab-active");
            }
        }
        for (var i = 0; i < tabs.length; i++) {
            if (tab === tabs[i]) {
                tabs[i].classList.add("nv-tab-activating");
            }
            else {
                tabs[i].classList.remove("nv-tab-activating");
                tabs[i].classList.remove("nv-tab-active");
            }
        }
        tab.classList.add("nv-tab-activating");
        this.container.classList.add("nv-tabs-activating");
        this.activeIndicator.classList.add('nv-tabs-activating');
        this.activeIndicator.style.width = box.width + "px";
        this.activeIndicator.style.left = box.left - parentBox.left + "px";
        this.activeTimer = setTimeout(function () {
            clearTimeout(_this.activeTimer);
            _this.activeIndicator.classList.remove('nv-tabs-activating');
            _this.container.classList.remove("nv-tabs-activating");
            tab.classList.remove("nv-tab-activating");
            tab.classList.add("nv-tab-active");
            activeContent.classList.remove("nv-tab-activating");
            activeContent.classList.add("nv-tab-active");
        }, 3000);
    };
    NvTabs.prototype.doRipple = function (tab, e) {
        var box = tab.getBoundingClientRect();
        var ripple = tab.querySelector(".nv-tabs-active-ripple");
        var ripple2 = tab.querySelector(".nv-tabs-active-ripple2");
        if (ripple && ripple2) {
            if (!e) {
                ripple.style.removeProperty("top");
                ripple.style.removeProperty("left");
            }
            else {
                var left = ((e.pageX - box.left) / box.width) * 100;
                var top = ((e.pageY - box.top) / box.height) * 100;
                ripple.style.top = top + "%";
                ripple.style.left = left + "%";
                ripple2.style.top = top + "%";
                ripple2.style.left = left + "%";
            }
        }
        tab.classList.add("nv-tab-rippling");
        setTimeout(function () {
            tab.classList.remove("nv-tab-rippling");
        }, 300);
    };
    NvTabs.prototype.doPulsing = function (tab) {
        tab.classList.add("nv-tab-pulsing-start");
        setTimeout(function () {
            tab.classList.add("nv-tab-pulsing");
        }, 300);
    };
    NvTabs.prototype.stopPulsing = function () {
        var pulsing = this.container.querySelectorAll(".nv-tab-pulsing");
        var _loop_1 = function (i) {
            var tab = pulsing[i];
            tab.classList.remove("nv-tab-pulsing");
            setTimeout(function () {
                tab.classList.remove("nv-tab-pulsing-start");
            }, 300);
        };
        for (var i = 0; i < pulsing.length; i++) {
            _loop_1(i);
        }
    };
    NvTabs.prototype.openTab = function (tab, e) {
        if (!tab || !tab.parentElement) {
            return false;
        }
        var index = Array.prototype.indexOf.call(tab.parentElement.children, tab);
        this.doActivating(tab, index);
        this.doRipple(tab, e);
    };
    NvTabs.prototype.initTabs = function () {
        var _this = this;
        var children = this.container.children;
        var _loop_2 = function (i) {
            var child = children[i];
            if (!child.classList.contains("nv-tab")) {
                child.classList.add("nv-tab");
                var activeTabIndicator = document.createElement("div");
                activeTabIndicator.classList.add("nv-tabs-active-tab-indicator");
                child.appendChild(activeTabIndicator);
                var ripple = document.createElement("div");
                ripple.classList.add("nv-tabs-active-ripple");
                child.appendChild(ripple);
                var ripple2 = document.createElement("div");
                ripple2.classList.add("nv-tabs-active-ripple2");
                child.appendChild(ripple2);
                child.setAttribute("tabindex", "0");
                child.classList.add("nv-tab");
                child.addEventListener("mousedown", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    _this.openTab(child, e);
                });
                child.addEventListener("focus", function () {
                    _this.doPulsing(child);
                    var listenForEnter = function (e) {
                        if (e.key === "Enter") {
                            _this.stopPulsing();
                            _this.openTab(child);
                        }
                    };
                    var blur = function () {
                        _this.stopPulsing();
                        child.removeEventListener("keypress", listenForEnter);
                        child.removeEventListener("blur", blur);
                    };
                    listenForEnter.bind(_this);
                    window.addEventListener("click", blur);
                    child.addEventListener("keypress", listenForEnter);
                    child.addEventListener("blur", blur);
                });
            }
        };
        for (var i = 0; i < children.length; i++) {
            _loop_2(i);
        }
    };
    NvTabs.prototype.init = function () {
        var initial = this.initial;
        var children = this.container.children;
        if (!initial || !children[initial]) {
            initial = 0;
        }
        this.container.classList.add("nv-tabs-ready");
        this.container.classList.add("nv-tabs-tabs");
        this.openTab(children[this.initial || 0]);
    };
    NvTabs.prototype.setClasses = function () {
        if (this.element && this.element.getAttribute("center")) {
            this.container.classList.add("nv-tabs-center");
        }
        else {
            this.container.classList.remove("nv-tabs-center");
        }
    };
    NvTabs.prototype.componentDidUpdate = function () {
        this.setClasses();
        this.initTabs();
    };
    NvTabs.prototype.componentDidLoad = function () {
        var _this = this;
        this.setClasses();
        this.initTabs();
        requestAnimationFrame(function () {
            _this.init();
        });
    };
    NvTabs.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "nv-tabs-wrapper" }, h("div", { class: "nv-tabs", ref: function (el) { return _this.container = el; } }, h("slot", null)), h("div", { ref: function (el) { return _this.activeIndicator = el; }, class: "active-indicator" })));
    };
    Object.defineProperty(NvTabs, "is", {
        get: function () { return "nv-tabs"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvTabs, "properties", {
        get: function () {
            return {
                "element": {
                    "elementRef": true
                },
                "initial": {
                    "type": Number,
                    "attr": "initial"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvTabs, "style", {
        get: function () { return "\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Italic.ttf) format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n\@font-face {\n  font-family: \"Roboto\";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf) format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n\@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@keyframes fadeInOut {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.5; }\n  60% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0.0; } }\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@keyframes fade {\n  from {\n    opacity: 0.24; } }\n\n\@-webkit-keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@keyframes pulsing {\n  from {\n    opacity: 0.05;\n    -webkit-transform: scale3d(2, 2, 2);\n    transform: scale3d(2, 2, 2); } }\n\n\@-webkit-keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@keyframes pulsingLight {\n  to {\n    opacity: 0.2;\n    -webkit-transform: scale3d(1.2, 1.2, 1.2);\n    transform: scale3d(1.2, 1.2, 1.2); } }\n\n\@-webkit-keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n\@keyframes pulsingLighter {\n  from {\n    opacity: 0.1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); } }\n\n.nv-component-disabled {\n  opacity: 0.3;\n  pointer-events: none; }\n  .nv-component-disabled * {\n    pointer-events: none; }\n\n:host {\n  width: 100%;\n  height: auto;\n  display: block; }\n\n.nv-tabs-wrapper {\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block; }\n  .nv-tabs-wrapper .nv-tabs {\n    display: none;\n    opacity: 0;\n    position: relative;\n    outline: none !important;\n    font-size: 14px;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: normal;\n    line-height: 1.4em;\n    color: rgba(255, 255, 255, 0.75); }\n    .nv-tabs-wrapper .nv-tabs.nv-tabs-ready {\n      opacity: 1;\n      display: block; }\n    .nv-tabs-wrapper .nv-tabs.nv-tabs-tabs {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-pack: start;\n      -ms-flex-pack: start;\n      justify-content: flex-start; }\n      .nv-tabs-wrapper .nv-tabs.nv-tabs-tabs.nv-tabs-center {\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center; }\n    .nv-tabs-wrapper .nv-tabs .nv-tab {\n      position: relative;\n      cursor: pointer;\n      padding: 12px 24px;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      opacity: 0.625;\n      outline: none !important;\n      overflow: hidden;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      white-space: nowrap;\n      -ms-flex-negative: 0;\n      flex-shrink: 0;\n      line-height: 2em;\n      -webkit-transition: opacity 0.2s ease-in-out;\n      transition: opacity 0.2s ease-in-out; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab .nv-tabs-active-ripple,\n      .nv-tabs-wrapper .nv-tabs .nv-tab .nv-tabs-active-ripple2 {\n        width: 40px;\n        height: 40px;\n        margin: -20px;\n        top: calc(50% - 20px);\n        left: calc(50% - 20px);\n        opacity: 0;\n        position: absolute;\n        -webkit-transform: scale3d(0, 0, 0);\n        transform: scale3d(0, 0, 0);\n        -webkit-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n        -webkit-transition: margin 0.5s ease-in-out 0.4s, opacity .4s ease-in-out, -webkit-transform .4s ease-in-out 0.2s;\n        transition: margin 0.5s ease-in-out 0.4s, opacity .4s ease-in-out, -webkit-transform .4s ease-in-out 0.2s;\n        transition: margin 0.5s ease-in-out 0.4s, transform .4s ease-in-out 0.2s, opacity .4s ease-in-out;\n        transition: margin 0.5s ease-in-out 0.4s, transform .4s ease-in-out 0.2s, opacity .4s ease-in-out, -webkit-transform .4s ease-in-out 0.2s;\n        pointer-events: none;\n        border-radius: 50%;\n        background: radial-gradient(circle at center, #76b900 80%, rgba(118, 185, 0, 0) 80%); }\n      .nv-tabs-wrapper .nv-tabs .nv-tab .nv-tabs-active-ripple2 {\n        width: 30px;\n        height: 30px;\n        margin: -15px;\n        top: calc(50% - 15px);\n        left: calc(50% - 15px);\n        -webkit-transition: margin 0.5s ease-in-out, opacity .5s ease-in-out, -webkit-transform .5s ease-in-out 0.5s;\n        transition: margin 0.5s ease-in-out, opacity .5s ease-in-out, -webkit-transform .5s ease-in-out 0.5s;\n        transition: margin 0.5s ease-in-out, transform .5s ease-in-out 0.5s, opacity .5s ease-in-out;\n        transition: margin 0.5s ease-in-out, transform .5s ease-in-out 0.5s, opacity .5s ease-in-out, -webkit-transform .5s ease-in-out 0.5s; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab .nv-tabs-active-tab-indicator {\n        position: absolute;\n        height: 2px;\n        background: #76b900;\n        width: 100%;\n        pointer-events: none;\n        bottom: 0px;\n        opacity: 0; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab:hover {\n        opacity: 0.75; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-rippling, .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-pulsing, .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-activating, .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-active {\n        opacity: 1; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-active {\n        -webkit-animation: ripple 2s ease-in-out;\n        animation: ripple 2s ease-in-out; }\n        .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-active .nv-tabs-active-tab-indicator {\n          opacity: 1; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-pulsing-start .nv-tabs-active-ripple {\n        opacity: 0.03;\n        -webkit-transform: scale3d(1.8, 1.8, 1.8);\n        transform: scale3d(1.8, 1.8, 1.8);\n        -webkit-transition: all .4s;\n        transition: all .4s;\n        top: calc(50% - 20px) !important;\n        left: calc(50% - 20px) !important;\n        margin: 0px;\n        background: radial-gradient(circle at center, rgba(255, 255, 255, 0.75) 80%, rgba(255, 255, 255, 0) 80%); }\n      .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-pulsing .nv-tabs-active-ripple {\n        -webkit-animation-name: pulsing;\n        animation-name: pulsing;\n        -webkit-animation-duration: 1.2s;\n        animation-duration: 1.2s;\n        -webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n        -webkit-animation-direction: alternate;\n        animation-direction: alternate; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-rippling .nv-tabs-active-ripple {\n        opacity: 0.05;\n        -webkit-transform: scale3d(5, 5, 5);\n        transform: scale3d(5, 5, 5);\n        -webkit-transition: opacity .4s ease-in-out, -webkit-transform .4s ease-in-out 0s;\n        transition: opacity .4s ease-in-out, -webkit-transform .4s ease-in-out 0s;\n        transition: transform .4s ease-in-out 0s, opacity .4s ease-in-out;\n        transition: transform .4s ease-in-out 0s, opacity .4s ease-in-out, -webkit-transform .4s ease-in-out 0s; }\n      .nv-tabs-wrapper .nv-tabs .nv-tab.nv-tab-rippling .nv-tabs-active-ripple2 {\n        opacity: 0.025;\n        -webkit-transform: scale3d(3, 3, 3);\n        transform: scale3d(3, 3, 3);\n        -webkit-transition: opacity .5s ease-in-out, -webkit-transform .5s ease-in-out 0s;\n        transition: opacity .5s ease-in-out, -webkit-transform .5s ease-in-out 0s;\n        transition: transform .5s ease-in-out 0s, opacity .5s ease-in-out;\n        transition: transform .5s ease-in-out 0s, opacity .5s ease-in-out, -webkit-transform .5s ease-in-out 0s; }\n  .nv-tabs-wrapper .active-indicator {\n    position: absolute;\n    height: 2px;\n    background: #76b900;\n    width: 0%;\n    pointer-events: none;\n    bottom: 0px;\n    -webkit-transition: left 0.2s ease-in-out, width 0.3s ease-in-out;\n    transition: left 0.2s ease-in-out, width 0.3s ease-in-out;\n    opacity: 0; }\n    .nv-tabs-wrapper .active-indicator.nv-tabs-activating {\n      opacity: 1; }"; },
        enumerable: true,
        configurable: true
    });
    return NvTabs;
}());
export { NvTabs };
