import '../../stencil.core';
export declare class NvTootltip {
    parent: HTMLElement;
    container: HTMLElement;
    content: HTMLElement;
    isOpen: boolean;
    checkDimensionsTimer: any;
    openTimer: any;
    _active: boolean;
    element: HTMLElement;
    position: string;
    active: boolean;
    triggerOn: string;
    hideAfter: number;
    delay: number;
    setDimensions(): void;
    checkDimensions(): void;
    open(): void;
    close(): void;
    setPositions(): void;
    handleIntersect(entries: any): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
