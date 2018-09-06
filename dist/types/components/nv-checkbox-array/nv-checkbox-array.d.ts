import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders an array of styled checkbox components */
export declare class NvCheckboxArray {
    /** @desc last toggle state of this array */
    lastToggleState: boolean;
    /** @desc an array of objects {values/value, label, disabled} to populate checkboxes with */
    values: any[];
    /** @desc label for parent checkbox */
    label: string;
    /** @desc whether or not the array is disabled */
    disabled: boolean;
    /** @desc if part of a checkbox array, whether or not the parent checkbox is disabled */
    parentDisabled: boolean;
    /** @desc function that is called when the checkbox state changes */
    whenUpdate: Function;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc an event called when the checkbox state changes */
    change: EventEmitter;
    /** @desc determines whether or not this array is didabled */
    readonly isDisabled: boolean;
    /** @desc determines the groups state based on child checkbox states */
    readonly groupState: boolean | string;
    /**
     * @desc sets all the childrens states
     * @param val value to set
     * @param children array of children
     */
    setGroupState(val: boolean, children: Array<any>): any[];
    /** @desc updates the parent array */
    updateParent(): void;
    /**
     * @desc update from a child checkbox
     * @param data data from child
     */
    updateChild(data: any): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
