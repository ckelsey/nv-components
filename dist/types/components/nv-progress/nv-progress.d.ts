import '../../stencil.core';
/**
 * round
 * center
 * spinner
 */
export declare class NvProgress {
    container: HTMLElement;
    barElement: HTMLElement;
    countElement: HTMLElement;
    previousState: string;
    animate: boolean;
    animator: any;
    barPositions: {
        scale: number;
        left: number;
    };
    element: HTMLElement;
    timer: string;
    state: string;
    type: string;
    message: string;
    showCount: boolean;
    value: number;
    start: number;
    speed: number;
    reset(): void;
    readonly _start: number;
    readonly _value: number;
    readonly _speed: number;
    easeArray(startValue: number, endValue: number, frames: number): number[];
    updateBarPositions(): void;
    update(scale: any, left: any): void;
    animateScale(): void;
    animateToDeterminate(): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
