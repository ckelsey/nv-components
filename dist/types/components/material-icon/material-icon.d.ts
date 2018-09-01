import '../../stencil.core';
export declare class MaterialIcon {
    type: string;
    color: string;
    size: string;
    private iconJSON;
    readonly svgIcon: any;
    readonly styles: {
        color: string;
        height: string;
        width: string;
    };
    render(): JSX.Element;
    iconsToJson(): void;
    findDupes(): void;
    getIcon(key: any): any;
    icons(): any;
}
