import { UIContainer } from '../../ui-vue3/dist/ui-vue3.js';
import { defineCustomElement } from 'vue';

// Create custom elements with shadowRoot: false
const UIContainerElement = defineCustomElement(UIContainer, { shadowRoot: false });

// Export the custom element constructors
export { UIContainerElement };
