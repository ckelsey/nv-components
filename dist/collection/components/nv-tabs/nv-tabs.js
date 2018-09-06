/** @desc renders tabs to be used with nv-tab-content */
export class NvTabs {
    constructor() {
        /** @desc initial tab to open */
        this.initial = 0;
    }
    /** @desc activate a tab */
    doActivating(tab, index) {
        if (!tab || !tab.parentElement) {
            return false;
        }
        clearTimeout(this.activeTimer);
        this.stopPulsing();
        const id = this.element.getAttribute(`tab-id`);
        const tabs = tab.parentElement.children;
        const tabContent = document.body.querySelector(`nv-tab-content[tab-id="${id}"] .nv-tabs-content`);
        if (!tabContent) {
            return false;
        }
        const activeContent = tabContent.children[index];
        const box = tab.getBoundingClientRect();
        const parentBox = this.element.getBoundingClientRect();
        if (!activeContent) {
            return;
        }
        for (let i = 0; i < tabContent.children.length; i++) {
            if (tabContent.children[i]) {
                if (activeContent && activeContent === tabContent.children[i]) {
                    tabContent.children[i].classList.add(`nv-tab-activating`);
                }
                else {
                    tabContent.children[i].classList.remove(`nv-tab-activating`);
                    tabContent.children[i].classList.remove(`nv-tab-active`);
                }
            }
        }
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i]) {
                if (tab === tabs[i]) {
                    tabs[i].classList.add(`nv-tab-activating`);
                }
                else {
                    tabs[i].classList.remove(`nv-tab-activating`);
                    tabs[i].classList.remove(`nv-tab-active`);
                }
            }
        }
        if (!tab || !this.container) {
            return;
        }
        tab.classList.add(`nv-tab-activating`);
        this.container.classList.add(`nv-tabs-activating`);
        this.activeIndicator.classList.add('nv-tabs-activating');
        this.activeIndicator.style.width = `${box.width}px`;
        this.activeIndicator.style.left = `${box.left - parentBox.left}px`;
        this.activeTimer = setTimeout(() => {
            clearTimeout(this.activeTimer);
            if (!activeContent || !tab || !this.activeIndicator || !this.container) {
                return;
            }
            this.activeIndicator.classList.remove('nv-tabs-activating');
            this.container.classList.remove(`nv-tabs-activating`);
            tab.classList.remove(`nv-tab-activating`);
            tab.classList.add(`nv-tab-active`);
            activeContent.classList.remove(`nv-tab-activating`);
            activeContent.classList.add(`nv-tab-active`);
        }, 3000);
    }
    /** @desc do ripple animation */
    doRipple(tab, e) {
        const box = tab.getBoundingClientRect();
        const ripple = tab.querySelector(`.nv-tabs-active-ripple`);
        const ripple2 = tab.querySelector(`.nv-tabs-active-ripple2`);
        if (ripple && ripple2) {
            if (!e) {
                ripple.style.removeProperty(`top`);
                ripple.style.removeProperty(`left`);
            }
            else {
                const left = ((e.pageX - box.left) / box.width) * 100;
                const top = ((e.pageY - box.top) / box.height) * 100;
                ripple.style.top = `${top}%`;
                ripple.style.left = `${left}%`;
                ripple2.style.top = `${top}%`;
                ripple2.style.left = `${left}%`;
            }
        }
        tab.classList.add(`nv-tab-rippling`);
        setTimeout(() => {
            tab.classList.remove(`nv-tab-rippling`);
        }, 300);
    }
    /** @desc start pulsing animation */
    doPulsing(tab) {
        if (!tab) {
            return;
        }
        tab.classList.add(`nv-tab-pulsing-start`);
        setTimeout(() => {
            if (!tab) {
                return;
            }
            tab.classList.add(`nv-tab-pulsing`);
        }, 300);
    }
    /** @desc end pulsing animation */
    stopPulsing() {
        const pulsing = this.container.querySelectorAll(`.nv-tab-pulsing`);
        for (let i = 0; i < pulsing.length; i++) {
            const tab = pulsing[i];
            if (!tab) {
                return;
            }
            tab.classList.remove(`nv-tab-pulsing`);
            setTimeout(() => {
                if (!tab) {
                    return;
                }
                tab.classList.remove(`nv-tab-pulsing-start`);
            }, 300);
        }
    }
    /** @desc opens a tab */
    openTab(tab, e) {
        if (!tab || !tab.parentElement) {
            return false;
        }
        const index = Array.prototype.indexOf.call(tab.parentElement.children, tab);
        this.doActivating(tab, index);
        this.doRipple(tab, e);
    }
    /** @desc sets up the slot content */
    initTabs() {
        const children = this.container.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child && !child.classList.contains(`nv-tab`)) {
                child.classList.add(`nv-tab`);
                const activeTabIndicator = document.createElement(`div`);
                activeTabIndicator.classList.add(`nv-tabs-active-tab-indicator`);
                child.appendChild(activeTabIndicator);
                const ripple = document.createElement(`div`);
                ripple.classList.add(`nv-tabs-active-ripple`);
                child.appendChild(ripple);
                const ripple2 = document.createElement(`div`);
                ripple2.classList.add(`nv-tabs-active-ripple2`);
                child.appendChild(ripple2);
                child.setAttribute(`tabindex`, `0`);
                child.classList.add(`nv-tab`);
                child.addEventListener(`mousedown`, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.openTab(child, e);
                });
                child.addEventListener(`focus`, () => {
                    this.doPulsing(child);
                    const listenForEnter = (e) => {
                        if (e.key === `Enter`) {
                            this.stopPulsing();
                            this.openTab(child);
                        }
                    };
                    const blur = () => {
                        this.stopPulsing();
                        child.removeEventListener(`keypress`, listenForEnter);
                        child.removeEventListener(`blur`, blur);
                    };
                    listenForEnter.bind(this);
                    window.addEventListener(`click`, blur);
                    child.addEventListener(`keypress`, listenForEnter);
                    child.addEventListener(`blur`, blur);
                });
            }
        }
    }
    /** @desc intializes the content */
    init() {
        if (!this.container) {
            return;
        }
        let initial = this.initial;
        const children = this.container.children;
        if (!initial || !children[initial]) {
            initial = 0;
        }
        this.container.classList.add(`nv-tabs-ready`);
        this.container.classList.add(`nv-tabs-tabs`);
        this.openTab(children[this.initial || 0]);
    }
    /** @desc sets the tab classes */
    setClasses() {
        if (!this.container) {
            return;
        }
        if (this.element && this.element.getAttribute(`center`)) {
            this.container.classList.add(`nv-tabs-center`);
        }
        else {
            this.container.classList.remove(`nv-tabs-center`);
        }
    }
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.setClasses();
        this.initTabs();
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.setClasses();
        this.initTabs();
        requestAnimationFrame(() => {
            this.init();
        });
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (h("div", { class: "nv-tabs-wrapper" },
            h("div", { class: "nv-tabs", ref: (el) => this.container = el },
                h("slot", null)),
            h("div", { ref: (el) => this.activeIndicator = el, class: "active-indicator" })));
    }
    static get is() { return "nv-tabs"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "initial": {
            "type": Number,
            "attr": "initial"
        }
    }; }
    static get style() { return "/**style-placeholder:nv-tabs:**/"; }
}
