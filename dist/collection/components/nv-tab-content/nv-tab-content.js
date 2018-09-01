export class NvTabContent {
    initTabs() {
        const children = this.container.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.add(`nv-tab-content`);
        }
        this.container.classList.add(`nv-tabs-ready`);
    }
    componentDidUpdate() {
        this.initTabs();
    }
    componentDidLoad() {
        this.initTabs();
    }
    render() {
        return (h("div", { class: "nv-tabs-wrapper" },
            h("div", { class: "nv-tabs-content", ref: (el) => this.container = el },
                h("slot", null))));
    }
    static get is() { return "nv-tab-content"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        }
    }; }
    static get style() { return "/**style-placeholder:nv-tab-content:**/"; }
}
