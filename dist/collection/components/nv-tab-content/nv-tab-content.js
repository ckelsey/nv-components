/**
 * @desc renders tab content to be used with nv-tabs
 * @example <div><nv-tabs tab-id="demo-tabs"><div>tab 1</div><div>tab 2</div><div>tab 3</div></nv-tabs></div><div><nv-tab-content tab-id="demo-tabs"><div>tab 1 content</div><div>tab 2 content</div><div>tab 3 content</div></nv-tab-content></div>
 * @yield slot
 */
export class NvTabContent {
    /** @desc sets up the slot content */
    initTabs() {
        const children = this.element.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (!child.getAttribute(`nv-tab-content`)) {
                child.setAttribute(`nv-tab-content`, i.toString());
                child.classList.add(`nv-tab-content`);
            }
        }
        this.element.classList.add(`nv-tabs-ready`);
    }
    /** @desc lifecycle hook for when component is updates */
    componentDidUpdate() {
        this.initTabs();
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.initTabs();
        const mutationObserver = new MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++) {
                if (mutations[i].type === `childList`) {
                    this.initTabs();
                    break;
                }
            }
        });
        mutationObserver.observe(this.element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (h("slot", null));
    }
    static get is() { return "nv-tab-content"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        }
    }; }
    static get style() { return "/**style-placeholder:nv-tab-content:**/"; }
}
