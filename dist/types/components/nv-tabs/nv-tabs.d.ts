import '../../stencil.core';
/**
 * @desc renders tabs to be used with nv-tab-content
 * @example <div><nv-tabs tab-id="demo-tabs"><div>tab 1</div><div>tab 2</div><div>tab 3</div></nv-tabs></div><div><nv-tab-content tab-id="demo-tabs"><div>tab 1 content</div><div>tab 2 content</div><div>tab 3 content</div></nv-tab-content></div>
 * @yield slot
 */
export declare class NvTabs {
    /** @desc active bar element */
    activeIndicator: HTMLElement;
    wave: any;
    /** @desc animation timer */
    activeTimer: any;
    /** @desc initial tab to open */
    initial: number;
    /** @desc component element */
    element: HTMLElement;
    doOpen(index: number, e?: Event): boolean;
    checkWave(): void;
    setWave(tab: any): void;
    checkActiveIndicator(): void;
    openTab(tab: any, e?: any): boolean;
    setTabs(): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
