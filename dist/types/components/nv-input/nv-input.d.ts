import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders an input component */
export declare class NvInput {
    /** @desc the containing element */
    container: HTMLElement;
    /** @desc the input element */
    inputElement: any;
    /** @desc the menu element for options */
    menu: any;
    /** @desc the element for character count */
    characterCountElement: HTMLElement;
    /** @desc the element that is full width/height of the element */
    shape: HTMLElement;
    /** @desc Help text that briefly appears in the assistive text element */
    helpText: string;
    /**
     * @desc Whether or not component can update value. default is false as this should be handled by controller
     * @example true
     */
    selfUpdate: boolean;
    /** @desc value of the input */
    value: string | number;
    /** @desc type of input, either text or number */
    type: string;
    /** @desc classes to apply, currently supports small, transparent, center */
    classes: string;
    /** @desc label of the input */
    label: string;
    /** @desc icon to add to the left of the input */
    icon: string;
    /** @desc adds a clear button to the left of the input, used to clear the value */
    clear: boolean;
    /** @desc if there is an error in the value */
    error: boolean;
    /** @desc text to add to the bottom of the input */
    assistiveText: string;
    /** @desc whether or not to show character count text */
    characterCount: boolean;
    /** @desc whether or not the input should wrap and increase in height like a textarea element */
    multiline: boolean;
    /** @desc whether or not to filter the options list based on value */
    filterOptions: boolean;
    /** @desc an array of options to show, such as suggestions */
    options: Array<string | number> | string | undefined;
    /** @desc maximum of characters for text type or maximum value for number type */
    max: number | undefined;
    /** @desc minimum of characters for text type or minimum value for number type */
    min: number | undefined;
    /** @desc for number type, amount to increment value */
    step: number | undefined;
    /** @desc whether the input is required, set as a todo item */
    required: boolean;
    /** @desc a function to pass in to validate the value */
    validator: Function | undefined;
    /** @desc called when the value is updated */
    whenUpdate: Function | undefined;
    /** @desc called when the input is focused */
    whenFocus: Function | undefined;
    /** @desc called when the input loses focus */
    whenBlur: Function | undefined;
    /** @desc called when the input has an error */
    whenError: Function | undefined;
    /** @desc the component element */
    element: HTMLElement;
    /** @desc called when the value is updated */
    whenupdate: EventEmitter;
    /** @desc called when the value is updated */
    wheninput: EventEmitter;
    /** @desc called when the input is focused */
    whenfocus: EventEmitter;
    /** @desc called when the input loses focus */
    whenblur: EventEmitter;
    /** @desc called when the input is clicked */
    whenclick: EventEmitter;
    /** @desc called when the input has a keypress event */
    whenkeypress: EventEmitter;
    /** @desc called when the input has a keydown event */
    whenkeydown: EventEmitter;
    /** @desc called when the input has a keyup event */
    whenkeyup: EventEmitter;
    /** @desc called when the enter key is pressed */
    whensubmit: EventEmitter;
    /** @desc called when the input has an error */
    whenerror: EventEmitter;
    /** @desc returns the character count of the input */
    readonly characterCountText: any;
    /** @desc returns the old and new value as well as the component data */
    readonly updatedData: any;
    /** @desc returns the parsed options */
    readonly _options: (string | number)[];
    /** @desc returns the focused state */
    readonly isFocused: boolean;
    /** @desc focuses the input */
    doClick(): Promise<void>;
    /** @desc handles the input event */
    doInput(e?: Event): Promise<boolean>;
    /** @desc focuses the input */
    doFocus(): Promise<void>;
    /** @desc blurs the input */
    doBlur(): Promise<void>;
    /** @desc errors the input */
    doError(message: string): Promise<void>;
    /** @desc shrinks the input to the space the text takes up */
    shrink(): void;
    /** @desc clears the input value */
    clearValue(): void;
    /** @desc sets the state classes */
    setClasses(): void;
    /** @desc handles the click of an option  */
    optionClicked(index: number): Promise<void>;
    /** @desc sets the height of a multiline input */
    setHeight(): void;
    /** @desc updates the input */
    update(): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
