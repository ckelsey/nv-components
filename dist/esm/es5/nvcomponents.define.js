// nvcomponents: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './nvcomponents.core.js';
import {
  MaterialIcon,
  NvButton,
  NvCheckbox,
  NvCheckboxArray,
  NvImage,
  NvInput,
  NvMenu,
  NvProgress,
  NvPulse,
  NvRadio,
  NvRipple,
  NvSlider,
  NvSwitch,
  NvTabContent,
  NvTabs,
  NvTootltip,
  NvWave
} from './nvcomponents.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MaterialIcon,
    NvButton,
    NvCheckbox,
    NvCheckboxArray,
    NvImage,
    NvInput,
    NvMenu,
    NvProgress,
    NvPulse,
    NvRadio,
    NvRipple,
    NvSlider,
    NvSwitch,
    NvTabContent,
    NvTabs,
    NvTootltip,
    NvWave
  ], opts);
}