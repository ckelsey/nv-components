import '../../stencil.core';
/**
 * round
 * center
 * spinner
 */
/** @desc renders various progress bar and loading components */
export declare class NvProgress {
    /** @desc container elemnt */
    container: HTMLElement;
    /** @desc bar elemnt */
    barElement: HTMLElement;
    /** @desc count text elemnt */
    countElement: HTMLElement;
    /** @desc stored bar tate */
    previousState: string;
    /** @desc whether or not the progress bar is animating */
    animate: boolean;
    /** @desc animation timer */
    animator: any;
    /** @desc stored bar position/scale */
    barPositions: {
        scale: number;
        left: number;
    };
    /** @desc component element */
    element: HTMLElement;
    /** @desc main timer method, requestAnimationFrame or setTimeout */
    timer: string;
    /** @desc state, either determinate or indeterminate */
    state: string;
    /** @desc type of progress bar, current;ly only bar */
    type: string;
    /** @desc text to display above the progress */
    message: string;
    /** @desc whether or not to show progress value text */
    showCount: boolean;
    /** @desc value of the progress, 0-100 */
    value: number;
    /** @desc start */
    start: number;
    /** @desc speed of animations */
    speed: number;
    /** @desc resets the progress bar */
    reset(): Promise<void>;
    /** @desc determines the start position of the progress bar */
    readonly _start: number;
    /** @desc determines the value of the progress bar */
    readonly _value: number;
    /** @desc determines the speed */
    readonly _speed: number;
    /**
     * @desc returns an easing array between 2 values
     * @param startValue the starting value
     * @param endValue the ending value
     * @param frames the number of frames as duration
     */
    easeArray(startValue: number, endValue: number, frames: number): number[];
    /** @desc timer function that updates the bar position/dimension settings */
    updateBarPositions(): void;
    /**
     * @desc updates the progress bar to the provided scale and position
     * @param scale size, between 0-1
     * @param left  left position, between 0-100
     */
    update(scale: any, left: any): void;
    /** @desc animation for scale adjustment */
    animateScale(): void;
    /** @desc animation from indeterminate to determinate states */
    animateToDeterminate(): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
