declare module "*.json" {
    const content: string;
    export default content;
}

declare module "*.scss" {
    const content: string;
    export default content;
}

interface RadioOption {
    value: any
    label: string
    selected: boolean
    disabled?: boolean
    pulse?: any
    ripple?: any
    input?: HTMLInputElement
    labelElement?: HTMLElement
    icon?: any
}