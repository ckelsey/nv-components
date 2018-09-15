import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/** @desc gracefully renders an image with an optional placeholder */
export declare class NvImage {
    /** @desc image container element */
    imageContainer: HTMLElement;
    /** @desc image element */
    img: HTMLImageElement;
    /** @desc proxy for source url */
    _src: string;
    /** @desc image width */
    width: number;
    /** @desc image height */
    height: number;
    /** @desc timer for getting image dimensions */
    timer: any;
    /** @desc called when image is loaded */
    whenload: EventEmitter;
    /** @desc called when image meta is loaded */
    whenmeta: EventEmitter;
    /** @desc called when an error occurs loading the image */
    whenerror: EventEmitter;
    /** @desc called when an error occurs loading the image */
    whenError: Function | undefined;
    /** @desc called when an error occurs loading the image */
    whenMeta: Function | undefined;
    /** @desc called when image is loaded */
    whenLoad: Function | undefined;
    /** @desc whether or not the image should act like css background size cover */
    cover: boolean;
    /** @desc url to the image */
    url: string;
    /** @desc url to the placeholder image */
    placeholder: string;
    /** @desc handles image error */
    imageError(): void;
    /** @desc handles image loaded */
    imageLoaded(): void;
    /** @desc checks to see if image dimensions are available and if so set them */
    setDimensions(): Promise<{}>;
    /** @desc loads the image */
    loadImage(): void;
    /** @desc sets the cover class */
    setFit(): void;
    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate(): void;
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad(): void;
    /** @desc lifecycle hook for when component is rendered */
    render(): JSX.Element;
}
