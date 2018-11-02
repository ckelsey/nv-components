import '../../stencil.core';
/** @desc renders a material design icon with given color, size, and type */
export declare class MaterialIcon {
    /** @desc The key of the icon to use */
    type: string;
    /** @desc color of icon, defaults to inherited color */
    color: string;
    /** @desc size of icon */
    size: string;
    /** @desc icon strings object */
    private iconJSON;
    /** @desc The icon svg string */
    readonly svgIcon: string;
    /** @desc The styles object for the icon */
    readonly styles: {
        [key: string]: string;
    };
    /** @desc renders the component markup */
    render(): JSX.Element;
    /**
     * @desc As many of the material icons are the same but go by different names, this function maps them to one name to save on space
     * @param key The key to get
     * */
    getIcon(key: string): Promise<any>;
    /** @desc Returns the icon data JSON */
    icons(): Promise<{
        [key: string]: string;
    }>;
}
