import '../../stencil.core';
/** @desc renders tabs to be used with nv-tab-content */
export declare class NvTabs {
    /** @desc container element */
    container: HTMLElement;
    /** @desc active bar element */
    activeIndicator: HTMLElement;
    /** @desc animation timer */
    activeTimer: any;
    /** @desc initial tab to open */
    initial: number;
    /** @desc component element */
    element: HTMLElement;
    /** @desc activate a tab */
    doActivating(tab: HTMLElement, index: number): boolean;
    /** @desc do ripple animation */
    doRipple(tab: HTMLElement, e?: MouseEvent): void;
    /** @desc start pulsing animation */
    doPulsing(tab: HTMLElement): void;
    /** @desc end pulsing animation */
    stopPulsing(): void;
    /** @desc opens a tab */
    openTab(tab: HTMLElement, e?: MouseEvent): boolean;
    /** @desc sets up the slot content */
    initTabs(): void;
    /** @desc intializes the content */
    init(): void;
    /** @desc sets the tab classes */
    setClasses(): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
