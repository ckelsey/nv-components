import '../../stencil.core';
/** @desc renders tab content to be used with nv-tabs */
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
