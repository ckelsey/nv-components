import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders a styled radio button component */
export declare class NvRadio {
    container: HTMLElement;
    _options: Array<any>;
    /**
     * @desc Whether or not component can update active states. default is false as this should be handled by controller
     * @example true
     */
    selfUpdate: boolean;
    /**
     * @example [{"value":1, "label": "option 1", "selected":false}, {"value":2, "label": "option 2", "selected":true}, {"value":3, "label": "option 3", "selected":false}]
     */
    options: Array<any> | string;
    /** @desc whether or not the component is disabled */
    disabled: boolean;
    /** @desc function that is called when the component state changes */
    whenUpdate: Function;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc an event called when the component state changes */
    change: EventEmitter;
    /** @desc determines the component's tabIndex */
    readonly tabIndex: number;
    createOption(option: any): any;
    createOptions(): void;
    /** @desc handles click and updates state */
    onClick(option: any): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    /** @desc renders the element */
    render(): JSX.Element;
}
