import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders a styled slider component */
export declare class NvSlider {
    /** @desc For accessibility a hidden slider input */
    /** @desc element that displays hover state */
    pulseBox1: any;
    /** @desc element that displays hover state */
    pulseBox2: any;
    rippleBox1: any;
    rippleBox2: any;
    track: HTMLElement;
    ball1: HTMLElement;
    ball2: HTMLElement;
    trackContainer: HTMLElement;
    input1: HTMLInputElement;
    input2: HTMLInputElement;
    stepsElement: HTMLElement;
    mouseDownIndex: number;
    /** @desc containing element */
    container: HTMLElement;
    /**
     * @desc Whether or not component can update active states. default is false as this should be handled by controller
     * @example true
     */
    selfUpdate: boolean;
    /** @desc value for the slider */
    value: number | undefined;
    /** @desc values for the slider, indicates a range slider */
    values: Array<number> | string | undefined;
    showInput: boolean;
    step: number | undefined;
    /** @desc max value for the slider */
    max: number;
    /** @desc min value for the slider */
    min: number;
    /** @desc text for the label */
    label: string;
    /** @desc whether or not the slider is disabled */
    disabled: boolean;
    /** @desc function that is called when the slider state changes */
    whenUpdate: Function;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc an event called when the slider state changes */
    change: EventEmitter;
    readonly _value: number;
    readonly _values: Array<number>;
    /** @desc determines the slider's tabIndex */
    readonly tabIndex: number;
    /** @desc handles hover state */
    mouseOverBox(): void;
    /** @desc handles hover leave state */
    mouseLeaveBox(): void;
    updateValue(value: number, index: any): void;
    mouseMove(e: MouseEvent): void;
    mouseDown(e: MouseEvent): void;
    mouseUp(): void;
    inputUpdate(data: any, index: any): void;
    setSteps(): void;
    update(): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    /** @desc renders the element */
    render(): JSX.Element;
}
