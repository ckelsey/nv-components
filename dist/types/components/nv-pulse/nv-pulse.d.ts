import '../../stencil.core';
/**
 * @desc renders a pulse effect component
 */
export declare class NvPulse {
    /** @desc element that displays pulse effect */
    pulseBox: HTMLElement;
    /** @desc timer for pulse effect animation */
    pulseTimer: any;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc whether or not the color be the highlight color or gray */
    highlight: boolean;
    /** @desc starts the pulse animation */
    startPulse(): void;
    /** @desc stops the pulse animation */
    stopPulse(): void;
    /** @desc lifecycle hook, renders the element */
    render(): JSX.Element;
}
