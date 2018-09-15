import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * @desc renders a tooltip
 * @yield slot
 * */
export declare class NvTootltip {
    /** @desc parent element */
    parent: HTMLElement;
    /** @desc container element */
    container: HTMLElement;
    /** @desc content element */
    content: HTMLElement;
    /** @desc content inner element */
    contentInner: HTMLElement;
    /** @desc content inner inner element */
    contentInnerInner: HTMLElement;
    /** @desc timer used to check dimensions */
    checkDimensionsTimer: any;
    /** @desc timer used when opening the tooltip */
    openTimer: any;
    /** @desc proxy reference to the trigger element */
    _triggerElement: HTMLElement;
    /** @desc proxy reference to the active property */
    _active: boolean;
    scrollPosition: number;
    /** @desc available position keywords */
    positions: string[];
    /** @desc component element */
    element: HTMLElement;
    /**
     * @desc padding to give the tooltip
     * @example ''
     */
    padding: number;
    width: string;
    /** @desc position of the tooltip */
    position: string;
    /** @desc whether or not the tooltip is shown */
    active: boolean;
    /**
     * @desc what event to trigger the tooltip on, when 'never' the tooltip relies on the active property to be updated
     * @example ''
    */
    triggerOn: string;
    /** @desc element to anchor the tooltip as well as what to set the tigger events to */
    triggerElement: HTMLElement | string;
    /**
     * @desc duration to hide the tooltip after
     * @example undefined
    */
    offset: number;
    /**
     * @example undefined
    */
    hideAfter: number;
    /**
     * @desc duration to delay showing the tooltip
     * @example undefined
     */
    delay: number;
    /** @desc whether or not to show a css box-shadow */
    boxShadow: boolean;
    /** @desc event when tooltip opens */
    whenOpened: EventEmitter;
    /** @desc event when tooltip closes */
    whenClosed: EventEmitter;
    /** @desc sets the dimensions of the tooltip */
    setDimensions(): void;
    /** @desc sets the position of the tooltip */
    setPositions(): void;
    /** @desc timer function that checks the dimensions/positions of the tooltip when active */
    checkDimensions(): void;
    /** @desc opens the tooltip */
    open(): void;
    /** @desc closes the tooltip */
    close(): void;
    /** @desc closes the tooltip if scrolled out of view */
    handleIntersect(entries: any): void;
    /** @desc triggers open */
    doOpen(): void;
    /** @desc triggers close */
    doClose(): void;
    /** @desc handles click outside of tooltip */
    doBodyClick(e: Event): void;
    /** @desc sets tooltip events */
    setEvents(): void;
    /** @desc removes tooltip events */
    removeEvents(): void;
    /** @desc updates the tooltip */
    update(): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    componentDidUnload(): void;
    /**
    * @desc replaces current html with the provided
    * @param html html to replace existing
    */
    updateInnerHTML(html: string): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
