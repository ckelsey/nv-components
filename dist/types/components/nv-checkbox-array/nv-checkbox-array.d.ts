import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class NvCheckboxArray {
    lastToggleState: boolean;
    values: any[];
    label: string;
    disabled: boolean;
    parentDisabled: boolean;
    whenUpdate: Function;
    element: HTMLElement;
    change: EventEmitter;
    readonly isDisabled: boolean;
    readonly groupState: boolean | "mixed";
    setGroupState(val: boolean, arr: any[]): any[];
    updateParent(): void;
    updateChild(data: any): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
