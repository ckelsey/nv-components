import '../../stencil.core';
/** @desc renders a ripple effect component */
export declare class NvRipple {
    /** @desc component element */
    element: HTMLElement;
    /** @desc element that displays ripple effect */
    rippleBox: HTMLElement;
    /** @desc timer for ripple effect animation */
    rippleTimer: any;
    highlight: boolean;
    doRipple(): Promise<{}>;
    startRipple(): Promise<{}>;
    stopRipple(): Promise<{}>;
    /** @desc renders the element */
    render(): JSX.Element;
}
