import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * @desc renders a styled button
 * @yield slot
 */
export declare class NvButton {
    /** @desc the button element */
    button: HTMLElement;
    /** @desc The type of button, can be text, primary or undefined */
    type: string | undefined;
    /** @desc called when the button comes into focus */
    whenfocus: EventEmitter;
    /** @desc called when the button loses focus */
    whenblur: EventEmitter;
    /** @desc called when the button is clicked */
    whenclick: EventEmitter;
    /** @desc called when the button mousedown is triggered */
    whenmousedown: EventEmitter;
    /** @desc called when the button mouseup is triggered */
    whenmouseup: EventEmitter;
    /** @desc called when the button is hovered */
    whenmouseenter: EventEmitter;
    /** @desc called when the button loses hover */
    whenmouseleave: EventEmitter;
    /** @desc triggers hover */
    doMouseEnter(): Promise<void>;
    /** @desc triggers the loss of hover */
    doMouseLeave(): Promise<void>;
    /** @desc triggers click */
    doClick(): Promise<void>;
    /** @desc triggers focus */
    doFocus(): Promise<void>;
    /** @desc triggers the loss of focus */
    doBlur(): Promise<void>;
    /** @desc triggers mousedown */
    doMouseDown(): Promise<void>;
    /** @desc triggers mouseup */
    doMouseUp(): Promise<void>;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
