import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders a popup menu component */
export declare class NvMenu {
    /** @desc component container element */
    container: HTMLElement;
    /** @desc component tooltip element */
    tooltip: any;
    optionElements: Array<HTMLElement>;
    /** @desc component options proxy */
    _options: string[];
    /** @desc component anchor proxy */
    _anchor: HTMLElement;
    /** @desc component position proxy */
    _position: string;
    /** @desc component element */
    element: HTMLElement;
    /** @desc component element */
    focusedOption: number | undefined;
    /** @desc set width of menu */
    width: string;
    /**
     * @desc menu options, can be html
     * @example ''
     */
    options: string | Array<string>;
    /**
     * @desc position of the menu, bottom, top, left, right
     * @example ''
     */
    position: string;
    /** @desc whether or not the menu is open */
    active: boolean;
    /** @desc element or css selector string to element to anchor the menu to, defaults to self */
    anchor: string | HTMLElement;
    /** @desc function called when menu option is clicked */
    whenClicked: Function;
    /** @desc function called when menu is opened */
    whenActivated: Function;
    /** @desc function called when menu is closed */
    whenDeactivated: Function;
    /** @desc object of styles to apply to each option */
    optionStyles: string | {};
    /** @desc object of styles to apply to each option on hover */
    optionHoverStyles: string | {};
    /** @desc event for when menu option is clicked */
    whenOptionClicked: EventEmitter;
    /** @desc event for when menu is opened */
    whenOpened: EventEmitter;
    /** @desc event for when menu is closed */
    whenClosed: EventEmitter;
    /**
     * @desc handles menu option click event
     * @param e event
     */
    optionClick(e: Event): void;
    /** @desc updates the element properties and proxies */
    update(): void;
    /**
     * @desc handles mouseenter event of an option
     * @param el option element
     */
    mouseEnter(el: any): void;
    /**
     * @desc handles mouseleave event of an option
     * @param el option element
     */
    mouseLeave(el: any): void;
    /**
     * @desc focuses the option at the supplied index
     * @param index index of option
     */
    focusOption(index: number | string): void;
    /** @desc focuses the next option */
    focusNextOption(): void;
    /** @desc focuses the previous option */
    focusPreviousOption(): void;
    /** @desc clicks the option at the supplied index */
    selectOption(index: number | string): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
