import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders a styled switch component */
export declare class NvSwitch {
    /** @desc For accessibility a hidden switch input */
    nativeswitch: HTMLInputElement;
    /** @desc element that displays hover state */
    pulseBox: any;
    /** @desc element that displays ripple effect on check/uncheck */
    rippleBox: any;
    /** @desc containing element */
    container: HTMLElement;
    /**
     * @desc Whether or not component can update active states. default is false as this should be handled by controller
     * @example true
     */
    selfUpdate: boolean;
    /** @desc value for the switch */
    value: boolean | string;
    /** @desc text for the label */
    label: string;
    /** @desc whether or not the switch is disabled */
    disabled: boolean;
    /** @desc function that is called when the switch state changes */
    whenUpdate: Function;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc an event called when the switch state changes */
    change: EventEmitter;
    /** @desc determines the switch's tabIndex */
    readonly tabIndex: number;
    /** @desc toggles the switch's state */
    toggle(): boolean;
    /**
     * @desc handles the enter key press
     * @param e keyboard event
     */
    keyPress(e: KeyboardEvent): void;
    /** @desc handles hover state */
    mouseOverBox(): void;
    /** @desc handles hover leave state */
    mouseLeaveBox(): void;
    /** @desc handles click and updates state */
    onClick(): void;
    /** @desc renders the element */
    render(): JSX.Element;
}
