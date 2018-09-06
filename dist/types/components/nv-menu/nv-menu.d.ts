import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc renders a popup menu component */
export declare class NvMenu {
    /** @desc component container element */
    container: HTMLElement;
    /** @desc component tooltip element */
    tooltip: any;
    /** @desc component options proxy */
    _options: string[];
    /** @desc component anchor proxy */
    _anchor: HTMLElement;
    /** @desc component position proxy */
    _position: string;
    /** @desc component element */
    element: HTMLElement;
    /** @desc menu options, can be html */
    options: string | Array<string>;
    /** @desc position of the menu, bottom, top, left, right */
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
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
