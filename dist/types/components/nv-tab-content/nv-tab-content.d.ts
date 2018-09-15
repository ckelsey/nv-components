import '../../stencil.core';
/**
 * @desc renders tab content to be used with nv-tabs
 * @example <div><nv-tabs tab-id="demo-tabs"><div>tab 1</div><div>tab 2</div><div>tab 3</div></nv-tabs></div><div><nv-tab-content tab-id="demo-tabs"><div>tab 1 content</div><div>tab 2 content</div><div>tab 3 content</div></nv-tab-content></div>
 * @yield slot
 */
export declare class NvTabContent {
    /** @desc container element */
    container: HTMLElement;
    /** @desc component element */
    element: HTMLElement;
    /** @desc sets up the slot content */
    initTabs(): void;
    /** @desc lifecycle hook for when component is updates */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
