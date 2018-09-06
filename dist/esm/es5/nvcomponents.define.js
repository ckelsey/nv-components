// nvcomponents: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './nvcomponents.core.js';
import {
  MaterialIcon,
  NvCheckbox,
  NvCheckboxArray,
  NvImage,
  NvMenu,
  NvProgress,
  NvTabContent,
  NvTabs,
  NvTootltip
} from './nvcomponents.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MaterialIcon,
    NvCheckbox,
    NvCheckboxArray,
    NvImage,
    NvMenu,
    NvProgress,
    NvTabContent,
    NvTabs,
    NvTootltip
  ], opts);
}