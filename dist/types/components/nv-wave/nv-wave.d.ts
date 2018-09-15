import '../../stencil.core';
/** @desc renders a wave effect component */
export declare class NvWave {
    /** @desc component element */
    element: HTMLElement;
    /** @desc element that displays wave effect */
    waveBox: HTMLElement;
    /** @desc timer for wave effect animation */
    waveTimer: any;
    highlight: boolean;
    reset(): void;
    doWave(e?: any): Promise<{}>;
    doPulse(): void;
    startWave(e?: any): Promise<{}>;
    stopWave(e?: any): Promise<{}>;
    /** @desc renders the element */
    render(): JSX.Element;
}
