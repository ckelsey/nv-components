import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders a styled checkbox component */
export declare class NvCheckbox {
    /** @desc For accessibility a hidden checkbox input */
    nativeCheckbox: HTMLInputElement;
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
    /** @desc value for the checkbox */
    value: boolean | string;
    /** @desc text for the label */
    label: string;
    /** @desc whether or not the checkbox is disabled */
    disabled: boolean;
    /** @desc if part of a checkbox array, whether or not the parent checkbox is disabled */
    parentDisabled: boolean;
    /** @desc function that is called when the checkbox state changes */
    whenUpdate: Function;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc an event called when the checkbox state changes */
    whenupdate: EventEmitter;
    /** @desc determines the checkbox's state */
    readonly state: string;
    /** @desc determines the checkbox's tabIndex */
    readonly tabIndex: number;
    /** @desc toggles the checkbox's state */
    toggle(): Promise<boolean>;
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
