import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class NvCheckbox {
    nativeCheckbox: HTMLInputElement;
    hoverBox: HTMLElement;
    rippleBox: HTMLElement;
    container: HTMLElement;
    pulseTimer: any;
    rippleTimer: any;
    value: boolean | string;
    label: string;
    disabled: boolean;
    parentDisabled: boolean;
    whenUpdate: Function;
    element: HTMLElement;
    change: EventEmitter;
    readonly state: "indeterminate_check_box" | "check_box" | "check_box_outline_blank";
    readonly tabIndex: 0 | -1;
    toggle(): boolean;
    keyPress(e: KeyboardEvent): void;
    mouseOverBox(): void;
    onClick(): void;
    mouseLeaveBox(): void;
    render(): JSX.Element;
}
