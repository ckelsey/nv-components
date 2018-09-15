import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import './stencil.core';

import '@ionic/core';
import 'ionicons';


import {
  Event,
} from './stencil.core';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface MaterialIcon {
      'color': string;
      'getIcon': (key: string) => string;
      'icons': () => { [key: string]: string; };
      'size': string;
      'type': string;
    }

    interface NvButton {
      'doBlur': () => void;
      'doClick': () => void;
      'doFocus': () => void;
      'doMouseDown': () => void;
      'doMouseEnter': () => void;
      'doMouseLeave': () => void;
      'doMouseUp': () => void;
      'type': string | undefined;
    }

    interface NvCheckboxArray {
      'disabled': boolean;
      'label': string;
      'parentDisabled': boolean;
      'selfUpdate': boolean;
      'values': any[] | string;
      'whenUpdate': Function;
    }

    interface NvCheckbox {
      'disabled': boolean;
      'label': string;
      'parentDisabled': boolean;
      'selfUpdate': boolean;
      'toggle': () => boolean;
      'value': boolean | string;
      'whenUpdate': Function;
    }

    interface NvImage {
      'cover': boolean;
      'placeholder': string;
      'url': string;
      'whenError': Function | undefined;
      'whenLoad': Function | undefined;
      'whenMeta': Function | undefined;
    }

    interface NvInput {
      'assistiveText': string;
      'characterCount': boolean;
      'classes': string;
      'clear': boolean;
      'doBlur': () => void;
      'doClick': () => void;
      'doError': (message: string) => void;
      'doFocus': () => void;
      'doInput': (e?: Event) => boolean;
      'error': boolean;
      'filterOptions': boolean;
      'helpText': string;
      'icon': string;
      'label': string;
      'max': number | undefined;
      'min': number | undefined;
      'multiline': boolean;
      'optionClicked': (index: number) => void;
      'options': Array<string | number> | string | undefined;
      'required': boolean;
      'selfUpdate': boolean;
      'step': number | undefined;
      'type': string;
      'validator': Function | undefined;
      'value': string | number;
      'whenBlur': Function | undefined;
      'whenError': Function | undefined;
      'whenFocus': Function | undefined;
      'whenUpdate': Function | undefined;
    }

    interface NvMenu {
      'active': boolean;
      'anchor': string | HTMLElement;
      'focusNextOption': () => void;
      'focusOption': (index: string | number) => void;
      'focusPreviousOption': () => void;
      'focusedOption': number | undefined;
      'optionHoverStyles': string | {};
      'optionStyles': string | {};
      'options': string | Array<string>;
      'position': string;
      'selectOption': (index: string | number) => void;
      'whenActivated': Function;
      'whenClicked': Function;
      'whenDeactivated': Function;
      'width': string;
    }

    interface NvProgress {
      'message': string;
      'reset': () => void;
      'showCount': boolean;
      'speed': number;
      'start': number;
      'state': string;
      'timer': string;
      'type': string;
      'value': number;
    }

    interface NvPulse {
      'highlight': boolean;
      'startPulse': () => void;
      'stopPulse': () => void;
    }

    interface NvRadio {
      'disabled': boolean;
      'options': Array<RadioOption> | string;
      'selfUpdate': boolean;
      'whenUpdate': Function;
    }

    interface NvRipple {
      'doRipple': () => Promise<{}>;
      'highlight': boolean;
      'startRipple': () => Promise<{}>;
      'stopRipple': () => Promise<{}>;
    }

    interface NvSlider {
      'disabled': boolean;
      'label': string;
      'max': number;
      'min': number;
      'selfUpdate': boolean;
      'showInput': boolean;
      'step': number | undefined;
      'value': number | undefined;
      'values': Array<number> | string | undefined;
      'whenUpdate': Function;
    }

    interface NvSwitch {
      'disabled': boolean;
      'label': string;
      'selfUpdate': boolean;
      'toggle': () => boolean;
      'value': boolean | string;
      'whenUpdate': Function;
    }

    interface NvTabContent {

    }

    interface NvTabs {
      'doOpen': (index: number, e?: Event) => boolean;
      'initial': number;
    }

    interface NvTooltip {
      'active': boolean;
      'boxShadow': boolean;
      'delay': number;
      'hideAfter': number;
      'offset': number;
      'padding': number;
      'position': string;
      'triggerElement': HTMLElement | string;
      'triggerOn': string;
      'updateInnerHTML': (html: string) => void;
      'width': string;
    }

    interface NvWave {
      'doPulse': () => void;
      'doWave': (e?: any) => Promise<{}>;
      'highlight': boolean;
      'reset': () => void;
      'startWave': (e?: any) => Promise<{}>;
      'stopWave': (e?: any) => Promise<{}>;
    }
  }


    interface HTMLMaterialIconElement extends StencilComponents.MaterialIcon, HTMLStencilElement {}

    var HTMLMaterialIconElement: {
      prototype: HTMLMaterialIconElement;
      new (): HTMLMaterialIconElement;
    };
    

    interface HTMLNvButtonElement extends StencilComponents.NvButton, HTMLStencilElement {}

    var HTMLNvButtonElement: {
      prototype: HTMLNvButtonElement;
      new (): HTMLNvButtonElement;
    };
    

    interface HTMLNvCheckboxArrayElement extends StencilComponents.NvCheckboxArray, HTMLStencilElement {}

    var HTMLNvCheckboxArrayElement: {
      prototype: HTMLNvCheckboxArrayElement;
      new (): HTMLNvCheckboxArrayElement;
    };
    

    interface HTMLNvCheckboxElement extends StencilComponents.NvCheckbox, HTMLStencilElement {}

    var HTMLNvCheckboxElement: {
      prototype: HTMLNvCheckboxElement;
      new (): HTMLNvCheckboxElement;
    };
    

    interface HTMLNvImageElement extends StencilComponents.NvImage, HTMLStencilElement {}

    var HTMLNvImageElement: {
      prototype: HTMLNvImageElement;
      new (): HTMLNvImageElement;
    };
    

    interface HTMLNvInputElement extends StencilComponents.NvInput, HTMLStencilElement {}

    var HTMLNvInputElement: {
      prototype: HTMLNvInputElement;
      new (): HTMLNvInputElement;
    };
    

    interface HTMLNvMenuElement extends StencilComponents.NvMenu, HTMLStencilElement {}

    var HTMLNvMenuElement: {
      prototype: HTMLNvMenuElement;
      new (): HTMLNvMenuElement;
    };
    

    interface HTMLNvProgressElement extends StencilComponents.NvProgress, HTMLStencilElement {}

    var HTMLNvProgressElement: {
      prototype: HTMLNvProgressElement;
      new (): HTMLNvProgressElement;
    };
    

    interface HTMLNvPulseElement extends StencilComponents.NvPulse, HTMLStencilElement {}

    var HTMLNvPulseElement: {
      prototype: HTMLNvPulseElement;
      new (): HTMLNvPulseElement;
    };
    

    interface HTMLNvRadioElement extends StencilComponents.NvRadio, HTMLStencilElement {}

    var HTMLNvRadioElement: {
      prototype: HTMLNvRadioElement;
      new (): HTMLNvRadioElement;
    };
    

    interface HTMLNvRippleElement extends StencilComponents.NvRipple, HTMLStencilElement {}

    var HTMLNvRippleElement: {
      prototype: HTMLNvRippleElement;
      new (): HTMLNvRippleElement;
    };
    

    interface HTMLNvSliderElement extends StencilComponents.NvSlider, HTMLStencilElement {}

    var HTMLNvSliderElement: {
      prototype: HTMLNvSliderElement;
      new (): HTMLNvSliderElement;
    };
    

    interface HTMLNvSwitchElement extends StencilComponents.NvSwitch, HTMLStencilElement {}

    var HTMLNvSwitchElement: {
      prototype: HTMLNvSwitchElement;
      new (): HTMLNvSwitchElement;
    };
    

    interface HTMLNvTabContentElement extends StencilComponents.NvTabContent, HTMLStencilElement {}

    var HTMLNvTabContentElement: {
      prototype: HTMLNvTabContentElement;
      new (): HTMLNvTabContentElement;
    };
    

    interface HTMLNvTabsElement extends StencilComponents.NvTabs, HTMLStencilElement {}

    var HTMLNvTabsElement: {
      prototype: HTMLNvTabsElement;
      new (): HTMLNvTabsElement;
    };
    

    interface HTMLNvTooltipElement extends StencilComponents.NvTooltip, HTMLStencilElement {}

    var HTMLNvTooltipElement: {
      prototype: HTMLNvTooltipElement;
      new (): HTMLNvTooltipElement;
    };
    

    interface HTMLNvWaveElement extends StencilComponents.NvWave, HTMLStencilElement {}

    var HTMLNvWaveElement: {
      prototype: HTMLNvWaveElement;
      new (): HTMLNvWaveElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'material-icon': JSXElements.MaterialIconAttributes;
    'nv-button': JSXElements.NvButtonAttributes;
    'nv-checkbox-array': JSXElements.NvCheckboxArrayAttributes;
    'nv-checkbox': JSXElements.NvCheckboxAttributes;
    'nv-image': JSXElements.NvImageAttributes;
    'nv-input': JSXElements.NvInputAttributes;
    'nv-menu': JSXElements.NvMenuAttributes;
    'nv-progress': JSXElements.NvProgressAttributes;
    'nv-pulse': JSXElements.NvPulseAttributes;
    'nv-radio': JSXElements.NvRadioAttributes;
    'nv-ripple': JSXElements.NvRippleAttributes;
    'nv-slider': JSXElements.NvSliderAttributes;
    'nv-switch': JSXElements.NvSwitchAttributes;
    'nv-tab-content': JSXElements.NvTabContentAttributes;
    'nv-tabs': JSXElements.NvTabsAttributes;
    'nv-tooltip': JSXElements.NvTooltipAttributes;
    'nv-wave': JSXElements.NvWaveAttributes;
    }
  }

  namespace JSXElements {

    export interface MaterialIconAttributes extends HTMLAttributes {
      'color'?: string;
      'size'?: string;
      'type'?: string;
    }

    export interface NvButtonAttributes extends HTMLAttributes {
      'onWhenblur'?: (event: CustomEvent) => void;
      'onWhenclick'?: (event: CustomEvent) => void;
      'onWhenfocus'?: (event: CustomEvent) => void;
      'onWhenmousedown'?: (event: CustomEvent) => void;
      'onWhenmouseenter'?: (event: CustomEvent) => void;
      'onWhenmouseleave'?: (event: CustomEvent) => void;
      'onWhenmouseup'?: (event: CustomEvent) => void;
      'type'?: string | undefined;
    }

    export interface NvCheckboxArrayAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'label'?: string;
      'onWhenupdate'?: (event: CustomEvent) => void;
      'parentDisabled'?: boolean;
      'selfUpdate'?: boolean;
      'values'?: any[] | string;
      'whenUpdate'?: Function;
    }

    export interface NvCheckboxAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'label'?: string;
      'onWhenupdate'?: (event: CustomEvent) => void;
      'parentDisabled'?: boolean;
      'selfUpdate'?: boolean;
      'value'?: boolean | string;
      'whenUpdate'?: Function;
    }

    export interface NvImageAttributes extends HTMLAttributes {
      'cover'?: boolean;
      'onWhenerror'?: (event: CustomEvent) => void;
      'onWhenload'?: (event: CustomEvent) => void;
      'onWhenmeta'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'url'?: string;
      'whenError'?: Function | undefined;
      'whenLoad'?: Function | undefined;
      'whenMeta'?: Function | undefined;
    }

    export interface NvInputAttributes extends HTMLAttributes {
      'assistiveText'?: string;
      'characterCount'?: boolean;
      'classes'?: string;
      'clear'?: boolean;
      'error'?: boolean;
      'filterOptions'?: boolean;
      'helpText'?: string;
      'icon'?: string;
      'label'?: string;
      'max'?: number | undefined;
      'min'?: number | undefined;
      'multiline'?: boolean;
      'onWhenblur'?: (event: CustomEvent) => void;
      'onWhenclick'?: (event: CustomEvent) => void;
      'onWhenerror'?: (event: CustomEvent) => void;
      'onWhenfocus'?: (event: CustomEvent) => void;
      'onWheninput'?: (event: CustomEvent) => void;
      'onWhenkeydown'?: (event: CustomEvent) => void;
      'onWhenkeypress'?: (event: CustomEvent) => void;
      'onWhenkeyup'?: (event: CustomEvent) => void;
      'onWhensubmit'?: (event: CustomEvent) => void;
      'onWhenupdate'?: (event: CustomEvent) => void;
      'options'?: Array<string | number> | string | undefined;
      'required'?: boolean;
      'selfUpdate'?: boolean;
      'step'?: number | undefined;
      'type'?: string;
      'validator'?: Function | undefined;
      'value'?: string | number;
      'whenBlur'?: Function | undefined;
      'whenError'?: Function | undefined;
      'whenFocus'?: Function | undefined;
      'whenUpdate'?: Function | undefined;
    }

    export interface NvMenuAttributes extends HTMLAttributes {
      'active'?: boolean;
      'anchor'?: string | HTMLElement;
      'focusedOption'?: number | undefined;
      'onWhenClosed'?: (event: CustomEvent) => void;
      'onWhenOpened'?: (event: CustomEvent) => void;
      'onWhenOptionClicked'?: (event: CustomEvent) => void;
      'optionHoverStyles'?: string | {};
      'optionStyles'?: string | {};
      'options'?: string | Array<string>;
      'position'?: string;
      'whenActivated'?: Function;
      'whenClicked'?: Function;
      'whenDeactivated'?: Function;
      'width'?: string;
    }

    export interface NvProgressAttributes extends HTMLAttributes {
      'message'?: string;
      'showCount'?: boolean;
      'speed'?: number;
      'start'?: number;
      'state'?: string;
      'timer'?: string;
      'type'?: string;
      'value'?: number;
    }

    export interface NvPulseAttributes extends HTMLAttributes {
      'highlight'?: boolean;
    }

    export interface NvRadioAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'onChange'?: (event: CustomEvent) => void;
      'options'?: Array<RadioOption> | string;
      'selfUpdate'?: boolean;
      'whenUpdate'?: Function;
    }

    export interface NvRippleAttributes extends HTMLAttributes {
      'highlight'?: boolean;
    }

    export interface NvSliderAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'label'?: string;
      'max'?: number;
      'min'?: number;
      'onChange'?: (event: CustomEvent) => void;
      'selfUpdate'?: boolean;
      'showInput'?: boolean;
      'step'?: number | undefined;
      'value'?: number | undefined;
      'values'?: Array<number> | string | undefined;
      'whenUpdate'?: Function;
    }

    export interface NvSwitchAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'label'?: string;
      'onChange'?: (event: CustomEvent) => void;
      'selfUpdate'?: boolean;
      'value'?: boolean | string;
      'whenUpdate'?: Function;
    }

    export interface NvTabContentAttributes extends HTMLAttributes {

    }

    export interface NvTabsAttributes extends HTMLAttributes {
      'initial'?: number;
    }

    export interface NvTooltipAttributes extends HTMLAttributes {
      'active'?: boolean;
      'boxShadow'?: boolean;
      'delay'?: number;
      'hideAfter'?: number;
      'offset'?: number;
      'onWhenClosed'?: (event: CustomEvent) => void;
      'onWhenOpened'?: (event: CustomEvent) => void;
      'padding'?: number;
      'position'?: string;
      'triggerElement'?: HTMLElement | string;
      'triggerOn'?: string;
      'width'?: string;
    }

    export interface NvWaveAttributes extends HTMLAttributes {
      'highlight'?: boolean;
    }
  }

  interface HTMLElementTagNameMap {
    'material-icon': HTMLMaterialIconElement
    'nv-button': HTMLNvButtonElement
    'nv-checkbox-array': HTMLNvCheckboxArrayElement
    'nv-checkbox': HTMLNvCheckboxElement
    'nv-image': HTMLNvImageElement
    'nv-input': HTMLNvInputElement
    'nv-menu': HTMLNvMenuElement
    'nv-progress': HTMLNvProgressElement
    'nv-pulse': HTMLNvPulseElement
    'nv-radio': HTMLNvRadioElement
    'nv-ripple': HTMLNvRippleElement
    'nv-slider': HTMLNvSliderElement
    'nv-switch': HTMLNvSwitchElement
    'nv-tab-content': HTMLNvTabContentElement
    'nv-tabs': HTMLNvTabsElement
    'nv-tooltip': HTMLNvTooltipElement
    'nv-wave': HTMLNvWaveElement
  }

  interface ElementTagNameMap {
    'material-icon': HTMLMaterialIconElement;
    'nv-button': HTMLNvButtonElement;
    'nv-checkbox-array': HTMLNvCheckboxArrayElement;
    'nv-checkbox': HTMLNvCheckboxElement;
    'nv-image': HTMLNvImageElement;
    'nv-input': HTMLNvInputElement;
    'nv-menu': HTMLNvMenuElement;
    'nv-progress': HTMLNvProgressElement;
    'nv-pulse': HTMLNvPulseElement;
    'nv-radio': HTMLNvRadioElement;
    'nv-ripple': HTMLNvRippleElement;
    'nv-slider': HTMLNvSliderElement;
    'nv-switch': HTMLNvSwitchElement;
    'nv-tab-content': HTMLNvTabContentElement;
    'nv-tabs': HTMLNvTabsElement;
    'nv-tooltip': HTMLNvTooltipElement;
    'nv-wave': HTMLNvWaveElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;