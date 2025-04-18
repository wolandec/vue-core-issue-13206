<template>
  <ui-container-ce
    :is-shown="isShown"
  >
    <slot></slot>
  </ui-container-ce>
</template>

<script setup>

import { defineCustomElement } from 'vue';
import UIContainer from './UIContainer.vue';

const UIContainerElement = defineCustomElement(UIContainer, { shadowRoot: false });

defineOptions({
  name: 'UIContainerCEWrapper'
});

const props = defineProps({
  isShown: {
    type: Boolean,
    default: true
  }
});

  if (!customElements.get('ui-container-ce')) {
    customElements.define('ui-container-ce', UIContainerElement);
  }
</script>

<style scoped>
/* Any additional styling specific to the wrapper can go here */
</style>
