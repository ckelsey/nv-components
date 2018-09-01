import '../../stencil.core';
export declare class NvTabs {
    container: HTMLElement;
    activeIndicator: HTMLElement;
    activeTimer: any;
    initial: number;
    element: HTMLElement;
    doActivating(tab: HTMLElement, index: number): boolean;
    doRipple(tab: HTMLElement, e?: MouseEvent): void;
    doPulsing(tab: HTMLElement): void;
    stopPulsing(): void;
    openTab(tab: HTMLElement, e?: MouseEvent): boolean;
    initTabs(): void;
    init(): void;
    setClasses(): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
