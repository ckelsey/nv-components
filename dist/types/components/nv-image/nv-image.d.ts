import '../../stencil.core';
export declare class NvImage {
    imageContainer: HTMLElement;
    img: HTMLImageElement;
    _src: string;
    width: number;
    height: number;
    timer: any;
    cover: boolean;
    url: string;
    imageError(): void;
    imageLoaded(): void;
    setDimensions(): Promise<{}>;
    loadImage(): void;
    setFit(): void;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
